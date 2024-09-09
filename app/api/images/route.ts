import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "1024X1024" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Promopt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount are required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    // Add the subscription check and handler to update user
    const freeTrial = await checkApiLimit();
    // Add check for the user account subscription
    const isPremium = await checkSubscription();

    if (!freeTrial && !isPremium) {
      return new NextResponse("Free trial has expired", {status: 403})
    }

    if (!isPremium) {
      await increaseApiLimit();
    }

    const response = await client.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
