import React from 'react';
import how_it_works_1 from '../assets/images/h1.jpeg';
import how_it_works_2 from '../assets/images/h2.jpg';
import how_it_works_3 from '../assets/images/h3.png';
import how_it_works_4 from '../assets/images/h4.jpg';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img src={how_it_works_1} alt="Step 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Sign Up for Free</h3>
            <p>Create an account to get started</p>
          </div>
          <div className="text-center">
            <img src={how_it_works_2} alt="Step 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Set and Store Exam Questions</h3>
            <p>Easily add questions to your exams</p>
          </div>
          <div className="text-center">
            <img src={how_it_works_3} alt="Step 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Create or Enroll in Exams</h3>
            <p>Create exams or join as a participant</p>
          </div>
          <div className="text-center">
            <img src={how_it_works_4} alt="Step 4" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Submit and Get Results</h3>
            <p>Submit your exam and receive instant results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
