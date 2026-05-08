import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconPlay = ({ size = 24 }) => (
  <svg width={size} height={size * (512 / 384)} viewBox="0 0 384 512" fill="currentColor">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  </svg>
);

const IconHeart = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
  </svg>
);

const IconShareNodes = ({ size = 20 }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
  </svg>
);

const IconFire = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill={color}>
    <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
  </svg>
);

const IconCircleCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
  </svg>
);

const IconCirclePlay = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
  </svg>
);

const IconCopy = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/>
  </svg>
);

const IconChevronRight = ({ size = 12 }) => (
  <svg width={size} height={size * (512 / 320)} viewBox="0 0 320 512" fill="currentColor">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>
);

const IconList = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
  </svg>
);

const IconArrowLeft = ({ size = 20 }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
  </svg>
);

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    lessons, getMaterialsByLessonId,
    showToast, openPopup, closePopup,
  } = useStore();

  const targetId = parseInt(id) || lessons[0]?.id;
  const lesson = lessons.find((l) => l.id === targetId) || lessons[0];
  const mats = getMaterialsByLessonId(lesson.id);
  const coverThumbs = lessons.slice(0, 3).map((l) => l.coverImage).filter(Boolean);
  const allCovers = lessons.map((l) => l.coverImage).filter(Boolean);
  const matCoverMap = {};
  mats.forEach((m, idx) => {
    matCoverMap[m.id] = allCovers[idx % allCovers.length];
  });

  const handleShowMaterials = () => {
    const body = (
      <div>
        <div className="equip-modal-list">
          {mats.map((m) => (
            <div key={m.id} className="equip-modal-item">
              <img src={matCoverMap[m.id]} alt={m.name} className="equip-modal-img" />
              <div className="equip-modal-info">
                <div className="equip-modal-name-row">
                  <span className="equip-modal-name">{m.name}</span>
                  <span className="equip-modal-count">×{m.count}</span>
                </div>
                <div className="equip-modal-desc">{m.usage}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="equip-modal-actions">
          <button className="btn btn-primary" style={{ flex: 1, padding: '12px', borderRadius: 12, fontWeight: 600 }} onClick={() => { closePopup(); navigate(`/apply/${lesson.id}`); }}>
            申请免费试用
          </button>
          <button className="btn btn-outline" style={{ flex: 1, padding: '12px', borderRadius: 12, fontWeight: 600, borderWidth: 2 }} onClick={() => { closePopup(); navigate(`/purchase/${lesson.id}`); }}>
            导出采购意向单
          </button>
        </div>
      </div>
    );
    openPopup('本课配套实验器材', body);
  };

  const handleShowFullTalk = () => {
    const body = (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{lesson.title}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>主讲：{lesson.teacher} · {lesson.school}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>时长约 {lesson.fullDuration}</div>
        <div style={{ background: '#000', borderRadius: 10, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 60, height: 60, background: 'rgba(0,0,0,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconPlay size={28} />
          </div>
        </div>
      </div>
    );
    openPopup('完整说课录像', body);
  };

  const handleShowPlan = () => {
    const body = (
      <div>
        <p style={{ marginBottom: 10 }}>《{lesson.title}》完整教案</p>
        <div style={{ background: '#F3F4F6', padding: 10, borderRadius: 6, wordBreak: 'break-all', fontSize: 13, marginBottom: 12 }}>
          https://example.com/plans/{lesson.id}
        </div>
        <button className="btn btn-primary btn-block" onClick={() => {
          navigator.clipboard?.writeText(`https://example.com/plans/${lesson.id}`);
          showToast('教案链接已复制');
          closePopup();
        }}>
          复制下载链接
        </button>
      </div>
    );
    openPopup('教案下载', body);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* ========== 可滚动内容区 ========== */}
      <div className="video-detail-scroll" style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div className="video-detail-inner">
          {/* 视频播放区 */}
          <div className="video-detail-player-wrapper">
            <div className="video-detail-player" onClick={() => navigate(`/swipe/${lesson.id}`)}>
              {lesson.coverlongImage && (
                <img src={lesson.coverlongImage} alt={lesson.title} className="video-detail-cover" />
              )}
              <div className="video-detail-gradient" />
              <button className="video-detail-back-btn" onClick={() => navigate(-1)}>
                <IconArrowLeft size={18} />
              </button>
              <button className="video-detail-play-btn">
                <IconPlay size={26} />
              </button>
              <div className="video-detail-bottom">
                <h1 className="video-detail-title">{lesson.title}</h1>
                <div className="video-detail-teacher-row">
                  <div className="video-detail-teacher-info">
                    <div className="video-detail-avatar">{lesson.teacher.charAt(0)}</div>
                    <span className="video-detail-teacher-name">{lesson.teacher}｜{lesson.school}</span>
                  </div>
                  <div className="video-detail-actions">
                    <button className="video-detail-action-btn">
                      <IconHeart size={20} />
                    </button>
                    <button className="video-detail-action-btn" onClick={() => showToast('链接已复制')}>
                      <IconShareNodes size={20} />
                    </button>
                  </div>
                </div>
                <div className="video-detail-tags">
                  <span className="video-detail-tag">八年级下册</span>
                  <span className="video-detail-tag">压强与浮力</span>
                  <span className="video-detail-tag">创新实验</span>
                </div>
              </div>
            </div>
          </div>

          {/* 课例简介 */}
          <div className="video-detail-card">
            <h2 className="video-detail-card-title">课例简介</h2>
            <p className="video-detail-card-desc">{lesson.desc}</p>
            <div
              className="video-detail-heat"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '12px',
              }}
            >
              <IconFire size={16} color="#f97316" />
              <span>{lesson.heat.toLocaleString()} 老师正在研习</span>
            </div>
            <div className="video-detail-meta-grid">
              <div className="video-detail-meta-item">
                <span className="video-detail-meta-label">适用年级：</span>
                <span className="video-detail-meta-value">{lesson.grade}</span>
              </div>
              <div className="video-detail-meta-item">
                <span className="video-detail-meta-label">实验类型：</span>
                <span className="video-detail-meta-value">创新演示实验</span>
              </div>
            </div>
            <div className="video-detail-tags-section">
              <div className="video-detail-tags-label">知识点标签：</div>
              <div className="video-detail-tags-kw">
                <span className="video-detail-tag-kw">大气压强</span>
                <span className="video-detail-tag-kw">力学</span>
                <span className="video-detail-tag-kw">低成本实验</span>
                <span className="video-detail-tag-kw">创新教具</span>
              </div>
            </div>
            <div className="video-detail-highlights">
              <h3 className="video-detail-highlights-title">实验亮点：</h3>
              <ul className="video-detail-highlights-list">
                <li>
                  <IconCircleCheck size={16} />
                  <span>取材方便，使用日常生活常见材料</span>
                </li>
                <li>
                  <IconCircleCheck size={16} />
                  <span>现象明显，学生能直观观察物理过程</span>
                </li>
                <li>
                  <IconCircleCheck size={16} />
                  <span>操作简单，适合课堂分组实验</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 完整教学资源 */}
          <div className="video-detail-card">
            <h2 className="video-detail-card-title">完整教学资源</h2>
            <div className="video-detail-resource-btns">
              <button
                className="video-detail-btn-primary"
                style={{
                  padding: '12px 0',
                  fontSize: '14px',
                  fontWeight: 500,
                  gap: '8px',
                }}
                onClick={handleShowFullTalk}
              >
                <IconCirclePlay size={18} />
                查看完整说课
              </button>
              <p
                className="video-detail-resource-sub"
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                观看 {lesson.fullDuration} 完整比赛录像
              </p>
              <button
                className="video-detail-btn-outline"
                style={{
                  padding: '12px 0',
                  fontSize: '14px',
                  fontWeight: 500,
                  gap: '8px',
                  border: '1px solid #1e40af',
                }}
                onClick={handleShowPlan}
              >
                <IconCopy size={18} />
                复制教案下载链接
              </button>
            </div>
          </div>

          {/* 教师讨论区 */}
          <div className="video-detail-card">
            <div className="video-detail-discussion-header">
              <h3 className="video-detail-discussion-title">教师讨论区</h3>
              <a className="video-detail-discussion-more">
                查看全部
                <IconChevronRight size={12} />
              </a>
            </div>
            <div
              className="video-detail-discussion-item"
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              <div className="video-detail-discussion-avatar" style={{ width: '36px', height: '36px' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#1f2937' }}>李老师</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>昨天</span>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', marginTop: '4px' }}>
                  这个实验设计太棒了，我上课用了，学生反应很好！
                </p>
              </div>
            </div>
          </div>

          {/* 底部留白，防止最底部内容被 tabbar 遮挡 */}
          <div style={{ height: '20px' }} />
        </div>
      </div>

      {/* ========== 固定底部器材栏 ========== */}
      <div
        style={{
          flexShrink: 0,
          background: '#ffffff',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          padding: '12px',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: 72, height: 42, flexShrink: 0 }}>
            {coverThumbs.map((src, idx) => (
              <div
                key={idx}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  border: '1.5px solid #fff',
                  overflow: 'hidden',
                  position: 'absolute',
                  left: idx * 20,
                  zIndex: 3 - idx,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }}
              >
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontWeight: 500, color: '#1f2937', fontSize: 14, margin: 0 }}>
              本课研习配套器材
            </p>
            <p style={{ fontSize: 12, color: '#6b7280', margin: '2px 0 0 0' }}>
              共 {mats.length} 件器材
            </p>
          </div>
        </div>
        <button
          onClick={handleShowMaterials}
          style={{
            background: '#1e40af',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '8px 20px',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexShrink: 0,
          }}
        >
          <IconList size={16} />
          查看清单
        </button>
      </div>
    </div>
  );
}