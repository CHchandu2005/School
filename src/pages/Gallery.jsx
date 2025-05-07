import React, { useState } from 'react';
import { Gallery as PhotoSwipeGallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { AnimatedSection } from '../components/AnimatedSection';

const Gallery = () => {
  const galleryItems = [
    {
      original: 'https://images.pexels.com/photos/8617704/pexels-photo-8617704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8617704/pexels-photo-8617704.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Science Exhibition',
      category: 'academics',
    },
    {
      original: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Annual Day Celebration',
      category: 'events',
    },
    {
      original: 'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 800,
      height: 1200,
      title: 'Kabaddi Tournament',
      category: 'sports',
    },
    {
      original: 'https://images.pexels.com/photos/8423028/pexels-photo-8423028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8423028/pexels-photo-8423028.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Cultural Festival',
      category: 'events',
    },
    {
      original: 'https://images.pexels.com/photos/8471874/pexels-photo-8471874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8471874/pexels-photo-8471874.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Math Olympiad Winners',
      category: 'academics',
    },
    {
      original: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 800,
      height: 1200,
      title: 'School Building',
      category: 'campus',
    },
    {
      original: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Sports Day Event',
      category: 'sports',
    },
    {
      original: 'https://images.pexels.com/photos/8471903/pexels-photo-8471903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8471903/pexels-photo-8471903.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Graduation Ceremony',
      category: 'events',
    },
    {
      original: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 800,
      height: 1200,
      title: 'Library',
      category: 'campus',
    },
    {
      original: 'https://images.pexels.com/photos/8964464/pexels-photo-8964464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8964464/pexels-photo-8964464.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Art Exhibition',
      category: 'events',
    },
    {
      original: 'https://images.pexels.com/photos/15615164/pexels-photo-15615164/free-photo-of-people-in-classroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/15615164/pexels-photo-15615164/free-photo-of-people-in-classroom.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 1200,
      height: 800,
      title: 'Classroom Session',
      category: 'academics',
    },
    {
      original: 'https://images.pexels.com/photos/8422507/pexels-photo-8422507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/8422507/pexels-photo-8422507.jpeg?auto=compress&cs=tinysrgb&w=300',
      width: 800,
      height: 1100,
      title: 'Republic Day Celebration',
      category: 'events',
    },
  ];

  const categories = ['all', 'academics', 'sports', 'events', 'campus'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="text-white py-16 bg-cover bg-center  h-[18vh] md:h-[40vh]"
        style={{
          backgroundImage: `url('Gallery.png')`
        }}
      >
      </section>
      
      {/* Gallery Section */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection direction="up" className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-brown-600 text-white'
                      : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          <PhotoSwipeGallery>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  direction="up" 
                  delay={index * 0.05}
                  className="aspect-w-1 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Item
                    original={item.original}
                    thumbnail={item.thumbnail}
                    width={item.width}
                    height={item.height}
                    title={item.title}
                  >
                    {({ ref, open }) => (
                      <div 
                        className="relative cursor-pointer group overflow-hidden"
                        onClick={open}
                        ref={ref}
                      >
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end">
                          <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white font-medium">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    )}
                  </Item>
                </AnimatedSection>
              ))}
            </div>
          </PhotoSwipeGallery>
        </div>
      </section>
    </div>
  );
};

export default Gallery;