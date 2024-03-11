import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '../components/ui/rating'; // Import the Rating component


const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      caption: "Had a very nice time",
      name: 'John Doe',
      photo: '/images/testmon-one.jpg',
      comment: 'My experience at Savvy coffee shop on 3rd street sinkor was nothing short of amazing. From the moment I stepped through the door, I was greeted with a warm and welcoming atmosphere. The attention to detail in creating a comfortable and enjoyable space is truly commendable. Whether it was savoring delicious meals, enjoying a cozy ambiance. I can not wait to go back again!',
      email:'joedoe@gmail.com',
      rating: 5,
    },
    {
      caption: "The Wifi was just great",
      name: 'Jane Smith',
      photo: '/images/test-two.jfif',
      comment: 'I can not express how much I have enjoyed the exceptional WiFi service provided by Savvy Group. From fast downloads to seamless video streaming, my online experience has never been better. Thanks to Savvy Group, I can now stay connected and productive without any interruptions. Its truly a game-changer!',
      email:'jsmith560@gmail.com',
      rating: 4,
    },
    {
     caption: "Great atmosphere and customer care",
      name: 'Hawa Kamarah',
      photo: '/images/test-three.jpg',
      comment: 'The atmosphere at Savvy entertainment centers is truly exceptional. Their dedication to customer care is evident from the moment you walk in. The staff goes above and beyond to create a welcoming and friendly environment. Its not just a service provider; its a place where you feel valued and cared for.',
      email:'kamarahhawa234@yahoo.com',
      rating: 4,
    },
    {
        caption: "Affordable Prices",
         name: 'Bob Johnson',
         photo: '/images/test-four.avif',
         comment: 'I was pleasantly surprised by the affordability of Savvy bar in congo town. I was able to access top-notch solutions without breaking the bank. Savvy Group offers great value for the price, making it an excellent choice for anyone looking to save money while enjoying high-quality services.',
         email:'johnsonb@yahoo.com',
         rating: 5,
       },
    // Add more testimonial data here
  ];

  return (
    <div className="bg-white-100 py-5 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-black text-center">Customer Testimonials</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const TestimonialItem: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <div className="testimonial-item hover:scale-105 h-96"> {/* Adjust the height as needed */}
      <div className="bg-white p-8 rounded-lg shadow-lg mr-4 h-full flex flex-col justify-between"> {/* Add flex properties */}
        <div>
          <Rating rating={testimonial.rating} />
          <p className="text-black mt-3 mb-3 font-semibold">{testimonial.caption}</p>
          <p className="text-black">{testimonial.comment}</p>
        </div>
        <div className='flex items-center'>
          <img src={testimonial.photo} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
          <div>
            <p className="ml-2 text-black font-semibold">{testimonial.name}</p>
            <p className="ml-2 text-yellow-500">{testimonial.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

  
  
  
export default Testimonials;
