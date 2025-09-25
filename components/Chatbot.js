'use client'
import { useEffect } from 'react'

export default function Chatbot() {
  useEffect(() => {
    window.BASECHATBOT_DOMAIN = "https://marketing.web-designs.store"
    window.BASECHATBOT_ID_CHATBOT = "X9N2N-A7P5G-O0U2O-N9H2N"
    
    const script = document.createElement("script")
    script.src = "https://marketing.web-designs.store/chatbot.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return null
}