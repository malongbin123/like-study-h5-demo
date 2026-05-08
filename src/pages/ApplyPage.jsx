//申请表单页
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function ApplyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const {
    lessons, getMaterialsByLessonId, addApplyRecord, showToast
  } = useStore();

  const lesson = lessons.find((l) => l.id === lessonId);
  const mats = getMaterialsByLessonId(lessonId);
  const materialNames = mats.map(m => m.name);

  const [form, setForm] = useState({
    name: '',
    school: '',
    phone: '',
    region: '',
    remark: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.school || !form.phone || !form.region) {
      showToast('请填写必填信息');
      return;
    }

    addApplyRecord({
      id: Date.now(),
      lessonTitle: lesson.title,
      materials: materialNames,
      status: '等待处理',
      time: new Date().toLocaleString(),
      ...form,
      progress: [
        { text: '申请已提交', time: new Date().toLocaleString(), done: true }
      ],
    });
    setShowSuccess(true);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    navigate(-1);
  };

  return (
    <div className="page">
            <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', background: '#fff', position: 'sticky', top: 0, zIndex: 5, borderBottom: '1px solid var(--border)' }}>
        <span className="back-btn" style={{ fontSize: 20, cursor: 'pointer', marginRight: 10 }} onClick={() => navigate(-1)}>←</span>
        
      </div>
      <div style={{ padding: '16px' }}>
        {/* 标题 */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>
            申请免费试用
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            填写信息后，工作人员将在1-2个工作日内联系您
          </p>
        </div>

        {/* 表单 */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label-apply">
              姓名<span className="required-star">*</span>
            </label>
            <input
              type="text"
              className="form-input-apply"
              placeholder="请输入您的姓名"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label-apply">
              学校名称<span className="required-star">*</span>
            </label>
            <input
              type="text"
              className="form-input-apply"
              placeholder="请输入您所在学校名称"
              value={form.school}
              onChange={(e) => setForm({ ...form, school: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label-apply">
              联系电话<span className="required-star">*</span>
            </label>
            <input
              type="tel"
              className="form-input-apply"
              placeholder="请输入您的手机号码"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label-apply">
              所在地区<span className="required-star">*</span>
            </label>
            <div className="select-wrapper">
              <select
                className="form-input-apply"
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                required
              >
                <option value="">请选择所在地区</option>
                <option value="北京">北京</option>
                <option value="上海">上海</option>
                <option value="广东">广东</option>
                <option value="江苏">江苏</option>
                <option value="浙江">浙江</option>
                <option value="山东">山东</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label-apply">
              备注<span style={{ color: '#9CA3AF', fontWeight: 400 }}> (选填)</span>
            </label>
            <textarea
              className="form-input-apply"
              rows="3"
              placeholder="请填写您的其他需求或说明"
              value={form.remark}
              onChange={(e) => setForm({ ...form, remark: e.target.value })}
            />
          </div>

          {/* 申请信息卡 */}
          <div className="apply-info-card">
            <h3>申请信息</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 4 }}>
              <span style={{ color: 'var(--text-secondary)' }}>申请课例：</span>
              <span style={{ fontWeight: 500, color: 'var(--text)' }}>{lesson.title}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
              <span style={{ color: 'var(--text-secondary)' }}>器材数量：</span>
              <span style={{ fontWeight: 500, color: 'var(--text)' }}>{mats.length} 件</span>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <button type="submit" className="btn btn-primary btn-block" style={{ padding: '14px 0', fontSize: 16 }}>
              提交试用申请
            </button>
          </div>
        </form>
      </div>

      {/* 成功弹窗 */}
      {showSuccess && (
        <div className="success-modal-overlay" onClick={closeSuccess}>
          <div className="success-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <h3>申请提交成功</h3>
            <p>
              您的免费试用申请已提交成功，
              <br />
              工作人员将在1-2个工作日内联系您
            </p>
            <button className="btn btn-primary btn-block" onClick={closeSuccess}>
              知道了
            </button>
          </div>
        </div>
      )}
    </div>
  );
}