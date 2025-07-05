"use client";

import React, { useState } from 'react';

function LandingPage() {
  const [email, setEmail] = useState('');

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
        <div className="absolute inset-4 rounded-[24px] overflow-hidden" style={{ height: '1064px' }}>
          {/* Background using SVG file */}
          <div className="absolute inset-0">
            <img 
              src="/background.svg" 
              alt="Background" 
              className="w-[1506px] h-[964px] object-cover"
            />
          </div>
        </div>

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
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;