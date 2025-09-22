import './globals.css'

export const metadata = {
  title: 'Afya Ray Wellness',
  description: 'Photo/Light Therapy for Natural Body Recovery'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}