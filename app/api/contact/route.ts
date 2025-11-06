import { NextRequest, NextResponse } from 'next/server'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM
const toWhatsApp = process.env.TWILIO_WHATSAPP_TO

if (!accountSid || !authToken || !fromWhatsApp || !toWhatsApp) {
  throw new Error('Missing Twilio environment variables')
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Subject:* ${subject}
*Message:*
${message}

---
Sent from website contact form`

    // Send WhatsApp message
    const twilioResponse = await client.messages.create({
      from: fromWhatsApp,
      to: toWhatsApp,
      body: whatsappMessage,
    })

    console.log('WhatsApp message sent:', twilioResponse.sid)

    return NextResponse.json(
      { success: true, messageId: twilioResponse.sid },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
