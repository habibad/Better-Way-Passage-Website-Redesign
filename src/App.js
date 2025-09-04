import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, BookOpen, Award, Heart, Mail, Phone, MapPin, Menu, X, Play, Download, ArrowRight, Star, TrendingUp, Target, Lightbulb } from 'lucide-react';
import logo from './BWP_Option_2-removebg-preview.png';
// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Initiatives', 'Services', 'About Us', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BW</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800">Better</h1>
            <p className="text-xs text-gray-600 -mt-1">WAY PASSAGE</p>
          </div> */}
          <img src={logo} alt="Logo" className="h-20 w-60 object-cover position: static" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
               className="text-gray-700 hover:text-orange-400 transition-colors font-medium">
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden md:block bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-2 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105">
          Donate
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="py-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                   className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400">
                  {item}
                </a>
              ))}
              <button className="w-full mt-2 mx-4 bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-2 rounded-full">
                Donate
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: '500+', label: 'Healthcare Professionals', icon: Users },
    { number: '15+', label: 'Research Studies', icon: BookOpen },
    { number: '98%', label: 'Satisfaction Rate', icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Empowering
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Healthcare</span>
                <br />
                Excellence
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Supporting healthcare professionals through innovative research, comprehensive resources, and cutting-edge technology solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-8 py-4 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Take Our Survey</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Play size={20} />
                <span>Learn More</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`text-center p-4 rounded-xl transition-all duration-500 transform ${
                    currentStat === index ? 'bg-orange-50 scale-105' : 'bg-white'
                  }`}>
                    <div className="flex justify-center mb-2">
                      <Icon className={`w-6 h-6 ${currentStat === index ? 'text-orange-400' : 'text-gray-400'}`} />
                    </div>
                    <div className={`text-2xl font-bold ${currentStat === index ? 'text-orange-400' : 'text-gray-800'}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Brain Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
              {/* Brain SVG */}
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl relative flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-64 h-64 opacity-80">
                  <path d="M100 20 C140 20, 160 40, 160 70 C160 90, 150 100, 140 110 C130 120, 120 130, 100 140 C80 130, 70 120, 60 110 C50 100, 40 90, 40 70 C40 40, 60 20, 100 20 Z" 
                        fill="#ec4899" opacity="0.6" className="animate-pulse" />
                  <path d="M100 60 C120 60, 130 70, 130 85 C130 95, 125 100, 120 105 C115 110, 110 115, 100 120 C90 115, 85 110, 80 105 C75 100, 70 95, 70 85 C70 70, 80 60, 100 60 Z" 
                        fill="#fb7185" opacity="0.8" />
                </svg>
              </div>

              {/* Real Impact Card */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Real Impact</h3>
                    <p className="text-xs text-gray-600">Measured results in healthcare improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission Section Component
const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Bridging Healthcare Innovation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We bridge the gap between healthcare innovation and practical application, 
            ensuring every practitioner has access to the tools and knowledge needed for 
            exceptional patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

// Initiatives Section Component
const InitiativesSection = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Comprehensive training programs and continuing education resources.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Mentorship', 
      description: 'Connecting experienced professionals with emerging practitioners.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized certification programs and training pathways.',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="initiatives" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to elevate healthcare professionals at every stage of their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: '64%', label: 'Healthcare Professionals Trained', icon: Users },
    { number: '12%', label: 'Satisfaction Rate', icon: Star },
    { number: '6+', label: 'Research Studies', icon: BookOpen },
    { number: '77%', label: 'Support Available', icon: Heart }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Professional Healthcare Support, Accessible to Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get cutting-edge resources and training without the enterprise complexity. 
            Our platform makes advanced healthcare education simple and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-gray-700">Comprehensive training programs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-gray-700">Expert mentorship network</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-gray-700">Industry-recognized certifications</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-8 py-3 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: 'Research & Development',
      description: 'Cutting-edge research studies and evidence-based practice guidelines.',
      icon: Lightbulb,
      features: ['Clinical Studies', 'Best Practices', 'Innovation Labs']
    },
    {
      title: 'Technology Solutions',
      description: 'Advanced tools and platforms to streamline healthcare operations.',
      icon: Target,
      features: ['Practice Management', 'Analytics Tools', 'Integration Support']
    },
    {
      title: 'Professional Resources',
      description: 'Comprehensive libraries of resources for continuous learning.',
      icon: Download,
      features: ['Digital Library', 'Templates', 'Guidelines']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Services & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools, research, and technology solutions designed specifically for healthcare practitioners.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-300 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-orange-300 to-orange-400 text-white py-3 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Better Way Passage</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a passion for equitable healthcare, Better Way Passage emerged from the recognition that healthcare professionals need better access to innovative resources, training, and technology.
              </p>
              <p>
                Our team of healthcare experts, researchers, and technology specialists work tirelessly to bridge the gap between cutting-edge medical advances and practical application in everyday practice.
              </p>
              <p>
                We believe that every healthcare professional, regardless of their practice size or location, deserves access to world-class resources and support systems.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                Empowering healthcare professionals through research, resources, and technology to achieve excellence in patient care.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Healthcare Excellence</h3>
              <p className="text-gray-600">Driven by passion, powered by innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our community? Have questions about our programs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none"
                required
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-300 to-orange-400 text-white py-3 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@bwpinc.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Healthcare Innovation Center<br />123 Medical Way, Suite 456</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Survey Integration */}
            <div className="bg-gradient-to-r from-orange-300 to-orange-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Research</h3>
              <p className="mb-6 opacity-90">
                Help shape the future of healthcare by participating in our professional surveys and research studies.
              </p>
              <button className="bg-white text-orange-400 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <span>Take Survey</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    PRODUCT: ['Initiatives', 'Services', 'Stories', 'Donate'],
    COMPANY: ['About Us', 'Contact', 'Donate'],
    SUPPORT: ['Help Center', 'Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BW</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Better</h3>
                <p className="text-xs text-gray-400 -mt-1">WAY PASSAGE</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering healthcare professionals through research, resources, and technology tools.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} 
                       className="text-gray-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} Better Way Passage. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Donation Modal Component
const DonationModal = ({ isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    organization: ''
  });

  const handleDonation = (e) => {
    e.preventDefault();
    // Handle donation processing
    console.log('Donation:', { amount: donationAmount, recurring: isRecurring, donor: donorInfo });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Support Our Mission</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleDonation} className="space-y-6">
          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Amount</label>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {['25', '50', '100'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setDonationAmount(amount)}
                  className={`py-2 px-4 rounded-lg border-2 transition-all ${
                    donationAmount === amount 
                      ? 'border-orange-400 bg-orange-50 text-orange-600' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Custom amount"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
              min="1"
            />
          </div>

          {/* Recurring Donation */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="recurring"
              checked={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
              className="w-4 h-4 text-orange-400 rounded focus:ring-orange-400"
            />
            <label htmlFor="recurring" className="text-gray-700">Make this a monthly donation</label>
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={donorInfo.name}
              onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={donorInfo.email}
              onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
              required
            />
            <input
              type="text"
              placeholder="Organization (Optional)"
              value={donorInfo.organization}
              onChange={(e) => setDonorInfo({...donorInfo, organization: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-300 to-orange-400 text-white py-3 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Heart size={16} />
            <span>Donate ${donationAmount}{isRecurring ? '/month' : ''}</span>
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your donation helps us continue providing essential resources to healthcare professionals.
        </p>
      </div>
    </div>
  );
};

// Survey Modal Component
const SurveyModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState({
    profession: '',
    experience: '',
    specialty: '',
    challenges: [],
    satisfaction: 5
  });

  const surveySteps = [
    {
      title: "Professional Information",
      fields: [
        {
          name: "profession",
          type: "select",
          label: "Your Profession",
          options: ["Physician", "Nurse", "Therapist", "Administrator", "Other"]
        },
        {
          name: "experience",
          type: "select", 
          label: "Years of Experience",
          options: ["0-2 years", "3-5 years", "6-10 years", "11-20 years", "20+ years"]
        }
      ]
    },
    {
      title: "Practice Details",
      fields: [
        {
          name: "specialty",
          type: "text",
          label: "Medical Specialty",
          placeholder: "e.g., Cardiology, Pediatrics, etc."
        },
        {
          name: "challenges",
          type: "checkbox",
          label: "Current Challenges (Select all that apply)",
          options: ["Technology adoption", "Continuing education", "Patient communication", "Practice management", "Regulatory compliance"]
        }
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < surveySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey submitted:', surveyData);
    onClose();
    // Show thank you message or redirect
  };

  const handleFieldChange = (fieldName, value) => {
    setSurveyData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  if (!isOpen) return null;

  const currentStepData = surveySteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Healthcare Professional Survey</h3>
            <div className="flex space-x-2 mt-2">
              {surveySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-orange-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">{currentStepData.title}</h4>
            
            {currentStepData.fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                
                {field.type === 'select' && (
                  <select
                    value={surveyData[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}

                {field.type === 'text' && (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={surveyData[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                )}

                {field.type === 'checkbox' && (
                  <div className="space-y-2">
                    {field.options.map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={surveyData[field.name]?.includes(option) || false}
                          onChange={(e) => {
                            const current = surveyData[field.name] || [];
                            if (e.target.checked) {
                              handleFieldChange(field.name, [...current, option]);
                            } else {
                              handleFieldChange(field.name, current.filter(item => item !== option));
                            }
                          }}
                          className="w-4 h-4 text-orange-400 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentStep === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep === surveySteps.length - 1 ? (
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-2 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300"
              >
                Submit Survey
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-2 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);

  // Update all donation buttons to open modal
  useEffect(() => {
    const handleDonateClick = (e) => {
      if (e.target.textContent?.includes('Donate') || e.target.closest('button')?.textContent?.includes('Donate')) {
        e.preventDefault();
        setIsDonationModalOpen(true);
      }
      if (e.target.textContent?.includes('Survey') || e.target.closest('button')?.textContent?.includes('Survey')) {
        e.preventDefault();
        setIsSurveyModalOpen(true);
      }
    };

    document.addEventListener('click', handleDonateClick);
    return () => document.removeEventListener('click', handleDonateClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MissionSection />
      <InitiativesSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* Modals */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
      <SurveyModal 
        isOpen={isSurveyModalOpen} 
        onClose={() => setIsSurveyModalOpen(false)} 
      />
    </div>
  );
};

export default App;