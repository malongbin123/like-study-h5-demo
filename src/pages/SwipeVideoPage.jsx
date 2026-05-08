import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconHeart = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
  </svg>
);

const IconComment = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9z"/>
  </svg>
);

const IconDoc = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);

const IconPlay = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  </svg>
);

const IconShare = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
  </svg>
);

const IconFire = ({ size = 16 }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill="#f97316">
    <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
  </svg>
);

const IconCircleCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
  </svg>
);

const IconCopy = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/>
  </svg>
);

const IconList = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
  </svg>
);

const formatHeat = (num) => {
  if (num >= 10000) return (num / 10000).toFixed(1) + 'w';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num;
};

export default function SwipeVideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lessons, getMaterialsByLessonId, showToast, openPopup, closePopup, toggleFavorite, favorites } = useStore();

  const [sheetVisible, setSheetVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const feedRef = useRef(null);

  const sortedLessons = (() => {
    if (!lessons?.length) return [];
    const targetId = parseInt(id);
    const idx = lessons.findIndex((l) => l.id === targetId);
    if (idx === -1) return [...lessons];
    const arr = [...lessons];
    arr.sort((a, b) => {
      if (a.id === targetId) return -1;
      if (b.id === targetId) return 1;
      return 0;
    });
    return arr;
  })();

  const currentLesson = sortedLessons[activeIdx] || sortedLessons[0];
  const currentMats = currentLesson ? getMaterialsByLessonId(currentLesson.id) : [];
  const isFav = currentLesson ? favorites.has(currentLesson.id) : false;
  const allCovers = lessons.map((l) => l.coverImage).filter(Boolean);

  useEffect(() => {
    const container = feedRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const idx = Math.round(scrollTop / itemHeight);
      if (idx !== activeIdx && idx >= 0 && idx < sortedLessons.length) {
        setActiveIdx(idx);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIdx, sortedLessons.length]);

  const openSheet = useCallback(() => setSheetVisible(true), []);
  const closeSheet = useCallback(() => setSheetVisible(false), []);

  if (!lessons?.length) {
    return (
      <div className="swipe-root">
        <div className="swipe-back-bar" onClick={() => navigate(-1)}>
          <span className="swipe-back-btn">←</span>
        </div>
        <div style={{ color: '#fff', textAlign: 'center', marginTop: 200 }}>暂无视频</div>
      </div>
    );
  }

  const handleShowMaterials = () => {
    const matCoverMap = {};
    const allCovers = lessons.map((l) => l.coverImage).filter(Boolean);
    currentMats.forEach((m, idx) => {
      matCoverMap[m.id] = allCovers[idx % allCovers.length];
    });
    const body = (
      <div>
        <div className="equip-modal-list">
          {currentMats.map((m) => (
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
          <button className="btn btn-primary" style={{ flex: 1, padding: '12px', borderRadius: 12, fontWeight: 600 }} onClick={() => { closePopup(); navigate(`/apply/${currentLesson.id}`); }}>
            申请免费试用
          </button>
          <button className="btn btn-outline" style={{ flex: 1, padding: '12px', borderRadius: 12, fontWeight: 600, borderWidth: 2 }} onClick={() => { closePopup(); navigate(`/purchase/${currentLesson.id}`); }}>
            导出采购意向单
          </button>
        </div>
      </div>
    );
    openPopup(`实验器材清单 · ${currentLesson.title}`, body);
  };

  const handleShare = () => {
    showToast('已复制分享链接');
  };

  const handleToggleFav = () => {
    toggleFavorite(currentLesson.id);
    showToast(isFav ? '已取消收藏' : '已加入收藏');
  };

  const handleShowFullTalk = () => {
    const body = (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{currentLesson.title}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>主讲：{currentLesson.teacher} · {currentLesson.school}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>时长约 {currentLesson.fullDuration}</div>
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
        <p style={{ marginBottom: 10 }}>《{currentLesson.title}》完整教案</p>
        <div style={{ background: '#F3F4F6', padding: 10, borderRadius: 6, wordBreak: 'break-all', fontSize: 13, marginBottom: 12 }}>
          https://example.com/plans/{currentLesson.id}
        </div>
        <button className="btn btn-primary btn-block" onClick={() => {
          navigator.clipboard?.writeText(`https://example.com/plans/${currentLesson.id}`);
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
    <div className="swipe-root">
      <div className="swipe-back-bar" onClick={() => navigate(-1)}>
        <span className="swipe-back-btn">←</span>
        <span className="swipe-back-label">推荐研习</span>
      </div>

      <div className="swipe-feed" ref={feedRef}>
        {sortedLessons.map((lesson, idx) => {
          const mats = getMaterialsByLessonId(lesson.id);
          const isCurrent = idx === activeIdx;
          return (
            <div
              key={lesson.id}
              className="swipe-item"
              style={{ backgroundImage: lesson.coverlongImage ? `url(${lesson.coverlongImage})` : lesson.coverImage ? `url(${lesson.coverImage})` : undefined, backgroundColor: !lesson.coverlongImage && !lesson.coverImage ? '#1a1a2e' : undefined }}
            >
              <div className="swipe-item-bg" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img src={lesson.coverlongImage || lesson.coverImage} alt="" style={{ display: 'none' }} />
              </div>

              <div className="swipe-play-hint">
                <div className="swipe-play-circle">
                  <IconPlay size={20} />
                </div>
              </div>

              <div className="swipe-mask" />

              <div className="swipe-sidebar">
                <div className={`swipe-side-btn${isFav ? ' liked' : ''}`} onClick={handleToggleFav}>
                  <div className="swipe-side-icon">
                    <IconHeart size={28} />
                  </div>
                  <span className="swipe-side-num">{formatHeat(lesson.heat)}</span>
                </div>

                <div className="swipe-side-btn" onClick={() => showToast('打开评论区')}>
                  <div className="swipe-side-icon">
                    <IconComment size={28} />
                  </div>
                  <span className="swipe-side-num">讨论</span>
                </div>

                <div className="swipe-side-btn" onClick={openSheet}>
                  <div className="swipe-side-icon">
                    <IconDoc size={28} />
                  </div>
                  <span className="swipe-side-num">教案</span>
                </div>

                <div className="swipe-side-btn" onClick={handleShowFullTalk}>
                  <div className="swipe-side-icon" style={{ transform: 'none' }}>
                    <IconPlay size={28} />
                  </div>
                  <span className="swipe-side-num">完整版</span>
                </div>

                <div className="swipe-side-btn" onClick={handleShare}>
                  <div className="swipe-side-icon">
                    <IconShare size={26} />
                  </div>
                  <span className="swipe-side-num">分享</span>
                </div>
              </div>

              <div className="swipe-bottom-info">
                <div className="swipe-author">
                  @{lesson.teacher} | {lesson.school}
                </div>
                <div className="swipe-title">{lesson.title}</div>
                <div className="swipe-tags-row">
                  {lesson.grade && <span className="swipe-tag">{lesson.grade}</span>}
                  {lesson.tags && lesson.tags.slice(0, 3).map((t, i) => (
                    <span key={i} className="swipe-tag">{t}</span>
                  ))}
                </div>
                <div className="swipe-expand" onClick={openSheet}>
                  查看课例详情与资料 📝
                </div>
              </div>

              <div className="swipe-material-bar" onClick={handleShowMaterials}>
                <div className="swipe-mat-imgs">
                  {(lesson.coverImage ? [lesson.coverImage, lesson.coverImage, lesson.coverImage] : allCovers).slice(0, 3).map((src, i) => (
                    <img key={i} src={src} alt="" className="swipe-mat-img" style={{ zIndex: 3 - i }} />
                  ))}
                </div>
                <div className="swipe-mat-text">
                  <div className="swipe-mat-title">本课研习配套器材包</div>
                  <div className="swipe-mat-sub">共 {mats.length} 件器材</div>
                </div>
                <div className="swipe-mat-btn">
                  <IconList size={14} />
                  查看清单
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`swipe-sheet-mask${sheetVisible ? ' show' : ''}`} onClick={closeSheet} />
      <div className={`swipe-sheet${sheetVisible ? ' show' : ''}`}>
        <div className="swipe-sheet-header">
          <span className="swipe-sheet-header-title">课例详情与资源</span>
          <span className="swipe-sheet-close" onClick={closeSheet}>×</span>
        </div>
        <div className="swipe-sheet-body">
          <div className="swipe-sheet-card">
            <div className="swipe-sheet-card-title">课例简介</div>
            <p className="swipe-sheet-desc">{currentLesson.desc}</p>
            <div className="swipe-sheet-heat">
              <IconFire size={16} />
              <span>{currentLesson.heat.toLocaleString()} 老师正在研习</span>
            </div>
            <div className="swipe-sheet-grid">
              <div><span className="swipe-sheet-grid-label">适用年级：</span>{currentLesson.grade}</div>
              <div><span className="swipe-sheet-grid-label">实验类型：</span>创新演示实验</div>
            </div>
            <div className="swipe-sheet-kwtags">
              {currentLesson.tags && currentLesson.tags.slice(0, 4).map((t, i) => (
                <span key={i} className="swipe-sheet-kwtag">{t}</span>
              ))}
            </div>
          </div>

          <div className="swipe-sheet-card">
            <div className="swipe-sheet-card-title">实验亮点</div>
            <div className="swipe-sheet-highlight"><span className="swipe-sheet-check">✓</span> 取材方便，使用日常生活常见材料</div>
            <div className="swipe-sheet-highlight"><span className="swipe-sheet-check">✓</span> 现象明显，学生能直观观察物理过程</div>
            <div className="swipe-sheet-highlight"><span className="swipe-sheet-check">✓</span> 操作简单，适合课堂分组实验</div>
          </div>

          <div className="swipe-sheet-card" style={{ background: 'transparent', boxShadow: 'none', padding: '0 4px' }}>
            <div className="swipe-sheet-card-title">完整教学资源</div>
            <button className="swipe-sheet-btn-primary" onClick={handleShowFullTalk}>
              <IconPlay size={18} />
              查看完整说课
            </button>
            <div className="swipe-sheet-btn-hint">观看 {currentLesson.fullDuration} 完整比赛录像</div>
            <button className="swipe-sheet-btn-outline" onClick={handleShowPlan}>
              <IconCopy size={18} />
              复制教案下载链接
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
