'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async data => {
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Name:</strong> ${data?.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data?.email}">${data?.email}</a></p>
        <p><strong>communication:</strong> ${data?.communication}</p>
        <p><strong>Phone:</strong> ${data?.phone}</p>
        <p><strong>Message:</strong> ${data?.message}</p>
      </div>
    `

    const payload = {
      projectFor: 'easypools.landscaping@gmail.com',
      name: data?.name,
      email: data?.email,
      message: emailTemplate
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`

    try {
      setIsLoading(true)
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        toast.error('Failed to send! Please try again.')
        return
      }

      toast.success('Successfully sent!')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to send! Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Field config
  const fields = [
    {
      name: 'name',
      label: 'Your Name *',
      type: 'text',
      placeholder: 'Enter Your Name',
      validation: { required: 'Your name is required' }
    },
    {
      name: 'email',
      label: 'Email Address *',
      type: 'email',
      placeholder: 'Enter Email Address',
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
      label: 'Preferred method of communication*',
      type: 'select',
      options: ['Phone', 'Email', 'Text'],
      validation: { required: 'Please select a contact method' }
    },
    {
      name: 'phone',
      label: 'Phone Number *',
      type: 'text',
      placeholder: 'Enter Your Phone Number',
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
      placeholder: 'Enter Message',
      validation: { required: 'Message is required' }
    }
  ]

  const timeframeOptions = [
    'As soon as possible',
    '1 to 4 days',
    'A week to a few weeks',
    'Just gathering information'
  ]

  return (
    <div className='md:col-span-1 py-2 md:py-4 px-[45px] md:px-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {fields.map(field => (
            <div key={field.name} className='w-full col-span-1'>
              <label
                htmlFor='state'
                className='font-bold text-white text-sm block mb-1'
              >
                {field.label}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  placeholder={field.placeholder}
                  {...register(field.name, field.validation)}
                  className='bg-[#EEEEEE] w-full py-3 px-4 rounded-md h-32 resize-none'
                />
              ) : field.type === 'select' ? (
                <select
                  id='state'
                  {...register(field.name, field.validation)}
                  className='bg-[#EEEEEE] w-full py-3 px-4 rounded-md'
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
                  className='bg-[#EEEEEE] w-full py-3 px-4 rounded-md'
                />
              )}

              {errors[field.name] && (
                <p className='text-sm text-red-500 mt-1'>
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 justify-between gap-4 font-bold text-sm'>
          {timeframeOptions.map((option, idx) => (
            <label key={idx} className='flex items-center text-white'>
              <input
                type='radio'
                value={option}
                {...register('timeframe', {
                  required: 'Please select a timeframe'
                })}
                className='mr-2'
              />
              {option}
            </label>
          ))}
        </div>
        {errors.timeframe && (
          <p className='text-sm text-red-500'>{errors.timeframe.message}</p>
        )}

        <div className='pt-6'>
          <button
            type='submit'
            className='w-full flex justify-center items-center gap-2 text-lg py-2 px-6 bg-[#7E3C07] rounded text-white'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='15'
              fill='none'
            >
              <path
                d='M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
