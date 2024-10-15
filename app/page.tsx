import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Gift, Banknote, Smartphone } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to CryptoExchange</h1>
        <p className="text-xl mb-8">Your trusted platform for cryptocurrency trading, gift card exchanges, bill payments, and mobile airtime purchases.</p>
        <Button asChild size="lg">
          <Link href="/register">Get Started</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Crypto Trading</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Trade popular cryptocurrencies like Bitcoin, Ethereum, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gift Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Exchange various gift cards for cash or cryptocurrency.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bill Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pay your utility bills directly from your crypto wallet.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mobile Airtime</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Purchase mobile airtime using cryptocurrency.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CryptoExchange?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p>Advanced encryption and two-factor authentication to keep your assets safe.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
            <p>Intuitive design for seamless trading and transactions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Our dedicated team is always ready to assist you.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and start your crypto journey with CryptoExchange.</p>
        <Button asChild size="lg">
          <Link href="/register">Create Your Account</Link>
        </Button>
      </section>
    </div>
  )
}