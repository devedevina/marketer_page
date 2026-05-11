import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-shapes">
        <span className="shape shape-1" />
        <span className="shape shape-2" />
        <span className="shape shape-3" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Marketing Expert</p>
        <h1 className="hero-title">
          브랜드의 이야기를<br />
          숫자로 증명합니다
        </h1>
        <p className="hero-desc">
          10년간 50+ 브랜드와 함께한 디지털 마케터.<br />
          데이터 기반 전략으로 실질적인 성장을 만들어 냅니다.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" className="btn btn-outline">문의하기</a>
        </div>

        <div className="hero-stats">
          {[
            { value: '10+', label: '년 경력' },
            { value: '50+', label: '브랜드 협업' },
            { value: '340%', label: '평균 ROI' },
            { value: '1.2B', label: '누적 노출' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="아래로 스크롤">
        <span className="scroll-arrow" />
      </a>
    </section>
  );
}
