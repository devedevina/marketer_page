import { useState } from 'react';
import './Contact.css';

const inquiryTypes = ['캠페인 기획', '브랜드 전략', '퍼포먼스 마케팅', 'SNS 운영', '강의 / 컨설팅', '기타'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = '이름을 입력해 주세요.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = '올바른 이메일을 입력해 주세요.';
    if (!form.type) e.type = '문의 유형을 선택해 주세요.';
    if (form.message.trim().length < 10) e.message = '내용을 10자 이상 입력해 주세요.';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contact" className="section section-alt">
        <div className="container contact-sent">
          <div className="sent-icon">✅</div>
          <h3>문의가 접수되었습니다!</h3>
          <p>빠른 시일 내에 이메일로 회신 드리겠습니다.<br />평균 응답 시간은 1영업일 이내입니다.</p>
          <button className="btn btn-primary" onClick={() => setSent(false)}>
            새 문의 남기기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">함께 일해요</h2>
        <span className="accent-line" />

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-intro">
              새로운 프로젝트, 협업 제안, 강의 요청 등 어떤 문의든 환영합니다.
              아이디어가 있다면 먼저 연락주세요.
            </p>

            <div className="contact-details">
              {[
                { icon: '✉️', label: '이메일', value: 'kim@marketer.kr' },
                { icon: '📞', label: '전화', value: '010-1234-5678' },
                { icon: '📍', label: '위치', value: '서울특별시 강남구' },
                { icon: '🕐', label: '응답 시간', value: '평균 1영업일 이내' },
              ].map(d => (
                <div key={d.label} className="contact-detail-item">
                  <span className="contact-detail-icon">{d.icon}</span>
                  <div>
                    <span className="contact-detail-label">{d.label}</span>
                    <strong className="contact-detail-value">{d.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {['LinkedIn', 'Instagram', 'Brunch', 'GitHub'].map(s => (
                <a key={s} href="#" className="social-chip">{s}</a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름 *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="홍길동"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일 *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>문의 유형 *</label>
              <div className="type-chips">
                {inquiryTypes.map(t => (
                  <button
                    key={t}
                    type="button"
                    className={`type-chip${form.type === t ? ' selected' : ''}`}
                    onClick={() => { setForm(f => ({ ...f, type: t })); setErrors(e => ({ ...e, type: '' })); }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.type && <span className="form-error">{errors.type}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">문의 내용 *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="프로젝트 내용, 예산, 일정 등을 자유롭게 적어주세요."
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
              <span className="char-count">{form.message.length} / 1000</span>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              문의 보내기 →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
