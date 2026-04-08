(96566,
  (e) => {
    "use strict";
    let t;
    var n = e.i(77117),
      s = e.i(91983);
    let a = (e) => {
        let t,
          n = new Set(),
          s = (e, s) => {
            let a = "function" == typeof e ? e(t) : e;
            if (!Object.is(a, t)) {
              let e = t;
              ((t = (null != s ? s : "object" != typeof a || null === a)
                ? a
                : Object.assign({}, t, a)),
                n.forEach((n) => n(t, e)));
            }
          },
          a = () => t,
          d = {
            setState: s,
            getState: a,
            getInitialState: () => i,
            subscribe: (e) => (n.add(e), () => n.delete(e)),
          },
          i = (t = e(s, a, d));
        return d;
      },
      d = (e) => {
        let t = e ? a(e) : a,
          n = (e) =>
            (function (e, t = (e) => e) {
              let n = s.default.useSyncExternalStore(
                e.subscribe,
                s.default.useCallback(() => t(e.getState()), [e, t]),
                s.default.useCallback(() => t(e.getInitialState()), [e, t]),
              );
              return (s.default.useDebugValue(n), n);
            })(t, e);
        return (Object.assign(n, t), n);
      },
      i = {
        lin: {
          id: "lin",
          name: "林晓柔",
          avatar: "/lin.png",
          tags: ["段位：🌟🌟", "白银捞女", "物质试探"],
          description:
            "表面温柔单纯的学妹，实际上精通“免单套路”。她擅长利用男生的保护欲和面子，进行低风险的物质索取。",
          firstScene: "scene_01",
        },
        tan: {
          id: "tan",
          name: "谭佳欣",
          avatar: "/tan.png",
          tags: ["段位：🌟🌟🌟🌟🌟", "钻石海王", "绝对理智"],
          description:
            "高段位海王。永远理智，永远不主动担责。精通“免责声明”与“服从性测试”，在她的鱼塘里，认真你就输了。",
          firstScene: "tan_scene_01",
        },
        su: {
          id: "su",
          name: "苏佳怡",
          avatar: "/su.png",
          tags: ["段位：🌟🌟🌟🌟", "病娇白切黑", "极致掌控"],
          description:
            "外表元气甜美的学妹，实则掌控欲极强。精通“爱情轰炸”与“孤立控制”，一旦被她盯上，很难全身而退。",
          firstScene: "su_scene_01",
        },
        shen: {
          id: "shen",
          name: "沈书仪",
          avatar: "/shen.png",
          tags: ["段位：🌟🌟🌟🌟🌟", "高阶海后", "极限推拉"],
          description:
            "外联部副部长，深谙人性与推拉之道的顶级玩家。与她过招，就像是在悬崖边跳华尔兹，永远不知道谁才是猎物。",
          firstScene: "shen_scene_01",
        },
        chen: {
          id: "chen",
          name: "陈盈盈",
          avatar: "/chen.png",
          tags: ["段位：🌟", "恋爱脑青梅", "任你摆布"],
          description:
            "满眼都是你的高中学妹。在这个剧本里，你才是拥有绝对权力的“执棋者”。面对毫无保留的偏爱，你会选择保护，还是剥削？",
          firstScene: "chen_scene_01",
        },
      },
      r = {
        1: "第一天 · 试探",
        2: "第二天 · 破冰",
        3: "第三天 · 熟络",
        4: "第四天 · 博弈",
        5: "第五天 · 选择",
        6: "第六天 · 结局",
      },
      c = [
        {
          name: "Love Bombing",
          desc: "情感轰炸",
          detail: '短时间内给予过量赞美和亲密感，让对方迅速产生"特别感"。',
        },
        {
          name: "Future Faking",
          desc: "画饼承诺",
          detail: "描绘美好未来，但从不兑现，让对方沉迷幻想。",
        },
        {
          name: "Hot and Cold",
          desc: "忽冷忽热",
          detail: "时而热情时而冷漠，让对方陷入焦虑和依赖。",
        },
        {
          name: "Intermittent Reinforcement",
          desc: "间歇强化",
          detail: "不规律给予关心，模仿赌博机制，让对方上瘾式等待。",
        },
        {
          name: "Triangulation",
          desc: "三角测量",
          detail: "提及其他追求者，制造竞争感，让对方主动讨好。",
        },
        {
          name: "Gaslighting",
          desc: "煤气灯效应",
          detail: '否定对方感受："你想太多了"，让对方怀疑自己的判断。',
        },
        {
          name: "Guilt Tripping",
          desc: "内疚操控",
          detail: "放大对方小失误，让对方用金钱或顺从来补偿。",
        },
        {
          name: "Isolation",
          desc: "孤立控制",
          detail: "让对方逐步疏远朋友家人，增加对自己的依赖。",
        },
        {
          name: "Financial Exploitation",
          desc: "金钱榨取",
          detail: "以各种理由借钱或暗示消费，逐步升级。",
        },
        {
          name: "Fake Breakup",
          desc: "假意抽离",
          detail: '用"退回朋友"试探底线，待对方焦虑求和后再掌控全局。',
        },
      ],
      l = [
        {
          id: "scene_01",
          chapter: 1,
          title: "陌生的申请",
          timeLabel: "周二 下午 14:32",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周二 下午 14:32",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "九月初，大三上学期。你在图书馆三楼复习，微信弹出一条好友申请。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "同学你好" },
            {
              id: "m2",
              sender: "her",
              content: "我是下午坐你对面的那个女生🤭",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "啊？抱歉当时看书没注意",
              affectionDelta: 3,
              anxietyDelta: 0,
              nextScene: "scene_01_ans_a",
              badgeText: "纯情",
            },
            {
              id: "b",
              label: "B",
              text: "你好，有事？",
              affectionDelta: 1,
              anxietyDelta: 0,
              nextScene: "scene_01_ans_b",
              badgeText: "直男",
            },
            {
              id: "c",
              label: "C",
              text: "哦哦靠窗那个对吧",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "scene_01_ans_c",
              badgeText: "热情",
            },
            {
              id: "d",
              label: "D",
              text: "? 你怎么有我微信",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_01_ans_d",
              badgeText: "警觉",
            },
          ],
        },
        {
          id: "scene_01_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哈哈没事，你学得太认真啦" },
          ],
          autoNext: "scene_01_pen_main",
        },
        {
          id: "scene_01_ans_b",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "这么高冷嘛~ 找你当然是有事啦",
            },
          ],
          autoNext: "scene_01_pen_main",
        },
        {
          id: "scene_01_ans_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哇，原来你注意到我了！" },
          ],
          autoNext: "scene_01_pen_main",
        },
        {
          id: "scene_01_ans_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "别紧张哈哈" },
            { id: "m2", sender: "her", content: "没去表白墙捞你" },
          ],
          autoNext: "scene_01_pen_main",
        },
        {
          id: "scene_01_pen_main",
          chapter: 1,
          title: "钢笔",
          timeLabel: "周二 下午 14:36",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "是你走太急啦，落了支黑色的钢笔",
            },
            { id: "a1", sender: "me", content: "我去", delay: 1e3 },
            {
              id: "a2",
              sender: "me",
              content: "我说回宿舍怎么找不到了",
              delay: 800,
            },
            { id: "m2", sender: "her", content: "帮你交到三楼前台啦~" },
            {
              id: "m3",
              sender: "her",
              content: "顺便在前台登记册上看了下你的电话，就偷偷加咯😜",
            },
            {
              id: "m4",
              sender: "her",
              content: "我叫林晓柔，中文大三的。你呢？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "太感谢了！我叫{name}，计算机的",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "scene_01_pen_ans_a",
              badgeText: "真诚",
            },
            {
              id: "b",
              label: "B",
              text: "谢谢，我是{name}",
              affectionDelta: 2,
              anxietyDelta: 1,
              nextScene: "scene_01_pen_ans_b",
              badgeText: "内向",
            },
            {
              id: "c",
              label: "C",
              text: "救大命了，改天请你喝奶茶！我是{name}",
              affectionDelta: 6,
              anxietyDelta: 0,
              nextScene: "scene_01_pen_ans_c",
              badgeText: "示好",
            },
            {
              id: "d",
              label: "D",
              text: "谢谢。为了还个笔特意加微信，费心了",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_01_pen_ans_d",
              badgeText: "防备",
            },
          ],
        },
        {
          id: "scene_01_pen_ans_a",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "{name}，挺好听的。理工男确实踏实",
            },
          ],
          autoNext: "scene_01_bomb",
        },
        {
          id: "scene_01_pen_ans_b",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "{name}。连回消息都这么简短，高冷帅哥既视感哈哈",
            },
          ],
          autoNext: "scene_01_bomb",
        },
        {
          id: "scene_01_pen_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "奶茶记下啦！不过我不随便喝别人奶茶的哦",
            },
          ],
          autoNext: "scene_01_bomb",
        },
        {
          id: "scene_01_pen_ans_d",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "哎呀被看穿了，其实还笔只是个借口",
            },
          ],
          autoNext: "scene_01_bomb",
        },
        {
          id: "scene_01_bomb",
          chapter: 1,
          title: "和别人不一样",
          timeLabel: "周二 下午 14:43",
          puaTacticUsed: "Love Bombing",
          messages: [
            { id: "m1", sender: "her", content: "说实话，下午偷偷看你好久了" },
            { id: "m2", sender: "her", content: "感觉你这人跟别人不太一样" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "啊？哪里不一样？",
              affectionDelta: 6,
              anxietyDelta: 0,
              nextScene: "scene_01_bomb_reply_a",
              badgeText: "好奇",
            },
            {
              id: "b",
              label: "B",
              text: "可能是发呆被你看到了哈哈",
              affectionDelta: 5,
              anxietyDelta: 2,
              nextScene: "scene_01_bomb_reply_b",
              badgeText: "开心",
            },
            {
              id: "c",
              label: "C",
              text: "怎么突然夸人",
              affectionDelta: 4,
              anxietyDelta: 0,
              nextScene: "scene_01_bomb_reply_c",
              badgeText: "受用",
            },
            {
              id: "d",
              label: "D",
              text: "大家都挺安静的吧",
              affectionDelta: 0,
              anxietyDelta: 0,
              nextScene: "scene_01_bomb_reply_d",
              badgeText: "理性",
            },
          ],
        },
        {
          id: "scene_01_bomb_reply_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "就感觉很踏实，不浮躁" },
            {
              id: "m2",
              sender: "her",
              content: "好多男生恨不得弄出点动静引人注意，你连头都不抬",
            },
          ],
          autoNext: "scene_01_continue",
        },
        {
          id: "scene_01_bomb_reply_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "发呆也很可爱呀" },
            {
              id: "m2",
              sender: "her",
              content: "就感觉你安静坐在那，挺特别的",
            },
          ],
          autoNext: "scene_01_continue",
        },
        {
          id: "scene_01_bomb_reply_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "没有夸啦，实话实说" },
            { id: "m2", sender: "her", content: "女生的直觉很准的" },
          ],
          autoNext: "scene_01_continue",
        },
        {
          id: "scene_01_bomb_reply_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "才不是，你都没发现别人多吵" },
            { id: "m2", sender: "her", content: "你只是自己没发觉而已" },
          ],
          autoNext: "scene_01_continue",
        },
        {
          id: "scene_01_continue",
          chapter: 1,
          title: "我很少主动",
          timeLabel: "周二 下午 15:02",
          puaTacticUsed: "Love Bombing",
          messages: [
            { id: "a1", sender: "me", content: "哈哈，谢谢啊", delay: 800 },
            { id: "m1", sender: "her", content: "其实我平时超社恐的" },
            { id: "m2", sender: "her", content: "第一次主动加男生微信" },
            { id: "m3", sender: "her", content: "你不会觉得我很随便吧🥺" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "怎么会，挺可爱的",
              affectionDelta: 8,
              anxietyDelta: 3,
              nextScene: "scene_01_continue_reply_a",
              badgeText: "上钩",
            },
            {
              id: "b",
              label: "B",
              text: "不会，挺热心的",
              affectionDelta: 3,
              anxietyDelta: 0,
              nextScene: "scene_01_continue_reply_b",
              badgeText: "迟钝",
            },
            {
              id: "c",
              label: "C",
              text: "第一次吗？看不出来",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_01_continue_reply_c",
              badgeText: "试探",
            },
            {
              id: "d",
              label: "D",
              text: "还好",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_01_continue_reply_d",
              badgeText: "理智",
            },
          ],
        },
        {
          id: "scene_01_continue_reply_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "呼，那我就放心了" },
            { id: "m2", sender: "her", content: "可能就是看对眼了吧哈哈~" },
          ],
          autoNext: "scene_01_leave",
        },
        {
          id: "scene_01_continue_reply_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哎呀，不仅仅是热心啦" },
            { id: "m2", sender: "her", content: "是觉得你值得我勇敢一次" },
          ],
          autoNext: "scene_01_leave",
        },
        {
          id: "scene_01_continue_reply_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "伪装的啦" },
            {
              id: "m2",
              sender: "her",
              content: "遇到感觉对的人，总得逼自己主动一下嘛",
            },
          ],
          autoNext: "scene_01_leave",
        },
        {
          id: "scene_01_continue_reply_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "好吧" },
            {
              id: "m2",
              sender: "her",
              content: "慢慢来吧，你会发现我没有恶意的",
            },
          ],
          autoNext: "scene_01_leave",
        },
        {
          id: "scene_01_leave",
          chapter: 1,
          title: "有事先走了",
          timeLabel: "周二 下午 15:15",
          messages: [
            { id: "m1", sender: "her", content: "导师叫我开会啦，先溜了" },
            { id: "m2", sender: "her", content: "晚上见～" },
            { id: "a1", sender: "me", content: "好，拜拜", delay: 800 },
          ],
          autoNext: "scene_02",
        },
        {
          id: "scene_02",
          chapter: 1,
          title: "晚上的消息",
          timeLabel: "周二 晚上 21:18",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周二 晚上 21:18",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "傍晚你取回了钢笔。刚回宿舍，她的消息准时到了——",
              delay: 900,
            },
            { id: "m1", sender: "her", content: "拿到了吗？你的笔" },
            { id: "a1", sender: "me", content: "拿到了，谢啦", delay: 1e3 },
            { id: "m2", sender: "her", content: "不客气~" },
            { id: "m3", sender: "her", content: "跟你聊天感觉挺舒服的" },
            {
              id: "m4",
              sender: "her",
              content: "明明才认识半天，是我太自来熟了吗🙈",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没有啊，我也觉得挺轻松的",
              affectionDelta: 5,
              anxietyDelta: 1,
              nextScene: "scene_02_reply_a",
              badgeText: "顺从",
            },
            {
              id: "b",
              label: "B",
              text: "是你比较会聊天",
              affectionDelta: 7,
              anxietyDelta: 2,
              nextScene: "scene_02_reply_b",
              badgeText: "自卑",
            },
            {
              id: "c",
              label: "C",
              text: "有点哈哈",
              affectionDelta: 3,
              anxietyDelta: 0,
              nextScene: "scene_02_reply_c",
              badgeText: "调侃",
            },
            {
              id: "d",
              label: "D",
              text: "刚认识是比较客气吧",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_02_reply_d",
              badgeText: "耿直",
            },
          ],
        },
        {
          id: "scene_02_reply_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "太好了，我还怕吓到你" },
            { id: "m2", sender: "her", content: "感觉咱俩磁场挺合的" },
          ],
          autoNext: "scene_02_main",
        },
        {
          id: "scene_02_reply_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哪有，主要是跟你聊得来" },
            { id: "m2", sender: "her", content: "换别人我早就不理了哈哈" },
          ],
          autoNext: "scene_02_main",
        },
        {
          id: "scene_02_reply_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "可恶，居然敢嫌弃我" },
            { id: "m2", sender: "her", content: "但我只对你这样哦" },
          ],
          autoNext: "scene_02_main",
        },
        {
          id: "scene_02_reply_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "你真是个大直男哎" },
            { id: "m2", sender: "her", content: "不过挺可爱的" },
          ],
          autoNext: "scene_02_main",
        },
        {
          id: "scene_02_main",
          chapter: 1,
          title: '"对了"的感觉',
          timeLabel: "周二 晚上 21:35",
          puaTacticUsed: "Love Bombing",
          messages: [
            { id: "m1", sender: "her", content: "怎么说呢" },
            { id: "m2", sender: "her", content: "有时候人跟人的感觉挺玄学的" },
            {
              id: "m3",
              sender: "her",
              content: "就觉得你挺顺眼的，想多认识一下",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我也是，挺幸运认识你的",
              affectionDelta: 10,
              anxietyDelta: 4,
              nextScene: "scene_02_night",
              badgeText: "沉沦",
            },
            {
              id: "b",
              label: "B",
              text: "哈哈谢谢，受宠若惊",
              affectionDelta: 5,
              anxietyDelta: 1,
              nextScene: "scene_02_night",
              badgeText: "害羞",
            },
            {
              id: "c",
              label: "C",
              text: "可能这就是缘分吧",
              affectionDelta: 1,
              anxietyDelta: 0,
              nextScene: "scene_02_night",
              badgeText: "接话",
            },
            {
              id: "d",
              label: "D",
              text: "啊？🤨",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_02_night",
              badgeText: "疑惑",
            },
          ],
        },
        {
          id: "scene_02_night",
          chapter: 1,
          title: "去洗澡了",
          timeLabel: "周二 晚上 22:04",
          messages: [
            { id: "m1", sender: "her", content: "不逗你啦，去洗澡了🛁" },
            { id: "m2", sender: "her", content: "今天认识你很开心，晚安咯" },
            { id: "a1", sender: "me", content: "好，晚安", delay: 800 },
          ],
          autoNext: "scene_03",
        },
        {
          id: "scene_03",
          chapter: 2,
          title: "早安",
          timeLabel: "周三 早上 07:58",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周三 早上 07:58",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "第二天早上，你刚睁眼，手机屏幕亮了——",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "早呀☀️" },
            { id: "m2", sender: "her", content: "昨晚睡得好吗" },
            { id: "a1", sender: "me", content: "早，刚醒", delay: 1e3 },
            { id: "m3", sender: "her", content: "哈哈猪猪" },
            {
              id: "m4",
              sender: "her",
              content: "我昨晚做梦都在图书馆找书，服了我自己了",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "哈哈，太用功了吧",
              affectionDelta: 5,
              anxietyDelta: 1,
              nextScene: "scene_03_reply_a",
              badgeText: "轻松",
            },
            {
              id: "b",
              label: "B",
              text: "你起好早啊",
              affectionDelta: 3,
              anxietyDelta: 0,
              nextScene: "scene_03_reply_b",
              badgeText: "平淡",
            },
            {
              id: "c",
              label: "C",
              text: "梦里有我不？",
              affectionDelta: 6,
              anxietyDelta: 2,
              nextScene: "scene_03_reply_c",
              badgeText: "调侃",
            },
            {
              id: "d",
              label: "D",
              text: "今天还去吗？",
              affectionDelta: 1,
              anxietyDelta: 0,
              nextScene: "scene_03_reply_d",
              badgeText: "直男",
            },
          ],
        },
        {
          id: "scene_03_reply_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "没办法呀" },
            { id: "m2", sender: "her", content: "中文系早八人伤不起" },
          ],
          autoNext: "scene_03_invite",
        },
        {
          id: "scene_03_reply_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "习惯啦" },
            {
              id: "m2",
              sender: "her",
              content: "其实也没睡醒，强撑着给你发个早安",
            },
          ],
          autoNext: "scene_03_invite",
        },
        {
          id: "scene_03_reply_c",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "切，少臭美了" },
            {
              id: "m2",
              sender: "her",
              content: "不过确实……好像有个背影挺像你的",
            },
          ],
          autoNext: "scene_03_invite",
        },
        {
          id: "scene_03_reply_d",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "去呀" },
            { id: "m2", sender: "her", content: "你这人真是一句废话都不多说" },
          ],
          autoNext: "scene_03_invite",
        },
        {
          id: "scene_03_invite",
          chapter: 2,
          title: "图书馆邀约",
          timeLabel: "周三 早上 08:14",
          puaTacticUsed: "Love Bombing",
          messages: [
            { id: "m1", sender: "her", content: "对了" },
            {
              id: "m2",
              sender: "her",
              content: "下午想去图书馆，但一个人好懒",
            },
            { id: "m3", sender: "her", content: "你今天还会去老位置吗？🥺" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "去啊，我下午在那等你",
              affectionDelta: 8,
              anxietyDelta: 2,
              nextScene: "scene_03_accept",
              badgeText: "期待",
            },
            {
              id: "b",
              label: "B",
              text: "应该会去吧，到时看",
              affectionDelta: 2,
              anxietyDelta: 0,
              nextScene: "scene_03_accept",
              badgeText: "佛系",
            },
            {
              id: "c",
              label: "C",
              text: "你可以叫室友先去，我等会再来",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_03_accept",
              badgeText: "退缩",
            },
            {
              id: "d",
              label: "D",
              text: "看复习进度吧，应该会去",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_03_accept",
              badgeText: "直男",
            },
          ],
        },
        {
          id: "scene_03_accept",
          chapter: 2,
          title: "先去上课",
          timeLabel: "周三 早上 08:31",
          messages: [
            { id: "m1", sender: "her", content: "好耶" },
            { id: "m2", sender: "her", content: "导师进教室了，先上课啦拜拜~" },
            { id: "a1", sender: "me", content: "好", delay: 800 },
          ],
          autoNext: "scene_04",
        },
        {
          id: "scene_04",
          chapter: 2,
          title: "同一个位置",
          timeLabel: "周三 下午 14:50",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周三 下午 14:50",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "下午你到了三楼，发现她已经坐在那里了——",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "来啦" },
            { id: "m2", sender: "her", content: "旁边给你留的" },
            { id: "m3", sender: "her", content: "不许坐别处哦哼" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "哈哈好，谢谢帮我占座",
              affectionDelta: 7,
              anxietyDelta: 1,
              nextScene: "scene_04_sit",
              badgeText: "宠溺",
            },
            {
              id: "b",
              label: "B",
              text: "收到",
              affectionDelta: 4,
              anxietyDelta: 0,
              nextScene: "scene_04_sit",
              badgeText: "温和",
            },
            {
              id: "c",
              label: "C",
              text: "其实图书馆不让占座的…不过谢谢",
              affectionDelta: 1,
              anxietyDelta: 0,
              nextScene: "scene_04_sit",
              badgeText: "老实",
            },
            {
              id: "d",
              label: "D",
              text: "那边太冷了，我想换个地",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_04_sit",
              badgeText: "抗拒",
            },
          ],
        },
        {
          id: "scene_04_sit",
          chapter: 2,
          title: "分享句子",
          timeLabel: "周三 下午 16:22",
          puaTacticUsed: "Love Bombing",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "两人并排坐着，各看各的书。过了一会，微信弹窗响了——",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "刚刚看书看到一句话" },
            {
              id: "m2",
              sender: "her",
              content: "“有些人只是一遇，便觉是故人”",
            },
            { id: "m3", sender: "her", content: "突然觉得挺适合现在的哈哈" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我也觉得…遇到你像久别重逢",
              affectionDelta: 12,
              anxietyDelta: 5,
              nextScene: "scene_04_poem_reply_a",
              badgeText: "深陷",
            },
            {
              id: "b",
              label: "B",
              text: "句子挺美的",
              affectionDelta: 5,
              anxietyDelta: 2,
              nextScene: "scene_04_poem_reply_b",
              badgeText: "保守",
            },
            {
              id: "c",
              label: "C",
              text: "你看得好快，都不复习的吗",
              affectionDelta: 2,
              anxietyDelta: 0,
              nextScene: "scene_04_poem_reply_c",
              badgeText: "直男",
            },
            {
              id: "d",
              label: "D",
              text: "看不懂这些",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_04_poem_reply_d",
              badgeText: "扫兴",
            },
          ],
        },
        {
          id: "scene_04_poem_reply_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "原来不是我一个人这么想呀" },
            { id: "m2", sender: "her", content: "偷偷看你侧脸，还挺好看的" },
          ],
          autoNext: "scene_04_poem_cont",
        },
        {
          id: "scene_04_poem_reply_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "只有句子美吗？" },
            { id: "m2", sender: "her", content: "木头" },
          ],
          autoNext: "scene_04_poem_cont",
        },
        {
          id: "scene_04_poem_reply_c",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "劳逸结合懂不懂呀学霸" },
            { id: "m2", sender: "her", content: "我是在培养情操~" },
          ],
          autoNext: "scene_04_poem_cont",
        },
        {
          id: "scene_04_poem_reply_d",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "好吧" },
            { id: "m2", sender: "her", content: "打扰你看代码了" },
          ],
          autoNext: "scene_04_poem_cont",
        },
        {
          id: "scene_04_poem_cont",
          chapter: 2,
          title: "今天最近的人",
          timeLabel: "周三 下午 16:34",
          puaTacticUsed: "Love Bombing",
          messages: [
            { id: "m1", sender: "her", content: "不过" },
            {
              id: "m2",
              sender: "her",
              content: "能和你安安静静坐一下午，感觉挺舒服的",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我也是，以后可以经常一起",
              affectionDelta: 8,
              anxietyDelta: 3,
              nextScene: "scene_04_leave",
              badgeText: "许诺",
            },
            {
              id: "b",
              label: "B",
              text: "确实效率挺高",
              affectionDelta: 2,
              anxietyDelta: 0,
              nextScene: "scene_04_leave",
              badgeText: "平淡",
            },
            {
              id: "c",
              label: "C",
              text: "你少玩会手机就行",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_04_leave",
              badgeText: "说教",
            },
            {
              id: "d",
              label: "D",
              text: "碰巧今天没人吵吧",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_04_leave",
              badgeText: "煞风景",
            },
          ],
        },
        {
          id: "scene_04_leave",
          chapter: 2,
          title: "去吃饭了",
          timeLabel: "周三 下午 17:52",
          messages: [
            { id: "m1", sender: "her", content: "室友狂催我去吃饭了，先撤啦" },
            { id: "m2", sender: "her", content: "你也早点去吃哦，晚上见~" },
            { id: "a1", sender: "me", content: "好，拜拜", delay: 800 },
          ],
          autoNext: "scene_05",
        },
        {
          id: "scene_05",
          chapter: 2,
          title: "睡了吗",
          timeLabel: "周三 深夜 23:22",
          puaTacticUsed: "Guilt Tripping",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周三 深夜 23:22",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "深夜，你正准备睡觉，微信突然响了——",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "睡了吗" },
            { id: "a1", sender: "me", content: "还没，怎么了？", delay: 1500 },
            { id: "m2", sender: "her", content: "突然觉得好烦……" },
            {
              id: "m3",
              sender: "her",
              content: "抱歉，大半夜给你发这种负能量",
            },
            { id: "m4", sender: "her", content: "你不用回我啦，早点休息" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "怎么了？别憋着，跟我说说",
              affectionDelta: 10,
              anxietyDelta: 6,
              nextScene: "scene_05_confide",
              badgeText: "心疼",
            },
            {
              id: "b",
              label: "B",
              text: "发生什么事了？",
              affectionDelta: 6,
              anxietyDelta: 2,
              nextScene: "scene_05_confide",
              badgeText: "关切",
            },
            {
              id: "c",
              label: "C",
              text: "确实困了，那你也早点睡",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_05_confide_skip",
              badgeText: "断联",
            },
            {
              id: "d",
              label: "D",
              text: "大半夜的发什么神经…",
              affectionDelta: -8,
              anxietyDelta: 0,
              nextScene: "scene_05_confide_skip",
              badgeText: "暴击",
            },
          ],
        },
        {
          id: "scene_05_confide",
          chapter: 2,
          title: "家里的事",
          timeLabel: "周三 深夜 23:40",
          puaTacticUsed: "Isolation",
          messages: [
            { id: "m1", sender: "her", content: "也没什么" },
            { id: "m2", sender: "her", content: "就是跟我妈吵架了" },
            { id: "a1", sender: "me", content: "因为什么吵啊？", delay: 1200 },
            { id: "m3", sender: "her", content: "她总是把她的想法强加给我" },
            {
              id: "m4",
              sender: "her",
              content: "从小到大我都这么乖了，为什么还是不满意",
            },
            { id: "m5", sender: "her", content: "真的很累" },
            { id: "m6", sender: "her", content: "算了，不说这些扫兴的了" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "不用在我面前装，想哭就哭吧",
              affectionDelta: 12,
              anxietyDelta: 5,
              nextScene: "scene_05_comfort",
              badgeText: "避风港",
            },
            {
              id: "b",
              label: "B",
              text: "别太难过了，父母有时候是不理解",
              affectionDelta: 5,
              anxietyDelta: 1,
              nextScene: "scene_05_comfort",
              badgeText: "共情",
            },
            {
              id: "c",
              label: "C",
              text: "他们也是为你好，多沟通试试",
              affectionDelta: 0,
              anxietyDelta: 0,
              nextScene: "scene_05_comfort",
              badgeText: "理智",
            },
            {
              id: "d",
              label: "D",
              text: "清官难断家务事，这我也帮不了你",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_05_comfort",
              badgeText: "推开",
            },
          ],
        },
        {
          id: "scene_05_confide_skip",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            { id: "m2", sender: "her", content: "哦，那你睡吧" },
          ],
          autoNext: "scene_06",
        },
        {
          id: "scene_05_comfort",
          chapter: 2,
          title: "感觉你懂我",
          timeLabel: "周四 凌晨 00:10",
          puaTacticUsed: "Intermittent Reinforcement",
          messages: [
            { id: "m1", sender: "her", content: "你知道吗" },
            {
              id: "m2",
              sender: "her",
              content: "在学校每天都要装作很开心的样子，挺累的",
            },
            { id: "m3", sender: "her", content: "感觉只有跟你说话不用装" },
            { id: "m4", sender: "her", content: "谢谢你听我倒苦水" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "以后有什么委屈，随时找我",
              affectionDelta: 10,
              anxietyDelta: 4,
              nextScene: "scene_05_sleep",
              badgeText: "承诺",
            },
            {
              id: "b",
              label: "B",
              text: "能帮到你就好，别想太多",
              affectionDelta: 6,
              anxietyDelta: 1,
              nextScene: "scene_05_sleep",
              badgeText: "安慰",
            },
            {
              id: "c",
              label: "C",
              text: "你室友不听你说吗？",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_05_sleep",
              badgeText: "直男",
            },
            {
              id: "d",
              label: "D",
              text: "早点睡吧，太晚了",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_05_sleep",
              badgeText: "催眠",
            },
          ],
        },
        {
          id: "scene_05_sleep",
          chapter: 2,
          title: "晚安",
          timeLabel: "周四 凌晨 00:45",
          messages: [
            { id: "m1", sender: "her", content: "嗯！心情好多了" },
            { id: "m2", sender: "her", content: "不占用你睡觉时间啦" },
            { id: "m3", sender: "her", content: "遇见你真好🌙" },
            { id: "a1", sender: "me", content: "晚安，好好睡一觉", delay: 800 },
          ],
          autoNext: "scene_06",
        },
        {
          id: "scene_06",
          chapter: 3,
          title: "早安，梦到你了",
          timeLabel: "周四 早上 07:55",
          puaTacticUsed: "Future Faking",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周四 早上 07:55",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "第三天。比昨天更早，手机震动了——",
              delay: 700,
            },
            { id: "m1", sender: "her", content: "早呀☀️" },
            { id: "m2", sender: "her", content: "昨晚居然梦到你了" },
            { id: "m3", sender: "her", content: "好神奇，明明才认识没几天" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "哈哈真的？梦见我在干嘛？",
              affectionDelta: 8,
              anxietyDelta: 4,
              nextScene: "scene_06_dream_a",
              badgeText: "投入",
            },
            {
              id: "b",
              label: "B",
              text: "早，做梦这种事说不准的",
              affectionDelta: 3,
              anxietyDelta: 1,
              nextScene: "scene_06_dream_b",
              badgeText: "淡然",
            },
            {
              id: "c",
              label: "C",
              text: "这么巧，我昨晚也想到你了",
              affectionDelta: 12,
              anxietyDelta: 6,
              nextScene: "scene_06_dream_c",
              badgeText: "上头",
            },
            {
              id: "d",
              label: "D",
              text: "可能因为白天刚聊过天吧",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_06_dream_d",
              badgeText: "理性",
            },
          ],
        },
        {
          id: "scene_06_dream_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "梦见你在图书馆对着我笑" },
            {
              id: "m2",
              sender: "her",
              content: "虽然平时看你挺高冷的，但笑起来还挺好看",
            },
          ],
          autoNext: "scene_06_plan",
        },
        {
          id: "scene_06_dream_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "知道啦知道啦，大理智男" },
            { id: "m2", sender: "her", content: "但我梦得很清楚嘛" },
          ],
          autoNext: "scene_06_plan",
        },
        {
          id: "scene_06_dream_c",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "哇哦" },
            { id: "m2", sender: "her", content: "那我们这算是心有灵犀咯？" },
          ],
          autoNext: "scene_06_plan",
        },
        {
          id: "scene_06_dream_d",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你这人真是一点浪漫细胞都没有",
            },
            { id: "m2", sender: "her", content: "就不能哄哄我说是缘分吗哼" },
          ],
          autoNext: "scene_06_plan",
        },
        {
          id: "scene_06_plan",
          chapter: 3,
          title: "期末后去云南",
          timeLabel: "周四 早上 08:18",
          puaTacticUsed: "Future Faking",
          messages: [
            { id: "m1", sender: "her", content: "对了" },
            { id: "m2", sender: "her", content: "放假好想去云南啊" },
            {
              id: "m3",
              sender: "her",
              content: "去大理看海吹风，想想就好解压",
            },
            { id: "m4", sender: "her", content: "你要不要一起呀👀" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "好啊！我也一直想去没去成",
              affectionDelta: 10,
              anxietyDelta: 5,
              nextScene: "scene_06_plan_reply_a",
              badgeText: "憧憬",
            },
            {
              id: "b",
              label: "B",
              text: "可以啊，到时候看时间安不安排得开",
              affectionDelta: 4,
              anxietyDelta: 1,
              nextScene: "scene_06_plan_reply_b",
              badgeText: "谨慎",
            },
            {
              id: "c",
              label: "C",
              text: "期末还早呢，到时候再说吧",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_06_plan_reply_c",
              badgeText: "务实",
            },
            {
              id: "d",
              label: "D",
              text: "咱俩才认识三天就约旅行？",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_06_plan_reply_d",
              badgeText: "清醒",
            },
          ],
        },
        {
          id: "scene_06_plan_reply_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "那就这么说定啦！不许反悔" },
            { id: "m2", sender: "her", content: "去上课咯，下午聊~" },
          ],
          autoNext: "scene_07",
        },
        {
          id: "scene_06_plan_reply_b",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "哎呀先答应我嘛，时间总会有的",
            },
            { id: "m2", sender: "her", content: "我先去上课啦，拜拜" },
          ],
          autoNext: "scene_07",
        },
        {
          id: "scene_06_plan_reply_c",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "真没意思" },
            { id: "m2", sender: "her", content: "做个梦都不陪我，上课去了略" },
          ],
          autoNext: "scene_07",
        },
        {
          id: "scene_06_plan_reply_d",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "想想也不行嘛" },
            {
              id: "m2",
              sender: "her",
              content: "你防备心真的很重哎，我去上课了",
            },
          ],
          autoNext: "scene_07",
        },
        {
          id: "scene_07",
          chapter: 3,
          title: "追求者",
          timeLabel: "周四 下午 14:30",
          puaTacticUsed: "Triangulation",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周四 下午 14:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "下午，她发来消息，语气带着些委屈——",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "哎" },
            { id: "m2", sender: "her", content: "烦死了" },
            {
              id: "m3",
              sender: "her",
              content: "昨天遇到个高中男同学，非要跟我表白",
            },
            {
              id: "m4",
              sender: "her",
              content: "我都刻意躲着他了，还是一直发消息",
            },
            { id: "m5", sender: "her", content: "为什么总遇到这种事啊，好累" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "说明你长得好看招人喜欢啊，那你对他有感觉吗？",
              affectionDelta: 10,
              anxietyDelta: 6,
              nextScene: "scene_07_triangle_a",
              badgeText: "上套",
            },
            {
              id: "b",
              label: "B",
              text: "不喜欢就直接拒绝，别拖着",
              affectionDelta: 4,
              anxietyDelta: 1,
              nextScene: "scene_07_triangle_b",
              badgeText: "建议",
            },
            {
              id: "c",
              label: "C",
              text: "跟我抱怨这个干嘛？",
              affectionDelta: 0,
              anxietyDelta: 0,
              nextScene: "scene_07_triangle_c",
              badgeText: "质疑",
            },
            {
              id: "d",
              label: "D",
              text: "你还挺抢手",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_07_triangle_d",
              badgeText: "冷眼",
            },
          ],
        },
        {
          id: "scene_07_triangle_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "完全没感觉好吗" },
            {
              id: "m2",
              sender: "her",
              content: "我喜欢那种安静稳重的，不是他这种死缠烂打的",
            },
          ],
          autoNext: "scene_07_main",
        },
        {
          id: "scene_07_triangle_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "早拒绝了呀，但他还是不死心" },
            { id: "m2", sender: "her", content: "男生是不是都听不懂拒绝啊" },
          ],
          autoNext: "scene_07_main",
        },
        {
          id: "scene_07_triangle_c",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "就是心烦嘛，想找个信任的人吐槽一下",
            },
            { id: "m2", sender: "her", content: "你要是不愿意听就算了" },
          ],
          autoNext: "scene_07_main",
        },
        {
          id: "scene_07_triangle_d",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "你是在阴阳怪气吗" },
            {
              id: "m2",
              sender: "her",
              content: "我又不是故意的，真的觉得很困扰",
            },
          ],
          autoNext: "scene_07_main",
        },
        {
          id: "scene_07_main",
          chapter: 3,
          title: "顺其自然",
          timeLabel: "周四 下午 14:52",
          puaTacticUsed: "Triangulation",
          messages: [
            { id: "a1", sender: "me", content: "那你打算怎么办？", delay: 1e3 },
            { id: "m1", sender: "her", content: "冷处理呗" },
            {
              id: "m2",
              sender: "her",
              content: "反正感情这种事，我只相信自己的第一直觉",
            },
            {
              id: "m3",
              sender: "her",
              content: "感觉对了就对了，没感觉怎么追都没用",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "那……你觉得我对了吗？",
              affectionDelta: 12,
              anxietyDelta: 8,
              nextScene: "scene_07_main_reply_a",
              badgeText: "越界",
            },
            {
              id: "b",
              label: "B",
              text: "确实，强扭的瓜不甜",
              affectionDelta: 3,
              anxietyDelta: 1,
              nextScene: "scene_07_main_reply_b",
              badgeText: "平和",
            },
            {
              id: "c",
              label: "C",
              text: "那你现在到底有喜欢的人吗？",
              affectionDelta: 5,
              anxietyDelta: 2,
              nextScene: "scene_07_main_reply_c",
              badgeText: "追问",
            },
            {
              id: "d",
              label: "D",
              text: "你说得好像很懂一样",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_07_main_reply_d",
              badgeText: "调侃",
            },
          ],
        },
        {
          id: "scene_07_main_reply_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "你猜？" },
            { id: "m2", sender: "her", content: "反正跟你聊天我还挺开心的" },
          ],
          autoNext: "scene_07_leave",
        },
        {
          id: "scene_07_main_reply_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "就是说啊" },
            { id: "m2", sender: "her", content: "顺其自然最好啦" },
          ],
          autoNext: "scene_07_leave",
        },
        {
          id: "scene_07_main_reply_c",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "秘密~" },
            { id: "m2", sender: "her", content: "以后你就知道啦" },
          ],
          autoNext: "scene_07_leave",
        },
        {
          id: "scene_07_main_reply_d",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "女生的直觉本来就很准好嘛" },
          ],
          autoNext: "scene_07_leave",
        },
        {
          id: "scene_07_leave",
          chapter: 3,
          title: "去买东西了",
          timeLabel: "周四 下午 16:10",
          messages: [
            { id: "m1", sender: "her", content: "不说这个烦心事了" },
            {
              id: "m2",
              sender: "her",
              content: "我下楼去校园超市买点东西，晚上聊~",
            },
            { id: "a1", sender: "me", content: "好", delay: 800 },
          ],
          autoNext: "scene_08",
        },
        {
          id: "scene_08",
          chapter: 3,
          title: "差了30块",
          timeLabel: "周四 晚上 20:45",
          puaTacticUsed: "Financial Exploitation",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周四 晚上 20:45",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "晚上，她发来一张照片——",
              delay: 700,
            },
            {
              id: "m1",
              sender: "her",
              content: "[图片：一个很精致的星之卡比小夜灯]",
            },
            {
              id: "m2",
              sender: "her",
              content: "呜呜呜，刚在超市看到这个，好想要",
            },
            { id: "m3", sender: "her", content: "但是这个月生活费超标了😭" },
            { id: "a1", sender: "me", content: "多少钱啊？", delay: 1500 },
            { id: "m4", sender: "her", content: "其实也不贵，就差30块钱" },
            {
              id: "m5",
              sender: "her",
              content: "算了，只能忍痛割爱了，等下个月吧",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "[微信红包] 拿去买吧，就当送你的小礼物",
              affectionDelta: 8,
              anxietyDelta: 8,
              nextScene: "scene_08_money_a",
              badgeText: "发红包",
            },
            {
              id: "b",
              label: "B",
              text: "下个月发了生活费再买呗，东西又跑不了",
              affectionDelta: 2,
              anxietyDelta: 0,
              nextScene: "scene_08_money_b",
              badgeText: "软拒",
            },
            {
              id: "c",
              label: "C",
              text: "淘宝搜一下同款，肯定比实体店便宜一半",
              affectionDelta: 1,
              anxietyDelta: 0,
              nextScene: "scene_08_money_c",
              badgeText: "绕开",
            },
            {
              id: "d",
              label: "D",
              text: "差30块？你找你室友借一下不就好了",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_08_money_d",
              badgeText: "直男斩",
            },
          ],
        },
        {
          id: "scene_08_money_a",
          chapter: 3,
          title: "谢谢老板",
          timeLabel: "周四 晚上 21:02",
          puaTacticUsed: "Guilt Tripping",
          messages: [
            { id: "m1", sender: "her", content: "哇！！！" },
            { id: "m2", sender: "her", content: "谢谢老板！你也太好了吧😭" },
            {
              id: "m3",
              sender: "her",
              content: "下个月发生活费了我一定请你喝奶茶！",
            },
            {
              id: "m4",
              sender: "her",
              content: "把它放在床头，就感觉是你陪着我了嘿嘿",
            },
          ],
          autoNext: "scene_08_night",
        },
        {
          id: "scene_08_money_b",
          chapter: 3,
          title: "也对",
          timeLabel: "周四 晚上 21:02",
          messages: [
            { id: "m1", sender: "her", content: "也只能这样啦" },
            { id: "m2", sender: "her", content: "希望下个月它还没被买走吧🥺" },
          ],
          autoNext: "scene_08_night",
        },
        {
          id: "scene_08_money_c",
          chapter: 3,
          title: "网上同款",
          timeLabel: "周四 晚上 21:02",
          messages: [
            { id: "m1", sender: "her", content: "网上的质感都不太好嘛" },
            { id: "m2", sender: "her", content: "算了算了，不买了" },
          ],
          autoNext: "scene_08_night",
        },
        {
          id: "scene_08_money_d",
          chapter: 3,
          title: "不好意思",
          timeLabel: "周四 晚上 21:02",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "哎呀，因为这点小钱张口借，多不好意思啊",
            },
            { id: "m2", sender: "her", content: "不要啦" },
          ],
          autoNext: "scene_08_night",
        },
        {
          id: "scene_08_night",
          chapter: 3,
          title: "晚安",
          timeLabel: "周四 晚上 22:30",
          messages: [
            { id: "m1", sender: "her", content: "好啦，我回宿舍洗漱咯" },
            { id: "m2", sender: "her", content: "今天聊得挺开心的，晚安~" },
            { id: "m3", sender: "me", content: "晚安", delay: 700 },
          ],
          autoNext: "scene_09",
        },
        {
          id: "scene_09",
          chapter: 4,
          title: "断崖式冷漠",
          timeLabel: "周五 上午 10:30",
          puaTacticUsed: "Hot and Cold",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 上午 10:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "第四天。习惯了前三天每天早上的问候，今天她的对话框却静悄悄的。",
              delay: 1e3,
            },
            {
              id: "a1",
              sender: "me",
              content: "早呀，今天满课吗？",
              delay: 800,
            },
            { id: "s2", sender: "system", content: "……", delay: 1500 },
            {
              id: "s3",
              sender: "system",
              content: "三个小时过去了，没有回复。",
              delay: 1500,
            },
            { id: "a2", sender: "me", content: "吃午饭没？", delay: 1e3 },
            {
              id: "s4",
              sender: "system",
              content:
                "依然没有动静。昨天那个缠着你聊天的女孩，好像突然消失了。",
              delay: 2e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "你没事吧？怎么一直不回消息？",
              affectionDelta: 2,
              anxietyDelta: 10,
              nextScene: "scene_09_cold_a",
              badgeText: "焦虑",
            },
            {
              id: "b",
              label: "B",
              text: "在忙的话忙完说一声哦",
              affectionDelta: 1,
              anxietyDelta: 6,
              nextScene: "scene_09_cold_b",
              badgeText: "体贴",
            },
            {
              id: "c",
              label: "C",
              text: "（撤回上一条消息）",
              affectionDelta: -2,
              anxietyDelta: 4,
              nextScene: "scene_09_cold_c",
              badgeText: "内耗",
            },
            {
              id: "d",
              label: "D",
              text: "（放下手机，不管了）",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_09_cold_d",
              badgeText: "自尊",
            },
          ],
        },
        {
          id: "scene_09_cold_a",
          chapter: 4,
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 下午 16:40",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "刚看手机" },
            { id: "m2", sender: "her", content: "能有啥事，至于吗" },
          ],
          autoNext: "scene_09_excuse",
        },
        {
          id: "scene_09_cold_b",
          chapter: 4,
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 下午 16:40",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "刚忙完" },
            { id: "m2", sender: "her", content: "怎么了" },
          ],
          autoNext: "scene_09_excuse",
        },
        {
          id: "scene_09_cold_c",
          chapter: 4,
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 下午 16:40",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "你撤回啥了" },
            { id: "m2", sender: "her", content: "刚醒没看到" },
          ],
          autoNext: "scene_09_excuse",
        },
        {
          id: "scene_09_cold_d",
          chapter: 4,
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 下午 16:40",
              delay: 800,
            },
            {
              id: "s1",
              sender: "system",
              content: "直到快吃晚饭的时候，她才终于诈尸。",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "刚看手机。" },
          ],
          autoNext: "scene_09_excuse",
        },
        {
          id: "scene_09_excuse",
          chapter: 4,
          title: "敷衍的借口",
          timeLabel: "周五 下午 16:42",
          puaTacticUsed: "Hot and Cold",
          messages: [
            { id: "m1", sender: "her", content: "下午没看手机，手机静音了" },
            { id: "m2", sender: "her", content: "怎么啦找我有事？" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没事，看你没回有点担心你",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "scene_09_excuse_reply_a",
              badgeText: "卑微",
            },
            {
              id: "b",
              label: "B",
              text: "找你聊天啊，昨天聊得不是挺好",
              affectionDelta: 2,
              anxietyDelta: 3,
              nextScene: "scene_09_excuse_reply_b",
              badgeText: "试探",
            },
            {
              id: "c",
              label: "C",
              text: "消失一整天，我还以为我被删了",
              affectionDelta: -2,
              anxietyDelta: 2,
              nextScene: "scene_09_excuse_reply_c",
              badgeText: "抱怨",
            },
            {
              id: "d",
              label: "D",
              text: "没看手机？朋友圈你倒是点赞了啊",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_09_excuse_reply_d",
              badgeText: "戳穿",
            },
          ],
        },
        {
          id: "scene_09_excuse_reply_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "这在学校里能出什么事呀" },
            { id: "m2", sender: "her", content: "你别乱想" },
          ],
          autoNext: "scene_09_warm",
        },
        {
          id: "scene_09_excuse_reply_b",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "哎呀今天事多嘛" },
            { id: "m2", sender: "her", content: "我又不是每天都没事做" },
          ],
          autoNext: "scene_09_warm",
        },
        {
          id: "scene_09_excuse_reply_c",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "不至于吧……" },
            {
              id: "m2",
              sender: "her",
              content: "我只是没看微信而已，怎么感觉你怨气很大",
            },
          ],
          autoNext: "scene_09_warm",
        },
        {
          id: "scene_09_excuse_reply_d",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "你还监视我朋友圈？" },
            {
              id: "m2",
              sender: "her",
              content: "我就刷了一下没点开聊天框不行吗，真让人窒息",
            },
          ],
          autoNext: "scene_09_warm",
        },
        {
          id: "scene_09_warm",
          chapter: 4,
          title: "晚上又热了",
          timeLabel: "周五 晚上 22:15",
          puaTacticUsed: "Gaslighting",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周五 晚上 22:15",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "晚上，正当你以为今天就这样结束了，她却像个没事人一样突然发来消息——",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "呜呜呜，今天累死了" },
            { id: "m2", sender: "her", content: "你晚上怎么都不找我聊天了🥺" },
            {
              id: "m3",
              sender: "her",
              content: "是不是嫌我白天没秒回，生我气啦？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没有生气，就是怕打扰你",
              affectionDelta: 8,
              anxietyDelta: 5,
              nextScene: "scene_09_night_a",
              badgeText: "妥协",
            },
            {
              id: "b",
              label: "B",
              text: "你白天那个态度，我哪敢找你",
              affectionDelta: 4,
              anxietyDelta: 2,
              nextScene: "scene_09_night_b",
              badgeText: "委屈",
            },
            {
              id: "c",
              label: "C",
              text: "我也在忙",
              affectionDelta: 0,
              anxietyDelta: 0,
              nextScene: "scene_09_night_c",
              badgeText: "冷淡",
            },
            {
              id: "d",
              label: "D",
              text: "你这脸变挺快啊",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_09_night_d",
              badgeText: "清醒",
            },
          ],
        },
        {
          id: "scene_09_night_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "不会打扰呀" },
            {
              id: "m2",
              sender: "her",
              content: "白天是真有事嘛，以后我尽量早点回你，不生气了好不好~",
            },
            { id: "a1", sender: "me", content: "好，早点休息吧", delay: 800 },
          ],
          autoNext: "scene_10",
        },
        {
          id: "scene_09_night_b",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "好啦好啦，怪我没解释清楚" },
            { id: "m2", sender: "her", content: "别这么小气嘛，给你赔个不是" },
            { id: "a1", sender: "me", content: "没生气，早点睡吧", delay: 800 },
          ],
          autoNext: "scene_10",
        },
        {
          id: "scene_09_night_c",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "哦……" },
            { id: "m2", sender: "her", content: "那我不烦你了，你忙吧" },
          ],
          autoNext: "scene_10",
        },
        {
          id: "scene_09_night_d",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            {
              id: "m2",
              sender: "her",
              content: "我主动找你你还阴阳怪气，算了，睡了",
            },
          ],
          autoNext: "scene_10",
        },
        {
          id: "scene_10",
          chapter: 5,
          title: "你主动发了三条",
          timeLabel: "周六 上午 09:45",
          puaTacticUsed: "Intermittent Reinforcement",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周六 上午 09:45",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "第五天，周六。昨晚她说了句晚安就消失了，你心里有些悬着，忍不住发了消息——",
              delay: 900,
            },
            {
              id: "a1",
              sender: "me",
              content: "早，昨晚怎么没回我",
              delay: 800,
            },
            {
              id: "a2",
              sender: "me",
              content: "昨天下午聊的那些，我是认真的",
              delay: 1200,
            },
            {
              id: "a3",
              sender: "me",
              content: "最近总感觉有点摸不透你在想什么",
              delay: 1e3,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "消息发出去了。你盯着屏幕，等待那个熟悉的“对方正在输入...”。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "十分钟。半小时。一个小时。毫无回应。",
              delay: 1500,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "再发：是我说错什么了吗？",
              replyText: "是我说错什么了吗？",
              affectionDelta: 2,
              anxietyDelta: 12,
              nextScene: "scene_10_ans_a",
              badgeText: "内耗",
            },
            {
              id: "b",
              label: "B",
              text: "再发：看到了回一下",
              replyText: "看到了回一下",
              affectionDelta: 0,
              anxietyDelta: 8,
              nextScene: "scene_10_ans_b",
              badgeText: "催促",
            },
            {
              id: "c",
              label: "C",
              text: "（强忍着不发，等她）",
              replyText: "",
              affectionDelta: -1,
              anxietyDelta: 5,
              nextScene: "scene_10_ans_c",
              badgeText: "憋屈",
            },
            {
              id: "d",
              label: "D",
              text: "（切出微信，打游戏去了）",
              replyText: "",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_10_ans_d",
              badgeText: "脱敏",
            },
          ],
        },
        {
          id: "scene_10_ans_a",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "又过了两个小时。",
              delay: 1e3,
            },
          ],
          autoNext: "scene_10_silence_main",
        },
        {
          id: "scene_10_ans_b",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "又过了两个小时。",
              delay: 1e3,
            },
          ],
          autoNext: "scene_10_silence_main",
        },
        {
          id: "scene_10_ans_c",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "在漫长的煎熬中，时间来到了中午。",
              delay: 1e3,
            },
          ],
          autoNext: "scene_10_silence_main",
        },
        {
          id: "scene_10_ans_d",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你打完两把游戏，看了一眼手机。",
              delay: 1e3,
            },
          ],
          autoNext: "scene_10_silence_main",
        },
        {
          id: "scene_10_silence_main",
          chapter: 5,
          title: "两小时后：嗯",
          timeLabel: "周六 中午 12:52",
          puaTacticUsed: "Intermittent Reinforcement",
          messages: [
            { id: "m1", sender: "her", content: "刚醒" },
            { id: "m2", sender: "her", content: "昨晚太困了直接睡着了" },
            { id: "m3", sender: "her", content: "你发那些我都看到了" },
            { id: "m4", sender: "her", content: "但不知道怎么回" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "不知道怎么回是什么意思？",
              affectionDelta: 2,
              anxietyDelta: 10,
              nextScene: "scene_10_cold_ans_a",
              badgeText: "追问",
            },
            {
              id: "b",
              label: "B",
              text: "没关系，你可以慢慢想",
              affectionDelta: 1,
              anxietyDelta: 6,
              nextScene: "scene_10_cold_ans_b",
              badgeText: "卑微",
            },
            {
              id: "c",
              label: "C",
              text: "好的，知道了",
              affectionDelta: -2,
              anxietyDelta: 2,
              nextScene: "scene_10_cold_ans_c",
              badgeText: "克制",
            },
            {
              id: "d",
              label: "D",
              text: "睡到现在？我以为你失踪了",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_10_cold_ans_d",
              badgeText: "不满",
            },
          ],
        },
        {
          id: "scene_10_cold_ans_a",
          chapter: 5,
          messages: [{ id: "m1", sender: "her", content: "就是字面意思啊" }],
          autoNext: "scene_10_cold_main",
        },
        {
          id: "scene_10_cold_ans_b",
          chapter: 5,
          messages: [{ id: "m1", sender: "her", content: "嗯……" }],
          autoNext: "scene_10_cold_main",
        },
        {
          id: "scene_10_cold_ans_c",
          chapter: 5,
          messages: [{ id: "m1", sender: "her", content: "你是不是生气了" }],
          autoNext: "scene_10_cold_main",
        },
        {
          id: "scene_10_cold_ans_d",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "周末多睡会怎么了嘛" },
          ],
          autoNext: "scene_10_cold_main",
        },
        {
          id: "scene_10_cold_main",
          chapter: 5,
          title: "让我想想",
          timeLabel: "周六 中午 13:05",
          puaTacticUsed: "Hot and Cold",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "其实我最近状态真的很差，脑子很乱",
            },
            {
              id: "m2",
              sender: "her",
              content: "我觉得现在这样聊聊天不挺好的吗",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "顺其自然不好吗，非要把话说那么明白，搞得我都不知道怎么面对你了",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "对不起，是我给你的压力太大了",
              affectionDelta: 4,
              anxietyDelta: 8,
              nextScene: "scene_10_cold_leave",
              badgeText: "揽责",
            },
            {
              id: "b",
              label: "B",
              text: "好，那我们先顺其自然",
              affectionDelta: 2,
              anxietyDelta: 5,
              nextScene: "scene_10_cold_leave",
              badgeText: "退让",
            },
            {
              id: "c",
              label: "C",
              text: "是你之前说的话让我误会了",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_10_cold_leave",
              badgeText: "指出",
            },
            {
              id: "d",
              label: "D",
              text: "不喜欢可以直接说，不用吊着我",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_10_cold_leave",
              badgeText: "点破",
            },
          ],
        },
        {
          id: "scene_10_cold_leave",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "我点个外卖，先不说了" },
          ],
          autoNext: "scene_10_money_main",
        },
        {
          id: "scene_10_money_main",
          chapter: 5,
          title: "先借580",
          timeLabel: "周六 下午 15:30",
          puaTacticUsed: "Financial Exploitation",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周六 下午 15:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "下午，她像上午的不愉快完全没发生过一样，突然发来一张截图——",
              delay: 800,
            },
            {
              id: "m1",
              sender: "her",
              content: "[图片：教资面试培训班报名界面，待支付：580元]",
            },
            {
              id: "m2",
              sender: "her",
              content: "烦死了，这个冲刺班今天最后一天打折",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "我上周把钱借给室友应急了，现在自己交不上，找她要她又说没钱",
            },
            {
              id: "a1",
              sender: "me",
              content: "那怎么办？还能拖几天吗",
              delay: 1200,
            },
            { id: "m4", sender: "her", content: "今天就截止了😭" },
            {
              id: "m5",
              sender: "her",
              content: "那个……你能不能先帮我垫一下，580",
            },
            {
              id: "m6",
              sender: "her",
              content: "下周我妈打生活费了立马给你。实在是不想去借网贷了",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "[微信转账] 580.00元。别去借网贷，先拿去用",
              affectionDelta: 8,
              anxietyDelta: 15,
              nextScene: "scene_10_money_ans_a",
              badgeText: "拯救者",
            },
            {
              id: "b",
              label: "B",
              text: "我现在生活费也不太多了，你再问问别的同学？",
              affectionDelta: -3,
              anxietyDelta: 2,
              nextScene: "scene_10_guilt_main",
              badgeText: "软拒",
            },
            {
              id: "c",
              label: "C",
              text: "580有点多，我不方便",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_10_guilt_main",
              badgeText: "拒绝",
            },
            {
              id: "d",
              label: "D",
              text: "上午让我顺其自然，下午找我借600块？",
              affectionDelta: -8,
              anxietyDelta: 0,
              nextScene: "scene_10_guilt_main",
              badgeText: "开喷",
            },
          ],
        },
        {
          id: "scene_10_money_ans_a",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "呜呜呜你真的是个大好人" },
            { id: "m2", sender: "her", content: "我就知道没看错你" },
            { id: "m3", sender: "her", content: "下周一发生活费我就还你！" },
          ],
          autoNext: "scene_11",
        },
        {
          id: "scene_10_guilt_main",
          chapter: 5,
          title: "内疚操控",
          timeLabel: "周六 下午 15:55",
          puaTacticUsed: "Guilt Tripping",
          messages: [
            { id: "m1", sender: "her", content: "……" },
            {
              id: "m2",
              sender: "her",
              content: "算了，我自己想办法去借网贷吧",
            },
            {
              id: "m3",
              sender: "her",
              content: "我也是逼急了才找你的，以为你能懂我的难处",
            },
            {
              id: "m4",
              sender: "her",
              content: "看来是我自作多情了，以为我们已经很熟了",
            },
            { id: "m5", sender: "her", content: "打扰了" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "你别去借网贷，好吧，我转给你",
              affectionDelta: 5,
              anxietyDelta: 12,
              nextScene: "scene_11",
              badgeText: "被套",
            },
            {
              id: "b",
              label: "B",
              text: "不是我不借，是你这态度让我很不舒服",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_11",
              badgeText: "清醒",
            },
            {
              id: "c",
              label: "C",
              text: "大家都是学生，本来就没多少钱，你别道德绑架我",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_11",
              badgeText: "理性",
            },
            {
              id: "d",
              label: "D",
              text: "随你便吧，爱借不借",
              affectionDelta: -7,
              anxietyDelta: 0,
              nextScene: "scene_11",
              badgeText: "直男斩",
            },
          ],
        },
        {
          id: "scene_11",
          chapter: 6,
          title: "就我们知道就好",
          timeLabel: "周日 上午 10:20",
          puaTacticUsed: "Isolation",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周日 上午 10:20",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "第六天。虽然昨晚借钱的事弄得有点尴尬，但她今天还是发来了消息——",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "对了" },
            { id: "m2", sender: "her", content: "你没跟你室友八卦过我吧？" },
            {
              id: "a1",
              sender: "me",
              content: "没啊，怎么突然问这个",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "男生寝室嘴最碎了" },
            {
              id: "m4",
              sender: "her",
              content: "我不喜欢被别人议论，咱俩的事就当是小秘密不行吗🤫",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "放心，我没说，以后也不说",
              affectionDelta: 6,
              anxietyDelta: 3,
              nextScene: "scene_11_ans_a",
              badgeText: "顺从",
            },
            {
              id: "b",
              label: "B",
              text: "随口提过一句，这有什么好隐瞒的",
              affectionDelta: -1,
              anxietyDelta: 0,
              nextScene: "scene_11_ans_b",
              badgeText: "诚实",
            },
            {
              id: "c",
              label: "C",
              text: "你是不信我，还是心虚啊？",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "scene_11_ans_c",
              badgeText: "质疑",
            },
            {
              id: "d",
              label: "D",
              text: "我室友不是那种人，你想多了",
              affectionDelta: -4,
              anxietyDelta: 0,
              nextScene: "scene_11_ans_d",
              badgeText: "护短",
            },
          ],
        },
        {
          id: "scene_11_ans_a",
          chapter: 6,
          messages: [
            { id: "m1", sender: "her", content: "乖啦，就知道你最好" },
            { id: "m2", sender: "her", content: "我就是缺乏安全感嘛" },
          ],
          autoNext: "scene_11_leave",
        },
        {
          id: "scene_11_ans_b",
          chapter: 6,
          messages: [
            { id: "m1", sender: "her", content: "你居然跟他们说了？" },
            {
              id: "m2",
              sender: "her",
              content:
                "你根本不懂女生的感受，我都说了不想被议论，你一点都不尊重我",
            },
          ],
          autoNext: "scene_11_leave",
        },
        {
          id: "scene_11_ans_c",
          chapter: 6,
          messages: [
            { id: "m1", sender: "her", content: "我心虚什么？" },
            {
              id: "m2",
              sender: "her",
              content:
                "我只是跟你倾诉一下我的顾虑，你非要这么阴阳怪气吗，真让人窒息",
            },
          ],
          autoNext: "scene_11_leave",
        },
        {
          id: "scene_11_ans_d",
          chapter: 6,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "行行行，你室友最好，我最无理取闹",
            },
            {
              id: "m2",
              sender: "her",
              content: "我只是想要点隐私，你干嘛反应这么大",
            },
          ],
          autoNext: "scene_11_leave",
        },
        {
          id: "scene_11_leave",
          chapter: 6,
          title: "买饭去了",
          timeLabel: "周日 上午 10:45",
          messages: [
            { id: "m1", sender: "her", content: "算了，不想跟你吵" },
            { id: "m2", sender: "her", content: "我下楼买饭了" },
          ],
          autoNext: "scene_12",
        },
        {
          id: "scene_12",
          chapter: 6,
          title: "消失了一天",
          timeLabel: "周日 下午 14:05",
          puaTacticUsed: "Hot and Cold",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周日 下午 14:05",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "由于上午的不欢而散，你试着主动缓和气氛——",
              delay: 700,
            },
            { id: "a1", sender: "me", content: "买完饭了吗？", delay: 600 },
            {
              id: "s2",
              sender: "system",
              content: "两个小时过去了，没有回复。",
              delay: 1500,
            },
            { id: "a2", sender: "me", content: "还在生气啊？", delay: 600 },
            {
              id: "s3",
              sender: "system",
              content: "又过了三个多小时，天都快黑了，她依然没有任何动静。",
              delay: 1800,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "疯狂弹语音：接电话！",
              replyText: "[语音通话未接听]",
              affectionDelta: 5,
              anxietyDelta: 10,
              nextScene: "scene_12_fake",
              badgeText: "失控",
            },
            {
              id: "b",
              label: "B",
              text: "发消息：到底怎么了你说啊",
              replyText: "到底怎么了你说啊",
              affectionDelta: 1,
              anxietyDelta: 8,
              nextScene: "scene_12_fake",
              badgeText: "焦虑",
            },
            {
              id: "c",
              label: "C",
              text: "不发了，爱回不回",
              replyText: "",
              affectionDelta: -2,
              anxietyDelta: 3,
              nextScene: "scene_12_fake",
              badgeText: "内耗",
            },
            {
              id: "d",
              label: "D",
              text: "不管了，跟室友打球去",
              replyText: "",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_12_fake",
              badgeText: "清醒",
            },
          ],
        },
        {
          id: "scene_12_fake",
          chapter: 6,
          title: "我们不适合",
          timeLabel: "周日 晚上 21:10",
          puaTacticUsed: "Fake Breakup",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周日 晚上 21:10",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "晚上，她终于出现了，但这几条消息像一盆冰水浇在你头上——",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "在吗" },
            { id: "m2", sender: "her", content: "其实我今天想了一整天" },
            { id: "m3", sender: "her", content: "我觉得我们可能真的不太合适" },
            {
              id: "m4",
              sender: "her",
              content:
                "你太直男了，很多时候我都觉得很心累，感觉你给不了我想要的情绪价值",
            },
            {
              id: "m5",
              sender: "her",
              content: "趁我们还没陷太深，还是退回普通朋友吧",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "别啊，我哪里做得不好我改，你别不理我",
              affectionDelta: 15,
              anxietyDelta: 20,
              nextScene: "scene_bad_branch",
              badgeText: "崩溃",
            },
            {
              id: "b",
              label: "B",
              text: "动不动就消失一天然后提朋友，耍我好玩吗？",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_good_branch",
              badgeText: "愤怒",
            },
            {
              id: "c",
              label: "C",
              text: "这几天忽冷忽热的，我也觉得挺累的",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_good_branch",
              badgeText: "释怀",
            },
            {
              id: "d",
              label: "D",
              text: "嗯，好，祝你好运。",
              affectionDelta: -8,
              anxietyDelta: 0,
              nextScene: "scene_good_branch",
              badgeText: "斩断",
            },
          ],
        },
        {
          id: "scene_good_branch",
          chapter: 6,
          title: "你清醒了",
          timeLabel: "周日 晚上 21:35",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你想太多了，我只是最近状态不好",
            },
            { id: "m2", sender: "her", content: "你非要这么绝情我也没办法" },
            {
              id: "s1",
              sender: "system",
              content: "你盯着这句话看了很久。",
              delay: 1200,
            },
            {
              id: "s2",
              sender: "system",
              content:
                '"你想太多了"、"状态不好"……这些套话，你这几天已经听过无数次了。',
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "那些暧昧的试探、画大饼的旅行、还有伸手要钱时的理直气壮，全都是剧本。",
              delay: 1500,
            },
            {
              id: "s4",
              sender: "system",
              content: "你没有再回复。你把手机静音，翻开了手边落灰的专业书。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingTitle: "__RANDOM_GOOD__",
          endingDesc: "__RANDOM_GOOD__",
        },
        {
          id: "scene_bad_branch",
          chapter: 6,
          title: "深陷其中",
          timeLabel: "周日 晚上 21:35",
          puaTacticUsed: "Financial Exploitation",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你卑微地发出了挽留的消息。对面沉默了很久——",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "……你真的那么在乎我吗" },
            { id: "m2", sender: "her", content: "其实我也很痛苦" },
            {
              id: "m3",
              sender: "her",
              content: "我今天一天没回你，是因为我遇到了大麻烦，我怕连累你",
            },
            {
              id: "a1",
              sender: "me",
              content: "怎么了？到底出什么事了你告诉我",
              delay: 1200,
            },
            {
              id: "m4",
              sender: "her",
              content:
                "我之前轻信一个闺蜜，帮她垫了医美分期，现在她人跑了，催收打到了我这里",
            },
            {
              id: "m5",
              sender: "her",
              content: "明天必须要还上3800，不然他们要爆我通讯录了",
            },
            {
              id: "m6",
              sender: "her",
              content:
                "你是我现在唯一信任的人……你能不能帮帮我？这笔钱我发誓会还你！",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "别怕，我把卡里的钱先凑给你",
              affectionDelta: 5,
              anxietyDelta: 20,
              nextScene: "scene_bad_ending",
              badgeText: "万劫不复",
            },
            {
              id: "b",
              label: "B",
              text: "3800？这不可能，你遇到诈骗了吧去报警",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "scene_late_awaken",
              badgeText: "最后觉醒",
            },
            {
              id: "c",
              label: "C",
              text: "刚说分手，看我挽留立马要3800，你当我是傻子？",
              affectionDelta: -8,
              anxietyDelta: 0,
              nextScene: "scene_late_awaken",
              badgeText: "戳穿骗局",
            },
            {
              id: "d",
              label: "D",
              text: "我一个学生哪来这么多钱，我帮不了你",
              affectionDelta: -3,
              anxietyDelta: 0,
              nextScene: "scene_late_awaken",
              badgeText: "无能为力",
            },
          ],
        },
        {
          id: "scene_late_awaken",
          chapter: 6,
          title: "最后的清醒",
          timeLabel: "周日 晚上 21:52",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "呵呵，说什么在乎我，遇到事跑得比谁都快",
            },
            { id: "m2", sender: "her", content: "算我看错人了，互删吧" },
            {
              id: "s1",
              sender: "system",
              content: "看着屏幕上出现的红色感叹号，你忽然觉得无比轻松。",
              delay: 1200,
            },
            {
              id: "s2",
              sender: "system",
              content: "你把聊天记录从头翻了一遍，像是在看一个拙劣的诈骗剧本。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "虽然心里还有些刺痛，但你终于醒了。",
              delay: 1300,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingTitle: "__RANDOM_GOOD__",
          endingDesc: "__RANDOM_GOOD__",
        },
        {
          id: "scene_bad_ending",
          chapter: 6,
          title: "坏结局",
          timeLabel: "两个月后",
          isEnding: !0,
          endingType: "bad",
          endingTitle: "__RANDOM_BAD__",
          endingDesc: "__RANDOM_BAD__",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "为了留住她，你把下个学期的生活费全转了过去。",
              delay: 1200,
            },
            {
              id: "s2",
              sender: "system",
              content:
                '她收了钱，发来一句："谢谢，你真好，等我熬过这段时间就去找你。"。',
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "然后……她消失了。",
              delay: 1500,
            },
            {
              id: "s4",
              sender: "system",
              content: "这一次，是彻底的消失。",
              delay: 1800,
            },
          ],
        },
        {
          id: "tan_scene_01",
          chapter: 1,
          title: "微信破冰与自证陷阱",
          timeLabel: "周五 晚上 23:30",
          puaTacticUsed: "Shit Test (废物测试)",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周五 晚上 23:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "KTV联谊局散场。你整晚都在角落喝酒。",
              delay: 800,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "临走时，谭佳欣主动过来扫了你的微信。回到寝室，收到她的消息。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}，今天全场就你最安静。",
            },
            {
              id: "m2",
              sender: "her",
              content: "是在装深沉，还是在给哪个鱼塘的妹妹回消息呢？🍉",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没有啦，我只是不太会唱歌，绝对没跟别的女生聊天。",
              affectionDelta: -5,
              anxietyDelta: 2,
              nextScene: "tan_scene_01_ans_a",
              badgeText: "自证(舔狗)",
            },
            {
              id: "b",
              label: "B",
              text: "在算你今晚跑调了多少次，大概八次吧。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "tan_scene_01_ans_b",
              badgeText: "推拉(反击)",
            },
            {
              id: "c",
              label: "C",
              text: "真在回消息，刚聊完三个，你是第四个。",
              affectionDelta: 8,
              anxietyDelta: 2,
              nextScene: "tan_scene_01_ans_c",
              badgeText: "夸张(破框)",
            },
            {
              id: "d",
              label: "D",
              text: "刚到宿舍。你今天喝了不少，早点休息。",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "tan_scene_01_ans_d",
              badgeText: "老好人",
            },
          ],
        },
        {
          id: "tan_scene_01_ans_a",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "哈哈哈，这么紧张干嘛，我就随口一问。",
            },
            {
              id: "s1",
              sender: "system",
              content: "她似乎对你失去了探究的兴趣，回复变得敷衍。",
              delay: 1e3,
            },
          ],
          autoNext: "tan_scene_02_main",
        },
        {
          id: "tan_scene_01_ans_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "喂！会不会聊天啊你！" },
            {
              id: "m2",
              sender: "her",
              content: "明明只有两次破音好吗！记仇.jpg",
            },
          ],
          autoNext: "tan_scene_02_main",
        },
        {
          id: "tan_scene_01_ans_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哟，海王本王啊。" },
            {
              id: "m2",
              sender: "her",
              content: "那我拿的还是女四号的剧本咯？失敬失敬。",
            },
          ],
          autoNext: "tan_scene_02_main",
        },
        {
          id: "tan_scene_01_ans_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哦，好的。" },
            { id: "m2", sender: "her", content: "你说话跟我们辅导员似的。" },
          ],
          autoNext: "tan_scene_02_main",
        },
        {
          id: "tan_scene_02_main",
          chapter: 1,
          title: "深夜的情绪陷阱",
          timeLabel: "周六 凌晨 01:15",
          puaTacticUsed: "Vulnerability Trap (示弱陷阱)",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "凌晨一点。朋友圈刷到她刚发的一条仅三天可见：“断舍离。有些沉没成本，该扔就扔。”",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "紧接着，她发来了私聊。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "睡没？" },
            {
              id: "m2",
              sender: "her",
              content: "刚把前任留在我这的最后一样东西扔了。",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "你说，男生分手后是不是都能做到无缝衔接，像个没事人一样？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "别难过，那种渣男不值得。今晚要是睡不着，我随时陪你聊。",
              affectionDelta: -8,
              anxietyDelta: 5,
              nextScene: "tan_scene_02_ans_a",
              badgeText: "情绪垃圾桶",
            },
            {
              id: "b",
              label: "B",
              text: "正常，时间长了就好了。你早点睡，别想太多。",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "tan_scene_02_ans_b",
              badgeText: "敷衍直男",
            },
            {
              id: "c",
              label: "C",
              text: "半夜跟我探讨情感哲学？咨询费按分钟收，微信还是支付宝？",
              affectionDelta: 8,
              anxietyDelta: 2,
              nextScene: "tan_scene_02_ans_c",
              badgeText: "打破框架",
            },
            {
              id: "d",
              label: "D",
              text: "清空旧内存，才能装新系统。挺好的，奖励自己赶紧睡觉吧。",
              affectionDelta: 6,
              anxietyDelta: 0,
              nextScene: "tan_scene_02_ans_d",
              badgeText: "高情商安慰",
            },
          ],
        },
        {
          id: "tan_scene_02_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "谢谢你啊，你人真好。" },
            { id: "m2", sender: "her", content: "但我现在不想聊了，有点累。" },
            {
              id: "s1",
              sender: "system",
              content:
                "你成功拿到了一张好人卡。她在测试中确认了你的低姿态，瞬间失去了挑战欲。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_03_night",
        },
        {
          id: "tan_scene_02_ans_b",
          chapter: 1,
          messages: [{ id: "m1", sender: "her", content: "……行吧，晚安。" }],
          autoNext: "tan_scene_03_night",
        },
        {
          id: "tan_scene_02_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "财迷转世啊你！刚才酝酿好的眼泪都被你气回去了！",
            },
            { id: "m2", sender: "her", content: "不过……心情确实好点儿了。" },
            {
              id: "s1",
              sender: "system",
              content: "你不按套路出牌，反而化解了她沉溺悲伤的情绪。",
              delay: 1200,
            },
          ],
          autoNext: "tan_scene_03_night",
        },
        {
          id: "tan_scene_02_ans_d",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "装新系统……这比喻够程序员的。",
            },
            {
              id: "m2",
              sender: "her",
              content: "借你吉言，希望我的系统别再报BUG了。",
            },
          ],
          autoNext: "tan_scene_03_night",
        },
        {
          id: "tan_scene_03_night",
          chapter: 1,
          title: "晚安",
          timeLabel: "周六 凌晨 01:30",
          messages: [
            { id: "m1", sender: "her", content: "不折腾了，我去洗个脸睡觉。" },
            { id: "m2", sender: "her", content: "晚安咯🌙" },
            { id: "a1", sender: "me", content: "晚安😴", delay: 800 },
          ],
          autoNext: "tan_scene_04",
        },
        {
          id: "tan_scene_04",
          chapter: 2,
          title: "田径场的巧合",
          timeLabel: "周六 下午 18:30",
          puaTacticUsed: "Vulnerability Display",
          messages: [
            {
              id: "t1",
              sender: "system",
              content: "[TIME] 周六 下午 18:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "傍晚你在田径场跑步。刚跑完两圈，手机震了。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "抬头，看你三点钟方向 👀" },
            {
              id: "s2",
              sender: "system",
              content:
                "谭佳欣坐在看台台阶上，手里拿着两瓶无糖乌龙茶，冲你晃了晃。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "你走过去在她旁边坐下，接过了水。",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "跑得满头大汗的，不嫌我没买冰的吧？",
            },
            {
              id: "a1",
              sender: "me",
              content: "谢了。怎么一个人在这？",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "无聊呗，吹吹风 🍃" },
            {
              id: "m4",
              sender: "her",
              content:
                "说实话，你觉得我这人是不是挺有心机的？就是那种……很会拿捏男生的绿茶？🍵",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没有啊，我觉得你挺真实的，别人那是嫉妒。",
              affectionDelta: 2,
              anxietyDelta: 2,
              nextScene: "tan_scene_04_ans_a",
              badgeText: "强行提供价值",
            },
            {
              id: "b",
              label: "B",
              text: "绿不绿茶不知道，但你肯定挺会折腾人的。",
              affectionDelta: 8,
              anxietyDelta: 0,
              nextScene: "tan_scene_04_ans_b",
              badgeText: "调侃打压",
            },
            {
              id: "c",
              label: "C",
              text: "茶艺精湛，毕竟昨晚半夜还发朋友圈钓鱼来着。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "tan_scene_04_ans_c",
              badgeText: "点破框架",
            },
            {
              id: "d",
              label: "D",
              text: "别人怎么看不重要，自己开心就行了。",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "tan_scene_04_ans_d",
              badgeText: "无效敷衍",
            },
          ],
        },
        {
          id: "tan_scene_04_ans_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "你这人嘴还挺甜的嘛。" },
          ],
          autoNext: "tan_scene_05_main",
        },
        {
          id: "tan_scene_04_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "喂！会不会聊天啊你 💢" },
            {
              id: "m2",
              sender: "her",
              content: "我哪里折腾人了？我明明很懂事好不好。",
            },
          ],
          autoNext: "tan_scene_05_main",
        },
        {
          id: "tan_scene_04_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "切，小心眼。看破不说破懂不懂呀 🤫",
            },
          ],
          autoNext: "tan_scene_05_main",
        },
        {
          id: "tan_scene_04_ans_d",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……哦。你说话真像个老头 👴" },
          ],
          autoNext: "tan_scene_05_main",
        },
        {
          id: "tan_scene_05_main",
          chapter: 2,
          title: "情绪断崖",
          timeLabel: "周六 晚上 19:15",
          puaTacticUsed: "Hot and Cold",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "气氛刚好时，她的手机突然响了。来电显示：程。",
              delay: 1e3,
            },
            {
              id: "s2",
              sender: "system",
              content: "她看了一眼屏幕，脸色瞬间沉了下来。",
              delay: 1200,
            },
            { id: "m1", sender: "her", content: "我有点急事，先走了。" },
            {
              id: "a1",
              sender: "me",
              content: "怎么了？需要帮忙吗？",
              delay: 1e3,
            },
            { id: "m2", sender: "her", content: "不用。你跑完早点回去吧。" },
            {
              id: "s4",
              sender: "system",
              content: "她头也不回地快步离开了操场。",
              delay: 1e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（追上去拉住她）到底出什么事了？你这样我不放心！",
              affectionDelta: -5,
              anxietyDelta: 8,
              nextScene: "tan_scene_05_ans_a",
              badgeText: "暴露需求感",
            },
            {
              id: "b",
              label: "B",
              text: "（发微信）遇到麻烦随时跟我说。",
              affectionDelta: 2,
              anxietyDelta: 2,
              nextScene: "tan_scene_05_ans_b",
              badgeText: "备胎式关心",
            },
            {
              id: "c",
              label: "C",
              text: "（无视，继续跑完剩下的两圈）",
              affectionDelta: 10,
              anxietyDelta: -2,
              nextScene: "tan_scene_05_ans_c",
              badgeText: "保持框架",
            },
          ],
        },
        {
          id: "tan_scene_05_ans_a",
          chapter: 2,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你追出去拉住她的胳膊。她猛地甩开你的手。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "我都说了不用你管！别跟着我！😠",
            },
          ],
          autoNext: "tan_scene_06_night",
        },
        {
          id: "tan_scene_05_ans_b",
          chapter: 2,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "消息如石沉大海。她整个晚上都没有回复你。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_06_night",
        },
        {
          id: "tan_scene_05_ans_c",
          chapter: 2,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你没有追上去，跑完步自己去食堂吃了顿麻辣香锅。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_06_night",
        },
        {
          id: "tan_scene_06_night",
          chapter: 2,
          title: "深夜的分享",
          timeLabel: "周日 凌晨 00:00",
          puaTacticUsed: "Intermittent Reinforcement",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "凌晨十二点。一整晚失联的谭佳欣，主动戳了你。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "睡了吗？" },
            {
              id: "a1",
              sender: "me",
              content: "刚准备睡。怎么了？",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "今天下午对不起啊，突然丢下你一个人。",
            },
            {
              id: "m3",
              sender: "her",
              content: "我只是……突然觉得自己很可笑，像个小丑 🤡",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没事，我都懂。难受的话我可以陪你聊聊。",
              affectionDelta: -5,
              anxietyDelta: 5,
              nextScene: "tan_scene_06_ans_a",
              badgeText: "服从测试失败",
            },
            {
              id: "b",
              label: "B",
              text: "太晚了，有什么事明天再说吧，早点睡。",
              affectionDelta: 2,
              anxietyDelta: 0,
              nextScene: "tan_scene_06_ans_b",
              badgeText: "无情打断",
            },
            {
              id: "c",
              label: "C",
              text: "一声对不起就完了？明天去图书馆，你得给我带份手抓饼补偿 🌯",
              affectionDelta: 8,
              anxietyDelta: 0,
              nextScene: "tan_scene_06_ans_c",
              badgeText: "提供情绪价值",
            },
          ],
        },
        {
          id: "tan_scene_06_ans_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "你为什么对我这么好？" },
            {
              id: "m2",
              sender: "her",
              content: "我真的怕我习惯了有你在身边 叹气.jpg",
            },
          ],
          autoNext: "tan_scene_07_sleep",
        },
        {
          id: "tan_scene_06_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……你可真够绝情的 🧊" },
            { id: "m2", sender: "her", content: "算啦，晚安。" },
          ],
          autoNext: "tan_scene_07_sleep",
        },
        {
          id: "tan_scene_06_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "噗……大哥，我都 Emo 成这样了，你还在操心你的早饭？ 🙄",
            },
            {
              id: "m2",
              sender: "her",
              content: "行吧行吧，欠你的。明天中午我去图书馆占座。",
            },
          ],
          autoNext: "tan_scene_07_sleep",
        },
        {
          id: "tan_scene_07_sleep",
          chapter: 2,
          title: "复杂的一天",
          timeLabel: "周日 凌晨 00:15",
          messages: [
            { id: "a1", sender: "me", content: "晚安😴", delay: 800 },
            {
              id: "m1",
              sender: "her",
              content: "知道啦 🐷 晚安。",
              delay: 900,
            },
            {
              id: "s1",
              sender: "system",
              content: "你把手机放到枕边，缓缓的睡着了。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_07",
        },
        {
          id: "tan_scene_07",
          chapter: 3,
          title: "共享的耳机",
          timeLabel: "周日 下午 14:00",
          puaTacticUsed: "Physical Anchoring",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周日 下午 14:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "下午，你独自在图书馆复习专业课。刚坐下没多久，她突然发消息问你在哪。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "十几分钟后，她背着包径直走过来，在你旁边的空位坐下。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "你看书到一半，她突然摘下一只 AirPods，没打招呼直接塞进了你的左耳 🎧",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "这首 Ed Sheeran 的《Perfect》，挺甜的，你听听。🎵",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（心跳加速）嗯，挺好听的。你平时都听这种歌？",
              affectionDelta: -2,
              anxietyDelta: 5,
              nextScene: "tan_scene_07_ans_a",
              badgeText: "轻易沦陷",
            },
            {
              id: "b",
              label: "B",
              text: "（摘下还给她）我在看专业课，这歌太催眠了。",
              affectionDelta: -5,
              anxietyDelta: 0,
              nextScene: "tan_scene_07_ans_b",
              badgeText: "过度防御",
            },
            {
              id: "c",
              label: "C",
              text: "（顺势调大音量）品味不错，但你这耳机该清理了，有耳垢 😒",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "tan_scene_07_ans_c",
              badgeText: "推开再拉近",
            },
          ],
        },
        {
          id: "tan_scene_07_ans_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "看心情咯。" },
            {
              id: "s1",
              sender: "system",
              content:
                "她轻笑着靠得更近了一些，你隐约能闻到她头发上的洗发水香味。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_08_main",
        },
        {
          id: "tan_scene_07_ans_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "……真是不解风情的大木头！🪵" },
            {
              id: "s1",
              sender: "system",
              content: "她一把夺过耳机塞回去，把椅子往旁边挪了挪。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_08_main",
        },
        {
          id: "tan_scene_07_ans_c",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "喂！你瞎说什么！我昨天刚擦的好不好！👊",
            },
            {
              id: "m2",
              sender: "her",
              content: "气死我了，还给我，你自己听敲键盘的声音去吧！",
            },
            {
              id: "s1",
              sender: "system",
              content:
                "她假装生气地抢回耳机，耳朵却红了，嘴角带着掩饰不住的笑意。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_08_main",
        },
        {
          id: "tan_scene_08_main",
          chapter: 3,
          title: "护花使者与廉价工具人",
          timeLabel: "周日 下午 16:30",
          puaTacticUsed: "Triangulation",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "下午四点半，桌上她的手机突然剧烈震动。来电显示：程 📱",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她脸色发白，接起电话压着声音说：“我们已经分手了！你别来学校找我！”",
              delay: 2e3,
            },
            {
              id: "s3",
              sender: "system",
              content: "挂断电话后，她眼眶泛红地看着你。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "对不起，让你看笑话了。他是我前男友……",
            },
            {
              id: "a1",
              sender: "me",
              content: "看出来了。他来找你干嘛？",
              delay: 1200,
            },
            {
              id: "m2",
              sender: "her",
              content: "他说他现在就在图书馆楼下……我有点害怕 🥺",
            },
            {
              id: "m3",
              sender: "her",
              content: "你能不能……送我回宿舍？假装一下我男朋友让他死心？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（热血上头）他敢动你一下试试！走，我带你下去会会他！",
              affectionDelta: -10,
              anxietyDelta: 15,
              nextScene: "tan_scene_08_ans_a",
              badgeText: "工具人实锤",
            },
            {
              id: "b",
              label: "B",
              text: "送你回去可以，但假扮男友就算了，这种烂摊子你自己解决。",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "tan_scene_08_ans_b",
              badgeText: "划清界限",
            },
            {
              id: "c",
              label: "C",
              text: "可以啊，假扮男友时薪两百，牵手加五十，挨打算工伤。微信还是支付宝？ 💰",
              affectionDelta: 12,
              anxietyDelta: 2,
              nextScene: "tan_scene_08_ans_c",
              badgeText: "荒诞解构",
            },
          ],
        },
        {
          id: "tan_scene_08_ans_a",
          chapter: 3,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你冲在前面护送她回宿舍，根本没看到所谓的“前男友”。",
              delay: 2e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "谢谢你……你刚才的样子挺帅的。",
            },
          ],
          autoNext: "tan_scene_day4_start",
        },
        {
          id: "tan_scene_08_ans_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "……知道了，不麻烦你了。" },
            {
              id: "s1",
              sender: "system",
              content: "她冷冷地收拾书包，自己走出了图书馆。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_day4_start",
        },
        {
          id: "tan_scene_08_ans_c",
          chapter: 3,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她酝酿好的眼泪瞬间卡在了眼眶里，气得直跺脚。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你钻钱眼里了是不是！谁要跟你牵手啊！想得美！🤬",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "行了，你别假扮了，你就跟在我后面五米远当个保镖吧，小气鬼！",
            },
          ],
          autoNext: "tan_scene_day4_start",
        },
        {
          id: "tan_scene_day4_start",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你回到宿舍，继续复习着",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_09",
        },
        {
          id: "tan_scene_09",
          chapter: 4,
          title: "消失的她与朋友圈预选",
          timeLabel: "周一 晚上 21:00",
          puaTacticUsed: "Preselection",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周一 晚上 21:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "经历了昨天下午的插曲，她今天一整天都没回微信。",
              delay: 1e3,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "直到晚上九点，她发了条朋友圈：昏暗的清吧，两杯特调鸡尾酒，对面隐约露出男性的胳膊。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "配文：“还是老朋友懂我 🍸”",
              delay: 1e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（私聊质问）昨天还让我装男友，今天就跟别的男生去喝酒？",
              replyText: "昨天还让我装男友，今天就跟别的男生去喝酒？",
              affectionDelta: -10,
              anxietyDelta: 20,
              nextScene: "tan_scene_09_ans_a",
              badgeText: "情绪失控",
            },
            {
              id: "b",
              label: "B",
              text: "（默默点个赞，然后去打游戏）",
              replyText: "",
              affectionDelta: 8,
              anxietyDelta: -5,
              nextScene: "tan_scene_10_main",
              badgeText: "保持框架",
            },
            {
              id: "c",
              label: "C",
              text: "（评论朋友圈）这家酒很难喝，下次带你去个更好的。",
              replyText: "",
              affectionDelta: 2,
              anxietyDelta: 5,
              nextScene: "tan_scene_09_ans_c",
              badgeText: "强行装杯",
            },
          ],
        },
        {
          id: "tan_scene_09_ans_a",
          chapter: 4,
          messages: [
            { id: "s1", sender: "system", content: "一小时后。", delay: 1e3 },
            {
              id: "m1",
              sender: "her",
              content: "你有病吧？我跟谁喝酒需要跟你报备吗？ 🙄",
            },
            {
              id: "m2",
              sender: "her",
              content: "咱们什么关系啊，你管得也太宽了。",
            },
          ],
          autoNext: "tan_scene_10_main",
        },
        {
          id: "tan_scene_09_ans_c",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "几分钟后，你发现她把这条朋友圈删除了，并且没有回复你的评论。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_10_main",
        },
        {
          id: "tan_scene_10_main",
          chapter: 4,
          title: "深夜呼叫",
          timeLabel: "周二 凌晨 02:15",
          puaTacticUsed: "Damsel in Distress",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "凌晨两点一刻。放在床头的手机突然狂震，是谭佳欣打来的微信语音。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "接通后，背景音很嘈杂，像是在街边。",
              delay: 800,
            },
            { id: "m1", sender: "her", content: "喂……你睡了吗？" },
            {
              id: "a1",
              sender: "me",
              content: "大半夜的，怎么了？",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "我在南门外的夜宵摊……我好像喝多了 😵‍💫",
            },
            {
              id: "m3",
              sender: "her",
              content: "同桌几个男的一直想灌醉我……我不认识他们。",
            },
            {
              id: "a2",
              sender: "me",
              content: "旁边有认识的朋友吗？",
              delay: 1200,
            },
            {
              id: "m4",
              sender: "her",
              content: "没有……你能不能来接我一下？我有点害怕。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "别怕！把定位发我，我马上到！",
              replyText: "别怕！把定位发我，我马上到！",
              affectionDelta: -5,
              anxietyDelta: 15,
              nextScene: "tan_scene_10_ans_a",
              badgeText: "随叫随到",
            },
            {
              id: "b",
              label: "B",
              text: "太晚了出不去，让你朋友圈那个老朋友送你吧。",
              replyText: "太晚了出不去，让你朋友圈那个老朋友送你吧。",
              affectionDelta: -8,
              anxietyDelta: 0,
              nextScene: "tan_scene_10_ans_b",
              badgeText: "暴露酸味",
            },
            {
              id: "c",
              label: "C",
              text: "我立刻给辅导员打电话，让他查查是谁大半夜在校外灌女生酒。",
              replyText:
                "你把电话给他们。或者我立刻给辅导员打电话，让他查查是谁大半夜在校外灌女生酒。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "tan_scene_10_ans_c",
              badgeText: "硬核破招",
            },
          ],
        },
        {
          id: "tan_scene_10_ans_a",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你跑出学校赶到夜宵摊，发现她其实很清醒，正和几个人谈笑风生。",
              delay: 2e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "哎呀，我朋友来接我了，那今天就先这样啦。",
            },
          ],
          autoNext: "tan_scene_11_walk",
        },
        {
          id: "tan_scene_10_ans_b",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "电话那头愣住了。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "……你算什么男人！小肚鸡肠！" },
            {
              id: "s2",
              sender: "system",
              content:
                "她气急败坏地挂断了电话。虽然你没去，但你彻底失眠了，心烦意乱地走到宿舍阳台吹风。",
              delay: 2e3,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "半小时后，你看到一个熟悉的身影有些摇晃地走进了校门。你还是忍不住下楼迎了过去。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_11_walk",
        },
        {
          id: "tan_scene_10_ans_c",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "电话那头传来一阵慌乱的动静。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "哎哎哎！找什么辅导员！你有病啊！🤬",
            },
            {
              id: "s2",
              sender: "system",
              content: "她压低了声音。",
              delay: 800,
            },
            {
              id: "m2",
              sender: "her",
              content: "我没事……我就是找个借口溜出来。",
            },
            {
              id: "m3",
              sender: "her",
              content: "我已经往回走了，你到学校侧门接我一下总行了吧。",
            },
            {
              id: "a1",
              sender: "me",
              content: "行，侧门见。别磨蹭。",
              delay: 1e3,
            },
          ],
          autoNext: "tan_scene_11_walk",
        },
        {
          id: "tan_scene_11_walk",
          chapter: 4,
          title: "免责声明",
          timeLabel: "周二 凌晨 03:00",
          puaTacticUsed: "Disclaimer",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "回宿舍的路上，路灯很暗。",
              delay: 1e3,
            },
            {
              id: "s2",
              sender: "system",
              content: "她突然停下脚步，转过身看着你。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "你今天为什么要管我？" },
            {
              id: "a1",
              sender: "me",
              content: "大半夜的，总不能看着你一个人在外面发疯。",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "其实我这人烂透了。自私、虚荣、习惯了享受别人的讨好……",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "你是个好人。所以……千万别喜欢上我，好吗？我不想伤害你 🥀",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（抱住她）我不准你这么说自己！不管你什么样我都喜欢。",
              replyText: "我不准你这么说自己！不管你什么样我都喜欢。",
              affectionDelta: -15,
              anxietyDelta: 25,
              nextScene: "tan_scene_11_ans_a",
              badgeText: "彻底沦陷",
            },
            {
              id: "b",
              label: "B",
              text: "（冷笑）自我认知还挺清晰的。放心，我也没打算喜欢你。",
              replyText: "自我认知还挺清晰的。放心，我也没打算喜欢你。",
              affectionDelta: -5,
              anxietyDelta: -5,
              nextScene: "tan_scene_11_ans_b",
              badgeText: "降维打击",
            },
            {
              id: "c",
              label: "C",
              text: "（叹气）你想多了。我出来只是因为你还欠我一顿早饭，怕你赖账。🍳",
              replyText: "你想多了。我出来只是因为你还欠我一顿早饭，怕你赖账。",
              affectionDelta: 12,
              anxietyDelta: 0,
              nextScene: "tan_scene_11_ans_c",
              badgeText: "幽默化解",
            },
          ],
        },
        {
          id: "tan_scene_11_ans_a",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她靠在你怀里。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "这是你自己选的，以后别后悔。",
            },
          ],
          autoNext: "tan_scene_day5_start",
        },
        {
          id: "tan_scene_11_ans_b",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她猛地抬起头，不可置信地看着你。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "你！……算你狠！" },
            {
              id: "s2",
              sender: "system",
              content: "她转身快步跑回了宿舍。",
              delay: 1e3,
            },
          ],
          autoNext: "tan_scene_day5_start",
        },
        {
          id: "tan_scene_11_ans_c",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她愣了足足五秒，忍不住扑哧一声笑了。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "……你真是我见过最破坏气氛的男生！",
            },
            {
              id: "m2",
              sender: "her",
              content: "行，为了你的早饭，赶紧回去吧，冻死我了。",
            },
          ],
          autoNext: "tan_scene_day5_start",
        },
        {
          id: "tan_scene_day5_start",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "看着她走进宿舍楼，你转身往回走。夜风吹过，把今晚的荒唐吹散了大半。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_12",
        },
        {
          id: "tan_scene_12",
          chapter: 5,
          title: "长椅上的坦白局",
          timeLabel: "周二 下午 17:00",
          puaTacticUsed: "Vulnerability Display",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周二 下午 17:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "下午五点，她突然发来一条消息。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "我在你们计科楼下的长椅上。" },
            {
              id: "m2",
              sender: "her",
              content: "如果你五点半下课没出来，我就当你把我拉黑了。",
            },
            {
              id: "s2",
              sender: "system",
              content: "你合上电脑下楼。她穿着最简单的白T恤和牛仔裤，没化妆。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content: "看到你走过来，她紧紧抓着帆布包，眼神有些闪躲。",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "你来了。" },
            { id: "a1", sender: "me", content: "嗯，找我什么事？", delay: 1e3 },
            {
              id: "m4",
              sender: "her",
              content:
                "其实昨天晚上我根本没醉。我就是想看看，你会不会像其他人一样被我耍得团团转。",
            },
            {
              id: "a2",
              sender: "me",
              content: "看出来了，你演技挺一般的。",
              delay: 1200,
            },
            {
              id: "m5",
              sender: "her",
              content:
                "我习惯了看着他们在我的圈子里争风吃醋，因为那样我才觉得安全。",
            },
            {
              id: "s4",
              sender: "system",
              content: "她的眼眶微红。",
              delay: 800,
            },
            {
              id: "m6",
              sender: "her",
              content:
                "但你为什么不按套路出牌？你让我觉得自己像个演独角戏的小丑 🤡",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（心软安抚）别难过了，不管你以前怎么样，以后我都会陪着你。",
              replyText: "别难过了，不管你以前怎么样，以后我都会陪着你。",
              affectionDelta: -5,
              anxietyDelta: 8,
              nextScene: "tan_scene_12_ans_a",
              badgeText: "过早接纳",
            },
            {
              id: "b",
              label: "B",
              text: "（冷笑）这就演不下去了？你的段位也不过如此。",
              replyText: "这就演不下去了？你的段位也不过如此。",
              affectionDelta: -5,
              anxietyDelta: 5,
              nextScene: "tan_scene_12_ans_b",
              badgeText: "极限拉扯",
            },
            {
              id: "c",
              label: "C",
              text: "不用装得那么刺猬，你不化妆的样子可爱多了。☕",
              replyText: "不用装得那么刺猬，你不化妆的样子可爱多了。",
              affectionDelta: 12,
              anxietyDelta: -5,
              nextScene: "tan_scene_12_ans_c",
              badgeText: "奖惩分明",
            },
          ],
        },
        {
          id: "tan_scene_12_ans_a",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她虽然嘴上没说什么，但身体却本能地往后缩了半寸。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "……你对别的女生也是这么容易就许诺的吗？",
            },
          ],
          autoNext: "tan_scene_12_night",
        },
        {
          id: "tan_scene_12_ans_b",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她的脸色瞬间白了，像是被刺中了最脆弱的痛处。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "……你凭什么这么高高在上地评判我？",
            },
            {
              id: "m2",
              sender: "her",
              content: "行！算我今天发神经，跑来找你犯贱！",
            },
            {
              id: "s2",
              sender: "system",
              content: "她猛地站起身，抓起帆布包就要走人。",
              delay: 1500,
            },
            {
              id: "a1",
              sender: "me",
              content: "我话还没说完，你跑什么？",
              delay: 1200,
            },
            {
              id: "a2",
              sender: "me",
              content: "虽然段位低，但至少今天没撒谎。坐下。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "她僵在原地。过了几秒，她红着眼眶重新坐了下来，虽然别过头不看你，但紧绷的肩膀终于放松了。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_12_night",
        },
        {
          id: "tan_scene_12_ans_c",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她愣愣地接过热咖啡，破涕为笑。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你这人真的……打一巴掌给一颗甜枣是不是？",
            },
            {
              id: "m2",
              sender: "her",
              content: "不过，咖啡还挺暖和的。谢谢你。",
            },
          ],
          autoNext: "tan_scene_12_night",
        },
        {
          id: "tan_scene_12_night",
          chapter: 5,
          title: "卸下防备",
          timeLabel: "周二 晚上 22:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "那天傍晚你们在长椅上坐了很久。晚上回寝室后，她的消息变得出奇的柔和。",
              delay: 2e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "今天下午……不管怎样，谢谢你陪我。",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "把最难堪的一面摊开来，反而觉得好久没这么轻松过了。不用端着架子，真好 😌",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（温柔）以后有心事都可以跟我说，我都在。",
              replyText: "以后有心事都可以跟我说，我都在。",
              affectionDelta: -5,
              anxietyDelta: 2,
              nextScene: "tan_scene_12_night_ans_a",
              badgeText: "重回舔狗",
            },
            {
              id: "b",
              label: "B",
              text: "（调侃）知道就好，记得请我吃顿大餐当心理咨询费。🥩",
              replyText: "知道就好，记得请我吃顿大餐当心理咨询费。",
              affectionDelta: 8,
              anxietyDelta: 0,
              nextScene: "tan_scene_12_night_ans_b",
              badgeText: "保持平视",
            },
            {
              id: "c",
              label: "C",
              text: "（平淡）早点睡吧，别熬夜了。",
              replyText: "早点睡吧，别熬夜了。",
              affectionDelta: -2,
              anxietyDelta: 0,
              nextScene: "tan_scene_12_night_ans_c",
              badgeText: "过度高冷",
            },
          ],
        },
        {
          id: "tan_scene_12_night_ans_a",
          chapter: 5,
          messages: [{ id: "m1", sender: "her", content: "嗯，一言为定。" }],
          autoNext: "tan_scene_day6_start",
        },
        {
          id: "tan_scene_12_night_ans_b",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "切，满脑子都是吃 🐷" },
            {
              id: "m2",
              sender: "her",
              content: "请就请，这周末带你去吃日料！",
            },
          ],
          autoNext: "tan_scene_day6_start",
        },
        {
          id: "tan_scene_12_night_ans_c",
          chapter: 5,
          messages: [{ id: "m1", sender: "her", content: "好吧，木头。" }],
          autoNext: "tan_scene_day6_start",
        },
        {
          id: "tan_scene_day6_start",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "晚安，明天见🌙" },
            { id: "a1", sender: "me", content: "晚安", delay: 800 },
            {
              id: "s1",
              sender: "system",
              content:
                "你放下手机，看着窗外的夜色。你有一种直觉，这段关系即将迎来最终的清算。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_13",
        },
        {
          id: "tan_scene_13",
          chapter: 6,
          title: "错发的底牌",
          timeLabel: "周三 下午 14:00",
          puaTacticUsed: "Frame Collapse (框架崩塌)",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周三 下午 14:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "昨天傍晚长椅上的坦白局后，你今天故意没主动找她，想看看她的反应。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "下午两点，你的微信突然连续震动。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "周周，我真的栓Q了……他今天居然一天都没找我！",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "我是不是昨天表现得太倒贴了？我现在要是主动发消息，是不是就彻底占下风了？",
            },
            {
              id: "m3",
              sender: "her",
              content: "烦死了，那些教程到底靠不靠谱啊！",
            },
            {
              id: "s3",
              sender: "system",
              content: "空气仿佛凝固了。三秒后，屏幕上疯狂闪过提示。",
              delay: 2e3,
            },
            {
              id: "s4",
              sender: "system",
              content: '"谭佳欣" 撤回了一条消息。',
              delay: 800,
            },
            {
              id: "s5",
              sender: "system",
              content: '"谭佳欣" 撤回了一条消息。',
              delay: 800,
            },
            {
              id: "s6",
              sender: "system",
              content: '"谭佳欣" 撤回了一条消息。',
              delay: 800,
            },
            {
              id: "m4",
              sender: "her",
              content: "那个……发错人了，你什么都没看见对吧",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "刚在忙，你撤回了什么？",
              replyText: "刚在忙，你撤回了什么？",
              affectionDelta: -5,
              anxietyDelta: -10,
              nextScene: "tan_scene_13_ans_a",
              badgeText: "逃避交锋",
            },
            {
              id: "b",
              label: "B",
              text: "原来你这么内耗啊？还看教程呢。",
              replyText: "原来你这么内耗啊？还看教程呢。",
              affectionDelta: -10,
              anxietyDelta: 20,
              nextScene: "tan_scene_13_ans_b",
              badgeText: "直男嘴贱",
            },
            {
              id: "c",
              label: "C",
              text: "别撤了，看得一清二楚。换身衣服下楼，带你去吃饭。",
              replyText: "别撤了，看得一清二楚。换身衣服下楼，带你去吃饭。",
              affectionDelta: 15,
              anxietyDelta: -15,
              nextScene: "tan_scene_13_ans_c",
              badgeText: "直球破局",
            },
          ],
        },
        {
          id: "tan_scene_13_ans_a",
          chapter: 6,
          messages: [
            { id: "m1", sender: "her", content: "没、没什么！发错群了。" },
            {
              id: "s1",
              sender: "system",
              content:
                "你给了她台阶下，但也错失了绝佳的破局机会。你们的关系又退回了互相猜忌的安全区。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_14_main",
        },
        {
          id: "tan_scene_13_ans_b",
          chapter: 6,
          messages: [
            { id: "m1", sender: "her", content: "……你看我笑话很开心是吧？" },
            {
              id: "m2",
              sender: "her",
              content: "算我自作多情，以后别联系了。",
            },
            {
              id: "s1",
              sender: "system",
              content: "巨大的羞耻感让她瞬间竖起了最厚的防御刺，彻底破防。",
              delay: 2e3,
            },
          ],
          autoNext: "tan_scene_14_main",
        },
        {
          id: "tan_scene_13_ans_c",
          chapter: 6,
          messages: [
            {
              id: "m1_stage",
              sender: "system",
              content: "对方正在输入中...持续了很久。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "……哦。给我十分钟。" },
            {
              id: "s1",
              sender: "system",
              content: "她连反抗的力气都没了，乖乖接住了你的直球。",
              delay: 1500,
            },
          ],
          autoNext: "tan_scene_14_main",
        },
        {
          id: "tan_scene_14_main",
          chapter: 6,
          title: "楼下的对峙",
          timeLabel: "周三 下午 14:15",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你走到女生宿舍楼下。不一会儿，她下来了。",
              delay: 1e3,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她穿着件宽松的卫衣，戴着鸭舌帽，帽檐压得很低，连看都不敢看你一眼，一路上都在揪着卫衣的抽绳。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "你想笑就笑吧。丢死人了……" },
            {
              id: "m2",
              sender: "her",
              content:
                "你现在是不是觉得我像个神经病一样，天天忽冷忽热的，全是套路。",
            },
            {
              id: "m3",
              sender: "her",
              content: "其实我就是……怕太主动了显得掉价，又怕不主动你真的跑了。",
            },
            {
              id: "a1",
              sender: "me",
              content: "所以就跟着网上学那些烂招？",
              delay: 1e3,
            },
            {
              id: "s3",
              sender: "system",
              content: "她猛地抬起头，虽然脸有点红，但还是嘴硬地瞪着你。",
              delay: 1200,
            },
            {
              id: "m4",
              sender: "her",
              content:
                "还不是因为你这人跟个木头一样！怎么试探都不上钩，我都不知道你到底怎么想的！",
            },
            {
              id: "s4",
              sender: "system",
              content:
                "她把积压的内耗一口气全倒了出来，像只炸毛的猫。现在的选项，将决定你们最终的关系形态。",
              delay: 2e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（赶紧道歉）我的错我的错。以后我都听你的，每天主动找你。",
              replyText: "我的错我的错。以后我都听你的，每天主动找你。",
              affectionDelta: 30,
              anxietyDelta: 20,
              nextScene: "tan_ending_bad_simp",
              badgeText: "低位妥协",
            },
            {
              id: "b",
              label: "B",
              text: "（冷漠抽身）谈个恋爱满脑子都是套路和输赢，你不累我都替你累。算了吧。",
              replyText:
                "谈个恋爱满脑子都是套路和输赢，你不累我都替你累。算了吧。",
              affectionDelta: -20,
              anxietyDelta: -20,
              nextScene: "tan_ending_bad_reject",
              badgeText: "理智切割",
            },
            {
              id: "c",
              label: "C",
              text: "（屈起手指弹她脑门）以后少看点那种弱智教程。有话直说，走，吃火锅去。",
              replyText: "以后少看点那种弱智教程。有话直说，走，吃火锅去。",
              affectionDelta: 10,
              anxietyDelta: -10,
              nextScene: "tan_ending_good_real",
              badgeText: "平等直球",
            },
            {
              id: "d",
              label: "D",
              text: "（轻笑）我的想法是……既然你的套路用完了，现在是不是该轮到我了？",
              replyText:
                "我的想法是……既然你的套路用完了，现在是不是该轮到我了？",
              affectionDelta: 20,
              anxietyDelta: -20,
              nextScene: "tan_ending_hidden_heartbeat",
              badgeText: "高阶反撩",
            },
          ],
        },
        {
          id: "tan_ending_bad_simp",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "听到你这么快就开始认错保证，她愣了一下，随后长长地舒了一口气。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "哼，这可是你说的，以后再敢不回我消息试试。",
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "平庸结局：重夺高地",
            desc: "在她社死掉马甲、防线最脆弱的时候，你因为心软，过早且无底线地交出了主动权。\n\n你的妥协虽然化解了眼前的尴尬，但也让她意识到：“原来只要我一发脾气，他就会全盘退让”。\n\n博弈的张力瞬间消失。在接下来的日子里，她又会重新找回主导权，而你，不知不觉间再次沦为了那个一直提供情绪价值、被她牵着鼻子走的兜底选项。",
          },
        },
        {
          id: "tan_ending_bad_reject",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她的脸色瞬间变得苍白，原本还有些生气的眼眸黯淡了下去。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "……我知道了。打扰了。" },
            {
              id: "s2",
              sender: "system",
              content: "她重新把帽檐压低，转过身快步走回了宿舍楼。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "遗憾结局：绝对防御",
            desc: "你像一台没有感情的测谎仪，精准地看穿了她所有的笨拙，但也无情地斩断了她卸下伪装后的真心。\n\n你赢得了绝对的自尊，证明了自己绝不会被任何套路拿捏。但夜深人静的时候，看着再也没有更新过的聊天记录，偶尔也会想起那个压低帽檐、红着脸抱怨你不回消息的女孩。\n\n你成功防御了陷阱，但也把自己永远锁在了孤岛里。",
          },
        },
        {
          id: "tan_ending_good_real",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "她捂着被你弹痛的脑门，气鼓鼓地瞪着你，但嘴角却忍不住疯狂上扬。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "弹这么重！你这人懂不懂怜香惜玉啊！",
            },
            {
              id: "a1",
              sender: "me",
              content: "对付网瘾少女就得用这招。赶紧走，我饿了。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "她自然地跟上你的脚步，没走两步，悄悄拽住了你的衣角。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "清醒结局：真诚必杀",
            desc: "这是最健康的一种解法——用接地气的真诚，去打败所有的套路。\n\n你没有利用她的社死来确立霸权，也没有因为她的嘴硬而心生嫌隙。一个玩笑般的动作，巧妙地消解了她掉马甲的尴尬，让你们站在了平等的位置上。\n\n当两个试图用盔甲保护自己的人同时卸下防备，这段关系才终于剥离了试探与猜忌。没有了内耗，周末的火锅局成了你们真正双向奔赴的起点。",
          },
        },
        {
          id: "tan_ending_hidden_heartbeat",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你突然低头凑近，看着她躲闪的眼睛。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "（呼吸一滞，往后退了半步）轮到你什么……？",
            },
            {
              id: "a1",
              sender: "me",
              content: "轮到我教教你，什么才叫真正的直球。",
              delay: 1500,
            },
            {
              id: "a2",
              sender: "me",
              content: "以后少看点教程，多看看我。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "一阵秋风吹过，她却觉得脸颊滚烫，连耳朵尖都红透了。",
              delay: 1500,
            },
            {
              id: "m2",
              sender: "her",
              content: "（声音微不可闻，但没再躲开）……哦。",
            },
            {
              id: "s3",
              sender: "system",
              content: "她依然低着头，但手却悄悄伸过来，十指紧紧扣住了你的手。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "隐藏结局：高阶反杀",
            desc: "最高端的猎手，往往以猎物的姿态出现。\n\n从一开始，你就看穿了她拙劣的心理战。在她因为发错消息而陷入极度内耗和尴尬时，你没有给出无趣的安慰，而是极其自然地接管了主动权。\n\n你没有爹味说教，而是用自信且暧昧的“反撩”，给她提供了一波极高的情绪价值。这种游刃有余的态度，彻底填补了她内心的不安全感。\n\n她原本只是想钓一条鱼，却没想到自己心甘情愿地咬了钩。这场推拉的游戏，以她的完败而告终。",
          },
        },
        {
          id: "su_scene_01",
          chapter: 1,
          title: "便利店门口的烟",
          timeLabel: "周五 · 23:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周五 23:30，南门外便利店。",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "你穿着洗皱的T恤和人字拖靠在墙边抽烟。校友群里的学霸苏佳怡匆匆路过，掉了一张校园卡。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "你叫住她还卡。她闻到烟味，又看了看你的打扮，紧张地道了谢就跑回了学校。你拿出手机，在校友群里找到了她的微信。",
              delay: 2e3,
            },
            {
              id: "a1",
              sender: "me",
              content: "卡放好了吧？刚才跑那么快，怕我碰瓷啊？",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "啊！放好了！刚才真的谢谢你帮我捡卡！",
              delay: 2e3,
            },
            {
              id: "m2",
              sender: "her",
              content:
                "我没觉得你要碰瓷……就是很少见有人穿睡衣和拖鞋就出校门了，而且我还闻到了烟味，有点没反应过来。",
              delay: 3e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "习惯了，早点休息吧。",
              replyText: "习惯了，早点休息吧。",
              affectionDelta: 5,
              anxietyDelta: -5,
              nextScene: "su_scene_01_ans_a",
              badgeText: "保持距离",
            },
            {
              id: "b",
              label: "B",
              text: "睡衣怎么了，大半夜的出来买水还要穿西装吗。",
              replyText: "睡衣怎么了，大半夜的出来买水还要穿西装吗。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "su_scene_01_ans_b",
              badgeText: "直男发言",
            },
            {
              id: "c",
              label: "C",
              text: "刚才你转头的时候我就把烟掐了。以后走路专心点。",
              replyText: "刚才你转头的时候我就把烟掐了。以后走路专心点。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "su_scene_01_ans_c",
              badgeText: "细节加分",
            },
            {
              id: "d",
              label: "D",
              text: "看来我这身“无业游民”的打扮吓到学霸了，我的锅。下次争取穿个人模狗样再出现在你面前。",
              replyText:
                "看来我这身“无业游民”的打扮吓到学霸了，我的锅。下次争取穿个人模狗样再出现在你面前。",
              affectionDelta: 20,
              anxietyDelta: 5,
              nextScene: "su_scene_01_ans_d",
              badgeText: "坦荡自嘲",
            },
          ],
        },
        {
          id: "su_scene_01_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "嗯……那晚安。" },
            { id: "a1", sender: "me", content: "好", delay: 999 },
          ],
          autoNext: "su_scene_02_main",
        },
        {
          id: "su_scene_01_ans_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "我不是那个意思……" },
            {
              id: "m2",
              sender: "her",
              content: "不管怎样谢谢你，早点休息吧。",
            },
            { id: "a1", sender: "me", content: "好", delay: 999 },
          ],
          autoNext: "su_scene_02_main",
        },
        {
          id: "su_scene_01_ans_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "好的，今晚谢谢你啦。" },
            { id: "a1", sender: "me", content: "没事", delay: 1e3 },
          ],
          autoNext: "su_scene_02_main",
        },
        {
          id: "su_scene_01_ans_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "我也没说你像无业游民呀！" },
            { id: "m2", sender: "her", content: "你别乱给自己贴标签。" },
            { id: "a1", sender: "me", content: "开玩笑的，哈哈😄", delay: 1e3 },
          ],
          autoNext: "su_scene_02_main",
        },
        {
          id: "su_scene_02_main",
          chapter: 1,
          title: "微信上的澄清",
          timeLabel: "周五 · 00:30",
          messages: [
            { id: "s0", sender: "system", content: "[TIME] 00:30", delay: 400 },
            {
              id: "m1",
              sender: "her",
              content: "对了，我看你在校友群里发过好几次KTV和酒吧的拼车……",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "你经常这么晚还在外面玩吗？其实熬夜喝酒抽烟对身体不太好的[猫猫叹气]",
              delay: 1e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "习惯了。你还是早点睡吧。",
              replyText: "习惯了。你还是早点睡吧。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "su_scene_02_ans_a",
              badgeText: "冷淡结束",
            },
            {
              id: "b",
              label: "B",
              text: "好学生连这都要管啊？顾好你自己就行了。",
              replyText: "好学生连这都要管啊？顾好你自己就行了。",
              affectionDelta: -10,
              anxietyDelta: 10,
              nextScene: "su_scene_02_ans_b",
              badgeText: "不识好歹",
            },
            {
              id: "c",
              label: "C",
              text: "没办法，朋友多推不掉。怎么，苏同学要传授养生秘诀？",
              replyText: "没办法，朋友多推不掉。怎么，苏同学要传授养生秘诀？",
              affectionDelta: 10,
              anxietyDelta: -5,
              nextScene: "su_scene_02_ans_c",
              badgeText: "顺手调侃",
            },
            {
              id: "d",
              label: "D",
              text: "去KTV是为了练歌，去酒吧是朋友拉着凑数，我一般只喝奶啤。别把我想得那么不良啊，苏同学。",
              replyText:
                "去KTV是为了练歌，去酒吧是朋友拉着凑数，我一般只喝奶啤。别把我想得那么不良啊，苏同学。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "su_scene_02_ans_d",
              badgeText: "真诚反差",
            },
          ],
        },
        {
          id: "su_scene_02_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "……好的，打扰了。" },
            { id: "m2", sender: "her", content: "晚安。" },
            { id: "a1", sender: "me", content: "晚安", delay: 999 },
          ],
          autoNext: "su_scene_03_night",
        },
        {
          id: "su_scene_02_ans_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "对不起，是我多嘴了。" },
          ],
          autoNext: "su_scene_03_night",
        },
        {
          id: "su_scene_02_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我哪有什么养生秘诀，就是早睡早起而已。",
            },
            { id: "m2", sender: "her", content: "不说了，我去睡觉了，晚安。" },
            { id: "a1", sender: "me", content: "晚安", delay: 999 },
          ],
          autoNext: "su_scene_03_night",
        },
        {
          id: "su_scene_02_ans_d",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "奶啤？[笑哭]" },
            {
              id: "m2",
              sender: "her",
              content: "好吧，看来是我刻板印象了。没想到你居然喝奶啤。",
            },
            { id: "m3", sender: "her", content: "那你早点休息，晚安！" },
            { id: "a1", sender: "me", content: "晚安", delay: 999 },
          ],
          autoNext: "su_scene_03_night",
        },
        {
          id: "su_scene_03_night",
          chapter: 1,
          title: "安静的夜",
          timeLabel: "周五 · 01:00",
          messages: [],
          autoNext: "su_scene_04",
        },
        {
          id: "su_scene_04",
          chapter: 2,
          title: "图书馆的不速之客",
          timeLabel: "周六 · 14:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周六 14:00，图书馆自习室。",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "你嫌寝室太吵，溜达进图书馆，在正刷题的苏佳怡对面拉开椅子坐下。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她惊讶地抬头，看着你空空如也的双手。你指了指手机，示意微信聊。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你怎么来图书馆了？而且连书都没带……",
            },
            {
              id: "a1",
              sender: "me",
              content: "寝室太吵，来蹭个清净。",
              delay: 1e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没带，我睡一会，你学你的，我不吵你。",
              replyText: "没带，我睡一会，你学你的，我不吵你。",
              affectionDelta: 10,
              anxietyDelta: -5,
              nextScene: "su_scene_04_ans_a",
              badgeText: "安分守己",
            },
            {
              id: "b",
              label: "B",
              text: "图书馆又不是只能看书。我看手机不行吗？",
              replyText: "图书馆又不是只能看书。我看手机不行吗？",
              affectionDelta: -5,
              anxietyDelta: 5,
              nextScene: "su_scene_04_ans_b",
              badgeText: "理直气壮",
            },
            {
              id: "c",
              label: "C",
              text: "不是有你吗？拍半张草稿纸发给我看看？",
              replyText: "不是有你吗？拍半张草稿纸发给我看看？",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "su_scene_04_ans_c",
              badgeText: "略微越界",
            },
            {
              id: "d",
              label: "D",
              text: "看书催眠，不如看学霸做题。你做你的，就当我不存在。",
              replyText: "看书催眠，不如看学霸做题。你做你的，就当我不存在。",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "su_scene_04_ans_d",
              badgeText: "坦然大方",
            },
          ],
        },
        {
          id: "su_scene_04_ans_a",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "那好吧……空调风大，你别着凉。",
            },
            {
              id: "s1",
              sender: "system",
              content: "你趴在桌上，听着她写字的沙沙声，竟然真的睡着了。",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_05_main",
        },
        {
          id: "su_scene_04_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "行吧……你手机记得静音。" },
            { id: "a1", sender: "me", content: "好的", delay: 1e3 },
          ],
          autoNext: "su_scene_05_main",
        },
        {
          id: "su_scene_04_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你看得懂吗……这是下学期的高数。",
            },
            {
              id: "a1",
              sender: "me",
              content: "拿来催眠用的，一看就困",
              delay: 1e3,
            },
          ],
          autoNext: "su_scene_05_main",
        },
        {
          id: "su_scene_04_ans_d",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……你这人真奇怪。" },
            { id: "m2", sender: "her", content: "随便你吧，别发出声音就行。" },
            {
              id: "s1",
              sender: "system",
              content:
                "她悄悄把桌上的矿泉水往你这边推了推。你听着她翻书的声音，不知不觉睡了过去。",
              delay: 2e3,
            },
          ],
          autoNext: "su_scene_05_main",
        },
        {
          id: "su_scene_05_main",
          chapter: 2,
          title: "成绩预警",
          timeLabel: "周六 · 21:00",
          messages: [
            { id: "s0", sender: "system", content: "[TIME] 21:00", delay: 400 },
            {
              id: "m1",
              sender: "her",
              content:
                "今天下午……你其实根本不是去学习的吧？趴在桌上睡了整整两个小时。",
            },
            {
              id: "a1",
              sender: "me",
              content: "看你做题太催眠了。我打呼噜吵到你了？",
              delay: 1500,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 21:05",
              delay: 1e3,
            },
            { id: "m2", sender: "her", content: "那倒没有，你睡得挺安静的。" },
            {
              id: "m3",
              sender: "her",
              content: "不过……我看辅导员在群里发了期中预警名单，里面有你。",
            },
            {
              id: "m4",
              sender: "her",
              content: "导员说，你高数要是再挂科，可能就要延毕了。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "看到了。挂就挂呗，我都习惯了。",
              replyText: "看到了。挂就挂呗，我都习惯了。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "su_scene_05_ans_a",
              badgeText: "摆烂态度",
            },
            {
              id: "b",
              label: "B",
              text: "没事，到时候考前突击一下就行。",
              replyText: "没事，到时候考前突击一下就行。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "su_scene_05_ans_b",
              badgeText: "敷衍应对",
            },
            {
              id: "c",
              label: "C",
              text: "怎么，好学生担心我毕不了业啊？",
              replyText: "怎么，好学生担心我毕不了业啊？",
              affectionDelta: 10,
              anxietyDelta: 5,
              nextScene: "su_scene_05_ans_c",
              badgeText: "半真半假",
            },
            {
              id: "d",
              label: "D",
              text: "头疼。一上课就犯困，基础太差了。学霸有什么好建议吗？",
              replyText: "头疼。一上课就犯困，基础太差了。学霸有什么好建议吗？",
              affectionDelta: 25,
              anxietyDelta: -5,
              nextScene: "su_scene_05_ans_d",
              badgeText: "示弱求助",
            },
          ],
        },
        {
          id: "su_scene_05_ans_a",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你怎么能对自己这么不负责任……算了，你自己看着办吧。",
            },
          ],
          autoNext: "su_scene_06_sleep",
        },
        {
          id: "su_scene_05_ans_b",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "大学的课考前突击很难及格的。你自己心里有数就行。",
            },
            {
              id: "a1",
              sender: "me",
              content: "临时抱佛脚，老天保佑",
              delay: 1e3,
            },
          ],
          autoNext: "su_scene_06_sleep",
        },
        {
          id: "su_scene_05_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "同学之间互相提醒而已！你要是这个态度我就不管你了。",
            },
            { id: "a1", sender: "me", content: "好咯好咯", delay: 1e3 },
          ],
          autoNext: "su_scene_06_sleep",
        },
        {
          id: "su_scene_05_ans_d",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "其实我也不是天才，就是多刷题而已。",
            },
            {
              id: "m2",
              sender: "her",
              content: "你要是真的想及格，我可以把我的复习笔记借给你看。",
            },
            { id: "a1", sender: "me", content: "行", delay: 1e3 },
          ],
          autoNext: "su_scene_06_sleep",
        },
        {
          id: "su_scene_06_sleep",
          chapter: 2,
          title: "晚安",
          timeLabel: "周六 · 22:30",
          messages: [],
          autoNext: "su_scene_07",
        },
        {
          id: "su_scene_07",
          chapter: 3,
          title: "喧闹与安静",
          timeLabel: "周日 · 21:00",
          messages: [
            { id: "s0", sender: "system", content: "周日 21:00", delay: 400 },
            {
              id: "m1",
              sender: "her",
              content: "我把笔记做成PDF发到你微信啦。",
            },
            {
              id: "a1",
              sender: "me",
              content: "[语音消息] 收到了，辛苦。",
              delay: 1500,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 21:05",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "你那边好吵，背景音怎么像酒吧？",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "都快期中考了……要不我过去把纸质版笔记给你送去吧，手机上看PDF不方便。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "行啊，那你过来吧，定位发你。",
              replyText: "行啊，那你过来吧，定位发你。",
              affectionDelta: -10,
              anxietyDelta: 20,
              nextScene: "su_scene_07_ans_a",
              badgeText: "不知轻重",
            },
            {
              id: "b",
              label: "B",
              text: "别来了，太晚了，我自己看就行。",
              replyText: "别来了，太晚了，我自己看就行。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "su_scene_07_ans_b",
              badgeText: "理智拒绝",
            },
            {
              id: "c",
              label: "C",
              text: "送笔记是假，想来看看我到底在干什么是真吧？",
              replyText: "送笔记是假，想来看看我到底在干什么是真吧？",
              affectionDelta: 10,
              anxietyDelta: 5,
              nextScene: "su_scene_07_ans_c",
              badgeText: "玩笑试探",
            },
            {
              id: "d",
              label: "D",
              text: "别闹。这种地方太乱，不是你该来的。乖乖在寝室待着，明天在学校给我。",
              replyText:
                "别闹。这种地方太乱，不是你该来的。乖乖在寝室待着，明天在学校给我。",
              affectionDelta: 30,
              anxietyDelta: -10,
              nextScene: "su_scene_07_ans_d",
              badgeText: "强硬保护",
            },
          ],
        },
        {
          id: "su_scene_07_ans_a",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "……室友说太晚了不安全，我明天再给你吧。",
            },
            { id: "a1", sender: "me", content: "好嘞", delay: 1e3 },
          ],
          autoNext: "su_scene_08_main",
        },
        {
          id: "su_scene_07_ans_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "那好吧，你也早点回寝室。" },
            { id: "a1", sender: "me", content: "好嘞", delay: 1e3 },
          ],
          autoNext: "su_scene_08_main",
        },
        {
          id: "su_scene_07_ans_c",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我才没有！爱要不要，明天上课你自己来找我拿！",
            },
            { id: "a1", sender: "me", content: "好", delay: 1e3 },
          ],
          autoNext: "su_scene_08_main",
        },
        {
          id: "su_scene_07_ans_d",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "……哦。" },
            {
              id: "m2",
              sender: "her",
              content: "那你今天喝的是奶啤还是真的酒呀？",
            },
            { id: "a1", sender: "me", content: "奶啤。没骗你。", delay: 1500 },
          ],
          autoNext: "su_scene_08_main",
        },
        {
          id: "su_scene_08_main",
          chapter: 3,
          title: "拯救差生计划",
          timeLabel: "周日 · 23:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "23:00，你回到了寝室。",
              delay: 400,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 23:05",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "其实……光看笔记可能不够。有些题的思路挺跳跃的。",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "如果你真的不想延毕的话，明晚我没有选修课，可以去空教室帮你顺一下重点。",
            },
            {
              id: "m3",
              sender: "her",
              content: "不过你要是不想学就算了！当我没说！",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "行，一定准时到🫡，麻烦你了",
              replyText: "行，一定准时到🫡，麻烦你了",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "su_scene_08_ans_a",
              badgeText: "礼貌接受",
            },
            {
              id: "b",
              label: "B",
              text: "算了吧，一看书就犯困，别浪费你时间了。",
              replyText: "算了吧，一看书就犯困，别浪费你时间了。",
              affectionDelta: -15,
              anxietyDelta: 20,
              nextScene: "su_scene_08_ans_b",
              badgeText: "拒绝好意",
            },
            {
              id: "c",
              label: "C",
              text: "这么上心？要是考及格了，苏老师想要什么报酬？",
              replyText: "这么上心？要是考及格了，苏老师想要什么报酬？",
              affectionDelta: 15,
              anxietyDelta: 5,
              nextScene: "su_scene_08_ans_c",
              badgeText: "玩笑回应",
            },
            {
              id: "d",
              label: "D",
              text: "好，我准时到。要是这次及格了，苏老师顺便陪我去买两件新衣服？免得每次见你都像无业游民。",
              replyText:
                "好，我准时到。要是这次及格了，苏老师顺便陪我去买两件新衣服？免得每次见你都像无业游民。",
              affectionDelta: 30,
              anxietyDelta: -10,
              nextScene: "su_scene_08_ans_d",
              badgeText: "养成铺垫",
            },
          ],
        },
        {
          id: "su_scene_08_ans_a",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "不麻烦，明晚七点，A栋302见。",
            },
            { id: "a1", sender: "me", content: "好", delay: 1e3 },
          ],
          autoNext: "su_scene_09_sleep",
        },
        {
          id: "su_scene_08_ans_b",
          chapter: 3,
          messages: [{ id: "m1", sender: "her", content: "……哦。随便你吧。" }],
          autoNext: "su_scene_09_sleep",
        },
        {
          id: "su_scene_08_ans_c",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "谁要你的报酬啦！考不及格才是浪费我时间。",
            },
            { id: "a1", sender: "me", content: "哈哈，开个玩笑", delay: 1e3 },
          ],
          autoNext: "su_scene_09_sleep",
        },
        {
          id: "su_scene_08_ans_d",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "……我也没说你像无业游民呀。" },
            {
              id: "m2",
              sender: "her",
              content: "等你及格了再说吧！明晚七点A栋302，带好书和笔。",
            },
            { id: "m3", sender: "her", content: "早点睡觉！" },
            { id: "a1", sender: "me", content: "🫡好！", delay: 1e3 },
          ],
          autoNext: "su_scene_09_sleep",
        },
        {
          id: "su_scene_09_sleep",
          chapter: 3,
          title: "悄然改变",
          timeLabel: "周日 · 23:30",
          messages: [],
          autoNext: "su_scene_10",
        },
        {
          id: "su_scene_10",
          chapter: 4,
          title: "听话的坏学生",
          timeLabel: "周一 · 19:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周一 19:00，A栋302自习室。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "你……居然没迟到。而且还换了衣服？",
            },
            {
              id: "a1",
              sender: "me",
              content: "苏老师的课，不敢迟到。",
              delay: 1500,
            },
            {
              id: "s4",
              sender: "system",
              content:
                "她看着屏幕上的回复，耳根微红。淡淡的薄荷洗发水味代替了你平时的烟草味，这让她有一瞬间的失神。",
              delay: 1500,
            },
            {
              id: "m2",
              sender: "her",
              content:
                "别贫嘴。高数的核心是微积分，不方便说话，我把步骤写在草稿纸上，你不懂的在微信上问我。",
            },
            {
              id: "s5",
              sender: "system",
              content:
                "接下来的一个小时，她认真地在纸上写解题步骤。你们肩膀之间只有不到十公分的距离，用微信无声地交流着。",
              delay: 2e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "嗯，这个公式我大概懂了，你在纸上写下一题吧。",
              replyText: "嗯，这个公式我大概懂了，你在纸上写下一题吧。",
              affectionDelta: 10,
              anxietyDelta: -5,
              nextScene: "su_scene_10_ans_a",
              badgeText: "专心致志",
            },
            {
              id: "b",
              label: "B",
              text: "字太多了，看着头晕。学霸，有没有速成的方法？",
              replyText: "字太多了，看着头晕。学霸，有没有速成的方法？",
              affectionDelta: -10,
              anxietyDelta: 10,
              nextScene: "su_scene_10_ans_b",
              badgeText: "本性难移",
            },
            {
              id: "c",
              label: "C",
              text: "这道题没看懂。你凑近点在纸上再画一遍？",
              replyText: "这道题没看懂。你凑近点在纸上再画一遍？",
              affectionDelta: 15,
              anxietyDelta: 5,
              nextScene: "su_scene_10_ans_c",
              badgeText: "越界调戏",
            },
            {
              id: "d",
              label: "D",
              text: "（拿过她的笔，在纸上写下最后一步）是这个结果吗？看来苏老师教得不错。",
              replyText: "是这个结果吗？看来苏老师教得不错。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "su_scene_10_ans_d",
              badgeText: "智商反差",
            },
          ],
        },
        {
          id: "su_scene_10_ans_a",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你学得挺快的嘛。那看下一道。",
            },
            {
              id: "s1",
              sender: "system",
              content: "她松了口气，似乎对你刮目相看。",
              delay: 1500,
            },
            { id: "a1", sender: "me", content: "嘿嘿", delay: 1500 },
          ],
          autoNext: "su_scene_11_night",
        },
        {
          id: "su_scene_10_ans_b",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "没有速成的！基础不打好怎么做题呀！[敲打]",
            },
            {
              id: "s1",
              sender: "system",
              content:
                "她有些无奈地瞪了你一眼，只能继续耐着性子在纸上给你写步骤。",
              delay: 1500,
            },
            { id: "a1", sender: "me", content: "好咯好咯", delay: 1500 },
          ],
          autoNext: "su_scene_11_night",
        },
        {
          id: "su_scene_10_ans_c",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "你……你看纸，别看我！" },
            {
              id: "s1",
              sender: "system",
              content: "她红着耳朵把草稿纸往你面前推了推，不敢转头看你。",
              delay: 1500,
            },
            {
              id: "a1",
              sender: "me",
              content: "看你比较养眼，哈哈",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_11_night",
        },
        {
          id: "su_scene_10_ans_d",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她看着你在纸上写下的正确答案，十分惊讶地在手机上敲字。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "你不是说你基础很差吗？！" },
            {
              id: "a1",
              sender: "me",
              content: "差啊。只是突然不想让你觉得我无药可救而已。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "她看着屏幕愣住了，心跳漏了半拍，默默低头咬住了嘴唇。",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_11_night",
        },
        {
          id: "su_scene_11_night",
          chapter: 4,
          title: "深夜的考前突击",
          timeLabel: "周一 · 23:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "23:30，自习室关门，你们各自回到了寝室。",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "你破天荒地没有打开游戏，而是翻开了她给你画的重点。没过多久，微信响了。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "今天最后写的两个公式有点容易混淆，你自己再看一遍哦。",
            },
            { id: "a1", sender: "me", content: "在看了。", delay: 1500 },
            { id: "s_time1", sender: "system", content: "23:35", delay: 1e3 },
            { id: "m2", sender: "her", content: "真的吗？[怀疑]" },
            {
              id: "m3",
              sender: "her",
              content: "你没有背着我在偷偷打游戏，或者又偷偷溜去酒吧了吧？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "真在看书。明天就考试了，我还不至于这么心大。",
              replyText: "真在看书。明天就考试了，我还不至于这么心大。",
              affectionDelta: 10,
              anxietyDelta: -5,
              nextScene: "su_scene_11_ans_a",
              badgeText: "理智安抚",
            },
            {
              id: "b",
              label: "B",
              text: "刚打开游戏呢，被你发现了。",
              replyText: "刚打开游戏呢，被你发现了。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "su_scene_11_ans_b",
              badgeText: "故意气人",
            },
            {
              id: "c",
              label: "C",
              text: "[图片：拍了一张桌上的书本和台灯] 查岗查得这么严？",
              replyText: "[图片：拍了一张桌上的书本和台灯] 查岗查得这么严？",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "su_scene_11_ans_c",
              badgeText: "拍照自证",
            },
            {
              id: "d",
              label: "D",
              text: "没去酒吧，也没打游戏。某人都把话说到那份上了，我要是再考不及格，怎么好意思要奖励？",
              replyText:
                "没去酒吧，也没打游戏。某人都把话说到那份上了，我要是再考不及格，怎么好意思要奖励？",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "su_scene_11_ans_d",
              badgeText: "目标明确",
            },
          ],
        },
        {
          id: "su_scene_11_ans_a",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "那就好！祝你明天考试顺利！晚安啦！",
            },
            { id: "a1", sender: "me", content: "晚安", delay: 1500 },
          ],
          autoNext: "su_scene_12_sleep",
        },
        {
          id: "su_scene_11_ans_b",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "你……！气死我了，不管你了！考不及格别来找我！",
            },
          ],
          autoNext: "su_scene_12_sleep",
        },
        {
          id: "su_scene_11_ans_c",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我才没有查岗！只是尽到小老师的责任而已！",
            },
            { id: "m2", sender: "her", content: "快看书，不打扰你了，晚安！" },
            { id: "a1", sender: "me", content: "晚安", delay: 1500 },
          ],
          autoNext: "su_scene_12_sleep",
        },
        {
          id: "su_scene_11_ans_d",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……你脑子里就只记得奖励！" },
            {
              id: "m2",
              sender: "her",
              content: "等你及格了再说吧！早点睡，明天考场上别犯困！晚安！",
            },
            { id: "a1", sender: "me", content: "晚安", delay: 1500 },
          ],
          autoNext: "su_scene_12_sleep",
        },
        {
          id: "su_scene_12_sleep",
          chapter: 4,
          title: "安静的夜",
          timeLabel: "周一 · 23:50",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "聊天结束后，你看着屏幕笑了笑，破天荒地熬夜刷完了剩下的题。",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_13",
        },
        {
          id: "su_scene_13",
          chapter: 5,
          title: "通过与诱惑",
          timeLabel: "周二 · 18:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "18:00，期中考试成绩出了。",
              delay: 400,
            },
            { id: "s1", sender: "system", content: "18:05", delay: 500 },
            { id: "m1", sender: "her", content: "及格了！！！65分！！" },
            {
              id: "m2",
              sender: "her",
              content: "我就说你肯定没问题的！是不是该感谢我这个大功臣！",
            },
            {
              id: "a1",
              sender: "me",
              content: "确实得谢。说吧，明天想去哪逛？不是说好陪我去买衣服？",
              delay: 1500,
            },
            {
              id: "m3",
              sender: "her",
              content: "嘻嘻，算你守信用。那明天下午……",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "今晚朋友聚会推不掉，明天下午再见吧。",
              replyText: "今晚朋友聚会推不掉，明天下午再见吧。",
              affectionDelta: -20,
              anxietyDelta: 20,
              nextScene: "su_scene_13_ans_a",
              badgeText: "重蹈覆辙",
            },
            {
              id: "b",
              label: "B",
              text: "好滴，明天下午几点见？",
              replyText: "好滴，明天下午几点见？",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "su_scene_13_ans_b",
              badgeText: "理智拒绝",
            },
            {
              id: "c",
              label: "C",
              text: "刚推了个酒局，明天行程听苏老师安排。",
              replyText: "刚推了个酒局，明天行程听苏老师安排。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "su_scene_13_ans_c",
              badgeText: "公开报备",
            },
            {
              id: "d",
              label: "D",
              text: "刚拒绝了朋友的聚会。明天的行程听苏老师安排。",
              replyText: "刚拒绝了朋友的聚会。明天的行程听苏老师安排。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "su_scene_13_ans_d",
              badgeText: "彻底划清",
            },
          ],
        },
        {
          id: "su_scene_13_ans_a",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你选择了回到原本的圈子，并敷衍了苏佳怡。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "哦……好吧。" },
            {
              id: "m2",
              sender: "her",
              content: "那你少喝点。明天下午两点，恒隆广场见。",
            },
            {
              id: "s2",
              sender: "system",
              content:
                "当晚，她在你朋友的朋友圈里，看到了你在聚会跟一堆女生喝酒的视频。",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_14_sleep",
        },
        {
          id: "su_scene_13_ans_b",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你挂断了朋友的电话。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "好呀！那我们明天下午两点，恒隆广场见！",
            },
            {
              id: "m2",
              sender: "her",
              content: "我一定要把你那身审美给改过来！早点休息哦，晚安！",
            },
            { id: "a1", sender: "me", content: "晚安", delay: 1500 },
          ],
          autoNext: "su_scene_14_sleep",
        },
        {
          id: "su_scene_13_ans_c",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "朋友在电话那头起哄：“哟，铁树开花了？”你笑着挂断了电话。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "表现不错，值得表扬！" },
            {
              id: "m2",
              sender: "her",
              content: "那明天下午两点，恒隆广场见！晚安啦~",
            },
            {
              id: "a1",
              sender: "me",
              content: "一定准时到🫡，晚安",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_14_sleep",
        },
        {
          id: "su_scene_13_ans_d",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你干脆利落地挂了朋友的电话，彻底告别了那些毫无意义的酒局。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "算你懂事！" },
            {
              id: "m2",
              sender: "her",
              content: "那明天下午两点，恒隆广场见！不准迟到！晚安咯！",
            },
            {
              id: "a1",
              sender: "me",
              content: "好滴，一定准时到🫡，晚安",
              delay: 1500,
            },
          ],
          autoNext: "su_scene_14_sleep",
        },
        {
          id: "su_scene_14_sleep",
          chapter: 5,
          title: "分岔路",
          timeLabel: "周二 · 23:00",
          messages: [],
          autoNext: "su_scene_16",
        },
        {
          id: "su_scene_16",
          chapter: 6,
          title: "晚风中的答案",
          timeLabel: "周三 · 20:30",
          messages: [
            { id: "s0", sender: "system", content: "周三 20:30", delay: 400 },
            {
              id: "s1",
              sender: "system",
              content:
                "商场里，她像个小军师一样指挥你试了七八套衣服。换上白衬衫和休闲外套后，你身上的痞气被清爽干净的少年感取代，她眼里的惊艳藏都藏不住。",
              delay: 2e3,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "买完衣服，你们顺道在附近吃了烤肉。回学校的路上，晚风微凉，路灯把你们的影子拉得很长。",
              delay: 2e3,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "她手里拿着喝了一半的无糖可乐，脚步轻快地走在你旁边，突然转过头看了你一眼。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "说真的，你今天这身比你那个人字拖大裤衩强太多了。",
            },
            {
              id: "a1",
              sender: "me",
              content: "是是是，苏老师品味好。",
              delay: 1500,
            },
            {
              id: "m2",
              sender: "her",
              content: "（咬了咬吸管，声音变小）其实……我一直挺好奇的。",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "你这种平时天不怕地不怕，连导员点名都不放在心上的人……为什么这几天这么听话？不仅乖乖去复习，还没再去酒吧，今天逛了一下午街都没喊累。",
            },
            {
              id: "s4",
              sender: "system",
              content:
                "她停下脚步，转过身直视着你的眼睛。没有了平时那种咋咋呼呼的骄傲，眼神里满是认真的试探和期待。",
              delay: 3e3,
            },
            {
              id: "s5",
              sender: "system",
              content: "气氛正好，你知道，是时候给出你的答案了。",
              delay: 2e3,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "没听过一句话吗？遇到克星了呗。苏佳怡，要不要跟我谈个恋爱试试？",
              replyText:
                "没听过一句话吗？遇到克星了呗。苏佳怡，要不要跟我谈个恋爱试试？",
              affectionDelta: 30,
              anxietyDelta: -30,
              nextScene: "su_ending_good_sweet",
              badgeText: "清爽直球",
            },
            {
              id: "b",
              label: "B",
              text: "可能最近想通了吧，不能总混日子。这次期中多亏你了，好兄弟。",
              replyText:
                "可能最近想通了吧，不能总混日子。这次期中多亏你了，好兄弟。",
              affectionDelta: -20,
              anxietyDelta: 10,
              nextScene: "su_ending_bad_brother",
              badgeText: "退回友谊",
            },
            {
              id: "c",
              label: "C",
              text: "你想多了，单纯就是不想被辅导员叫家长而已，刚好你笔记借我了。",
              replyText:
                "你想多了，单纯就是不想被辅导员叫家长而已，刚好你笔记借我了。",
              affectionDelta: -30,
              anxietyDelta: 20,
              nextScene: "su_scene_ending_bad_cold",
              badgeText: "重蹈覆辙",
            },
            {
              id: "d",
              label: "D",
              text: "（往前走半步靠近她）这都没看出来？当然是为了讨好你啊。苏佳怡，以后我的行程归你管了行不行？",
              replyText:
                "（往前走半步靠近她）这都没看出来？当然是为了讨好你啊。苏佳怡，以后我的行程归你管了行不行？",
              affectionDelta: 20,
              anxietyDelta: -20,
              nextScene: "su_ending_hidden_dominate",
              badgeText: "顺势拿捏",
            },
          ],
        },
        {
          id: "su_ending_good_sweet",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她愣了一下，路灯下能明显看到她的耳朵红透了。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "谁、谁是你克星啊……" },
            {
              id: "m2",
              sender: "her",
              content:
                "谈恋爱可以，但我要求很高的！以后不准再去那些乱七八糟的酒局了，听到没？",
            },
            {
              id: "a1",
              sender: "me",
              content: "遵命，女朋友。回去就把酒吧销售全删了。",
              delay: 2e3,
            },
            {
              id: "s2",
              sender: "system",
              content: "她终于绷不住笑了出来，十分自然地牵过了你的手。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "完美结局：专属克星",
            desc: "谁能想到，那个踩着人字拖出入酒吧的“坏学生”，骨子里其实是一个会为了喜欢的女孩乖乖去空教室复习的高阶直球选手。没有俗套的痛哭流涕，也没有刻意的煽情，一切发生得就像那杯无糖可乐一样清爽自然。你用实际行动打消了她的顾虑，也给了她最想要的确定感。这段从一张校园卡开始的缘分，终于在秋天的晚风里迎来了最好的答案。",
          },
        },
        {
          id: "su_ending_bad_brother",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "听到“好兄弟”三个字，她抓着可乐杯的手指紧了一下，眼里的光明显暗了下去。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "……哦，是这样啊。" },
            {
              id: "m2",
              sender: "her",
              content:
                "不用请吃饭啦，同学之间互帮互助嘛。前面就是宿舍了，我自己回去就好，拜拜。",
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "遗憾结局：好兄弟的边界感",
            desc: "你用一句“好兄弟”体面地划清了界限。她是个聪明的女孩，瞬间就听懂了你委婉的拒绝。从那天起，她再也没有在深夜给你发过消息，也没有再试图干涉你去不去酒吧。你们变成了见面点头的普通校友。你依旧是那个浪子，只是生命里再也没有那个愿意在空教室等你补课的女孩了。",
          },
        },
        {
          id: "su_scene_ending_bad_cold",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她停在原地，脸色变了变，最后扯出一个尴尬的笑。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "……原来是这样。差点以为你转性了。",
            },
            {
              id: "s2",
              sender: "system",
              content:
                "如果你昨天晚上选择了去朋友说的老地方，她此刻大概连尴尬的笑都挤不出来。她低着头快步走向了校门，没有再看你一眼。",
              delay: 2e3,
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "冰冷结局：回到平行线",
            desc: "你的理智和冷漠，像一盆冷水浇灭了她所有的试探。她本以为自己能成为改变你的那个人，却发现你根本不在乎。在一段感情即将萌芽时，最伤人的往往是轻描淡写的否定。第二天，你发现自己已经被她从微信列表里删除了。你又回到了那群狐朋狗友中间，却发现手里的酒不知为何变得索然无味。",
          },
        },
        {
          id: "su_ending_hidden_dominate",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你往前迈的半步让她下意识想退，却被你伸手轻轻拉住了手腕。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "谁、谁要管你的行程了！你别顺杆爬！",
            },
            {
              id: "a1",
              sender: "me",
              content: "哦？不管吗？那我明晚只好继续去喝酒了。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "她急了，反手抓紧了你的手腕，抬起头瞪着你。",
              delay: 2e3,
            },
            {
              id: "m2",
              sender: "her",
              content: "……你敢！以后不准再去酒吧了，只准听我的！",
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "隐藏结局：被驯服的浪子",
            desc: "你保留了坏男孩的痞气，却把它变成了专属于她一个人的偏爱。像她这样循规蹈矩却又带着点傲娇的学霸，最容易被这种强势又不失分寸的逗弄所打动。表面上看是她这个“小老师”管住了你，但实际上，在这场感情的博弈里，你才是那个稳稳占据主导权的人。从此以后，她的规则里，多了一个叫你的例外。",
          },
        },
        {
          id: "shen_scene_01",
          chapter: 1,
          title: "百团大战",
          timeLabel: "周四 · 15:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周四 下午 15:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "九月社团招新，广场上热浪滚滚。你作为外联部新干事，刚去后勤处搬完水。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "微信突然震动。平时在群里只发“收到”的副部长沈书仪，私戳了你。",
              delay: 1500,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 15:33",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "你去哪了？一转眼人就没影啦👀",
            },
            {
              id: "m2",
              sender: "her",
              content: "今天这天也太热了吧，感觉站在这里都要融化了🫠",
            },
            {
              id: "s_time2",
              sender: "system",
              content: "[TIME] 15:35",
              delay: 1e3,
            },
            {
              id: "m3",
              sender: "her",
              content:
                "[图片：一张穿着带跟单鞋的脚部特写，旁边是还没发完的厚厚一沓传单]",
            },
            {
              id: "m4",
              sender: "her",
              content: "还有大半包传单没发完，救命……谁懂啊😩",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "这么热学姐多喝热水。传单放那吧，我一会儿搬完水过去发。",
              replyText:
                "这么热学姐多喝点温水防中暑。传单放那吧，我一会儿搬完水过去发。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "shen_scene_01_ans_a",
              badgeText: "直男关怀",
            },
            {
              id: "b",
              label: "B",
              text: "穿单鞋站着肯定累啊，学姐你这鞋不符合人体工学。你去树荫下歇着，剩下的交给我。",
              replyText:
                "穿单鞋站着肯定累啊，学姐你这鞋不符合人体工学。你去树荫下歇着，剩下的交给我。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "shen_scene_01_ans_b",
              badgeText: "理工分析",
            },
            {
              id: "c",
              label: "C",
              text: "你在原地别动，我刚才在后勤处顺了个小风扇，马上给你拿过去。",
              replyText:
                "你在原地别动，我刚才在后勤处顺了个小风扇，马上给你拿过去。",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "shen_scene_01_ans_c",
              badgeText: "靠谱行动派",
            },
            {
              id: "d",
              label: "D",
              text: "大热天的发了也没人看，学姐你找个垃圾桶扔了吧。",
              replyText: "大热天的发了也没人看，学姐你找个垃圾桶扔了吧。",
              affectionDelta: -5,
              anxietyDelta: 5,
              nextScene: "shen_scene_01_ans_d",
              badgeText: "危险发言",
            },
          ],
        },
        {
          id: "shen_scene_01_ans_a",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "……大热天的喝热水，你想热死我呀！",
            },
            {
              id: "m2",
              sender: "her",
              content: "不过看在你愿意帮我发传单的份上，原谅你了。快点来哦~",
            },
            { id: "a1", sender: "me", content: "好", delay: 1500 },
            {
              id: "s1",
              sender: "system",
              content: "虽然觉得你好笑，但她还是乖乖退到了阴凉处等你。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_02_main",
        },
        {
          id: "shen_scene_01_ans_b",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "噗……人体工学都出来了，学弟你这是什么清奇的脑回路。",
            },
            {
              id: "m2",
              sender: "her",
              content: "不过说真的，脚确实好酸。那我在主席台后面等你哦。",
            },
            { id: "a1", sender: "me", content: "好", delay: 1500 },
          ],
          autoNext: "shen_scene_02_main",
        },
        {
          id: "shen_scene_01_ans_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "哇！你是什么救星下凡！" },
            { id: "a1", sender: "me", content: "哈哈", delay: 1500 },
            {
              id: "s1",
              sender: "system",
              content:
                "十分钟后，你拿着小风扇和冰镇矿泉水回到了她面前。她看着你满头大汗的样子，递给了你一张纸巾。",
              delay: 2e3,
            },
          ],
          autoNext: "shen_scene_02_main",
        },
        {
          id: "shen_scene_01_ans_d",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content:
                "扔垃圾桶？被校学生会拍到，我们部门这个月的考核分就扣光了哦🙅‍♀️",
            },
            { id: "a1", sender: "me", content: "噢噢", delay: 1500 },
            {
              id: "s1",
              sender: "system",
              content: "隔着屏幕都能感觉到她对你这个“馊主意”的无语。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_02_main",
        },
        {
          id: "shen_scene_02_main",
          chapter: 1,
          title: "学姐的试探",
          timeLabel: "周四 · 19:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周四 晚上 19:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "傍晚，招新活动结束，你们各自回了宿舍。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content: "呼……终于收工啦！感觉半条命都没了😵‍💫 今天多亏有你！",
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 19:05",
              delay: 1e3,
            },
            {
              id: "m2",
              sender: "her",
              content:
                "把你学号发我一下哦，我把这半天的志愿时长先给你录进系统里~📝",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "[发学号] 好的学姐，谢谢学姐。",
              replyText: "我的学号是2023xxxx。好的学姐，谢谢学姐。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "shen_scene_02_ans_a",
              badgeText: "过于客套",
            },
            {
              id: "b",
              label: "B",
              text: "[发学号] 今天出了好多汗，我先去洗澡了，学姐你也早点歇着。",
              replyText:
                "我的学号是2023xxxx。今天出了好多汗，我先去洗澡了，学姐你也早点歇着。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "shen_scene_02_ans_b",
              badgeText: "直奔主题",
            },
            {
              id: "c",
              label: "C",
              text: "[发学号] 时长不着急。学姐今天也挺辛苦的，脚还疼吗？",
              replyText:
                "我的学号是2023xxxx。时长不着急。学姐今天也挺辛苦的，脚还疼吗？",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "shen_scene_02_ans_c",
              badgeText: "细节关心",
            },
          ],
        },
        {
          id: "shen_scene_02_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "收到啦。你这也太客气了。" },
            {
              id: "s1",
              sender: "system",
              content: "你在她的列表里成功建立了一个“客套学弟”的标签。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_03_night",
        },
        {
          id: "shen_scene_02_ans_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "去吧去吧，洗个澡舒服点。" },
            { id: "m2", sender: "her", content: "真是个干脆利落的人。" },
            { id: "a1", sender: "me", content: "好嘞", delay: 1500 },
          ],
          autoNext: "shen_scene_03_night",
        },
        {
          id: "shen_scene_02_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "还行，回宿舍泡了个脚好多了。",
            },
            {
              id: "m2",
              sender: "her",
              content: "谢谢关心啦，学弟还挺细心的嘛。",
            },
            { id: "a1", sender: "me", content: "嘿嘿", delay: 1500 },
          ],
          autoNext: "shen_scene_03_night",
        },
        {
          id: "shen_scene_03_night",
          chapter: 1,
          title: "深夜的树洞",
          timeLabel: "周四 · 22:30",
          messages: [
            { id: "s0", sender: "system", content: "[TIME] 22:30", delay: 400 },
            {
              id: "s1",
              sender: "system",
              content: "晚上十点半。你刚打完一局游戏，手机震了一下。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "[图片：一杯冰美式，背景是一堆凌乱的赞助合同]",
            },
            {
              id: "m2",
              sender: "her",
              content: "终于把名单核对完了……大半夜还在肝表格，纯纯社畜实锤了🥲",
            },
            {
              id: "a1",
              sender: "me",
              content: "这么晚还喝咖啡，晚上不用睡了？",
              delay: 1500,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 22:35",
              delay: 800,
            },
            {
              id: "m3",
              sender: "her",
              content:
                "没办法呀，明天开会要用。其实你跟其他大一新生还挺不一样的。他们遇到事情就知道邀功，你倒好，一个人把活全干了，连话都不多说两句。",
            },
            {
              id: "m4",
              sender: "her",
              content: "有时候觉得当干部挺累的，连个能说真心话的人都没有 😔",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "熬夜对身体不好，容易掉头发，学姐还是早点睡吧。",
              replyText: "熬夜对身体不好，容易掉头发，学姐还是早点睡吧。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "shen_scene_03_ans_a",
              badgeText: "致命直男",
            },
            {
              id: "b",
              label: "B",
              text: "别这么想，你看大家都挺听你安排的，说明你做得很好啊。",
              replyText: "别这么想，你看大家都挺听你安排的，说明你做得很好啊。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "shen_scene_03_ans_b",
              badgeText: "普通安慰",
            },
            {
              id: "c",
              label: "C",
              text: "表格发我吧，我会弄Excel，帮你弄完你赶紧睡。",
              replyText: "表格发我吧，我会弄Excel函数的，帮你弄完你赶紧睡。",
              affectionDelta: 20,
              anxietyDelta: -10,
              nextScene: "shen_scene_03_ans_c",
              badgeText: "硬核帮忙",
            },
          ],
        },
        {
          id: "shen_scene_03_ans_a",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "……你这人，会不会安慰女孩子啊！",
            },
            {
              id: "m2",
              sender: "her",
              content: "气死我了，我没有掉头发！晚安！",
            },
          ],
          autoNext: "shen_scene_04_sleep",
        },
        {
          id: "shen_scene_03_ans_b",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "嗯，也许吧。" },
            {
              id: "m2",
              sender: "her",
              content: "不早了，你早点休息吧，晚安🌙",
            },
          ],
          autoNext: "shen_scene_04_sleep",
        },
        {
          id: "shen_scene_03_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "诶？真的假的，你还会用高级函数？",
            },
            {
              id: "m2",
              sender: "her",
              content: "不用啦，我都快弄完了。不过……谢谢你哦，学弟。",
            },
            {
              id: "s1",
              sender: "system",
              content:
                "虽然没要你帮忙，但她似乎被你这种笨拙又实在的靠谱逗笑了。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_04_sleep",
        },
        {
          id: "shen_scene_04_sleep",
          chapter: 1,
          title: "第一夜",
          messages: [
            {
              id: "a1",
              sender: "me",
              content: "好，那学姐早点睡。",
              delay: 1e3,
            },
          ],
          autoNext: "shen_scene_05",
        },
        {
          id: "shen_scene_05",
          chapter: 2,
          title: "突如其来的暴雨",
          timeLabel: "周五 · 17:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周五 17:30，便利店屋檐下。你和沈书仪正在躲雨。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "嘶……好冷。这雨怎么说下就下。",
            },
            {
              id: "s1",
              sender: "system",
              content: "一辆外卖车驶过溅起大片泥水，你下意识将她拉进怀里挡住。",
              delay: 1500,
            },
            { id: "m2", sender: "her", content: "（惊魂未定）……谢谢。" },
            {
              id: "s2",
              sender: "system",
              content: "晚上 21:00，各自回宿舍后，你收到了她的微信。",
              delay: 2e3,
            },
            {
              id: "m3",
              sender: "her",
              content:
                "{name}，你那件衣服洗了吗？泥点子很难洗的，要不我明天拿去干洗店帮你洗吧？🥺",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "早丢洗衣机洗干净了，一件破T恤而已，哪用得着干洗。",
              replyText: "早丢洗衣机洗干净了，一件破T恤而已，哪用得着干洗。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "shen_scene_05_ans_a",
              badgeText: "心大直男",
            },
            {
              id: "b",
              label: "B",
              text: "不用麻烦学姐啦，我已经洗了。你下午没被冻感冒吧？",
              replyText: "不用麻烦学姐啦，我已经洗了。你下午没被冻感冒吧？",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "shen_scene_05_ans_b",
              badgeText: "贴心反问",
            },
            {
              id: "c",
              label: "C",
              text: "衣服倒是洗了，就是后背被砸得隐隐作痛。学姐打算怎么补偿我？",
              replyText:
                "衣服倒是洗了，就是后背被砸得隐隐作痛。学姐打算怎么补偿我？",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "shen_scene_05_ans_c",
              badgeText: "借机邀功",
            },
          ],
        },
        {
          id: "shen_scene_05_ans_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……好吧，你心可真大。" },
            {
              id: "a1",
              sender: "me",
              content: "小事，男生没那么娇贵。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_06_main",
        },
        {
          id: "shen_scene_05_ans_b",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我没感冒，回来就洗了热水澡啦。",
            },
            {
              id: "a1",
              sender: "me",
              content: "那就好，我还怕你因为我挨了冻。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_06_main",
        },
        {
          id: "shen_scene_05_ans_c",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "啊？真的很痛吗？" },
            {
              id: "m2",
              sender: "her",
              content: "那、那我明天请你吃大餐补偿你！",
            },
            {
              id: "a1",
              sender: "me",
              content: "开玩笑的，没那么夸张。不过大餐我记下了啊。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_06_main",
        },
        {
          id: "shen_scene_06_main",
          chapter: 2,
          title: "直男的防守",
          timeLabel: "周五 · 21:05",
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "总之今天下午……真的谢谢你啦 ✨",
            },
            {
              id: "m2",
              sender: "her",
              content: "其实下午那时候，你突然把我拉进怀里……我离你那么近。",
            },
            {
              id: "m3",
              sender: "her",
              content: "我的心跳突然漏了一拍，跳得好快 🫣",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "突然受惊心跳加速是正常的应激反应，学姐早点休息。",
              replyText:
                "突然受惊心跳加速是正常的应激反应，学姐你要是觉得还不舒服，早点休息。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "shen_scene_06_ans_a",
              badgeText: "理科男的分析",
            },
            {
              id: "b",
              label: "B",
              text: "是不是我当时拉你太用力，勒得喘不过气了？抱歉啊。",
              replyText:
                "是不是我当时拉你的时候太用力，把你勒得喘不过气了？抱歉啊。",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "shen_scene_06_ans_b",
              badgeText: "笨拙道歉",
            },
            {
              id: "c",
              label: "C",
              text: "其实当时我也挺紧张的，怕泥水溅到我新买的鞋上。",
              replyText: "其实当时我也挺紧张的，我怕泥水溅到我新买的鞋上。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "shen_scene_06_ans_c",
              badgeText: "注孤生回答",
            },
          ],
        },
        {
          id: "shen_scene_06_ans_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……应激反应？" },
            {
              id: "m2",
              sender: "her",
              content: "你这脑子里装的都是什么啊！气死我了！",
            },
            { id: "m3", sender: "her", content: "不理你了，呆瓜学弟！" },
          ],
          autoNext: "shen_scene_06_sleep",
        },
        {
          id: "shen_scene_06_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……你真的是个木头。" },
            { id: "m2", sender: "her", content: "没勒着我。" },
            {
              id: "m3",
              sender: "her",
              content: "算了，跟你这直男说不通。早点睡吧你！",
            },
          ],
          autoNext: "shen_scene_06_sleep",
        },
        {
          id: "shen_scene_06_ans_c",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            { id: "m2", sender: "her", content: "那你和你的鞋过一辈子去吧！" },
          ],
          autoNext: "shen_scene_06_sleep",
        },
        {
          id: "shen_scene_06_sleep",
          chapter: 2,
          title: "暗流",
          timeLabel: "周五 · 23:00",
          messages: [
            {
              id: "a1",
              sender: "me",
              content: "哦……那晚安学姐。",
              delay: 1200,
            },
            { id: "s1", sender: "system", content: "夜深了。", delay: 1500 },
          ],
          autoNext: "shen_scene_07",
        },
        {
          id: "shen_scene_07",
          chapter: 3,
          title: "部门聚餐的干饭人",
          timeLabel: "周六 · 19:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周六 晚上 19:30",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "外联部迎新聚餐，你被安排坐在副部长沈书仪旁边。",
              delay: 1200,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "大家都忙着敬酒、社交、拉关系。只有你，两耳不闻窗外事，一心一意对付面前的那盘蒜蓉大虾。",
              delay: 1500,
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 19:45",
              delay: 1e3,
            },
            {
              id: "s3",
              sender: "system",
              content: "坐在你旁边的沈书仪突然在微信上私戳了你。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "学弟，你这干饭的速度也太惊人了吧？👀",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "大家都在聊天，就你一个人在疯狂剥虾。你都不跟我喝一杯的吗？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "喝酒伤肝。学姐你昨天还熬夜做表格，喝点热茶吧。",
              replyText: "喝酒伤肝。学姐你昨天还熬夜做表格，喝点热茶吧。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "shen_scene_07_ans_a",
              badgeText: "硬核养生",
            },
            {
              id: "b",
              label: "B",
              text: "因为我交了聚餐费啊，得吃回本。学姐你想吃虾吗？我让服务员再上一盘。",
              replyText:
                "因为我交了聚餐费啊，得吃回本。学姐你想吃虾吗？我让服务员再上一盘。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "shen_scene_07_ans_b",
              badgeText: "务实干饭",
            },
            {
              id: "c",
              label: "C",
              text: "我这叫用行动抵制无效社交。学姐要是觉得无聊，我这有刚剥好的虾，分你两个？",
              replyText:
                "我这叫用行动抵制无效社交。学姐要是觉得无聊，我这有刚剥好的虾，分你两个？",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "shen_scene_07_ans_c",
              badgeText: "直男投喂",
            },
          ],
        },
        {
          id: "shen_scene_07_ans_a",
          chapter: 3,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你转头顺手给她倒了一杯滚烫的大麦茶。",
              delay: 1e3,
            },
            { id: "m1", sender: "her", content: "……我谢谢你啊。" },
            {
              id: "m2",
              sender: "her",
              content: "行吧，看在你还记得我昨天熬夜的份上，喝茶就喝茶。",
            },
          ],
          autoNext: "shen_scene_08_main",
        },
        {
          id: "shen_scene_07_ans_b",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "噗……你这脑子里除了工作就是吃吗？",
            },
            {
              id: "m2",
              sender: "her",
              content: "不用加了。你要是真觉得回本了，一会儿帮我挡两杯酒？",
            },
            {
              id: "a1",
              sender: "me",
              content: "没问题，包在我身上。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_08_main",
        },
        {
          id: "shen_scene_07_ans_c",
          chapter: 3,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "你把骨碟里剥好的几只虾推到了她面前。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content: "哇，这可是你说的哦，那我不客气啦~",
            },
            {
              id: "m2",
              sender: "her",
              content: "手艺不错嘛，学弟。这算不算你在偷偷贿赂副部长？",
            },
            {
              id: "a1",
              sender: "me",
              content: "算同事之间的资源共享。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_08_main",
        },
        {
          id: "shen_scene_08_main",
          chapter: 3,
          title: "深夜的朋友圈",
          timeLabel: "周六 · 23:15",
          messages: [
            { id: "s0", sender: "system", content: "[TIME] 23:15", delay: 400 },
            {
              id: "s1",
              sender: "system",
              content:
                "聚餐结束，你回到宿舍刚洗完澡，刷到了沈书仪一分钟前发的朋友圈。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content:
                "[图片：一张抱着毛绒小熊的自拍，女生穿着睡衣，眼神有些可怜巴巴，但构图和光线显然是精心找过角度的]",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "配文：“周末晚上好无聊，想看新出的那个恐怖片，可是不敢一个人看👻 有没有人来救救我~”",
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 23:18",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "你睡了吗？" },
            { id: "a1", sender: "me", content: "还没。怎么了？", delay: 1200 },
            {
              id: "m4",
              sender: "her",
              content: "你没看到我刚才发的朋友圈吗？[猫猫委屈.jpg]",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "看到了。你那个娃娃是盗版的吧？正版的小熊眼睛没那么开。",
              replyText:
                "看到了。不过学姐，你抱着的那个娃娃好像是盗版的，正版的小熊眼睛没那么开。",
              affectionDelta: -5,
              anxietyDelta: 15,
              nextScene: "shen_scene_08_ans_a",
              badgeText: "致命华点",
            },
            {
              id: "b",
              label: "B",
              text: "看到了。恐怖片都是假的，从科学的角度来说，世上没有鬼，建议你相信唯物主义。",
              replyText:
                "看到了。但恐怖片都是人演出来的，从科学的角度来说世上没有鬼，建议学姐相信唯物主义，直接看就行。",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "shen_scene_08_ans_b",
              badgeText: "科学破除迷信",
            },
            {
              id: "c",
              label: "C",
              text: "你想看哪部？我发你个网盘链接。你要是实在怕，我们可以连麦看，有高能预警我告诉你。",
              replyText:
                "你想看哪部？我发你个网盘链接。你要是实在怕，我们可以连麦看，有高能预警我提前告诉你。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "shen_scene_08_ans_c",
              badgeText: "硬核陪伴",
            },
          ],
        },
        {
          id: "shen_scene_08_ans_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "？？？" },
            {
              id: "m2",
              sender: "her",
              content: "你盯着我照片看了半天，就看出来我的熊是盗版的？！",
            },
            { id: "m3", sender: "her", content: "我真的要被你气死了！再见！" },
            {
              id: "a1",
              sender: "me",
              content: "哦……那晚安学姐。",
              delay: 1200,
            },
            {
              id: "s1",
              sender: "system",
              content: "虽然发着火，但屏幕那头的她已经被你的脑回路气笑了。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_09_sleep",
        },
        {
          id: "shen_scene_08_ans_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            { id: "m2", sender: "her", content: "沈书仪撤回了一条消息" },
            {
              id: "m3",
              sender: "her",
              content: "谢谢你啊，我这就去学习。晚安！",
            },
            {
              id: "a1",
              sender: "me",
              content: "哦……那晚安学姐。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_09_sleep",
        },
        {
          id: "shen_scene_08_ans_c",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "连麦？好呀好呀！" },
            {
              id: "m2",
              sender: "her",
              content: "那我去找个耳机！你把链接发我！",
            },
            { id: "a1", sender: "me", content: "好", delay: 1200 },
            {
              id: "s1",
              sender: "system",
              content:
                "那天晚上，你们连麦看了一部极度烂俗的恐怖片。每到恐怖镜头，你就用干巴巴的语气解说血浆的物理抛物线，硬是把恐怖片看成了搞笑片。",
              delay: 2500,
            },
          ],
          autoNext: "shen_scene_09_sleep",
        },
        {
          id: "shen_scene_09_sleep",
          chapter: 3,
          title: "不解风情的夜",
          timeLabel: "周日 · 01:00",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "深夜，聊天框终于安静了下来。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_10",
        },
        {
          id: "shen_scene_10",
          chapter: 4,
          title: "办公室里的香气",
          timeLabel: "周一 · 16:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周一 16:00，外联部办公室。部长在沙发上补觉，非常安静。",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "沈书仪悄悄拉椅子坐到你旁边。她凑得很近，身上带着淡淡的橘子香气，拿出手机给你发微信。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}，你帮我看看这个PPT排版，我总觉得哪里不太对劲~",
            },
            { id: "m2", sender: "her", content: "[图片：一张PPT截图]" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "学姐，你香水喷得有点多，我其实有点轻微的鼻炎，能稍微离远一点吗？",
              replyText:
                "学姐，你香水喷得有点多，我其实有点轻微的鼻炎，能稍微离远一点吗？",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "shen_scene_10_ans_a",
              badgeText: "注孤生发言",
            },
            {
              id: "b",
              label: "B",
              text: "排版没问题，但标题字号没统一。我帮你设个母版一键替换。",
              replyText:
                "排版没问题，但标题字号没统一。我帮你设个母版一键替换了，以后不用手动改。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "shen_scene_10_ans_b",
              badgeText: "高效工具人",
            },
            {
              id: "c",
              label: "C",
              text: "没啥大问题。不过你这橘子味香水闻得我有点饿了，晚上去吃糖醋里脊？",
              replyText:
                "看完了，没啥大问题。不过你这香水是橘子味的？闻得我有点饿了。晚上去食堂吃糖醋里脊不？",
              affectionDelta: 25,
              anxietyDelta: -5,
              nextScene: "shen_scene_10_ans_c",
              badgeText: "吃货同频",
            },
          ],
        },
        {
          id: "shen_scene_10_ans_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……哦，不好意思啊。" },
            {
              id: "a1",
              sender: "me",
              content: "没事，你把椅子稍微挪过去一点点就行。",
              delay: 1500,
            },
            { id: "m2", sender: "her", content: "我挪回我自己的工位了。" },
            { id: "m3", sender: "her", content: "PPT我自己改，不用你看。" },
            {
              id: "a2",
              sender: "me",
              content: "行，有不懂的再发我。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_11_night",
        },
        {
          id: "shen_scene_10_ans_b",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "哇……你还会设母版？" },
            { id: "m2", sender: "her", content: "虽然但是……谢谢你啊。" },
            {
              id: "a1",
              sender: "me",
              content: "基操勿六。以后这种体力活教给电脑干。",
              delay: 1500,
            },
            { id: "m3", sender: "her", content: "知道啦知道啦，电脑高手。" },
          ],
          autoNext: "shen_scene_11_night",
        },
        {
          id: "shen_scene_10_ans_c",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content:
                "你这人到底是真傻还是装傻呀，喷香水是为了让你饿的吗！[敲打]",
            },
            {
              id: "m2",
              sender: "her",
              content: "不过……糖醋里脊可以有！那你一会儿得帮我打饭！",
            },
            {
              id: "a1",
              sender: "me",
              content: "没问题，你负责占座，我负责打饭。",
              delay: 1500,
            },
            {
              id: "a2",
              sender: "me",
              content: "等部长醒了我们就去。",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "好滴~ [比心]" },
          ],
          autoNext: "shen_scene_11_night",
        },
        {
          id: "shen_scene_11_night",
          chapter: 4,
          title: "深夜的体温计",
          timeLabel: "周一 · 22:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "22:30，你正在寝室刷手机。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "可能那天淋雨没好透，今天又吹了空调……",
            },
            {
              id: "m2",
              sender: "her",
              content: "[图片：一张测温枪的照片，上面显示 38.2℃]",
            },
            {
              id: "m3",
              sender: "her",
              content: "头好痛。室友今晚去网吧包夜了，宿舍就我一个人😷",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "多喝点热水，捂着被子发发汗就好了。如果明天还不行，去校医院看看。",
              replyText:
                "多喝点热水，捂着被子发发汗就好了。如果明天还不行，去校医院看看。",
              affectionDelta: -10,
              anxietyDelta: 10,
              nextScene: "shen_scene_11_ans_a",
              badgeText: "经典直男语录",
            },
            {
              id: "b",
              label: "B",
              text: "我找我妈要了个治感冒的土方子：葱白加姜片熬水喝。你要不要试试？",
              replyText:
                "我找我妈要了个土方子：葱白加姜片熬水喝。你宿舍有锅吗？要不要试试？",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "shen_scene_11_ans_b",
              badgeText: "清奇土方",
            },
            {
              id: "c",
              label: "C",
              text: "超过38度别硬抗了，必须吃药。我给你点跑腿，退烧药马上到。",
              replyText:
                "超过38度别硬抗了，必须吃药。我给你点了个跑腿，买了退烧药、退热贴和两瓶电解质水，大概二十分钟后到你宿舍楼下。",
              affectionDelta: 30,
              anxietyDelta: -15,
              nextScene: "shen_scene_11_ans_c",
              badgeText: "硬核解决问题",
            },
          ],
        },
        {
          id: "shen_scene_11_ans_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            {
              id: "m2",
              sender: "her",
              content: "行，多喝热水是吧。我谢谢你。",
            },
            {
              id: "a1",
              sender: "me",
              content: "不客气，你多盖两床被子，别踢被子。",
              delay: 1500,
            },
            { id: "m3", sender: "her", content: "……睡了！" },
          ],
          autoNext: "shen_scene_12_sleep",
        },
        {
          id: "shen_scene_11_ans_b",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我都发烧了，你让我去哪里给你找葱白和姜片啊！",
            },
            {
              id: "m2",
              sender: "her",
              content: "你这人真的……气得我头更痛了。",
            },
            {
              id: "a1",
              sender: "me",
              content: "那我明天去食堂后厨给你顺一点过来？",
              delay: 1500,
            },
            {
              id: "m3",
              sender: "her",
              content: "我求你别去丢人了！我自己找点热水喝算了。",
            },
          ],
          autoNext: "shen_scene_12_sleep",
        },
        {
          id: "shen_scene_11_ans_c",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "……你这人，真的连一句好听的软话都不会说。",
            },
            {
              id: "m2",
              sender: "her",
              content: "但是……谢谢。这笔买药的钱我明天必须转你。",
            },
            { id: "a1", sender: "me", content: "钱的事再说。", delay: 1200 },
            {
              id: "a2",
              sender: "me",
              content: "骑手还有五分钟到，你穿厚点下楼拿，别吹风。",
              delay: 1e3,
            },
            { id: "m3", sender: "her", content: "知道啦。" },
            { id: "m4", sender: "her", content: "拿到药了。晚安，{name}。" },
          ],
          autoNext: "shen_scene_12_sleep",
        },
        {
          id: "shen_scene_12_sleep",
          chapter: 4,
          title: "直男的靠谱",
          timeLabel: "周一 · 23:30",
          messages: [
            {
              id: "a1",
              sender: "me",
              content: "吃完药早点睡，晚安。",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_13",
        },
        {
          id: "shen_scene_13",
          chapter: 5,
          title: "学姐的烦恼",
          timeLabel: "周二 · 18:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "[TIME] 周二 下午 18:00",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content: "今天一整天，沈书仪都没有在微信上找你。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content: "直到傍晚六点，她的消息才弹了出来。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content: "呼……终于把迎新晚会的策划案改完了。",
            },
            { id: "m2", sender: "her", content: "脑细胞死了一大半 😵" },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 18:05",
              delay: 1e3,
            },
            {
              id: "m3",
              sender: "her",
              content: "对了，我今天安静了一整天，你居然一条消息都不发给我？",
            },
            {
              id: "m4",
              sender: "her",
              content: "你就不怕我感冒又严重了吗！[生气]",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我看你步数今天才两百多步，猜到你在宿舍赶策划，就没打扰你。",
              replyText:
                "我看你微信步数今天才两百多步，猜到你肯定在宿舍赶策划，就没打扰你。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "shen_scene_13_ans_a",
              badgeText: "硬核推理",
            },
            {
              id: "b",
              label: "B",
              text: "我不找你，你可以找我啊。",
              replyText: "我不找你，你可以找我啊。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "shen_scene_13_ans_b",
              badgeText: "直男甩锅",
            },
            {
              id: "c",
              label: "C",
              text: "我的错。为了赔罪，今晚带你去吃学校后门那家石锅拌饭？我排好队了。",
              replyText:
                "我的错。为了赔罪，今晚带你去吃学校后门那家新开的石锅拌饭？我已经在排队了。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "shen_scene_13_ans_c",
              badgeText: "干饭直男",
            },
          ],
        },
        {
          id: "shen_scene_13_ans_a",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "……" },
            { id: "m2", sender: "her", content: "你连我的微信步数都监视？！" },
            { id: "a1", sender: "me", content: "巧合一定巧合", delay: 1200 },
            {
              id: "m3",
              sender: "her",
              content:
                "学弟，你的观察力用在谈恋爱上真的挺可怕的。不过……算你过关。",
            },
          ],
          autoNext: "shen_scene_14_night",
        },
        {
          id: "shen_scene_13_ans_b",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "我……！" },
            {
              id: "m2",
              sender: "her",
              content: "你到底懂不懂什么叫照顾女孩子的情绪啊！木头！",
            },
            {
              id: "a1",
              sender: "me",
              content: "这方面我还真不在行",
              delay: 1200,
            },
          ],
          autoNext: "shen_scene_14_night",
        },
        {
          id: "shen_scene_13_ans_c",
          chapter: 5,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "对方正在输入中……",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "算你识相！" },
            {
              id: "m2",
              sender: "her",
              content: "给我留个靠窗的座位，我换个衣服马上过去！",
            },
            { id: "a1", sender: "me", content: "好", delay: 1200 },
            {
              id: "s2",
              sender: "system",
              content:
                "这顿饭吃得很开心，你负责烤肉，她负责吃，顺便听她吐槽了一晚上的学生会工作。",
              delay: 2e3,
            },
          ],
          autoNext: "shen_scene_14_night",
        },
        {
          id: "shen_scene_14_night",
          chapter: 5,
          title: "直球对决",
          timeLabel: "周二 · 22:00",
          messages: [
            { id: "s0", sender: "system", content: "[TIME] 22:00", delay: 400 },
            {
              id: "s1",
              sender: "system",
              content: "晚上十点，洗漱完毕的你收到了她的消息。",
              delay: 1e3,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}，我发现你这人真的很奇怪。",
            },
            {
              id: "m2",
              sender: "her",
              content: "别的男生追女生，都是天天发早安晚安，变着法子找话题。",
            },
            {
              id: "s_time1",
              sender: "system",
              content: "[TIME] 22:05",
              delay: 1e3,
            },
            {
              id: "m3",
              sender: "her",
              content:
                "你倒好，要么是在干活，要么是用Excel帮我设母版，要么就是带我去疯狂干饭。",
            },
            {
              id: "m4",
              sender: "her",
              content: "你到底有没有把我当成女孩子看待呀？",
            },
            {
              id: "s_time2",
              sender: "system",
              content: "[TIME] 22:10",
              delay: 1e3,
            },
            { id: "m5", sender: "her", content: "明晚八点，情人坡操场见。" },
            {
              id: "m6",
              sender: "her",
              content: "有些话，我觉得当面问你比较好。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "好，明晚见。",
              replyText: "好，明晚见。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "shen_scene_15_sleep",
              badgeText: "老实答应",
            },
            {
              id: "b",
              label: "B",
              text: "情人坡晚上蚊子多，记得喷点花露水。明晚见。",
              replyText: "情人坡晚上蚊子多，记得喷点花露水。明晚见。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "shen_scene_15_sleep",
              badgeText: "不忘提醒",
            },
            {
              id: "c",
              label: "C",
              text: "我不光把你当女孩子，我还把你当学姐呢。明晚见。",
              replyText: "我不光把你当女孩子，我还把你当学姐呢。明晚见。",
              affectionDelta: -5,
              anxietyDelta: 5,
              nextScene: "shen_scene_15_sleep",
              badgeText: "重点偏移",
            },
          ],
        },
        {
          id: "shen_scene_15_sleep",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "……行。明晚见。" },
            { id: "m2", sender: "her", content: "你要是敢迟到，你就死定了。" },
            {
              id: "a1",
              sender: "me",
              content: "哦……那晚安学姐。",
              delay: 1200,
            },
            {
              id: "s1",
              sender: "system",
              content: "你定了个明晚七点半的闹钟，安心睡去。",
              delay: 1500,
            },
          ],
          autoNext: "shen_scene_16",
        },
        {
          id: "shen_scene_16",
          chapter: 6,
          title: "晚风与答案",
          timeLabel: "周三 · 20:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周三 晚上 20:00，情人坡草坪。",
              delay: 400,
            },
            {
              id: "s1",
              sender: "system",
              content:
                "晚风吹拂，你和沈书仪并肩坐在草坪上。她今天没有穿平时那种有气场的学姐穿搭，而是换了一身柔软的米色针织衫和牛仔裤。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "周围散步的学生有些多，气氛暧昧又紧张。你们并排坐了十分钟，谁也没好意思先开口打破沉默。",
              delay: 2e3,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "突然，你的手机震动了一下。坐在你身边的她，抱着膝盖，低着头给你发来了一条微信。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你今晚还真准时啊，七点五十五就在这等我了。",
            },
            { id: "s_time1", sender: "system", content: "20:05", delay: 1e3 },
            {
              id: "m2",
              sender: "her",
              content: "那个……我昨晚问你的问题，你想好答案了吗？",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "这段时间，又是帮我核对账目，又是替我挡雨，大半夜还去给我买退烧药……",
            },
            {
              id: "s4",
              sender: "system",
              content:
                "你转头看了她一眼，发现她正死死盯着手机屏幕，耳根在夜色中透着明显的微红。",
              delay: 1500,
            },
            {
              id: "m4",
              sender: "her",
              content: "学弟，你到底是不是喜欢我呀？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我是部门干事，帮副部长排忧解难不是应该的吗？",
              replyText: "我是部门干事，帮副部长排忧解难不是应该的吗？",
              affectionDelta: -20,
              anxietyDelta: 20,
              nextScene: "shen_ending_bad_coward",
              badgeText: "退缩闪躲",
            },
            {
              id: "b",
              label: "B",
              text: "我不习惯说那些虚的。但只要你需要，我一直都在。",
              replyText:
                "我这人比较直，不习惯说那些虚的。但只要你需要，我一直都在。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "shen_ending_good_steady",
              badgeText: "直男式表白",
            },
            {
              id: "c",
              label: "C",
              text: "喜欢啊。而且据我严谨的逻辑分析，学姐你也喜欢我。对吧？",
              replyText:
                "喜欢啊。而且据我严谨的逻辑分析，学姐昨天心跳加速、今天又主动约我，证明你也喜欢我。对吧？",
              affectionDelta: 30,
              anxietyDelta: -20,
              nextScene: "shen_ending_he_sweet",
              badgeText: "理科男反杀",
            },
            {
              id: "d",
              label: "D",
              text: "你闭上眼睛，把手伸过来，我给你个答案。",
              replyText: "你闭上眼睛，把手伸过来，我给你个答案。",
              affectionDelta: 20,
              anxietyDelta: 10,
              nextScene: "shen_ending_good_action",
              badgeText: "行动胜于言语",
            },
          ],
        },
        {
          id: "shen_ending_bad_coward",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "看着屏幕上的回复，她抱着膝盖的手指微微僵住了，眼里的光黯淡了下去。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "……这样啊。" },
            {
              id: "m2",
              sender: "her",
              content: "那我知道了。谢谢你这段时间的工作配合。",
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她站起身拍了拍草屑，轻声说了句“早点回去休息吧”，便独自转身走开了。",
              delay: 2e3,
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "遗憾结局：永远的学姐",
            desc: "你的过度迟钝和退缩，最终浇灭了她鼓起勇气的热情。从那天起，她又变回了那个客气、疏离的外联部副部长。你们的交集重新退回了工作群里的“收到”和Excel表格。你用绝对的安全距离，错过了一个满眼是你的女孩。",
          },
        },
        {
          id: "shen_ending_good_steady",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她看着屏幕，忍不住扑哧一声笑了出来。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你这人……连表白都这么一板一眼的。",
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她收起手机，往你身边挪近了一步，肩膀轻轻靠上了你的手臂，随后你的手机又震了一下。",
              delay: 1500,
            },
            {
              id: "m2",
              sender: "her",
              content:
                "那以后，我的Excel表格，还有我的三餐，就都交给你负责了哦。",
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "暖心结局：踏实的安全感",
            desc: "你不懂浪漫，也不会花言巧语。但你用最朴素的行动，给了她最大的安全感。在这个充满套路和试探的快餐恋爱时代，她偏偏就吃你这一套“直男的靠谱”。你们的恋爱没有轰轰烈烈，但每一天的相处都让人觉得无比踏实和安心。",
          },
        },
        {
          id: "shen_ending_he_sweet",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你的直球反杀让她瞬间愣住了，连脖子都肉眼可见地红了起来。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你……你胡说什么！谁喜欢你了！",
            },
            {
              id: "s2",
              sender: "system",
              content: "她羞恼地转过身想捶你的肩膀，却被你顺势握住了手腕。",
              delay: 1500,
            },
            {
              id: "a1",
              sender: "me",
              content: "现在心跳又加速了吧？这就是证据。",
              delay: 1200,
            },
            { id: "m2", sender: "her", content: "……你真的是个混蛋。" },
            {
              id: "s3",
              sender: "system",
              content:
                "她嘴上在微信里骂着，现实中却没有抽回手，而是顺从地任由你牵着，把头轻轻靠在了你的肩膀上。",
              delay: 2e3,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "甜蜜结局：逻辑满分",
            desc: "谁说理科直男不懂浪漫？你用最严谨的逻辑，完成了最甜蜜的反杀。那个习惯在人前维持高冷形象的副部长，在你面前彻底卸下了伪装，变成了一个会被你逗得炸毛、又会红着脸让你牵手的小女生。晚风吹过情人坡，你们的故事才刚刚开始。",
          },
        },
        {
          id: "shen_ending_good_action",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "她看着微信愣了一下，然后乖乖地闭上了眼睛，把手伸了过来，睫毛微微发颤。",
              delay: 1500,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "你从口袋里掏出一个防蚊手环，极其认真地戴在了她的手腕上。",
              delay: 1500,
            },
            {
              id: "s3",
              sender: "system",
              content:
                "她睁开眼，看着手腕上的绿色防蚊手环，拿出手机气鼓鼓地打字。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "……就这个？！" },
            {
              id: "a1",
              sender: "me",
              content:
                "草坪晚上蚊子多，别被咬了。走，带你去吃宵夜，男朋友请客。",
              delay: 1500,
            },
            { id: "m2", sender: "her", content: "……笨蛋。" },
            {
              id: "s4",
              sender: "system",
              content: "她发完这条消息，锁上屏幕，笑着挽住了你的手臂。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "搞笑甜结局：防蚊手环",
            desc: "你用极其直男的操作，把原本浪漫的气氛破坏得一干二净，却又硬生生地拐回了甜蜜的轨道。她被你气得毫无脾气，却又觉得这样的你真实得可爱。在以后的日子里，这段“防蚊手环表白”成了她吐槽你无数次的笑柄，也是她心底最甜的独家记忆。",
          },
        },
        {
          id: "chen_scene_01",
          chapter: 1,
          title: "烈日下的纸箱",
          timeLabel: "周五 · 15:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content:
                "九月，新生报到周。你正躺在床上打游戏，从小一起长大的发小陈盈盈发来了微信。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}！别睡了！快下楼当苦力！",
            },
            {
              id: "m2",
              sender: "her",
              content: "[图片：一个巨大的顺丰纸箱，放在男生宿舍一楼的台阶上]",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "我妈非让我给你带的鲜肉月饼，还有一堆零食。重死我了，手都勒红了！",
            },
            { id: "m4", sender: "her", content: "你活干完没？快下来救驾！" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我这局排位刚开，要不你放一楼宿管阿姨那，我待会拿？",
              replyText:
                "我这局排位刚开，要不你帮我放一楼宿管阿姨那，我待会拿？",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "chen_scene_01_ans_a",
              badgeText: "游戏直男",
            },
            {
              id: "b",
              label: "B",
              text: "哎呀我这局刚开，你在楼下阴凉处等我几分钟行不？",
              replyText: "哎呀我这局刚开，你在楼下阴凉处等我几分钟行不？",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "chen_scene_01_ans_b",
              badgeText: "稍显拖沓",
            },
            {
              id: "c",
              label: "C",
              text: "这么热的天你自己扛过来的？站阴凉处别动，我马上下来搬。",
              replyText:
                "这么热的天你自己扛过来的？站阴凉处别动，我马上下来搬。",
              affectionDelta: 15,
              anxietyDelta: -5,
              nextScene: "chen_scene_01_ans_c",
              badgeText: "靠谱发小",
            },
            {
              id: "d",
              label: "D",
              text: "替我谢谢阿姨！你站阴凉处等着，我这就下楼接驾！",
              replyText: "替我谢谢阿姨！你站阴凉处等着，我这就下楼接驾！",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "chen_scene_01_ans_d",
              badgeText: "幽默逗趣",
            },
          ],
        },
        {
          id: "chen_scene_01_ans_a",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "……行吧，网瘾少年。" },
            {
              id: "m2",
              sender: "her",
              content: "我放宿管阿姨桌子旁边了，你打完赶紧拿，月饼坏了算你的！",
            },
            { id: "a1", sender: "me", content: "好嘞，谢啦。", delay: 1e3 },
          ],
          autoNext: "chen_scene_02_main",
        },
        {
          id: "chen_scene_01_ans_b",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "知道啦，我在大厅吹风扇等你。",
            },
            { id: "m2", sender: "her", content: "你快点啊！" },
            { id: "a1", sender: "me", content: "马上马上。", delay: 1200 },
          ],
          autoNext: "chen_scene_02_main",
        },
        {
          id: "chen_scene_01_ans_c",
          chapter: 1,
          messages: [
            { id: "m1", sender: "her", content: "算你有良心！" },
            { id: "m2", sender: "her", content: "快点快点，我要热化了。" },
            { id: "a1", sender: "me", content: "已经在下楼了。", delay: 800 },
          ],
          autoNext: "chen_scene_02_main",
        },
        {
          id: "chen_scene_01_ans_d",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "准奏。记得给我带张纸巾，我满头大汗了。",
            },
            { id: "a1", sender: "me", content: "得嘞。", delay: 800 },
          ],
          autoNext: "chen_scene_02_main",
        },
        {
          id: "chen_scene_02_main",
          chapter: 1,
          title: "晚安的习惯",
          timeLabel: "周五 · 22:30",
          messages: [
            { id: "s0", sender: "system", content: "晚上 22:30。", delay: 400 },
            {
              id: "m1",
              sender: "her",
              content: "呼~ 终于把宿舍收拾完了，累散架了。",
            },
            { id: "s_time1", sender: "system", content: "22:40", delay: 600 },
            {
              id: "m2",
              sender: "her",
              content: "你晚上吃月饼了吗？味道没变吧？",
            },
            { id: "s_time2", sender: "system", content: "23:00", delay: 600 },
            { id: "m3", sender: "her", content: "干嘛呢？睡着啦？" },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "刚吃完，阿姨手艺还是那么好。今天搬行李太累了，先睡了。",
              replyText:
                "刚吃完，阿姨手艺还是那么好。今天搬行李太累了，先睡了。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "chen_scene_02_ans_a",
              badgeText: "疲惫直言",
            },
            {
              id: "b",
              label: "B",
              text: "挺好吃的。刚和室友聊天没看手机，你在新宿舍还习惯吗？",
              replyText: "挺好吃的。刚和室友聊天没看手机，你在新宿舍还习惯吗？",
              affectionDelta: 10,
              anxietyDelta: -5,
              nextScene: "chen_scene_02_ans_b",
              badgeText: "正常交流",
            },
            {
              id: "c",
              label: "C",
              text: "吃过了，还是原来的味道。今天辛苦你了，早点休息，明天带你逛校园。",
              replyText:
                "吃过了，还是原来的味道，替我谢谢阿姨。今天你最辛苦，早点休息，明天带你逛校园。",
              affectionDelta: 20,
              anxietyDelta: -10,
              nextScene: "chen_scene_02_ans_c",
              badgeText: "自然偏爱",
            },
          ],
        },
        {
          id: "chen_scene_02_ans_a",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "好吃就行！那你快休息吧，今天辛苦啦！晚安🌙",
            },
            { id: "a1", sender: "me", content: "晚安。", delay: 800 },
          ],
          autoNext: "chen_scene_03_sleep",
        },
        {
          id: "chen_scene_02_ans_b",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "还行，室友看着都挺好相处的。",
            },
            {
              id: "m2",
              sender: "her",
              content: "等十一放假回家，再让我妈给你做！",
            },
            {
              id: "a1",
              sender: "me",
              content: "好，早点睡吧，晚安。",
              delay: 1200,
            },
            { id: "m3", sender: "her", content: "晚安安！" },
          ],
          autoNext: "chen_scene_03_sleep",
        },
        {
          id: "chen_scene_02_ans_c",
          chapter: 1,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "嘿嘿，我妈要是知道你喜欢，肯定特高兴。",
            },
            {
              id: "m2",
              sender: "her",
              content: "那就说好了！明天你带路哦，晚安！",
            },
            { id: "a1", sender: "me", content: "好，晚安。", delay: 800 },
          ],
          autoNext: "chen_scene_03_sleep",
        },
        {
          id: "chen_scene_03_sleep",
          chapter: 1,
          title: "第一天结束",
          timeLabel: "周五 · 23:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "在这个完全陌生的大学校园里，你们依然是彼此最熟悉的依靠。",
              delay: 800,
            },
          ],
          autoNext: "chen_scene_04",
        },
        {
          id: "chen_scene_04",
          chapter: 2,
          title: "午饭的去向",
          timeLabel: "周六 · 11:00",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周六 上午 11:00",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "我们寝室的室友都和男朋友出去逛街了 [裂开]",
            },
            { id: "s1", sender: "system", content: "11:05", delay: 600 },
            {
              id: "m2",
              sender: "her",
              content: "{name}，中午去二食堂吃香锅不？",
            },
            { id: "s2", sender: "system", content: "11:15", delay: 600 },
            {
              id: "m3",
              sender: "her",
              content:
                "我在你们宿舍楼下那个长椅上等你哦~ 这里有只橘猫挺好玩的🐱",
            },
            {
              id: "s3",
              sender: "system",
              content:
                "这时，你的部门群里，副部长问有没有人去南门帮她搬一下赞助物资。",
              delay: 1500,
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我现在要帮部里的学姐去搬点东西，中午你先自己吃吧。",
              replyText: "我现在要帮部里的学姐去搬点东西，中午你先自己吃吧。",
              affectionDelta: -10,
              anxietyDelta: 15,
              nextScene: "chen_scene_04_ans_a",
              badgeText: "重友轻色",
            },
            {
              id: "b",
              label: "B",
              text: "部里临时有点急事，我得走不开，抱歉啊，晚上补上。",
              replyText: "部里临时有点急事，我得走不开，抱歉啊，晚上补上。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "chen_scene_04_ans_b",
              badgeText: "突发爽约",
            },
            {
              id: "c",
              label: "C",
              text: "我得先去南门帮个忙。你要是不嫌热，过来找我？弄完我们去校外吃。",
              replyText:
                "我得先去南门帮个忙。你要是不嫌热，过来找我？弄完我们去校外吃。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "chen_scene_04_ans_c",
              badgeText: "顺便邀请",
            },
            {
              id: "d",
              label: "D",
              text: "行，你跟猫玩会儿，我换个衣服马上下来。",
              replyText: "行，你跟猫玩会儿，我换个衣服马上下来。",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "chen_scene_04_ans_d",
              badgeText: "果断赴约",
            },
          ],
        },
        {
          id: "chen_scene_04_ans_a",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "啊？哪个学姐啊，你们很熟吗？",
            },
            {
              id: "a1",
              sender: "me",
              content: "外联部的副部，平时在部里挺照顾我的。",
              delay: 1200,
            },
            { id: "m2", sender: "her", content: "……哦，好吧。那你去忙吧。" },
            { id: "a2", sender: "me", content: "行，下次请你。", delay: 1e3 },
          ],
          autoNext: "chen_scene_05_main",
        },
        {
          id: "chen_scene_04_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "啊……我都走到你们楼下了诶🥲" },
            {
              id: "a1",
              sender: "me",
              content: "不好意思啊，确实有点急。",
              delay: 1200,
            },
            {
              id: "m2",
              sender: "her",
              content: "没事没事，你先忙正事！我自己去吃。",
            },
          ],
          autoNext: "chen_scene_05_main",
        },
        {
          id: "chen_scene_04_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "好！我马上骑共享单车过去找你！🏃‍♀️",
            },
            { id: "a1", sender: "me", content: "慢点骑，别摔着。", delay: 1e3 },
            {
              id: "s1",
              sender: "system",
              content:
                "十分钟后，她跑到南门，十分自然地帮你一起搬了物资，两人随后去吃了饭。",
              delay: 1800,
            },
          ],
          autoNext: "chen_scene_05_main",
        },
        {
          id: "chen_scene_04_ans_d",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "好嘞！不着急，你慢慢换。" },
            {
              id: "s1",
              sender: "system",
              content:
                "你无视了群里的消息，跑下楼时看到她正蹲在地上开心地逗猫。你们度过了一个愉快的下午。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_05_main",
        },
        {
          id: "chen_scene_05_main",
          chapter: 2,
          title: "成长的烦恼",
          timeLabel: "周六 · 21:00",
          messages: [
            { id: "s0", sender: "system", content: "21:00", delay: 400 },
            { id: "m1", sender: "her", content: "{name}，你回宿舍了吗？" },
            { id: "a1", sender: "me", content: "刚回。怎么了？", delay: 1200 },
            { id: "s_time1", sender: "system", content: "21:10", delay: 600 },
            {
              id: "m2",
              sender: "her",
              content: "没事，就是突然觉得，大学真的好大啊。",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "今天看新生群和社团群，感觉大家都好厉害，长得好看的也多。",
            },
            { id: "s_time2", sender: "system", content: "21:15", delay: 600 },
            {
              id: "m4",
              sender: "her",
              content:
                "你说……以后我们认识了各自的新朋友，有了各自的圈子，会不会就像别人说的那样，慢慢就不联系了？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "大家都会交新朋友的，这也是成长的一部分嘛，顺其自然就好。",
              replyText:
                "大家都会交新朋友的，这也是成长的一部分嘛，顺其自然就好。",
              affectionDelta: -5,
              anxietyDelta: 15,
              nextScene: "chen_scene_05_ans_a",
              badgeText: "过于理性",
            },
            {
              id: "b",
              label: "B",
              text: "别老胡思乱想了，先把下周的课表认全再说吧。",
              replyText: "别老胡思乱想了，先把下周的课表认全再说吧。",
              affectionDelta: -5,
              anxietyDelta: 10,
              nextScene: "chen_scene_05_ans_b",
              badgeText: "转移话题",
            },
            {
              id: "c",
              label: "C",
              text: "不会的，在一个学校呢，吃饭上课多得是见面的机会。",
              replyText: "不会的，在一个学校呢，吃饭上课多得是见面的机会。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "chen_scene_05_ans_c",
              badgeText: "正常宽慰",
            },
            {
              id: "d",
              label: "D",
              text: "新朋友归新朋友。陈盈盈，你在我这儿的位置，别人替代不了。",
              replyText:
                "新朋友归新朋友。陈盈盈，你在我这儿的位置，别人替代不了。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "chen_scene_05_ans_d",
              badgeText: "坚定偏爱",
            },
          ],
        },
        {
          id: "chen_scene_05_ans_a",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "嗯……你说得对。" },
            {
              id: "m2",
              sender: "her",
              content: "可能是刚离开家有点不适应吧。早点睡，晚安。",
            },
            { id: "a1", sender: "me", content: "晚安。", delay: 1e3 },
          ],
          autoNext: "chen_scene_06_sleep",
        },
        {
          id: "chen_scene_05_ans_b",
          chapter: 2,
          messages: [
            { id: "m1", sender: "her", content: "……哦，知道啦。" },
            { id: "m2", sender: "her", content: "那我去看课表了，晚安。" },
            { id: "a1", sender: "me", content: "晚安。", delay: 1e3 },
          ],
          autoNext: "chen_scene_06_sleep",
        },
        {
          id: "chen_scene_05_ans_c",
          chapter: 2,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "也是哦，反正跑得了和尚跑不了庙！",
            },
            { id: "m2", sender: "her", content: "你早点睡，晚安哦🌙" },
            { id: "a1", sender: "me", content: "晚安。", delay: 800 },
          ],
          autoNext: "chen_scene_06_sleep",
        },
        {
          id: "chen_scene_05_ans_d",
          chapter: 2,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "对方一直显示“正在输入中”，很久之后才发来回复。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "你突然这么正经，我都不习惯了。",
            },
            {
              id: "m2",
              sender: "her",
              content: "有你这句话我就放心啦！我去洗衣服了，晚安！✨",
            },
            { id: "a1", sender: "me", content: "晚安。", delay: 1200 },
          ],
          autoNext: "chen_scene_06_sleep",
        },
        {
          id: "chen_scene_06_sleep",
          chapter: 2,
          title: "深夜的余温",
          timeLabel: "周六 · 23:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "在长大的过程中，青梅竹马也会有不可避免的患得患失。但只要肯定的声音足够清晰，她就会安心。",
              delay: 1200,
            },
          ],
          autoNext: "chen_scene_07",
        },
        {
          id: "chen_scene_07",
          chapter: 3,
          title: "游乐园之约",
          timeLabel: "周日 · 08:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周日 上午 07:00，今天约好去市区的游乐园。",
              delay: 400,
            },
            { id: "m1", sender: "her", content: "{name}早早早！☀️" },
            {
              id: "m2",
              sender: "her",
              content: "我六点半就醒啦！根本睡不着！",
            },
            { id: "s1", sender: "system", content: "07:40", delay: 600 },
            {
              id: "m3",
              sender: "her",
              content: "[图片：左边是背带裤，右边是碎花裙子]",
            },
            {
              id: "m4",
              sender: "her",
              content:
                "穿左边这套还是右边的呀？室友说去游乐园穿裙子不方便，可是我想穿得好看点……",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "背带裤吧，玩过山车方便，别把裙子弄脏了。",
              replyText: "背带裤吧，玩过山车方便，别把裙子弄脏了。",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "chen_scene_07_ans_a",
              badgeText: "实用主义",
            },
            {
              id: "b",
              label: "B",
              text: "随便，你穿什么都差不多，赶紧收拾。",
              replyText: "随便，你穿什么都差不多，赶紧收拾，我还没洗脸。",
              affectionDelta: -10,
              anxietyDelta: 15,
              nextScene: "chen_scene_07_ans_b",
              badgeText: "直男敷衍",
            },
            {
              id: "c",
              label: "C",
              text: "穿裙子吧，今天不打算带你玩太刺激的项目，专门给你拍照。",
              replyText:
                "穿裙子吧。今天不打算带你玩太刺激的项目，专门负责给你拍照。",
              affectionDelta: 20,
              anxietyDelta: -5,
              nextScene: "chen_scene_07_ans_c",
              badgeText: "懂她心思",
            },
          ],
        },
        {
          id: "chen_scene_07_ans_a",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "好嘞！那我就选背带裤啦！👟" },
            {
              id: "a1",
              sender: "me",
              content: "行，一小时后楼下见。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_08_midday",
        },
        {
          id: "chen_scene_07_ans_b",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "噢……好嘛。那我不纠结了，我马上弄好！",
            },
            { id: "a1", sender: "me", content: "嗯，别急。", delay: 1500 },
          ],
          autoNext: "chen_scene_08_midday",
        },
        {
          id: "chen_scene_07_ans_c",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "哇！这可是你说的！那我要把你手机内存拍满！",
            },
            {
              id: "a1",
              sender: "me",
              content: "没问题，一小时后楼下见。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_08_midday",
        },
        {
          id: "chen_scene_08_midday",
          chapter: 3,
          title: "最高处的告白",
          timeLabel: "周日 · 21:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content:
                "傍晚，你们坐上了摩天轮。在最高处，你们看着彼此，谁也没有玩手机。",
              delay: 2e3,
            },
            {
              id: "s1",
              sender: "system",
              content: "晚上 21:30，回到寝室后，陈盈盈发来了消息。",
              delay: 1200,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}，你洗漱完了吗？今天真的好开心。",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "其实在摩天轮上的时候，我有句话想说，但面对面又有点不好意思开口……",
            },
            { id: "s_time1", sender: "system", content: "21:35", delay: 1e3 },
            {
              id: "m3",
              sender: "her",
              content:
                "高三那年我数学那么差。每天刷题刷到想哭的时候，我就在草稿纸上一遍遍写你的名字骂你。",
            },
            {
              id: "m4",
              sender: "her",
              content:
                "其实那是在给我自己打气。因为我总觉得，要是考不到同一个城市，我就见不到你了。",
            },
            {
              id: "m5",
              sender: "her",
              content:
                "现在想想，幸好当初拼了命把数学及格了。不然今天就不能一起坐摩天轮了。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "我也没想到你会记这么久，其实你当时的数学确实挺烂的。",
              replyText: "我也没想到你会记这么久，其实你当时的数学确实挺烂的。",
              affectionDelta: 5,
              anxietyDelta: 10,
              nextScene: "chen_scene_08_ans_a",
              badgeText: "破坏气氛",
            },
            {
              id: "b",
              label: "B",
              text: "难怪你当时草稿纸总是不够用。过去的事就别想了，早点睡。",
              replyText:
                "难怪你当时草稿纸总是不够用。过去的事就别想了，早点睡。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "chen_scene_08_ans_b",
              badgeText: "直男幽默",
            },
            {
              id: "c",
              label: "C",
              text: "傻瓜，你不用再在草稿纸上写名字给自己打气了。因为现在的我，就在你身边。",
              replyText:
                "傻瓜，你不用再在草稿纸上写名字给自己打气了。因为现在的我，就在你身边。",
              affectionDelta: 25,
              anxietyDelta: -10,
              nextScene: "chen_scene_08_ans_c",
              badgeText: "致命温柔",
            },
          ],
        },
        {
          id: "chen_scene_08_ans_a",
          chapter: 3,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "喂！[发怒] 这么感性的时刻你居然损我！",
            },
            {
              id: "m2",
              sender: "her",
              content: "不理你了，我要去睡觉了！哼！",
            },
            {
              id: "a1",
              sender: "me",
              content: "开个玩笑，快睡吧，晚安。",
              delay: 1e3,
            },
          ],
          autoNext: "chen_scene_09_sleep",
        },
        {
          id: "chen_scene_08_ans_b",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "就是因为都被你占满了呀！" },
            {
              id: "m2",
              sender: "her",
              content: "好啦，你也累了一天了，晚安安！✨",
            },
            { id: "a1", sender: "me", content: "晚安。", delay: 1500 },
          ],
          autoNext: "chen_scene_09_sleep",
        },
        {
          id: "chen_scene_08_ans_c",
          chapter: 3,
          messages: [
            { id: "m1", sender: "her", content: "嗯！" },
            {
              id: "m2",
              sender: "her",
              content: "你突然这么温柔，我都不适应了。",
            },
            {
              id: "m3",
              sender: "her",
              content: "{name}，能和你一起来这所大学，真好。晚安。",
            },
            { id: "a1", sender: "me", content: "晚安，盈盈。", delay: 1200 },
          ],
          autoNext: "chen_scene_09_sleep",
        },
        {
          id: "chen_scene_09_sleep",
          chapter: 3,
          title: "心跳的频率",
          timeLabel: "周日 · 23:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "那些藏在高三草稿纸里的执念，终于在这个秋夜有了回响。",
              delay: 1200,
            },
          ],
          autoNext: "chen_scene_10",
        },
        {
          id: "chen_scene_10",
          chapter: 4,
          title: "青梅竹马的领地",
          timeLabel: "周一 · 10:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "周一 10:30，你正在上专业课。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "[图片：一张拍糊了的高数黑板板书]",
            },
            {
              id: "m2",
              sender: "her",
              content:
                "救命……大学的高数和高中的完全不是一个东西！我要长脑子了！[抓狂]",
            },
            {
              id: "a1",
              sender: "me",
              content: "昨天谁在摩天轮上信誓旦旦说以后再也不怕数学的？",
              delay: 1200,
            },
            { id: "s_time1", sender: "system", content: "10:35", delay: 1e3 },
            { id: "m3", sender: "her", content: "我撤回昨天的话！" },
            {
              id: "m4",
              sender: "her",
              content:
                "不过……坐我旁边的那个学长刚刚看我一直在叹气，说他高数满分，可以下课后加个微信，把笔记借我，还能顺便辅导我。",
            },
            {
              id: "m5",
              sender: "her",
              content: "他人还怪好的嘞，我是不是该答应他呀？[思考]",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "挺好的，有人免费辅导你，省得我教了。",
              replyText: "挺好的，有人免费辅导你，省得我教了。",
              affectionDelta: -15,
              anxietyDelta: 15,
              nextScene: "chen_scene_10_ans_a",
              badgeText: "满分直男",
            },
            {
              id: "b",
              label: "B",
              text: "无事献殷勤，非奸即盗。你自己注意点分寸。",
              replyText: "无事献殷勤，非奸即盗。你自己注意点分寸。",
              affectionDelta: 5,
              anxietyDelta: 0,
              nextScene: "chen_scene_10_ans_b",
              badgeText: "常规说教",
            },
            {
              id: "c",
              label: "C",
              text: "你在哪个教学楼？我现在过去。我的人，轮不到别人来献殷勤。",
              replyText:
                "你在哪个教学楼？我现在过去。我的青梅竹马，轮不到别人来献殷勤。",
              affectionDelta: 30,
              anxietyDelta: -10,
              nextScene: "chen_scene_10_ans_c",
              badgeText: "强势护食",
            },
          ],
        },
        {
          id: "chen_scene_10_ans_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……行，那我加他了。" },
            {
              id: "s1",
              sender: "system",
              content:
                "她的回复冷淡了下来，显然是对你这种无所谓的态度感到生气。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_11_night",
        },
        {
          id: "chen_scene_10_ans_b",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "知道啦，我又不是三岁小孩。" },
            {
              id: "m2",
              sender: "her",
              content: "我没加他，说我发小会教我的。算你过关！",
            },
            { id: "a1", sender: "me", content: "算你聪明。", delay: 1500 },
          ],
          autoNext: "chen_scene_11_night",
        },
        {
          id: "chen_scene_10_ans_c",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "我在文渊楼204……你下课了吗就过来？",
            },
            {
              id: "s1",
              sender: "system",
              content:
                "十分钟后，你出现在她教室后门，径直走到她旁边坐下，把一瓶冰可乐放在她桌上，顺便瞥了一眼旁边那个男生。男生见状，默默收回了原本打算递过来的笔记本。",
              delay: 2e3,
            },
            {
              id: "m2",
              sender: "her",
              content:
                "（发微信）你刚才走过来的样子……有点凶哦。他都吓得坐到旁边那桌去了。",
            },
            {
              id: "a1",
              sender: "me",
              content: "（发微信）那正好，这片清净了。笔记拿来，我教你。",
              delay: 1500,
            },
            { id: "m3", sender: "her", content: "嘿嘿，好~ [兔子跳跃]" },
          ],
          autoNext: "chen_scene_11_night",
        },
        {
          id: "chen_scene_11_night",
          chapter: 4,
          title: "青梅的特权",
          timeLabel: "周一 · 22:30",
          messages: [
            {
              id: "s0",
              sender: "system",
              content: "晚上 22:30，各自回宿舍后。",
              delay: 400,
            },
            {
              id: "m1",
              sender: "her",
              content: "{name}，今天中午的糖醋排骨好好吃。",
            },
            {
              id: "m2",
              sender: "her",
              content: "不过……我发现我们到了大学以后，你好像变得有点不一样了。",
            },
            {
              id: "a1",
              sender: "me",
              content: "哪里不一样？变帅了？",
              delay: 1200,
            },
            { id: "m3", sender: "her", content: "少臭美！" },
            {
              id: "m4",
              sender: "her",
              content:
                "就是感觉……以前高中你对我虽然也好，但都是那种哥们儿一样的照顾。",
            },
            {
              id: "m5",
              sender: "her",
              content: "今天在教室……你突然坐过来宣示主权的样子，让我有点恍惚。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "既然一起考到一个城市，我肯定得把你盯紧点啊，怕你被人骗了。",
              replyText:
                "既然一起考到一个城市，我肯定得把你盯紧点啊，怕你被人骗了。",
              affectionDelta: 5,
              anxietyDelta: 5,
              nextScene: "chen_scene_11_ans_a",
              badgeText: "长辈视角",
            },
            {
              id: "b",
              label: "B",
              text: "毕竟我们是从小玩到大的，你当然有被我特殊对待的特权。",
              replyText: "毕竟我们是从小玩到大的，你当然有被我特殊对待的特权。",
              affectionDelta: 15,
              anxietyDelta: 0,
              nextScene: "chen_scene_11_ans_b",
              badgeText: "温情过渡",
            },
            {
              id: "c",
              label: "C",
              text: "以前是怕影响你高考。现在都大学了，我还用得着掩饰吗？",
              replyText: "以前是怕影响你高考。现在都大学了，我还用得着掩饰吗？",
              affectionDelta: 30,
              anxietyDelta: -15,
              nextScene: "chen_scene_11_ans_c",
              badgeText: "蓄谋已久",
            },
          ],
        },
        {
          id: "chen_scene_11_ans_a",
          chapter: 4,
          messages: [
            { id: "m1", sender: "her", content: "……你这语气跟我爸一模一样。" },
            { id: "m2", sender: "her", content: "知道啦，老父亲！晚安！" },
          ],
          autoNext: "chen_scene_12_sleep",
        },
        {
          id: "chen_scene_11_ans_b",
          chapter: 4,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "嘿嘿，这个特权我可是要用一辈子的！",
            },
            { id: "m2", sender: "her", content: "晚安啦，明天见！" },
          ],
          autoNext: "chen_scene_12_sleep",
        },
        {
          id: "chen_scene_11_ans_c",
          chapter: 4,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "聊天框顶部“对方正在输入中…”闪烁了很久。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "你……你又在乱开玩笑了！" },
            {
              id: "m2",
              sender: "her",
              content: "我不跟你说了，我心跳有点快，去睡觉了！晚安！",
            },
            { id: "a1", sender: "me", content: "晚安，笨蛋。", delay: 1e3 },
          ],
          autoNext: "chen_scene_12_sleep",
        },
        {
          id: "chen_scene_12_sleep",
          chapter: 4,
          title: "不只是朋友",
          timeLabel: "周一 · 23:00",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "那层被称为“发小”的窗户纸，已经变得越来越薄了。",
              delay: 1200,
            },
          ],
          autoNext: "chen_scene_13",
        },
        {
          id: "chen_scene_13",
          chapter: 5,
          title: "脆弱时刻",
          timeLabel: "周二 · 18:30",
          messages: [
            { id: "s0", sender: "system", content: "周二 18:30", delay: 400 },
            {
              id: "s1",
              sender: "system",
              content:
                "一整天，陈盈盈都没怎么给你发消息，这很不符合她平时碎碎念的性格。",
              delay: 1500,
            },
            {
              id: "a1",
              sender: "me",
              content: "今天怎么失踪了？吃饭没？",
              delay: 1500,
            },
            { id: "s_time1", sender: "system", content: "18:45", delay: 1e3 },
            {
              id: "m1",
              sender: "her",
              content: "[图片：一张测温枪显示38.8度的照片]",
            },
            {
              id: "m2",
              sender: "her",
              content: "昨天晚上空调吹感冒了……头好晕，全身都没力气。",
            },
            {
              id: "m3",
              sender: "her",
              content:
                "不过你别担心，我已经吃过退烧药躺在床上了，睡一觉应该就好了。",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "那你好好在床上躺着，多喝点热水，要是明天还不退烧就得去医院了。",
              replyText:
                "那你好好在床上躺着，多喝点热水，要是明天还不退烧就得去医院了。",
              affectionDelta: -10,
              anxietyDelta: 15,
              nextScene: "chen_scene_13_ans_a",
              badgeText: "直男关怀",
            },
            {
              id: "b",
              label: "B",
              text: "室友在吗？让她们帮忙照顾一下你，有事随时给我发微信。",
              replyText: "室友在吗？让她们帮忙照顾一下你，有事随时给我发微信。",
              affectionDelta: 0,
              anxietyDelta: 5,
              nextScene: "chen_scene_13_ans_b",
              badgeText: "常规操作",
            },
            {
              id: "c",
              label: "C",
              text: "（直接打语音）吃晚饭了吗？你在寝室躺着别动，我带吃的去你们楼下。",
              replyText:
                "[语音通话 00:45] “吃晚饭了吗？你躺着别动，我带吃的去你们楼下。”",
              affectionDelta: 30,
              anxietyDelta: -20,
              nextScene: "chen_scene_13_ans_c",
              badgeText: "霸道靠谱",
            },
          ],
        },
        {
          id: "chen_scene_13_ans_a",
          chapter: 5,
          messages: [
            { id: "m1", sender: "her", content: "嗯，知道了。" },
            {
              id: "s1",
              sender: "system",
              content:
                "她没有再回复。生病时最脆弱的时刻，你没有给到她期待的陪伴。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_14_night_think",
        },
        {
          id: "chen_scene_13_ans_b",
          chapter: 5,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "室友去图书馆了。没事的，我睡了。",
            },
            {
              id: "s1",
              sender: "system",
              content: "她选择了独自硬抗。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_14_night_think",
        },
        {
          id: "chen_scene_13_ans_c",
          chapter: 5,
          messages: [
            {
              id: "m1",
              sender: "her",
              content: "可是我都好几天没洗头了，现在肯定特别丑……你别来了。",
            },
            {
              id: "a1",
              sender: "me",
              content:
                "你从小到大换牙期漏风的样子我都见过，丑不丑的我还在乎这个？",
              delay: 1500,
            },
            { id: "m2", sender: "her", content: "……你这人真的很讨厌！" },
            {
              id: "s1",
              sender: "system",
              content:
                "二十分钟后，你拎着热粥和感冒药到了她寝室楼下。她裹着厚厚的外套跑下来，虽然脸色苍白，但看到你时眼睛里瞬间亮起了光。",
              delay: 2e3,
            },
          ],
          autoNext: "chen_scene_14_night_think",
        },
        {
          id: "chen_scene_14_night_think",
          chapter: 5,
          title: "不愿做妹妹",
          timeLabel: "周二 · 23:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "深夜，她可能吃了药睡不着，发来了一段话。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "{name}，今天真的很谢谢你。" },
            {
              id: "m2",
              sender: "her",
              content:
                "其实我刚才想了很久。从小到大，你帮我搬家、帮我复习、我生病了你给我送药……",
            },
            {
              id: "m3",
              sender: "her",
              content: "别人都说我们像兄妹。以前我也觉得这样挺好的，可是现在……",
            },
            { id: "m4", sender: "her", content: "我一点都不想当你妹妹了。" },
            {
              id: "m5",
              sender: "her",
              content:
                "明天下午下课后，我们在南门咖啡馆见一面吧。我有话想跟你当面说。",
            },
            {
              id: "a1",
              sender: "me",
              content: "好。明天下午见。",
              delay: 1500,
            },
          ],
          autoNext: "chen_scene_15",
        },
        {
          id: "chen_scene_15",
          chapter: 6,
          title: "窗外的答案",
          timeLabel: "周三 · 16:30",
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你赶到南门咖啡馆外，隔着落地玻璃，看到陈盈盈坐在靠窗的位置。她的感冒似乎好些了，今天特意化了淡妆，有些紧张地攥着水杯。",
              delay: 2e3,
            },
            {
              id: "s2",
              sender: "system",
              content:
                "你刚要推门进去，手机突然震动了。玻璃窗里，她抬眼看到了你，立刻低头在手机上打字，冲你比了个“看手机”的手势。",
              delay: 2e3,
            },
            { id: "m1", sender: "her", content: "你先别进来，站在那别动。" },
            {
              id: "m2",
              sender: "her",
              content: "我怕当面说我会因为太紧张而咬到舌头。",
            },
            {
              id: "s3",
              sender: "system",
              content: "隔着玻璃，你看到她深吸了一口气，脸颊有些微红。",
              delay: 1500,
            },
            {
              id: "m3",
              sender: "her",
              content:
                "一直以来，大家都觉得我们只是发小。我也怕如果那层窗户纸捅破了，万一连朋友都没得做怎么办。",
            },
            {
              id: "m4",
              sender: "her",
              content: "但是经过这几天，我不想再退缩了。",
            },
            {
              id: "m5",
              sender: "her",
              content: "{name}，我喜欢你，不只是青梅竹马的那种喜欢。你呢？",
            },
          ],
          choices: [
            {
              id: "a",
              label: "A",
              text: "（推门走进去，在微信上回复）那张草稿纸上的名字，我这辈子都不打算弄丢了。",
              replyText: "那张草稿纸上的名字，我这辈子都不打算弄丢了。",
              affectionDelta: 40,
              anxietyDelta: -30,
              nextScene: "chen_ending_good",
              badgeText: "浪漫回应",
            },
            {
              id: "b",
              label: "B",
              text: "（站在门外回复）你突然这样我有点没准备好。我觉得我们现在这样当好朋友不是挺好的吗？",
              replyText:
                "你突然这样我有点没准备好。我觉得我们现在这样当好朋友不是挺好的吗？",
              affectionDelta: -50,
              anxietyDelta: 40,
              nextScene: "chen_ending_bad",
              badgeText: "退缩拒绝",
            },
            {
              id: "c",
              label: "C",
              text: "（推门走进去，在微信上回复）行啊。既然你都这么主动了，那我就勉为其难答应你吧。",
              replyText: "行啊。既然你都这么主动了，那我就勉为其难答应你吧。",
              affectionDelta: 10,
              anxietyDelta: 0,
              nextScene: "chen_ending_normal",
              badgeText: "傲娇接受",
            },
          ],
        },
        {
          id: "chen_ending_good",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你推开门，径直走到她面前，按下了发送键。她看着手机屏幕，眼睛瞬间亮了，所有的紧张在这一刻化为灿烂的笑容。",
              delay: 2e3,
            },
            { id: "m1", sender: "her", content: "这可是你自己答应的！" },
            {
              id: "m2",
              sender: "her",
              content: "那请你立刻把我的备注从“陈盈盈”改成“女朋友”！",
            },
            {
              id: "s2",
              sender: "system",
              content:
                "她抬起头，毫不避讳地拉住了你的手，满眼都是得逞后的窃喜。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "完美结局：草稿纸的终页",
            desc: "青梅竹马最美好的结局，就是所有的理所当然，都变成了明目张胆的偏爱。你没有让这个满眼都是你的女孩输。从那张高三的数学草稿纸开始的暗恋，终于在这家咖啡馆里迎来了双向奔赴。你们太了解彼此，因此未来的日子不仅有爱情的甜蜜，更有融入骨血的默契。",
          },
        },
        {
          id: "chen_ending_bad",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content:
                "你隔着玻璃，看着她收到消息后，脸上的笑容一点点僵住，最后归于平静。",
              delay: 1500,
            },
            { id: "m1", sender: "her", content: "嗯，我明白了。" },
            { id: "m2", sender: "her", content: "对不起，是我越界了。" },
            {
              id: "s2",
              sender: "system",
              content:
                "她拿起包站起身，没有看窗外的你，推开门低着头匆匆离开了。",
              delay: 2e3,
            },
          ],
          isEnding: !0,
          endingType: "bad",
          endingData: {
            title: "遗憾结局：退回发小",
            desc: "你最终还是选择了待在安全的舒适区里。那句“当好朋友”就像一堵透明的墙，彻底阻断了她走向你的脚步。从那天起，她再也没有找过你一起吃饭，也没有再发过那些可爱的表情包。你们依然是发小，但在她心里，那个占据了她整整一个青春的男孩，已经留在了昨天。",
          },
        },
        {
          id: "chen_ending_normal",
          chapter: 6,
          messages: [
            {
              id: "s1",
              sender: "system",
              content: "她看着屏幕，嘟了嘟嘴，似乎对你的“勉为其难”有点不满。",
              delay: 1500,
            },
            {
              id: "m1",
              sender: "her",
              content: "什么叫勉为其难啊！别人追我我还不答应呢！",
            },
            {
              id: "m2",
              sender: "her",
              content: "算了，看在你平时表现还不错的份上，本小姐就不计较了。",
            },
            {
              id: "s2",
              sender: "system",
              content: "虽然有些斗嘴，但她还是开心地挽住了你的胳膊。",
              delay: 1500,
            },
          ],
          isEnding: !0,
          endingType: "good",
          endingData: {
            title: "欢喜冤家：吵不散的恋人",
            desc: "你们顺利地跨过了那条界限，成了情侣。虽然告白的过程少了几分浪漫，多了几分往日的拌嘴，但这恰恰是你们最真实的相处模式。这十几年积累下来的默契，注定让你们成为一对吵不散、打不走的欢喜冤家。",
          },
        },
      ];
    function o(e) {
      return l.find((t) => t.id === e);
    }
    let m = {
        lin: {
          good: [
            {
              title: "你清醒了",
              desc: '你说出了心里话，她沉默了很久，然后只发来一句：「你想太多了，我只是最近状态不好。」\n\n你盯着这句话，忽然明白——这句话你已经听过好几次了。那些忽冷忽热、那次借钱、那句"也许是普通朋友"……都是经过设计的。\n\n你没有再回复。你打开了那本落了灰的专业书。这一晚，你睡得很踏实。',
            },
            {
              title: "你选择了自己",
              desc: '她发来的那句"我们不适合"其实是一个钩子——等你焦虑地去哄她。\n\n但你没有。你把手机放到桌上，打开了笔记本，继续写那份拖了一周的实验报告。\n\n你终于想清楚了：一个动不动就消失、动不动就提分手的人，不值得你反复迁就。',
            },
          ],
          bad: [
            {
              title: "你退学了",
              desc: '你帮她还了那笔钱。之后她说"你对我真好"，然后继续时冷时热。\n\n你开始逃课去陪她，期末考试挂了两科，助学金被取消了。\n\n又过了一个月，她告诉你，她和那个高中男同学在一起了。\n\n你看着空荡荡的聊天框，再也没有说话。',
            },
            {
              title: "越陷越深",
              desc: '你告诉她"你是我最重要的人"，她似乎很感动，然后又消失了三天。\n\n再出现时，她说最近压力很大，学费还差一些……你没有犹豫，转了过去。\n\n成绩单出来那天，你挂了三门课，保研资格没了。室友问你这学期怎么了，你想了很久，说：我也不知道。',
            },
          ],
        },
        tan: {
          good: [
            {
              title: "势均力敌",
              desc: "你识破了她套用在身上的《防备心/PUA手册》理论，没有顺着她的情绪陷阱走。\n\n面对你的从容，她终于卸下了带刺的伪装。她发来一句：“你这个人，还挺难搞的。”\n\n你没有成为她鱼塘里的鱼，也没有成为她发泄前任情绪的垃圾桶。\n\n相反，你们赢得了彼此真正的尊重。",
            },
            {
              title: "全身而退",
              desc: "你察觉到她内心深处的创伤太重，任何真诚都会被她当作攻击的武器。\n\n当你不再试图证明自己不是“渣男”时，那种窒息感瞬间消失了。\n\n你果断选择了抽身。因为你知道，在一段需要不停自证的关系里，没有人能赢。",
            },
          ],
          bad: [
            {
              title: "猎人沦为猎物",
              desc: "你以为凭自己几段恋爱的经验，能轻松拿捏这个带刺的校花。\n\n你使用了欲擒故纵，却被她一眼看穿并施以更严厉的“冷暴力”惩罚。为了挽回面子，你开始不断投入情绪和金钱，试图证明你的“价值”。\n\n最终，你彻底迷失在她的推拉之中，成为了她无聊时消遣的玩伴。",
            },
            {
              title: "被反噬的真诚",
              desc: "你放下了所有套路，掏出了一颗真心。但受过情伤的她根本不相信真诚。\n\n你的每一次妥协，都被她视为理所应当；你的每一次包容，都换来她更过分的试探。\n\n你试图去治愈她，最后却把自己弄得遍体鳞伤。",
            },
          ],
        },
        su: {
          good: [
            {
              title: "清醒结局：抽身而退",
              desc: "你没有冲进去要一个体面，因为你知道，和满嘴谎言的人对峙只会浪费时间。你彻底夺回了人生的控制权。",
            },
          ],
          bad: [
            {
              title: "悲剧结局：小丑退场",
              desc: "你成为了她完美脱身的垫脚石。你的愤怒让你在所有人眼里沦为了一个死缠烂打的笑话。",
            },
          ],
        },
        shen: {
          good: [
            {
              title: "史密斯夫妇结局：势均力敌",
              desc: "你用一半的套路维持了框架，又用一半的真诚给了她台阶。你们是这所大学里，最危险也最般配的一对。",
            },
          ],
          bad: [
            {
              title: "焦土结局：互相毁灭",
              desc: "你们像两只浑身是刺的刺猬，在刺穿对方伪装的同时，也把对方扎得鲜血淋漓。在这场零和博弈中没有赢家。",
            },
          ],
        },
        chen: {
          good: [
            {
              title: "救赎结局：平等的废墟",
              desc: "你放弃了居高临下的王座，用平等的尊重去重新追求她。你发现这种不用戴着面具的爱，比任何高段位的博弈都要让人安心。",
            },
          ],
          bad: [
            {
              title: "因果结局：反噬的孤岛",
              desc: "你赢了所有的服从性测试，却永远失去了那个为你写满整本草稿纸的人。在接下来的大学四年里，你再也没有遇到过满眼都是你的女孩。",
            },
          ],
        },
      },
      _ = 0;
    function x(e) {
      return {
        ...e,
        id: ((_ += 1), "u" > typeof crypto && crypto.randomUUID)
          ? crypto.randomUUID()
          : `smsg_${_}_${Date.now()}`,
      };
    }
    let h = (t = (e) => ({
      phase: "intro",
      playerName: "",
      currentGirlId: "lin",
      girlName: i.lin.name,
      girlAvatar: i.lin.avatar,
      currentSceneId: i.lin.firstScene,
      visibleMessages: [],
      affection: 20,
      anxiety: 0,
      chapter: 1,
      timeLabel: "",
      puaAlerts: [],
      choiceHistory: [],
      isTyping: !1,
      showChoices: !1,
      currentChoices: [],
      lastChoiceBadge: null,
      endingData: null,
      setPlayerName: (t) => e({ playerName: t }),
      initGirl: (t) =>
        e({ currentGirlId: t, girlName: i[t].name, girlAvatar: i[t].avatar }),
      resetGame: () =>
        e({
          phase: "intro",
          playerName: "",
          visibleMessages: [],
          affection: 20,
          anxiety: 0,
          chapter: 1,
          timeLabel: "",
          puaAlerts: [],
          choiceHistory: [],
          isTyping: !1,
          showChoices: !1,
          currentChoices: [],
          lastChoiceBadge: null,
          endingData: null,
        }),
      setPhase: (t) => e({ phase: t }),
    }))
      ? d(t)
      : d;
    var y = e.i(8872);
    function p(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    let b = 0;
    async function g(e, t) {
      if (t != b) return;
      h.setState({
        currentSceneId: e.id,
        chapter: e.chapter,
        timeLabel: e.timeLabel ?? "",
        showChoices: !1,
        currentChoices: [],
        lastChoiceBadge: null,
      });
      let n = e.messages ?? [];
      if (0 == n.length) {
        if (e.autoNext) {
          if ((await p(800), t != b)) return;
          let n = o(e.autoNext);
          n && g(n, t);
        }
        return;
      }
      for (let e = 0; e < n.length; e++) {
        if (t != b) return;
        let s = n[e],
          { playerName: a } = h.getState(),
          d = s.content ? s.content.replace(/\{name\}/g, a ?? "你") : "";
        if ("silent" == s.type) {
          await p(s.delay ?? 500);
          continue;
        }
        if ("her" == s.sender && "read" != s.type) {
          let e = d.replace(/\[TIME\]/g, "").length;
          (d.includes("[图片") || s.image) && (e = 5);
          let n = s.delay ?? Math.min(4500, Math.max(1200, 120 * e + 400));
          if ((h.setState({ isTyping: !0 }), await p(n), t != b)) return;
          h.setState({ isTyping: !1 });
        } else
          "system" == s.sender
            ? await p(s.delay ?? 800)
            : await p(s.delay ?? 600);
        if (t != b) return;
        h.setState((e) => ({
          visibleMessages: [
            ...e.visibleMessages,
            x({
              id: "raw",
              sender: s.sender,
              type: s.type ?? "text",
              content: d,
              image: s.image,
              badgeText: s.badgeText,
            }),
          ],
        }));
      }
      if (t == b) {
        if (e.isEnding) {
          if ((await p(1200), t != b)) return;
          let n = (function (e) {
            if (e.endingData)
              return { title: e.endingData.title, desc: e.endingData.desc };
            let t = "lin";
            e.id.startsWith("tan_")
              ? (t = "tan")
              : e.id.startsWith("su_")
                ? (t = "su")
                : e.id.startsWith("shen_")
                  ? (t = "shen")
                  : e.id.startsWith("chen_") && (t = "chen");
            let n = "good" === e.endingType ? "good" : "bad",
              s = m[t][n],
              a = 0;
            if (window.crypto) {
              let e = new Uint32Array(1);
              (window.crypto.getRandomValues(e), (a = e[0] % s.length));
            } else a = Math.floor(Math.random() * s.length);
            let d = s[a];
            return { title: d.title, desc: d.desc };
          })(e);
          h.setState({
            phase: "ending",
            endingData: {
              title: n.title,
              desc: n.desc,
              type: e.endingType ?? "bad",
            },
          });
          return;
        }
        if (e.choices && e.choices.length > 0) {
          if ((await p(300), t != b)) return;
          h.setState({ showChoices: !0, currentChoices: e.choices });
        } else if (e.autoNext) {
          if ((await p(900), t != b)) return;
          let n = o(e.autoNext);
          n && g(n, t);
        }
      }
    }
    function u() {
      return {
        startGame: (0, s.useCallback)(() => {
          let e = (b += 1),
            { currentGirlId: t } = h.getState(),
            n = i[t]?.firstScene ?? "scene_01";
          (h.setState({
            phase: "playing",
            currentSceneId: n,
            visibleMessages: [],
            affection: 20,
            anxiety: 0,
            chapter: 1,
            timeLabel: "",
            puaAlerts: [],
            choiceHistory: [],
            showChoices: !1,
            currentChoices: [],
            lastChoiceBadge: null,
            endingData: null,
            isTyping: !1,
          }),
            setTimeout(() => {
              let t = o(n);
              t && g(t, e);
            }, 80));
        }, []),
        selectChoice: (0, s.useCallback)((e) => {
          let t = (b += 1),
            { playerName: n } = h.getState(),
            s = (e.replyText ?? e.text)
              .replace(/\{name\}/g, n ?? "你")
              .replace(/^[（(][^）)]+[）)]\s*/, "")
              .replace(/\s*[（(][^）)]+[）)]$/, "")
              .trim(),
            a = s
              ? [
                  x({
                    id: "raw",
                    sender: "me",
                    type: "text",
                    content: s,
                    badgeText: e.badgeText,
                  }),
                ]
              : [];
          (h.setState((t) => ({
            showChoices: !1,
            currentChoices: [],
            lastChoiceBadge: e.badgeText ?? null,
            isTyping: !1,
            affection: Math.max(
              0,
              Math.min(100, t.affection + (e.affectionDelta ?? 0)),
            ),
            anxiety: Math.max(
              0,
              Math.min(100, t.anxiety + (e.anxietyDelta ?? 0)),
            ),
            choiceHistory: [
              ...t.choiceHistory,
              {
                sceneId: t.currentSceneId,
                choiceId: e.id,
                badgeText: e.badgeText,
              },
            ],
            visibleMessages: [...t.visibleMessages, ...a],
          })),
            setTimeout(() => {
              let n = o(e.nextScene);
              n && g(n, t);
            }, 600));
        }, []),
      };
    }
    let f = (...e) =>
        e
          .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
          .join(" ")
          .trim(),
      D = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var T = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let v = (0, s.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: a,
            className: d = "",
            children: i,
            iconNode: r,
            ...c
          },
          l,
        ) =>
          (0, s.createElement)(
            "svg",
            {
              ref: l,
              ...T,
              width: t,
              height: t,
              stroke: e,
              strokeWidth: a ? (24 * Number(n)) / Number(t) : n,
              className: f("lucide", d),
              ...(!i &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(c) && { "aria-hidden": "true" }),
              ...c,
            },
            [
              ...r.map(([e, t]) => (0, s.createElement)(e, t)),
              ...(Array.isArray(i) ? i : [i]),
            ],
          ),
      ),
      N = (e, t) => {
        let n = (0, s.forwardRef)(({ className: n, ...a }, d) =>
          (0, s.createElement)(v, {
            ref: d,
            iconNode: t,
            className: f(
              `lucide-${D(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              n,
            ),
            ...a,
          }),
        );
        return ((n.displayName = D(e)), n);
      },
      w = N("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      S = N("book-open", [
        ["path", { d: "M12 7v14", key: "1akyts" }],
        [
          "path",
          {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y",
          },
        ],
      ]),
      j = N("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]),
      k = N("play", [
        [
          "path",
          {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1",
          },
        ],
      ]);
    function C() {
      let [e, t] = (0, s.useState)(""),
        [a, d] = (0, s.useState)("welcome"),
        r = h((e) => e.setPlayerName),
        l = h((e) => e.initGirl),
        { startGame: o } = u(),
        m = [
          "傻逼",
          "弱智",
          "白痴",
          "脑残",
          "爹",
          "妈",
          "爷爷",
          "奶奶",
          "霸霸",
          "霸",
          "畜生",
          "狗",
          "死",
          "操",
          "贱",
          "骚",
          "爸爸",
          "婊子",
          "爸",
          "爹爹",
        ],
        _ = () => {
          let t = e.trim(),
            n = m.some((e) => t.includes(e));
          ((!t || n) && (t = "李雷"), r(t));
          let s = Object.keys(i),
            a = localStorage.getItem("LAST_PLAYED_GIRL"),
            d = s.filter((e) => e !== a),
            c = d.length > 0 ? d : s,
            _ = c[Math.floor(Math.random() * c.length)];
          (localStorage.setItem("LAST_PLAYED_GIRL", _), l(_), o());
        };
      return (0, n.jsxs)("div", {
        className:
          "h-full flex flex-col items-center justify-center bg-[var(--wechat-bg)] px-5 py-8 overflow-y-auto",
        children: [
          "welcome" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-3",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, n.jsx)(y.default, {
                          src: "/avatar-girl.png",
                          alt: "游戏角色",
                          width: 90,
                          height: 90,
                          className:
                            "rounded-2xl object-cover shadow-xl ring-4 ring-white",
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "absolute -top-2 -right-2 text-white text-[16px] font-bold rounded-full px-1.5 py-0.5",
                          children: "❤️",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "text-2xl font-bold text-foreground tracking-tight",
                          children: "聊天模拟器",
                        }),
                        (0, n.jsx)("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: "仅供娱乐",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(w, {
                          size: 16,
                          className: "text-amber-600 shrink-0",
                        }),
                        (0, n.jsx)("span", {
                          className: "text-sm font-semibold text-amber-800",
                          children: "游戏说明",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      className: "text-xs text-amber-700 leading-relaxed",
                      children: [
                        "本游戏",
                        (0, n.jsx)("strong", {
                          children: "剧情纯属娱乐，请勿代入剧情",
                        }),
                        "，所有名称和剧情都是虚构，请勿对应现实。 你将扮演纯情男大，通过选择回复消息来体验剧情。 --BY ARKSEC.NET 🩷",
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "w-full grid grid-cols-3 gap-3",
                  children: [
                    { icon: S, label: "多重剧情", sub: "随机邂逅" },
                    { icon: j, label: "话术识别", sub: "熟能生巧" },
                    { icon: w, label: "多种结局", sub: "随心走向" },
                  ].map(({ icon: e, label: t, sub: s }) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl p-3 flex flex-col items-center gap-1 shadow-sm border border-border",
                        children: [
                          (0, n.jsx)(e, {
                            size: 20,
                            className: "text-[var(--wechat-green)]",
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "text-[11px] font-semibold text-foreground",
                            children: t,
                          }),
                          (0, n.jsx)("span", {
                            className: "text-[10px] text-muted-foreground",
                            children: s,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("name"),
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg active:scale-95 transition-transform",
                  children: "开始游戏",
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("info"),
                  className:
                    "text-xs text-muted-foreground underline-offset-2 underline",
                  children: "查看PUA手法解析",
                }),
              ],
            }),
          "name" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-400",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "w-16 h-16 rounded-full bg-[var(--wechat-green)] flex items-center justify-center mx-auto mb-3 shadow-lg",
                      children: (0, n.jsx)(y.default, {
                        src: "/avatar-boy.jpg",
                        alt: "你的头像",
                        width: 64,
                        height: 64,
                        className: "rounded-full object-cover",
                      }),
                    }),
                    (0, n.jsx)("h2", {
                      className: "text-xl font-bold text-foreground",
                      children: "你叫什么名字？",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: "每次开启游戏，你可能会遇到不同的女孩",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, n.jsx)("input", {
                      type: "text",
                      value: e,
                      onChange: (e) => t(e.target.value),
                      placeholder: "输入你的名字（默认：李雷）",
                      maxLength: 2,
                      className:
                        "w-full border-2 border-border bg-white rounded-2xl px-4 py-3.5 text-base text-center focus:border-[var(--wechat-green)] focus:outline-none transition-colors placeholder:text-muted-foreground",
                      onKeyDown: (e) => "Enter" === e.key && _(),
                      autoFocus: !0,
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-center text-xs text-muted-foreground mt-2",
                      children: "最多两个字",
                    }),
                  ],
                }),
                (0, n.jsxs)("button", {
                  onClick: _,
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform",
                  children: [(0, n.jsx)(k, { size: 18 }), "进入游戏"],
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("welcome"),
                  className: "text-sm text-muted-foreground",
                  children: "返回",
                }),
              ],
            }),
          "info" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-400",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-lg font-bold text-foreground",
                      children: "PUA手法解析",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: "了解这些套路，保护自己",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "space-y-3",
                  children: c.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl p-4 border border-border shadow-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-2 mb-1.5",
                            children: [
                              (0, n.jsx)(j, {
                                size: 13,
                                className: "text-amber-500 shrink-0",
                              }),
                              (0, n.jsx)("span", {
                                className: "text-sm font-bold text-foreground",
                                children: e.desc,
                              }),
                              (0, n.jsxs)("span", {
                                className:
                                  "text-[10px] text-muted-foreground font-mono",
                                children: ["(", e.name, ")"],
                              }),
                            ],
                          }),
                          (0, n.jsx)("p", {
                            className:
                              "text-xs text-muted-foreground leading-relaxed",
                            children: e.detail,
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("welcome"),
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3 rounded-2xl text-sm shadow active:scale-95 transition-transform",
                  children: "返回首页",
                }),
              ],
            }),
        ],
      });
    }
    function L({ time: e }) {
      let t = e ? (e.match(/\d{2}:\d{2}$/)?.[0] ?? A()) : A();
      return (0, n.jsxs)("div", {
        className:
          "flex items-center justify-between px-5 bg-[var(--wechat-bar)] text-white h-[28px] shrink-0",
        children: [
          (0, n.jsx)("span", {
            className: "text-[13px] font-semibold tracking-wide tabular-nums",
            children: t,
          }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-[5px]",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-end gap-[2px] h-[11px]",
                children: [4, 6, 8, 10].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      style: { height: `${e}px`, width: "3px" },
                      className: `rounded-[1px] ${t < 3 ? "bg-white" : "bg-white/40"}`,
                    },
                    t,
                  ),
                ),
              }),
              (0, n.jsxs)("svg", {
                width: "14",
                height: "11",
                viewBox: "0 0 14 11",
                fill: "none",
                children: [
                  (0, n.jsx)("path", {
                    d: "M7 8.5a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 7 8.5z",
                    fill: "white",
                  }),
                  (0, n.jsx)("path", {
                    d: "M3.5 6.3A4.95 4.95 0 0 1 7 5c1.3 0 2.5.47 3.5 1.3",
                    stroke: "white",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    fill: "none",
                  }),
                  (0, n.jsx)("path", {
                    d: "M1 3.7A8.4 8.4 0 0 1 7 1.5c2.3 0 4.4.9 6 2.2",
                    stroke: "white",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    fill: "none",
                    opacity: "0.5",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center gap-[1px]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "relative w-[22px] h-[11px] rounded-[2.5px] border border-white/80 p-[1.5px]",
                    children: (0, n.jsx)("div", {
                      className: "w-[75%] h-full bg-white rounded-[1.5px]",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "w-[1.5px] h-[5px] bg-white/70 rounded-r-sm",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function A() {
      return new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      });
    }
    let E = N("chevron-left", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]),
      M = N("phone", [
        [
          "path",
          {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v",
          },
        ],
      ]),
      z = N("ellipsis", [
        ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
        ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
      ]);
    function B({ name: e, avatar: t = "/avatar-girl.jpg", isTyping: s = !1 }) {
      return (0, n.jsxs)("div", {
        className:
          "wechat-header flex items-center h-[48px] px-2 shrink-0 relative select-none",
        children: [
          (0, n.jsxs)("button", {
            className:
              "flex items-center text-white/90 active:text-white/50 transition-colors z-10 pr-2",
            children: [
              (0, n.jsx)(E, {
                size: 26,
                strokeWidth: 2.2,
                className: "-ml-0.5",
              }),
              (0, n.jsx)("span", {
                className: "text-[15px] font-normal -ml-1",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "absolute inset-0 flex items-center justify-center gap-[7px] pointer-events-none",
            children: [
              (0, n.jsxs)("div", {
                className: "relative shrink-0",
                children: [
                  (0, n.jsx)(y.default, {
                    src: t,
                    alt: e,
                    width: 32,
                    height: 32,
                    className: "rounded-[5px] object-cover",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "absolute -bottom-0.5 -right-0.5 w-[9px] h-[9px] bg-[#4cd964] rounded-full border-[1.5px] border-[#3f7d50]",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-start",
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "text-white text-[16px] font-semibold leading-tight tracking-wide",
                    children: e,
                  }),
                  (0, n.jsx)("span", {
                    className: `text-[11px] leading-tight transition-all ${s ? "text-[#a8e6bc]" : "text-white/45"}`,
                    children: s ? "正在输入…" : "在线",
                  }),
                ],
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "ml-auto flex items-center gap-[18px] text-white/85 z-10 pl-2",
            children: [
              (0, n.jsx)("button", {
                className: "active:text-white/40 transition-colors",
                children: (0, n.jsx)(M, { size: 19, strokeWidth: 1.8 }),
              }),
              (0, n.jsx)("button", {
                className: "active:text-white/40 transition-colors",
                children: (0, n.jsx)(z, { size: 21, strokeWidth: 2 }),
              }),
            ],
          }),
        ],
      });
    }
    let I = (e = new Map(), t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n,
      }),
      P = [],
      O = (e, t, n) => {
        if (0 == e.length - t) return n.classGroupId;
        let s = e[t],
          a = n.nextPart.get(s);
        if (a) {
          let n = O(e, t + 1, a);
          if (n) return n;
        }
        let d = n.validators;
        if (null === d) return;
        let i = 0 === t ? e.join("-") : e.slice(t).join("-"),
          r = d.length;
        for (let e = 0; e < r; e++) {
          let t = d[e];
          if (t.validator(i)) return t.classGroupId;
        }
      },
      U = (e, t) => {
        let n = I();
        for (let s in e) R(e[s], n, s, t);
        return n;
      },
      R = (e, t, n, s) => {
        let a = e.length;
        for (let d = 0; d < a; d++) $(e[d], t, n, s);
      },
      $ = (e, t, n, s) => {
        "string" == typeof e
          ? G(e, t, n)
          : "function" == typeof e
            ? W(e, t, n, s)
            : F(e, t, n, s);
      },
      G = (e, t, n) => {
        ("" === e ? t : H(t, e)).classGroupId = n;
      },
      W = (e, t, n, s) => {
        V(e)
          ? R(e(s), t, n, s)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: n, validator: e }));
      },
      F = (e, t, n, s) => {
        let a = Object.entries(e),
          d = a.length;
        for (let e = 0; e < d; e++) {
          let [d, i] = a[e];
          R(i, H(t, d), n, s);
        }
      },
      H = (e, t) => {
        let n = e,
          s = t.split("-"),
          a = s.length;
        for (let e = 0; e < a; e++) {
          let t = s[e],
            a = n.nextPart.get(t);
          (a || ((a = I()), n.nextPart.set(t, a)), (n = a));
        }
        return n;
      },
      V = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      q = [],
      K = (e, t, n, s, a) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: s,
        isExternal: a,
      }),
      X = /\s+/,
      Y = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let n = "";
        for (let s = 0; s < e.length; s++)
          e[s] && (t = Y(e[s])) && (n && (n += " "), (n += t));
        return n;
      },
      Q = [],
      J = (e) => {
        let t = (t) => t[e] || Q;
        return ((t.isThemeGetter = !0), t);
      },
      Z = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      ee = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      et = /^\d+\/\d+$/,
      en = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      es =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      ea = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      ed = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      ei =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      er = (e) => et.test(e),
      ec = (e) => !!e && !Number.isNaN(Number(e)),
      el = (e) => !!e && Number.isInteger(Number(e)),
      eo = (e) => e.endsWith("%") && ec(e.slice(0, -1)),
      em = (e) => en.test(e),
      e_ = () => !0,
      ex = (e) => es.test(e) && !ea.test(e),
      eh = () => !1,
      ey = (e) => ed.test(e),
      ep = (e) => ei.test(e),
      eb = (e) => !eu(e) && !ew(e),
      eg = (e) => eE(e, eI, eh),
      eu = (e) => Z.test(e),
      ef = (e) => eE(e, eP, ex),
      eD = (e) => eE(e, eO, ec),
      eT = (e) => eE(e, ez, eh),
      ev = (e) => eE(e, eB, ep),
      eN = (e) => eE(e, eR, ey),
      ew = (e) => ee.test(e),
      eS = (e) => eM(e, eP),
      ej = (e) => eM(e, eU),
      ek = (e) => eM(e, ez),
      eC = (e) => eM(e, eI),
      eL = (e) => eM(e, eB),
      eA = (e) => eM(e, eR, !0),
      eE = (e, t, n) => {
        let s = Z.exec(e);
        return !!s && (s[1] ? t(s[1]) : n(s[2]));
      },
      eM = (e, t, n = !1) => {
        let s = ee.exec(e);
        return !!s && (s[1] ? t(s[1]) : n);
      },
      ez = (e) => "position" === e || "percentage" === e,
      eB = (e) => "image" === e || "url" === e,
      eI = (e) => "length" === e || "size" === e || "bg-size" === e,
      eP = (e) => "length" === e,
      eO = (e) => "number" === e,
      eU = (e) => "family-name" === e,
      eR = (e) => "shadow" === e,
      e$ = ((e, ...t) => {
        let n,
          s,
          a,
          d,
          i = (e) => {
            let t = s(e);
            if (t) return t;
            let d = ((e, t) => {
              let {
                  parseClassName: n,
                  getClassGroupId: s,
                  getConflictingClassGroupIds: a,
                  sortModifiers: d,
                } = t,
                i = [],
                r = e.trim().split(X),
                c = "";
              for (let e = r.length - 1; e >= 0; e -= 1) {
                let t = r[e],
                  {
                    isExternal: l,
                    modifiers: o,
                    hasImportantModifier: m,
                    baseClassName: _,
                    maybePostfixModifierPosition: x,
                  } = n(t);
                if (l) {
                  c = t + (c.length > 0 ? " " + c : c);
                  continue;
                }
                let h = !!x,
                  y = s(h ? _.substring(0, x) : _);
                if (!y) {
                  if (!h || !(y = s(_))) {
                    c = t + (c.length > 0 ? " " + c : c);
                    continue;
                  }
                  h = !1;
                }
                let p =
                    0 === o.length
                      ? ""
                      : 1 === o.length
                        ? o[0]
                        : d(o).join(":"),
                  b = m ? p + "!" : p,
                  g = b + y;
                if (i.indexOf(g) > -1) continue;
                i.push(g);
                let u = a(y, h);
                for (let e = 0; e < u.length; ++e) {
                  let t = u[e];
                  i.push(b + t);
                }
                c = t + (c.length > 0 ? " " + c : c);
              }
              return c;
            })(e, n);
            return (a(e, d), d);
          };
        return (
          (d = (r) => {
            var c;
            let l;
            return (
              (s = (n = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let t = 0,
                    n = Object.create(null),
                    s = Object.create(null),
                    a = (a, d) => {
                      ((n[a] = d),
                        ++t > e &&
                          ((t = 0), (s = n), (n = Object.create(null))));
                    };
                  return {
                    get(e) {
                      let t = n[e];
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = s[e])
                          ? (a(e, t), t)
                          : void 0;
                    },
                    set(e, t) {
                      e in n ? (n[e] = t) : a(e, t);
                    },
                  };
                })((c = t.reduce((e, t) => t(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: t, experimentalParseClassName: n } = e,
                    s = (e) => {
                      let t,
                        n = [],
                        s = 0,
                        a = 0,
                        d = 0,
                        i = e.length;
                      for (let r = 0; r < i; r++) {
                        let i = e[r];
                        if (0 === s && 0 === a) {
                          if (":" === i) {
                            (n.push(e.slice(d, r)), (d = r + 1));
                            continue;
                          }
                          if ("/" === i) {
                            t = r;
                            continue;
                          }
                        }
                        "[" === i
                          ? s++
                          : "]" === i
                            ? s--
                            : "(" === i
                              ? a++
                              : ")" === i && a--;
                      }
                      let r = 0 === n.length ? e : e.slice(d),
                        c = r,
                        l = !1;
                      return (
                        r.endsWith("!")
                          ? ((c = r.slice(0, -1)), (l = !0))
                          : r.startsWith("!") && ((c = r.slice(1)), (l = !0)),
                        K(n, l, c, t && t > d ? t - d : void 0)
                      );
                    };
                  if (t) {
                    let e = t + ":",
                      n = s;
                    s = (t) =>
                      t.startsWith(e)
                        ? n(t.slice(e.length))
                        : K(q, !1, t, void 0, !0);
                  }
                  if (n) {
                    let e = s;
                    s = (t) => n({ className: t, parseClassName: e });
                  }
                  return s;
                })(c),
                sortModifiers:
                  ((l = new Map()),
                  c.orderSensitiveModifiers.forEach((e, t) => {
                    l.set(e, 1e6 + t);
                  }),
                  (e) => {
                    let t = [],
                      n = [];
                    for (let s = 0; s < e.length; s++) {
                      let a = e[s],
                        d = "[" === a[0],
                        i = l.has(a);
                      d || i
                        ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])),
                          t.push(a))
                        : n.push(a);
                    }
                    return (n.length > 0 && (n.sort(), t.push(...n)), t);
                  }),
                ...((e) => {
                  let t = ((e) => {
                      let { theme: t, classGroups: n } = e;
                      return U(n, t);
                    })(e),
                    {
                      conflictingClassGroups: n,
                      conflictingClassGroupModifiers: s,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var n;
                        let t, s, a;
                        return -1 === (n = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((s = (t = n.slice(1, -1)).indexOf(":")),
                            (a = t.slice(0, s)) ? "arbitrary.." + a : void 0);
                      }
                      let s = e.split("-"),
                        a = +("" === s[0] && s.length > 1);
                      return O(s, a, t);
                    },
                    getConflictingClassGroupIds: (e, t) => {
                      if (t) {
                        let t = s[e],
                          a = n[e];
                        if (t) {
                          if (a) {
                            let e = Array(a.length + t.length);
                            for (let t = 0; t < a.length; t++) e[t] = a[t];
                            for (let n = 0; n < t.length; n++)
                              e[a.length + n] = t[n];
                            return e;
                          }
                          return t;
                        }
                        return a || P;
                      }
                      return n[e] || P;
                    },
                  };
                })(c),
              }).cache.get),
              (a = n.cache.set),
              (d = i),
              i(r)
            );
          }),
          (...e) =>
            d(
              ((...e) => {
                let t,
                  n,
                  s = 0,
                  a = "";
                for (; s < e.length; )
                  (t = e[s++]) && (n = Y(t)) && (a && (a += " "), (a += n));
                return a;
              })(...e),
            )
        );
      })(() => {
        let e = J("color"),
          t = J("font"),
          n = J("text"),
          s = J("font-weight"),
          a = J("tracking"),
          d = J("leading"),
          i = J("breakpoint"),
          r = J("container"),
          c = J("spacing"),
          l = J("radius"),
          o = J("shadow"),
          m = J("inset-shadow"),
          _ = J("text-shadow"),
          x = J("drop-shadow"),
          h = J("blur"),
          y = J("perspective"),
          p = J("aspect"),
          b = J("ease"),
          g = J("animate"),
          u = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          f = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          D = () => [...f(), ew, eu],
          T = () => ["auto", "hidden", "clip", "visible", "scroll"],
          v = () => ["auto", "contain", "none"],
          N = () => [ew, eu, c],
          w = () => [er, "full", "auto", ...N()],
          S = () => [el, "none", "subgrid", ew, eu],
          j = () => ["auto", { span: ["full", el, ew, eu] }, el, ew, eu],
          k = () => [el, "auto", ew, eu],
          C = () => ["auto", "min", "max", "fr", ew, eu],
          L = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          A = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          E = () => ["auto", ...N()],
          M = () => [
            er,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...N(),
          ],
          z = () => [e, ew, eu],
          B = () => [...f(), ek, eT, { position: [ew, eu] }],
          I = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
          P = () => ["auto", "cover", "contain", eC, eg, { size: [ew, eu] }],
          O = () => [eo, eS, ef],
          U = () => ["", "none", "full", l, ew, eu],
          R = () => ["", ec, eS, ef],
          $ = () => ["solid", "dashed", "dotted", "double"],
          G = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          W = () => [ec, eo, ek, eT],
          F = () => ["", "none", h, ew, eu],
          H = () => ["none", ec, ew, eu],
          V = () => ["none", ec, ew, eu],
          q = () => [ec, ew, eu],
          K = () => [er, "full", ...N()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [em],
            breakpoint: [em],
            color: [e_],
            container: [em],
            "drop-shadow": [em],
            ease: ["in", "out", "in-out"],
            font: [eb],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [em],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [em],
            shadow: [em],
            spacing: ["px", ec],
            text: [em],
            "text-shadow": [em],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", er, eu, ew, p] }],
            container: ["container"],
            columns: [{ columns: [ec, eu, ew, r] }],
            "break-after": [{ "break-after": u() }],
            "break-before": [{ "break-before": u() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: D() }],
            overflow: [{ overflow: T() }],
            "overflow-x": [{ "overflow-x": T() }],
            "overflow-y": [{ "overflow-y": T() }],
            overscroll: [{ overscroll: v() }],
            "overscroll-x": [{ "overscroll-x": v() }],
            "overscroll-y": [{ "overscroll-y": v() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: w() }],
            "inset-x": [{ "inset-x": w() }],
            "inset-y": [{ "inset-y": w() }],
            start: [{ start: w() }],
            end: [{ end: w() }],
            top: [{ top: w() }],
            right: [{ right: w() }],
            bottom: [{ bottom: w() }],
            left: [{ left: w() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [el, "auto", ew, eu] }],
            basis: [{ basis: [er, "full", "auto", r, ...N()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [ec, er, "auto", "initial", "none", eu] }],
            grow: [{ grow: ["", ec, ew, eu] }],
            shrink: [{ shrink: ["", ec, ew, eu] }],
            order: [{ order: [el, "first", "last", "none", ew, eu] }],
            "grid-cols": [{ "grid-cols": S() }],
            "col-start-end": [{ col: j() }],
            "col-start": [{ "col-start": k() }],
            "col-end": [{ "col-end": k() }],
            "grid-rows": [{ "grid-rows": S() }],
            "row-start-end": [{ row: j() }],
            "row-start": [{ "row-start": k() }],
            "row-end": [{ "row-end": k() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": C() }],
            "auto-rows": [{ "auto-rows": C() }],
            gap: [{ gap: N() }],
            "gap-x": [{ "gap-x": N() }],
            "gap-y": [{ "gap-y": N() }],
            "justify-content": [{ justify: [...L(), "normal"] }],
            "justify-items": [{ "justify-items": [...A(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...A()] }],
            "align-content": [{ content: ["normal", ...L()] }],
            "align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...A(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": L() }],
            "place-items": [{ "place-items": [...A(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...A()] }],
            p: [{ p: N() }],
            px: [{ px: N() }],
            py: [{ py: N() }],
            ps: [{ ps: N() }],
            pe: [{ pe: N() }],
            pt: [{ pt: N() }],
            pr: [{ pr: N() }],
            pb: [{ pb: N() }],
            pl: [{ pl: N() }],
            m: [{ m: E() }],
            mx: [{ mx: E() }],
            my: [{ my: E() }],
            ms: [{ ms: E() }],
            me: [{ me: E() }],
            mt: [{ mt: E() }],
            mr: [{ mr: E() }],
            mb: [{ mb: E() }],
            ml: [{ ml: E() }],
            "space-x": [{ "space-x": N() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": N() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: M() }],
            w: [{ w: [r, "screen", ...M()] }],
            "min-w": [{ "min-w": [r, "screen", "none", ...M()] }],
            "max-w": [
              {
                "max-w": [
                  r,
                  "screen",
                  "none",
                  "prose",
                  { screen: [i] },
                  ...M(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...M()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...M()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...M()] }],
            "font-size": [{ text: ["base", n, eS, ef] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [s, ew, eD] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  eo,
                  eu,
                ],
              },
            ],
            "font-family": [{ font: [ej, eu, t] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [a, ew, eu] }],
            "line-clamp": [{ "line-clamp": [ec, "none", ew, eD] }],
            leading: [{ leading: [d, ...N()] }],
            "list-image": [{ "list-image": ["none", ew, eu] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", ew, eu] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: z() }],
            "text-color": [{ text: z() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [ec, "from-font", "auto", ew, ef] },
            ],
            "text-decoration-color": [{ decoration: z() }],
            "underline-offset": [{ "underline-offset": [ec, "auto", ew, eu] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: N() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  ew,
                  eu,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", ew, eu] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: B() }],
            "bg-repeat": [{ bg: I() }],
            "bg-size": [{ bg: P() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      el,
                      ew,
                      eu,
                    ],
                    radial: ["", ew, eu],
                    conic: [el, ew, eu],
                  },
                  eL,
                  ev,
                ],
              },
            ],
            "bg-color": [{ bg: z() }],
            "gradient-from-pos": [{ from: O() }],
            "gradient-via-pos": [{ via: O() }],
            "gradient-to-pos": [{ to: O() }],
            "gradient-from": [{ from: z() }],
            "gradient-via": [{ via: z() }],
            "gradient-to": [{ to: z() }],
            rounded: [{ rounded: U() }],
            "rounded-s": [{ "rounded-s": U() }],
            "rounded-e": [{ "rounded-e": U() }],
            "rounded-t": [{ "rounded-t": U() }],
            "rounded-r": [{ "rounded-r": U() }],
            "rounded-b": [{ "rounded-b": U() }],
            "rounded-l": [{ "rounded-l": U() }],
            "rounded-ss": [{ "rounded-ss": U() }],
            "rounded-se": [{ "rounded-se": U() }],
            "rounded-ee": [{ "rounded-ee": U() }],
            "rounded-es": [{ "rounded-es": U() }],
            "rounded-tl": [{ "rounded-tl": U() }],
            "rounded-tr": [{ "rounded-tr": U() }],
            "rounded-br": [{ "rounded-br": U() }],
            "rounded-bl": [{ "rounded-bl": U() }],
            "border-w": [{ border: R() }],
            "border-w-x": [{ "border-x": R() }],
            "border-w-y": [{ "border-y": R() }],
            "border-w-s": [{ "border-s": R() }],
            "border-w-e": [{ "border-e": R() }],
            "border-w-t": [{ "border-t": R() }],
            "border-w-r": [{ "border-r": R() }],
            "border-w-b": [{ "border-b": R() }],
            "border-w-l": [{ "border-l": R() }],
            "divide-x": [{ "divide-x": R() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": R() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...$(), "hidden", "none"] }],
            "divide-style": [{ divide: [...$(), "hidden", "none"] }],
            "border-color": [{ border: z() }],
            "border-color-x": [{ "border-x": z() }],
            "border-color-y": [{ "border-y": z() }],
            "border-color-s": [{ "border-s": z() }],
            "border-color-e": [{ "border-e": z() }],
            "border-color-t": [{ "border-t": z() }],
            "border-color-r": [{ "border-r": z() }],
            "border-color-b": [{ "border-b": z() }],
            "border-color-l": [{ "border-l": z() }],
            "divide-color": [{ divide: z() }],
            "outline-style": [{ outline: [...$(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [ec, ew, eu] }],
            "outline-w": [{ outline: ["", ec, eS, ef] }],
            "outline-color": [{ outline: z() }],
            shadow: [{ shadow: ["", "none", o, eA, eN] }],
            "shadow-color": [{ shadow: z() }],
            "inset-shadow": [{ "inset-shadow": ["none", m, eA, eN] }],
            "inset-shadow-color": [{ "inset-shadow": z() }],
            "ring-w": [{ ring: R() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: z() }],
            "ring-offset-w": [{ "ring-offset": [ec, ef] }],
            "ring-offset-color": [{ "ring-offset": z() }],
            "inset-ring-w": [{ "inset-ring": R() }],
            "inset-ring-color": [{ "inset-ring": z() }],
            "text-shadow": [{ "text-shadow": ["none", _, eA, eN] }],
            "text-shadow-color": [{ "text-shadow": z() }],
            opacity: [{ opacity: [ec, ew, eu] }],
            "mix-blend": [
              { "mix-blend": [...G(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": G() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [ec] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": z() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": z() }],
            "mask-image-t-from-pos": [{ "mask-t-from": W() }],
            "mask-image-t-to-pos": [{ "mask-t-to": W() }],
            "mask-image-t-from-color": [{ "mask-t-from": z() }],
            "mask-image-t-to-color": [{ "mask-t-to": z() }],
            "mask-image-r-from-pos": [{ "mask-r-from": W() }],
            "mask-image-r-to-pos": [{ "mask-r-to": W() }],
            "mask-image-r-from-color": [{ "mask-r-from": z() }],
            "mask-image-r-to-color": [{ "mask-r-to": z() }],
            "mask-image-b-from-pos": [{ "mask-b-from": W() }],
            "mask-image-b-to-pos": [{ "mask-b-to": W() }],
            "mask-image-b-from-color": [{ "mask-b-from": z() }],
            "mask-image-b-to-color": [{ "mask-b-to": z() }],
            "mask-image-l-from-pos": [{ "mask-l-from": W() }],
            "mask-image-l-to-pos": [{ "mask-l-to": W() }],
            "mask-image-l-from-color": [{ "mask-l-from": z() }],
            "mask-image-l-to-color": [{ "mask-l-to": z() }],
            "mask-image-x-from-pos": [{ "mask-x-from": W() }],
            "mask-image-x-to-pos": [{ "mask-x-to": W() }],
            "mask-image-x-from-color": [{ "mask-x-from": z() }],
            "mask-image-x-to-color": [{ "mask-x-to": z() }],
            "mask-image-y-from-pos": [{ "mask-y-from": W() }],
            "mask-image-y-to-pos": [{ "mask-y-to": W() }],
            "mask-image-y-from-color": [{ "mask-y-from": z() }],
            "mask-image-y-to-color": [{ "mask-y-to": z() }],
            "mask-image-radial": [{ "mask-radial": [ew, eu] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": z() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": z() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": f() }],
            "mask-image-conic-pos": [{ "mask-conic": [ec] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": z() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": z() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: B() }],
            "mask-repeat": [{ mask: I() }],
            "mask-size": [{ mask: P() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", ew, eu] }],
            filter: [{ filter: ["", "none", ew, eu] }],
            blur: [{ blur: F() }],
            brightness: [{ brightness: [ec, ew, eu] }],
            contrast: [{ contrast: [ec, ew, eu] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", x, eA, eN] }],
            "drop-shadow-color": [{ "drop-shadow": z() }],
            grayscale: [{ grayscale: ["", ec, ew, eu] }],
            "hue-rotate": [{ "hue-rotate": [ec, ew, eu] }],
            invert: [{ invert: ["", ec, ew, eu] }],
            saturate: [{ saturate: [ec, ew, eu] }],
            sepia: [{ sepia: ["", ec, ew, eu] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", ew, eu] }],
            "backdrop-blur": [{ "backdrop-blur": F() }],
            "backdrop-brightness": [{ "backdrop-brightness": [ec, ew, eu] }],
            "backdrop-contrast": [{ "backdrop-contrast": [ec, ew, eu] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", ec, ew, eu] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ec, ew, eu] }],
            "backdrop-invert": [{ "backdrop-invert": ["", ec, ew, eu] }],
            "backdrop-opacity": [{ "backdrop-opacity": [ec, ew, eu] }],
            "backdrop-saturate": [{ "backdrop-saturate": [ec, ew, eu] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", ec, ew, eu] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": N() }],
            "border-spacing-x": [{ "border-spacing-x": N() }],
            "border-spacing-y": [{ "border-spacing-y": N() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  ew,
                  eu,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [ec, "initial", ew, eu] }],
            ease: [{ ease: ["linear", "initial", b, ew, eu] }],
            delay: [{ delay: [ec, ew, eu] }],
            animate: [{ animate: ["none", g, ew, eu] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [y, ew, eu] }],
            "perspective-origin": [{ "perspective-origin": D() }],
            rotate: [{ rotate: H() }],
            "rotate-x": [{ "rotate-x": H() }],
            "rotate-y": [{ "rotate-y": H() }],
            "rotate-z": [{ "rotate-z": H() }],
            scale: [{ scale: V() }],
            "scale-x": [{ "scale-x": V() }],
            "scale-y": [{ "scale-y": V() }],
            "scale-z": [{ "scale-z": V() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: q() }],
            "skew-x": [{ "skew-x": q() }],
            "skew-y": [{ "skew-y": q() }],
            transform: [{ transform: [ew, eu, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: D() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: K() }],
            "translate-x": [{ "translate-x": K() }],
            "translate-y": [{ "translate-y": K() }],
            "translate-z": [{ "translate-z": K() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: z() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: z() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  ew,
                  eu,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": N() }],
            "scroll-mx": [{ "scroll-mx": N() }],
            "scroll-my": [{ "scroll-my": N() }],
            "scroll-ms": [{ "scroll-ms": N() }],
            "scroll-me": [{ "scroll-me": N() }],
            "scroll-mt": [{ "scroll-mt": N() }],
            "scroll-mr": [{ "scroll-mr": N() }],
            "scroll-mb": [{ "scroll-mb": N() }],
            "scroll-ml": [{ "scroll-ml": N() }],
            "scroll-p": [{ "scroll-p": N() }],
            "scroll-px": [{ "scroll-px": N() }],
            "scroll-py": [{ "scroll-py": N() }],
            "scroll-ps": [{ "scroll-ps": N() }],
            "scroll-pe": [{ "scroll-pe": N() }],
            "scroll-pt": [{ "scroll-pt": N() }],
            "scroll-pr": [{ "scroll-pr": N() }],
            "scroll-pb": [{ "scroll-pb": N() }],
            "scroll-pl": [{ "scroll-pl": N() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  ew,
                  eu,
                ],
              },
            ],
            fill: [{ fill: ["none", ...z()] }],
            "stroke-w": [{ stroke: [ec, eS, ef, eD] }],
            stroke: [{ stroke: ["none", ...z()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    function eG(...e) {
      return e$(
        (function () {
          for (var e, t, n = 0, s = "", a = arguments.length; n < a; n++)
            (e = arguments[n]) &&
              (t = (function e(t) {
                var n,
                  s,
                  a = "";
                if ("string" == typeof t || "number" == typeof t) a += t;
                else if ("object" == typeof t)
                  if (Array.isArray(t)) {
                    var d = t.length;
                    for (n = 0; n < d; n++)
                      t[n] && (s = e(t[n])) && (a && (a += " "), (a += s));
                  } else for (s in t) t[s] && (a && (a += " "), (a += s));
                return a;
              })(e)) &&
              (s && (s += " "), (s += t));
          return s;
        })(e),
      );
    }
    function eW({
      message: e,
      playerName: t = "我",
      girlName: s = "林晓柔",
      girlAvatar: a = "/avatar-girl.jpg",
    }) {
      let { sender: d, content: i, type: r, image: c } = e;
      if ("system" === d) {
        let e = i.startsWith("[TIME]"),
          t = e ? i.replace("[TIME]", "").trim() : i;
        return e
          ? (0, n.jsx)("div", {
              className: "flex justify-center px-4 my-[14px]",
              children: (0, n.jsx)("span", {
                className:
                  "text-[11px] text-[#999] bg-black/[0.045] rounded-[3px] px-[10px] py-[2px]",
                children: t,
              }),
            })
          : (0, n.jsx)("div", {
              className: "flex justify-center px-4 my-2.5",
              children: (0, n.jsx)("span", {
                className:
                  "text-[11px] text-[#888] bg-black/[0.055] rounded-sm px-2.5 py-[3px] leading-relaxed text-center max-w-[82%]",
                children: t,
              }),
            });
      }
      if ("read" === r)
        return (0, n.jsx)("div", {
          className: "flex justify-end pr-14 my-0.5",
          children: (0, n.jsx)("span", {
            className: "text-[10px] text-[#aaa]",
            children: i,
          }),
        });
      let l = "me" === d,
        o = i.match(/^\[图片：(.*?)\]$/),
        m = !!c || !!o,
        _ = o ? o[1] : "聊天图片";
      return (0, n.jsxs)("div", {
        className: eG(
          "flex items-start gap-[10px] px-[14px] my-[6px] message-in",
          l ? "flex-row-reverse" : "flex-row",
        ),
        children: [
          (0, n.jsx)("div", {
            className: "shrink-0 mt-0.5",
            children: (0, n.jsx)(y.default, {
              src: l ? "/avatar-boy.jpg" : a,
              alt: l ? t : s,
              width: 40,
              height: 40,
              className: "rounded-[4px] object-cover",
            }),
          }),
          (0, n.jsxs)("div", {
            className: eG(
              "flex flex-col max-w-[70%]",
              l ? "items-end" : "items-start",
            ),
            children: [
              !l &&
                (0, n.jsx)("span", {
                  className: "text-[12px] text-[#888] mb-[3px] ml-[2px]",
                  children: s,
                }),
              m
                ? (0, n.jsx)("div", {
                    className:
                      "relative overflow-hidden rounded-[6px] border border-black/5 mt-0.5 cursor-pointer active:opacity-80 transition-opacity bg-gray-100 flex items-center justify-center min-h-[120px] min-w-[120px] max-w-[200px]",
                    children: c
                      ? (0, n.jsx)(y.default, {
                          src: c,
                          alt: _,
                          width: 200,
                          height: 200,
                          className: "object-cover w-auto h-auto max-h-[250px]",
                          unoptimized: !0,
                        })
                      : (0, n.jsxs)("div", {
                          className:
                            "p-4 text-center text-gray-400 text-xs flex flex-col items-center gap-2",
                          children: [
                            (0, n.jsx)("svg", {
                              className: "w-8 h-8 opacity-50",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, n.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                              }),
                            }),
                            (0, n.jsx)("span", { children: _ }),
                          ],
                        }),
                  })
                : (0, n.jsx)("div", {
                    className: eG(
                      "relative px-[12px] py-[8px] rounded-[4px] text-[15px] leading-[1.55] break-words whitespace-pre-wrap",
                      l
                        ? "bg-[#95ec69] text-[#111] bubble-right rounded-tr-[2px]"
                        : "bg-white text-[#111] bubble-left rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
                    ),
                    children: i,
                  }),
            ],
          }),
        ],
      });
    }
    function eF({
      girlName: e = "林晓柔",
      girlAvatar: t = "/avatar-girl.jpg",
    }) {
      return (0, n.jsxs)("div", {
        className: "flex items-start gap-[10px] px-[14px] my-[6px] message-in",
        children: [
          (0, n.jsx)(y.default, {
            src: t,
            alt: e,
            width: 40,
            height: 40,
            className: "rounded-[4px] object-cover mt-0.5",
          }),
          (0, n.jsxs)("div", {
            className: "flex flex-col items-start",
            children: [
              (0, n.jsx)("span", {
                className: "text-[12px] text-[#888] mb-[3px] ml-[2px]",
                children: e,
              }),
              (0, n.jsx)("div", {
                className:
                  "relative bg-white rounded-[4px] rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] px-[14px] py-[11px] bubble-left",
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-[5px]",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    let eH = ["bg-[#07c160]", "bg-[#1aad19]", "bg-[#0b8a52]", "bg-[#3fbe8c]"];
    function eV({ choices: e, onSelect: t, disabled: a = !1 }) {
      let { playerName: d } = h(),
        i = d || "你",
        [r, c] = (0, s.useState)(null);
      return (0, n.jsxs)("div", {
        className:
          "shrink-0 bg-[#f0f0f0] border-t border-[#d9d9d9] pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]",
        children: [
          (0, n.jsx)("div", {
            className:
              "flex items-center justify-center py-[7px] border-b border-[#e5e5e5]",
            children: (0, n.jsx)("span", {
              className: "text-[11px] text-[#aaa]",
              children: r ? "判定结果揭晓..." : "选择你的回复方式",
            }),
          }),
          (0, n.jsx)("div", {
            className:
              "flex flex-col divide-y divide-[#e5e5e5] max-h-[45vh] overflow-y-auto overscroll-contain",
            children: e.map((e, s) => {
              let d = r === e.id,
                l = null !== r;
              return (0, n.jsxs)(
                "button",
                {
                  disabled: a || l,
                  onClick: () => {
                    !a &&
                      !r &&
                      (c(e.id),
                      setTimeout(() => {
                        t(e);
                      }, 999));
                  },
                  className: eG(
                    "option-card w-full flex items-center justify-between px-4 py-[12px] transition-all duration-300 text-left",
                    !l && "bg-white active:bg-[#ececec]",
                    l && d && "bg-[#e8f6e8]",
                    l && !d && "bg-[#f9f9f9] opacity-50",
                  ),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-start gap-3 pr-3",
                      children: [
                        (0, n.jsx)("span", {
                          className: eG(
                            "shrink-0 w-[22px] h-[22px] mt-[1px] rounded-full flex items-center justify-center text-[11px] font-bold text-white transition-colors",
                            eH[s % eH.length],
                            l && !d && "bg-[#ccc]",
                          ),
                          children: e.label,
                        }),
                        (0, n.jsx)("span", {
                          className: "text-[14px] text-[#1a1a1a] leading-snug",
                          children: e.text.replace(/\{name\}/g, i),
                        }),
                      ],
                    }),
                    l &&
                      e.badgeText &&
                      (0, n.jsx)("span", {
                        className: eG(
                          "shrink-0 text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap animate-in fade-in zoom-in duration-300",
                          d
                            ? "text-[#07c160] bg-[#07c160]/10 border-[#07c160]/30"
                            : "text-[#888] bg-[#f0f0f0] border-[#e0e0e0]",
                        ),
                        children: e.badgeText,
                      }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      });
    }
    function eq({ affection: e, anxiety: t, chapter: s }) {
      let a = r[s] ?? "进行中";
      return (0, n.jsxs)("div", {
        className:
          "shrink-0 bg-[#111] px-4 py-[7px] flex items-center gap-3 border-b border-white/10",
        children: [
          (0, n.jsx)("span", {
            className:
              "text-[10px] text-white/45 whitespace-nowrap shrink-0 leading-none",
            children: a,
          }),
          (0, n.jsx)("div", { className: "w-px h-3 bg-white/15 shrink-0" }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-1.5 flex-1 min-w-0",
            children: [
              (0, n.jsx)("span", {
                className: "text-[10px] text-[#ff7b8a] shrink-0 leading-none",
                children: "好感",
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden",
                children: (0, n.jsx)("div", {
                  className:
                    "h-full rounded-full bg-[#ff7b8a] transition-all duration-700",
                  style: { width: `${Math.max(2, e)}%` },
                }),
              }),
              (0, n.jsx)("span", {
                className:
                  "text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0",
                children: e,
              }),
            ],
          }),
          (0, n.jsx)("div", { className: "w-px h-3 bg-white/15 shrink-0" }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-1.5 flex-1 min-w-0",
            children: [
              (0, n.jsx)("span", {
                className: "text-[10px] text-[#ffb347] shrink-0 leading-none",
                children: "焦虑",
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden",
                children: (0, n.jsx)("div", {
                  className: eG(
                    "h-full rounded-full transition-all duration-700",
                    t >= 70 ? "bg-[#ff4444]" : "bg-[#ffb347]",
                  ),
                  style: { width: `${Math.max(2, t)}%` },
                }),
              }),
              (0, n.jsx)("span", {
                className:
                  "text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0",
                children: t,
              }),
            ],
          }),
        ],
      });
    }
    let eK = N("smile", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
      ]),
      eX = N("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]),
      eY = N("mic", [
        ["path", { d: "M12 19v3", key: "npa21l" }],
        ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
        [
          "rect",
          { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" },
        ],
      ]),
      eQ = N("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
    function eJ() {
      let {
          visibleMessages: e,
          isTyping: t,
          showChoices: a,
          currentChoices: d,
          affection: i,
          anxiety: r,
          chapter: c,
          playerName: l,
          girlName: o,
          girlAvatar: m,
        } = h(),
        { selectChoice: _ } = u(),
        x = (0, s.useRef)(null),
        y = (0, s.useRef)(null),
        [p, b] = (0, s.useState)(!1),
        g = (0, s.useRef)(!0),
        f = (0, s.useCallback)(() => {
          let e = x.current;
          if (!e) return;
          let t = e.scrollHeight - e.scrollTop - e.clientHeight;
          ((g.current = t < 80), b(t > 120));
        }, []);
      ((0, s.useEffect)(() => {
        g.current
          ? (y.current?.scrollIntoView({ behavior: "smooth" }), b(!1))
          : b(!0);
      }, [e, t]),
        (0, s.useEffect)(() => {
          a &&
            setTimeout(() => {
              (y.current?.scrollIntoView({ behavior: "smooth" }), b(!1));
            }, 50);
        }, [a]));
      let D = (0, s.useCallback)(() => {
          (y.current?.scrollIntoView({ behavior: "smooth" }),
            b(!1),
            (g.current = !0));
        }, []),
        T = (0, s.useCallback)((e) => _(e), [_]);
      return (0, n.jsxs)("div", {
        className: "h-full flex flex-col bg-[var(--wechat-bg)] overflow-hidden",
        children: [
          (0, n.jsx)(L, {}),
          (0, n.jsx)(B, { name: o, avatar: m, isTyping: t }),
          (0, n.jsx)(eq, { affection: i, anxiety: r, chapter: c }),
          (0, n.jsxs)("div", {
            ref: x,
            onScroll: f,
            className: "flex-1 overflow-y-auto overscroll-contain",
            children: [
              e.map((e) =>
                (0, n.jsx)(
                  eW,
                  {
                    message: e,
                    playerName: l || "我",
                    girlName: o,
                    girlAvatar: m,
                  },
                  e.id,
                ),
              ),
              t && (0, n.jsx)(eF, { girlName: o, girlAvatar: m }),
              (0, n.jsx)("div", { ref: y, className: "h-4" }),
            ],
          }),
          p &&
            (0, n.jsxs)("button", {
              onClick: D,
              className:
                "absolute bottom-[130px] left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/95 border border-[#ddd] shadow-md rounded-full px-3 py-1.5 text-[12px] text-[#555] z-10 active:bg-[#f0f0f0] transition-all",
              children: [
                (0, n.jsx)(eQ, { size: 13, strokeWidth: 2.5 }),
                "查看新消息",
              ],
            }),
          a
            ? (0, n.jsx)("div", {
                className: "shrink-0 animate-slide-up",
                children: (0, n.jsx)(eV, { choices: d, onSelect: T }),
              })
            : (0, n.jsxs)("div", {
                className:
                  "shrink-0 bg-[#f5f5f5] border-t border-[#e0e0e0] px-2 py-[7px] flex items-center gap-1.5",
                children: [
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eY, {
                      size: 24,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "flex-1 bg-white rounded-[5px] border border-[#ddd] px-3 h-[36px] flex items-center text-[13px] text-[#c0c0c0] shadow-inner",
                    children: t ? "对方正在输入…" : "选择下方选项回复",
                  }),
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eK, {
                      size: 22,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eX, {
                      size: 22,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                ],
              }),
        ],
      });
    }
    let eZ = N("heart", [
        [
          "path",
          {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0",
          },
        ],
      ]),
      e0 = N("star", [
        [
          "path",
          {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
          },
        ],
      ]),
      e1 = N("house", [
        [
          "path",
          { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
        ],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "r6nss1",
          },
        ],
      ]),
      e2 = {
        good: {
          bg: "from-green-50 to-emerald-50",
          border: "border-green-300",
          icon: w,
          iconColor: "text-green-600",
          badge: "🌟 清醒结局",
          badgeBg: "bg-green-100 text-green-700",
        },
        bad: {
          bg: "from-gray-50 to-slate-50",
          border: "border-gray-300",
          icon: eZ,
          iconColor: "text-gray-500",
          badge: "💔 沉沦结局",
          badgeBg: "bg-gray-200 text-gray-700",
        },
      };
    function e5() {
      let {
        endingData: e,
        affection: t,
        anxiety: s,
        choiceHistory: a,
        resetGame: d,
        girlName: i,
        girlAvatar: r,
      } = h();
      if (!e) return null;
      let l = e2[e.type] ?? e2.bad,
        o = Math.max(0, Math.round(100 - 0.5 * t - 0.3 * s)),
        m = a.filter((e) => (e.anxietyDelta ?? 0) < 0);
      return (0, n.jsxs)("div", {
        className:
          "h-full overflow-y-auto bg-[var(--wechat-bg)] px-4 py-6 flex flex-col gap-5",
        children: [
          (0, n.jsxs)("div", {
            className: "flex flex-col items-center justify-center pt-2 pb-1",
            children: [
              (0, n.jsx)(y.default, {
                src: r,
                alt: i,
                width: 60,
                height: 60,
                className:
                  "rounded-2xl shadow-md border-2 border-white object-cover",
              }),
              (0, n.jsxs)("p", {
                className: "text-xs text-muted-foreground mt-2 tracking-widest",
                children: [
                  "与 ",
                  (0, n.jsx)("span", {
                    className: "font-bold text-foreground",
                    children: i,
                  }),
                  " 的故事结局",
                ],
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className: eG(
              "rounded-3xl border-2 p-5 bg-gradient-to-b space-y-4 shadow-sm",
              l.bg,
              l.border,
            ),
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center",
                    children: (0, n.jsx)(l.icon, {
                      size: 24,
                      className: l.iconColor,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("span", {
                        className: eG(
                          "text-[11px] font-bold rounded-full px-2.5 py-0.5",
                          l.badgeBg,
                        ),
                        children: l.badge,
                      }),
                      (0, n.jsx)("h2", {
                        className:
                          "text-lg font-bold text-foreground mt-1.5 text-balance leading-tight",
                        children: e.title,
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "bg-white/70 rounded-2xl p-4 shadow-inner border border-white/50",
                children: e.desc
                  .split("\n")
                  .map((e, t) =>
                    (0, n.jsx)(
                      "p",
                      {
                        className: eG(
                          "text-sm text-foreground leading-relaxed",
                          "" === e ? "mt-2" : "",
                        ),
                        children: e,
                      },
                      t,
                    ),
                  ),
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className: "grid grid-cols-3 gap-3",
            children: [
              (0, n.jsx)(e3, {
                label: "最终理智值",
                value: `${o}`,
                unit: "分",
                color: "text-green-600",
              }),
              (0, n.jsx)(e3, {
                label: "沉沦指数",
                value: `${t}`,
                unit: "%",
                color: "text-rose-500",
              }),
              (0, n.jsx)(e3, {
                label: "反制次数",
                value: `${m.length}`,
                unit: "次",
                color: "text-blue-600",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "bg-white rounded-2xl border border-border p-4 flex flex-col items-center gap-2 shadow-sm",
            children: [
              (0, n.jsx)("span", {
                className: "text-sm font-bold text-foreground",
                children: "本次心智博弈评分",
              }),
              (0, n.jsx)("div", {
                className: "flex items-center gap-1 mt-1",
                children: [1, 2, 3, 4, 5].map((e) =>
                  (0, n.jsx)(
                    e0,
                    {
                      size: 24,
                      className: eG(
                        "transition-all",
                        e <= Math.ceil(o / 20)
                          ? "text-amber-400 fill-amber-400 scale-110"
                          : "text-gray-200",
                      ),
                    },
                    e,
                  ),
                ),
              }),
              (0, n.jsx)("p", {
                className:
                  "text-xs text-muted-foreground text-center mt-1 px-2",
                children:
                  o >= 80
                    ? "意志坚定，完美拆解一切套路与陷阱！"
                    : o >= 60
                      ? "略有上头，但在关键时刻守住了底线与框架"
                      : o >= 40
                        ? "深陷推拉，情绪和节奏被对方完全拿捏"
                        : "彻底沦陷，自愿成为了这段关系里的牺牲品",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "bg-white rounded-2xl border border-border p-4 space-y-3 shadow-sm",
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center gap-1.5 mb-2",
                children: [
                  (0, n.jsx)(S, {
                    size: 15,
                    className: "text-[var(--wechat-green)]",
                  }),
                  (0, n.jsx)("span", {
                    className: "text-sm font-bold text-foreground",
                    children: "本剧本核心心理战术",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "space-y-3",
                children: c.map((e) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className: "border-l-[3px] border-amber-300 pl-3",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-xs font-bold text-foreground",
                              children: e.desc,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "text-[10px] text-muted-foreground font-mono bg-gray-100 px-1 rounded",
                              children: e.name,
                            }),
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-[11px] text-muted-foreground mt-1 leading-relaxed",
                          children: e.detail,
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          (0, n.jsx)("div", {
            className: "flex flex-col gap-3 pb-6 pt-2",
            children: (0, n.jsxs)("button", {
              onClick: d,
              className:
                "w-full bg-white border border-border text-foreground font-medium py-3 rounded-2xl text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm",
              children: [(0, n.jsx)(e1, { size: 15 }), "返回首页"],
            }),
          }),
        ],
      });
    }
    function e3({ label: e, value: t, unit: s, color: a }) {
      return (0, n.jsxs)("div", {
        className:
          "bg-white rounded-2xl border border-border p-3 flex flex-col items-center gap-1.5 shadow-sm",
        children: [
          (0, n.jsx)("span", {
            className: "text-[11px] text-muted-foreground font-medium",
            children: e,
          }),
          (0, n.jsxs)("div", {
            className: "flex items-baseline gap-0.5",
            children: [
              (0, n.jsx)("span", {
                className: eG(
                  "text-2xl font-black font-mono tracking-tight",
                  a,
                ),
                children: t,
              }),
              (0, n.jsx)("span", {
                className: "text-xs text-muted-foreground font-medium",
                children: s,
              }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "PhoneFrame",
        0,
        function () {
          let e = h((e) => e.phase);
          return (0, n.jsxs)("div", {
            className:
              "flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4",
            children: [
              (0, n.jsxs)("div", {
                className: "relative",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "phone-screen relative bg-black rounded-[42px] p-[10px] shadow-2xl",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute right-[-3px] top-28 w-[3px] h-14 bg-gray-600 rounded-r-sm",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute left-[-3px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-sm",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute left-[-3px] top-36 w-[3px] h-10 bg-gray-600 rounded-l-sm",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "relative bg-[var(--wechat-bg)] rounded-[34px] overflow-hidden w-[375px] h-[750px] md:w-[390px] md:h-[780px]",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-2 h-2 rounded-full bg-gray-800",
                              }),
                              (0, n.jsx)("div", {
                                className: "w-4 h-1.5 rounded-full bg-gray-800",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "absolute inset-0 pt-7 flex flex-col",
                            children: [
                              "intro" === e && (0, n.jsx)(C, {}),
                              "playing" === e && (0, n.jsx)(eJ, {}),
                              "ending" === e && (0, n.jsx)(e5, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex justify-center mt-4",
                    children: (0, n.jsx)("div", {
                      className: "w-24 h-1 bg-white/20 rounded-full",
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "hidden lg:block absolute bottom-6 left-0 right-0 text-center",
                children: (0, n.jsx)("p", {
                  className: "text-white/30 text-xs",
                  children: "仅供娱乐",
                }),
              }),
            ],
          });
        },
      ],
      96566,
    );
  });
