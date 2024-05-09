import { NextResponse } from "next/server";

export async function GET() {
  console.log("I'm a cached route, so you wont see this message in logs");

  return NextResponse.json({ message: "Hello from a cached route!" });
}
