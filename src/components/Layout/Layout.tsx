import * as React from 'react'
import Header from './Header';
import Footer from './Footer';
import Hero from '../Hero';

import bgHero from '../../assets/hero.png';

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const statistics = [
    {
      value: '1.2K',
      label: 'Happy Clients'
    },
    {
      value: '1.1K',
      label: 'WorldWide Clients'
    },
    {
      value: '6+',
      label: 'Years of Experience'
    },
    {
      value: '12+',
      label: 'Awward Winners'
    },
  ]
  return (
    <div className='flex flex-col w-full min-h-screen overflow-hidden'>
      <div className='bg-green bg-hero min-h-[929px]'>
        <Header />
        <Hero />
      </div>

      <div className="xl:-translate-y-[35%] -translate-y-[25%] xl:-mb-[200px] -mb-[50px]">
        <div className="container">
          <img 
            src={bgHero}
            alt="Hero Image" 
          />
          <div className="flex flex-wrap items-center xl:justify-between xl:mt-[50px] mt-[30px] xl:w-10/12 xl:mx-auto -ml-2">
            {statistics.map(({ value, label }) => (
              <div
                key={label}
                className='flex items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0'
              >
                <div className="text-center">
                  <h3 className='text-2xl lg:text-4xl text-primary font-semibold'>
                    {value}
                  </h3>
                  <span className='text-lg text-primary'>
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className='flex-1'>
        {children}
      </main>

      <Footer 
        links={[
          {
            title: 'Pages',
            link: [
              'Home',
              'Our Services',
              'Portfolio',
              'Testimonial',
              'Contact Us',
            ]
          },
          {
            title: 'Explore',
            link: [
              'Resources',
              'Blog',
              'Documents',
            ]
          },
          {
            title: 'Company',
            link: [
              'About Us',
              'Customerts',
              'Portfolio',
              'Contact Us',
            ]
          },
        ]}
      />
    </div>
  )
}

export default Layout