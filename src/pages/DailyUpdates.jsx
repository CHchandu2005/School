import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Search, Calendar, User } from 'lucide-react';

const DailyUpdates = () => {
  const posts = [
    {
      id: 1,
      title: 'Our Students Excel in District Science Exhibition',
      summary: 'Three innovative projects from our students received recognition at the district level science exhibition held last week.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/8617704/pexels-photo-8617704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 15, 2024',
      author: 'Dr. Rajesh Kumar',
      category: 'Academics',
    },
    {
      id: 2,
      title: 'Annual Sports Day Celebrations',
      summary: 'The school celebrated its Annual Sports Day with enthusiasm and competitive spirit, showcasing remarkable athletic talent.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/6203798/pexels-photo-6203798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 10, 2024',
      author: 'Mr. Ravi Teja',
      category: 'Sports',
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting Scheduled for Next Week',
      summary: 'The quarterly parent-teacher meeting will be held on June 25th. Parents are requested to confirm their attendance.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 8, 2024',
      author: 'Mrs. Sunita Reddy',
      category: 'Announcements',
    },
    {
      id: 4,
      title: 'Students Win State Level Quiz Competition',
      summary: 'Our quiz team secured first place in the state level general knowledge quiz competition held at Hyderabad.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/8471874/pexels-photo-8471874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 5, 2024',
      author: 'Mr. Anand Sharma',
      category: 'Achievements',
    },
    {
      id: 5,
      title: 'Cultural Festival Highlights',
      summary: 'The annual cultural festival showcased the diverse talents of our students through dance, music, and theatrical performances.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/8423028/pexels-photo-8423028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'June 1, 2024',
      author: 'Mrs. Priya Nair',
      category: 'Events',
    },
    {
      id: 6,
      title: 'New Computer Lab Inauguration',
      summary: 'A state-of-the-art computer lab with 30 new systems was inaugurated by the District Education Officer yesterday.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 28, 2024',
      author: 'Dr. Rajesh Kumar',
      category: 'Infrastructure',
    },
    {
      id: 7,
      title: 'Mathematics Olympiad Results',
      summary: 'Five students from our school have qualified for the national level Mathematics Olympiad to be held next month.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 25, 2024',
      author: 'Mrs. Lakshmi Devi',
      category: 'Academics',
    },
    {
      id: 8,
      title: 'Career Counseling Workshop for Class 10 Students',
      summary: 'A workshop on career options after 10th grade was conducted for students to help them make informed choices about their academic path.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      image: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 20, 2024',
      author: 'Mrs. Savita Goel',
      category: 'Guidance',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header Section */}
      {/* <section className="bg-brown-700 text-white py-16">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Daily Updates</h1>
            <p className="text-xl text-brown-100 max-w-3xl">
              Stay informed about the latest news, events, and achievements from our school community.
            </p>
          </AnimatedSection>
        </div>
      </section> */}

<section
        className="text-white py-16 bg-cover bg-center  h-[18vh] md:h-[40vh]"
        // style={{
        //   backgroundImage: `url('Updates.png')`
        // }}
        style={{
          backgroundImage: `url('Updates.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </section>
      
      {/* Search Section */}
      <section className="py-8 bg-brown-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-brown-500 focus:border-brown-500"
                placeholder="Search for news, events, or announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">No results found</h2>
              <p className="text-gray-600">
                No posts match your search criteria. Try different keywords or browse all posts.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 btn btn-primary"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  direction="up"
                  delay={index * 0.1}
                >
                  <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-brown-100 text-brown-800 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-brown-800 mb-2 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.summary}
                      </p>
                      <Link
                        to={`/updates/${post.id}`}
                        className="text-brown-600 font-medium hover:text-brown-800 inline-flex items-center"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DailyUpdates;