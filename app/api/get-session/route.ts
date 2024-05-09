import { options } from "@/helpers/next-auth/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(options);

  console.log(`current session : ${JSON.stringify(session)}`);

  return NextResponse.json({
    message: JSON.stringify(session),
  });
}
