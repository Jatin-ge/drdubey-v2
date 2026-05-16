import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullNameInput, emailInput, phoneInput, messageInput } = await req.json();

    if (!fullNameInput || !emailInput || !messageInput) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contact = await db.contactUs.create({
      data: {
        name: fullNameInput,
        email: emailInput,
        phone: phoneInput || null,
        message: messageInput,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error("[CONTACT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
