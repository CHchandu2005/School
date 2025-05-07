import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { BookOpen, Target, GraduationCap, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">

      <section
        className="text-white py-16 bg-cover bg-center  h-[18vh] md:h-[40vh]"
        style={{
          backgroundImage: `url('About.png')`
        }}
      >
      </section>


      {/* School History */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="left">
              <img
                src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="School building historical photo"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="heading-md mb-6">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1985, Municipal High School Laxminagar began as a small institution with just 120 students and 8 teachers in a modest building. The school was established with the vision of providing quality education to the children of Laxminagar and surrounding areas.
              </p>
              <p className="text-gray-700 mb-4">
                Over the decades, under the leadership of dedicated principals and with the support of the local community, our school has grown into a prestigious institution with modern facilities, a comprehensive curriculum, and a reputation for academic excellence.
              </p>
              <p className="text-gray-700">
                Today, we proudly serve over 1,500 students with a team of 85 qualified and experienced faculty members. Our alumni have gone on to achieve remarkable success in various fields, bringing pride to their alma mater.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section bg-brown-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <h2 className="heading-md mb-6">Principal's Message</h2>
              <blockquote className="italic text-gray-700 mb-6 border-l-4 border-brown-500 pl-4 py-2">
                "Education is not just about academic knowledge, but about shaping young minds to become responsible citizens who contribute positively to society. At Municipal High School Laxminagar, we strive to provide a holistic learning environment that nurtures intellectual curiosity, personal growth, and ethical values."
              </blockquote>
              <p className="text-gray-700 mb-4">
                Our approach to education is student-centered, focusing on individual strengths and areas for growth. We believe that every child has unique potential, and our role as educators is to provide the guidance, resources, and opportunities needed to help them discover and develop their talents.
              </p>
              <p className="text-gray-700">
                As we move forward, we remain committed to maintaining high academic standards while adapting to the evolving educational landscape and preparing our students for the challenges of the 21st century.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-brown-700">Dr. Rajesh Kumar</p>
                <p className="text-gray-600">Principal, Municipal High School Laxminagar</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Principal Dr. Rajesh Kumar"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;