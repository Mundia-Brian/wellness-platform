import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    const formspreeId = process.env.FORMSPREE_FORM_ID
    if (!formspreeId) {
      console.error('FORMSPREE_FORM_ID environment variable not set')
      return NextResponse.json(
        { error: 'Booking service not configured' },
        { status: 500 }
      )
    }
    
    // Send to ken@afya.top via Formspree
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _replyto: formData.email,
        _subject: `New Booking Request from ${formData.name}`,
        _to: 'ken@afya.top',
      }),
    })
    
    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      throw new Error('Failed to send booking request')
    }
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    )
  }
}