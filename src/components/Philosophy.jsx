import './Philosophy.css';

const values = [
  {
    icon: '📊',
    title: '데이터 드리븐',
    desc: '직감에 의존하지 않습니다. 모든 캠페인은 명확한 가설과 측정 가능한 지표로 시작합니다. A/B 테스트와 코호트 분석으로 가설을 검증하고, 숫자로 이야기합니다.',
  },
  {
    icon: '🎯',
    title: '고객 중심 사고',
    desc: '브랜드의 목소리보다 고객의 언어가 우선입니다. 고객 여정을 깊이 이해하고, 각 접점에서 진짜 필요한 메시지를 전달하는 것이 제 전략의 출발점입니다.',
  },
  {
    icon: '🔄',
    title: '빠른 실험과 반복',
    desc: '완벽한 캠페인을 기다리기보다 빠르게 실험하고, 데이터를 통해 개선합니다. MVP 마케팅 접근법으로 리스크를 줄이면서도 혁신적인 결과를 만들어냅니다.',
  },
  {
    icon: '🤝',
    title: '브랜드와 퍼포먼스의 균형',
    desc: '단기 전환율과 장기 브랜드 자산은 상충하지 않습니다. 두 마리 토끼를 모두 잡는 통합 마케팅 전략으로 지속 가능한 성장을 설계합니다.',
  },
  {
    icon: '💡',
    title: '창의성과 논리의 결합',
    desc: '좋은 크리에이티브는 아름다울 뿐 아니라 효과적입니다. 데이터가 방향을 제시하고, 창의성이 그 위에 날개를 달아줍니다.',
  },
  {
    icon: '📈',
    title: '비즈니스 임팩트 우선',
    desc: '마케팅은 비용이 아닌 투자입니다. 모든 액션이 매출, 사용자 유지, LTV 향상으로 연결되는지 끊임없이 질문합니다.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section section-alt">
      <div className="container">
        <p className="section-label">Philosophy</p>
        <h2 className="section-title">마케터로서의 철학</h2>
        <span className="accent-line" />
        <p className="section-desc">
          제가 마케팅을 대하는 방식, 의사결정의 기준, 그리고 성과를 만들어내는 원칙들을 소개합니다.
        </p>

        <div className="philo-grid">
          {values.map((v, i) => (
            <div key={i} className="philo-card">
              <div className="philo-icon">{v.icon}</div>
              <h3 className="philo-title">{v.title}</h3>
              <p className="philo-desc">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="philo-quote">
          <blockquote>
            "마케팅은 제품을 파는 일이 아닙니다.<br />
            사람들의 삶에 의미 있는 순간을 만드는 일입니다."
          </blockquote>
          <cite>— 김마케터</cite>
        </div>
      </div>
    </section>
  );
}
