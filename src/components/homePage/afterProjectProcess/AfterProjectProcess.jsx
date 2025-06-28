'use client'
import React from 'react'

const steps = [
  'Project Assignment to Annotators',
  'Annotators',
  'Quality Check 1',
  'Quality Check 2',
  'Super QA',
  'Submission',
]

const radius = 140 // radius of circle in px

const AfterProjectProcess = () => {
  const stepCount = steps.length

  return (
    <section className="bg-gray-50 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center max-w-2xl">
        After Project Assignment to Ainovaq
      </h2>
      <p className="text-gray-600 mb-12 max-w-md text-center">
        For best outcome, we ensure to implement multiple Quality Checks
      </p>

      <div
        className="relative w-[320px] h-[320px]"
        style={{ minWidth: 320, minHeight: 320 }}
      >
        {steps.map((label, idx) => {
          // angle per step (in radians)
          const angle = (2 * Math.PI * idx) / stepCount - Math.PI / 2 // start from top center

          // calculate x, y coords relative to center of container
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <div
              key={idx}
              className="absolute flex flex-col items-center w-28"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {idx + 1}
              </div>
              <p className="mt-2 text-center text-sm font-bold text-gray-700">
                {label}
              </p>
            </div>
          )
        })}

        {/* Circle outline */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width={radius * 2 + 40}
          height={radius * 2 + 40}
          aria-hidden="true"
        >
          <circle
            cx={(radius + 20)}
            cy={(radius + 20)}
            r={radius}
            stroke="#34D399" // Tailwind green-400
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 12"
          />
        </svg>
      </div>
    </section>
  )
}

export default AfterProjectProcess
