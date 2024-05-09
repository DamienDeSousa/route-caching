import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { param: string } }
) {
  console.log("I'm not a cached route because I have a param in my url!");

  return NextResponse.json({
    message: `Hello from dynamic route with param ${params.param}!`,
  });
}
