import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    console.log("Contact form submission received:", { name, email, message });

    // In a production environment, you would integrate a service like Resend, SendGrid,
    // or nodemailer to route these submissions to sales@goldengrainglobal.com.

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error: any) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
