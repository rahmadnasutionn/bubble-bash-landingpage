import * as React from 'react';
import { BurgerIcon, Logo } from '../Icons';
import Headroom from 'react-headroom';
import cn from 'classnames';
import MobileNav from './MobileNav';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0)  {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Headroom className='z-30'>
      <div 
        className={cn(
          "w-full",
          isHidden
            ? 'bg-zinc-600/60 shadow-md backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out'
            : 'bg-transparent'
        )}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="w-48">
            <a 
              href="/"
              className='text-white font-semibold'
            >
              <span className="flex justify-center items-center">
                <Logo className='mr-1 w-12 h-12' />
                <h1 className="text-xl font-semibold">
                  Bubble Bash
                </h1>
              </span>
            </a>
          </div>

          <button
            type='button'
            className="block md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <BurgerIcon />
            <span className="sr-only">
              Menu Icon
            </span>
          </button>

          <ul className="hidden md:flex ml-auto">
            <NavLinks />
          </ul>

          {showMobileMenu && (
            <MobileNav
              setShowMobileMenu={setShowMobileMenu}
            />
          )}
        </div>
      </div>
    </Headroom>
  )
}

export default Header

function NavLinks() {
  return (
    <>
      {[
        'Home',
        'Our Services',
        'Portfolio',
        'Testimonial',
        'Contact Us'
      ].map((link: string) => (
        <NavLink key={link} link={link} />
      ))}
    </>
  )
}

function NavLink({ link }: { link: string }) {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setAnchor(document.getElementById(link));
  }, [link]);

  const handleClick = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    if (!anchor) return;

    event.preventDefault();
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  return(
    <li className='py-2 px-4 list-none'>
      <a 
        href={`#${link.replace(' ', '-').toLowerCase()}`}
        className='text-xl text-primary lg:text-white capitalize no-underline'
        onClick={handleClick}
      >
        {link}
      </a>
    </li>
  )
}

