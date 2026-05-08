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

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { lessons, favorites } = useStore();
  const favLessons = lessons.filter(l => favorites.has(l.id));

  return (
    <div className="page" style={{ padding: '16px', background: '#F5F6FA' }}>
      <div style={{ marginBottom: 16 }}>
        <span className="back-btn" onClick={() => navigate(-1)}>←</span>
      </div>

      {/* 顶部标题 */}
      <div className="section-header">
        <div>
          <h2>我的收藏</h2>
          <div className="section-subtitle">{favLessons.length} 个课例</div>
        </div>
      </div>

      <div>
        {favLessons.length > 0 ? (
          favLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="video-card"
              onClick={() => navigate(`/video/${lesson.id}`)}
            >
              <div className="cover-gradient" style={{ background: lesson.cover, height: 140 }}>
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
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: 60, color: '#9CA3AF', fontSize: 14 }}>
            暂无收藏
          </div>
        )}
      </div>
    </div>
  );
}
