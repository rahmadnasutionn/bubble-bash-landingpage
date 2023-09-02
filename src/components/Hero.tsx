function Hero() {
  return (
    <section>
      <div className="container">
        <div className="xl:mt-[100px] mt-24 xl:pb-[343px] pb-[240px] text-center xl:w-10/12 mx-auto text-white">
          <h1 className="font-bold capitalize xl:text-[64px] text-[35px] leading-tight">
            Create Amazing Digital Product for Your Business
          </h1>
          <p className="text-base xl:text-lg leading-[27px] xl:w-10/12 mx-auto mt-8 mb-12">
            We are a professional digital agency that has been established
            since 2016, we present a variety of digital services that can help
            you solve problems in your business
          </p>
          <button
            type="button"
            aria-label="Get Started"
            className="text-primary bg-white py-6 px-8 font-bold text-xl shadow"
          >
            Get Started
            &nbsp; <span aria-hidden='true'>{'->'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero