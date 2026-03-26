import Image from 'next/image'
import Logo from './Logo.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">              <Image src={Logo} alt="Agaram Acolytes Logo" className="w-10 h-10 object-contain" />              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{fontFamily: '"Playfair Display", serif'}}>Agaram Acolytes</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in delay-100">
              Professional Web Development
              <span className="block text-3xl md:text-5xl mt-2">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
              I create stunning, high-performance websites that help businesses grow.
              From concept to launch, I deliver professional web solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
              <a href="https://forms.gle/Fx1D6b6yji3dyTYT7" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </a>
              <a href="#start-chat" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Start Chat
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Start Chat Modal */}
      <section id="start-chat" className="chat-overlay">
        <div className="chat-box">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Start Chat</h3>
            <a href="#" className="text-gray-500 hover:text-gray-900">Close</a>
          </div>
          <p className="mb-4 text-gray-700">Choose your developer to open WhatsApp chat</p>
          <div className="space-y-3">
            <a href="https://wa.me/918903480105" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Selladurai S - 8903480105
            </a>
            <a href="https://wa.me/917339109857" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Santhosh P - 7339109857
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in delay-100">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in delay-200">
              Services I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-300">
              Comprehensive web development solutions to bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group animate-fade-in delay-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group animate-fade-in delay-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, user-friendly designs that provide exceptional user experiences and drive engagement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group animate-fade-in delay-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast-loading websites optimized for speed, SEO, and mobile performance to maximize your ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of the professional websites I've built for clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, image: 'https://images.unsplash.com/photo-1460925895917-adf4e12482e5?w=600&h=400&fit=crop', title: 'E-commerce Platform', desc: 'Modern online store with seamless checkout and inventory management.' },
              { id: 2, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop', title: 'Dashboard Application', desc: 'Real-time analytics dashboard with interactive charts and reports.' },
              { id: 3, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', title: 'Web Application', desc: 'Full-stack application with responsive design and smooth performance.' }
            ].map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 group">
                <div className="h-48 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <Image src={project.image} alt={project.title} className="w-full h-full object-cover" width={600} height={400} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed italic bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                "Turn your ideas into reality, one code at a time. We may be students, but our passion for excellence is timeless."
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are aspiring college students who saw freelance web development not just as a side hustle, but as a serious business opportunity. Despite our years still being counted in single digits, we don't let inexperience hold us back. What we lack in years, we make up for in hunger, innovation, and dedication.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Agaram Acolytes, we specialize in building professional-grade websites that deliver results. We combine cutting-edge technology with creative design to craft digital solutions that impress. Our work speaks louder than our resume—clean code, stunning designs, and websites that actually convert.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Professional Quality Work</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Passionate & Committed</span>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Let's Build Together
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-96 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" alt="Students Succeeding" className="w-full h-full object-cover" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">
                  "Exceptional work! The website exceeded our expectations and has significantly improved our online presence."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">C{i}</span>
                  </div>
                  <div>
                    <div className="font-semibold">Client {i}</div>
                    <div className="text-gray-400 text-sm">CEO, Company {i}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your web development needs and create something amazing together.
              Get a free consultation and quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://forms.gle/Fx1D6b6yji3dyTYT7" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">agaramacolytes@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 8903480105</p>
                <p className="text-gray-600">+91 7339109857</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: '"Playfair Display", serif'}}>Agaram Acolytes</div>
              <p className="text-gray-400">
                Creating exceptional web experiences for businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-sm">i</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm">l</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agaram Acolytes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}