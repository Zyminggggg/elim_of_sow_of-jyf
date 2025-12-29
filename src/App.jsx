import { useState } from 'react';

// 词库 - 300个精选具有哲理和指引意义的词句
const fortunes = [
  // ===== 四字箴言 (150个) =====
  { text: "一帆风顺", type: "吉" },
  { text: "静待花开", type: "缓" },
  { text: "掩耳盗铃", type: "警" },
  { text: "避其锋芒", type: "策" },
  { text: "还需三思", type: "慎" },
  { text: "水到渠成", type: "吉" },
  { text: "当断则断", type: "决" },
  { text: "以退为进", type: "策" },
  { text: "顺其自然", type: "缓" },
  { text: "时机未到", type: "待" },
  { text: "柳暗花明", type: "吉" },
  { text: "三思后行", type: "慎" },
  { text: "破釜沉舟", type: "决" },
  { text: "厚积薄发", type: "缓" },
  { text: "见好就收", type: "策" },
  { text: "不可强求", type: "止" },
  { text: "峰回路转", type: "吉" },
  { text: "欲速不达", type: "警" },
  { text: "守株待兔", type: "警" },
  { text: "大道至简", type: "悟" },
  { text: "否极泰来", type: "吉" },
  { text: "韬光养晦", type: "策" },
  { text: "心诚则灵", type: "悟" },
  { text: "知足常乐", type: "悟" },
  { text: "塞翁失马", type: "悟" },
  { text: "适可而止", type: "慎" },
  { text: "随遇而安", type: "缓" },
  { text: "未雨绸缪", type: "策" },
  { text: "一鼓作气", type: "决" },
  { text: "功亏一篑", type: "警" },
  { text: "物极必反", type: "警" },
  { text: "相辅相成", type: "吉" },
  { text: "不破不立", type: "决" },
  { text: "以柔克刚", type: "策" },
  { text: "持之以恒", type: "缓" },
  { text: "循序渐进", type: "缓" },
  { text: "刚柔并济", type: "策" },
  { text: "运筹帷幄", type: "策" },
  { text: "审时度势", type: "慎" },
  { text: "蓄势待发", type: "待" },
  { text: "厚德载物", type: "悟" },
  { text: "上善若水", type: "悟" },
  { text: "宁静致远", type: "悟" },
  { text: "淡泊明志", type: "悟" },
  { text: "知行合一", type: "悟" },
  { text: "因势利导", type: "策" },
  { text: "顺水推舟", type: "策" },
  { text: "借力打力", type: "策" },
  { text: "以逸待劳", type: "策" },
  { text: "声东击西", type: "策" },
  { text: "暗度陈仓", type: "策" },
  { text: "围魏救赵", type: "策" },
  { text: "欲擒故纵", type: "策" },
  { text: "抛砖引玉", type: "策" },
  { text: "釜底抽薪", type: "决" },
  { text: "金蝉脱壳", type: "策" },
  { text: "关门捉贼", type: "决" },
  { text: "反客为主", type: "决" },
  { text: "苦尽甘来", type: "吉" },
  { text: "守得云开", type: "吉" },
  { text: "雨过天晴", type: "吉" },
  { text: "春暖花开", type: "吉" },
  { text: "万象更新", type: "吉" },
  { text: "蒸蒸日上", type: "吉" },
  { text: "如鱼得水", type: "吉" },
  { text: "心想事成", type: "吉" },
  { text: "马到成功", type: "吉" },
  { text: "旗开得胜", type: "吉" },
  { text: "前程似锦", type: "吉" },
  { text: "鹏程万里", type: "吉" },
  { text: "步步高升", type: "吉" },
  { text: "锦上添花", type: "吉" },
  { text: "如愿以偿", type: "吉" },
  { text: "天时地利", type: "吉" },
  { text: "贵人相助", type: "吉" },
  { text: "逢凶化吉", type: "吉" },
  { text: "化险为夷", type: "吉" },
  { text: "转危为安", type: "吉" },
  { text: "绝处逢生", type: "吉" },
  { text: "枯木逢春", type: "吉" },
  { text: "时来运转", type: "吉" },
  { text: "好事多磨", type: "缓" },
  { text: "事缓则圆", type: "缓" },
  { text: "从长计议", type: "缓" },
  { text: "徐徐图之", type: "缓" },
  { text: "稳扎稳打", type: "缓" },
  { text: "步步为营", type: "缓" },
  { text: "细水长流", type: "缓" },
  { text: "日积月累", type: "缓" },
  { text: "聚沙成塔", type: "缓" },
  { text: "积少成多", type: "缓" },
  { text: "滴水穿石", type: "缓" },
  { text: "铁杵磨针", type: "缓" },
  { text: "绳锯木断", type: "缓" },
  { text: "锲而不舍", type: "缓" },
  { text: "坚持不懈", type: "缓" },
  { text: "有备无患", type: "慎" },
  { text: "居安思危", type: "慎" },
  { text: "防患未然", type: "慎" },
  { text: "谨小慎微", type: "慎" },
  { text: "如履薄冰", type: "慎" },
  { text: "战战兢兢", type: "慎" },
  { text: "深思熟虑", type: "慎" },
  { text: "权衡利弊", type: "慎" },
  { text: "左右权衡", type: "慎" },
  { text: "瞻前顾后", type: "慎" },
  { text: "小心驶船", type: "慎" },
  { text: "谋定后动", type: "慎" },
  { text: "知己知彼", type: "慎" },
  { text: "量力而行", type: "慎" },
  { text: "因人而异", type: "慎" },
  { text: "见机行事", type: "慎" },
  { text: "过犹不及", type: "警" },
  { text: "画蛇添足", type: "警" },
  { text: "弄巧成拙", type: "警" },
  { text: "自作聪明", type: "警" },
  { text: "班门弄斧", type: "警" },
  { text: "螳臂当车", type: "警" },
  { text: "以卵击石", type: "警" },
  { text: "飞蛾扑火", type: "警" },
  { text: "杯弓蛇影", type: "警" },
  { text: "草木皆兵", type: "警" },
  { text: "风声鹤唳", type: "警" },
  { text: "捕风捉影", type: "警" },
  { text: "空穴来风", type: "警" },
  { text: "杞人忧天", type: "警" },
  { text: "庸人自扰", type: "警" },
  { text: "作茧自缚", type: "警" },
  { text: "自食其果", type: "警" },
  { text: "搬石砸脚", type: "警" },
  { text: "得不偿失", type: "警" },
  { text: "因小失大", type: "警" },
  { text: "顾此失彼", type: "警" },
  { text: "舍本逐末", type: "警" },
  { text: "本末倒置", type: "警" },
  { text: "南辕北辙", type: "警" },
  { text: "缘木求鱼", type: "警" },
  { text: "刻舟求剑", type: "警" },
  { text: "揠苗助长", type: "警" },
  { text: "急于求成", type: "警" },
  { text: "操之过急", type: "警" },
  { text: "当机立断", type: "决" },
  { text: "快刀斩麻", type: "决" },
  { text: "雷厉风行", type: "决" },
  { text: "势在必行", type: "决" },
  { text: "势不可挡", type: "决" },
  { text: "义无反顾", type: "决" },
  { text: "孤注一掷", type: "决" },
  { text: "背水一战", type: "决" },
  { text: "放手一搏", type: "决" },
  { text: "勇往直前", type: "决" },
  { text: "激流勇进", type: "决" },
  { text: "乘风破浪", type: "决" },
  { text: "披荆斩棘", type: "决" },

  // ===== 短句箴言 (100个) =====
  { text: "答案在心中", type: "悟" },
  { text: "再等等看", type: "待" },
  { text: "是时候了", type: "决" },
  { text: "放下执念", type: "止" },
  { text: "相信直觉", type: "决" },
  { text: "退一步海阔天空", type: "策" },
  { text: "山重水复疑无路", type: "待" },
  { text: "万事俱备", type: "吉" },
  { text: "尚有变数", type: "待" },
  { text: "贵人将至", type: "吉" },
  { text: "莫问前程", type: "止" },
  { text: "且行且珍惜", type: "悟" },
  { text: "缘分天定", type: "悟" },
  { text: "功不唐捐", type: "吉" },
  { text: "此路不通", type: "止" },
  { text: "另寻他路", type: "策" },
  { text: "换个角度", type: "策" },
  { text: "退而求其次", type: "策" },
  { text: "柳暗花明又一村", type: "吉" },
  { text: "天无绝人之路", type: "吉" },
  { text: "船到桥头自然直", type: "缓" },
  { text: "车到山前必有路", type: "缓" },
  { text: "来日方长", type: "缓" },
  { text: "路遥知马力", type: "缓" },
  { text: "日久见人心", type: "缓" },
  { text: "事在人为", type: "决" },
  { text: "人定胜天", type: "决" },
  { text: "有志者事竟成", type: "决" },
  { text: "皇天不负有心人", type: "吉" },
  { text: "机不可失", type: "决" },
  { text: "时不我待", type: "决" },
  { text: "此时不搏何时搏", type: "决" },
  { text: "该出手时就出手", type: "决" },
  { text: "三十六计走为上", type: "策" },
  { text: "留得青山在", type: "策" },
  { text: "小不忍则乱大谋", type: "慎" },
  { text: "忍一时风平浪静", type: "慎" },
  { text: "吃亏是福", type: "悟" },
  { text: "难得糊涂", type: "悟" },
  { text: "大智若愚", type: "悟" },
  { text: "返璞归真", type: "悟" },
  { text: "无为而治", type: "悟" },
  { text: "顺天应人", type: "悟" },
  { text: "天道酬勤", type: "吉" },
  { text: "善有善报", type: "吉" },
  { text: "福祸相依", type: "悟" },
  { text: "祸兮福所倚", type: "悟" },
  { text: "失之东隅收之桑榆", type: "悟" },
  { text: "塞翁失马焉知非福", type: "悟" },
  { text: "世事难料", type: "待" },
  { text: "天机不可泄露", type: "待" },
  { text: "静观其变", type: "待" },
  { text: "以不变应万变", type: "待" },
  { text: "兵来将挡", type: "策" },
  { text: "水来土掩", type: "策" },
  { text: "见招拆招", type: "策" },
  { text: "随机应变", type: "策" },
  { text: "伺机而动", type: "待" },
  { text: "按兵不动", type: "待" },
  { text: "暂避锋芒", type: "待" },
  { text: "养精蓄锐", type: "待" },
  { text: "卧薪尝胆", type: "待" },
  { text: "忍辱负重", type: "待" },
  { text: "蛰伏待机", type: "待" },
  { text: "一动不如一静", type: "止" },
  { text: "过犹不及", type: "止" },
  { text: "适可而止", type: "止" },
  { text: "点到为止", type: "止" },
  { text: "见好就收", type: "止" },
  { text: "急流勇退", type: "止" },
  { text: "功成身退", type: "止" },
  { text: "激流勇退", type: "止" },
  { text: "知难而退", type: "止" },
  { text: "悬崖勒马", type: "止" },
  { text: "回头是岸", type: "止" },
  { text: "迷途知返", type: "止" },
  { text: "亡羊补牢", type: "慎" },
  { text: "防微杜渐", type: "慎" },
  { text: "未雨绸缪", type: "慎" },
  { text: "有备无患", type: "慎" },
  { text: "三思而后行", type: "慎" },
  { text: "谋定而后动", type: "慎" },
  { text: "一着不慎满盘皆输", type: "警" },
  { text: "千里之堤毁于蚁穴", type: "警" },
  { text: "小心无大错", type: "慎" },
  { text: "细节决定成败", type: "慎" },
  { text: "行百里者半九十", type: "警" },
  { text: "骄兵必败", type: "警" },
  { text: "满招损谦受益", type: "警" },
  { text: "虚心使人进步", type: "悟" },
  { text: "活到老学到老", type: "悟" },
  { text: "温故而知新", type: "悟" },
  { text: "学无止境", type: "悟" },
  { text: "读万卷书行万里路", type: "悟" },
  { text: "纸上得来终觉浅", type: "悟" },
  { text: "实践出真知", type: "悟" },
  { text: "条条大路通罗马", type: "策" },
  { text: "殊途同归", type: "策" },
  { text: "不拘一格", type: "策" },
  { text: "另辟蹊径", type: "策" },

  // ===== 单字真言 (50个) =====
  { text: "等", type: "待" },
  { text: "行", type: "决" },
  { text: "止", type: "止" },
  { text: "忍", type: "慎" },
  { text: "悟", type: "悟" },
  { text: "舍", type: "止" },
  { text: "得", type: "吉" },
  { text: "缘", type: "悟" },
  { text: "静", type: "缓" },
  { text: "动", type: "决" },
  { text: "进", type: "决" },
  { text: "退", type: "策" },
  { text: "守", type: "慎" },
  { text: "攻", type: "决" },
  { text: "藏", type: "策" },
  { text: "显", type: "决" },
  { text: "明", type: "悟" },
  { text: "暗", type: "策" },
  { text: "刚", type: "决" },
  { text: "柔", type: "策" },
  { text: "快", type: "决" },
  { text: "慢", type: "缓" },
  { text: "轻", type: "缓" },
  { text: "重", type: "慎" },
  { text: "急", type: "决" },
  { text: "缓", type: "缓" },
  { text: "稳", type: "慎" },
  { text: "险", type: "警" },
  { text: "安", type: "吉" },
  { text: "危", type: "警" },
  { text: "吉", type: "吉" },
  { text: "凶", type: "警" },
  { text: "福", type: "吉" },
  { text: "祸", type: "警" },
  { text: "善", type: "吉" },
  { text: "恶", type: "警" },
  { text: "真", type: "悟" },
  { text: "假", type: "警" },
  { text: "虚", type: "警" },
  { text: "实", type: "悟" },
  { text: "空", type: "悟" },
  { text: "满", type: "警" },
  { text: "盈", type: "警" },
  { text: "亏", type: "慎" },
  { text: "圆", type: "吉" },
  { text: "缺", type: "待" },
  { text: "始", type: "决" },
  { text: "终", type: "止" },
  { text: "生", type: "吉" },
  { text: "灭", type: "止" },
];

const typeColors = {
  "吉": "#c9a959",
  "缓": "#7d9d7d",
  "警": "#b85c5c",
  "策": "#6b8cae",
  "慎": "#9b8574",
  "待": "#8b7db8",
  "决": "#c47d5c",
  "止": "#6b6b6b",
  "悟": "#8b6b8b",
};

const typeDescriptions = {
  "吉": "此为吉兆，宜进取",
  "缓": "宜缓不宜急，静待时机",
  "警": "此为警示，需谨慎",
  "策": "需智谋以对，迂回为上",
  "慎": "谨慎为上，三思后行",
  "待": "时机未到，静观其变",
  "决": "当机立断，勇往直前",
  "止": "止步为宜，适可而止",
  "悟": "心中自有答案，向内求索",
};

export default function FortuneBook() {
  const [stage, setStage] = useState('initial');
  const [fortune, setFortune] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pageNumber, setPageNumber] = useState(null);

  const handleFocus = () => {
    setStage('focusing');
  };

  const handleReveal = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setStage('revealing');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const randomPage = Math.floor(Math.random() * 999) + 1;
      setFortune(fortunes[randomIndex]);
      setPageNumber(randomPage);
      setStage('revealed');
      setIsFlipping(false);
    }, 1200);
  };

  const handleReset = () => {
    setStage('initial');
    setFortune(null);
    setPageNumber(null);
  };

  // 判断是否为长文本
  const isLongText = fortune && fortune.text.length > 6;

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-6 md:p-8 font-serif overflow-hidden">
      {/* 标题 - 增大尺寸 */}
      <div className="absolute top-6 md:top-10 text-center z-10">
        <h1 className="text-stone-400 text-xl md:text-2xl tracking-[0.4em] md:tracking-[0.5em] font-light">
          解忧文字铺
        </h1>
        <div className="w-16 md:w-20 h-px bg-stone-700 mx-auto mt-3 md:mt-4" />
      </div>

      {/* 主体区域 */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl px-4">

        {/* 初始状态 - 增大尺寸 */}
        {stage === 'initial' && (
          <div className="text-center animate-fade-in">
            <div className="w-52 h-72 md:w-64 md:h-80 border border-stone-700 rounded-sm mx-auto mb-12 md:mb-14 flex items-center justify-center bg-stone-900/50 shadow-2xl">
              <span className="text-stone-500 text-6xl md:text-7xl font-light">卷</span>
            </div>
            <p className="text-stone-500 text-base md:text-lg tracking-widest mb-8 md:mb-10 leading-relaxed">
              心中默念你的问题
            </p>
            <button
              onClick={handleFocus}
              className="px-12 py-5 border border-stone-600 text-stone-400 text-base md:text-lg tracking-widest hover:bg-stone-800 hover:border-stone-500 active:bg-stone-700 transition-all duration-300 rounded-sm"
            >
              已有所问
            </button>
          </div>
        )}

        {/* 专注状态 - 增大尺寸 */}
        {stage === 'focusing' && (
          <div className="text-center animate-fade-in">
            <div
              onClick={handleReveal}
              className="w-52 h-72 md:w-64 md:h-80 border border-stone-600 rounded-sm mx-auto mb-12 md:mb-14 flex items-center justify-center bg-stone-900 shadow-2xl cursor-pointer hover:border-stone-500 hover:shadow-amber-900/20 active:scale-[0.98] transition-all duration-300 group"
            >
              <span className="text-stone-400 text-6xl md:text-7xl font-light group-hover:text-stone-300 transition-colors">
                册
              </span>
            </div>
            <p className="text-stone-400 text-base md:text-lg tracking-widest mb-4 md:mb-5">
              问题已在心中
            </p>
            <p className="text-stone-600 text-sm md:text-base tracking-wider">
              点击书册 · 翻开命定之页
            </p>
          </div>
        )}

        {/* 翻书动画 - 增大尺寸 */}
        {stage === 'revealing' && (
          <div className="text-center">
            <div className="w-52 h-72 md:w-64 md:h-80 mx-auto mb-12 md:mb-14 perspective-1000">
              <div className="w-full h-full animate-flip">
                <div className="w-full h-full border border-stone-600 rounded-sm bg-stone-900 shadow-2xl flex items-center justify-center">
                  <div className="animate-pulse text-stone-500 text-4xl">⋯</div>
                </div>
              </div>
            </div>
            <p className="text-stone-500 text-base md:text-lg tracking-widest animate-pulse">
              翻阅中
            </p>
          </div>
        )}

        {/* 揭示结果 - 增大尺寸 */}
        {stage === 'revealed' && fortune && (
          <div className="text-center animate-fade-in-slow w-full">
            {/* 书页 - 更大尺寸 */}
            <div className="w-full max-w-md md:max-w-lg min-h-[480px] md:min-h-[560px] border border-stone-700 rounded-sm mx-auto mb-8 md:mb-10 bg-gradient-to-b from-stone-900 to-stone-950 shadow-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* 页码 */}
              <div className="text-stone-700 text-sm md:text-base tracking-wider">
                第 {pageNumber} 页
              </div>

              {/* 主文字 - 增大尺寸 */}
              <div className="flex-1 flex flex-col items-center justify-center py-10 md:py-14">
                {isLongText ? (
                  // 长文本横排显示
                  <div
                    className="text-3xl md:text-4xl font-light tracking-wider leading-relaxed text-center px-6"
                    style={{ color: typeColors[fortune.type] }}
                  >
                    {fortune.text}
                  </div>
                ) : fortune.text.length === 1 ? (
                  // 单字特大显示
                  <div
                    className="text-9xl md:text-10xl font-light"
                    style={{ color: typeColors[fortune.type] }}
                  >
                    {fortune.text}
                  </div>
                ) : (
                  // 四字及以下竖排显示
                  <div
                    className="flex flex-col items-center"
                    style={{ color: typeColors[fortune.type] }}
                  >
                    {fortune.text.split('').map((char, i) => (
                      <span
                        key={i}
                        className="text-5xl md:text-6xl font-light my-2 md:my-3"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 释义 - 增大尺寸 */}
              <div className="text-center">
                <div
                  className="inline-block px-5 py-3 rounded-sm text-sm md:text-base tracking-wider"
                  style={{
                    color: typeColors[fortune.type],
                    backgroundColor: `${typeColors[fortune.type]}15`
                  }}
                >
                  【{fortune.type}】{typeDescriptions[fortune.type]}
                </div>
              </div>

              {/* 装饰角 - 增大尺寸 */}
              <div className="absolute top-6 left-6 w-8 md:w-12 h-px bg-stone-800" />
              <div className="absolute top-6 left-6 w-px h-8 md:h-12 bg-stone-800" />
              <div className="absolute top-6 right-6 w-8 md:w-12 h-px bg-stone-800" />
              <div className="absolute top-6 right-6 w-px h-8 md:h-12 bg-stone-800" />
              <div className="absolute bottom-6 left-6 w-8 md:w-12 h-px bg-stone-800" />
              <div className="absolute bottom-6 left-6 w-px h-8 md:h-12 bg-stone-800" />
              <div className="absolute bottom-6 right-6 w-8 md:w-12 h-px bg-stone-800" />
              <div className="absolute bottom-6 right-6 w-px h-8 md:h-12 bg-stone-800" />
            </div>

            {/* 提示语 - 增大尺寸 */}
            <p className="text-stone-600 text-sm md:text-base tracking-wider mb-6 md:mb-8">
              文字已落 · 解读在心
            </p>

            {/* 重新开始 - 增大尺寸 */}
            <button
              onClick={handleReset}
              className="px-10 py-4 text-stone-500 text-base tracking-widest hover:text-stone-400 active:text-stone-300 transition-colors border border-stone-800 hover:border-stone-700 rounded-sm"
            >
              再问一卦
            </button>
          </div>
        )}
      </div>

      {/* 底部 - 增大尺寸 */}
      <div className="absolute bottom-6 md:bottom-8 text-center">
        <p className="text-stone-700 text-sm tracking-wider">
          信则有 · 不信则无
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-slow {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-slow {
          animation: fade-in-slow 0.8s ease-out;
        }
        
        .animate-flip {
          animation: flip 1.2s ease-in-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }

        /* 增大全局字体基础大小 */
        html {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          html {
            font-size: 20px;
          }
        }
        
        /* 移动端优化 */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
        
        /* 安全区域适配 */
        @supports (padding: env(safe-area-inset-bottom)) {
          .absolute.bottom-6 {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  );
}