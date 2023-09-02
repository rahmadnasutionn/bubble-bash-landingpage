import { FacebookLogo, InstagramLogo, LinkedInLogo, Logo, TwitterLogo } from '../Icons'

interface LinksProps {
  links: SitemapLinks[];
};

interface SitemapLinks {
  title: string;
  link: string[]
};

function Footer({ links }: LinksProps) {
  return (
    <footer>
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-6/12 lg:pr-16 flex items-start flex-col">
            <a href="/">
              <span className="flex items-center justify-center space-x-2">
                <Logo className='w-12 h-12' />
                <span className="sr-only">Logo</span>
                <h1 className='text-xl font-semibold text-primary'>
                  Bubble Bash
                </h1>
              </span>
            </a>
            <p className="text-lg text-primary mb-8">
              Introducing, We are Bubble Bash digital agency company with more than 6 years of experience, We are committed to serve with all our heart
            </p>
            <div className="flex items-center space-x-4 lg:mb-0 mb-8">
              <a href="#">
                <FacebookLogo />
              </a>
              <a href="#">
                <InstagramLogo />
              </a>
              <a href="#">
                <TwitterLogo />
              </a>
              <a href="#">
                <LinkedInLogo />
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between w-5/12">
            {links.map(link => (
              <SitemapLinks 
                key={link.title}
                { ...link }
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

function SitemapLinks({ title, link }: SitemapLinks) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-primary mb-4">
        {title}
      </h4>
      <ul>
        {link.map((link, index) => (
          <li
            key={`key-${index}`}
            className='mb-2 lg:mb-4'
          >
            <a 
              href={`#${link.replace(' ', '-').toLowerCase()}`}
              className='text-base lg:text-lg text-primary'
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}