import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  console.log(
    "I'm a dynamic route, so you will see this message in logs every time I'm called"
  );

  return NextResponse.json({ message: "Hello from a dynamic route!" });
}
