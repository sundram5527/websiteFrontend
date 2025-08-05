// hosting link:https://website-frontend-alpha-two.vercel.app/
// Updated App.jsx for Trading Learning Website with Contact Us
import React, { useEffect, useState } from 'react';
import axios from 'axios'; //install axios , shadcn, card & button from shadcn, lucide-react
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, TrendingUp, DollarSign, BarChart2 } from "lucide-react";

function App() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('https://websitebackend-six.vercel.app/api/contact').then((res) => setEvents(res.data));
  }, []);




  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios.post('https://websitebackend-six.vercel.app/api/contact', contact).then((res) => {
      setStatus('Message sent successfully!');
      setContact({ name: '', email: '', message: '' });
    }).catch(() => setStatus('Failed to send message.'));
  };

  return (
  <div>
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to PrimeTrades</h1>
        <p className="text-lg mb-6">Your trusted partner in stock market trading and investment strategy.</p>
        <Button className="bg-white text-black">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <TrendingUp className="text-blue-600 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Stock Advisory</h3>
              <p>Get expert recommendations based on market analysis.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <DollarSign className="text-green-600 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Investment Planning</h3>
              <p>Build long-term wealth with custom portfolio strategies.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <BarChart2 className="text-purple-600 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Market Reports</h3>
              <p>Stay informed with real-time market insights and trends.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          PrimeTrades is a stock trading consultancy committed to empowering investors through actionable insights, data-driven research, and transparent strategies. With over 10 years of experience, we’ve helped clients grow their wealth and minimize risk.
        </p>
      </section>

      {/* Contact Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <p className="flex items-center justify-center gap-2"><Mail /> contact@primetrades.com</p>
          <p className="flex items-center justify-center gap-2"><Phone /> +91-98765-43210</p>
          <Button className="mt-4">Send a Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4 text-sm">
        © 2025 PrimeTrades. All rights reserved.
      </footer>
    </div>
      <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Learn Trading</h1>
      <p className="mb-6">Welcome to the trading academy! Learn about stock markets, crypto, forex and more.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
      <form onSubmit={handleContactSubmit} className="space-y-3">
        <input
          className="w-full border p-2"
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          required
        />
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
        <textarea
          className="w-full border p-2"
          placeholder="Your Message"
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2" type="submit">Send</button>
      </form>
      {status && <p className="mt-2 text-sm text-blue-600">{status}</p>}
    </div>
  </div>
  );
}

export default App;
