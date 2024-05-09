import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { param: string } }
) {
  console.log("I'm a dynamic route because I have a param in my url!");

  return NextResponse.json({
    message: `Hello from dynamic route with param ${params.param}!`,
  });
}
