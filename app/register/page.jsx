import Link from 'next/link'

import SubmitButton from '../../components/submit-button'
import GoogleButton from '../../components/google-button'
import { signup } from './actions'

export default function SignUp({ searchParams }) {
  return (
    <section className='flex flex-col items-center pt-6'>
      <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white'>
            Create an account
          </h1>
          {searchParams?.message && (
            <p className='mt-4 p-4 bg-gray-900 border-red-500 border-2 rounded-md text-white text-center'>
              {searchParams.message}
            </p>
          )}
          <form className='space-y-4 md:space-y-6'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-white'>
                Your full name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                placeholder='Emelia Erickson'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-white'>
                Your Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                placeholder='abc@gmail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='username' className='block mb-2 text-sm font-medium text-white'>
                Username
              </label>
              <input
                type='text'
                name='username'
                id='username'
                className=' border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                placeholder='emelia_erickson24'
                required
              />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-white'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                required
              />
            </div>
            <SubmitButton
              pendingText='signing Up...'
              formAction={signup}
              className='w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
            >
              Create an account
            </SubmitButton>
          </form>
          <div className='flex justify-center text-white'>
            <p>OR</p>
          </div>
          <GoogleButton />
          <p className='text-sm font-light text-gray-400'>
            Already have an account?
            <Link className='font-medium hover:underline text-blue-500' href='/login'>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
