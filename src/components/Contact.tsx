
function Contact({
  sectionId,
}: {
  sectionId: string;
}) {
  return (
    <section 
      className="bg-green bg-hero mb-24"
      id={sectionId}
    >
      <div className="container py-12">
        <div className="flex flex-col items-center text-center justify-center">
          <h4 className="text-2xl lg:text-5xl leading-normal font-bold text-white">
            Have a project idea and want to make it come true?
          </h4>
          <p className="text-lg text-white mb-8">
            Please contact us and we will discuss about your project, don't forget we are <br /> always here for you
          </p>
          <div>
            <button
              type="button"
              className="text-primary bg-white py-6 px-8 font-bold text-xl shadow"
              aria-label="Contact Us"
            >
              Contact Us
              &nbsp; <span aria-hidden='true'>{'->'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact