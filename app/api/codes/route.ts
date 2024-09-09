import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const instructionMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a Senior software developer and an expert in teaching code. You must only answer in markdown snippets. Use code comment or explain shortly how this works."
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Message are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPremium = await checkSubscription();

    if (!freeTrial && !isPremium) {
      return new NextResponse("Free trial has expired", {status: 403})
    }

    if (!isPremium) {
      await increaseApiLimit();
    }

    const response = await client.chat.completions.create({
      messages: [instructionMessage, ...messages],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("conversation error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
