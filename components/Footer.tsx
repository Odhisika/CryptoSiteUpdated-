import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              CryptoExchange
            </Link>
            <p className="text-sm">
              Your trusted platform for cryptocurrency trading, gift card exchanges, bill payments, and mobile airtime purchases.
            </p>
            <div className="flex space-x-6">
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/trading" className="text-sm hover:text-primary">
                      Crypto Trading
                    </Link>
                  </li>
                  <li>
                    <Link href="/gift-cards" className="text-sm hover:text-primary">
                      Gift Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="/bill-payments" className="text-sm hover:text-primary">
                      Bill Payments
                    </Link>
                  </li>
                  <li>
                    <Link href="/airtime" className="text-sm hover:text-primary">
                      Mobile Airtime
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/faq" className="text-sm hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm hover:text-primary">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm hover:text-primary">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-muted pt-8">
          <p className="text-sm text-center">&copy; 2023 CryptoExchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer