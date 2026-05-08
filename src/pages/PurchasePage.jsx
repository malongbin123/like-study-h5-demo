import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconFileInvoice = ({ size = 20 }) => (
  <svg width={size} height={size * (576 / 384)} viewBox="0 0 384 512" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 256h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm128 0h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0-64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0-64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);

const IconListUl = ({ size = 14 }) => (
  <svg width={size} height={size * (512 / 512)} viewBox="0 0 512 512" fill="currentColor">
    <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
  </svg>
);

const IconInfoCircle = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
  </svg>
);

const IconCheck = ({ size = 20 }) => (
  <svg width={size} height={size * (448 / 512)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
  </svg>
);

const IconFileExcel = ({ size = 16 }) => (
  <svg width={size} height={size * (512 / 384)} viewBox="0 0 384 512" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"/>
  </svg>
);

const IconDownload = ({ size = 16 }) => (
  <svg width={size} height={size * (512 / 512)} viewBox="0 0 512 512" fill="currentColor">
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H64V384h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"/>
  </svg>
);

export default function PurchasePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lessons, getMaterialsByLessonId, addPurchaseOrder, showToast } = useStore();
  const [generated, setGenerated] = useState(false);

  const lessonId = id ? parseInt(id) : 1;
  const lesson = lessons.find(l => l.id === lessonId);
  const mats = lesson ? getMaterialsByLessonId(lessonId) : [];

  const handleGenerate = () => {
    if (!lesson) return;
    setGenerated(true);
    addPurchaseOrder({
      id: Date.now(),
      lessonTitle: lesson.title,
      school: '南京金陵中学',
      time: new Date().toLocaleDateString(),
      status: '已导出',
      materials: mats.map(m => m.name),
    });
    showToast('采购意向单已生成');
  };

  const handleDownload = () => {
    showToast('采购意向单已开始下载，您可以保存到手机或转发到微信文件传输助手');
  };

  return (
    <div className="purchase-root">
      <div className="purchase-scroll" style={{ height: '100%', padding: '16px 16px 80px', background: '#F9FAFB' }}>
        <div style={{ marginBottom: 12 }}>
          <span className="back-btn" onClick={() => navigate(-1)}>←</span>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1F2937', display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
            <span style={{ color: 'var(--primary)' }}>
              <IconFileInvoice size={24} />
            </span>
            采购意向单生成
          </h1>
          <p style={{ fontSize: 14, color: '#6B7280', margin: '4px 0 0 0' }}>确认清单信息并导出采购文件</p>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 20, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ borderBottom: '1px solid #F3F4F6', paddingBottom: 12, marginBottom: 12 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1F2937', margin: 0 }}>
              {lesson?.title || '—'}
            </h2>
            <p style={{ fontSize: 14, color: '#6B7280', margin: '4px 0 0 0' }}>
              {lesson?.grade} · {lesson?.tags?.slice(0, 3).join(' · ')}
            </p>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, color: '#374151', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: 'var(--primary)' }}>
              <IconListUl size={14} />
            </span>
            采购清单摘要
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {mats.map((m) => (
              <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, borderRadius: 8, background: '#F9FAFB' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: '#E5E7EB',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#6B7280',
                  flexShrink: 0,
                }}>
                  {m.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 500, color: '#1F2937', fontSize: 14, margin: '0 0 2px 0' }}>
                    {m.name}
                  </p>
                  <p style={{ fontSize: 12, color: '#6B7280', margin: 0 }}>
                    {m.usage}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontSize: 14, color: '#374151', margin: 0 }}>
                    ×{m.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px dashed #D1D5DB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>总计</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary)' }}>{mats.length} 件器材</span>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ background: '#DBEAFE', padding: 8, borderRadius: '50%', color: 'var(--primary)', display: 'flex', flexShrink: 0 }}>
              <IconInfoCircle size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 500, color: '#1F2937', marginBottom: 4, fontSize: 14 }}>关于采购意向单</h3>
              <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                将生成标准Excel格式采购意向单，包含器材名称、规格参数、数量和备注信息，可直接转发至微信文件传输助手，或提交给学校总务处进行采购审批。
              </p>
            </div>
          </div>
        </div>

        {generated && (
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ background: '#D1FAE5', padding: 12, borderRadius: '50%', color: '#059669', display: 'flex' }}>
                <IconCheck size={20} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: '#065F46', fontSize: 18, margin: '0 0 4px 0' }}>采购意向单已生成</h3>
                <p style={{ fontSize: 14, color: '#047857', margin: 0 }}>文件已准备好，可点击下面按钮下载或转发至微信</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="purchase-floating-bar">
        {!generated ? (
          <button className="purchase-floating-btn" onClick={handleGenerate}>
            <IconFileExcel size={16} />
            生成采购意向单
          </button>
        ) : (
          <button className="purchase-floating-btn purchase-floating-btn-green" onClick={handleDownload}>
            <IconDownload size={16} />
            下载转发文件
          </button>
        )}
      </div>
    </div>
  );
}
