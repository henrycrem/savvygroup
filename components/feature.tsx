import React from 'react';
import { FaCouch, FaBirthdayCake } from 'react-icons/fa';
import { FiWifi } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';

const featureItemStyle = {
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', // Dark black box shadow
};

const Features: React.FC = () => {
  return (
    <div className='relative'>

   
    <div className="bg-yellow-500 py-12 md:transform md:skew-x-12 md:rounded-lg md:shadow-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 (takes half width on md screens) */}
          <div className="bg-white p-8 flex items-center transition-transform hover:scale-105" style={featureItemStyle}>
            {/* Add an icon or image here */}
            <FaCouch className="text-4xl text-yellow-500 mr-4" style={{ fontSize: '50px' }} />

            <div>
              {/* Feature 1 content */}
              <h3 className="text-2xl font-semibold mb-4">Cozy Ambiance</h3>
              <p>Experience warmth and comfort in our inviting space, where every visit feels like a hug from home.</p>
            </div>
          </div>

          {/* Feature 2 (takes half width on md screens) */}
          <div className="bg-white p-8 flex items-center transition-transform hover:scale-105" style={featureItemStyle}>
            {/* Add an icon or image here */}
            <FiWifi className="text-4xl text-yellow-500 mr-4" style={{ fontSize: '100px' }}  />

            <div>
              {/* Feature 2 content */}
              <h3 className="text-2xl font-semibold mb-4">Free Wifi</h3>
              <p>Stay connected with our high-speed WiFi service. Whether you're catching up on work, sharing your coffee shop moments on social media, or simply browsing the web, our free WiFi ensures you're always online without any interruptions.</p>
            </div>
          </div>

          {/* Feature 3 (takes half width on md screens) */}
          <div className="bg-white p-8 flex items-center transition-transform hover:scale-105" style={featureItemStyle}>
            {/* Add an icon or image here */}
            <FiCalendar className="text-4xl text-yellow-500 mr-4" style={{ fontSize: '100px' }}  />

            <div>
              {/* Feature 3 content */}
              <h3 className="text-2xl font-semibold mb-4">Online Reservation</h3>
              <p>Make your visit hassle-free with our convenient online reservation system. Book a table in advance, ensuring you have a guaranteed spot whenever you decide to drop by.</p>
            </div>
          </div>

          {/* Feature 4 (takes half width on md screens) */}
          <div className="bg-white p-8 flex items-center transition-transform hover:scale-105" style={featureItemStyle}>
            {/* Add an icon or image here */}
            <FaBirthdayCake className="text-4xl text-yellow-500 mr-4" style={{ fontSize: '100px' }}  />

            <div>
              {/* Feature 4 content */}
              <h3 className="text-2xl font-semibold mb-4">Event Hosting</h3>
              <p>Host your special events and celebrations with ease. Our event hosting services provide the perfect venue and amenities to create memorable experiences for you and your guests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
