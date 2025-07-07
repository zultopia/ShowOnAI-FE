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