import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { CartContextProvider } from './context/cartStore';
import Navbar from '@/components/navigation/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'MAGMA | Online shopping for your tech accessories',
  description: 'Explore the premium quality cases for your tech accessories imagined and created by MAGMA. Take a look at our phone case collections and purchase online. ',
  icons: {
    icon: ["/favicon.ico"]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='body' suppressHydrationWarning={true}>
        <CartContextProvider>
          <nav>
              <Navbar />
          </nav>
            {children}
          <footer>
              <Footer />
          </footer>
          <Toaster position='bottom-right' toastOptions={{style: {margin: '4rem'}}} />
        </CartContextProvider>
      </body>
    </html>
  )
}
