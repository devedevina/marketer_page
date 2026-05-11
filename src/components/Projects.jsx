import { useState } from 'react';
import './Projects.css';

const categories = ['전체', '퍼포먼스', '브랜딩', 'SNS', 'CRM'];

const projects = [
  {
    id: 1,
    category: '퍼포먼스',
    title: '이커머스 A사 ROAS 480% 달성',
    period: '2024.03 – 2024.08',
    tags: ['Google Ads', 'Meta Ads', 'GA4'],
    summary: '신규 쇼핑몰의 퍼포먼스 마케팅 전략 수립부터 운영까지 총괄. 3개월 만에 ROAS 480% 달성, 월 매출 3배 성장.',
    metrics: [
      { label: 'ROAS', value: '480%' },
      { label: 'CPA 절감', value: '62%' },
      { label: '매출 성장', value: '3x' },
    ],
  },
  {
    id: 2,
    category: '브랜딩',
    title: 'B2B SaaS 브랜드 리포지셔닝',
    period: '2023.09 – 2024.01',
    tags: ['브랜드 전략', '콘텐츠 마케팅', 'LinkedIn'],
    summary: '기술 중심 브랜드를 인간적인 목소리로 전환. 리포지셔닝 이후 인바운드 리드 220% 증가, 영업 사이클 40% 단축.',
    metrics: [
      { label: '인바운드 리드', value: '+220%' },
      { label: '영업 사이클', value: '-40%' },
      { label: 'NPS', value: '+28p' },
    ],
  },
  {
    id: 3,
    category: 'SNS',
    title: '뷰티 스타트업 SNS 바이럴 캠페인',
    period: '2023.04 – 2023.07',
    tags: ['인스타그램', '틱톡', '인플루언서'],
    summary: '마이크로 인플루언서 120명과 함께한 UGC 캠페인. 틱톡 바이럴로 1200만 뷰 달성, 팔로워 8만 → 34만 성장.',
    metrics: [
      { label: '총 노출', value: '1,200만' },
      { label: '팔로워 성장', value: '4.25x' },
      { label: '판매 전환', value: '+180%' },
    ],
  },
  {
    id: 4,
    category: 'CRM',
    title: '구독 서비스 이탈 방어 CRM 자동화',
    period: '2022.11 – 2023.03',
    tags: ['Braze', '이메일', '푸시 알림'],
    summary: '고객 행동 데이터 기반 이탈 예측 모델 구축 및 개인화 CRM 시퀀스 설계. 월간 이탈률 38% 감소.',
    metrics: [
      { label: '이탈률 감소', value: '-38%' },
      { label: '이메일 오픈율', value: '+55%' },
      { label: 'LTV 개선', value: '+27%' },
    ],
  },
  {
    id: 5,
    category: '퍼포먼스',
    title: '앱 다운로드 캠페인 CPI 최적화',
    period: '2022.06 – 2022.10',
    tags: ['앱 마케팅', 'ASO', 'Meta Ads'],
    summary: '게임 앱 신규 유저 확보 캠페인. 창의적 테스트 240개 운영으로 CPI 52% 절감, D7 리텐션 개선.',
    metrics: [
      { label: 'CPI 절감', value: '-52%' },
      { label: 'D7 리텐션', value: '+18%' },
      { label: '월 설치수', value: '15만+' },
    ],
  },
  {
    id: 6,
    category: '브랜딩',
    title: '식품 브랜드 SNS 채널 성장 전략',
    period: '2021.08 – 2022.02',
    tags: ['콘텐츠 전략', '유튜브', '인스타그램'],
    summary: '제로 팔로워에서 시작한 식품 브랜드의 멀티채널 콘텐츠 전략 수립. 6개월 만에 유튜브 구독자 5만 명 달성.',
    metrics: [
      { label: '유튜브 구독자', value: '5만+' },
      { label: '인스타 팔로워', value: '12만+' },
      { label: '브랜드 검색량', value: '+340%' },
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState('전체');

  const filtered = active === '전체' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">진행 프로젝트</h2>
        <span className="accent-line" />
        <p className="section-desc">
          다양한 산업군과 채널에서 만들어낸 실질적인 성과들을 소개합니다.
        </p>

        <div className="proj-filters">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map(p => (
            <article key={p.id} className="proj-card">
              <div className="proj-card-top">
                <span className="proj-category">{p.category}</span>
                <span className="proj-period">{p.period}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-summary">{p.summary}</p>
              <div className="proj-tags">
                {p.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
              <div className="proj-metrics">
                {p.metrics.map(m => (
                  <div key={m.label} className="proj-metric">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
