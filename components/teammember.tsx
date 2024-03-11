import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Teammember: React.FC = () => {
  // Define team member data here
  const teamMembers = [
    {
      name: 'Sam Griffiths',
      position: 'President/CEO',
      
      imageSrc: '/images/ceo(1).png',
      facebookLink: 'https://www.facebook.com/sam.griffiths.56?mibextid=b06tZ0',
      twitterLink: 'https://twitter.com/johndoe',
      linkedinLink: 'https://linkedin.com/in/johndoe',
    },
    {
      name: 'Adran Brown',
      position: 'Project Manager',
    
      imageSrc: '/images/mg.jpeg',
      facebookLink: 'https://www.facebook.com/kossimawuli.batawila?mibextid=b06tZ0',
      twitterLink: 'https://twitter.com/janesmith',
      linkedinLink: 'https://linkedin.com/in/janesmith',
    },
    {
      name: 'Prince Saah Bonnah Jr.',
      position: 'Chief Financial Officer (CFO)',
     
      imageSrc: '/images/accountant.png',
      facebookLink: 'https://www.facebook.com/profile.php?id=100002678929156&mibextid=b06tZ0',
      twitterLink: 'https://twitter.com/bobjohnson',
      linkedinLink: 'https://linkedin.com/in/bobjohnson',
    },
  ];

  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);
  
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-black text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberItem key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberItem: React.FC<{ member: any }> = ({ member }) => {
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);

  return (
    <div
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 flex relative"
      onMouseEnter={() => setShowSocialMediaIcons(true)}
      onMouseLeave={() => setShowSocialMediaIcons(false)}
    >
      {/* Container for image, name, and position */}
      <div className="flex items-center mr-4">
        <div>
          <img src={member.imageSrc} alt={member.name} className="w-30 h-60 rounded-full mr-4 m-auto m-o mx-sm:m-auto mx-sm:m-0" />
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p> {member.position}</p>
         
        </div>
      </div>

      {/* Container for social media icons */}
      {showSocialMediaIcons && (
        <div className="flex items-center absolute top-0 right-0 p-2 space-x-2  transition-opacity duration-500 group-hover:opacity-100">
          {/* Social media icons/links */}
          <a href={member.facebookLink} target="_blank" rel="noopener noreferrer" className=" shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 ">
            <FaFacebook className="text-2xl text-yellow-500 shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 " />
          </a>
          <a href={member.twitterLink} target="_blank" rel="noopener noreferrer" className=" shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 ">
            <FaTwitter className="text-2xl text-yellow-500 shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 " />
          </a>
         
          <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer" className=" shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 hover:text-blue-600">
            <FaLinkedin className="text-2xl text-yellow-500 shadow-lg hover:shadow-xl hover:opacity-75 hover:shadow-black transition-transform duration-300 " />
          </a>
        </div>
      )}
    </div>
  );
};


export default Teammember;
