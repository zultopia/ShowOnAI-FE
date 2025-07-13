"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DemoDialogProps } from '@/types/dialog';

const typography = {
  h1: "font-manrope font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
  h2: "font-manrope font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight",
  h3: "font-manrope font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed",
  h4: "font-manrope font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed",
  title: "font-manrope font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed",
  title2: "font-manrope font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed",
  subtitle: "font-manrope font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed",
  body: "font-manrope font-normal text-sm sm:text-base leading-relaxed",
  caption: "font-manrope font-medium text-xs sm:text-sm uppercase tracking-wider",
  price: "font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
};

const DemoDialog = ({ isOpen, onClose, formData, setFormData }: DemoDialogProps) => {
  const employeeOptions = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ];

  const timelineOptions = [
    "Within 1 month",
    "1-3 months",
    "3-6 months", 
    "6-12 months",
    "More than 1 year"
  ];

  const agencyOptions = [
    "In-house team",
    "Marketing agency",
    "SEO agency",
    "Consulting firm",
    "Other"
  ];

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-4xl shadow-2xl border border-gray-100 transform transition-all duration-300 scale-100 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/call-calling.svg" alt="Phone" width={24} height={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Intro Call with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              ShowOnAI!
            </span>
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
            For enterprises plans or consultation. Discovery call with a member of the team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData({...formData, name: e.target.value})
              }
              placeholder="Enter your full name"
              className="w-full px-3 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4 bg-gray-50 border-0 rounded-lg text-gray-700 text-xs sm:text-sm outline-none transition-all focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Number of Employees
            </label>
            <div className="relative">
              <select
                value={formData.employees}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                  setFormData({...formData, employees: e.target.value})
                }
                className="w-full px-3 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4 bg-gray-50 border-0 rounded-lg text-gray-700 text-xs sm:text-sm outline-none appearance-none transition-all focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 cursor-pointer hover:bg-gray-100"
              >
                <option value="" disabled className="text-gray-400">Select company size</option>
                {employeeOptions.map((option, index) => (
                  <option key={index} value={option} className="text-gray-700 py-2">{option}</option>
                ))}
              </select>
              <div className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Timeline for Investing in GEO Strategy
            </label>
            <div className="relative">
              <select
                value={formData.timeline}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                  setFormData({...formData, timeline: e.target.value})
                }
                className="w-full px-3 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4 bg-gray-50 border-0 rounded-lg text-gray-700 text-xs sm:text-sm outline-none appearance-none transition-all focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 cursor-pointer hover:bg-gray-100"
              >
                <option value="" disabled className="text-gray-400">Select timeline</option>
                {timelineOptions.map((option, index) => (
                  <option key={index} value={option} className="text-gray-700 py-2">{option}</option>
                ))}
              </select>
              <div className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Agency
            </label>
            <div className="relative">
              <select
                value={formData.agency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                  setFormData({...formData, agency: e.target.value})
                }
                className="w-full px-3 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4 bg-gray-50 border-0 rounded-lg text-gray-700 text-xs sm:text-sm outline-none appearance-none transition-all focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 cursor-pointer hover:bg-gray-100"
              >
                <option value="" disabled className="text-gray-400">Select agency type</option>
                {agencyOptions.map((option, index) => (
                  <option key={index} value={option} className="text-gray-700 py-2">{option}</option>
                ))}
              </select>
              <div className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end pt-2 sm:pt-3 md:pt-4">
            <button
              type="submit"
              className="w-full sm:w-full md:w-auto bg-gray-900 text-white py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Continue
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Header = ({ onLoginClick, onDashboardClick }: { onLoginClick: () => void, onDashboardClick: () => void }) => (
  <header className="relative z-50 px-3 sm:px-4 lg:px-8 pt-3 sm:pt-4 md:pt-6 lg:pt-12">
    <div className="max-w-7xl mx-auto flex justify-center">
      <nav className="flex items-center justify-between w-full max-w-5xl h-9 sm:h-10 md:h-12 lg:h-15 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full border border-white/60 bg-white/30 backdrop-blur-lg">
        <div className="flex items-center">
          <Image src="/showonai-white.svg" alt="ShowOnAI" width={176} height={44} className="h-5 sm:h-6 md:h-8 lg:h-11 w-auto" />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium">기능</a>
          <a href="#pricing" className="text-white/90 hover:text-white transition-colors font-medium">가격정책</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">블로그</a>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={onDashboardClick}
            className="px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-white text-blue-600 font-semibold text-xs sm:text-xs md:text-sm lg:text-base hover:bg-gray-50 transition-colors active:scale-95 whitespace-nowrap"
          >
            데모 요청
          </button>
          <button
            onClick={onLoginClick}
            className="px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-blue-600 text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-base hover:bg-blue-700 transition-colors active:scale-95"
          >
            로그인
          </button>
        </div>
      </nav>
    </div>
  </header>
);

const HeroSection = ({ email, setEmail, onEmailSubmit }: { email: string, setEmail: (email: string) => void, onEmailSubmit: () => void }) => (
  <section className="relative h-full flex justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-16">
    <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border border-white/30 mb-3 sm:mb-4 md:mb-6">
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
        <span className="text-white text-xs sm:text-xs md:text-sm font-medium">TRACKED. RANKED. VISITED.</span>
      </div>

      <h1 className={`${typography.h1} text-white mb-3 sm:mb-4 md:mb-6 max-w-5xl mx-auto px-2`}>
        국내 시장의 AI 검색 최적화를 위한<br />
        단 하나의 솔루션, ShowOnAI
      </h1>

      <p className={`${typography.subtitle} text-gray-200 mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-4xl mx-auto px-3 sm:px-4`}>
        국내 사용자 데이터와 검색 환경을 기반으로, 브랜드에 최적화된 SEO 전략을 수립합니다.<br className="hidden sm:block" />
        자체 R&D를 통해 축적한 SEO 기술과 실행 중심 컨설팅으로 결과를 만듭니다.
      </p>
      
      <div className="flex justify-center px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl gap-2 sm:gap-0">
          <div className="flex items-center w-full h-9 sm:h-10 md:h-12 lg:h-14 px-1 sm:px-1 md:px-2 rounded-full border border-gray-200 bg-white shadow-2xl">
            <input
              type="email"
              placeholder="회사 이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 ml-1.5 sm:ml-2 md:ml-4 bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 text-xs sm:text-sm md:text-base lg:text-lg"
            />
            <button
              onClick={onEmailSubmit}
              className="ml-1 sm:ml-1 md:ml-2 px-2 sm:px-2.5 md:px-4 lg:px-6 py-1 md:py-1 lg:py-2 rounded-full bg-black text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-lg hover:bg-gray-800 transition-colors active:scale-95 whitespace-nowrap"
            >
              무료 진단 받기
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CompanyLogos = () => {
  const logos = [
    { src: "/imagine-ai.svg", alt: "Imagine AI" },
    { src: "/queue.svg", alt: "Queue" },
    { src: "/astra.svg", alt: "Astra" },
    { src: "/atlas.svg", alt: "Atlas" },
    { src: "/audlabs.svg", alt: "Audlabs" },
    { src: "/shape.svg", alt: "Shape" },
    { src: "/base.svg", alt: "Base" },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-20 overflow-hidden">
      <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-24 animate-scroll-rtl">
        {[...logos, ...logos].map((logo, index) => (
          <Image 
            key={index}
            src={logo.src} 
            alt={logo.alt} 
            width={120}
            height={40}
            className="h-3 sm:h-4 md:h-6 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0" 
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 10s linear infinite;
        }
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const QuoteSection = () => (
  <section id="quote" className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5/6 mx-auto">
      <div className="text-right mb-12 md:mb-24">
        <div className="max-w-4xl ml-auto">
          <h2 className={`${typography.h2} text-gray-800 text-right mb-6`}>
            &ldquo;2028년, 기존 검색 트래픽의 50%가 생성형 AI 검색으로 대체됩니다.&rdquo;
          </h2>
          <p className="text-gray-500 text-right text-lg md:text-xl font-medium">
            —Gartner
          </p>
        </div>
      </div>
      
      <div className="text-left">
        <p className={`${typography.h2} text-gray-500 mb-2`}>
          제로 클릭 시대,
        </p>
        <p className={`${typography.h2} bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent`}>
          여러분의 브랜드는 준비되었나요?
        </p>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <Image src="/assets/Icon-1.svg" alt="Diagnosis" width={64} height={64} className="w-16 h-16" />
      ),
      title: "진단 Diagnosis",
      description: "생성형 AI에서 브랜드 노출 현황을 정확히 진단하고 개선점을 찾아드립니다.",
      subtitle: "ChatGPT, Gemini에서 우리 브랜드가 언급되는지 확인하고, AI가 우리를 어떻게 인식하는지 분석하여 개선점을 찾습니다.",
      imagePosition: "right",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: (
        <Image src="/assets/Icon-2.svg" alt="Prescription" width={64} height={64} className="w-16 h-16" />
      ),
      title: "차단 Prescription",
      description: "검색 엔진 변화에 선제적으로 대응하여 브랜드 가시성을 보호합니다.",
      subtitle: "부정적 콘텐츠나 잘못된 정보가 생성형 AI에 학습되지 않도록 차단하고, 브랜드 이미지를 보호하는 전략을 수립합니다.",
      imagePosition: "left",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: (
        <Image src="/assets/Icon-3.svg" alt="Tracking" width={64} height={64} className="w-16 h-16" />
      ),
      title: "추적 Tracking",
      description: "실시간 모니터링으로 SEO 성과를 추적하고 지속적으로 최적화합니다.",
      subtitle: "다양한 검색 시나리오에서 우리 브랜드의 언급 빈도와 순위 변화를 추적하여 지속적인 개선점을 파악합니다.",
      imagePosition: "right",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="features" className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8">      
      <div className="relative z-10 max-w-5/6 mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className={`${typography.caption} text-blue-600 mb-4`}>
            FEATURES
          </p>
          <h2 className={`${typography.h2} text-gray-900 mb-6`}>
            진단하고, 차단하고, 변화를 추적하세요
          </h2>
          <p className={`${typography.subtitle} text-neutral-500 max-w-2xl mx-auto`}>
            ShowOnAI의 핵심 기능들로 브랜드의 디지털 가시성을 완벽하게 관리하세요
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                feature.imagePosition === 'left' 
                  ? 'lg:flex-row' 
                  : 'lg:flex-row-reverse'
              } items-center justify-between gap-8 md:gap-16`}
            >
              <div className="flex-1 max-w-2xl px-4 sm:px-8 md:px-12 w-full">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                
                <h3 className={`${typography.title} text-primary-blue-500 mb-4`}>
                  {feature.title}
                </h3>
                
                <p className={`${typography.title2} text-primary-blue-400 mb-4 font-medium`}>
                  {feature.description}
                </p>
                
                <p className={`${typography.subtitle} text-neutral-500 md:text-white leading-relaxed`}>
                  {feature.subtitle}
                </p>
              </div>
              
              <div className="flex-1 max-w-2xl w-full">
                <div className="relative group">
                  <div className="w-full h-[400px] md:h-[500px] bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-neutral-500 text-4xl font-bold opacity-20">
                        IMAGE
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ isYearly, setIsYearly }: { isYearly: boolean, setIsYearly: (isYearly: boolean) => void }) => {
  const plans = [
    {
      name: "Lite",
      price: 99,
      description: "Single one time purchase, unlimited editing forever",
      features: [
        { text: "Unlimited projects and storage", included: true },
        { text: "Advanced collaboration tools", included: true },
        { text: "Custom branding and white-label options", included: true },
        { text: "Priority customer support", included: true },
        { text: "Enterprise-grade security", included: false },
        { text: "On-premise deployment options", included: false },
      ]
    },
    {
      name: "Growth", 
      price: 199,
      description: "Single one time purchase, unlimited editing forever",
      features: [
        { text: "Unlimited projects and storage", included: true },
        { text: "Advanced collaboration tools", included: true },
        { text: "Custom branding and white-label options", included: true },
        { text: "Priority customer support", included: true },
        { text: "Enterprise-grade security", included: false },
        { text: "On-premise deployment options", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: 299,
      description: "Single one time purchase, unlimited editing forever",
      features: [
        { text: "Unlimited projects and storage", included: true },
        { text: "Advanced collaboration tools", included: true },
        { text: "Custom branding and white-label options", included: true },
        { text: "Priority customer support", included: true },
        { text: "Enterprise-grade security", included: true },
        { text: "On-premise deployment options", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-6 sm:py-8 md:py-12 lg:py-24 px-3 sm:px-4 lg:px-8">
      <div className="w-full mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <p className={`${typography.caption} text-blue-600 mb-2 sm:mb-3 md:mb-4`}>PRICING</p>
          <h2 className={`${typography.h2} text-gray-900 mb-2 sm:mb-3 md:mb-4`}>가격 정책</h2>
          <p className={`${typography.body} text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2`}>
            Flexible plans and solutions for business of all sizes
          </p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            <span className={`text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-colors ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 bg-[#CBDCFB] rounded-full transition-colors"
            >
              <div className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#3D6FEA] rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-4 sm:translate-x-5 md:translate-x-6' : 'translate-x-0.5'}`}></div>
            </button>
            <span className={`text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-colors ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Yearly
            </span>
            <div className="bg-[#36AAF3] text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-xs md:text-sm font-medium">
              Save 20%
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="group bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-500 ease-out cursor-pointer transform-gpu will-change-transform">
              
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h3 className={`${typography.h3} text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-400 ease-out`}>{plan.name}</h3>
                <p className="text-gray-500 text-xs sm:text-xs md:text-sm mb-4 sm:mb-6 md:mb-16 group-hover:text-gray-600 transition-colors duration-400 ease-out px-1">{plan.description}</p>
                
                <div className="mb-1 sm:mb-2">
                  <span className={`${typography.price} text-blue-600 group-hover:text-blue-700 transition-colors duration-400 ease-out`}>${plan.price}</span>
                </div>
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <span className="text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-blue-700 transition-colors duration-400 ease-out">/user per month</span>
                </div>
                
                <button className="w-full py-2 sm:py-2.5 md:py-3 mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6 rounded-full font-medium bg-gray-900 text-white hover:bg-blue-600 group-hover:bg-blue-600 transition-all duration-400 ease-out transform group-hover:scale-105 text-xs sm:text-sm md:text-base">
                  {plan.name === 'Enterprise' ? 'Contact us' : 'Get started'}
                </button>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-400 ease-out">Free includes</h4>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors duration-400 ease-out">
                      {feature.included ? (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 mt-0.5 group-hover:text-green-600 transition-colors duration-400 ease-out flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300 mr-1.5 sm:mr-2 md:mr-3 mt-0.5 transition-colors duration-400 ease-out flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-xs sm:text-sm md:text-base ${feature.included ? 'text-gray-600 group-hover:text-gray-700 transition-colors duration-400 ease-out' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ expandedFaq, setExpandedFaq }: { expandedFaq: number[], setExpandedFaq: (expandedFaq: number[]) => void }) => {
  const faqs = [
    {
      question: "Dropdown Closed",
      answer: ""
    },
    {
      question: "GEO는 정확히 무엇인가요? SEO와는 어떻게 다른가요?",
      answer: "GEO(Generative Engine Optimization) ChatGPT, Gemini, Perplexity와 같은 생성형 AI 응답 시스템에서 브랜드가 인용되도록 최적화하는 전략입니다. SEO(Search Engine Optimization)는 웹사이트가 검색 결과에 잘 노출되도록 하는 것이라면, GEO는 \"AI가 답변할 때, 내 브랜드를 선택하게 만드는 것\"을 목표로 합니다."
    },
    {
      question: "GEO가 왜 중요한가요?",
      answer: "2028년까지 전체 검색 트래픽의 50% 이상이 제로 클릭으로 전환될 것으로 예상됩니다. 즉, 사용자는 더 이상 클릭하지 않고, 생성형 AI가 주는 하나의 답변만 소비합니다. 이때 내 브랜드가 그 답변 안에 들어가지 못한다면, 노출 기회 자체가 사라집니다."
    },
    {
      question: "GEO 최적화는 어떻게 진행되나요?",
      answer: "• 브랜드 GEO 진단 리포트 제공\n• 기술적 최적화 + 키워드 분석 + 콘텐츠 주제 추천\n• 생성형 AI에 반영되는지 추적 및 개선 반복\n\n단순한 SEO를 넘어, 실제로 AI가 인용하는 콘텐츠를 설계하고 추적합니다."
    },
    {
      question: "SEO도 함께 최적화해주시나요?",
      answer: "네, ShowOnAI는 GEO뿐만 아니라 SEO도 함께 최적화해드립니다. 생성형 AI가 콘텐츠를 학습하고 답변에 인용하려면, 웹 상에 검색엔진에 잘 구조화된 콘텐츠(SEO)가 먼저 필요합니다. 구글과 네이버 모두를 고려한 기본 SEO 세팅부터 콘텐츠 제작 및 배포까지 GEO 전략과 유기적으로 연결해 드립니다."
    },
    {
      question: "어떻게 한국 시장에 최적화되어 있나요?",
      answer: "ShowOnAI는 한국의 독특한 검색 환경과 콘텐츠 소비 흐름에 맞춰 GEO 전략을 설계합니다. 구글뿐 아니라 네이버 키워드 데이터를 함께 분석하고, ChatGPT나 Gemini와 같은 글로벌 생성형 AI는 물론, WRTN과 같은 한국형 생성형 AI 검색 플랫폼까지 최적화 범위에 포함합니다."
    }
  ];

  const toggleFaq = (index: number) => {
    if (expandedFaq.includes(index)) {
      setExpandedFaq(expandedFaq.filter(id => id !== index));
    } else {
      setExpandedFaq([...expandedFaq, index]);
    }
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24 px-3 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <p className="font-manrope font-medium text-xs sm:text-sm uppercase tracking-wider text-blue-600 mb-2 sm:mb-3 md:mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-manrope font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight text-gray-900 mb-2 sm:mb-3 md:mb-4">
            자주 묻는 질문
          </h2>
          <p className="font-manrope font-normal text-sm sm:text-base leading-relaxed text-gray-600 px-2">
            Contact us if you have any other questions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className={index < faqs.length - 1 ? 'border-b border-gray-200' : ''}>
              <button 
                className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50 active:bg-gray-100"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-neutral-950 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pr-2 sm:pr-3 md:pr-4 leading-snug sm:leading-normal">
                  {faq.question}
                </h3>
                
                <span className="text-neutral-700 text-lg sm:text-xl md:text-2xl font-light flex-shrink-0 bg-blue-50 rounded-md px-1.5 sm:px-2 py-0.5 min-w-[32px] sm:min-w-[36px] md:min-w-[40px] flex items-center justify-center">
                  {expandedFaq.includes(index) ? '−' : '+'}
                </span>
              </button>
              
              {expandedFaq.includes(index) && faq.answer && (
                <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 border-t border-gray-100">
                  <div className="text-gray-600 leading-relaxed pt-2 sm:pt-3 md:pt-4 whitespace-pre-line text-xs sm:text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onDashboardClick }: { onDashboardClick: () => void }) => (
  <section className="relative px-3 sm:px-4 lg:px-8 pt-3 sm:pt-4 md:pt-8 lg:pt-12">
    <div className="relative rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl overflow-hidden flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px]" style={{
      backgroundImage: 'url(/above-footer.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <h2 className={`${typography.h2} text-white mb-4 sm:mb-6 md:mb-8 max-w-4xl px-2`}>
          ShowOnAI와 함께,<br />
          제로 클릭 시대의 브랜드 자리를 먼저 선점하세요.
        </h2>
        
        <button 
          onClick={onDashboardClick}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-black text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg sm:rounded-xl md:rounded-[20px] font-medium text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors shadow-lg active:scale-95"
        >
          데모 요청
          <Image src="/chat.svg" alt="Chat" width={16} height={16} className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-2 sm:gap-3">
          <Image 
            src="/showonai.svg" 
            alt="ShowOnAI" 
            width={176} 
            height={48}
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
          />
          <p className="text-gray-500 text-sm sm:text-sm md:text-base max-w-xs">
            Smart local AI-powered SEO Analysis
          </p>
        </div>
        
        <div className="flex flex-wrap items-end gap-4 sm:gap-6 md:gap-8 md:self-end">
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm md:text-base py-2 sm:py-1 hover:underline focus:outline-none focus:underline"
            >
              About
            </a>
            <a 
              href="#pricing" 
              className="text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm md:text-base py-2 sm:py-1 hover:underline focus:outline-none focus:underline"
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm md:text-base py-2 sm:py-1 hover:underline focus:outline-none focus:underline"
            >
              Docs
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm md:text-base py-2 sm:py-1 hover:underline focus:outline-none focus:underline"
            >
              Blog
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

function LandingPage() {
  const [email, setEmail] = useState('');
  const [isYearly, setIsYearly] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState([1]);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    employees: '',
    timeline: '',
    agency: ''
  });

  useEffect(() => {
    if (showDemoDialog) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [showDemoDialog]);

  const handleEmailSubmit = () => {
    if (email) {
      window.location.href = `/login?email=${encodeURIComponent(email)}`;
    }
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleDashboardClick = () => {
    setShowDemoDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDemoDialog(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 font-manrope scroll-smooth flex flex-col" style={{backgroundImage:'url(/landing-page.svg)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
      <div className="relative flex-shrink-0">        
        <div 
          className="relative z-10 rounded-[24px] mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-4 overflow-hidden" 
          style={{ 
            height: 'clamp(600px, 100vh, 1200px)',
            minHeight: '600px',
            backgroundImage: 'url(/background.svg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'top center' 
          }}
        >
          <Header 
            onLoginClick={handleLoginClick}
            onDashboardClick={handleDashboardClick}
          />
          
          <HeroSection 
            email={email}
            setEmail={setEmail}
            onEmailSubmit={handleEmailSubmit}
          />
        </div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <CompanyLogos />
        <QuoteSection />
        <FeaturesSection />
        <PricingSection isYearly={isYearly} setIsYearly={setIsYearly} />
        <FAQSection expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} />

        <div className="mt-auto">
          <CTASection onDashboardClick={handleDashboardClick} />
          <Footer />
        </div>
      </div>
      
      <style jsx>{`
        .font-manrope {
          font-family: var(--font-manrope), system-ui, sans-serif;
        }
      `}</style>

      {showDemoDialog && (
        <DemoDialog 
          isOpen={showDemoDialog}
          onClose={handleCloseDialog}
          formData={demoForm}
          setFormData={setDemoForm}
        />
      )}
    </div>
  );
}

export default LandingPage;