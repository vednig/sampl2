'use client'

import { useState }  from 'react'
import { motion }    from 'framer-motion'
import { Button }    from '@/components/ui/Button'
import { cn }        from '@/lib/utils'

const inputCls =
  'w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-4 text-stone-800 text-sm placeholder:text-stone-400 transition-colors duration-200 font-sans'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form,   setForm]   = useState({
    name:    '',
    email:   '',
    type:    '',
    message: '',
  })

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // ── Wire to your form service here (Formspree, Resend, etc.) ──
    // Example with Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // if (res.ok) setStatus('sent'); else setStatus('error')
    await new Promise((r) => setTimeout(r, 1200)) // remove this line when wiring real service
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center py-16"
      >
        <span className="font-mono text-5xl text-stone-300 mb-6">✓</span>
        <h2 className="font-display text-4xl text-stone-900 mb-4">Message received.</h2>
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. Someone from our team will be in touch
          within 2–3 business days.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="text-xs tracking-wide3 uppercase text-stone-400 block mb-2">
          Your Name *
        </label>
        <input
          required
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={set('name')}
          className={inputCls}
        />
      </div>

      <div>
        <label className="text-xs tracking-wide3 uppercase text-stone-400 block mb-2">
          Email Address *
        </label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={set('email')}
          className={inputCls}
        />
      </div>

      <div>
        <label className="text-xs tracking-wide3 uppercase text-stone-400 block mb-2">
          Project Type
        </label>
        <select
          value={form.type}
          onChange={set('type')}
          className={cn(inputCls, 'cursor-pointer')}
        >
          <option value="">Select a category</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Interior</option>
          <option>Cultural</option>
          <option>Design Consultancy</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="text-xs tracking-wide3 uppercase text-stone-400 block mb-2">
          Tell us about your project *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Brief description — location, timeline, scale, and any details that would help us understand the commission."
          value={form.message}
          onChange={set('message')}
          className={cn(inputCls, 'resize-none')}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'sending'}
        className="w-full justify-center"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </Button>
    </form>
  )
}
