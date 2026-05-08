import { Link, useLocation } from 'react-router-dom';

const IconHome = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 * 512 / 576 }} viewBox="0 0 576 512" fill="currentColor">
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
  </svg>
);

const IconCompass = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 }} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM311.6 330.6L181.4 330.7L181.3 330.6L105.6 105.7l224.7 74.9l74.9 224.7L311.7 330.5L311.6 330.6zM256 280c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24S269.3 280 256 280z"/>
  </svg>
);

const IconFlask = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 * 512 / 448 }} viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32v132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 390.6C3.6 404.3 0 419.4 0 434.7 0 477.4 34.6 512 77.3 512h293.3c42.7 0 77.3-34.6 77.3-77.3 0-15.3-3.6-30.4-10.3-44.1L329.5 230.3c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 160 128 288zM118.4 384l56-96V64h99.2v224l56 96H118.4z"/>
  </svg>
);

const IconUser = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 * 512 / 448 }} viewBox="0 0 448 512" fill="currentColor">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);

const tabs = [
  { path: '/discover', label: '首页', Icon: IconHome },
  { path: '/research', label: '研习', Icon: IconCompass },
  { path: '/equipment', label: '器材', Icon: IconFlask },
  { path: '/profile', label: '我的', Icon: IconUser },
];

export default function TabBar() {
  const location = useLocation();
  return (
    <div id="tabbar">
      {tabs.map(tab => {
        const active = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`tab-item ${active ? 'active' : ''}`}
          >
            <span className="tab-icon">
              <tab.Icon active={active} />
            </span>
            <span className="tab-text">{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
