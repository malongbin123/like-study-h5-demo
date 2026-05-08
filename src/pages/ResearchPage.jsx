import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconArrowLeft = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const IconSearch = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconSliders = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/>
    <line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/>
    <line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/>
    <line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);

const IconChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const IconEye = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 576 512" fill="currentColor">
    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-71.4-88.6-71.1c-5.6 .1-9.1 6.1-7.1 11.6c2.1 6.3 3.1 13.1 3.1 20z"/>
  </svg>
);

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

const IconTimes = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconSpinner = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ animation: 'spin 1s linear infinite' }}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

function formatHeat(heat) {
  if (heat >= 1000) {
    return (heat / 1000).toFixed(1) + 'k';
  }
  return String(heat);
}

function getResultTagClass(tag) {
  if (/国家级|省级|市级/.test(tag)) {
    if (/国家级/.test(tag)) return 'result-tag-hl-blue';
    return 'result-tag-hl-green';
  }
  if (/创新/.test(tag)) return 'result-tag-hl-blue';
  return 'result-tag-gray';
}

const filterChips = ['全部结果', '八年级', '九年级', '力学', '光学', '电学', '国家级获奖'];

const gradeOptions = ['八年级上册', '八年级下册', '九年级全册'];
const typeOptions = ['力学探究', '电学实验', '光学实验', '热学实验', '创新实验', '经典实验', '低成本自制教具', '中考必做'];
const awardOptions = ['不限', '国家级获奖', '省级获奖', '市级获奖'];

export default function ResearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { lessons } = useStore();

  const queryParam = searchParams.get('query') || '';
  const filterParam = searchParams.get('filter') || '';

  const [searchInput, setSearchInput] = useState(queryParam);
  const [activeFilterChip, setActiveFilterChip] = useState('全部结果');
  const [sortPopular, setSortPopular] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [tempGrade, setTempGrade] = useState('');
  const [tempType, setTempType] = useState('');
  const [tempAward, setTempAward] = useState('');

  const filteredLessons = useMemo(() => {
    let list = lessons;

    if (queryParam) {
      const q = queryParam.toLowerCase();
      list = list.filter((l) =>
        l.title.toLowerCase().includes(q) ||
        (l.tags && l.tags.some((t) => t.toLowerCase().includes(q))) ||
        (l.teacher && l.teacher.toLowerCase().includes(q))
      );
    }

    if (activeFilterChip === '八年级') {
      list = list.filter((l) => l.grade === '八年级');
    } else if (activeFilterChip === '九年级') {
      list = list.filter((l) => l.grade === '九年级');
    } else if (activeFilterChip === '力学') {
      list = list.filter((l) => l.tags && l.tags.some((t) => t.includes('力学')));
    } else if (activeFilterChip === '光学') {
      list = list.filter((l) => l.tags && l.tags.some((t) => t.includes('光')));
    } else if (activeFilterChip === '电学') {
      list = list.filter((l) => l.tags && l.tags.some((t) => t.includes('电')));
    }

    if (sortPopular) {
      list = [...list].sort((a, b) => (b.heat || 0) - (a.heat || 0));
    }

    return list;
  }, [lessons, queryParam, activeFilterChip, sortPopular]);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q) {
        navigate(`/research?filter=search&query=${encodeURIComponent(q)}`, { replace: true });
      }
    }
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleConfirmFilter = () => {
    setDrawerOpen(false);
  };

  const handleResetFilter = () => {
    setTempGrade('');
    setTempType('');
    setTempAward('');
  };

  return (
    <div
      className="page"
      style={{
        background: '#f9fafb',
        height: '100%',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ padding: 16 }}>
        {/* 顶部搜索栏（完全对齐参考页面） */}
        <div
          className="research-top-bar"
          style={{ marginBottom: 16, padding: '0 0 0 0' }} // 移除默认 padding，自己控制
        >
          <div
            className="back-btn-research"
            onClick={() => navigate('/discover')}
            style={{ fontSize: 20, color: '#4b5563' }}
          >
            <IconArrowLeft size={20} />
          </div>
          <div className="research-search-box" style={{ position: 'relative' }}>
            <span className="search-icon-research">
              <IconSearch size={16} />
            </span>
            <input
              type="text"
              placeholder="搜索：浮力怎么引入 / 自制压强计 / 滑动变阻器怎么连"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              style={{
                paddingLeft: '40px', // 精准对齐 pl-10
                fontSize: 14,
              }}
            />
          </div>
          <button
            className="filter-icon-btn"
            onClick={handleOpenDrawer}
            style={{ fontSize: 20, color: '#4b5563' }}
          >
            <IconSliders size={20} />
          </button>
        </div>

        {/* 搜索结果信息（完全对齐参考页面） */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div>
            <p style={{ color: '#4b5563', fontSize: 14, margin: 0 }}>
              {queryParam ? (
                <>
                  搜索「<span style={{ color: '#1e40af', fontWeight: 500 }}>{queryParam}</span>」
                </>
              ) : (
                '全部课例'
              )}
            </p>
            <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 4 }}>
              找到 {filteredLessons.length} 个相关课例
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: '#4b5563',
              fontSize: 14,
              cursor: 'pointer',
            }}
            onClick={() => setSortPopular(!sortPopular)}
          >
            <span>排序</span>
            <IconChevronDown size={12} />
          </div>
        </div>

        {/* 筛选标签（精确对齐与滚动） */}
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            marginLeft: -4,
            marginRight: -4,
            paddingLeft: 4,
            paddingRight: 4,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 12,
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 8, width: 'max-content' }}>
            {filterChips.map((chip) => (
              <button
                key={chip}
                style={{
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  fontSize: 12,
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: 9999,
                  border: 'none',
                  background: activeFilterChip === chip ? '#1e40af' : '#f3f4f6',
                  color: activeFilterChip === chip ? '#ffffff' : '#4b5563',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveFilterChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
        {/* 结果列表（覆盖 index.css 的 margin） */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="result-card"
              style={{
                margin: 0,
                width: '100%',
              }}
              onClick={() => navigate(`/video/${lesson.id}`)}
            >
              <div className="cover-area">
                {lesson.coverImage ? (
                  <img src={lesson.coverImage} alt={lesson.title} />
                ) : (
                  <div className="cover-fallback" style={{ background: lesson.cover }} />
                )}
                <div className="result-duration">
                  <IconPlay size={12} />
                  {lesson.shortDuration || '2:15'}
                </div>
              </div>
              <div className="result-info">
                <h3>{lesson.title}</h3>
                <div className="result-tags">
                  {lesson.tags.map((tag) => (
                    <span key={tag} className={`result-tag ${getResultTagClass(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="result-meta"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 12,
                    color: '#6b7280',
                    marginTop: 8,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <IconEye size={12} />
                    {formatHeat(lesson.heat)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <IconFlask size={14} />
                    配套器材 {lesson.materials ? lesson.materials.length : 0} 件
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 加载更多（动态旋转图标） */}
        <div
          style={{
            textAlign: 'center',
            padding: '24px 0',
            fontSize: 14,
            color: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <IconSpinner size={18} />
          加载更多结果
        </div>
      </div>

      {/* 筛选抽屉 */}
      <div
        className={`drawer-mask${drawerOpen ? ' show' : ''}`}
        onClick={handleCloseDrawer}
      />

      <div className={`filter-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <h3>筛选</h3>
          <button className="drawer-close" onClick={handleCloseDrawer}>
            <IconTimes size={20} />
          </button>
        </div>

        <div className="drawer-section">
          <h4>适用年级</h4>
          <div className="drawer-chip-group">
            {gradeOptions.map((g) => (
              <button
                key={g}
                className={`drawer-chip${tempGrade === g ? ' active' : ''}`}
                onClick={() => setTempGrade(tempGrade === g ? '' : g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <h4>实验类型</h4>
          <div className="drawer-chip-group">
            {typeOptions.map((t) => (
              <button
                key={t}
                className={`drawer-chip${tempType === t ? ' active' : ''}`}
                onClick={() => setTempType(tempType === t ? '' : t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <h4>获奖等级</h4>
          <div className="drawer-chip-group">
            {awardOptions.map((a) => (
              <button
                key={a}
                className={`drawer-chip${tempAward === a ? ' active' : ''}`}
                onClick={() => setTempAward(tempAward === a ? '' : a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-actions">
          <button className="btn-reset" onClick={handleResetFilter}>
            重置
          </button>
          <button className="btn-confirm" onClick={handleConfirmFilter}>
            确认筛选
          </button>
        </div>
      </div>
    </div>
  );
}