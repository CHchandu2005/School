import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Book, Users, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Testimonial } from '../components/Testimonial';
import { ContactForm } from '../components/ContactForm';

const Home = () => {
  const achievements = [
    {
      title: 'NMMS Scholarships',
      icon: <Award size={32} className="text-brown-600" />,
      description: '15 students selected for National Means-cum-Merit Scholarships in 2024.',
      count: 15,
    },
    {
      title: 'SSC Toppers',
      icon: <TrendingUp size={32} className="text-brown-600" />,
      description: '98% pass rate in SSC exams with 25 students scoring above 90%.',
      count: 25,
    },
    {
      title: 'IIIT Selections',
      icon: <Book size={32} className="text-brown-600" />,
      description: '8 students selected for prestigious Indian Institutes of Information Technology.',
      count: 8,
    },
    {
      title: 'Sports Champions',
      icon: <Users size={32} className="text-brown-600" />,
      description: 'State level winners in Kabaddi, Kho-Kho, and Athletics competitions.',
      count: 12,
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Class 10 Graduate, 2023',
      quote: 'Municipal High School provided me with exceptional education and opportunities. The supportive teachers and diverse extracurricular activities helped me develop not just academically but as a well-rounded individual.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Rahul Patel',
      title: 'IIIT Student & Alumni',
      quote: 'The strong foundation in mathematics and science I received at MHS Laxminagar was crucial for my success in competitive exams. The faculty goes above and beyond to ensure every student reaches their potential.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Ananya Reddy',
      title: 'State Kabaddi Champion',
      quote: 'As a student athlete, I always felt supported in balancing academics and sports. The schools emphasis on physical education and team sports helped me excel at the state level while maintaining good grades.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <section className="relative bg-brown-700 text-white overflow-hidden h-[93vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900 to-brown-800 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container-custom relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to Municipal High School Laxminagar
            </motion.h1>
            
            <motion.p 
              className="text-xl text-brown-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering young minds through quality education, values, and opportunities since 1985.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link to="/gallery" className="btn bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section className="relative bg-brown-700 text-white overflow-hidden h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-gradient-to-r from-brown-900 to-brown-800 opacity-95"></div>
  <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center mix-blend-overlay"></div>

  <div className="container-custom relative px-4">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className='text-[#cf613c]'>        Welcome to Municipal High School Laxminagar
        </span>
      </motion.h1>

      <motion.p 
        className="text-xl text-brown-100 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Empowering young minds through quality education, values, and opportunities since 1985.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to="/about" className="btn btn-primary">
          Learn More
        </Link>
        <Link to="/gallery" className="btn bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
          View Gallery
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      
      {/* Achievements Section */}
      <section className="section bg-brown-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Our Achievements</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Municipal High School Laxminagar, we take pride in our students' accomplishments across academics, sports, and extracurricular activities.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection
                key={achievement.title}
                direction="up"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-brown-700 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-3">{achievement.description}</p>
                  <div className="text-3xl font-bold text-brown-600">{achievement.count}+</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection direction="left">
            <Testimonial testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section bg-brown-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="heading-lg mb-4">Connect With Us</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about admissions, curriculum, or school activities? We're here to help. Reach out to us using the contact form or visit us during office hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center shrink-0">
                      <Book size={20} className="text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-700">Quality Education</h3>
                      <p className="text-gray-600">Modern curriculum with focus on experiential learning and skill development.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center shrink-0">
                      <Users size={20} className="text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-700">Experienced Faculty</h3>
                      <p className="text-gray-600">Dedicated teachers committed to nurturing young minds for a brighter future.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center shrink-0">
                      <Award size={20} className="text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-700">Excellence in Sports</h3>
                      <p className="text-gray-600">Comprehensive sports program with state-level achievements and dedicated grounds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;