import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  console.log(
    "I'm a cached route with 0 second expiration, so you will see this message in logs"
  );

  return NextResponse.json({ message: "Hello from a cached route!" });
}
