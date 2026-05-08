 // 路由 + Toast + Popup 全局容器
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TabBar from './components/TabBar';
import Toast from './components/Toast';
import Popup from './components/Popup';
import DiscoverPage from './pages/DiscoverPage';
import ResearchPage from './pages/ResearchPage';
import ProfilePage from './pages/ProfilePage';
import VideoPage from './pages/VideoPage';
import ApplyPage from './pages/ApplyPage';
import PurchasePage from './pages/PurchasePage';
import EquipmentPage from './pages/EquipmentPage';
import FavoritesPage from './pages/FavoritesPage';
import RecordsPage from './pages/RecordsPage';
import RecordDetailPage from './pages/RecordDetailPage';
import SwipeVideoPage from './pages/SwipeVideoPage';
import { useEffect } from 'react';   // 确保已导入
// 需要显示底部导航的路径
const tabPaths = ['/discover', '/research', '/equipment', '/profile'];

function App() {
  const location = useLocation();
  const showTab = tabPaths.includes(location.pathname);
// 设置移动端真实视口高度
   useEffect(() => {
    const setVH = () => {
      const vh = window.visualViewport 
        ? window.visualViewport.height * 0.01 
        : window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    window.visualViewport?.addEventListener('resize', setVH);
    window.visualViewport?.addEventListener('scroll', setVH);
    return () => {
      window.removeEventListener('resize', setVH);
      window.visualViewport?.removeEventListener('resize', setVH);
      window.visualViewport?.removeEventListener('scroll', setVH);
    };
  }, []);
  return (
    <div className="phone-frame">
      <div id="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/discover" />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
          <Route path="/purchase/:id" element={<PurchasePage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/purchases" element={<PurchasePage />} />
          <Route path="/record/:id" element={<RecordDetailPage />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/swipe/:id" element={<SwipeVideoPage />} />
      </Routes>
      {showTab && <TabBar />}
      <Toast />
      <Popup />
    </div>
  );
}

export default App;
