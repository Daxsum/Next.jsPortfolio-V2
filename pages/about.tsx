import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { PageSEO } from '@/components/SEO'
import { SectionHeading, Badge, Button } from '@/components/ui'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const SERVICE_OPTIONS = [
  'Build a full-stack web app or platform',
  'Build an ERP / SaaS product',
  'Integrate telecom APIs (USSD / SMS / VAS)',
  'Improve or fix an existing system',
  'Not sure yet, let’s talk',
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const templateParams = {
      to_name: 'kalab',
      from_name: name || 'sir/madam',
      message: `${service ? `[${service}] ` : ''}${message}`,
      reply_to: email,
    }

    emailjs.send('service_sa3v1uw', 'template_bh3e7hs', templateParams, 'K5PQH47HJGyC7qX2k').then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message has been successfully sent!',
          showConfirmButton: false,
          timer: 1500,
        })
        setStep(1)
        setService('')
        setName('')
        setEmail('')
        setMessage('')
      },
      () => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'oops! something went wrong!',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    )
  }

  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="Let's work together" />
      <div className="space-y-16 py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Tell me a bit about what you need and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="space-y-8 rounded-2xl border border-gray-200 p-8 dark:border-gray-700 lg:col-span-3">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Step {step} of 3
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  How can I help?
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((opt) => (
                    <Badge key={opt} active={service === opt} onClick={() => setService(opt)}>
                      {opt}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    disabled={!service}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-primary-500 dark:text-gray-900 dark:hover:bg-primary-400"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Who am I talking to?
                </h3>
                <input
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  type="email"
                  placeholder="you@somewhere.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-100"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!name || !email}
                    onClick={() => setStep(3)}
                    className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-primary-500 dark:text-gray-900 dark:hover:bg-primary-400"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  What's the project about?
                </h3>
                <textarea
                  className="block h-36 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-100"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!message}
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-primary-500 dark:text-gray-900 dark:hover:bg-primary-400"
                  >
                    Send message
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Or reach me directly
            </h3>
            <div className="flex items-center gap-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            </div>
            <Button href="/resume" variant="outline">
              View résumé
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
