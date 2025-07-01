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
    <div className="min-h-screen bg-white">
      {/* Background container with padding - Fixed Height for Hero Section */}
      <div className="relative">
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

      {/* Additional Content Sections - Below the hero background */}
      <div className="relative bg-white" style={{ marginTop: '100px' }}>
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI 기반 SEO 최적화 플랫폼
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                ShowOnAI만의 고유한 기술로 당신의 비즈니스를 디지털 시장에서 앞서 나가게 하세요
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">실시간 SEO 분석</h3>
                <p className="text-gray-600">
                  AI가 24시간 웹사이트를 모니터링하여 SEO 성능을 실시간으로 분석하고 개선점을 제안합니다.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">경쟁사 분석</h3>
                <p className="text-gray-600">
                  경쟁사의 SEO 전략을 분석하여 시장에서의 위치를 파악하고 차별화된 전략을 수립합니다.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">자동화된 최적화</h3>
                <p className="text-gray-600">
                  AI가 자동으로 메타태그, 키워드, 콘텐츠 구조를 최적화하여 검색 엔진 순위를 향상시킵니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                검증된 성과
              </h2>
              <p className="text-xl text-gray-600">
                ShowOnAI를 통해 달성한 놀라운 결과들
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">SEO 점수 향상</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-600">유기적 트래픽 증가</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">만족한 고객사</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">실시간 모니터링</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                신뢰받는 파트너
              </h2>
              <p className="text-xl text-gray-600">
                다양한 업계의 선도 기업들이 ShowOnAI를 선택합니다
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <div className="flex animate-scroll">
                {['Imagine AI', 'Queue', 'Astra', 'Atlas', 'Audiolabs', 'Shape', 'Base'].map((company, index) => (
                  <div key={index} className="flex items-center justify-center w-48 h-20 mx-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-semibold">{company}</span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {['Imagine AI', 'Queue', 'Astra', 'Atlas', 'Audiolabs', 'Shape', 'Base'].map((company, index) => (
                  <div key={`dup-${index}`} className="flex items-center justify-center w-48 h-20 mx-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-semibold">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                고객 후기
              </h2>
              <p className="text-xl text-gray-600">
                ShowOnAI와 함께한 성공 스토리
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-600 italic">
                    "ShowOnAI 덕분에 우리 웹사이트의 검색 순위가 첫 페이지로 올라왔어요. 정말 놀라운 결과입니다!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    김
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">김대표</div>
                    <div className="text-gray-500 text-sm">테크스타트업 CEO</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-600 italic">
                    "복잡한 SEO 작업을 AI가 자동으로 처리해주니 마케팅 팀이 더 창의적인 업무에 집중할 수 있게 되었습니다."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    박
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">박팀장</div>
                    <div className="text-gray-500 text-sm">이커머스 마케팅팀</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-600 italic">
                    "6개월 만에 유기적 트래픽이 300% 증가했습니다. ShowOnAI는 정말 게임 체인저예요!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    이
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">이실장</div>
                    <div className="text-gray-500 text-sm">온라인 쇼핑몰 운영</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              ShowOnAI와 함께 당신의 비즈니스를 다음 단계로 발전시키세요
            </p>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={handleEmailSubmit}
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                무료 체험 시작하기
              </button>
              <button
                onClick={handleDashboardClick}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                데모 보기
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-start">
              {/* Logo and Description */}
              <div className="flex flex-col max-w-md">
                <div className="flex items-center mb-4">
                  <img src="/showonai.svg" alt="ShowOnAI" className="h-8 w-auto" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Smart local AI-powered SEO Analysis
                </p>
              </div>
              
              {/* Navigation Links */}
              <div className="flex space-x-12">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Docs
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </footer>
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