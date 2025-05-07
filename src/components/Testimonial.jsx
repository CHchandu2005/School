import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };
  
  const [direction, setDirection] = useState(1);
  
  const nextTestimonial = () => {
    setDirection(1);
    handleNext();
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    handlePrev();
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="heading-md mb-8">What Our Students Say</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-brown-100 hover:bg-brown-200 text-brown-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="relative h-[280px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 object-cover rounded-full border-2 border-brown-200"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-700 italic mb-4">"{currentTestimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold text-brown-700">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-brown-600' : 'bg-brown-200'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};