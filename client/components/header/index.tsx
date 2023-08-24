/** @format */

'use client'
import React, { useEffect, useState } from 'react'
import { FiInstagram, FiGithub } from 'react-icons/fi'
import { PiHeadsetBold } from 'react-icons/pi'
PiHeadsetBold
import Link from 'next/link'
import Image from 'next/image'

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='flex flex-col mx-14  '>
      {/* Menu */}
      <div className='px-5'>
        <div className='flex justify-between w-full pt-10'>
          <div className='flex gap-2 items-center text-sm font-bold'>
            <span className='text-sm'>
              <PiHeadsetBold />
            </span>
            <span>پشتیبانی : 0933601751</span>
          </div>
          <div className='flex gap-3 text-xl'>
            <span>
              <FiInstagram />
            </span>
            <span>
              <FiGithub />
            </span>
          </div>
        </div>
      </div>
      <div
        className={`fixed px-[15px] left-5 right-5 mx-8 flex justify-between items-center mt-4 bg-[#0d1014ca] backdrop-blur-[9.5px] order-solid border-[1px] border-[#C1C1C14D] rounded-2xl py-7 transition-all ${
          isSticky ? ' top-0 left-0 ' : 'top-16  '
        }`}
      >
        {/* Right */}
        <div className='flex items-center'>
          {/* Logo */}
          <div className='ml-8'>
            <Link href='#'>
              <Image src='/logo.png' height={120} width={120} alt='Logo' />
            </Link>
          </div>
          {/* Navigation */}
          <div>
            <nav className=''>
              <ul className='flex gap-4 text-white'>
                <li>صفحه اصلی</li>
                <li>وبلاگ</li>
                <li>تماس با ما</li>
                <li>درباره ما</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Left */}
        <div className='flex'>
          {/* Account */}
          <div>
            <Link href='#' className='px-6 py-2 -tracking-[1.1px] bg-indigo-500 text-white rounded-lg'>
              ورود به پنل کاربری
            </Link>
          </div>
          {/* Notification */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default StickyHeader
