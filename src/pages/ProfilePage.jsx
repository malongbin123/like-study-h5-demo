import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import teacherAvatar from '../pic/teacher.png';

const IconBookmark = ({ size = 18 }) => (
  <svg width={size} height={size * (512 / 384)} viewBox="0 0 384 512" fill="currentColor">
    <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
  </svg>
);

const IconFileDownload = ({ size = 18 }) => (
  <svg width={size} height={size * (512 / 384)} viewBox="0 0 384 512" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
  </svg>
);

const IconSchool = ({ size = 18 }) => (
  <svg width={size} height={size * (512 / 640)} viewBox="0 0 640 512" fill="currentColor">
    <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/>
  </svg>
);

const IconPhone = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
  </svg>
);

const IconCommentDots = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
  </svg>
);

const IconCircleInfo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
  </svg>
);

const IconEllipsis = ({ size = 18 }) => (
  <svg width={size} height={size * (512 / 448)} viewBox="0 0 448 512" fill="currentColor">
    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
  </svg>
);

const IconChevronRight = ({ size = 14 }) => (
  <svg width={size} height={size * (512 / 320)} viewBox="0 0 320 512" fill="currentColor">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>
);

const IconHistory = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
  </svg>
);

const getStatusStyle = (status) => {
  if (status.includes('等待')) return { bg: '#FEF9C3', color: '#A16207' };
  if (status.includes('电话')) return { bg: '#DBEAFE', color: '#1D4ED8' };
  if (status.includes('发货')) return { bg: '#DCFCE7', color: '#15803D' };
  return { bg: '#F3F4F6', color: '#374151' };
};

const getStatusText = (status) => {
  if (status.includes('等待')) return '等待处理';
  if (status.includes('电话')) return '已电话联系';
  if (status.includes('发货')) return '样品已发货';
  return status;
};

export default function ProfilePage() {
  const { favorites, applyRecords, purchaseOrders, showToast } = useStore();
  const navigate = useNavigate();

  const favCount = favorites?.size || 0;
  const applyCount = applyRecords?.length || 0;
  const purchaseCount = purchaseOrders?.length || 0;

  const researchItems = [
    { icon: IconBookmark, label: '我的收藏库', route: '/favorites' },
    { icon: IconFileDownload, label: '已复制教案链接', route: '/' },
    { icon: IconHistory, label: '最近观看', route: null },
  ];

  const accountItems = [
    { icon: IconSchool, label: '学校信息', route: '/bind-school' },
    { icon: IconPhone, label: '联系方式', route: '/contact' },
    { icon: IconCommentDots, label: '意见反馈', route: '/feedback' },
    { icon: IconCircleInfo, label: '关于理课研习社', route: '/about' },
  ];

  const handleForwardWechat = () => {
    showToast('已生成微信分享卡片');
  };

  const handleReDownload = () => {
    showToast('正在重新生成下载链接');
  };

  return (
    <div className="profile-page-root">
      <div className="profile-page-inner">
        {/* 个人信息卡片 */}
        <div className="profile-card">
          <div className="profile-card-top">
            <img src={teacherAvatar} alt="头像" className="profile-avatar" />
            <div className="profile-card-info">
              <div className="profile-name-row">
                <span className="profile-name">张老师</span>
                <button className="profile-more-btn">
                  <IconEllipsis size={18} />
                </button>
              </div>
              <div className="profile-school">北京市第三十五中学</div>
              <span className="profile-tag">初中物理教师</span>
            </div>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="profile-stats-grid">
          <div className="profile-stat-item">
            <div className="profile-stat-num">{favCount}</div>
            <div className="profile-stat-label">我的收藏</div>
          </div>
          <div className="profile-stat-item">
            <div className="profile-stat-num">{applyCount}</div>
            <div className="profile-stat-label">试用申请</div>
          </div>
          <div className="profile-stat-item">
            <div className="profile-stat-num">{purchaseCount}</div>
            <div className="profile-stat-label">采购单</div>
          </div>
          <div className="profile-stat-item">
            <div className="profile-stat-num">126</div>
            <div className="profile-stat-label">浏览历史</div>
          </div>
        </div>

        {/* 我的研习空间 */}
        <div className="profile-section">
          <h3 className="profile-section-title">我的研习空间</h3>
          <div className="profile-menu-card">
            {researchItems.map((item, idx) => (
              <div
                key={item.label}
                className={`profile-menu-row${idx === researchItems.length - 1 ? ' profile-menu-row-last' : ''}`}
                onClick={() => {
                  if (item.route) navigate(item.route);
                }}
              >
                <span className="profile-menu-icon">
                  <item.icon size={18} />
                </span>
                <span className="profile-menu-text">{item.label}</span>
                <span className="profile-menu-arrow">
                  <IconChevronRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 我的申请记录 */}
        <div className="profile-section">
          <h3 className="profile-section-title">我的申请记录</h3>
          <div className="profile-menu-card">
            {applyRecords.length > 0 ? (
              <>
                {applyRecords.map((record, idx) => {
                  const statusStyle = getStatusStyle(record.status);
                  const statusText = getStatusText(record.status);
                  return (
                    <div
                      key={record.id}
                      className="profile-record-item profile-record-item-divider"
                      onClick={() => navigate(`/record/${record.id}`)}
                    >
                      <div className="profile-record-header">
                        <span className="profile-record-title">{record.lessonTitle}</span>
                        <span className="profile-record-status" style={{ background: statusStyle.bg, color: statusStyle.color }}>
                          {statusText}
                        </span>
                      </div>
                      <div className="profile-record-meta">
                        <span>申请器材：{Array.isArray(record.materials) ? record.materials.length : 0}件</span>
                        <span>{record.time || '—'}</span>
                      </div>
                    </div>
                  );
                })}
                <div className="profile-view-all" onClick={() => navigate('/records')}>
                  查看全部申请 <span>›</span>
                </div>
              </>
            ) : (
              <div className="profile-empty">暂无申请记录</div>
            )}
          </div>
        </div>

        {/* 采购意向单 */}
        <div className="profile-section">
          <h3 className="profile-section-title">采购意向单</h3>
          <div className="profile-menu-card">
            {purchaseOrders.length > 0 ? (
              <>
                {purchaseOrders.map((order) => (
                  <div key={order.id} className="profile-purchase-item">
                    <div className="profile-purchase-header">
                      <span className="profile-purchase-title">{order.lessonTitle}</span>
                      <span className="profile-purchase-time">{order.time}</span>
                    </div>
                    <div className="profile-purchase-btns">
                      <button className="profile-purchase-btn profile-purchase-btn-primary" onClick={handleReDownload}>
                        重新下载
                      </button>
                      <button className="profile-purchase-btn profile-purchase-btn-green" onClick={handleForwardWechat}>
                        转发微信
                      </button>
                    </div>
                  </div>
                ))}
                <div className="profile-view-all" onClick={() => navigate('/purchases')}>
                  查看全部采购单 <span>›</span>
                </div>
              </>
            ) : (
              <div className="profile-empty">暂无采购意向单</div>
            )}
          </div>
        </div>

        {/* 账号设置 */}
        <div className="profile-section">
          <h3 className="profile-section-title">账号设置</h3>
          <div className="profile-menu-card">
            {accountItems.map((item, idx) => (
              <div
                key={item.label}
                className={`profile-menu-row${idx === accountItems.length - 1 ? ' profile-menu-row-last' : ''}`}
                onClick={() => navigate(item.route)}
              >
                <span className="profile-menu-icon">
                  <item.icon size={18} />
                </span>
                <span className="profile-menu-text">{item.label}</span>
                <span className="profile-menu-arrow">
                  <IconChevronRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 底部留白 */}
        <div className="profile-bottom-spacer" />
      </div>
    </div>
  );
}
