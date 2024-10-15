"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GiftCardsPage() {
  const [giftCardType, setGiftCardType] = useState('')
  const [amount, setAmount] = useState('')
  const [cardDetails, setCardDetails] = useState('')

  const handleExchange = () => {
    // Implement gift card exchange logic here
    console.log(`Exchanging ${giftCardType} gift card worth ${amount}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gift Card Exchange</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Exchange Your Gift Cards</CardTitle>
          <CardDescription>Convert your gift cards to cash or cryptocurrency quickly and easily.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Gift Card Type</label>
              <Select value={giftCardType} onValueChange={setGiftCardType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gift card type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amazon">Amazon</SelectItem>
                  <SelectItem value="itunes">iTunes</SelectItem>
                  <SelectItem value="googleplay">Google Play</SelectItem>
                  <SelectItem value="steam">Steam</SelectItem>
                  <SelectItem value="walmart">Walmart</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Card Value</label>
              <Input
                type="number"
                placeholder="Enter card value"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Card Details</label>
              <Textarea
                placeholder="Enter gift card number and PIN (if applicable)"
                value={cardDetails}
                onChange={(e) => setCardDetails(e.target.value)}
              />
            </div>
            <Button onClick={handleExchange}>Exchange Gift Card</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Exchange Rates</h2>
        {/* Add a table component here to display current gift card exchange rates */}
      </div>
    </div>
  )
}