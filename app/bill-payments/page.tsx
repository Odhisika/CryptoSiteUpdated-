"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BillPaymentsPage() {
  const [billType, setBillType] = useState('')
  const [amount, setAmount] = useState('')
  const [accountNumber, setAccountNumber] = useState('')

  const handlePayment = () => {
    // Implement bill payment logic here
    console.log(`Paying ${amount} for ${billType} bill, account number: ${accountNumber}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bill Payments</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Pay Your Bills</CardTitle>
          <CardDescription>Use your crypto balance to pay various bills quickly and securely.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bill Type</label>
              <Select value={billType} onValueChange={setBillType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bill type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electricity">Electricity</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="internet">Internet</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="cable">Cable TV</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Account Number</label>
              <Input
                type="text"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <Button onClick={handlePayment}>Pay Bill</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment History</h2>
        {/* Add a table component here to display recent bill payments */}
      </div>
    </div>
  )
}