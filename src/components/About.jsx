import './About.css';

const skills = [
  { name: '디지털 퍼포먼스 마케팅', level: 95 },
  { name: '콘텐츠 마케팅 & 브랜딩', level: 90 },
  { name: '데이터 분석 (GA4 / Amplitude)', level: 88 },
  { name: 'SNS & 인플루언서 마케팅', level: 92 },
  { name: 'CRM & 이메일 자동화', level: 80 },
  { name: 'SEO / ASO', level: 85 },
];

const timeline = [
  { year: '2024', role: '마케팅 디렉터', company: '스타트업 A' },
  { year: '2021', role: '시니어 마케터', company: '이커머스 B' },
  { year: '2018', role: '퍼포먼스 마케터', company: '에이전시 C' },
  { year: '2016', role: '마케터', company: '스타트업 D' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">어떤 마케터인가요?</h2>
        <span className="accent-line" />

        <div className="about-grid">
          <div className="about-left">
            <div className="about-photo-wrap">
              <div className="about-photo-placeholder">
                <span>KM</span>
              </div>
              <div className="about-badge">
                <strong>10+</strong>
                <span>Years<br />Experience</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <p className="about-intro">
              안녕하세요, 저는 <strong>김마케터</strong>입니다.<br />
              브랜드가 올바른 사람에게, 올바른 메시지를, 올바른 시점에
              닿을 수 있도록 데이터와 창의성을 결합한 전략을 설계합니다.
            </p>
            <p className="about-body">
              스타트업부터 중견기업까지 다양한 산업군에서 퍼포먼스 마케팅,
              브랜드 전략, 콘텐츠 기획을 이끌어왔습니다. 숫자로 증명되는
              결과물을 중시하며, 캠페인 하나하나에 명확한 가설과 검증을
              녹여냅니다.
            </p>

            <div className="skills-wrap">
              <h3 className="skills-heading">핵심 역량</h3>
              {skills.map(s => (
                <div key={s.name} className="skill-row">
                  <div className="skill-info">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ '--target': `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-wrap">
          <h3 className="timeline-heading">경력 타임라인</h3>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{t.year}</span>
                  <strong className="timeline-role">{t.role}</strong>
                  <span className="timeline-company">{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
