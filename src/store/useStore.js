//zustand状态管理
import { create } from 'zustand';
import { lessonList, materialList } from '../data/mockData';

export const useStore = create((set, get) => ({
  lessons: lessonList,
  materials: materialList,

  favorites: new Set([1, 3]),

  applyRecords: [
    {
      id: 1,
      lessonTitle: '巧用矿泉水瓶展示大气压强',
      materials: ['微小压强计', '透明玻璃瓶', '橡胶塞带玻璃管', '实验乳胶气球', '托盘天平'],
      status: '等待处理',
      time: '2026-04-29 14:30',
      name: '李老师',
      school: '北京市海淀区第一中学',
      phone: '138****1234',
      region: '北京市海淀区',
      remark: '学校即将开展物理实验公开课，希望能提前试用这套器材用于备课，谢谢！',
      progress: [
        { text: '申请已提交', time: '2024-01-15 14:30', done: true },
        { text: '工作人员已受理', time: '2024-01-16 09:20', done: true },
        { text: '器材已发货', done: false },
        { text: '完成处理', done: false },
      ],
    },
  ],

  purchaseOrders: [
    {
      id: 1,
      lessonTitle: '巧用矿泉水瓶展示大气压强',
      school: '南京金陵中学',
      time: '2026-04-28',
      status: '已导出',
      materials: ['微小压强计', '透明玻璃瓶', '橡胶塞带玻璃管', '实验乳胶气球', '托盘天平'],
    },
  ],

  // Toast
  toastMsg: '',
  showToast: (msg) => {
    set({ toastMsg: msg });
    setTimeout(() => set({ toastMsg: '' }), 2000);
  },

  // Popup
  popupVisible: false,
  popupTitle: '',
  popupBody: null,
  openPopup: (title, body) => set({ popupVisible: true, popupTitle: title, popupBody: body }),
  closePopup: () => set({ popupVisible: false }),

  // 收藏
  toggleFavorite: (id) =>
    set((state) => {
      const newFav = new Set(state.favorites);
      if (newFav.has(id)) newFav.delete(id);
      else newFav.add(id);
      return { favorites: newFav };
    }),

  addApplyRecord: (record) =>
    set((state) => ({ applyRecords: [record, ...state.applyRecords] })),

  addPurchaseOrder: (order) =>
    set((state) => ({ purchaseOrders: [order, ...state.purchaseOrders] })),

  getMaterialsByLessonId: (lessonId) => {
    const lesson = get().lessons.find((l) => l.id === lessonId);
    if (!lesson?.materials) return [];
    return lesson.materials
      .map((mId) => get().materials.find((m) => m.id === mId))
      .filter(Boolean);
  },
}));