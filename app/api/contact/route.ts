import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.json();

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully!",
  });
}