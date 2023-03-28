import Footer from '@/components/Footer';
import './global.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <Footer/>
      </body>
    </html>
  )
}
