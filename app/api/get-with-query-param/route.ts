import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("I'm not a cached route because I have query param in my url!");

  const url = request.nextUrl;
  console.log(url.searchParams);
  const queryParams = {} as Record<string, string>;
  url.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  console.log(`Query params: ${JSON.stringify(queryParams)}`);

  return NextResponse.json({
    message: `Hello from route with query param ${JSON.stringify(
      queryParams
    )} !`,
  });
}
