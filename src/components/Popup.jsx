//半屏弹窗
// Popup.jsx
import { useStore } from '../store/useStore';

export default function Popup() {
  const { popupVisible, popupTitle, popupBody, closePopup } = useStore();

  if (!popupVisible) return null;

  return (
    <div id="popup-container" className="popup-show">
      <div className="popup-mask" onClick={closePopup}></div>
      <div
        className="popup-content"
        style={{
          scrollbarWidth: 'none',          /* Firefox */
          msOverflowStyle: 'none',         /* IE/Edge */
          WebkitOverflowScrolling: 'touch', /* iOS 顺滑 */
        }}
      >
        <div className="popup-header">
          <span className="popup-title">{popupTitle}</span>
          <span className="popup-close" onClick={closePopup}>×</span>
        </div>
        <div className="popup-body">{popupBody}</div>
      </div>
    </div>
  );
}