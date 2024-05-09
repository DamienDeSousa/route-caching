import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { param: string } }
) {
  console.log("Did you see me ?");

  return NextResponse.json({
    message: `Hello from a cached route with param ${params.param}!`,
  });
}
