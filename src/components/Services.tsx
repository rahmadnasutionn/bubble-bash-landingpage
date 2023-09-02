import { ArticleMedium, Branding, Code, FigmaLogo, PenTool, VideoCamera } from './Icons';

function Services({
  sectionId,
  title,
  subTitle,
}: {
  sectionId: string;
  title: string;
  subTitle: string;
}) {
  const services = [
    {
      title: 'UI/UX Designer',
      content: 
        'We are ready to make your website more friendly and efficient in the eyes of users',
      Icon: FigmaLogo,
    },
    {
      title: 'Web Development',
      content: 
        'Want to create a website that has many features? We have the answer for you.',
      Icon: Code,
    },
    {
      title: 'Content Writer',
      content: 
        'We provide interesting content and can attract customers for you',
      Icon: ArticleMedium,
    },
    {
      title: 'Branding',
      content: 
        'Create visual branding with amazing result, you just sit back and relax',
      Icon: Branding,
    },
    {
      title: 'Editing Camera',
      content: 
        'Want to create a website that has many features? We have the answer for you.',
      Icon: VideoCamera,
    },
    {
      title: 'Illustration',
      content: 
        'Create beauty illustrasion as you need, and make it interesting',
      Icon: PenTool,
    },
  ]
  return (
    <section
      id={sectionId}
      className='bg-secondary mb-24'
    >
      <div className="container py-12">
        <div className="flex flex-col">
          <div className="flex justify-start flex-col mb-10">
            <p className='text-lg text-primary'>
              {subTitle}
            </p>
            <h4 className="capitalize text-2xl lg:text-4xl text-primary font-semibold">
              {title}
            </h4>
          </div>
          <div className="flex flex-wrap justify-between -mx-5 xl:-mx-0">
            {services.map(service => (
              <div
                key={service.title}
                className='xl:w-3/12 xl:mb-12 mx-5 mb-8'
              >
                <div className="px-6 py-8 bg-white text-center shadow">
                  <service.Icon 
                    className='w-12 h-12 mb-4 mx-auto'
                  />
                  <span className="sr-only">
                    {service.title}
                  </span>
                  <h4 className='mb-4 text-2xl font-semibold text-primary'>
                    {service.title}
                  </h4>
                  <p className='text-lg text-primary'>
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services