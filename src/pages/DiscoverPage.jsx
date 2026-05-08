import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconFlask = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 0L160 0l0 174.9c0 10.5-3.1 20.8-8.9 29.8L3.8 378.8C-2.4 390.4 0 404.7 10 414.2C20.1 423.6 34.7 432 50.9 432l346.2 0c16.2 0 30.7-8.4 40.9-17.8c10.1-9.5 12.5-23.9 6.3-35.5L296.9 204.7c-5.8-9-8.9-19.3-8.9-29.8L288 0zM144 32l160 0 0 32-160 0 0-32zm0 64l160 0 0 78.9c0 17 5 33.6 14.2 48L420.6 394.7c2.4 3 0 5.3-4.1 5.3L31.4 400c-4.1 0-6.5-2.3-4.1-5.3L129.8 222.9c9.3-14.4 14.2-31 14.2-48L144 96z"/>
  </svg>
);

const IconPlay = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  </svg>
);

const IconEye = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-71.4-88.6-71.1c-5.6 .1-9.1 6.1-7.1 11.6c2.1 6.3 3.1 13.1 3.1 20z"/>
  </svg>
);

const IconSearch = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconFilter = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const IconBook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);

const IconGraduation = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill="currentColor">
    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
  </svg>
);

const IconCertificate = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/>
  </svg>
);

const IconStar = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 576 512" fill="currentColor">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
  </svg>
);

const IconRecycle = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"/>
  </svg>
);

const IconChevronRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const IconFlaskLarge = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 0L160 0l0 174.9c0 10.5-3.1 20.8-8.9 29.8L3.8 378.8C-2.4 390.4 0 404.7 10 414.2C20.1 423.6 34.7 432 50.9 432l346.2 0c16.2 0 30.7-8.4 40.9-17.8c10.1-9.5 12.5-23.9 6.3-35.5L296.9 204.7c-5.8-9-8.9-19.3-8.9-29.8L288 0zM144 32l160 0 0 32-160 0 0-32zm0 64l160 0 0 78.9c0 17 5 33.6 14.2 48L420.6 394.7c2.4 3 0 5.3-4.1 5.3L31.4 400c-4.1 0-6.5-2.3-4.1-5.3L129.8 222.9c9.3-14.4 14.2-31 14.2-48L144 96z"/>
  </svg>
);

const quickNavItems = [
  { label: '八年级物理研习', filter: 'grade8', icon: IconBook, bgColor: '#dbeafe', iconColor: '#1e40af' },
  { label: '九年级物理研习', filter: 'grade9', icon: IconGraduation, bgColor: '#dbeafe', iconColor: '#1e40af' },
  { label: '中考必做实验', filter: 'exam', icon: IconCertificate, bgColor: '#d1fae5', iconColor: '#0d9488' },
  { label: '名师创新实验', filter: 'innovation', icon: IconStar, bgColor: '#d1fae5', iconColor: '#0d9488' },
  { label: '低成本自制教具', filter: 'lowcost', icon: IconRecycle, bgColor: '#fef3c7', iconColor: '#d97706', fullWidth: true },
];

const tagColorMap = {
  '国家级一等奖': 'tag-primary',
  '重点考点': 'tag-primary',
  '课标要求': 'tag-primary',
  '力学探究': 'tag-blue',
  '电学基础': 'tag-blue',
  '液体压强': 'tag-blue',
  '浮力': 'tag-blue',
  '光学实验': 'tag-blue',
  '电学实验': 'tag-blue',
  '低成本': 'tag-amber',
  '低成本实验': 'tag-amber',
  '中考必做': 'tag-green',
  '中考必看': 'tag-green',
  '探究实验': 'tag-green',
  '名师创新': 'tag-purple',
  '创新实验': 'tag-purple',
  '学生探究': 'tag-pink',
};

function getTagClass(tag) {
  return tagColorMap[tag] || 'tag-blue';
}

function formatHeat(heat) {
  if (heat >= 1000) {
    return (heat / 1000).toFixed(1) + 'k';
  }
  return String(heat);
}

export default function DiscoverPage() {
  const navigate = useNavigate();
  const { lessons, showToast } = useStore();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q) navigate(`/research?filter=search&query=${encodeURIComponent(q)}`);
    }
  };

  const handleFilterClick = () => {
    showToast('筛选功能开发中');
  };

  return (
    <div className="page bg-grid-pattern" style={{ padding: '16px' }}>
      {/* 顶部品牌区 */}
      <div className="brand-lab" style={{ margin: '0 0 24px 0' }}>
        <div className="brand-lab-inner">
          <h1>理课研习社</h1>
          <div className="subtitle">初中物理说课与实验研习平台</div>
          <div className="slogan">看名师课例，配实验器材</div>
        </div>
        <div className="flask-icon">
          <IconFlaskLarge size={120} />
        </div>
      </div>

      {/* 搜索区 */}
      <div className="search-bar-wrapper" style={{ margin: '0 0 24px 0' }}>
        <span className="search-icon-left">
          <IconSearch size={16} />
        </span>
        <input
          type="text"
          placeholder="搜索：浮力怎么引入 / 自制压强计 / 滑动变阻器怎么连"
          onKeyDown={handleSearch}
        />
        <button className="filter-btn" onClick={handleFilterClick}>
          <IconFilter size={16} />
        </button>
      </div>

      {/* 快速导航区 */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>快速导航</h2>
      </div>
      <div className="quick-nav-2col" style={{ padding: 0, marginBottom: '32px' }}>
        {quickNavItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.label}
              className={`nav-card${item.fullWidth ? ' full-width' : ''}`}
              onClick={() => navigate(`/research?filter=${item.filter}`)}
            >
              <div
                className="nav-card-icon"
                style={{ background: item.bgColor, color: item.iconColor }}
              >
                <IconComponent size={18} />
              </div>
              <div className="nav-card-text">{item.label}</div>
            </div>
          );
        })}
      </div>

      {/* 优秀课例展示区 */}
      <div className="section-header" style={{ padding: '0 0 16px 0' }}>
        <div>
          <h2>优秀课例</h2>
          <div className="section-subtitle">精选 1-3 分钟名师实验说课片段</div>
        </div>
        <div className="more-link" onClick={() => navigate('/research')}>
          更多
          <IconChevronRight size={12} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '40px' }}>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="video-card"
            style={{ margin: 0, width: '100%' }}
            onClick={() => navigate(`/video/${lesson.id}`)}
          >
            <div className="cover-gradient" style={{ background: lesson.cover }}>
              {lesson.coverImage && (
                <img
                  src={lesson.coverImage}
                  alt={lesson.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              )}
              <div className="watch-count">
                <IconEye size={12} />
                {formatHeat(lesson.heat)}
              </div>
              <div className="cover-overlay">
                <span style={{ display: 'flex', alignItems: 'center', marginRight: '6px' }}>
                  <IconPlay size={12} />
                </span>
                {lesson.shortDuration || '2:15'}
              </div>
            </div>
            <div className="card-info">
              <h3>{lesson.title}</h3>
              <div className="tags">
                {lesson.tags.map((tag) => (
                  <span key={tag} className={`tag-pill ${getTagClass(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="meta-row">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <IconFlask size={14} />
                  配套器材 {lesson.materials ? lesson.materials.length : 0} 件
                </span>
                <span>{lesson.teacher} · {lesson.school}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}