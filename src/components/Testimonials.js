import React from 'react';
import testImage2 from '../assets/images/t2.jpeg';
import testImage3 from '../assets/images/t3.jpeg';

const testimonials = [
  {
    image: testImage2,
    name: 'John Doe',
    quote: "This platform has transformed the way I take exams. Highly recommend it!"
  },
  {
    image: testImage3,
    name: 'Jane Smith',
    quote: "ExamBook made managing my exams so easy and stress-free!"
  },
  {
    image: testImage3,
    name: 'Michael Lee',
    quote: "A reliable and efficient platform. My go-to for all my online exams."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-lg">
              <img
                src={testimonial.image}
                alt={`User ${testimonial.name}`}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-center italic">"{testimonial.quote}"</p>
              <p className="text-center font-bold mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
