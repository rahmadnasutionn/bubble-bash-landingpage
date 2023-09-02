interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
  title: string;
}

function Testimonial({
  sectionId,
  title,
  subTitle,
  testimonials,
}: {
  sectionId: string;
  title: string;
  subTitle: string;
  testimonials: Testimonial[];
}) {
  return (
    <section
      id={sectionId}
      className="mb-24"
    >
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col items-start mb-10">
            <p className="text-lg text-primary">
              {subTitle}
            </p>
            <h4 className="text-2xl lg:text-4xl text-primary font-semibold">
              {title}
            </h4>
          </div>
          <div className="flex gap-y-4 lg:gap-y-0 flex-col lg:flex-row xl:space-x-[55px]">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div
                key={`key-${index}`}
                className="xl:w-4/12"
              >
                <TestimonialCard 
                  {...testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

function TestimonialCard({
  name,
  image,
  message,
  position,
  title
}: Testimonial) {
  return (
    <div className="p-6 border border-primary">
      <h4 className="text-2xl font-semibold text-primary">
        {title}
      </h4>
      <p className="text-lg mb-5">
        {message}
      </p>
      <div className="flex items-center space-x-4">
        <img 
          src={image}
          alt={title}
          className="object-contain"
        />
        <div>
          <h4 className="text-lg font-semibold text-primary">
            {name}
          </h4>
          <h5 className="text-lg text-primary">
            {position}
          </h5>
        </div>
      </div>
    </div>
  )
}