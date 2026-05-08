//课例卡片
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function LessonCard({ lesson }) {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useStore();
  const isFav = favorites.has(lesson.id);

  return (
    <div className="lesson-card" onClick={() => navigate(`/video/${lesson.id}`)}>
       <div className="card-cover" style={{ background: lesson.cover, position: 'relative', overflow: 'hidden' }}>
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
              zIndex: 0,
            }}
          />
        )}
        <div style={{
          width: 40, height: 40, background: 'rgba(0,0,0,0.5)',
          borderRadius: '50%', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'white', fontSize: 18
        }}>▶</div>
      </div>
      <div className="card-body">
        <div className="card-title">{lesson.title}</div>
        <div style={{ margin: '4px 0' }}>
          {lesson.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="card-meta">
          <span>🔥 {lesson.heat.toLocaleString()}</span>
          <span>关联 {lesson.materials.length} 件器材</span>
        </div>
      </div>
    </div>
  );
}