'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Input from '@components/Input'
import Button from '@components/Button'
import Label from '@components/Label'

function Login() {
  return (
    <div className="bg-white ">
      <div className="flex h-screen flex-col overflow-y-auto md:flex-row">
        <main className="order-last md:order-first flex flex-col md:flex-row items-center justify-center p-6 sm:p-12 w-full md:w-1/2">
          <div className="w-full mb-5 md:mb-0">
            <div className='mb-8 md:mb-16'>
              <Image
                src='/logo.svg'
                alt="Logo"
                width={84}
                height={24}
              />
            </div>
            <div class="inline-flex flex-col space-y-1 mb-8">
              <p class="text-2xl font-semibold leading-loose text-gray-900">Login</p>
              <p class="text-base leading-relaxed text-gray-500">Welcome back, Please fill your details!</p>
            </div>
            <Label>
              <p class="text-base font-semibold leading-relaxed text-gray-900">Username</p>
              <Input className="pl-4 pr-4 mt-1" type="email" placeholder="john@doe.com" />
            </Label>

            <Label className="mt-4">
              <p class="text-base font-semibold leading-relaxed text-gray-900">Password</p>
              <Input className="pl-4 pr-4 mt-1" type="password" placeholder="***************" />
            </Label>

            <div class="flex flex-row justify-between mb-16 mt-2">
              <span className='flex gap-2 justify-start align-middle items-center text-sm'><Input type="checkbox" /> Remember me</span>
              <Link
                className="text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline"
                href="/forgot-password"
              >
                Forgot your password?
              </Link>
            </div>

            <Button className="mt-4" block tag={Link} href="/app">
              Log in
            </Button>
          </div>
          <div className="relative md:absolute bottom-2">
            <p class="text-xs leading-snug text-center text-gray-400">© PT BERKAH ANDALAN REKAYASA 2022. All Rights Reserved.</p>
          </div>
        </main>
        <div className="order-first md:order-last flex items-center justify-center p-6 sm:p-12 w-full md:w-1/2" style={{
          backgroundImage: `url(/background-login.png)`,
        }}>
          <div class="inline-flex flex-col space-y-3 items-center md:items-end justify-center align-top">
            <p class="text-2xl md:text-4xl font-base leading-10 text-center md:text-right text-white">Management Information System</p>
            <p class="text-md md:text-2xl font-base leading-loose text-center md:text-right text-gray-100">PT Berkah Andalan Rekayasa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login