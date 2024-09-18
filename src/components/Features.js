import React from 'react';
import featureImage1 from '../assets/images/features/f1.jpeg'; // You can replace this image with relevant ones
import featureImage2 from '../assets/images/features/f2.jpeg'; // You can replace this image with relevant ones
import featureImage3 from '../assets/images/features/f3.png'; // You can replace this image with relevant ones
import featureImage4 from '../assets/images/features/f4.jpeg'; // You can replace this image with relevant ones
import featureImage5 from '../assets/images/features/f5.jpg'; // You can replace this image with relevant ones

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-4 shadow-lg">
            <img src={featureImage1} alt="Create and Manage Exams" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-4">Create and Manage Exams</h3>
            <p>Easily create, modify, and manage exams with our simple-to-use tools.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center p-4 shadow-lg">
              <img src={featureImage2} alt="Automated Grading" className="w-full h-48 object-cover mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Automated Grading</h3>
              <p>Automatically grade exams, saving time and effort with accurate results.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center p-4 shadow-lg">
              <img src={featureImage3}  alt="Real-time Results" className="w-full h-48 object-cover mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Real-Time Results</h3>
              <p>Get instant feedback and results after each exam is completed.</p>
          </div>
          {/* Feature 4 */}
          <div className="text-center p-4 shadow-lg">
              <img src={featureImage4}  alt="Secure Exam Environment" className="w-full h-48 object-cover mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Secure Exam Environment</h3>
              <p>Our platform ensures that all exams are secure and protected from tampering.</p>
          </div>
          {/* Feature 5 */}
          <div className="text-center p-4 shadow-lg">
              <img src={featureImage5}  alt="Multiple Question Types" className="w-full h-48 object-cover mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Support for Multiple Question Types</h3>
              <p>Include different types of questions, such as multiple-choice, short answers, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
