import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Enhanced Hero Section with Family Background */}
      <header
        className="relative text-white py-20 px-4 overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(21, 128, 61, 0.8)), url('/Header.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-300 bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Company Logo */}
            <div className="mb-4 flex justify-center">
              <img
                src="/LOGO.png"
                alt="Anchor & Oak Insurance Logo"
                className="h-120 md:h-160 w-auto filter drop-shadow-lg"
                style={{ height: '30rem' }}
              />
            </div>

            {/* Enhanced Tagline */}
            <p className="text-xl md:text-2xl mt-4 mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Protecting Florida families with comprehensive life insurance solutions.
              <span className="block mt-2 text-green-100">Affordable coverage. Personal service. Peace of mind.</span>
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free Consultations
              </div>
              <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Support
              </div>
              <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Licensed & Certified
              </div>
            </div>

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="group bg-white text-green-800 px-8 py-4 rounded-xl shadow-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Quote
              </a>
              <a href="#services" className="group border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl hover:bg-white hover:bg-opacity-10 hover:border-white transition-all duration-300 font-semibold backdrop-blur-sm flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-green-100">
              <a href="tel:337-288-8166" className="flex items-center hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (337) 288-8166
              </a>
              <span className="hidden sm:block">•</span>
              <a href="mailto:contact@anchorandoak.com" className="flex items-center hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@anchorandoak.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition with Family Image */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Secure Your Family's Future</h2>
              <p className="text-xl mb-10 text-gray-600 leading-relaxed">
                I help Florida families and individuals find affordable life insurance solutions that provide financial security and peace of mind for their loved ones.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#services" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition duration-300">
                  Explore Services
                </a>
                <a href="#contact" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition duration-300">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Secure.jpeg"
                alt="Secure your family's future with life insurance"
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Family Focus */}
      <section id="services" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Life Insurance Solutions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Comprehensive life insurance options designed to protect Florida families and provide financial security.</p>

          {/* Diverse Family Protection Banner */}
          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Diverse multi-generational family enjoying time together"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-60 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Every Family Matters</h3>
                  <p className="text-lg opacity-90">Comprehensive coverage for all</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/FamilyStructure.jpeg"
                alt="Diverse family with children from different backgrounds"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-60 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">All Family Structures</h3>
                  <p className="text-lg opacity-90">Traditional and single-parent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Term Life Insurance</h3>
              <p className="text-gray-600">Affordable coverage for a specific period, perfect for young families and those with temporary needs.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Whole Life Insurance</h3>
              <p className="text-gray-600">Permanent coverage with cash value growth, providing lifelong protection and investment benefits.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Universal Life Insurance</h3>
              <p className="text-gray-600">Flexible premium payments and death benefits with investment options for long-term financial planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-lg w-full h-auto overflow-hidden shadow-lg">
              <img
                src="/Jen1.jpg"
                alt="Anchor & Oak Insurance Agent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a licensed life insurance agent dedicated to helping Florida families understand and choose the best life insurance policies for their unique situations.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My mission is to provide personalized service and find affordable life insurance coverage options that give you and your family peace of mind.
            </p>
            <div className="flex gap-4">
              {/* Social media links */}
              <a href="#" className="text-green-600 hover:text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              {/* More social icons... */}
            </div>
          </div>
        </div>
      </section>

      {/* Family Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Florida Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how life insurance has provided peace of mind and financial security for families just like yours.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="/alone.jpeg"
                alt="Individual professional planning for the future"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                style={{ imageRendering: 'auto', objectFit: 'cover' }}
              />
              <h3 className="text-lg font-semibold mb-2">Individuals</h3>
              <p className="text-gray-600">Personal life insurance coverage for single professionals and individuals planning for their future.</p>
            </div>

            <div className="text-center">
              <img
                src="/Young.jpeg"
                alt="Young family with both parents and children"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                style={{ imageRendering: 'auto', objectFit: 'cover' }}
              />
              <h3 className="text-lg font-semibold mb-2">Young Families</h3>
              <p className="text-gray-600">Protecting growing families with affordable term life insurance that grows with your needs.</p>
            </div>

            <div className="text-center">
              <img
                src="/Growing.jpeg"
                alt="Growing family with parents and children"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                style={{ imageRendering: 'auto', objectFit: 'cover' }}
              />
              <h3 className="text-lg font-semibold mb-2">Growing Families</h3>
              <p className="text-gray-600">Building a secure future together with whole life policies that provide both protection and savings.</p>
            </div>

            <div className="text-center">
              <img
                src="/Older.jpeg"
                alt="Grandparents with their adult children and grandchildren"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                style={{ imageRendering: 'auto', objectFit: 'cover' }}
              />
              <h3 className="text-lg font-semibold mb-2">Multi-Generational</h3>
              <p className="text-gray-600">Leaving a lasting legacy with universal life insurance that benefits multiple generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Life Insurance Quote</h2>
            <p className="text-xl text-gray-600">Ready to protect your family? Get a free life insurance quote today!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              action="https://formsubmit.co/YOUR_EMAIL@example.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  />
                </div>
              </div>
              
              {/* More form fields... */}
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with more information */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anchor & Oak Insurance</h3>
            <p className="text-gray-400">Providing reliable life insurance solutions for Florida families.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Serving All of Florida</p>
            <p className="text-gray-400 mb-2">Phone: (337) 288-8166</p>
            <p className="text-gray-400">Email: contact@anchorandoak.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-400 mb-2">Monday-Friday: 9am-5pm</p>
            <p className="text-gray-400">Weekends: By appointment</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anchor & Oak Insurance | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}


