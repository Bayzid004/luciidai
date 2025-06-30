'use client'
import { useState } from 'react'
import { MessageCircle, ChevronRight, X as Close } from 'lucide-react'
import Image from 'next/image'

const ChatModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-b from-gray-900 to-black text-white px-5 py-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="\public\assets\logo.png" alt="logo" width={32} height={32} />
                <h2 className="text-lg font-semibold">OpenTrain AI</h2>
              </div>
              <button onClick={() => setOpen(false)} className="text-white">
                <Close className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Hi there 👋</h3>
              <p className="text-lg font-semibold">How can we help?</p>
            </div>
          </div>

          {/* Message Card */}
          <div className="bg-white px-4 py-3 shadow-md">
            <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-black">Send us a message</p>
                <p className="text-xs text-gray-500">We will reply as soon as we can</p>
              </div>
              <ChevronRight className="text-blue-600 w-5 h-5" />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-auto border-t px-6 py-3 flex justify-between text-sm text-gray-600 bg-white rounded-b-2xl">
            <div className="flex flex-col items-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
              </svg>
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="w-5 h-5 mb-1" />
              <span>Messages</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatModal
