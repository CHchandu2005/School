import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, PhoneCall } from 'lucide-react';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Principal',
      education: 'Ph.D. in Education, M.Sc. Mathematics',
      experience: '25+ years',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'principal@mhslaxminagar.edu.in',
      phone: '+91 9876543210',
    },
    {
      id: 2,
      name: 'Mrs. Sunita Reddy',
      position: 'Vice Principal',
      education: 'M.A. English Literature, B.Ed.',
      experience: '22 years',
      image: 'https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'viceprincipal@mhslaxminagar.edu.in',
      phone: '+91 9876543211',
    },
    {
      id: 3,
      name: 'Mr. Venkat Rao',
      position: 'Science Department Head',
      education: 'M.Sc. Physics, B.Ed.',
      experience: '18 years',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'science@mhslaxminagar.edu.in',
      phone: '+91 9876543212',
    },
    {
      id: 4,
      name: 'Mrs. Lakshmi Devi',
      position: 'Mathematics Department Head',
      education: 'M.Sc. Mathematics, B.Ed.',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5212326/pexels-photo-5212326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'math@mhslaxminagar.edu.in',
      phone: '+91 9876543213',
    },
    {
      id: 5,
      name: 'Mr. Anand Sharma',
      position: 'Social Sciences Department Head',
      education: 'M.A. History, M.Ed.',
      experience: '14 years',
      image: 'https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'socialscience@mhslaxminagar.edu.in',
      phone: '+91 9876543214',
    },
    {
      id: 6,
      name: 'Mrs. Priya Nair',
      position: 'Languages Department Head',
      education: 'M.A. Sanskrit, M.A. English, B.Ed.',
      experience: '16 years',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'languages@mhslaxminagar.edu.in',
      phone: '+91 9876543215',
    },
    {
      id: 7,
      name: 'Mr. Ravi Teja',
      position: 'Physical Education Director',
      education: 'M.P.Ed., National Level Sports Certifications',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/6180194/pexels-photo-6180194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'sports@mhslaxminagar.edu.in',
      phone: '+91 9876543216',
    },
    {
      id: 8,
      name: 'Mrs. Savita Goel',
      position: 'Counselor',
      education: 'M.A. Psychology, Diploma in Counseling',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'counselor@mhslaxminagar.edu.in',
      phone: '+91 9876543217',
    },
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="text-white py-16 bg-cover bg-center  h-[18vh] md:h-[40vh]"
        style={{
          backgroundImage: `url('Staff.png')`
        }}
      >
      </section>
      
      {/* Staff Grid */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Faculty</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of experienced educators is dedicated to fostering academic excellence, personal growth, and character development in our students.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member, index) => (
              <AnimatedSection key={member.id} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-100">
                  <div className="aspect-w-3 aspect-h-2">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brown-700 mb-1">{member.name}</h3>
                    <p className="text-brown-600 font-medium mb-3">{member.position}</p>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm"><span className="font-medium">Education:</span> {member.education}</p>
                      <p className="text-gray-700 text-sm"><span className="font-medium">Experience:</span> {member.experience}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail size={16} className="text-brown-600" />
                        <a href={`mailto:${member.email}`} className="text-brown-600 hover:text-brown-800 text-sm">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <PhoneCall size={16} className="text-brown-600" />
                        <a href={`tel:${member.phone}`} className="text-brown-600 hover:text-brown-800 text-sm">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;