'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const fields = [
  {
    name: 'name',
    label: 'Your Name *',
    type: 'text',
    placeholder: 'Enter your name',
    validation: { required: 'Your name is required' }
  },
  {
    name: 'email',
    label: 'Email Address *',
    type: 'email',
    placeholder: 'Enter your email',
    validation: {
      required: 'Your email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format'
      }
    }
  },
  {
    name: 'communication',
    label: 'Preferred Contact *',
    type: 'select',
    options: ['Phone', 'Email', 'Text'],
    validation: { required: 'Please select a contact method' }
  },
  {
    name: 'phone',
    label: 'Phone Number *',
    type: 'text',
    placeholder: 'e.g., +1**********',
    validation: { required: 'Phone number is required' }
  },
  {
    name: 'address',
    label: 'Your Address *',
    type: 'text',
    placeholder: 'Enter your address',
    validation: { required: 'Address is required' }
  },
  {
    name: 'message',
    label: 'Message *',
    type: 'textarea',
    placeholder: 'Message',
    validation: { required: 'Message is required' }
  }
]

const timeframeOptions = [
  'As soon as possible',
  '1 to 4 days',
  'A week to a few weeks',
  'Just gathering information'
]

const GetInTouchForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='bg-[#FFFFFFBF] w-full rounded-xl py-2 px-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        {fields.map(field => (
          <div key={field.name} className='w-full'>
            <label className='font-bold text-sm block mb-1'>
              {field.label}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
                className='bg-gray-200 w-full py-3 px-4 rounded-md h-28 resize-none'
              />
            ) : field.type === 'select' ? (
              <select
                {...register(field.name, field.validation)}
                className='bg-gray-200 w-full py-3 px-4 rounded-md'
                defaultValue=''
              >
                <option value='' disabled>
                  Select
                </option>
                {field.options.map((opt, idx) => (
                  <option key={idx} value={opt.toLowerCase()}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
                className='bg-gray-200 w-full py-3 px-4 rounded-md'
              />
            )}

            {errors[field.name] && (
              <p className='text-sm text-red-500 mt-1'>
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}

        <div className=''>
          <p className='font-bold text-sm'>Timeframe *</p>
          <div className='grid grid-cols-2 gap-2'>
            {timeframeOptions.map((option, idx) => (
              <label key={idx} className='flex items-center space-x-2'>
                <input
                  type='radio'
                  value={option}
                  {...register('timeframe', {
                    required: 'Please select a timeframe'
                  })}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.timeframe && (
            <p className='text-sm text-red-500'>{errors.timeframe.message}</p>
          )}
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            disabled={isLoading}
            className='w-full px-10 py-3 font-bold text-white bg-[#7E3C07] hover:bg-[#482f1a] rounded'
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default GetInTouchForm
