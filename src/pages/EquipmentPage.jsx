import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

import coverSrc from '../pic/daqiyaqiang.png';
import thumb1 from '../pic/daqiyaqiang.png';
import thumb2 from '../pic/daqiyaqiang1.png';
import thumb3 from '../pic/huadongbianzuqi.png';
import thumb4 from '../pic/tutoujing.png';
import thumb5 from '../pic/tutoujing1.png';

const eqThumbs = [thumb1, thumb2, thumb3, thumb4, thumb5];

// ===== 新增：参考 page 的图标 =====
const IconEye2 = () => (
  <svg width="14" height="14" viewBox="0 0 576 512" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-71.4-88.6-71.1c-5.6 .1-9.1 6.1-7.1 11.6c2.1 6.3 3.1 13.1 3.1 20z"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
  </svg>
);

const IconChevronRight = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size * 512 / 320 }} viewBox="0 0 320 512" fill="currentColor">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>
);

// 其他图标及初始数据保持不变
// ...

const TAGS_CONFIG = [
  { bg: '#DBEAFE', color: '#1D4ED8' },
  { bg: '#E0E7FF', color: '#4338CA' },
  { bg: '#D1FAE5', color: '#047857' },
  { bg: '#FEF3C7', color: '#B45309' },
  { bg: '#F3E8FF', color: '#7E22CE' },
];

export default function EquipmentPage() {
  const navigate = useNavigate();
  const {
    lessons,
    getMaterialsByLessonId,
    showToast,
    openPopup,
    closePopup,
  } = useStore();

  const lessonId = 1;
  const lesson = lessons.find(l => l.id === lessonId);
  const mats = lesson ? getMaterialsByLessonId(lessonId) : [];

  const handleApply = () => {
    navigate(`/apply/${lessonId}`);
  };

  const handlePurchase = () => {
    navigate(`/purchase/${lessonId}`);
  };

  const handleShowMaterials = () => {
    const body = (
      <div>
        <div className="equip-modal-list">
          {mats.map((m, i) => (
            <div key={m.id} className="equip-modal-item">
              <img
                src={eqThumbs[i % eqThumbs.length]}
                alt={m.name}
                className="equip-modal-img"
              />
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
          <button
            className="btn btn-primary"
            style={{ flex: 1, padding: '12px', borderRadius: 12, fontWeight: 600 }}
            onClick={() => {
              closePopup();
              handleApply();
            }}
          >
            申请免费试用
          </button>
          <button
            className="btn btn-outline"
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: 12,
              fontWeight: 600,
              borderWidth: 2,
            }}
            onClick={() => {
              closePopup();
              handlePurchase();
            }}
          >
            导出采购意向单
          </button>
        </div>
      </div>
    );
    openPopup('本课配套实验器材', body);
  };

  return (
    <div
      className="page"
      style={{
        background: '#F9FAFB',
        position: 'relative',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <style>{`.equip-scroll::-webkit-scrollbar{display:none}.equip-page::-webkit-scrollbar{display:none}`}</style>

      <div style={{ padding: 16 }}>
        {/* ========== Card 1: 视频封面 + 标签（未动） ========== */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}
        >
          {/* 封面图片区 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              borderRadius: 8,
              overflow: 'hidden',
              marginBottom: 16,
              background: '#E5E7EB',
            }}
          >
            <img
              src={coverSrc}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%, transparent)',
              }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 12 }}>
              <h2
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {lesson?.title || '—'}
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 14,
                  margin: '2px 0 0 0',
                }}
              >
                主讲老师：李建国
              </p>
            </div>
          </div>

          {/* 标签区 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span
              style={{
                background: '#DBEAFE',
                color: '#1D4ED8',
                fontSize: 12,
                fontWeight: 500,
                padding: '4px 8px',
                borderRadius: 9999,
              }}
            >
              {lesson?.grade || '—'}
            </span>
            {(lesson?.tags || []).map((t, i) => {
              const cfg = TAGS_CONFIG[i % TAGS_CONFIG.length];
              return (
                <span
                  key={i}
                  style={{
                    background: cfg.bg,
                    color: cfg.color,
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '4px 8px',
                    borderRadius: 9999,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>

        {/* ========== Card 2: 器材栏（已对齐 reference） ========== */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              minWidth: 0,
              flex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: 72,
                height: 42,
                flexShrink: 0,
              }}
            >
              {[thumb1, thumb2, thumb3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    border: '1.5px solid #fff',
                    objectFit: 'cover',
                    position: 'absolute',
                    left: i * 20,
                    zIndex: 3 - i,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                  }}
                />
              ))}
            </div>
            <div style={{ minWidth: 0 }}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#1F2937',
                  margin: 0,
                }}
              >
                本课研习配套器材
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  margin: '2px 0 0 0',
                }}
              >
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
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            查看清单
            <IconChevronRight size={12} />
          </button>
        </div>

        {/* ========== Card 3: 课例简介（已按 reference 重构） ========== */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}
        >
          {/* 标题：移除竖杠，与 reference 一致 */}
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#1F2937',
              margin: '0 0 8px 0',
            }}
          >
            课例简介
          </h3>
          <p
            style={{
              fontSize: 14,
              color: '#4B5563',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {lesson?.title || '—'}是{lesson?.grade || '—'}
            {lesson?.tags?.[0] ? `「${lesson.tags[0]}」` : ''}
            领域的经典实验课程。通过巧妙利用生活中的矿泉水瓶作为实验器材，直观地展示了大气压强的存在、液体压强与深度的关系等核心物理概念，兼顾了实验的趣味性与科学性。本课配套完整的器材清单与详细的实验操作指导，方便任课老师快速开展实验教学。
          </p>
          {/* 底部信息：左右分布，图标+文字 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 12,
              fontSize: 14,
              color: '#6B7280',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <IconEye2 />
              2.3w 老师正在研习
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <IconCalendar />
              2024更新
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}