import daqiyaqiang from '../pic/daqiyaqiang.png';
import tutoujing from '../pic/tutoujing.png';
import huadongbianzuqi from '../pic/huadongbianzuqi.png';
import daqiyaqiang1 from '../pic/daqiyaqiang1.png';
import tutoujing1 from '../pic/tutoujing1.png';
import huadongbianzuqi1 from '../pic/huadongbianzuqi1.png';
export const lessonList = [
  {
    id: 1,
    title: '巧用矿泉水瓶展示大气压强',
    teacher: '张老师',
    school: '南京金陵中学',
    grade: '八年级',
    tags: ['国家级一等奖', '力学探究', '低成本'],
    heat: 12800,
    cover: 'linear-gradient(135deg, #2b5876, #4e4376)',
    coverImage: daqiyaqiang,
    coverlongImage: daqiyaqiang1,
    materials: [1, 2, 3, 4, 5],
    desc: '通过生活化材料展示大气压强现象，适合作为八年级物理导入实验。',
    fullDuration: '18分钟',
    shortDuration: '2:15',   // 新增
  },
  {
    id: 2,
    title: '探究凸透镜成像规律',
    teacher: '王老师',
    school: '杭州学军中学',
    grade: '八年级',
    tags: ['中考必做', '光学实验'],
    heat: 8560,
    cover: 'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
    coverImage: tutoujing,
    coverlongImage: tutoujing1,
    materials: [6, 7],
    desc: '经典光学实验，清晰展示凸透镜成像特点。',
    fullDuration: '22分钟',
    shortDuration: '1:48',
  },
  {
    id: 3,
    title: '滑动变阻器的正确连接',
    teacher: '李老师',
    school: '北京四中',
    grade: '九年级',
    tags: ['名师创新', '电学实验'],
    heat: 6200,
    cover: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    coverImage: huadongbianzuqi,
    coverlongImage: huadongbianzuqi1,
    materials: [8, 9],
    desc: '电学实验中滑动变阻器的接法与注意事项。',
    fullDuration: '19分钟',
    shortDuration: '1:30',
  },
];

export const materialList = [
  { id: 1, name: '微小压强计', spec: '高精度U型管', count: '1套', usage: '用于观察液体压强变化' },
  { id: 2, name: '透明玻璃瓶', spec: '500ml耐高温', count: '1个', usage: '实验主体容器' },
  { id: 3, name: '橡胶塞带玻璃管', spec: '标准接口', count: '1套', usage: '密封与气压传导' },
  { id: 4, name: '实验乳胶气球', spec: '弹性优良', count: '2个', usage: '展示压强变化现象' },
  { id: 5, name: '托盘天平', spec: '200g/0.1g', count: '1台', usage: '高精度物理实验称量' },
  { id: 6, name: '凸透镜', spec: '焦距10cm', count: '1个', usage: '成像实验' },
  { id: 7, name: '光具座', spec: '1m带刻度', count: '1套', usage: '光学导轨' },
  { id: 8, name: '滑动变阻器', spec: '50Ω 1.5A', count: '1个', usage: '改变电阻' },
  { id: 9, name: '电流表', spec: '0-3A', count: '1个', usage: '测量电流' },
];