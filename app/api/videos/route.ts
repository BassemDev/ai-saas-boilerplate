import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env['REPLICATE_API_KEY']
})

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPremium = await checkSubscription();
    
    if (!freeTrial && !isPremium) {
      return new NextResponse("Free trial has expired", {status: 403})
    }

    if (!isPremium) {
      await increaseApiLimit();
    }

    const input = {
      prompt,
      num_frames: 50
    };
  
  const response = await replicate.run("cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755", { input });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Video error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
