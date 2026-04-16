import { NextResponse } from "next/server";
import { Resend } from "resend";

// Intialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'GROSHA Contact <contact@goldengrainglobal.com>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'bbido761@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .container { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #eae9db; }
              .header { background-color: #366b7a; padding: 40px 20px; text-align: center; }
              .content { padding: 40px; color: #38382f; line-height: 1.6; }
              .footer { background-color: #fcf9ef; padding: 20px; text-align: center; font-size: 12px; color: #9f9d96; }
              .label { font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; color: #366b7a; margin-bottom: 8px; display: block; }
              .field { margin-bottom: 24px; }
              .value { font-size: 16px; margin: 0; }
              .message-box { background-color: #fcf9ef; padding: 24px; border-radius: 12px; border: 1px solid #eae9db; font-style: italic; }
            </style>
          </head>
          <body style="background-color: #fdffd8; padding: 20px;">
            <div class="container">
              <div class="header">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 0.2em; text-transform: uppercase;">GROSHA</h1>
                <p style="color: rgba(255,255,255,0.7); margin-top: 5px; font-size: 12px; letter-spacing: 0.1em;">PREMIUM FROZEN FOODS</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From</span>
                  <p class="value"><strong>${name}</strong> (${email})</p>
                </div>
                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br/>')}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>© 2024 GROSHA Frozen Foods. All rights reserved.</p>
                <p>This inquiry was sent from the official GROSHA contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Message sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
