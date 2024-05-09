import { options } from "@/helpers/next-auth/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(options);

  console.log(`I'm a dynamic route with session: ${JSON.stringify(session)}`);

  return NextResponse.json({
    message: `Hello from dynamic route with session: ${JSON.stringify(
      session
    )}`,
  });
}
