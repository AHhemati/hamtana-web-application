/** @format */

import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex flex-col items-center px-24'>
      <div className='container relative border-t-[1px] '>
        <div className='mx-auto container py-10'>
          <div className='sm:relative flex flex-col items-center gap-2 lg:flex-row sm:justify-between'>
            <span className='text-sm text-gray-500'>پشتیبانی : 09336901751</span>
            <ul className='flex items-center justify-end gap-8'>
              <li>
                <a
                  href='https://www.instagram.com/topdemy'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='instagram'
                  className=' text-gray-500 fill-current hover:text-blue-800 focus:text-primary  hover:cursor-pointer focus:cursor-pointer'
                  dideo-checked='true'
                >
                  <span className='flex justify-center h-5 w-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      className='w-5 h-5 bi bi-instagram'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Linkedin'
                  className=' text-gray-500 fill-current hover:text-blue-800 focus:text-primary hover:cursor-pointer focus:cursor-pointer'
                  dideo-checked='true'
                >
                  <span className='flex justify-center h-5 w-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                      <rect x='2' y='9' width='4' height='12'></rect>
                      <circle cx='4' cy='4' r='2'></circle>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/topdemy'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                  className=' text-gray-500 fill-current hover:text-blue-800 focus:text-primary hover:cursor-pointer focus:cursor-pointer'
                  dideo-checked='true'
                >
                  <span className='flex justify-center h-5 w-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/channel/UCslZe__U1SInv96z1LpkitQ'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='YouTube'
                  className=' text-gray-500 fill-current hover:text-blue-800 focus:text-primary hover:cursor-pointer focus:cursor-pointer'
                  dideo-checked='true'
                >
                  <span className='flex justify-center h-5 w-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
                      <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://t.me/topdemyir'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='telegram'
                  className=' text-gray-500 fill-current hover:text-blue-800 focus:text-primary hover:cursor-pointer focus:cursor-pointer'
                  dideo-checked='true'
                >
                  <span className='flex justify-center h-5 w-5'>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z'></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
