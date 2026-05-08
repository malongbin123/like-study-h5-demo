import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const IconFlask = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 0L160 0l0 174.9c0 10.5-3.1 20.8-8.9 29.8L3.8 378.8C-2.4 390.4 0 404.7 10 414.2C20.1 423.6 34.7 432 50.9 432l346.2 0c16.2 0 30.7-8.4 40.9-17.8c10.1-9.5 12.5-23.9 6.3-35.5L296.9 204.7c-5.8-9-8.9-19.3-8.9-29.8L288 0zM144 32l160 0 0 32-160 0 0-32zm0 64l160 0 0 78.9c0 17 5 33.6 14.2 48L420.6 394.7c2.4 3 0 5.3-4.1 5.3L31.4 400c-4.1 0-6.5-2.3-4.1-5.3L129.8 222.9c9.3-14.4 14.2-31 14.2-48L144 96z"/>
  </svg>
);

const IconCalendar = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
  </svg>
);

const IconChevronRight = ({ size = 12 }) => (
  <svg width={size} height={size * (512 / 320)} viewBox="0 0 320 512" fill="currentColor">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
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
  if (status.includes('电话')) return '已电话联系';
  if (status.includes('发货')) return '样品已发货';
  return '已完成';
};

export default function RecordsPage() {
  const navigate = useNavigate();
  const { applyRecords } = useStore();

  return (
    <div className="page" style={{ padding: '16px', background: '#F5F6FA', overflowY: 'auto' }}>
      <div style={{ marginBottom: 16 }}>
        <span className="back-btn" onClick={() => navigate(-1)}>←</span>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 4 }}>我的申请记录</h1>
        <p style={{ fontSize: 14, color: '#6B7280' }}>查看您提交的所有免费试用申请</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {applyRecords.length > 0 ? (
          applyRecords.map((record) => {
            const statusCls = getStatusClass(record.status);
            const statusText = getStatusText(record.status);
            const materialCount = record.materials ? record.materials.length : 0;
            const time = record.time || '—';
            return (
              <div
                key={record.id}
                className="record-card-v2"
                onClick={() => navigate(`/record/${record.id}`)}
              >
                <div className="rc-header">
                  <h3 className="rc-title">{record.lessonTitle}</h3>
                  <span className={`status-badge ${statusCls}`}>{statusText}</span>
                </div>
                <div className="rc-row">
                  <span className="rc-label">
                    <span className="rc-icon"><IconFlask size={14} /></span>
                    配套器材
                  </span>
                  <span className="rc-value">{materialCount} 件</span>
                </div>
                <div className="rc-row">
                  <span className="rc-label">
                    <span className="rc-icon"><IconCalendar size={14} /></span>
                    提交时间
                  </span>
                  <span className="rc-value">{time}</span>
                </div>
                <div className="rc-detail">
                  查看详情
                  <IconChevronRight size={11} />
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: 60, color: '#9CA3AF', fontSize: 14 }}>
            暂无申请记录
          </div>
        )}
      </div>
    </div>
  );
}
