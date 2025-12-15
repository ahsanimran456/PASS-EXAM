import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, examType, message } = body

    // Using Web3Forms - Free email service (no server setup needed)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
        to: "info@topexamhelpers.com",
        from_name: "Top Exam Helpers Website",
        subject: `New Inquiry from ${name}${examType ? ` - ${examType}` : ""}`,
        name: name,
        email: email,
        phone: phone || "Not provided",
        exam_type: examType || "Not specified",
        message: message,
        // Format the email nicely
        botcheck: "",
      }),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully!" })
    } else {
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}

