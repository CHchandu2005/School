// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X, GraduationCap } from 'lucide-react';
// import { motion } from 'framer-motion';

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Daily Updates', path: '/updates' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Staff', path: '/staff' },
//   ];
  
//   const navbarClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
//     isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
//   }`;

//   const mobileMenuVariants = {
//     closed: {
//       x: '100%',
//       transition: {
//         type: 'tween',
//         duration: 0.3,
//       },
//     },
//     open: {
//       x: 0,
//       transition: {
//         type: 'tween',
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <nav className={navbarClass}>
//       <div className="container-custom flex items-center justify-between">
//         {/* Logo */}
//         <NavLink to="/" className="flex items-center gap-2">
//           <GraduationCap size={28} className="text-brown-700" />
//           <div>
//             <h1 className="text-lg font-bold text-brown-700 leading-tight">Municipal High School</h1>
//             <p className="text-xs text-brown-600 font-medium">Laxminagar, Andhra Pradesh</p>
//           </div>
//         </NavLink>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition-colors hover:text-brown-700 ${
//                   isActive ? 'text-brown-700 border-b-2 border-brown-500' : 'text-gray-700'
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 hover:text-brown-700 focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       <motion.div
//         className="fixed top-0 right-0 bottom-0 w-3/4 bg-white shadow-lg z-50 md:hidden flex flex-col"
//         initial="closed"
//         animate={isMenuOpen ? "open" : "closed"}
//         variants={mobileMenuVariants}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold text-brown-700">Menu</h2>
//           <button
//             className="text-gray-700 hover:text-brown-700 focus:outline-none"
//             onClick={toggleMenu}
//             aria-label="Close menu"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div className="flex flex-col p-4">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `py-3 px-4 text-base font-medium transition-colors hover:bg-brown-50 rounded-md ${
//                   isActive ? 'text-brown-700 bg-brown-50' : 'text-gray-700'
//                 }`
//               }
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>
//       </motion.div>
      
//       {/* Overlay for mobile menu */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </nav>
//   );
// };

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Daily Updates', path: '/updates' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Staff', path: '/staff' },
  ];
  
  const navbarClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
  }`;

  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <nav className={navbarClass}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <GraduationCap size={28} className="text-brown-700" />
          <div>
            <h1 className="text-lg font-bold text-brown-700 leading-tight">Municipal High School</h1>
            <p className="text-xs text-brown-600 font-medium">Laxminagar, Andhra Pradesh</p>
          </div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brown-700 ${
                  isActive ? 'text-brown-700 border-b-2 border-brown-500' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-brown-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-3/4 bg-white shadow-lg z-50 md:hidden flex flex-col"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-brown-700">Menu</h2>
          <button
            className="text-gray-700 hover:text-brown-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 bg-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `py-3 px-4 text-base font-medium transition-colors hover:bg-brown-50 rounded-md ${
                  isActive ? 'text-brown-700 bg-brown-50' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};