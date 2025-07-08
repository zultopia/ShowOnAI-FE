"use client";

import React, { useState } from 'react';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [isYearly, setIsYearly] = useState(true); // Set default ke yearly
  const [expandedFaq, setExpandedFaq] = useState<number[]>([1]); // Set default ke FAQ kedua (GEO) yang expanded

  const handleEmailSubmit = () => {
    if (email) {
      window.location.href = `/login?email=${encodeURIComponent(email)}`;
    }
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleDashboardClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-primary-blue-50">
      {/* Background container with padding - Fixed Height for Hero Section */}
      <div className="relative">
        <div className="absolute w-full h-full z-0">
          <img src="/assets/Shapes.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover" />
          <img src="/assets/Ellipses.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover" />
          <img src="/assets/Element-3.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[90%]" />
          <img src="/assets/Element-7.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[110%]" />
          <img src="/assets/Element-8.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[150%]" />
          <img src="/assets/Element-4.svg" alt="bg" className="absolute w-full top-0 left-0 object-cover translate-y-[100%]" />
          <img src="/assets/Element-8.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[200%]" />
          <img src="/assets/Element-4.svg" alt="bg" className="absolute w-full top-0 left-0 object-cover translate-y-[150%]" />
          <img src="/assets/Element-2.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[150%]" />
          <img src="/assets/Element-9.svg" alt="bg" className="absolute w-full top-0 left-0 object-cover translate-y-[170%]" />
          <img src="/assets/Element-10.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[330%]" />
          <img src="/assets/Element-1.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[190%]" />
          <img src="/assets/Element.svg" alt="bg" className="absolute w-full top-0 right-0 object-cover translate-y-[180%]" />
        </div>
       
       {/* Background Section */}
        <section className="absolute inset-4 rounded-[24px] overflow-hidden" style={{ height: '1064px' }}>
          <div className="absolute inset-0">
            <img 
              src="/background.svg" 
              alt="Background" 
              className="w-[1506px] h-[964px] object-cover"
            />
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-540px', marginTop: '680px' }}>
          <div className="py-20 overflow-hidden">
            <div className="flex animate-scroll items-center whitespace-nowrap" style={{ gap: '96px' }}>
              <img src="/imagine-ai.svg" alt="Imagine AI" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/queue.svg" alt="Queue" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/astra.svg" alt="Astra" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/atlas.svg" alt="Atlas" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/audlabs.svg" alt="Audlabs" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/shape.svg" alt="Shape" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/base.svg" alt="Base" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/imagine-ai.svg" alt="Imagine AI" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/queue.svg" alt="Queue" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/astra.svg" alt="Astra" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/atlas.svg" alt="Atlas" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/audlabs.svg" alt="Audlabs" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/shape.svg" alt="Shape" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
              <img src="/base.svg" alt="Base" style={{ width: '100px', height: '62px' }} className="hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* Quote Section - Moved outside background container */}
        <section className="absolute py-24 px-4 sm:px-6 lg:px-8" style={{ marginBottom: '-1200px', marginTop: '1200px' }}>
          <div className="max-w-6xl mx-auto">
            {/* Main Quote - Right aligned with smaller width */}
            <div className="mb-8 justify-end">
              <div className="max-w-3xl" style={{ marginLeft: 'auto', marginRight: '-550px' }}>
                <h2 
                  className="text-gray-800 text-right"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: '600',
                    fontSize: 'clamp(28px, 5vw, 48px)',
                    lineHeight: 'clamp(36px, 6vw, 60px)',
                    letterSpacing: '0%',
                    marginBottom: '16px'
                  }}
                >
                  "2028년, 기존 검색 트래픽의 50%가 생성형 AI 검색으로 대체됩니다."
                </h2>
                
                {/* Attribution */}
                <p 
                  className="text-neutral-500 text-right"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    fontSize: 'clamp(14px, 2.5vw, 22px)',
                    lineHeight: 'clamp(18px, 3vw, 24px)',
                    marginTop: '24px'
                  }}
                >
                  —Gartner
                </p>
              </div>
            </div>
            
            {/* Bottom Text - Left aligned with gradient */}
            <div className="mt-16">
              <p 
                className="text-left text-gray-500"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: 'clamp(36px, 6vw, 60px)',
                  marginBottom: '8px',
                  marginLeft: '80px'
                }}
              >
                제로 클릭 시대,
              </p>
              
              <p 
                className="text-left"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '600',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: 'clamp(36px, 6vw, 60px)',
                  background: 'linear-gradient(135deg, #2353DF 0%, #36AAF3 50%, #3061E5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginLeft: '80px'
                }}
              >
                여러분의 브랜드는 준비되었나요?
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="absolute py-24 px-4 sm:px-6 lg:px-8" style={{ marginTop: '1800px', width: '100%'}}>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p 
                className="text-blue-600 text-sm font-medium mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                PRICING
              </p>
              
              <h2 
                className="text-gray-900 text-center mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  lineHeight: 'clamp(40px, 6vw, 64px)'
                }}
              >
                가격 정책
              </h2>
              
              <p 
                className="text-gray-600 text-center mb-8"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '24px'
                }}
              >
                Flexible plans and solutions for business of all sizes
              </p>
              
              {/* Monthly/Yearly Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span 
                  className={`font-medium cursor-pointer transition-colors ${
                    !isYearly ? 'text-blue-600' : 'text-gray-500'
                  }`}
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </span>
                
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                  />
                  <div 
                    className="w-12 h-6 bg-primary-blue-500 rounded-full flex items-center cursor-pointer transition-all"
                    onClick={() => setIsYearly(!isYearly)}
                  >
                    <div 
                      className={`w-5 h-5 bg-primary-blue-100 rounded-full transition-all duration-300 ${
                        isYearly ? 'ml-auto mr-0.5' : 'ml-0.5'
                      }`}
                    ></div>
                  </div>
                </div>
                
                <span 
                  className={`font-medium cursor-pointer transition-colors ${
                    isYearly ? 'text-blue-600' : 'text-gray-500'
                  }`}
                  onClick={() => setIsYearly(true)}
                >
                  Yearly
                </span>
                
                <div className="bg-secondary-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </div>
              </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Lite Plan */}
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                style={{
                  border: '1px solid #E5E7EB'
                }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lite</h3>
                  <p className="text-gray-500 text-sm mb-6">Single one time purchase, unlimited editing forever</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-blue-600">$99</span>
                  </div>

                   <div className="mb-6">
                    <span className="text-blue-600 text-md ml-1">/user per month</span>
                  </div>
                  
                  <button 
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get started
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Free includes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Unlimited projects and storage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced collaboration tools
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom branding and white-label options
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Priority customer support
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      On-premise deployment options
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Growth Plan */}
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                  <p className="text-gray-500 text-sm mb-6">Single one time purchase, unlimited editing forever</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-blue-600">$199</span>
                  </div>

                   <div className="mb-6">
                    <span className="text-blue-600 text-md ml-1">/user per month</span>
                  </div>
                  
                  <button 
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get started
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Free includes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Unlimited projects and storage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced collaboration tools
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom branding and white-label options
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Priority customer support
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      On-premise deployment options
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                style={{
                  border: '1px solid #E5E7EB'
                }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-500 text-sm mb-6">Single one time purchase, unlimited editing forever</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-blue-600">$299</span>
                  </div>

                   <div className="mb-6">
                    <span className="text-blue-600 text-md ml-1">/user per month</span>
                  </div>
                  
                  <button 
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Contact us
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Free includes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Unlimited projects and storage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced collaboration tools
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom branding and white-label options
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Priority customer support
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      On-premise deployment options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="absolute py-24 px-4 sm:px-6 lg:px-8" style={{ marginTop: '2800px', width: '100%'}}>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p 
                className="text-blue-600 text-sm font-medium mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </p>
              
              <h2 
                className="text-gray-900 text-center mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  lineHeight: 'clamp(40px, 6vw, 56px)'
                }}
              >
                자주 묻는 질문
              </h2>
              
              <p 
                className="text-gray-600 text-center"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Contact us if you have any other questions.
              </p>
            </div>
            
            {/* FAQ Items */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Dropdown Closed */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(0)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 0));
                    } else {
                      setExpandedFaq([...expandedFaq, 0]);
                    }
                  }}
                >
                  <h3 className="text-gray-800 font-medium text-lg">Dropdown Closed</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(0) ? '−' : '+'}
                  </span>
                </button>
              </div>
              
              {/* GEO FAQ */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(1)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 1));
                    } else {
                      setExpandedFaq([...expandedFaq, 1]);
                    }
                  }}
                >
                  <h3 className="text-gray-900 font-semibold text-lg">GEO는 정확히 무엇인가요? SEO와는 어떻게 다른가요?</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(1) ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq.includes(1) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="text-gray-600 leading-relaxed space-y-3 pt-4">
                      <p>
                        <span className="font-medium">GEO(Generative Engine Optimization)</span> ChatGPT, Gemini, Perplexity와 같은 생성형 AI 응답 시스템에서 브랜드가 인용되도록 최적화하는 전략입니다. <span className="font-medium">SEO(Search Engine Optimization)</span>
                        는 웹사이트가 검색 결과에 잘 노출되도록 하는 것이라면, GEO는 <span className="font-medium"> "AI가 답변할 때, 내 브랜드를 선택하게 만드는 것"</span> 을 목표로 합니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* GEO가 왜 중요한가요? */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(2)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 2));
                    } else {
                      setExpandedFaq([...expandedFaq, 2]);
                    }
                  }}
                >
                  <h3 className="text-gray-900 font-semibold text-lg">GEO가 왜 중요한가요?</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(2) ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq.includes(2) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="text-gray-600 leading-relaxed pt-4">
                      <p>2028년까지 전체 검색 트래픽의 50% 이상이 제로 클릭으로 전환될 것으로 예상됩니다. 즉, 사용자는 더 이상 클릭하지 않고, 생성형 AI가 주는 하나의 답변만 소비합니다.
                          이때 내 브랜드가 그 답변 안에 들어가지 못한다면, 노출 기회 자체가 사라집니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* GEO 최적화는 어떻게 진행되나요? */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(3)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 3));
                    } else {
                      setExpandedFaq([...expandedFaq, 3]);
                    }
                  }}
                >
                  <h3 className="text-gray-900 font-semibold text-lg">GEO 최적화는 어떻게 진행되나요?</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(3) ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq.includes(3) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="text-gray-600 leading-relaxed space-y-3 pt-4">
                      <ul className="space-y-2">
                        <li>• 브랜드 GEO 진단 리포트 제공</li>
                        <li>• 기술적 최적화 + 키워드 분석 + 콘텐츠 주제 추천</li>
                        <li>• 생성형 AI에 반영되는지 추적 및 개선 반복</li>
                      </ul>
                      <p className="mt-4">단순한 SEO를 넘어, 실제로 AI가 인용하는 콘텐츠를 설계하고 추적합니다.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* SEO도 함께 최적화해주시나요? */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(4)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 4));
                    } else {
                      setExpandedFaq([...expandedFaq, 4]);
                    }
                  }}
                >
                  <h3 className="text-gray-900 font-semibold text-lg">SEO도 함께 최적화해주시나요?</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(4) ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq.includes(4) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="text-gray-600 leading-relaxed pt-4">
                      <p>네, ShowOnAI는 GEO뿐만 아니라 SEO도 함께 최적화해드립니다.생성형 AI가 콘텐츠를 학습하고 답변에 인용하려면, 웹 상에 <span className="font-medium">검색엔진에 잘 구조화된 콘텐츠(SEO)</span>가 먼저 필요합니다. 구글과 네이버 모두를 고려한 기본 SEO 세팅부터 콘텐츠 제작 및 배포까지 GEO 전략과 유기적으로 연결해 드립니다.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* 어떻게 한국 시장에 최적화되어 있나요? - Last item, no border-bottom */}
              <div>
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (expandedFaq.includes(5)) {
                      setExpandedFaq(expandedFaq.filter(id => id !== 5));
                    } else {
                      setExpandedFaq([...expandedFaq, 5]);
                    }
                  }}
                >
                  <h3 className="text-gray-900 font-semibold text-lg">어떻게 한국 시장에 최적화되어 있나요?</h3>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedFaq.includes(5) ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq.includes(5) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="text-gray-600 leading-relaxed pt-4">
                      <p>
                        ShowOnAI는 한국의 독특한 검색 환경과 콘텐츠 소비 흐름에 맞춰 GEO 전략을 설계합니다. 구글뿐 아니라 네이버 키워드 데이터를 함께 분석하고, ChatGPT나 Gemini와 같은 글로벌 생성형 AI는 물론, WRTN과 같은 한국형 생성형 AI 검색 플랫폼까지 최적화 범위에 포함합니다. 단순한 기술 적용이 아닌, 현지 사용자 문맥에 맞춘 로컬라이징 GEO 전략을 제공합니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Final call to action */}
        <section className="absolute px-4 sm:px-6 lg:px-8" style={{ marginTop: '5000px', width: '100%' }}>
          <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '400px' }}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/above-footer.svg" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-8">
              <h2 
                className="text-white mb-8 max-w-4xl"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '600',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  lineHeight: 'clamp(36px, 6vw, 60px)'
                }}
              >
                ShowOnAI와 함께,<br />
                제로 클릭 시대의 브랜드 자리를 먼저 선점하세요.
              </h2>
              
              <button 
                onClick={handleDashboardClick}
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-[20px] font-medium hover:bg-gray-800 transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '600',
                  fontSize: '18px',
                  marginTop: '48px'
                }}
              >
                데모 요청
                <img src="/chat.svg" alt="Chat" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="absolute px-4 sm:px-6 lg:px-8 py-16 bg-white" style={{ marginTop: '5400px', width: '100%' }}>
          <div className="max-w-7xl mx-auto flex items-start justify-between">
            {/* Left side - Logo and tagline */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <img src="/showonai.svg" alt="ShowOnAI" className="h-12" />
              </div>
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: '16px'
                }}
              >
                Smart local AI-powered SEO Analysis
              </div>
            </div>
            
            {/* Right side - Navigation */}
            <div className="flex items-center gap-8" style={{ marginTop: '60px' }}>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '16px'
                }}
              >
                About
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '16px'
                }}
              >
                Pricing
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '16px'
                }}
              >
                Docs
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '16px'
                }}
              >
                Blog
              </a>
            </div>
          </div>
        </footer>

        {/* Header with exact specifications */}
        <header className="relative z-50 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '48px' }}>
          <div className="max-w-7xl mx-auto flex justify-center" style={{ left: '232px' }}>
            {/* Navbar container with exact Figma specs */}
            <div 
              className="flex items-center"
              style={{
                width: '977px',
                height: '60px',
                borderRadius: '49.78px',
                border: '1.59px solid rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(18px)',
                paddingTop: '8px',
                paddingRight: '8px',
                paddingBottom: '8px',
                paddingLeft: '24px',
                justifyContent: 'space-between'
              }}
            >
              {/* Logo */}
              <div 
                className="flex items-center"
                style={{
                  width: '165px',
                  height: '44px',
                  gap: '12px'
                }}
              >
                <img src="/showonai-white.svg" alt="ShowOnAI" className="w-full h-full" />
              </div>

              {/* Navigation - Center */}
              <nav 
                className="flex items-center"
                style={{
                  width: '198px',
                  height: '24px',
                  gap: '32px'
                }}
              >
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-[16px] leading-[24px]">기능</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-[16px] leading-[24px]">가격정책</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-[16px] leading-[24px]">블로그</a>
              </nav>

              {/* Auth Buttons */}
              <div 
                className="flex items-center"
                style={{
                  width: '182px',
                  height: '40px',
                  gap: '8px'
                }}
              >
                {/* 데모 요청 Button */}
                <button
                  onClick={handleDashboardClick}
                  className="flex items-center justify-center"
                  style={{
                    width: '87px',
                    height: '40px',
                    borderRadius: '29.71px',
                    backgroundColor: '#FFFFFF',
                    paddingTop: '8px',
                    paddingRight: '12px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    gap: '10px',
                    boxShadow: '0px 1px 2px 0px rgba(52, 64, 84, 0.08)',
                    color: '#2345B9',
                    fontFamily: 'Manrope',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }}
                >
                  데모 요청
                </button>

                {/* 로그인 Button */}
                <button
                  onClick={handleLoginClick}
                  className="flex items-center justify-center"
                  style={{
                    width: '87px',
                    height: '40px',
                    borderRadius: '29.71px',
                    backgroundColor: '#3D6FEA',
                    paddingTop: '8px',
                    paddingRight: '12px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    gap: '10px',
                    boxShadow: '0px 1px 2px 0px rgba(52, 64, 84, 0.08)',
                    color: '#FFFFFF',
                    fontFamily: 'Manrope',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Content Framework - Badge, Heading, Subtitle */}
            <div className="flex flex-col items-center" style={{ marginBottom: '72px' }}>
              {/* Badge with border */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30" style={{ marginBottom: '24px' }}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-sm font-medium">TRACKED. RANKED. VISITED.</span>
              </div>

              {/* Main Heading - Exact Figma specs */}
              <h1 
                className="text-white text-center"
                style={{
                  width: '919px',
                  height: '128px',
                  fontFamily: 'NanumGothic',
                  fontWeight: '700',
                  fontSize: '56px',
                  lineHeight: '64px',
                  letterSpacing: '0%',
                  marginBottom: '24px'
                }}
              >
                <span style={{ 
                  fontFamily: 'Manrope', 
                  fontWeight: '600', 
                  fontSize: '56px', 
                  lineHeight: '64px' 
                }}>
                  국내 시장의 AI 검색 최적화를 위한<br />
                  단 하나의 솔루션, ShowOnAI
                </span>
              </h1>

              {/* Subtitle - Exact Figma specs */}
              <p 
                className="text-center"
                style={{
                  width: '919px',
                  height: '64px',
                  fontFamily: 'NanumGothic',
                  fontWeight: '400',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0%',
                  color: '#E4E4E8'
                }}
              >
                <span style={{ 
                  fontFamily: 'Manrope', 
                  fontWeight: '400', 
                  fontSize: '24px', 
                  lineHeight: '32px' 
                }}>
                  국내 사용자 데이터와 검색 환경을 기반으로, 브랜드에 최적화된 SEO 전략을 수립합니다.<br />
                  자체 R&D를 통해 축적한 SEO 기술과 실행 중심 컨설팅으로 결과를 만듭니다.
                </span>
              </p>
            </div>
            
            {/* Email CTA - White version with shadow */}
            <div className="flex justify-center mb-8">
              <div 
                className="flex items-center"
                style={{
                  width: '600px',
                  height: '55.22px',
                  borderRadius: '45.65px',
                  border: '0.63px solid #D7E3ED',
                  backgroundColor: '#FFFFFF',
                  paddingTop: '6px',
                  paddingRight: '6px',
                  paddingBottom: '6px',
                  paddingLeft: '18px',
                  justifyContent: 'space-between',
                  boxShadow: `
                    0px 20px 26px 0px rgba(15, 35, 58, 0.15),
                    0px -1px 2px 0px rgba(255, 255, 255, 0.12),
                    0px 1px 0px 0px rgba(21, 26, 54, 0.30),
                    0px 2px 0px 0px rgba(21, 26, 54, 0.15)
                  `
                }}
              >
                {/* Input Field */}
                <input
                  type="email"
                  placeholder="회사 이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '202px',
                    height: '28px',
                    fontFamily: 'NanumGothic',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    color: '#66798A',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none'
                  }}
                />

                {/* Button */}
                <button
                  onClick={handleEmailSubmit}
                  className="flex items-center justify-center"
                  style={{
                    width: '144px',
                    height: '43.22px',
                    borderRadius: '25px',
                    border: '0.63px solid #26262B',
                    backgroundColor: '#26262B',
                    paddingTop: '7.61px',
                    paddingRight: '15.22px',
                    paddingBottom: '7.61px',
                    paddingLeft: '15.22px',
                    gap: '5.07px'
                  }}
                >
                  <span style={{
                    width: '114px',
                    height: '28px',
                    fontFamily: 'NanumGothic',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}>
                    무료 진단 받기
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;