import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { materialList } from '../data/mockData';

const IconArrowLeft = ({ size = 18 }) => (
  <svg width={size} height={size * (448 / 512)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
  </svg>
);

const IconFlask = ({ size = 16 }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 0L160 0l0 174.9c0 10.5-3.1 20.8-8.9 29.8L3.8 378.8C-2.4 390.4 0 404.7 10 414.2C20.1 423.6 34.7 432 50.9 432l346.2 0c16.2 0 30.7-8.4 40.9-17.8c10.1-9.5 12.5-23.9 6.3-35.5L296.9 204.7c-5.8-9-8.9-19.3-8.9-29.8L288 0zM144 32l160 0 0 32-160 0 0-32zm0 64l160 0 0 78.9c0 17 5 33.6 14.2 48L420.6 394.7c2.4 3 0 5.3-4.1 5.3L31.4 400c-4.1 0-6.5-2.3-4.1-5.3L129.8 222.9c9.3-14.4 14.2-31 14.2-48L144 96z"/>
  </svg>
);

const IconHistory = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
  </svg>
);

const IconHeadset = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 0c22.1 0 40-17.9 40-40l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 48.6-39.4 88-88.1 88l-88 0c-13.3 0-24-10.7-24-24l0-40c0-48.6-39.4-88-88.1-88l-88 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l88 0zm144 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/>
  </svg>
);

const getStatusClass = (status) => {
  if (status.includes('等待')) return 'pending';
  if (status.includes('电话')) return 'processing';
  if (status.includes('发货')) return 'shipped';
  return 'completed';
};

const getStatusText = (status) => {
  if (status.includes('等待')) return '等待处理';
  if (status.includes('电话')) return '处理中';
  if (status.includes('发货')) return '样品已发货';
  return '已完成';
};

export default function RecordDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applyRecords, showToast } = useStore();
  const record = applyRecords.find(r => r.id === Number(id));

  if (!record) {
    return (
      <div className="page" style={{ padding: 24, textAlign: 'center', background: '#F5F6FA' }}>
        <p style={{ color: '#9CA3AF', fontSize: 14 }}>记录未找到</p>
        <button
          onClick={() => navigate(-1)}
          style={{ marginTop: 12, color: 'var(--primary)', fontSize: 14, border: 'none', background: 'none', cursor: 'pointer' }}
        >
          ← 返回
        </button>
      </div>
    );
  }

  const materialIds = record.materials || [];
  const items = materialIds.map(mid => materialList.find(m => m.name === mid)).filter(Boolean);
  const totalCount = items.length;
  const statusCls = getStatusClass(record.status);
  const statusText = getStatusText(record.status);
  const time = record.time || '—';

  const progressSteps = [
    { title: '申请已提交', time: record.time || '—', done: true, desc: '您的免费试用申请已成功提交，工作人员会在1-2个工作日内联系您。' },
    { title: '工作人员已受理', time: record.handleTime || '—', done: !!record.handleTime, desc: '您的申请已通过初步审核，我们正在准备相应器材，预计明天安排发出。' },
    { title: '器材已发货', time: record.shipTime || '待完成', done: !!record.shipTime },
    { title: '完成处理', time: record.completeTime || '待完成', done: !!record.completeTime },
  ];

  const handleContact = () => {
    showToast('正在转接客服，请稍候...');
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  };

  const sectionTitleStyle = {
    fontSize: 16,
    fontWeight: 600,
    color: '#1F2937',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  return (
    <div className="page" style={{ padding: 16, background: '#F5F6FA', overflowY: 'auto' }}>
      {/* 顶部返回 + 标题 */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <span
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            cursor: 'pointer',
            marginRight: 12,
            color: '#4B5563',
          }}
        >
          <IconArrowLeft size={16} />
        </span>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#1F2937' }}>申请详情</h1>
      </div>

      {/* 卡片1 — 申请信息 */}
      <div style={cardStyle}>
        <div style={{ borderBottom: '1px solid #F3F4F6', paddingBottom: 12, marginBottom: 12 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1F2937', marginBottom: 8 }}>
            {record.lessonTitle}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#6B7280' }}>申请时间：{time}</span>
            <span className={`status-badge ${statusCls}`}>{statusText}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#6B7280' }}>申请人姓名</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{record.teacher || '张老师'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#6B7280' }}>所在学校</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{record.school || '北京第三十五中学'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#6B7280' }}>联系电话</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{record.phone || '138****1234'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#6B7280' }}>所在地区</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{record.region || '北京市海淀区'}</span>
          </div>
          {record.remark && (
            <div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 14, color: '#6B7280' }}>备注</span>
              </div>
              <p style={{
                fontSize: 14,
                color: '#1F2937',
                background: '#F9FAFB',
                padding: 12,
                borderRadius: 8,
                margin: 0,
              }}>
                {record.remark}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 卡片2 — 申请器材清单 */}
      <div style={cardStyle}>
        <h3 style={sectionTitleStyle}>
          <span style={{ color: 'var(--primary)', display: 'flex' }}>
            <IconFlask size={16} />
          </span>
          申请器材清单
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                background: '#F3F4F6',
                borderRadius: 8,
                overflow: 'hidden',
                marginRight: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 20, fontWeight: 600, color: '#9CA3AF' }}>
                  {item.name.charAt(0)}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: '#1F2937', margin: '0 0 4px 0' }}>
                  {item.name}
                </h4>
                <p style={{ fontSize: 12, color: '#9CA3AF', margin: 0 }}>
                  {item.usage || item.spec}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 14, color: '#4B5563' }}>×{item.count}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #F3F4F6', marginTop: 12, paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#4B5563' }}>总计器材</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{totalCount}件</span>
        </div>
      </div>

      {/* 卡片3 — 处理进度跟进 */}
      <div style={cardStyle}>
        <h3 style={{ ...sectionTitleStyle, marginBottom: 16 }}>
          <span style={{ color: 'var(--primary)', display: 'flex' }}>
            <IconHistory size={16} />
          </span>
          处理进度跟进
        </h3>
        <div style={{ position: 'relative', paddingLeft: 20 }}>
          {/* 竖线 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 8,
            width: 2,
            height: '100%',
            background: '#E5E7EB',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {progressSteps.map((step, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: -20,
                  top: 4,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: step.done ? '#3B82F6' : '#D1D5DB',
                  border: '2px solid #fff',
                }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: step.done ? '#1F2937' : '#9CA3AF',
                    }}>
                      {step.title}
                    </span>
                    <span style={{
                      fontSize: 12,
                      color: '#9CA3AF',
                    }}>
                      {step.time}
                    </span>
                  </div>
                  {step.desc && (
                    <p style={{
                      fontSize: 12,
                      color: '#6B7280',
                      background: '#EFF6FF',
                      padding: 8,
                      borderRadius: 8,
                      margin: 0,
                      marginTop: 4,
                    }}>
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 卡片4 — 联系客服 */}
      <div style={{ ...cardStyle, marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1F2937', marginBottom: 12 }}>
          有问题？
        </h3>
        <button
          onClick={handleContact}
          style={{
            width: '100%',
            padding: '12px 0',
            border: '1px solid var(--primary)',
            color: 'var(--primary)',
            background: '#fff',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <IconHeadset size={16} />
          联系客服咨询
        </button>
      </div>
    </div>
  );
}
