import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Medisquad</h1>
          <p className="text-lg">
            Empowering you to take control of your health, no matter where you are.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Our Vision</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Medisquad, we believe that access to healthcare should be as easy as accessing any other essential service. In a world where convenience is key, we are dedicated to making sure that your health is never left behind. Medisquad is more than just a service—it's a lifeline, connecting you to the care you need, when you need it.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether it's managing a chronic condition, seeking expert advice, or simply getting a quick check-up, Medisquad is here to ensure that quality healthcare is always within your reach. We’re committed to breaking down barriers and making healthcare a more accessible, comfortable, and empowering experience for everyone.
          </p>

          <h2 className="text-2xl font-bold text-teal-600 mb-6">Why Medisquad Matters</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Accessible Care: Receive the care you need, regardless of your location, without the hassle of travel or long wait times.</li>
            <li>Peace of Mind: With our secure platform, you can rest easy knowing that your personal and health information is always protected.</li>
            <li>Convenience at Your Fingertips: Schedule appointments, consult with healthcare professionals, and manage your health all from the comfort of your home.</li>
            <li>Support Every Step of the Way: Our team is here to support you, providing not just medical consultations, but a compassionate ear and reliable advice.</li>
            <li>A Personal Touch: At Medisquad, we understand that healthcare is personal, which is why we tailor our services to meet your individual needs.</li>
          </ul>
        </div>
      </div>

      {/* How Medisquad Works Section */}
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">How Medisquad Works</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Getting started with Medisquad is simple. Our platform is designed to make your healthcare experience as smooth and straightforward as possible. Here’s how it works:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
            <li><strong>Get Started:</strong> Create your profile and tell us a bit about your health needs.</li>
            <li><strong>Find the Right Fit:</strong> Choose from a range of healthcare providers and specialties that suit your needs.</li>
            <li><strong>Book with Ease:</strong> Schedule a consultation at a time that works for you.</li>
            <li><strong>Consult Securely:</strong> Meet with your healthcare provider via secure video or chat, from wherever you are.</li>
            <li><strong>Stay Connected:</strong> Access your records, follow up on care, and manage your health journey all in one place.</li>
          </ol>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">What People Are Saying</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <p className="text-gray-700 italic">"Using Medisquad was so easy, and I felt comfortable and secure during my entire consultation."</p>
              <p className="text-gray-700 font-bold mt-2">- Emily R.</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <p className="text-gray-700 italic">"I was able to get the help I needed without leaving my house. It was a relief to have access to quality care so quickly."</p>
              <p className="text-gray-700 font-bold mt-2">- David M.</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <p className="text-gray-700 italic">"Medisquad really understands the needs of patients like me. It’s a service I trust and will continue to use."</p>
              <p className="text-gray-700 font-bold mt-2">- Lisa P.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
