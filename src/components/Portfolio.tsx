import hospital from '../assets/hospital.png';
import foodBeverages from '../assets/food-beferage.png';
import supermarket from '../assets/supermarket.png';

function Portfolio({
  sectionId,
  title,
  subTitle,
}: {
  sectionId: string;
  title: string;
  subTitle: string;
}) {
  const portfolios = [
   { 
     title: 'Website My Hospital',
     content:
       'Create a hospital website with patient, doctor, and drug logistics features that help hospital operations',
     image: hospital,
   },
   {
     title: 'Food & Beverages Corp Logo',
     content:
       'Create a logo for a food & beverage company, with emphasis on aesthetics and user requests',
      image: foodBeverages
   },
   {
    title: 'Supermarket Mobile Apps',
    content:
    'Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features',
    image: supermarket
   }
  ]
  return (
    <section
      id={sectionId}
      className="mb-24"
    >
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-start flex-col mb-10">
            <p className="text-lg text-primary">
              {subTitle}
            </p>
            <h4 className="capitalize text-2xl lg:text-4xl font-semibold text-primary">
              {title}
            </h4>
          </div>
          <div className="flex gap-y-5 lg:gap-y-0 flex-wrap xl:flex-nowrap xl:space-x-[66px] xl:space-y-0">
            {portfolios.map(portfolio => (
              <PortfolioCard
                key={portfolio.title}
                portfolio={portfolio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

interface PropTypes {
  portfolio: {
    title: string;
    content: string;
    image: string;
  };
}

function PortfolioCard({ portfolio }: PropTypes) {
  return (
    <div
      className='xl:w-4/12'
    >
      <div>
        <img 
          src={portfolio.image}
          alt={portfolio.title}
          className='w-full h-full mb-2'
        />
        <h4 className="mb-2 text-2xl text-primary font-semibold">
          {portfolio.title}
        </h4>
        <p className='text-lg'>
          {portfolio.content}
        </p>
      </div>
    </div>
  )
}