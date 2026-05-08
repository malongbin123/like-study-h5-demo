//轻提示
import { useStore } from '../store/useStore';

export default function Toast() {
  const toastMsg = useStore((state) => state.toastMsg);
  return (
    <div id="toast" className={toastMsg ? 'show' : ''}>
      {toastMsg}
    </div>
  );
}