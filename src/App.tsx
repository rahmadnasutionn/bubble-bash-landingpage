import * as React from 'react';

import Layout from "./components/Layout/Layout"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"

import kattyClock from './assets/katty-clock.png';
import johnRobert from './assets/john-robert.png';
import paul from './assets/paul.png';
import Contact from "./components/Contact";

function App() {
  React.useEffect(() => {
    document.title = 'Landing Page - Bubble Bash';
  }, []);

  return (
    <Layout>
      <Services 
        sectionId="our-services"
        title="We Provide What You Need"
        subTitle="Our Services"
      />
      <Portfolio
        sectionId="portfolio" 
        title="Recent Projects"
        subTitle="Portfolio"
      />
      <Testimonial 
        sectionId="testimonial"
        title="What Our Happy Client Say About Us"
        subTitle="Client Reviews"
        testimonials={[
          {
            title: 'Website My Hospital',
            message: 
              'Very nice to work with Bubble Bash, a reliable and responsive team is very helpful',
            image: kattyClock,
            name: 'Katty Clock',
            position: 'CEO My Hospital'
          },
          {
            title: 'Logo F&B Corp',
            message:
              "Really the best service we've ever gotten, really looking forward to the next project",
            image: johnRobert,
            name: 'John Robert',
            position: 'CEO My Hospital',
          },
          {
            title: 'Supermarket Mobile Apps',
            message:
              "The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?",
            image: paul,
            name: 'Paul',
            position: 'CEO My Hospital',
          }
        ]}
      />
      <Contact 
        sectionId="contact-us"
      />
    </Layout>
  )
}

export default App
