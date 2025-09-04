import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, BookOpen, Award, Heart, Mail, Phone, MapPin, Menu, X, Play, Download, ArrowRight, Star, TrendingUp, Target, Lightbulb, Sparkles, Zap, Shield, CheckCircle } from 'lucide-react';
import logo from "./BWP_Option_2-removebg-preview.png";
// Header Component
const Header = ({ onDonateClick }) => {
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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">BW</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Better Way</h1>
            <p className="text-sm text-orange-500 font-semibold -mt-1 tracking-wider">PASSAGE</p>
          </div> */}

          <img src={logo} alt="Logo" className="h-20 w-60 object-cover position: static" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
               className="relative group text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold text-sm tracking-wide">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        
        <button 
          onClick={onDonateClick}
          className="hidden md:block relative overflow-hidden bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 text-white px-8 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <span className="relative z-10">Donate</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl md:hidden border-t border-gray-100">
            <nav className="py-6">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                   className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-500 transition-all">
                  {item}
                </a>
              ))}
              <button 
                onClick={onDonateClick}
                className="w-full mt-4 mx-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl shadow-lg"
              >
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
const HeroSection = ({ onSurveyClick }) => {
  const [currentStat, setCurrentStat] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const stats = [
    { number: '500+', label: 'Healthcare Professionals', icon: Users, color: 'from-blue-400 to-cyan-400' },
    { number: '15+', label: 'Research Studies', icon: BookOpen, color: 'from-green-400 to-emerald-400' },
    { number: '98%', label: 'Satisfaction Rate', icon: Star, color: 'from-yellow-400 to-orange-400' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-100">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">Empowering Healthcare Excellence</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Transform</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">Healthcare</span>
                <br />
                <span className="text-gray-800">Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Empowering healthcare professionals through cutting-edge research, comprehensive resources, and revolutionary technology solutions that shape the future of patient care.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={onSurveyClick}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <span className="relative z-10 font-semibold">Take Our Survey</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-gray-800 text-gray-800 px-10 py-5 rounded-2xl hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-3 hover:shadow-xl transform hover:scale-105">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`text-center p-6 rounded-3xl transition-all duration-700 transform ${
                    currentStat === index ? 'bg-white shadow-2xl scale-110 border border-gray-100' : 'bg-white/50 backdrop-blur-sm hover:bg-white/80'
                  }`}>
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center ${
                        currentStat === index ? 'animate-pulse' : ''
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${currentStat === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500' : 'text-gray-800'}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Content - Enhanced Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-[2rem] p-10 relative overflow-hidden shadow-2xl border border-gray-100">
              {/* Interactive Brain Visualization */}
              <div className="w-full h-[500px] bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-3xl relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/50 to-purple-200/50 animate-pulse"></div>
                
                {/* Enhanced Brain SVG */}
                <svg viewBox="0 0 300 300" className="w-80 h-80 relative z-10">
                  <defs>
                    <linearGradient id="brainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#f97316", stopOpacity:0.8}} />
                      <stop offset="50%" style={{stopColor:"#ec4899", stopOpacity:0.8}} />
                      <stop offset="100%" style={{stopColor:"#8b5cf6", stopOpacity:0.8}} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <path d="M150 50 C200 50, 230 80, 230 120 C230 150, 220 170, 200 185 C180 200, 170 210, 150 220 C130 210, 120 200, 100 185 C80 170, 70 150, 70 120 C70 80, 100 50, 150 50 Z" 
                        fill="url(#brainGradient1)" 
                        filter="url(#glow)"
                        className="animate-pulse" />
                  
                  {/* Neural connections */}
                  <circle cx="150" cy="120" r="3" fill="#f97316" className="animate-ping">
                    <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="120" cy="140" r="2" fill="#ec4899" className="animate-ping animation-delay-1000">
                    <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="130" r="2" fill="#8b5cf6" className="animate-ping animation-delay-2000">
                    <animate attributeName="r" values="2;7;2" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                
                {/* Floating Icons */}
                <div className="absolute top-10 left-10 animate-bounce">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 animate-bounce animation-delay-1000">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Impact Card */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Real Impact</h3>
                    <p className="text-sm text-gray-600">Transforming healthcare outcomes</p>
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-purple-50/50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-8">
            <Heart className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Our Mission</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-10 leading-tight">
            Bridging Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Innovation</span>
          </h2>
          
          <p className="text-2xl text-gray-600 leading-relaxed font-light">
            We bridge the gap between healthcare innovation and practical application, 
            ensuring every practitioner has access to the tools and knowledge needed for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold"> exceptional patient care</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

// Enhanced Initiatives Section
const InitiativesSection = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: 'Advanced Education',
      description: 'Comprehensive training programs and cutting-edge continuing education resources.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Interactive Learning', 'Certification Pathways', 'Expert-Led Sessions']
    },
    {
      icon: Users,
      title: 'Mentorship Network', 
      description: 'Connecting experienced professionals with emerging practitioners for growth.',
      color: 'from-orange-500 to-yellow-400',
      bgColor: 'from-orange-50 to-yellow-50',
      features: ['1-on-1 Mentoring', 'Peer Networks', 'Career Development']
    },
    {
      icon: Award,
      title: 'Professional Certification',
      description: 'Industry-recognized certification programs and specialized training pathways.',
      color: 'from-green-500 to-emerald-400',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['Accredited Programs', 'Skill Validation', 'Career Advancement']
    }
  ];
  
  return (
    <section id="initiatives" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-8">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Our Initiatives</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Empowering Excellence</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive programs designed to elevate healthcare professionals at every stage of their careers through innovation, collaboration, and continuous learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div key={index} className={`group bg-gradient-to-br ${initiative.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${initiative.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{initiative.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {initiative.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${initiative.color} rounded-full`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${initiative.color} text-white py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Enhanced Stats Section
const StatsSection = () => {
  const stats = [
    { number: '64%', label: 'Healthcare Professionals Trained', icon: Users, color: 'from-blue-500 to-cyan-400' },
    { number: '12%', label: 'Satisfaction Rate', icon: Star, color: 'from-yellow-500 to-orange-400' },
    { number: '6+', label: 'Research Studies', icon: BookOpen, color: 'from-green-500 to-emerald-400' },
    { number: '77%', label: 'Support Available', icon: Heart, color: 'from-pink-500 to-rose-400' }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Professional Healthcare Support,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Accessible to Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access cutting-edge resources and training without enterprise complexity. 
            Our platform makes advanced healthcare education simple, affordable, and impactful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
              <span className="text-gray-700 font-medium">Comprehensive training programs</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              <span className="text-gray-700 font-medium">Expert mentorship network</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              <span className="text-gray-700 font-medium">Industry-recognized certifications</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Get Started Today
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Services Section
const ServicesSection = () => {
  const services = [
    {
      title: 'Research & Development',
      description: 'Cutting-edge research studies and evidence-based practice guidelines that drive innovation.',
      icon: Lightbulb,
      features: ['Clinical Studies', 'Best Practices', 'Innovation Labs', 'Data Analytics'],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      title: 'Technology Solutions',
      description: 'Advanced tools and platforms designed to streamline healthcare operations and improve outcomes.',
      icon: Target,
      features: ['Practice Management', 'Analytics Tools', 'Integration Support', 'Cloud Solutions'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      title: 'Professional Resources',
      description: 'Comprehensive libraries of resources for continuous learning and professional development.',
      icon: Download,
      features: ['Digital Library', 'Templates', 'Guidelines', 'Training Materials'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-8">
            <Target className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Services & Resources</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Comprehensive Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced tools, research, and technology solutions specifically designed for healthcare practitioners to excel in their field.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`group bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2`}>
                  <span>Explore Service</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Enhanced About Section
const AboutSection = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-purple-50/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <Heart className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">About Us</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Better Way Passage</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded with a passionate vision for equitable healthcare, Better Way Passage emerged from the recognition that healthcare professionals deserve better access to innovative resources, training, and cutting-edge technology.
              </p>
              <p>
                Our diverse team of healthcare experts, pioneering researchers, and technology specialists work tirelessly to bridge the gap between cutting-edge medical advances and practical application in everyday practice environments.
              </p>
              <p>
                We believe that every healthcare professional, regardless of their practice size, location, or resources, deserves access to world-class resources and comprehensive support systems that drive excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-3xl p-8 border border-gray-100 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering healthcare professionals through innovative research, comprehensive resources, and revolutionary technology to achieve unprecedented excellence in patient care and professional development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Learn More
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 font-semibold">
                Our Story
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-3xl p-12 h-[600px] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-purple-200/30 animate-pulse"></div>
              
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative">
                  <Heart className="w-16 h-16 text-white animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-full animate-spin opacity-20"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Healthcare Excellence</h3>
                <p className="text-gray-600 text-lg">Driven by passion, powered by innovation</p>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Community</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Innovation</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Excellence</p>
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

// Enhanced Contact Section
const ContactSection = ({ onSurveyClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-8">
            <Mail className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your healthcare practice? Have questions about our programs? We'd love to hear from you and explore how we can support your journey.
          </p>
        </div>
        
        {isSubmitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center space-x-4 max-w-2xl mx-auto">
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-800 text-lg">Message Sent Successfully!</h3>
              <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          </div>
        )}
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-full -translate-y-20 translate-x-20"></div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-8 relative z-10">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all text-gray-700 font-medium"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all text-gray-700 font-medium"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all text-gray-700 font-medium"
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none text-gray-700 font-medium"
                required
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Send Message</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
          
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full -translate-y-16 translate-x-16"></div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                    <p className="text-gray-600">info@bwpinc.org</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Address</h4>
                    <p className="text-gray-600">Healthcare Innovation Center<br />123 Medical Way, Suite 456</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Survey Integration */}
            <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Join Our Research</h3>
                </div>
                
                <p className="mb-8 opacity-90 text-lg leading-relaxed">
                  Shape the future of healthcare by participating in our groundbreaking professional surveys and research studies. Your insights drive innovation.
                </p>
                
                <button 
                  onClick={onSurveyClick}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center space-x-3 font-semibold transform hover:scale-105 shadow-lg"
                >
                  <span>Take Survey</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = {
    PRODUCT: ['Initiatives', 'Services', 'Stories', 'Donate'],
    COMPANY: ['About Us', 'Contact', 'Careers', 'News'],
    SUPPORT: ['Help Center', 'Privacy Policy', 'Terms of Service', 'FAQ']
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">BW</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Better Way</h3>
                <p className="text-sm text-orange-400 font-semibold -mt-1 tracking-wider">PASSAGE</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering healthcare professionals through innovative research, comprehensive resources, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold text-sm">Li</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold text-sm">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold text-sm">Fb</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} 
                       className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Better Way Passage. All rights reserved. Transforming healthcare through innovation.
            </p>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Donation Modal
const DonationModal = ({ isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    organization: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleDonation = (e) => {
    e.preventDefault();
    console.log('Donation:', { amount: donationAmount, recurring: isRecurring, donor: donorInfo });
    setIsSubmitted(true);
    
    // Reset form after submission
    setDonorInfo({
      name: '',
      email: '',
      organization: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-full -translate-y-16 translate-x-16"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Support Our Mission</h3>
            <p className="text-gray-600 mt-2">Help us transform healthcare</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-10 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your donation has been received. We appreciate your support!</p>
          </div>
        ) : (
          <form onSubmit={handleDonation} className="space-y-8 relative z-10">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4">Donation Amount</label>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['25', '50', '100'].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationAmount(amount)}
                    className={`py-3 px-4 rounded-2xl border-2 transition-all font-semibold ${
                      donationAmount === amount 
                        ? 'border-orange-400 bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600' 
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
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
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
                min="1"
              />
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 border border-gray-100">
              <input
                type="checkbox"
                id="recurring"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="w-5 h-5 text-orange-400 rounded focus:ring-orange-400"
              />
              <label htmlFor="recurring" className="text-gray-700 font-medium">Make this a monthly donation</label>
            </div>
            
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                value={donorInfo.name}
                onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={donorInfo.email}
                onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Organization (Optional)"
                value={donorInfo.organization}
                onChange={(e) => setDonorInfo({...donorInfo, organization: e.target.value})}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg"
            >
              <Heart size={20} />
              <span>Donate ${donationAmount}{isRecurring ? '/month' : ''}</span>
            </button>
          </form>
        )}
        
        {!isSubmitted && (
          <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
            Your donation helps us continue providing essential resources to healthcare professionals worldwide.
          </p>
        )}
      </div>
    </div>
  );
};

// Enhanced Survey Modal
const SurveyModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState({
    profession: '',
    experience: '',
    specialty: '',
    challenges: [],
    satisfaction: 5
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
    setIsSubmitted(true);
    
    // Reset form after submission
    setSurveyData({
      profession: '',
      experience: '',
      specialty: '',
      challenges: [],
      satisfaction: 5
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-20 translate-x-20"></div>
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Healthcare Survey</h3>
            <div className="flex space-x-2">
              {surveySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-orange-400 to-pink-400 scale-110' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-10 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your survey responses have been submitted. Your feedback is valuable to us!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <h4 className="text-xl font-bold text-gray-800">{currentStepData.title}</h4>
            
            {currentStepData.fields.map((field, index) => (
              <div key={index} className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">{field.label}</label>
                
                {field.type === 'select' && (
                  <select
                    value={surveyData[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
                    required
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                )}
                
                {field.type === 'text' && (
                  <input
                    type="text"
                    value={surveyData[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-gray-700 font-medium"
                    required
                  />
                )}
                
                {field.type === 'checkbox' && (
                  <div className="space-y-3">
                    {field.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`${field.name}-${idx}`}
                          checked={surveyData[field.name].includes(option)}
                          onChange={(e) => {
                            const currentValues = [...surveyData[field.name]];
                            if (e.target.checked) {
                              currentValues.push(option);
                            } else {
                              const index = currentValues.indexOf(option);
                              if (index > -1) {
                                currentValues.splice(index, 1);
                              }
                            }
                            handleFieldChange(field.name, currentValues);
                          }}
                          className="w-5 h-5 text-orange-400 rounded focus:ring-orange-400"
                        />
                        <label htmlFor={`${field.name}-${idx}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-2xl font-semibold ${
                  currentStep === 0 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              {currentStep < surveySteps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Submit Survey
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);
  
  return (
    <div className="font-sans antialiased">
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />
      <HeroSection onSurveyClick={() => setIsSurveyModalOpen(true)} />
      <MissionSection />
      <InitiativesSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection onSurveyClick={() => setIsSurveyModalOpen(true)} />
      <Footer />
      
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