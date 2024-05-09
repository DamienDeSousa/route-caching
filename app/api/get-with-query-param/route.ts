import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("I'm a dynamic route because I have query param in my url!");

  const url = request.nextUrl;
  const queryParams = {} as Record<string, string>;
  url.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return NextResponse.json({
    message: `Hello from route with query param ${JSON.stringify(
      queryParams
    )} !`,
  });
}
