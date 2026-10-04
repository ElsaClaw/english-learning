// 翰林課本_三上_Unit 4.pdf；逐頁視覺核對。vocab: word, pos, meaning, example, answerForm (false = no cloze), note
const hanlinUnits = [
  {
    "id": "hanlin-3a-u4",
    "course": "hanlin",
    "courseLabel": "翰林英文課本",
    "group": "三上 Unit 4",
    "title": "Making Things Smart",
    "subtitle": "從校園對話到智慧家庭，認識 IoT 如何改變生活",
    "sourceNote": "依提供的 6 頁 PDF 整理 Dialogue、情境例句與 Reading；繁體中文為學習輔助翻譯。補充例句另行標示。",
    "text": [
      [
        "(At the school gate)",
        "（在學校大門口）"
      ],
      [
        "Mrs. Wei: You're late, honey. Don't you know what time it is?",
        "魏太太：親愛的，你遲到了。你不知道現在幾點嗎？"
      ],
      [
        "Cody: Sorry, Mom. We made videos in class today. Ela couldn't remember where she saved her file, so I stayed to help her.",
        "Cody：對不起，媽。我們今天在課堂上製作影片。Ela 不記得把 file 存在哪裡，所以我留下來幫她。"
      ],
      [
        "Mrs. Wei: I see. Next time call to tell me you'll be late.",
        "魏太太：我知道了。下次會晚到時，打電話告訴我。"
      ],
      [
        "Cody: Okay, Mom.",
        "Cody：好的，媽。"
      ],
      [
        "Mrs. Wei: How was school today?",
        "魏太太：今天在學校過得怎麼樣？"
      ],
      [
        "Cody: We had a lot of fun in art class. We visited many museums through VR. Van Gogh even gave us a quiz!",
        "Cody：美術課很好玩。我們透過 VR 參觀許多博物館。梵谷甚至還幫我們做了小考！"
      ],
      [
        "Mrs. Wei: How interesting! When I was in school, we only had a blackboard and chalk. You guys are so lucky.",
        "魏太太：真有趣！我上學的時候，我們只有黑板和粉筆。你們真幸運。"
      ],
      [
        "Cody: I think so, too.",
        "Cody：我也這麼認為。"
      ],
      [
        "(At the door of their house)",
        "（在他們家門口）"
      ],
      [
        "Mrs. Wei: Cody, do you know why the screen is showing \"ERROR\"? I'm sure I pushed the right buttons, 5-2-5-7.",
        "魏太太：Cody，你知道為什麼 screen 顯示「ERROR」嗎？我確定我按了正確的按鈕，5-2-5-7。"
      ],
      [
        "Cody: That's because you're still using the old code. Today is the first day of November, so you should enter the new code, 6757.",
        "Cody：那是因為妳還在用舊的 code。今天是十一月一日，所以妳應該輸入新的 code，6757。"
      ],
      [
        "Mrs. Wei: Oh yeah, I remember now.",
        "魏太太：喔對，我現在想起來了。"
      ],
      [
        "(Inside the house)",
        "（在屋內）"
      ],
      [
        "Mrs. Wei: I know what to do next. OK Google, turn on the lights in the living room.",
        "魏太太：我知道接下來要做什麼。OK Google，打開客廳的燈。"
      ],
      [
        "(Mrs. Wei waits for the lights to turn on.)",
        "（魏太太等著燈亮起來。）"
      ],
      [
        "Mrs. Wei: I'm not sure if it heard me. Nothing's happening.",
        "魏太太：我不確定它是否有聽到我的話。什麼事都沒發生。"
      ],
      [
        "Cody: We changed the wake word last night, Mom. It's not Google anymore.",
        "Cody：媽，我們昨晚改了 wake word。已經不是 Google 了。"
      ],
      [
        "Mrs. Wei: Oh, right, but I forgot what it is.",
        "魏太太：喔，對，可是我忘了是什麼。"
      ],
      [
        "Cody: No worries. OK Noodle, turn on the lights and play a song for Mom.",
        "Cody：別擔心。OK Noodle，打開燈，放首歌給媽媽聽。"
      ],
      [
        "Mrs. Wei: It's the song \"You're the One\"! How did Noodle know whether I'd like it or not?",
        "魏太太：是〈You're the One〉這首歌！Noodle 怎麼知道我會不會喜歡？"
      ],
      [
        "Cody: It has a list of your favorite songs, so it knows what to play.",
        "Cody：它有妳最喜歡的歌曲清單，所以知道該播放什麼。"
      ],
      [
        "Mrs. Wei: I love our smart house!",
        "魏太太：我好喜歡我們的智慧家庭！"
      ],
      [
        "Hi Noodle, check the refrigerator.",
        "嗨 Noodle，檢查冰箱。"
      ],
      [
        "Hi Noodle, type a letter for me.",
        "嗨 Noodle，幫我打一封信。"
      ],
      [
        "Hi Noodle, remember that I put my key in the drawer.",
        "嗨 Noodle，記住我把鑰匙放在抽屜裡。"
      ],
      [
        "Hi Nini, how much milk do we have in the refrigerator?",
        "嗨 Nini，我們冰箱裡還有多少牛奶？"
      ],
      [
        "Picture that you're shopping. You go into a store with no clerks or shopkeepers. Right away, your cellphone shows you where to find the things on your shopping list. You collect everything, and you leave the store. When you're outside, your phone tells you if the money has been paid from your online wallet successfully. Very convenient, isn't it? Well, thanks to IoT, there are stores just like this now.",
        "想像你正在購物。你走進一家沒有店員或店主的商店。你的手機立刻告訴你購物清單上的東西在哪裡。你拿齊所有東西，離開商店。當你走到外面，手機會告訴你是否已經透過 online wallet 成功付款。很方便，對吧？多虧 IoT，現在已經有這樣的商店了。"
      ],
      [
        "IoT stands for Internet of things. The idea is to make things \"smart\" by connecting them to the Internet and having them share information with each other. For example, when you get home and are opening the door with your key, your phone will tell your house that you're back. So, even before you hit the couch, the lamps are already on and the TV is set to your favorite program. IoT makes our lives easier.",
        "IoT 代表 Internet of things。這個概念是將物品連接到 Internet，讓它們彼此分享資訊，使物品變得「聰明」。例如，你回到家用鑰匙開門時，手機會告訴房子你回來了。因此，甚至在你坐到沙發上之前，燈就已經亮了，電視也已經轉到你最喜歡的節目。IoT 讓生活更輕鬆。"
      ],
      [
        "More and more companies are now designing IoT products. Soon, these modern products will be everywhere, and we won't even know they are there. No one can know for sure how IoT will shape our lives. We will have to cross that bridge when we come to it.",
        "現在越來越多公司正在設計 IoT 產品。不久後，這些現代化產品將無所不在，我們甚至不會察覺它們的存在。沒有人能確定 IoT 將如何塑造我們的生活。我們只能到時候再說，遇到問題再處理。"
      ]
    ],
    "vocab": [
      [
        "gate",
        "n.",
        "大門",
        "We meet at the school gate.",
        "gate",
        "補充例句：教材僅提供場景片語。"
      ],
      [
        "honey",
        "n.",
        "親愛的（稱呼）",
        "You're late, honey.",
        "honey",
        ""
      ],
      [
        "file",
        "n.",
        "檔案",
        "Ela couldn't remember where she saved her file, so I stayed to help her.",
        "file",
        ""
      ],
      [
        "save",
        "v.",
        "儲存",
        "Ela couldn't remember where she saved her file, so I stayed to help her.",
        "saved",
        ""
      ],
      [
        "quiz",
        "n.",
        "小考",
        "Van Gogh even gave us a quiz!",
        "quiz",
        ""
      ],
      [
        "through",
        "prep.",
        "透過；憑藉",
        "We visited many museums through VR.",
        "through",
        ""
      ],
      [
        "blackboard",
        "n.",
        "黑板",
        "When I was in school, we only had a blackboard and chalk.",
        "blackboard",
        ""
      ],
      [
        "chalk",
        "n.",
        "粉筆",
        "When I was in school, we only had a blackboard and chalk.",
        "chalk",
        ""
      ],
      [
        "screen",
        "n.",
        "螢幕",
        "Cody, do you know why the screen is showing \"ERROR\"?",
        "screen",
        ""
      ],
      [
        "error",
        "n.",
        "錯誤",
        "Cody, do you know why the screen is showing \"ERROR\"?",
        "error",
        ""
      ],
      [
        "button",
        "n.",
        "按鈕；鈕扣",
        "I'm sure I pushed the right buttons, 5-2-5-7.",
        "buttons",
        ""
      ],
      [
        "enter",
        "v.",
        "輸入；進入",
        "Today is the first day of November, so you should enter the new code, 6757.",
        "enter",
        ""
      ],
      [
        "if",
        "conj.",
        "是否",
        "I'm not sure if it heard me.",
        "if",
        ""
      ],
      [
        "code",
        "n.",
        "碼",
        "That's because you're still using the old code.",
        "code",
        ""
      ],
      [
        "wake word",
        "n. phr.",
        "喚醒字詞",
        "We changed the wake word last night, Mom.",
        "wake word",
        ""
      ],
      [
        "whether",
        "conj.",
        "是否",
        "How did Noodle know whether I'd like it or not?",
        "whether",
        ""
      ],
      [
        "list",
        "n.",
        "清單",
        "It has a list of your favorite songs, so it knows what to play.",
        "list",
        ""
      ],
      [
        "not ... anymore",
        "phr.",
        "不再……",
        "It's not Google anymore.",
        false,
        "分離式片語：列入詞義測驗；不列入連續填字測驗。"
      ],
      [
        "voice assistant",
        "n. phr.",
        "語音助理",
        "Write down what you want your voice assistant to do.",
        "voice assistant",
        ""
      ],
      [
        "machine",
        "n.",
        "機器",
        "The coffee machine makes coffee for us.",
        "machine",
        "補充例句：教材提供字詞，未提供對應完整陳述句。"
      ],
      [
        "dozen",
        "n.",
        "一打",
        "We bought a dozen eggs.",
        "dozen",
        "補充例句：教材單字表未附例句。"
      ],
      [
        "refrigerator",
        "n.",
        "冰箱",
        "Hi Noodle, check the refrigerator.",
        "refrigerator",
        ""
      ],
      [
        "upload",
        "v.",
        "上傳",
        "We couldn't upload pictures to the cloud because there was no Wi-Fi.",
        "upload",
        "教材 Read and circle 題目填入正確選項。"
      ],
      [
        "e-mail",
        "n.",
        "電子郵件",
        "Please send me an e-mail.",
        "e-mail",
        "補充例句：教材未提供此詞的完整例句。"
      ],
      [
        "key",
        "n.",
        "鑰匙",
        "Hi Noodle, remember that I put my key in the drawer.",
        "key",
        ""
      ],
      [
        "the cloud",
        "n. phr.",
        "雲端",
        "We couldn't upload pictures to the cloud because there was no Wi-Fi.",
        "the cloud",
        "教材 Read and circle 題目填入正確選項。"
      ],
      [
        "type",
        "v.",
        "打字",
        "Hi Noodle, type a letter for me.",
        "type",
        ""
      ],
      [
        "shopkeeper",
        "n.",
        "店主",
        "You go into a store with no clerks or shopkeepers.",
        "shopkeepers",
        ""
      ],
      [
        "cellphone",
        "n.",
        "手機",
        "Right away, your cellphone shows you where to find the things on your shopping list.",
        "cellphone",
        ""
      ],
      [
        "collect",
        "v.",
        "收集",
        "You collect everything, and you leave the store.",
        "collect",
        ""
      ],
      [
        "outside",
        "adv.",
        "在外面",
        "When you're outside, your phone tells you if the money has been paid from your online wallet successfully.",
        "outside",
        ""
      ],
      [
        "wallet",
        "n.",
        "錢包",
        "When you're outside, your phone tells you if the money has been paid from your online wallet successfully.",
        "wallet",
        ""
      ],
      [
        "couch",
        "n.",
        "沙發",
        "So, even before you hit the couch, the lamps are already on and the TV is set to your favorite program.",
        "couch",
        ""
      ],
      [
        "lamp",
        "n.",
        "檯燈",
        "So, even before you hit the couch, the lamps are already on and the TV is set to your favorite program.",
        "lamps",
        ""
      ],
      [
        "program",
        "n.",
        "節目",
        "So, even before you hit the couch, the lamps are already on and the TV is set to your favorite program.",
        "program",
        ""
      ],
      [
        "modern",
        "adj.",
        "現代的",
        "Soon, these modern products will be everywhere, and we won't even know they are there.",
        "modern",
        ""
      ],
      [
        "cross that bridge when one comes to it",
        "phr.",
        "船到橋頭自然直；到時候再說",
        "We will have to cross that bridge when we come to it.",
        "cross that bridge when we come to it",
        ""
      ],
      [
        "stand for",
        "phr. v.",
        "代表",
        "IoT stands for Internet of things.",
        "stands for",
        ""
      ],
      [
        "set",
        "v.",
        "設定",
        "So, even before you hit the couch, the lamps are already on and the TV is set to your favorite program.",
        "set",
        ""
      ],
      [
        "shape",
        "v.",
        "塑造",
        "No one can know for sure how IoT will shape our lives.",
        "shape",
        ""
      ],
      [
        "connect",
        "v.",
        "連接",
        "The idea is to make things \"smart\" by connecting them to the Internet and having them share information with each other.",
        "connecting",
        ""
      ],
      [
        "product",
        "n.",
        "產品",
        "More and more companies are now designing IoT products.",
        "products",
        ""
      ],
      [
        "everywhere",
        "adv.",
        "到處",
        "Soon, these modern products will be everywhere, and we won't even know they are there.",
        "everywhere",
        ""
      ]
    ],
    "sections": {
      "0": "Dialogue · At the school gate",
      "9": "Dialogue · At home",
      "23": "情境例句 · Voice assistants",
      "27": "Reading · Making Things Smart"
    }
  }
];
