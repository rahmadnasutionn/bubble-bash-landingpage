import * as React from 'react';
import { CloseIcon } from '../Icons';
import { useLockBodyScroll } from '../../lib/hooks';

interface PropTypes {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({ setShowMobileMenu }: PropTypes) {
  useLockBodyScroll();
  
  return (
    <div
      className='fixed left-0 top-0 z-10 w-full h-screen opacity-95 bg-white duration-300 md:hidden block'
    >
      <div className="flex justify-end">
        <button
          type='button'
          aria-label='Close Menu'
          className='mr-8 mt-11 w-8 h-8 focus:outline-none focus:border-transparent'
          onClick={() => setShowMobileMenu(false)}
        >
          <CloseIcon />
          <span className="sr-only">Close Menu</span>
        </button>
      </div>
      <div className="fixed mt-8 w-full">
        <ul>
          {[
            'Home',
            'Our Services',
            'Portfolio',
            'Testimonial',
            'Contact Us'
          ].map((link: string) => (
            <li key={link} className='px-12 py-4'>
              <a 
                href={`#${link.replace(' ', '-').toLowerCase()}`}
                className='text-2xl text-primary tracking-widest font-semibold'
                onClick={() => setShowMobileMenu(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNav