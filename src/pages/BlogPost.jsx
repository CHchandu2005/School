import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Simulated blog post data
  const posts = [
    {
      id: "1",
      title: 'Our Students Excel in District Science Exhibition',
      summary: 'Three innovative projects from our students received recognition at the district level science exhibition held last week.',
      content: `
        <p>We are proud to announce that students from Municipal High School Laxminagar have once again demonstrated exceptional creativity and scientific acumen at the District Science Exhibition held at the Regional Science Center last weekend.</p>
        
        <p>Three of our student teams received special recognition for their innovative projects:</p>
        
        <ul>
          <li>The team comprising Aarav Patel and Riya Shah from Class 10 won the first prize for their project on "Solar-Powered Water Purification System," which demonstrated an eco-friendly approach to addressing clean water challenges in rural areas.</li>
          
          <li>Karthik Reddy and Meera Nair from Class 9 secured the second position with their project "Smart Agricultural Monitoring System" that uses IoT technology to optimize irrigation and monitor soil health.</li>
          
          <li>The team of Arjun Kumar and Prisha Desai from Class 8 received a special mention for their "Biodegradable Plastic Alternative" made from locally available plant materials.</li>
        </ul>
        
        <p>The exhibition, which featured over 150 projects from 35 schools across the district, was judged by a panel of scientists from prestigious research institutions. The judges were particularly impressed by our students' focus on addressing real-world problems through sustainable solutions.</p>
        
        <p>These achievements reflect not only the students' dedication but also the guidance provided by our science faculty, led by Mr. Venkat Rao. The school has been consistently performing well in science competitions, with this year marking our best performance so far at the district level.</p>
        
        <p>The winning teams will now represent our district at the State Level Science Exhibition scheduled to be held next month in Hyderabad.</p>
        
        <p>We extend our heartiest congratulations to the students and teachers for this remarkable achievement and wish them continued success in their scientific endeavors.</p>
      `,
      image: 'https://images.pexels.com/photos/8617704/pexels-photo-8617704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 15, 2024',
      author: 'Dr. Rajesh Kumar',
      category: 'Academics',
    },
    {
      id: "2",
      title: 'Annual Sports Day Celebrations',
      summary: 'The school celebrated its Annual Sports Day with enthusiasm and competitive spirit, showcasing remarkable athletic talent.',
      content: `
        <p>The Municipal High School Laxminagar celebrated its Annual Sports Day with great enthusiasm and sporting spirit on June 8th and 9th, 2024. The event was inaugurated by noted Olympic athlete Ms. Deepa Karmakar, who inspired the students with her journey of perseverance and excellence.</p>
        
        <p>The two-day event featured a wide range of athletic competitions including track events, field events, team sports, and traditional games. The school grounds were transformed into a vibrant arena with colorful decorations, well-marked tracks, and dedicated areas for various competitions.</p>
        
        <h3>Day One Highlights:</h3>
        
        <p>The first day began with a grand march-past by students representing different houses: Shivaji (Red), Tagore (Blue), Gandhi (Green), and Raman (Yellow). This was followed by the lighting of the sports torch and the oath-taking ceremony led by the school sports captain.</p>
        
        <p>Track events dominated day one, with students participating in races across various categories including 100m, 200m, 400m, 800m, relay races, and hurdles. The standout performance came from Aryan Sharma of Class 10, who broke the school record in the 400m race with a time of 52.8 seconds.</p>
        
        <h3>Day Two Highlights:</h3>
        
        <p>The second day focused on field events such as long jump, high jump, shot put, discus throw, and javelin. The team sports finals for cricket, football, kabaddi, and kho-kho were also held, drawing enthusiastic support from spectators.</p>
        
        <p>The girls' kabaddi team from Gandhi House clinched the championship after a nail-biting final against Tagore House. In the boys' category, Shivaji House dominated the football tournament, showcasing exceptional teamwork and strategic gameplay.</p>
        
        <h3>Special Recognitions:</h3>
        
        <ul>
          <li>Best Athlete (Boys): Vikram Singh, Class 10, Shivaji House</li>
          <li>Best Athlete (Girls): Neha Reddy, Class 9, Gandhi House</li>
          <li>Overall Championship Trophy: Gandhi House</li>
          <li>Best March-Past Performance: Raman House</li>
        </ul>
        
        <p>The event concluded with a prize distribution ceremony presided over by the District Sports Officer, Mr. Jagannadh Rao, who commended the school for promoting sports alongside academics and encouraged students to pursue physical fitness as a lifelong habit.</p>
        
        <p>Our Physical Education Director, Mr. Ravi Teja, expressed satisfaction with the increased participation this year, with over 70% of students taking part in at least one sporting event. He highlighted that sports are an integral part of the school's curriculum as they foster teamwork, discipline, and a healthy competitive spirit among students.</p>
      `,
      image: 'https://images.pexels.com/photos/6203798/pexels-photo-6203798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 10, 2024',
      author: 'Mr. Ravi Teja',
      category: 'Sports',
    },
  ];
  
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brown-700 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-brown-700">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900 to-brown-800 opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 mix-blend-overlay opacity-50"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/updates" 
              className="inline-flex items-center text-brown-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Updates
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-brown-800/70 text-brown-100 rounded-full backdrop-blur-sm">
                <Tag size={14} className="mr-1" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-brown-200">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Image */}
      {/* <section className="relative -mt-10 md:-mt-16">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section> */}
      
      {/* Content Section */}
      <section className="section py-12">
        <div className="container-custom max-w-4xl">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </AnimatedSection>
          
          {/* Share and Navigation */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <button 
                  onClick={() => navigate(-1)} 
                  className="inline-flex items-center text-brown-600 hover:text-brown-800 transition-colors"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to Updates
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;