// Original assessment contexts; source IDs identify the tested curriculum headwords.
const midtermPapers = [
  {
    "id": "midterm-1",
    "title": "模擬考 1",
    "questions": [
      {
        "id": "reading-58",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "gunshot",
        "meaning": "槍聲",
        "prompt": "A loud _____ frightened the birds out of the trees.",
        "answer": "gunshot",
        "explanation": "gunshot：槍聲。完整句：A loud gunshot frightened the birds out of the trees."
      },
      {
        "id": "choice-79",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "majority",
        "meaning": "（大）多數",
        "prompt": "Eighteen of the twenty students voted yes, so a clear _____ supported the plan.",
        "answer": "majority",
        "explanation": "majority：（大）多數。完整句：Eighteen of the twenty students voted yes, so a clear majority supported the plan.",
        "choices": [
          "majority",
          "parcel",
          "calorie",
          "comma"
        ]
      },
      {
        "id": "reading-55",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "convict",
        "meaning": "判決有罪",
        "prompt": "The court cannot _____ someone without enough proof.",
        "answer": "convict",
        "explanation": "convict：判決有罪。完整句：The court cannot convict someone without enough proof."
      },
      {
        "id": "choice-67",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "palace",
        "meaning": "宮殿",
        "prompt": "The king welcomed his guests into the royal _____.",
        "answer": "palace",
        "explanation": "palace：宮殿。完整句：The king welcomed his guests into the royal palace.",
        "choices": [
          "palace",
          "tunnel",
          "suburb",
          "pub"
        ]
      },
      {
        "id": "reading-1",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "bullet",
        "meaning": "子彈",
        "prompt": "The police found a _____ inside the broken wooden door.",
        "answer": "bullet",
        "explanation": "bullet：子彈。完整句：The police found a bullet inside the broken wooden door."
      },
      {
        "id": "choice-34",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "twin",
        "meaning": "雙胞胎之一",
        "prompt": "My _____ brother and I were born on the same day to the same mother.",
        "answer": "twin",
        "explanation": "twin：雙胞胎之一。完整句：My twin brother and I were born on the same day to the same mother.",
        "choices": [
          "twin",
          "senior",
          "tourist",
          "scholar"
        ]
      },
      {
        "id": "choice-58",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "kindergarten",
        "meaning": "幼稚園；托兒所",
        "prompt": "My five-year-old sister goes to _____ before she starts elementary school.",
        "answer": "kindergarten",
        "explanation": "kindergarten：幼稚園；托兒所。完整句：My five-year-old sister goes to kindergarten before she starts elementary school.",
        "choices": [
          "kindergarten",
          "headquarters",
          "harbor",
          "jail"
        ]
      },
      {
        "id": "choice-61",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tunnel",
        "meaning": "隧道",
        "prompt": "The train entered a dark _____ through the mountain.",
        "answer": "tunnel",
        "explanation": "tunnel：隧道。完整句：The train entered a dark tunnel through the mountain.",
        "choices": [
          "tunnel",
          "palace",
          "stadium",
          "studio"
        ]
      },
      {
        "id": "choice-49",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "fountain",
        "meaning": "噴水池",
        "prompt": "Water sprayed high into the air from the _____ in the square.",
        "answer": "fountain",
        "explanation": "fountain：噴水池。完整句：Water sprayed high into the air from the fountain in the square.",
        "choices": [
          "fountain",
          "garage",
          "hallway",
          "dormitory"
        ]
      },
      {
        "id": "choice-1",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "accountant",
        "meaning": "會計師",
        "prompt": "The shop hired an _____ to check its income and expenses.",
        "answer": "accountant",
        "explanation": "accountant：會計師。完整句：The shop hired an accountant to check its income and expenses.",
        "choices": [
          "accountant",
          "composer",
          "athlete",
          "carpenter"
        ]
      },
      {
        "id": "reading-4",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "operate",
        "meaning": "動手術",
        "prompt": "The doctor must _____ on the injured driver tonight.",
        "answer": "operate",
        "explanation": "operate：動手術。完整句：The doctor must operate on the injured driver tonight."
      },
      {
        "id": "choice-13",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "librarian",
        "meaning": "圖書館員",
        "prompt": "Ask the _____ where the history books are kept.",
        "answer": "librarian",
        "explanation": "librarian：圖書館員。完整句：Ask the librarian where the history books are kept.",
        "choices": [
          "librarian",
          "miner",
          "painter",
          "mechanic"
        ]
      },
      {
        "id": "choice-46",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "dam",
        "meaning": "水壩",
        "prompt": "The new _____ holds back river water to form a large lake.",
        "answer": "dam",
        "explanation": "dam：水壩。完整句：The new dam holds back river water to form a large lake.",
        "choices": [
          "dam",
          "cinema",
          "drugstore",
          "alley"
        ]
      },
      {
        "id": "reading-31",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "got fed up with",
        "meaning": "厭倦",
        "prompt": "Mia _____ the constant noise and moved to a quieter room.",
        "answer": "got fed up with",
        "explanation": "got fed up with：厭倦。完整句：Mia got fed up with the constant noise and moved to a quieter room."
      },
      {
        "id": "choice-19",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "historian",
        "meaning": "歷史學家",
        "prompt": "The _____ studies old records to learn how people lived centuries ago.",
        "answer": "historian",
        "explanation": "historian：歷史學家。完整句：The historian studies old records to learn how people lived centuries ago.",
        "choices": [
          "historian",
          "lifeguard",
          "hairdresser",
          "mechanic"
        ]
      },
      {
        "id": "reading-46",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "prefer",
        "meaning": "偏好",
        "prompt": "I _____ tea to coffee because I like its lighter taste.",
        "answer": "prefer",
        "explanation": "prefer：偏好。完整句：I prefer tea to coffee because I like its lighter taste."
      },
      {
        "id": "choice-37",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aquarium",
        "meaning": "水族館；水族箱",
        "prompt": "Visitors watched colorful fish swimming in the _____.",
        "answer": "aquarium",
        "explanation": "aquarium：水族館；水族箱。完整句：Visitors watched colorful fish swimming in the aquarium.",
        "choices": [
          "aquarium",
          "basement",
          "alley",
          "cafeteria"
        ]
      },
      {
        "id": "reading-7",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "railway station",
        "meaning": "火車站",
        "prompt": "We bought two train tickets at the _____.",
        "answer": "railway station",
        "explanation": "railway station：火車站。完整句：We bought two train tickets at the railway station."
      },
      {
        "id": "choice-16",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "orphan",
        "meaning": "孤兒",
        "prompt": "The story is about an _____ whose parents both died when he was young.",
        "answer": "orphan",
        "explanation": "orphan：孤兒。完整句：The story is about an orphan whose parents both died when he was young.",
        "choices": [
          "orphan",
          "emperor",
          "inspector",
          "merchant"
        ]
      },
      {
        "id": "reading-34",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "waterproof",
        "meaning": "防水的",
        "prompt": "Wear _____ boots so your feet stay dry in the rain.",
        "answer": "waterproof",
        "explanation": "waterproof：防水的。完整句：Wear waterproof boots so your feet stay dry in the rain."
      },
      {
        "id": "choice-10",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "editor",
        "meaning": "編輯",
        "prompt": "The _____ corrected the spelling before the article was printed.",
        "answer": "editor",
        "explanation": "editor：編輯。完整句：The editor corrected the spelling before the article was printed.",
        "choices": [
          "editor",
          "athlete",
          "carpenter",
          "bridegroom"
        ]
      },
      {
        "id": "choice-85",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "complain",
        "meaning": "抱怨；申訴",
        "prompt": "Guests began to _____ because their rooms were dirty and noisy.",
        "answer": "complain",
        "explanation": "complain：抱怨；申訴。完整句：Guests began to complain because their rooms were dirty and noisy.",
        "choices": [
          "complain",
          "admire",
          "cherish",
          "attract"
        ]
      },
      {
        "id": "choice-31",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "photographer",
        "meaning": "攝影師",
        "prompt": "The wedding _____ asked everyone to smile at the camera.",
        "answer": "photographer",
        "explanation": "photographer：攝影師。完整句：The wedding photographer asked everyone to smile at the camera.",
        "choices": [
          "photographer",
          "physician",
          "plumber",
          "shepherd"
        ]
      },
      {
        "id": "choice-4",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carpenter",
        "meaning": "木匠",
        "prompt": "We asked a _____ to build wooden shelves for our books.",
        "answer": "carpenter",
        "explanation": "carpenter：木匠。完整句：We asked a carpenter to build wooden shelves for our books.",
        "choices": [
          "carpenter",
          "composer",
          "detective",
          "consumer"
        ]
      },
      {
        "id": "choice-82",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "anxious",
        "meaning": "焦慮的",
        "prompt": "She felt _____ while waiting to hear whether her missing dog had been found.",
        "answer": "anxious",
        "explanation": "anxious：焦慮的。完整句：She felt anxious while waiting to hear whether her missing dog had been found.",
        "choices": [
          "anxious",
          "cheerful",
          "agreeable",
          "attractive"
        ]
      },
      {
        "id": "reading-10",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "check up",
        "meaning": "檢查；查核",
        "prompt": "Parents should _____ on the safety of their children's toys.",
        "answer": "check up",
        "explanation": "check up：檢查；查核。完整句：Parents should check up on the safety of their children's toys."
      },
      {
        "id": "choice-76",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "slice",
        "meaning": "一片",
        "prompt": "Would you like a thin _____ of bread with your soup?",
        "answer": "slice",
        "explanation": "slice：一片。完整句：Would you like a thin slice of bread with your soup?",
        "choices": [
          "slice",
          "herd",
          "flock",
          "kilometer"
        ]
      },
      {
        "id": "reading-40",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "refreshing",
        "meaning": "使人精神煥發的",
        "prompt": "A cool shower was _____ after our long bike ride.",
        "answer": "refreshing",
        "explanation": "refreshing：使人精神煥發的。完整句：A cool shower was refreshing after our long bike ride."
      },
      {
        "id": "reading-37",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "battling",
        "meaning": "與…搏鬥；奮戰",
        "prompt": "The firefighters spent the night _____ the forest fire.",
        "answer": "battling",
        "explanation": "battling：與…搏鬥；奮戰。完整句：The firefighters spent the night battling the forest fire."
      },
      {
        "id": "reading-13",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "living",
        "meaning": "生活方式",
        "prompt": "Clean water is necessary for healthy _____.",
        "answer": "living",
        "explanation": "living：生活方式。完整句：Clean water is necessary for healthy living."
      },
      {
        "id": "choice-40",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "clinic",
        "meaning": "診所",
        "prompt": "The small medical _____ treats patients but has no overnight beds.",
        "answer": "clinic",
        "explanation": "clinic：診所。完整句：The small medical clinic treats patients but has no overnight beds.",
        "choices": [
          "clinic",
          "cinema",
          "dam",
          "avenue"
        ]
      },
      {
        "id": "reading-49",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "digestive",
        "meaning": "消化的",
        "prompt": "Chewing food well helps your _____ system do its job.",
        "answer": "digestive",
        "explanation": "digestive：消化的。完整句：Chewing food well helps your digestive system do its job."
      },
      {
        "id": "choice-28",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "translator",
        "meaning": "譯者；翻譯家",
        "prompt": "The _____ changed the instructions from Spanish into English.",
        "answer": "translator",
        "explanation": "translator：譯者；翻譯家。完整句：The translator changed the instructions from Spanish into English.",
        "choices": [
          "translator",
          "plumber",
          "tailor",
          "pilot"
        ]
      },
      {
        "id": "choice-52",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "harbor",
        "meaning": "港口",
        "prompt": "The fishing boats returned to the sheltered _____ before the storm.",
        "answer": "harbor",
        "explanation": "harbor：港口。完整句：The fishing boats returned to the sheltered harbor before the storm.",
        "choices": [
          "harbor",
          "nursery",
          "hive",
          "garage"
        ]
      },
      {
        "id": "reading-16",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "mansion",
        "meaning": "豪宅",
        "prompt": "The wealthy actor lives in a huge _____ with twenty rooms.",
        "answer": "mansion",
        "explanation": "mansion：豪宅。完整句：The wealthy actor lives in a huge mansion with twenty rooms."
      },
      {
        "id": "choice-73",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "bunch",
        "meaning": "串；束；群",
        "prompt": "Mum bought a _____ of grapes still attached to the same stem.",
        "answer": "bunch",
        "explanation": "bunch：串；束；群。完整句：Mum bought a bunch of grapes still attached to the same stem.",
        "choices": [
          "bunch",
          "herd",
          "gallon",
          "comma"
        ]
      },
      {
        "id": "choice-64",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "stadium",
        "meaning": "運動場",
        "prompt": "Thousands of fans filled the _____ to watch the football final.",
        "answer": "stadium",
        "explanation": "stadium：運動場。完整句：Thousands of fans filled the stadium to watch the football final.",
        "choices": [
          "stadium",
          "tomb",
          "tunnel",
          "pub"
        ]
      },
      {
        "id": "choice-88",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "determination",
        "meaning": "決心；決意",
        "prompt": "Despite many failures, his _____ kept him working toward his goal.",
        "answer": "determination",
        "explanation": "determination：決心；決意。完整句：Despite many failures, his determination kept him working toward his goal.",
        "choices": [
          "determination",
          "disgust",
          "confusion",
          "amusement"
        ]
      },
      {
        "id": "choice-70",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "shelter",
        "meaning": "庇護",
        "prompt": "During the storm, the cave gave the hikers _____ from the rain.",
        "answer": "shelter",
        "explanation": "shelter：庇護。完整句：During the storm, the cave gave the hikers shelter from the rain.",
        "choices": [
          "shelter",
          "delay",
          "occasion",
          "postponement"
        ]
      },
      {
        "id": "choice-43",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "alley",
        "meaning": "小巷；弄",
        "prompt": "The narrow _____ between the buildings is too small for cars.",
        "answer": "alley",
        "explanation": "alley：小巷；弄。完整句：The narrow alley between the buildings is too small for cars.",
        "choices": [
          "alley",
          "county",
          "campus",
          "dam"
        ]
      },
      {
        "id": "choice-25",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "pilot",
        "meaning": "飛行員；領航員",
        "prompt": "The _____ checked the controls before flying the plane.",
        "answer": "pilot",
        "explanation": "pilot：飛行員；領航員。完整句：The pilot checked the controls before flying the plane.",
        "choices": [
          "pilot",
          "plumber",
          "tailor",
          "translator"
        ]
      },
      {
        "id": "reading-52",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "identify",
        "meaning": "辨識；確認身分",
        "prompt": "Can you _____ this bird by the sound it makes?",
        "answer": "identify",
        "explanation": "identify：辨識；確認身分。完整句：Can you identify this bird by the sound it makes?"
      },
      {
        "id": "reading-19",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "valuable",
        "meaning": "有價值的；珍貴的",
        "prompt": "This old painting is too _____ to leave outside.",
        "answer": "valuable",
        "explanation": "valuable：有價值的；珍貴的。完整句：This old painting is too valuable to leave outside."
      },
      {
        "id": "reading-22",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "dripping",
        "meaning": "滴水的",
        "prompt": "Please leave your _____ raincoat outside the classroom.",
        "answer": "dripping",
        "explanation": "dripping：滴水的。完整句：Please leave your dripping raincoat outside the classroom."
      },
      {
        "id": "reading-43",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "estimate",
        "meaning": "估計",
        "prompt": "Can you _____ how many beans are in this jar?",
        "answer": "estimate",
        "explanation": "estimate：估計。完整句：Can you estimate how many beans are in this jar?"
      },
      {
        "id": "reading-25",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "drugstore",
        "meaning": "藥房",
        "prompt": "Dad went to the _____ to buy medicine for his cough.",
        "answer": "drugstore",
        "explanation": "drugstore：藥房。完整句：Dad went to the drugstore to buy medicine for his cough."
      },
      {
        "id": "reading-28",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "fell asleep",
        "meaning": "入睡；去世",
        "prompt": "The tired child _____ during the bus ride.",
        "answer": "fell asleep",
        "explanation": "fell asleep：入睡；去世。完整句：The tired child fell asleep during the bus ride."
      },
      {
        "id": "choice-55",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "dormitory",
        "meaning": "宿舍",
        "prompt": "Many students sleep in the school _____ during the semester.",
        "answer": "dormitory",
        "explanation": "dormitory：宿舍。完整句：Many students sleep in the school dormitory during the semester.",
        "choices": [
          "dormitory",
          "observatory",
          "harbor",
          "hive"
        ]
      },
      {
        "id": "choice-7",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "ambassador",
        "meaning": "大使",
        "prompt": "The _____ spoke officially for her country at the meeting.",
        "answer": "ambassador",
        "explanation": "ambassador：大使。完整句：The ambassador spoke officially for her country at the meeting.",
        "choices": [
          "ambassador",
          "burglar",
          "cleaner",
          "carpenter"
        ]
      },
      {
        "id": "choice-22",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "infant",
        "meaning": "嬰兒；幼兒",
        "prompt": "The tiny _____ was only two weeks old and could not sit up yet.",
        "answer": "infant",
        "explanation": "infant：嬰兒；幼兒。完整句：The tiny infant was only two weeks old and could not sit up yet.",
        "choices": [
          "infant",
          "governor",
          "lecturer",
          "emperor"
        ]
      }
    ]
  },
  {
    "id": "midterm-2",
    "title": "模擬考 2",
    "questions": [
      {
        "id": "reading-26",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "worse and worse",
        "meaning": "越來越糟",
        "prompt": "Without any repairs, the road became _____.",
        "answer": "worse and worse",
        "explanation": "worse and worse：越來越糟。完整句：Without any repairs, the road became worse and worse."
      },
      {
        "id": "reading-2",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "Getting enough sleep helps your _____ remember new things.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：Getting enough sleep helps your brain remember new things."
      },
      {
        "id": "choice-5",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "composer",
        "meaning": "作曲家",
        "prompt": "The _____ wrote a new piece of music for the school orchestra.",
        "answer": "composer",
        "explanation": "composer：作曲家。完整句：The composer wrote a new piece of music for the school orchestra.",
        "choices": [
          "composer",
          "burglar",
          "accountant",
          "cleaner"
        ]
      },
      {
        "id": "choice-59",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lobby",
        "meaning": "（旅館等的）大廳",
        "prompt": "We waited near the hotel's front desk in the _____.",
        "answer": "lobby",
        "explanation": "lobby：（旅館等的）大廳。完整句：We waited near the hotel's front desk in the lobby.",
        "choices": [
          "lobby",
          "hive",
          "globe",
          "greenhouse"
        ]
      },
      {
        "id": "reading-20",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "treasure",
        "meaning": "寶藏",
        "prompt": "The children imagined finding buried _____ on the island.",
        "answer": "treasure",
        "explanation": "treasure：寶藏。完整句：The children imagined finding buried treasure on the island."
      },
      {
        "id": "reading-38",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "routine",
        "meaning": "例行事務",
        "prompt": "Reading for ten minutes is part of my bedtime _____.",
        "answer": "routine",
        "explanation": "routine：例行事務。完整句：Reading for ten minutes is part of my bedtime routine."
      },
      {
        "id": "choice-86",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "confuse",
        "meaning": "使困惑",
        "prompt": "The two similar street names often _____ visitors trying to find the hotel.",
        "answer": "confuse",
        "explanation": "confuse：使困惑。完整句：The two similar street names often confuse visitors trying to find the hotel.",
        "choices": [
          "confuse",
          "comfort",
          "cherish",
          "admire"
        ]
      },
      {
        "id": "choice-83",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "ashamed",
        "meaning": "羞愧的",
        "prompt": "He felt _____ after lying to his best friend and wanted to apologize.",
        "answer": "ashamed",
        "explanation": "ashamed：羞愧的。完整句：He felt ashamed after lying to his best friend and wanted to apologize.",
        "choices": [
          "ashamed",
          "cheerful",
          "desirable",
          "admirable"
        ]
      },
      {
        "id": "choice-32",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "The _____ carefully removed the damaged part during the operation.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：The surgeon carefully removed the damaged part during the operation.",
        "choices": [
          "surgeon",
          "tailor",
          "pilot",
          "publisher"
        ]
      },
      {
        "id": "reading-59",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "arrest",
        "meaning": "逮捕",
        "prompt": "The police arrived to _____ the man who had stolen the car.",
        "answer": "arrest",
        "explanation": "arrest：逮捕。完整句：The police arrived to arrest the man who had stolen the car."
      },
      {
        "id": "choice-14",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lifeguard",
        "meaning": "救生員",
        "prompt": "The _____ jumped into the pool to save a drowning child.",
        "answer": "lifeguard",
        "explanation": "lifeguard：救生員。完整句：The lifeguard jumped into the pool to save a drowning child.",
        "choices": [
          "lifeguard",
          "novelist",
          "merchant",
          "historian"
        ]
      },
      {
        "id": "reading-47",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "rubber",
        "meaning": "橡膠",
        "prompt": "The soles of these shoes are made of soft _____.",
        "answer": "rubber",
        "explanation": "rubber：橡膠。完整句：The soles of these shoes are made of soft rubber."
      },
      {
        "id": "choice-62",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postpone",
        "meaning": "使延期",
        "prompt": "Heavy rain forced us to _____ the picnic until next week.",
        "answer": "postpone",
        "explanation": "postpone：使延期。完整句：Heavy rain forced us to postpone the picnic until next week.",
        "choices": [
          "postpone",
          "surround",
          "prolong",
          "locate"
        ]
      },
      {
        "id": "choice-65",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "temporary",
        "meaning": "暫時的",
        "prompt": "This is only a _____ classroom; we will return to our old room next month.",
        "answer": "temporary",
        "explanation": "temporary：暫時的。完整句：This is only a temporary classroom; we will return to our old room next month.",
        "choices": [
          "temporary",
          "tropical",
          "outer",
          "yearly"
        ]
      },
      {
        "id": "choice-56",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "observatory",
        "meaning": "天文台；觀測站",
        "prompt": "Scientists use the large telescope at the _____ to study stars.",
        "answer": "observatory",
        "explanation": "observatory：天文台；觀測站。完整句：Scientists use the large telescope at the observatory to study stars.",
        "choices": [
          "observatory",
          "nursery",
          "mall",
          "garage"
        ]
      },
      {
        "id": "choice-77",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "comma",
        "meaning": "逗號",
        "prompt": "Put a _____ between the items in this written list.",
        "answer": "comma",
        "explanation": "comma：逗號。完整句：Put a comma between the items in this written list.",
        "choices": [
          "comma",
          "calorie",
          "gallon",
          "parcel"
        ]
      },
      {
        "id": "reading-32",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "commute",
        "meaning": "通勤",
        "prompt": "My parents _____ to the city by bus every morning.",
        "answer": "commute",
        "explanation": "commute：通勤。完整句：My parents commute to the city by bus every morning."
      },
      {
        "id": "reading-50",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "ordinary",
        "meaning": "普通的",
        "prompt": "It looked like an _____ stone until we saw it glow.",
        "answer": "ordinary",
        "explanation": "ordinary：普通的。完整句：It looked like an ordinary stone until we saw it glow."
      },
      {
        "id": "choice-38",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "basement",
        "meaning": "地下室",
        "prompt": "The room below the ground floor is our _____.",
        "answer": "basement",
        "explanation": "basement：地下室。完整句：The room below the ground floor is our basement.",
        "choices": [
          "basement",
          "campus",
          "avenue",
          "deck"
        ]
      },
      {
        "id": "reading-5",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "A skilled _____ repaired my grandfather's damaged knee.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：A skilled surgeon repaired my grandfather's damaged knee."
      },
      {
        "id": "reading-56",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "evidence",
        "meaning": "證據",
        "prompt": "The muddy shoes provided important _____ in the case.",
        "answer": "evidence",
        "explanation": "evidence：證據。完整句：The muddy shoes provided important evidence in the case."
      },
      {
        "id": "reading-23",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "fell in a faint",
        "meaning": "昏倒",
        "prompt": "The woman _____ after standing in the heat for hours.",
        "answer": "fell in a faint",
        "explanation": "fell in a faint：昏倒。完整句：The woman fell in a faint after standing in the heat for hours."
      },
      {
        "id": "reading-8",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "Your _____ controls how you move and think.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：Your brain controls how you move and think."
      },
      {
        "id": "choice-8",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "applicant",
        "meaning": "申請者；應徵者",
        "prompt": "Each _____ must send a form before the job interview.",
        "answer": "applicant",
        "explanation": "applicant：申請者；應徵者。完整句：Each applicant must send a form before the job interview.",
        "choices": [
          "applicant",
          "ancestor",
          "infant",
          "bride"
        ]
      },
      {
        "id": "choice-53",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hive",
        "meaning": "蜂窩",
        "prompt": "Thousands of bees live together in this _____.",
        "answer": "hive",
        "explanation": "hive：蜂窩。完整句：Thousands of bees live together in this hive.",
        "choices": [
          "hive",
          "inn",
          "mall",
          "lobby"
        ]
      },
      {
        "id": "choice-50",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "garage",
        "meaning": "車庫",
        "prompt": "Dad parked the car inside the _____ beside our house.",
        "answer": "garage",
        "explanation": "garage：車庫。完整句：Dad parked the car inside the garage beside our house.",
        "choices": [
          "garage",
          "hive",
          "lighthouse",
          "globe"
        ]
      },
      {
        "id": "reading-44",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "consume",
        "meaning": "消耗；吃掉",
        "prompt": "These old lights _____ more electricity than the new ones.",
        "answer": "consume",
        "explanation": "consume：消耗；吃掉。完整句：These old lights consume more electricity than the new ones."
      },
      {
        "id": "choice-68",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "semester",
        "meaning": "學期",
        "prompt": "The new school _____ begins in September and ends in January.",
        "answer": "semester",
        "explanation": "semester：學期。完整句：The new school semester begins in September and ends in January.",
        "choices": [
          "semester",
          "shelter",
          "route",
          "zone"
        ]
      },
      {
        "id": "choice-29",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "vegetarian",
        "meaning": "素食者",
        "prompt": "As a _____, Nina eats beans and vegetables but no meat.",
        "answer": "vegetarian",
        "explanation": "vegetarian：素食者。完整句：As a vegetarian, Nina eats beans and vegetables but no meat.",
        "choices": [
          "vegetarian",
          "photographer",
          "politician",
          "physicist"
        ]
      },
      {
        "id": "reading-53",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "fingertip",
        "meaning": "指尖",
        "prompt": "She touched the cold window with one _____.",
        "answer": "fingertip",
        "explanation": "fingertip：指尖。完整句：She touched the cold window with one fingertip."
      },
      {
        "id": "reading-11",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "once in a while",
        "meaning": "偶爾",
        "prompt": "We visit our old neighbors _____, but not every week.",
        "answer": "once in a while",
        "explanation": "once in a while：偶爾。完整句：We visit our old neighbors once in a while, but not every week."
      },
      {
        "id": "choice-44",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "anniversary",
        "meaning": "週年紀念日",
        "prompt": "They celebrated their tenth wedding _____ with a family dinner.",
        "answer": "anniversary",
        "explanation": "anniversary：週年紀念日。完整句：They celebrated their tenth wedding anniversary with a family dinner.",
        "choices": [
          "anniversary",
          "aquarium",
          "basement",
          "curve"
        ]
      },
      {
        "id": "reading-35",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "drag",
        "meaning": "拖拉",
        "prompt": "The box is too heavy to lift, so we must _____ it across the floor.",
        "answer": "drag",
        "explanation": "drag：拖拉。完整句：The box is too heavy to lift, so we must drag it across the floor."
      },
      {
        "id": "reading-29",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "will",
        "meaning": "遺囑",
        "prompt": "Grandpa left his books to the library in his _____.",
        "answer": "will",
        "explanation": "will：遺囑。完整句：Grandpa left his books to the library in his will."
      },
      {
        "id": "choice-71",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tropical",
        "meaning": "熱帶的",
        "prompt": "Bananas grow well in the hot, wet weather of _____ regions.",
        "answer": "tropical",
        "explanation": "tropical：熱帶的。完整句：Bananas grow well in the hot, wet weather of tropical regions.",
        "choices": [
          "tropical",
          "weekly",
          "temporary",
          "previous"
        ]
      },
      {
        "id": "reading-17",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "inner",
        "meaning": "內在的",
        "prompt": "She took a deep breath to find _____ peace before the test.",
        "answer": "inner",
        "explanation": "inner：內在的。完整句：She took a deep breath to find inner peace before the test."
      },
      {
        "id": "choice-35",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "refugee",
        "meaning": "難民",
        "prompt": "The _____ crossed the border to escape the war in her homeland.",
        "answer": "refugee",
        "explanation": "refugee：難民。完整句：The refugee crossed the border to escape the war in her homeland.",
        "choices": [
          "refugee",
          "tourist",
          "photographer",
          "publisher"
        ]
      },
      {
        "id": "choice-89",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "conscience",
        "meaning": "良心",
        "prompt": "His _____ told him it was wrong to keep the money he had found.",
        "answer": "conscience",
        "explanation": "conscience：良心。完整句：His conscience told him it was wrong to keep the money he had found.",
        "choices": [
          "conscience",
          "attraction",
          "amusement",
          "curiosity"
        ]
      },
      {
        "id": "reading-14",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "His friendly _____ made the new student feel welcome.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：His friendly attitude made the new student feel welcome."
      },
      {
        "id": "choice-47",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "downtown",
        "meaning": "市中心的",
        "prompt": "We took a bus _____ to visit the shops in the city center.",
        "answer": "downtown",
        "explanation": "downtown：市中心的。完整句：We took a bus downtown to visit the shops in the city center.",
        "choices": [
          "downtown",
          "forever",
          "barely",
          "beneath"
        ]
      },
      {
        "id": "choice-17",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "hairdresser",
        "meaning": "美髮師",
        "prompt": "The _____ cut my long hair just above my shoulders.",
        "answer": "hairdresser",
        "explanation": "hairdresser：美髮師。完整句：The hairdresser cut my long hair just above my shoulders.",
        "choices": [
          "hairdresser",
          "miner",
          "historian",
          "novelist"
        ]
      },
      {
        "id": "choice-26",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "plumber",
        "meaning": "水電工；水管瓦斯工人",
        "prompt": "Water was leaking under the sink, so we called a _____.",
        "answer": "plumber",
        "explanation": "plumber：水電工；水管瓦斯工人。完整句：Water was leaking under the sink, so we called a plumber.",
        "choices": [
          "plumber",
          "pilot",
          "philosopher",
          "photographer"
        ]
      },
      {
        "id": "choice-80",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "parcel",
        "meaning": "包裹",
        "prompt": "The delivery driver left a wrapped _____ at our door.",
        "answer": "parcel",
        "explanation": "parcel：包裹。完整句：The delivery driver left a wrapped parcel at our door.",
        "choices": [
          "parcel",
          "percent",
          "rainfall",
          "extent"
        ]
      },
      {
        "id": "choice-11",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "consumer",
        "meaning": "消費者",
        "prompt": "As a _____, you should compare prices before buying a phone.",
        "answer": "consumer",
        "explanation": "consumer：消費者。完整句：As a consumer, you should compare prices before buying a phone.",
        "choices": [
          "consumer",
          "composer",
          "ancestor",
          "commander"
        ]
      },
      {
        "id": "choice-2",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "athlete",
        "meaning": "運動員",
        "prompt": "The young _____ trains for the national running race every morning.",
        "answer": "athlete",
        "explanation": "athlete：運動員。完整句：The young athlete trains for the national running race every morning.",
        "choices": [
          "athlete",
          "accountant",
          "editor",
          "diplomat"
        ]
      },
      {
        "id": "choice-74",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "herd",
        "meaning": "獸群",
        "prompt": "A _____ of cattle was grazing in the field.",
        "answer": "herd",
        "explanation": "herd：獸群。完整句：A herd of cattle was grazing in the field.",
        "choices": [
          "herd",
          "slice",
          "comma",
          "gallon"
        ]
      },
      {
        "id": "choice-41",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deadline",
        "meaning": "截止日期",
        "prompt": "Friday is the _____; reports sent after that day will be late.",
        "answer": "deadline",
        "explanation": "deadline：截止日期。完整句：Friday is the deadline; reports sent after that day will be late.",
        "choices": [
          "deadline",
          "decade",
          "county",
          "curve"
        ]
      },
      {
        "id": "choice-20",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "miner",
        "meaning": "礦工",
        "prompt": "The _____ went deep underground to dig for coal.",
        "answer": "miner",
        "explanation": "miner：礦工。完整句：The miner went deep underground to dig for coal.",
        "choices": [
          "miner",
          "librarian",
          "lecturer",
          "mayor"
        ]
      },
      {
        "id": "reading-41",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "unusual",
        "meaning": "不尋常的",
        "prompt": "It is _____ to see snow in this warm town.",
        "answer": "unusual",
        "explanation": "unusual：不尋常的。完整句：It is unusual to see snow in this warm town."
      },
      {
        "id": "choice-23",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mayor",
        "meaning": "市長",
        "prompt": "The city's _____ announced a plan to improve local bus services.",
        "answer": "mayor",
        "explanation": "mayor：市長。完整句：The city's mayor announced a plan to improve local bus services.",
        "choices": [
          "mayor",
          "infant",
          "miner",
          "magician"
        ]
      }
    ]
  },
  {
    "id": "midterm-3",
    "title": "模擬考 3",
    "questions": [
      {
        "id": "reading-51",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "criminal",
        "meaning": "罪犯",
        "prompt": "The police finally caught the _____ who had robbed three stores.",
        "answer": "criminal",
        "explanation": "criminal：罪犯。完整句：The police finally caught the criminal who had robbed three stores."
      },
      {
        "id": "choice-63",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "rural",
        "meaning": "鄉村的",
        "prompt": "The _____ village has farms and fields instead of tall office buildings.",
        "answer": "rural",
        "explanation": "rural：鄉村的。完整句：The rural village has farms and fields instead of tall office buildings.",
        "choices": [
          "rural",
          "urban",
          "weekly",
          "temporary"
        ]
      },
      {
        "id": "reading-12",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "earn",
        "meaning": "贏得；賺得",
        "prompt": "Lily hopes to _____ enough money to buy a bicycle.",
        "answer": "earn",
        "explanation": "earn：贏得；賺得。完整句：Lily hopes to earn enough money to buy a bicycle."
      },
      {
        "id": "reading-24",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "manager",
        "meaning": "經理",
        "prompt": "The hotel _____ apologized for the noisy room.",
        "answer": "manager",
        "explanation": "manager：經理。完整句：The hotel manager apologized for the noisy room."
      },
      {
        "id": "choice-78",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "kilometer",
        "meaning": "公里",
        "prompt": "The trail is one thousand meters, or one _____, long.",
        "answer": "kilometer",
        "explanation": "kilometer：公里。完整句：The trail is one thousand meters, or one kilometer, long.",
        "choices": [
          "kilometer",
          "penny",
          "ton",
          "pint"
        ]
      },
      {
        "id": "reading-27",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "reward",
        "meaning": "報酬；獎賞",
        "prompt": "The owner offered a _____ for finding her lost cat.",
        "answer": "reward",
        "explanation": "reward：報酬；獎賞。完整句：The owner offered a reward for finding her lost cat."
      },
      {
        "id": "choice-75",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "flock",
        "meaning": "鳥群；羊群；（同類人的）一大群",
        "prompt": "A _____ of birds rose from the lake together.",
        "answer": "flock",
        "explanation": "flock：鳥群；羊群；（同類人的）一大群。完整句：A flock of birds rose from the lake together.",
        "choices": [
          "flock",
          "dime",
          "gallon",
          "slice"
        ]
      },
      {
        "id": "reading-42",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "metal",
        "meaning": "金屬",
        "prompt": "The gate is made of _____, so it is much heavier than wood.",
        "answer": "metal",
        "explanation": "metal：金屬。完整句：The gate is made of metal, so it is much heavier than wood."
      },
      {
        "id": "choice-3",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "bride",
        "meaning": "新娘",
        "prompt": "The _____ smiled as she walked toward the man she was about to marry.",
        "answer": "bride",
        "explanation": "bride：新娘。完整句：The bride smiled as she walked toward the man she was about to marry.",
        "choices": [
          "bride",
          "burglar",
          "critic",
          "banker"
        ]
      },
      {
        "id": "choice-90",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "disappoint",
        "meaning": "使失望",
        "prompt": "I hope I will not _____ my teammates by giving up before the race ends.",
        "answer": "disappoint",
        "explanation": "disappoint：使失望。完整句：I hope I will not disappoint my teammates by giving up before the race ends.",
        "choices": [
          "disappoint",
          "comfort",
          "admire",
          "cherish"
        ]
      },
      {
        "id": "choice-48",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "campus",
        "meaning": "校園；校區",
        "prompt": "The university _____ includes classrooms, gardens, and student housing.",
        "answer": "campus",
        "explanation": "campus：校園；校區。完整句：The university campus includes classrooms, gardens, and student housing.",
        "choices": [
          "campus",
          "ditch",
          "curve",
          "deadline"
        ]
      },
      {
        "id": "choice-84",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admire",
        "meaning": "欽佩；讚賞",
        "prompt": "I _____ your courage in speaking up for the younger students.",
        "answer": "admire",
        "explanation": "admire：欽佩；讚賞。完整句：I admire your courage in speaking up for the younger students.",
        "choices": [
          "admire",
          "annoy",
          "confuse",
          "discourage"
        ]
      },
      {
        "id": "reading-15",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "cottage",
        "meaning": "小屋",
        "prompt": "We stayed in a small _____ beside the lake.",
        "answer": "cottage",
        "explanation": "cottage：小屋。完整句：We stayed in a small cottage beside the lake."
      },
      {
        "id": "reading-36",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "flow",
        "meaning": "流動",
        "prompt": "We watched clean water _____ from the pipe into the tank.",
        "answer": "flow",
        "explanation": "flow：流動。完整句：We watched clean water flow from the pipe into the tank."
      },
      {
        "id": "choice-24",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "magician",
        "meaning": "魔術師",
        "prompt": "The _____ surprised the audience by making a coin disappear.",
        "answer": "magician",
        "explanation": "magician：魔術師。完整句：The magician surprised the audience by making a coin disappear.",
        "choices": [
          "magician",
          "historian",
          "librarian",
          "mechanic"
        ]
      },
      {
        "id": "reading-3",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "After three days without food, the dog was too _____ to stand.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：After three days without food, the dog was too weak to stand."
      },
      {
        "id": "choice-42",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "decade",
        "meaning": "十年",
        "prompt": "The museum opened ten years ago, so it has been here for a _____.",
        "answer": "decade",
        "explanation": "decade：十年。完整句：The museum opened ten years ago, so it has been here for a decade.",
        "choices": [
          "decade",
          "deadline",
          "chamber",
          "ditch"
        ]
      },
      {
        "id": "reading-18",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "positive",
        "meaning": "正向的",
        "prompt": "Try to stay _____ even when your first plan fails.",
        "answer": "positive",
        "explanation": "positive：正向的。完整句：Try to stay positive even when your first plan fails."
      },
      {
        "id": "choice-87",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curiosity",
        "meaning": "好奇心",
        "prompt": "Her _____ about space led her to ask dozens of questions about the moon.",
        "answer": "curiosity",
        "explanation": "curiosity：好奇心。完整句：Her curiosity about space led her to ask dozens of questions about the moon.",
        "choices": [
          "curiosity",
          "disgust",
          "approval",
          "depression"
        ]
      },
      {
        "id": "choice-9",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "colleague",
        "meaning": "同事",
        "prompt": "My _____ and I work in the same office and share a desk.",
        "answer": "colleague",
        "explanation": "colleague：同事。完整句：My colleague and I work in the same office and share a desk.",
        "choices": [
          "colleague",
          "ancestor",
          "infant",
          "refugee"
        ]
      },
      {
        "id": "choice-69",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "skyscraper",
        "meaning": "摩天大樓",
        "prompt": "The eighty-story _____ is the tallest building in the city.",
        "answer": "skyscraper",
        "explanation": "skyscraper：摩天大樓。完整句：The eighty-story skyscraper is the tallest building in the city.",
        "choices": [
          "skyscraper",
          "tomb",
          "field",
          "tunnel"
        ]
      },
      {
        "id": "reading-60",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "witness",
        "meaning": "目擊者",
        "prompt": "The only _____ saw the accident from her kitchen window.",
        "answer": "witness",
        "explanation": "witness：目擊者。完整句：The only witness saw the accident from her kitchen window."
      },
      {
        "id": "choice-66",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "timetable",
        "meaning": "時間表；時刻表",
        "prompt": "Check the train _____ to find out when the last train leaves.",
        "answer": "timetable",
        "explanation": "timetable：時間表；時刻表。完整句：Check the train timetable to find out when the last train leaves.",
        "choices": [
          "timetable",
          "tomb",
          "tribe",
          "tower"
        ]
      },
      {
        "id": "choice-30",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "passenger",
        "meaning": "乘客；旅客",
        "prompt": "Every _____ on the bus must wear a seat belt.",
        "answer": "passenger",
        "explanation": "passenger：乘客；旅客。完整句：Every passenger on the bus must wear a seat belt.",
        "choices": [
          "passenger",
          "publisher",
          "plumber",
          "philosopher"
        ]
      },
      {
        "id": "choice-15",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanic",
        "meaning": "技工",
        "prompt": "A _____ checked the engine when our car would not start.",
        "answer": "mechanic",
        "explanation": "mechanic：技工。完整句：A mechanic checked the engine when our car would not start.",
        "choices": [
          "mechanic",
          "monk",
          "novelist",
          "librarian"
        ]
      },
      {
        "id": "choice-72",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "overseas",
        "meaning": "海外的；國外的",
        "prompt": "This is her first trip _____; she has never left her own country before.",
        "answer": "overseas",
        "explanation": "overseas：海外的；國外的。完整句：This is her first trip overseas; she has never left her own country before.",
        "choices": [
          "overseas",
          "shortly",
          "onto",
          "overnight"
        ]
      },
      {
        "id": "choice-21",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "novelist",
        "meaning": "小說家",
        "prompt": "The _____ spent two years writing a story about a lost city.",
        "answer": "novelist",
        "explanation": "novelist：小說家。完整句：The novelist spent two years writing a story about a lost city.",
        "choices": [
          "novelist",
          "mechanic",
          "lifeguard",
          "hairdresser"
        ]
      },
      {
        "id": "reading-21",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "sight",
        "meaning": "看見；視野",
        "prompt": "The mountains were a beautiful _____ after the long journey.",
        "answer": "sight",
        "explanation": "sight：看見；視野。完整句：The mountains were a beautiful sight after the long journey."
      },
      {
        "id": "reading-33",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "stuck",
        "meaning": "卡住的；受困的",
        "prompt": "The key was _____ in the lock, and I could not pull it out.",
        "answer": "stuck",
        "explanation": "stuck：卡住的；受困的。完整句：The key was stuck in the lock, and I could not pull it out."
      },
      {
        "id": "reading-48",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "examination",
        "meaning": "檢查",
        "prompt": "The nurse prepared the child for a medical _____.",
        "answer": "examination",
        "explanation": "examination：檢查。完整句：The nurse prepared the child for a medical examination."
      },
      {
        "id": "choice-33",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "shepherd",
        "meaning": "牧羊人",
        "prompt": "The _____ led his sheep back from the hills before dark.",
        "answer": "shepherd",
        "explanation": "shepherd：牧羊人。完整句：The shepherd led his sheep back from the hills before dark.",
        "choices": [
          "shepherd",
          "translator",
          "technician",
          "politician"
        ]
      },
      {
        "id": "choice-45",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "annual",
        "meaning": "每年的；年度的",
        "prompt": "Our _____ sports day takes place once every year.",
        "answer": "annual",
        "explanation": "annual：每年的；年度的。完整句：Our annual sports day takes place once every year.",
        "choices": [
          "annual",
          "casual",
          "colonial",
          "imperial"
        ]
      },
      {
        "id": "reading-30",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "The _____ explained how the family could borrow money.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：The banker explained how the family could borrow money."
      },
      {
        "id": "reading-39",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "stressed",
        "meaning": "有壓力的",
        "prompt": "Ben felt _____ because three reports were due on Friday.",
        "answer": "stressed",
        "explanation": "stressed：有壓力的。完整句：Ben felt stressed because three reports were due on Friday."
      },
      {
        "id": "choice-27",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tailor",
        "meaning": "裁縫師",
        "prompt": "The _____ measured my waist before making a pair of trousers.",
        "answer": "tailor",
        "explanation": "tailor：裁縫師。完整句：The tailor measured my waist before making a pair of trousers.",
        "choices": [
          "tailor",
          "pilot",
          "physicist",
          "shepherd"
        ]
      },
      {
        "id": "reading-54",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "exactly",
        "meaning": "完全地；精確地",
        "prompt": "The two ropes are _____ the same length.",
        "answer": "exactly",
        "explanation": "exactly：完全地；精確地。完整句：The two ropes are exactly the same length."
      },
      {
        "id": "choice-36",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tutor",
        "meaning": "家教",
        "prompt": "We hired a math _____ to give Leo private lessons after school.",
        "answer": "tutor",
        "explanation": "tutor：家教。完整句：We hired a math tutor to give Leo private lessons after school.",
        "choices": [
          "tutor",
          "tailor",
          "plumber",
          "pilot"
        ]
      },
      {
        "id": "choice-39",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "cafeteria",
        "meaning": "（大學或大樓的）自助餐廳",
        "prompt": "Students buy lunch and eat together in the school _____.",
        "answer": "cafeteria",
        "explanation": "cafeteria：（大學或大樓的）自助餐廳。完整句：Students buy lunch and eat together in the school cafeteria.",
        "choices": [
          "cafeteria",
          "dam",
          "alley",
          "fort"
        ]
      },
      {
        "id": "choice-57",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "monthly",
        "meaning": "每月的",
        "prompt": "The club's _____ meeting is held on the first Monday of each month.",
        "answer": "monthly",
        "explanation": "monthly：每月的。完整句：The club's monthly meeting is held on the first Monday of each month.",
        "choices": [
          "monthly",
          "hourly",
          "indoor",
          "global"
        ]
      },
      {
        "id": "choice-54",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lighthouse",
        "meaning": "燈塔",
        "prompt": "The bright light from the _____ guided ships away from the rocks.",
        "answer": "lighthouse",
        "explanation": "lighthouse：燈塔。完整句：The bright light from the lighthouse guided ships away from the rocks.",
        "choices": [
          "lighthouse",
          "kindergarten",
          "dormitory",
          "garage"
        ]
      },
      {
        "id": "reading-9",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "The baby bird was still _____, so we fed it carefully.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：The baby bird was still weak, so we fed it carefully."
      },
      {
        "id": "choice-51",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "greenhouse",
        "meaning": "花房；溫室",
        "prompt": "The farmer grows plants in a glass _____ to keep them warm.",
        "answer": "greenhouse",
        "explanation": "greenhouse：花房；溫室。完整句：The farmer grows plants in a glass greenhouse to keep them warm.",
        "choices": [
          "greenhouse",
          "harbor",
          "hallway",
          "jail"
        ]
      },
      {
        "id": "reading-6",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "edge",
        "meaning": "邊緣",
        "prompt": "Do not put your glass near the _____ of the desk.",
        "answer": "edge",
        "explanation": "edge：邊緣。完整句：Do not put your glass near the edge of the desk."
      },
      {
        "id": "choice-12",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "burglar",
        "meaning": "竊賊；夜賊",
        "prompt": "The _____ entered an empty house at night and stole a laptop.",
        "answer": "burglar",
        "explanation": "burglar：竊賊；夜賊。完整句：The burglar entered an empty house at night and stole a laptop.",
        "choices": [
          "burglar",
          "bride",
          "adviser",
          "ambassador"
        ]
      },
      {
        "id": "choice-81",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "rainfall",
        "meaning": "降雨量",
        "prompt": "The desert has very little _____, so few plants can grow there.",
        "answer": "rainfall",
        "explanation": "rainfall：降雨量。完整句：The desert has very little rainfall, so few plants can grow there.",
        "choices": [
          "rainfall",
          "comma",
          "parcel",
          "dime"
        ]
      },
      {
        "id": "choice-6",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "detective",
        "meaning": "偵探",
        "prompt": "The _____ studied the clues to discover who stole the jewels.",
        "answer": "detective",
        "explanation": "detective：偵探。完整句：The detective studied the clues to discover who stole the jewels.",
        "choices": [
          "detective",
          "bride",
          "composer",
          "athlete"
        ]
      },
      {
        "id": "reading-57",
        "type": "reading",
        "sourceId": "u4",
        "sourceTitle": "Unit 4.1",
        "word": "came across",
        "meaning": "偶然遇見",
        "prompt": "I _____ an old photo while cleaning my drawer.",
        "answer": "came across",
        "explanation": "came across：偶然遇見。完整句：I came across an old photo while cleaning my drawer."
      },
      {
        "id": "choice-18",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "inventor",
        "meaning": "發明家",
        "prompt": "The _____ designed a machine that had never existed before.",
        "answer": "inventor",
        "explanation": "inventor：發明家。完整句：The inventor designed a machine that had never existed before.",
        "choices": [
          "inventor",
          "infant",
          "orphan",
          "follower"
        ]
      },
      {
        "id": "reading-45",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "object",
        "meaning": "物品；物體",
        "prompt": "A round _____ was floating in the pool, but I could not see what it was.",
        "answer": "object",
        "explanation": "object：物品；物體。完整句：A round object was floating in the pool, but I could not see what it was."
      },
      {
        "id": "choice-60",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "neighborhood",
        "meaning": "附近地區；社區",
        "prompt": "Several families on our street joined a _____ cleanup.",
        "answer": "neighborhood",
        "explanation": "neighborhood：附近地區；社區。完整句：Several families on our street joined a neighborhood cleanup.",
        "choices": [
          "neighborhood",
          "frequency",
          "generation",
          "lifetime"
        ]
      }
    ]
  },
  {
    "id": "midterm-4",
    "title": "模擬考 4",
    "letterOnly": true,
    "questions": [
      {
        "id": "m4-reading-1",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "bullet",
        "meaning": "子彈",
        "prompt": "A _____ from the hunter's gun left a small hole in the fence.",
        "answer": "bullet",
        "explanation": "bullet：子彈。完整句：A bullet from the hunter's gun left a small hole in the fence."
      },
      {
        "id": "m4-reading-4",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "A helmet protects your head and the _____ inside it when you fall.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：A helmet protects your head and the brain inside it when you fall."
      },
      {
        "id": "m4-reading-7",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "The sick kitten was so _____ that it could not lift its head.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：The sick kitten was so weak that it could not lift its head."
      },
      {
        "id": "m4-reading-10",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "The _____ put on gloves before cutting into the patient's injured leg.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：The surgeon put on gloves before cutting into the patient's injured leg."
      },
      {
        "id": "m4-reading-13",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "edge",
        "meaning": "邊緣",
        "prompt": "Keep back from the _____ of the cliff, or you could fall.",
        "answer": "edge",
        "explanation": "edge：邊緣。完整句：Keep back from the edge of the cliff, or you could fall."
      },
      {
        "id": "m4-reading-16",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "railway station",
        "meaning": "火車站",
        "prompt": "We waited on the platform at the _____ for the next train.",
        "answer": "railway station",
        "explanation": "railway station：火車站。完整句：We waited on the platform at the railway station for the next train."
      },
      {
        "id": "m4-reading-19",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "earn",
        "meaning": "贏得；賺得",
        "prompt": "I wash my neighbors' cars to _____ money for a new camera.",
        "answer": "earn",
        "explanation": "earn：贏得；賺得。完整句：I wash my neighbors' cars to earn money for a new camera."
      },
      {
        "id": "m4-reading-22",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "Although the work was difficult, her cheerful _____ encouraged the team.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：Although the work was difficult, her cheerful attitude encouraged the team."
      },
      {
        "id": "m4-reading-25",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "cottage",
        "meaning": "小屋",
        "prompt": "The farmer lived in a tiny _____ with just two rooms and a stone roof.",
        "answer": "cottage",
        "explanation": "cottage：小屋。完整句：The farmer lived in a tiny cottage with just two rooms and a stone roof."
      },
      {
        "id": "m4-reading-28",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "mansion",
        "meaning": "豪宅",
        "prompt": "The millionaire's _____ has thirty bedrooms and a private swimming pool.",
        "answer": "mansion",
        "explanation": "mansion：豪宅。完整句：The millionaire's mansion has thirty bedrooms and a private swimming pool."
      },
      {
        "id": "m4-reading-31",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "valuable",
        "meaning": "有價值的；珍貴的",
        "prompt": "Keep this _____ diamond ring in a safe because it costs a fortune.",
        "answer": "valuable",
        "explanation": "valuable：有價值的；珍貴的。完整句：Keep this valuable diamond ring in a safe because it costs a fortune."
      },
      {
        "id": "m4-reading-34",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "treasure",
        "meaning": "寶藏",
        "prompt": "The pirates buried their gold and other _____ beneath a palm tree.",
        "answer": "treasure",
        "explanation": "treasure：寶藏。完整句：The pirates buried their gold and other treasure beneath a palm tree."
      },
      {
        "id": "m4-reading-37",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "dripping",
        "meaning": "滴水的",
        "prompt": "The _____ towel left a trail of water across the bathroom floor.",
        "answer": "dripping",
        "explanation": "dripping：滴水的。完整句：The dripping towel left a trail of water across the bathroom floor."
      },
      {
        "id": "m4-reading-40",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "manager",
        "meaning": "經理",
        "prompt": "The store _____ assigns jobs to the workers and handles customer problems.",
        "answer": "manager",
        "explanation": "manager：經理。完整句：The store manager assigns jobs to the workers and handles customer problems."
      },
      {
        "id": "m4-reading-43",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "drugstore",
        "meaning": "藥房",
        "prompt": "You can buy cough medicine and bandages at the _____ on this street.",
        "answer": "drugstore",
        "explanation": "drugstore：藥房。完整句：You can buy cough medicine and bandages at the drugstore on this street."
      },
      {
        "id": "m4-reading-46",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "reward",
        "meaning": "報酬；獎賞",
        "prompt": "The police offered a cash _____ for information that would help find the missing child.",
        "answer": "reward",
        "explanation": "reward：報酬；獎賞。完整句：The police offered a cash reward for information that would help find the missing child."
      },
      {
        "id": "m4-reading-49",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "will",
        "meaning": "遺囑",
        "prompt": "In her _____, the old woman said her house should go to her daughter after her death.",
        "answer": "will",
        "explanation": "will：遺囑。完整句：In her will, the old woman said her house should go to her daughter after her death."
      },
      {
        "id": "m4-reading-52",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "The _____ discussed savings accounts and loans with her customers.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：The banker discussed savings accounts and loans with her customers."
      },
      {
        "id": "m4-reading-55",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "commute",
        "meaning": "通勤",
        "prompt": "Many people _____ from their homes in the suburbs to jobs in the city each day.",
        "answer": "commute",
        "explanation": "commute：通勤。完整句：Many people commute from their homes in the suburbs to jobs in the city each day."
      },
      {
        "id": "m4-reading-58",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "stuck",
        "meaning": "卡住的；受困的",
        "prompt": "The elevator was _____ between two floors, so nobody could get out.",
        "answer": "stuck",
        "explanation": "stuck：卡住的；受困的。完整句：The elevator was stuck between two floors, so nobody could get out."
      },
      {
        "id": "m4-reading-61",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "waterproof",
        "meaning": "防水的",
        "prompt": "This _____ watch keeps working even when you wear it while swimming.",
        "answer": "waterproof",
        "explanation": "waterproof：防水的。完整句：This waterproof watch keeps working even when you wear it while swimming."
      },
      {
        "id": "m4-reading-64",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "drag",
        "meaning": "拖拉",
        "prompt": "The dog tried to _____ the large branch along the ground with its teeth.",
        "answer": "drag",
        "explanation": "drag：拖拉。完整句：The dog tried to drag the large branch along the ground with its teeth."
      },
      {
        "id": "m4-reading-67",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "routine",
        "meaning": "例行事務",
        "prompt": "Brushing my teeth is part of my daily morning _____.",
        "answer": "routine",
        "explanation": "routine：例行事務。完整句：Brushing my teeth is part of my daily morning routine."
      },
      {
        "id": "m4-reading-70",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "temperature",
        "meaning": "溫度",
        "prompt": "The nurse used a thermometer to measure the child's _____.",
        "answer": "temperature",
        "explanation": "temperature：溫度。完整句：The nurse used a thermometer to measure the child's temperature."
      },
      {
        "id": "m4-reading-73",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "metal",
        "meaning": "金屬",
        "prompt": "Iron is a strong _____ used to make tools and bridges.",
        "answer": "metal",
        "explanation": "metal：金屬。完整句：Iron is a strong metal used to make tools and bridges."
      },
      {
        "id": "m4-reading-76",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "estimate",
        "meaning": "估計",
        "prompt": "We can only _____ the crowd's size because there are too many people to count.",
        "answer": "estimate",
        "explanation": "estimate：估計。完整句：We can only estimate the crowd's size because there are too many people to count."
      },
      {
        "id": "m4-reading-79",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "consume",
        "meaning": "消耗；吃掉",
        "prompt": "A large truck will _____ more fuel than a small car on the same trip.",
        "answer": "consume",
        "explanation": "consume：消耗；吃掉。完整句：A large truck will consume more fuel than a small car on the same trip."
      },
      {
        "id": "m4-reading-82",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "prefer",
        "meaning": "偏好",
        "prompt": "I _____ quiet beaches to crowded ones because I enjoy peace.",
        "answer": "prefer",
        "explanation": "prefer：偏好。完整句：I prefer quiet beaches to crowded ones because I enjoy peace."
      },
      {
        "id": "m4-reading-85",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "ordinary",
        "meaning": "普通的",
        "prompt": "It was just an _____ school day, with nothing special or surprising happening.",
        "answer": "ordinary",
        "explanation": "ordinary：普通的。完整句：It was just an ordinary school day, with nothing special or surprising happening."
      },
      {
        "id": "m4-reading-88",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "perform",
        "meaning": "表演",
        "prompt": "The band will _____ three songs on stage at the school concert.",
        "answer": "perform",
        "explanation": "perform：表演。完整句：The band will perform three songs on stage at the school concert."
      },
      {
        "id": "m4-reading-91",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "gate",
        "meaning": "大門",
        "prompt": "The guard opened the school _____ so the bus could enter the yard.",
        "answer": "gate",
        "explanation": "gate：大門。完整句：The guard opened the school gate so the bus could enter the yard."
      },
      {
        "id": "m4-reading-94",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "file",
        "meaning": "檔案",
        "prompt": "Please attach the report as a _____ to your message instead of printing it.",
        "answer": "file",
        "explanation": "file：檔案。完整句：Please attach the report as a file to your message instead of printing it."
      },
      {
        "id": "m4-reading-97",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "chalk",
        "meaning": "粉筆",
        "prompt": "The teacher used a piece of white _____ to write on the blackboard.",
        "answer": "chalk",
        "explanation": "chalk：粉筆。完整句：The teacher used a piece of white chalk to write on the blackboard."
      },
      {
        "id": "m4-reading-100",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "screen",
        "meaning": "螢幕",
        "prompt": "The phone's _____ went black when its battery died.",
        "answer": "screen",
        "explanation": "screen：螢幕。完整句：The phone's screen went black when its battery died."
      },
      {
        "id": "m4-reading-103",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "error",
        "meaning": "錯誤",
        "prompt": "There is an _____ in your sum: two plus three is five, not six.",
        "answer": "error",
        "explanation": "error：錯誤。完整句：There is an error in your sum: two plus three is five, not six."
      },
      {
        "id": "m4-reading-106",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "dozen",
        "meaning": "一打",
        "prompt": "There are twelve eggs in a _____.",
        "answer": "dozen",
        "explanation": "dozen：一打。完整句：There are twelve eggs in a dozen."
      },
      {
        "id": "m4-reading-109",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "refrigerator",
        "meaning": "冰箱",
        "prompt": "Put the fresh milk in the _____ to keep it cold.",
        "answer": "refrigerator",
        "explanation": "refrigerator：冰箱。完整句：Put the fresh milk in the refrigerator to keep it cold."
      },
      {
        "id": "m4-reading-112",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "wallet",
        "meaning": "錢包",
        "prompt": "He opened his _____ to take out cash and a credit card.",
        "answer": "wallet",
        "explanation": "wallet：錢包。完整句：He opened his wallet to take out cash and a credit card."
      },
      {
        "id": "m4-reading-115",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "upload",
        "meaning": "上傳",
        "prompt": "Click here to _____ your video from your phone to the class website.",
        "answer": "upload",
        "explanation": "upload：上傳。完整句：Click here to upload your video from your phone to the class website."
      },
      {
        "id": "m4-reading-118",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "connect",
        "meaning": "連接",
        "prompt": "Use this cable to _____ the printer to your computer.",
        "answer": "connect",
        "explanation": "connect：連接。完整句：Use this cable to connect the printer to your computer."
      },
      {
        "id": "m4-choice-121",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "accountant",
        "meaning": "會計師",
        "prompt": "The _____ found a mistake while checking the company's tax records.",
        "answer": "accountant",
        "explanation": "accountant：會計師。完整句：The accountant found a mistake while checking the company's tax records.",
        "choices": [
          "accountant",
          "composer",
          "athlete",
          "carpenter"
        ]
      },
      {
        "id": "m4-choice-124",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carpenter",
        "meaning": "木匠",
        "prompt": "A _____ used wood and nails to repair the broken staircase.",
        "answer": "carpenter",
        "explanation": "carpenter：木匠。完整句：A carpenter used wood and nails to repair the broken staircase.",
        "choices": [
          "carpenter",
          "banker",
          "athlete",
          "composer"
        ]
      },
      {
        "id": "m4-choice-127",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "composer",
        "meaning": "作曲家",
        "prompt": "The _____ created the music that the singers will perform tonight.",
        "answer": "composer",
        "explanation": "composer：作曲家。完整句：The composer created the music that the singers will perform tonight.",
        "choices": [
          "composer",
          "carpenter",
          "cleaner",
          "burglar"
        ]
      },
      {
        "id": "m4-choice-130",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "detective",
        "meaning": "偵探",
        "prompt": "The _____ questioned the suspects and compared their stories.",
        "answer": "detective",
        "explanation": "detective：偵探。完整句：The detective questioned the suspects and compared their stories.",
        "choices": [
          "detective",
          "composer",
          "athlete",
          "bride"
        ]
      },
      {
        "id": "m4-choice-133",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "librarian",
        "meaning": "圖書館員",
        "prompt": "The _____ helped me borrow a book and explained when to return it.",
        "answer": "librarian",
        "explanation": "librarian：圖書館員。完整句：The librarian helped me borrow a book and explained when to return it.",
        "choices": [
          "librarian",
          "miner",
          "mechanic",
          "magician"
        ]
      },
      {
        "id": "m4-choice-136",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanic",
        "meaning": "技工",
        "prompt": "The _____ replaced the broken part in the car's engine.",
        "answer": "mechanic",
        "explanation": "mechanic：技工。完整句：The mechanic replaced the broken part in the car's engine.",
        "choices": [
          "mechanic",
          "librarian",
          "novelist",
          "monk"
        ]
      },
      {
        "id": "m4-choice-139",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lifeguard",
        "meaning": "救生員",
        "prompt": "The beach _____ warned swimmers about the dangerous waves.",
        "answer": "lifeguard",
        "explanation": "lifeguard：救生員。完整句：The beach lifeguard warned swimmers about the dangerous waves.",
        "choices": [
          "lifeguard",
          "historian",
          "novelist",
          "miner"
        ]
      },
      {
        "id": "m4-choice-142",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "historian",
        "meaning": "歷史學家",
        "prompt": "The _____ studied ancient letters to understand the king's rule.",
        "answer": "historian",
        "explanation": "historian：歷史學家。完整句：The historian studied ancient letters to understand the king's rule.",
        "choices": [
          "historian",
          "mechanic",
          "hairdresser",
          "lifeguard"
        ]
      },
      {
        "id": "m4-choice-145",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "plumber",
        "meaning": "水電工；水管瓦斯工人",
        "prompt": "The _____ replaced the broken water pipe beneath the floor.",
        "answer": "plumber",
        "explanation": "plumber：水電工；水管瓦斯工人。完整句：The plumber replaced the broken water pipe beneath the floor.",
        "choices": [
          "plumber",
          "pilot",
          "tailor",
          "translator"
        ]
      },
      {
        "id": "m4-choice-148",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tailor",
        "meaning": "裁縫師",
        "prompt": "The _____ shortened the sleeves of my jacket with a needle and thread.",
        "answer": "tailor",
        "explanation": "tailor：裁縫師。完整句：The tailor shortened the sleeves of my jacket with a needle and thread.",
        "choices": [
          "tailor",
          "pilot",
          "plumber",
          "physicist"
        ]
      },
      {
        "id": "m4-choice-151",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "translator",
        "meaning": "譯者；翻譯家",
        "prompt": "The _____ produced a Chinese version of the French letter.",
        "answer": "translator",
        "explanation": "translator：譯者；翻譯家。完整句：The translator produced a Chinese version of the French letter.",
        "choices": [
          "translator",
          "tailor",
          "plumber",
          "pilot"
        ]
      },
      {
        "id": "m4-choice-154",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "shepherd",
        "meaning": "牧羊人",
        "prompt": "The _____ counted his sheep before leading them into the barn.",
        "answer": "shepherd",
        "explanation": "shepherd：牧羊人。完整句：The shepherd counted his sheep before leading them into the barn.",
        "choices": [
          "shepherd",
          "publisher",
          "translator",
          "plumber"
        ]
      },
      {
        "id": "m4-choice-157",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aquarium",
        "meaning": "水族館；水族箱",
        "prompt": "At the _____, we saw sharks swimming behind a huge glass wall.",
        "answer": "aquarium",
        "explanation": "aquarium：水族館；水族箱。完整句：At the aquarium, we saw sharks swimming behind a huge glass wall.",
        "choices": [
          "aquarium",
          "cinema",
          "alley",
          "cafeteria"
        ]
      },
      {
        "id": "m4-choice-160",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deadline",
        "meaning": "截止日期",
        "prompt": "The application _____ is noon, so send your form before twelve.",
        "answer": "deadline",
        "explanation": "deadline：截止日期。完整句：The application deadline is noon, so send your form before twelve.",
        "choices": [
          "deadline",
          "decade",
          "county",
          "curve"
        ]
      },
      {
        "id": "m4-choice-163",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "basement",
        "meaning": "地下室",
        "prompt": "We walked downstairs below street level into the _____.",
        "answer": "basement",
        "explanation": "basement：地下室。完整句：We walked downstairs below street level into the basement.",
        "choices": [
          "basement",
          "avenue",
          "campus",
          "deck"
        ]
      },
      {
        "id": "m4-choice-166",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "decade",
        "meaning": "十年",
        "prompt": "The shop ran from 2010 to 2020, a period of one _____.",
        "answer": "decade",
        "explanation": "decade：十年。完整句：The shop ran from 2010 to 2020, a period of one decade.",
        "choices": [
          "decade",
          "deadline",
          "era",
          "anniversary"
        ]
      },
      {
        "id": "m4-choice-169",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "greenhouse",
        "meaning": "花房；溫室",
        "prompt": "The glass walls of the _____ help the gardener grow flowers in winter.",
        "answer": "greenhouse",
        "explanation": "greenhouse：花房；溫室。完整句：The glass walls of the greenhouse help the gardener grow flowers in winter.",
        "choices": [
          "greenhouse",
          "harbor",
          "garage",
          "lobby"
        ]
      },
      {
        "id": "m4-choice-172",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lighthouse",
        "meaning": "燈塔",
        "prompt": "Sailors looked for the warning beam from the coastal _____.",
        "answer": "lighthouse",
        "explanation": "lighthouse：燈塔。完整句：Sailors looked for the warning beam from the coastal lighthouse.",
        "choices": [
          "lighthouse",
          "dormitory",
          "kindergarten",
          "garage"
        ]
      },
      {
        "id": "m4-choice-175",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hive",
        "meaning": "蜂窩",
        "prompt": "The beekeeper carefully opened the _____ to check the honey.",
        "answer": "hive",
        "explanation": "hive：蜂窩。完整句：The beekeeper carefully opened the hive to check the honey.",
        "choices": [
          "hive",
          "inn",
          "mall",
          "lobby"
        ]
      },
      {
        "id": "m4-choice-178",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "observatory",
        "meaning": "天文台；觀測站",
        "prompt": "The mountain _____ has telescopes for studying distant planets.",
        "answer": "observatory",
        "explanation": "observatory：天文台；觀測站。完整句：The mountain observatory has telescopes for studying distant planets.",
        "choices": [
          "observatory",
          "nursery",
          "garage",
          "harbor"
        ]
      },
      {
        "id": "m4-choice-181",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tunnel",
        "meaning": "隧道",
        "prompt": "Workers dug a _____ under the river for the new subway line.",
        "answer": "tunnel",
        "explanation": "tunnel：隧道。完整句：Workers dug a tunnel under the river for the new subway line.",
        "choices": [
          "tunnel",
          "stadium",
          "palace",
          "studio"
        ]
      },
      {
        "id": "m4-choice-184",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postpone",
        "meaning": "使延期",
        "prompt": "We decided to _____ the match from Monday to Thursday because of rain.",
        "answer": "postpone",
        "explanation": "postpone：使延期。完整句：We decided to postpone the match from Monday to Thursday because of rain.",
        "choices": [
          "postpone",
          "surround",
          "prolong",
          "locate"
        ]
      },
      {
        "id": "m4-choice-187",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "temporary",
        "meaning": "暫時的",
        "prompt": "These _____ desks will be removed when our new furniture arrives.",
        "answer": "temporary",
        "explanation": "temporary：暫時的。完整句：These temporary desks will be removed when our new furniture arrives.",
        "choices": [
          "temporary",
          "tropical",
          "outer",
          "yearly"
        ]
      },
      {
        "id": "m4-choice-190",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "rural",
        "meaning": "鄉村的",
        "prompt": "The _____ area is full of farms and has very few busy streets.",
        "answer": "rural",
        "explanation": "rural：鄉村的。完整句：The rural area is full of farms and has very few busy streets.",
        "choices": [
          "rural",
          "urban",
          "weekly",
          "temporary"
        ]
      },
      {
        "id": "m4-choice-193",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "flock",
        "meaning": "鳥群；羊群；（同類人的）一大群",
        "prompt": "A _____ of geese flew south together before winter.",
        "answer": "flock",
        "explanation": "flock：鳥群；羊群；（同類人的）一大群。完整句：A flock of geese flew south together before winter.",
        "choices": [
          "flock",
          "herd",
          "school",
          "pack"
        ]
      },
      {
        "id": "m4-choice-196",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "slice",
        "meaning": "一片",
        "prompt": "She cut a thin _____ of cheese to put in her sandwich.",
        "answer": "slice",
        "explanation": "slice：一片。完整句：She cut a thin slice of cheese to put in her sandwich.",
        "choices": [
          "slice",
          "herd",
          "flock",
          "gallon"
        ]
      },
      {
        "id": "m4-choice-199",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "parcel",
        "meaning": "包裹",
        "prompt": "The post office weighed my wrapped _____ before sending it.",
        "answer": "parcel",
        "explanation": "parcel：包裹。完整句：The post office weighed my wrapped parcel before sending it.",
        "choices": [
          "parcel",
          "comma",
          "percentage",
          "calorie"
        ]
      },
      {
        "id": "m4-choice-202",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "ashamed",
        "meaning": "羞愧的",
        "prompt": "She felt _____ when she realized she had blamed an innocent classmate.",
        "answer": "ashamed",
        "explanation": "ashamed：羞愧的。完整句：She felt ashamed when she realized she had blamed an innocent classmate.",
        "choices": [
          "ashamed",
          "cheerful",
          "admirable",
          "attractive"
        ]
      },
      {
        "id": "m4-choice-205",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curiosity",
        "meaning": "好奇心",
        "prompt": "The strange sound awakened his _____, and he went to find its source.",
        "answer": "curiosity",
        "explanation": "curiosity：好奇心。完整句：The strange sound awakened his curiosity, and he went to find its source.",
        "choices": [
          "curiosity",
          "disgust",
          "approval",
          "depression"
        ]
      },
      {
        "id": "m4-choice-208",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "conscience",
        "meaning": "良心",
        "prompt": "His _____ would not let him ignore the person he had hurt.",
        "answer": "conscience",
        "explanation": "conscience：良心。完整句：His conscience would not let him ignore the person he had hurt.",
        "choices": [
          "conscience",
          "attraction",
          "amusement",
          "curiosity"
        ]
      }
    ]
  },
  {
    "id": "midterm-5-cloze-v2",
    "title": "模擬考 5－克漏字",
    "letterOnly": true,
    "questions": [
      {
        "id": "reading-3",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "After three days without food, the dog was too _____ to stand.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：After three days without food, the dog was too weak to stand."
      },
      {
        "id": "reading-24",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "manager",
        "meaning": "經理",
        "prompt": "The hotel _____ apologized for the noisy room.",
        "answer": "manager",
        "explanation": "manager：經理。完整句：The hotel manager apologized for the noisy room."
      },
      {
        "id": "m4-reading-103",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "error",
        "meaning": "錯誤",
        "prompt": "There is an _____ in your sum: two plus three is five, not six.",
        "answer": "error",
        "explanation": "error：錯誤。完整句：There is an error in your sum: two plus three is five, not six."
      },
      {
        "id": "reading-45",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "object",
        "meaning": "物品；物體",
        "prompt": "A round _____ was floating in the pool, but I could not see what it was.",
        "answer": "object",
        "explanation": "object：物品；物體。完整句：A round object was floating in the pool, but I could not see what it was."
      },
      {
        "id": "coverage-reading-34",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "set",
        "meaning": "設定",
        "prompt": "Please _____ the alarm for six so that it rings in time for our early bus.",
        "answer": "set",
        "explanation": "set：設定。完整句：Please set the alarm for six so that it rings in time for our early bus."
      },
      {
        "id": "reading-32",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "commute",
        "meaning": "通勤",
        "prompt": "My parents _____ to the city by bus every morning.",
        "answer": "commute",
        "explanation": "commute：通勤。完整句：My parents commute to the city by bus every morning."
      },
      {
        "id": "reading-6",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "edge",
        "meaning": "邊緣",
        "prompt": "Do not put your glass near the _____ of the desk.",
        "answer": "edge",
        "explanation": "edge：邊緣。完整句：Do not put your glass near the edge of the desk."
      },
      {
        "id": "reading-50",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "ordinary",
        "meaning": "普通的",
        "prompt": "It looked like an _____ stone until we saw it glow.",
        "answer": "ordinary",
        "explanation": "ordinary：普通的。完整句：It looked like an ordinary stone until we saw it glow."
      },
      {
        "id": "coverage-reading-2",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "fume",
        "meaning": "煙霧；廢氣",
        "prompt": "The workers wore masks to avoid breathing the toxic _____ released by the burning chemicals.",
        "answer": "fumes",
        "explanation": "fume：煙霧；廢氣。完整句：The workers wore masks to avoid breathing the toxic fumes released by the burning chemicals."
      },
      {
        "id": "coverage-reading-25",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "cellphone",
        "meaning": "手機",
        "prompt": "My _____ rang in my pocket while I was waiting for the bus.",
        "answer": "cellphone",
        "explanation": "cellphone：手機。完整句：My cellphone rang in my pocket while I was waiting for the bus."
      },
      {
        "id": "reading-18",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "positive",
        "meaning": "正向的",
        "prompt": "Try to stay _____ even when your first plan fails.",
        "answer": "positive",
        "explanation": "positive：正向的。完整句：Try to stay positive even when your first plan fails."
      },
      {
        "id": "coverage-reading-27",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "outside",
        "meaning": "在外面",
        "prompt": "It was warm inside the house but freezing _____ in the garden.",
        "answer": "outside",
        "explanation": "outside：在外面。完整句：It was warm inside the house but freezing outside in the garden."
      },
      {
        "id": "coverage-reading-22",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "the cloud",
        "meaning": "雲端",
        "prompt": "My pictures are stored in _____, so I can view them online from a different device.",
        "answer": "the cloud",
        "explanation": "the cloud：雲端。完整句：My pictures are stored in the cloud, so I can view them online from a different device."
      },
      {
        "id": "reading-16",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "mansion",
        "meaning": "豪宅",
        "prompt": "The wealthy actor lives in a huge _____ with twenty rooms.",
        "answer": "mansion",
        "explanation": "mansion：豪宅。完整句：The wealthy actor lives in a huge mansion with twenty rooms."
      },
      {
        "id": "m4-reading-91",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "gate",
        "meaning": "大門",
        "prompt": "The guard opened the school _____ so the bus could enter the yard.",
        "answer": "gate",
        "explanation": "gate：大門。完整句：The guard opened the school gate so the bus could enter the yard."
      },
      {
        "id": "reading-26",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "worse and worse",
        "meaning": "越來越糟",
        "prompt": "Without any repairs, the road became _____.",
        "answer": "worse and worse",
        "explanation": "worse and worse：越來越糟。完整句：Without any repairs, the road became worse and worse."
      },
      {
        "id": "reading-46",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "prefer",
        "meaning": "偏好",
        "prompt": "I _____ tea to coffee because I like its lighter taste.",
        "answer": "prefer",
        "explanation": "prefer：偏好。完整句：I prefer tea to coffee because I like its lighter taste."
      },
      {
        "id": "coverage-reading-29",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "lamp",
        "meaning": "檯燈",
        "prompt": "I switched on the small reading _____ beside my bed because the room was dark.",
        "answer": "lamp",
        "explanation": "lamp：檯燈。完整句：I switched on the small reading lamp beside my bed because the room was dark."
      },
      {
        "id": "reading-10",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "check up",
        "meaning": "檢查；查核",
        "prompt": "Parents should _____ on the safety of their children's toys.",
        "answer": "check up",
        "explanation": "check up：檢查；查核。完整句：Parents should check up on the safety of their children's toys."
      },
      {
        "id": "reading-4",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "operate",
        "meaning": "動手術",
        "prompt": "The doctor must _____ on the injured driver tonight.",
        "answer": "operate",
        "explanation": "operate：動手術。完整句：The doctor must operate on the injured driver tonight."
      },
      {
        "id": "coverage-reading-not-anymore",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "not ... anymore",
        "meaning": "不再……",
        "prompt": "Mia does _____ eat meat _____ because she has become a vegetarian.",
        "answer": "not ... anymore",
        "acceptedAnswers": [
          "not anymore",
          "not…anymore",
          "not … anymore",
          "not...anymore"
        ],
        "hint": "n＿＿ … ＿＿＿＿＿＿e",
        "inputNote": "依序輸入兩個空格的單字，以空格分隔。",
        "explanation": "not ... anymore：不再……。完整句：Mia does not eat meat anymore because she has become a vegetarian."
      },
      {
        "id": "coverage-reading-18",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "voice assistant",
        "meaning": "語音助理",
        "prompt": "I asked the _____ on my phone to set a timer by speaking instead of typing.",
        "answer": "voice assistant",
        "explanation": "voice assistant：語音助理。完整句：I asked the voice assistant on my phone to set a timer by speaking instead of typing."
      },
      {
        "id": "coverage-reading-5",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "amazed",
        "meaning": "驚訝的",
        "prompt": "The audience was _____ when the little boy solved the difficult puzzle in seconds.",
        "answer": "amazed",
        "explanation": "amazed：驚訝的。完整句：The audience was amazed when the little boy solved the difficult puzzle in seconds."
      },
      {
        "id": "reading-27",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "reward",
        "meaning": "報酬；獎賞",
        "prompt": "The owner offered a _____ for finding her lost cat.",
        "answer": "reward",
        "explanation": "reward：報酬；獎賞。完整句：The owner offered a reward for finding her lost cat."
      },
      {
        "id": "m4-reading-109",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "refrigerator",
        "meaning": "冰箱",
        "prompt": "Put the fresh milk in the _____ to keep it cold.",
        "answer": "refrigerator",
        "explanation": "refrigerator：冰箱。完整句：Put the fresh milk in the refrigerator to keep it cold."
      },
      {
        "id": "reading-15",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "cottage",
        "meaning": "小屋",
        "prompt": "We stayed in a small _____ beside the lake.",
        "answer": "cottage",
        "explanation": "cottage：小屋。完整句：We stayed in a small cottage beside the lake."
      },
      {
        "id": "reading-23",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "fell in a faint",
        "meaning": "昏倒",
        "prompt": "The woman _____ after standing in the heat for hours.",
        "answer": "fell in a faint",
        "explanation": "fell in a faint：昏倒。完整句：The woman fell in a faint after standing in the heat for hours."
      },
      {
        "id": "coverage-reading-35",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "shape",
        "meaning": "塑造",
        "prompt": "The books children read can _____ the way they think about the world.",
        "answer": "shape",
        "explanation": "shape：塑造。完整句：The books children read can shape the way they think about the world."
      },
      {
        "id": "coverage-reading-24",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "shopkeeper",
        "meaning": "店主",
        "prompt": "The _____ unlocked his small store and arranged the goods before the customers arrived.",
        "answer": "shopkeeper",
        "explanation": "shopkeeper：店主。完整句：The shopkeeper unlocked his small store and arranged the goods before the customers arrived."
      },
      {
        "id": "coverage-reading-14",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "code",
        "meaning": "碼",
        "prompt": "You must type the correct four-digit _____ to unlock the safe.",
        "answer": "code",
        "explanation": "code：碼。完整句：You must type the correct four-digit code to unlock the safe."
      },
      {
        "id": "reading-35",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "drag",
        "meaning": "拖拉",
        "prompt": "The box is too heavy to lift, so we must _____ it across the floor.",
        "answer": "drag",
        "explanation": "drag：拖拉。完整句：The box is too heavy to lift, so we must drag it across the floor."
      },
      {
        "id": "coverage-reading-16",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "whether",
        "meaning": "是否",
        "prompt": "The coach has not decided _____ to cancel the match or play it in the rain.",
        "answer": "whether",
        "explanation": "whether：是否。完整句：The coach has not decided whether to cancel the match or play it in the rain."
      },
      {
        "id": "reading-2",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "Getting enough sleep helps your _____ remember new things.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：Getting enough sleep helps your brain remember new things."
      },
      {
        "id": "m4-reading-115",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "upload",
        "meaning": "上傳",
        "prompt": "Click here to _____ your video from your phone to the class website.",
        "answer": "upload",
        "explanation": "upload：上傳。完整句：Click here to upload your video from your phone to the class website."
      },
      {
        "id": "coverage-repeat-1",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "wallet",
        "meaning": "錢包",
        "prompt": "My _____ was missing, along with all the money and cards inside it.",
        "answer": "wallet",
        "explanation": "wallet：錢包。完整句：My wallet was missing, along with all the money and cards inside it."
      },
      {
        "id": "reading-37",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "battling",
        "meaning": "與…搏鬥；奮戰",
        "prompt": "The firefighters spent the night _____ the forest fire.",
        "answer": "battling",
        "explanation": "battling：與…搏鬥；奮戰。完整句：The firefighters spent the night battling the forest fire."
      },
      {
        "id": "reading-22",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "dripping",
        "meaning": "滴水的",
        "prompt": "Please leave your _____ raincoat outside the classroom.",
        "answer": "dripping",
        "explanation": "dripping：滴水的。完整句：Please leave your dripping raincoat outside the classroom."
      },
      {
        "id": "coverage-reading-12",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "enter",
        "meaning": "輸入；進入",
        "prompt": "Please _____ your password in the box before you click the login button.",
        "answer": "enter",
        "explanation": "enter：輸入；進入。完整句：Please enter your password in the box before you click the login button."
      },
      {
        "id": "coverage-reading-32",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "cross that bridge when one comes to it",
        "meaning": "船到橋頭自然直；到時候再說",
        "prompt": "We do not need to solve next year's possible problem now; we can _____.",
        "answer": "cross that bridge when we come to it",
        "explanation": "cross that bridge when one comes to it：船到橋頭自然直；到時候再說。完整句：We do not need to solve next year's possible problem now; we can cross that bridge when we come to it."
      },
      {
        "id": "coverage-reading-6",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "honey",
        "meaning": "親愛的（稱呼）",
        "prompt": "\"Good night, _____,\" the mother said lovingly as she kissed her child.",
        "answer": "honey",
        "explanation": "honey：親愛的（稱呼）。完整句：\"Good night, honey,\" the mother said lovingly as she kissed her child."
      },
      {
        "id": "reading-25",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "drugstore",
        "meaning": "藥房",
        "prompt": "Dad went to the _____ to buy medicine for his cough.",
        "answer": "drugstore",
        "explanation": "drugstore：藥房。完整句：Dad went to the drugstore to buy medicine for his cough."
      },
      {
        "id": "coverage-reading-30",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "program",
        "meaning": "節目",
        "prompt": "My favorite television _____ begins at eight, right after the evening news.",
        "answer": "program",
        "explanation": "program：節目。完整句：My favorite television program begins at eight, right after the evening news."
      },
      {
        "id": "coverage-reading-33",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "stand for",
        "meaning": "代表",
        "prompt": "The letters on this badge _____ the name of our school club.",
        "answer": "stand for",
        "explanation": "stand for：代表。完整句：The letters on this badge stand for the name of our school club."
      },
      {
        "id": "reading-42",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "metal",
        "meaning": "金屬",
        "prompt": "The gate is made of _____, so it is much heavier than wood.",
        "answer": "metal",
        "explanation": "metal：金屬。完整句：The gate is made of metal, so it is much heavier than wood."
      },
      {
        "id": "m4-reading-88",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "perform",
        "meaning": "表演",
        "prompt": "The band will _____ three songs on stage at the school concert.",
        "answer": "perform",
        "explanation": "perform：表演。完整句：The band will perform three songs on stage at the school concert."
      },
      {
        "id": "reading-34",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "waterproof",
        "meaning": "防水的",
        "prompt": "Wear _____ boots so your feet stay dry in the rain.",
        "answer": "waterproof",
        "explanation": "waterproof：防水的。完整句：Wear waterproof boots so your feet stay dry in the rain."
      },
      {
        "id": "coverage-reading-28",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "couch",
        "meaning": "沙發",
        "prompt": "The three of us sat together on the soft _____ in the living room.",
        "answer": "couch",
        "explanation": "couch：沙發。完整句：The three of us sat together on the soft couch in the living room."
      },
      {
        "id": "reading-33",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "stuck",
        "meaning": "卡住的；受困的",
        "prompt": "The key was _____ in the lock, and I could not pull it out.",
        "answer": "stuck",
        "explanation": "stuck：卡住的；受困的。完整句：The key was stuck in the lock, and I could not pull it out."
      },
      {
        "id": "coverage-reading-3",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "lining",
        "meaning": "內壁",
        "prompt": "The soft _____ inside my coat keeps the rough outer material from touching my skin.",
        "answer": "lining",
        "explanation": "lining：內壁。完整句：The soft lining inside my coat keeps the rough outer material from touching my skin."
      },
      {
        "id": "reading-17",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "inner",
        "meaning": "內在的",
        "prompt": "She took a deep breath to find _____ peace before the test.",
        "answer": "inner",
        "explanation": "inner：內在的。完整句：She took a deep breath to find inner peace before the test."
      }
    ]
  },
  {
    "id": "midterm-6-cloze-v2",
    "title": "模擬考 6－克漏字",
    "letterOnly": true,
    "questions": [
      {
        "id": "reading-14",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "His friendly _____ made the new student feel welcome.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：His friendly attitude made the new student feel welcome."
      },
      {
        "id": "reading-36",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "flow",
        "meaning": "流動",
        "prompt": "We watched clean water _____ from the pipe into the tank.",
        "answer": "flow",
        "explanation": "flow：流動。完整句：We watched clean water flow from the pipe into the tank."
      },
      {
        "id": "coverage-reading-7",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "save",
        "meaning": "儲存",
        "prompt": "Remember to _____ your document before closing the computer program, or your changes may be lost.",
        "answer": "save",
        "explanation": "save：儲存。完整句：Remember to save your document before closing the computer program, or your changes may be lost."
      },
      {
        "id": "reading-21",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "sight",
        "meaning": "看見；視野",
        "prompt": "The mountains were a beautiful _____ after the long journey.",
        "answer": "sight",
        "explanation": "sight：看見；視野。完整句：The mountains were a beautiful sight after the long journey."
      },
      {
        "id": "reading-7",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "railway station",
        "meaning": "火車站",
        "prompt": "We bought two train tickets at the _____.",
        "answer": "railway station",
        "explanation": "railway station：火車站。完整句：We bought two train tickets at the railway station."
      },
      {
        "id": "reading-30",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "The _____ explained how the family could borrow money.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：The banker explained how the family could borrow money."
      },
      {
        "id": "coverage-reading-11",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "button",
        "meaning": "按鈕；鈕扣",
        "prompt": "Press the green _____ to start the washing machine.",
        "answer": "button",
        "explanation": "button：按鈕；鈕扣。完整句：Press the green button to start the washing machine."
      },
      {
        "id": "m4-reading-118",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "connect",
        "meaning": "連接",
        "prompt": "Use this cable to _____ the printer to your computer.",
        "answer": "connect",
        "explanation": "connect：連接。完整句：Use this cable to connect the printer to your computer."
      },
      {
        "id": "reading-11",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "once in a while",
        "meaning": "偶爾",
        "prompt": "We visit our old neighbors _____, but not every week.",
        "answer": "once in a while",
        "explanation": "once in a while：偶爾。完整句：We visit our old neighbors once in a while, but not every week."
      },
      {
        "id": "reading-48",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "examination",
        "meaning": "檢查",
        "prompt": "The nurse prepared the child for a medical _____.",
        "answer": "examination",
        "explanation": "examination：檢查。完整句：The nurse prepared the child for a medical examination."
      },
      {
        "id": "reading-29",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "will",
        "meaning": "遺囑",
        "prompt": "Grandpa left his books to the library in his _____.",
        "answer": "will",
        "explanation": "will：遺囑。完整句：Grandpa left his books to the library in his will."
      },
      {
        "id": "coverage-reading-31",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "modern",
        "meaning": "現代的",
        "prompt": "Unlike the old steam engines, these _____ trains use the latest electronic systems.",
        "answer": "modern",
        "explanation": "modern：現代的。完整句：Unlike the old steam engines, these modern trains use the latest electronic systems."
      },
      {
        "id": "coverage-reading-15",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "wake word",
        "meaning": "喚醒字詞",
        "prompt": "The smart speaker stays silent until it hears its _____, which tells it to start listening for a command.",
        "answer": "wake word",
        "explanation": "wake word：喚醒字詞。完整句：The smart speaker stays silent until it hears its wake word, which tells it to start listening for a command."
      },
      {
        "id": "m4-reading-106",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "dozen",
        "meaning": "一打",
        "prompt": "There are twelve eggs in a _____.",
        "answer": "dozen",
        "explanation": "dozen：一打。完整句：There are twelve eggs in a dozen."
      },
      {
        "id": "m4-reading-97",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "chalk",
        "meaning": "粉筆",
        "prompt": "The teacher used a piece of white _____ to write on the blackboard.",
        "answer": "chalk",
        "explanation": "chalk：粉筆。完整句：The teacher used a piece of white chalk to write on the blackboard."
      },
      {
        "id": "coverage-reading-36",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "product",
        "meaning": "產品",
        "prompt": "Before selling its new _____, the company tested it to make sure it worked safely.",
        "answer": "product",
        "explanation": "product：產品。完整句：Before selling its new product, the company tested it to make sure it worked safely."
      },
      {
        "id": "reading-44",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "consume",
        "meaning": "消耗；吃掉",
        "prompt": "These old lights _____ more electricity than the new ones.",
        "answer": "consume",
        "explanation": "consume：消耗；吃掉。完整句：These old lights consume more electricity than the new ones."
      },
      {
        "id": "reading-12",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "earn",
        "meaning": "贏得；賺得",
        "prompt": "Lily hopes to _____ enough money to buy a bicycle.",
        "answer": "earn",
        "explanation": "earn：贏得；賺得。完整句：Lily hopes to earn enough money to buy a bicycle."
      },
      {
        "id": "reading-39",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "stressed",
        "meaning": "有壓力的",
        "prompt": "Ben felt _____ because three reports were due on Friday.",
        "answer": "stressed",
        "explanation": "stressed：有壓力的。完整句：Ben felt stressed because three reports were due on Friday."
      },
      {
        "id": "coverage-reading-20",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "e-mail",
        "meaning": "電子郵件",
        "prompt": "Send me an _____ with the report attached, and I will read it in my inbox.",
        "answer": "e-mail",
        "explanation": "e-mail：電子郵件。完整句：Send me an e-mail with the report attached, and I will read it in my inbox.",
        "acceptedAnswers": [
          "email"
        ]
      },
      {
        "id": "reading-49",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "digestive",
        "meaning": "消化的",
        "prompt": "Chewing food well helps your _____ system do its job.",
        "answer": "digestive",
        "explanation": "digestive：消化的。完整句：Chewing food well helps your digestive system do its job."
      },
      {
        "id": "coverage-reading-4",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "intestine",
        "meaning": "腸",
        "prompt": "After food leaves the stomach, it enters the small _____, where nutrients are absorbed.",
        "answer": "intestine",
        "explanation": "intestine：腸。完整句：After food leaves the stomach, it enters the small intestine, where nutrients are absorbed."
      },
      {
        "id": "reading-5",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "A skilled _____ repaired my grandfather's damaged knee.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：A skilled surgeon repaired my grandfather's damaged knee."
      },
      {
        "id": "reading-40",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "refreshing",
        "meaning": "使人精神煥發的",
        "prompt": "A cool shower was _____ after our long bike ride.",
        "answer": "refreshing",
        "explanation": "refreshing：使人精神煥發的。完整句：A cool shower was refreshing after our long bike ride."
      },
      {
        "id": "reading-31",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "got fed up with",
        "meaning": "厭倦",
        "prompt": "Mia _____ the constant noise and moved to a quieter room.",
        "answer": "got fed up with",
        "explanation": "got fed up with：厭倦。完整句：Mia got fed up with the constant noise and moved to a quieter room."
      },
      {
        "id": "reading-20",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "treasure",
        "meaning": "寶藏",
        "prompt": "The children imagined finding buried _____ on the island.",
        "answer": "treasure",
        "explanation": "treasure：寶藏。完整句：The children imagined finding buried treasure on the island."
      },
      {
        "id": "coverage-repeat-0",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "A helmet protects your head and the _____ inside it when you fall.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：A helmet protects your head and the brain inside it when you fall."
      },
      {
        "id": "m4-reading-94",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "file",
        "meaning": "檔案",
        "prompt": "Please attach the report as a _____ to your message instead of printing it.",
        "answer": "file",
        "explanation": "file：檔案。完整句：Please attach the report as a file to your message instead of printing it."
      },
      {
        "id": "coverage-reading-13",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "if",
        "meaning": "是否",
        "prompt": "Please ask the guide _____ we are allowed to take photographs inside; I need a yes-or-no answer.",
        "answer": "if",
        "explanation": "if：是否。完整句：Please ask the guide if we are allowed to take photographs inside; I need a yes-or-no answer.",
        "hint": "＿＿（兩個字母；避免直接顯示答案，本題不提供字母）"
      },
      {
        "id": "coverage-reading-10",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "blackboard",
        "meaning": "黑板",
        "prompt": "The teacher erased the chalk writing from the _____ at the front of the classroom.",
        "answer": "blackboard",
        "explanation": "blackboard：黑板。完整句：The teacher erased the chalk writing from the blackboard at the front of the classroom."
      },
      {
        "id": "reading-13",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "living",
        "meaning": "生活方式",
        "prompt": "Clean water is necessary for healthy _____.",
        "answer": "living",
        "explanation": "living：生活方式。完整句：Clean water is necessary for healthy living."
      },
      {
        "id": "coverage-reading-8",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "quiz",
        "meaning": "小考",
        "prompt": "Our teacher gave us a short spelling _____ with just five questions.",
        "answer": "quiz",
        "explanation": "quiz：小考。完整句：Our teacher gave us a short spelling quiz with just five questions."
      },
      {
        "id": "coverage-reading-17",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "list",
        "meaning": "清單",
        "prompt": "Before shopping, write a _____ of everything you need so that you do not forget anything.",
        "answer": "list",
        "explanation": "list：清單。完整句：Before shopping, write a list of everything you need so that you do not forget anything."
      },
      {
        "id": "coverage-reading-23",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "type",
        "meaning": "打字",
        "prompt": "Use the keyboard to _____ your name into the form.",
        "answer": "type",
        "explanation": "type：打字。完整句：Use the keyboard to type your name into the form."
      },
      {
        "id": "m4-reading-100",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "screen",
        "meaning": "螢幕",
        "prompt": "The phone's _____ went black when its battery died.",
        "answer": "screen",
        "explanation": "screen：螢幕。完整句：The phone's screen went black when its battery died."
      },
      {
        "id": "coverage-reading-26",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "collect",
        "meaning": "收集",
        "prompt": "We will _____ empty bottles from every classroom and take them to be recycled.",
        "answer": "collect",
        "explanation": "collect：收集。完整句：We will collect empty bottles from every classroom and take them to be recycled."
      },
      {
        "id": "reading-43",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "estimate",
        "meaning": "估計",
        "prompt": "Can you _____ how many beans are in this jar?",
        "answer": "estimate",
        "explanation": "estimate：估計。完整句：Can you estimate how many beans are in this jar?"
      },
      {
        "id": "m4-reading-70",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "temperature",
        "meaning": "溫度",
        "prompt": "The nurse used a thermometer to measure the child's _____.",
        "answer": "temperature",
        "explanation": "temperature：溫度。完整句：The nurse used a thermometer to measure the child's temperature."
      },
      {
        "id": "coverage-reading-9",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "through",
        "meaning": "透過；憑藉",
        "prompt": "The families kept in touch _____ video calls when they could not meet in person.",
        "answer": "through",
        "explanation": "through：透過；憑藉。完整句：The families kept in touch through video calls when they could not meet in person."
      },
      {
        "id": "coverage-reading-37",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "everywhere",
        "meaning": "到處",
        "prompt": "After the pillow tore open, feathers were _____, covering the entire room.",
        "answer": "everywhere",
        "explanation": "everywhere：到處。完整句：After the pillow tore open, feathers were everywhere, covering the entire room."
      },
      {
        "id": "reading-28",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "Unit 2.2",
        "word": "fell asleep",
        "meaning": "入睡；去世",
        "prompt": "The tired child _____ during the bus ride.",
        "answer": "fell asleep",
        "explanation": "fell asleep：入睡；去世。完整句：The tired child fell asleep during the bus ride."
      },
      {
        "id": "reading-47",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "rubber",
        "meaning": "橡膠",
        "prompt": "The soles of these shoes are made of soft _____.",
        "answer": "rubber",
        "explanation": "rubber：橡膠。完整句：The soles of these shoes are made of soft rubber."
      },
      {
        "id": "m4-reading-112",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "wallet",
        "meaning": "錢包",
        "prompt": "He opened his _____ to take out cash and a credit card.",
        "answer": "wallet",
        "explanation": "wallet：錢包。完整句：He opened his wallet to take out cash and a credit card."
      },
      {
        "id": "reading-38",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "Unit 3.1",
        "word": "routine",
        "meaning": "例行事務",
        "prompt": "Reading for ten minutes is part of my bedtime _____.",
        "answer": "routine",
        "explanation": "routine：例行事務。完整句：Reading for ten minutes is part of my bedtime routine."
      },
      {
        "id": "reading-1",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "Unit 1",
        "word": "bullet",
        "meaning": "子彈",
        "prompt": "The police found a _____ inside the broken wooden door.",
        "answer": "bullet",
        "explanation": "bullet：子彈。完整句：The police found a bullet inside the broken wooden door."
      },
      {
        "id": "coverage-reading-1",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "worth",
        "meaning": "價值",
        "prompt": "The charity sold two thousand dollars' _____ of cakes in one afternoon.",
        "answer": "worth",
        "explanation": "worth：價值。完整句：The charity sold two thousand dollars' worth of cakes in one afternoon."
      },
      {
        "id": "coverage-reading-19",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "machine",
        "meaning": "機器",
        "prompt": "This automatic _____ washes the dishes while we relax after dinner.",
        "answer": "machine",
        "explanation": "machine：機器。完整句：This automatic machine washes the dishes while we relax after dinner."
      },
      {
        "id": "reading-19",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "Unit 2.1",
        "word": "valuable",
        "meaning": "有價值的；珍貴的",
        "prompt": "This old painting is too _____ to leave outside.",
        "answer": "valuable",
        "explanation": "valuable：有價值的；珍貴的。完整句：This old painting is too valuable to leave outside."
      },
      {
        "id": "coverage-reading-21",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "key",
        "meaning": "鑰匙",
        "prompt": "She turned the _____ in the lock and opened the front door.",
        "answer": "key",
        "explanation": "key：鑰匙。完整句：She turned the key in the lock and opened the front door."
      },
      {
        "id": "reading-41",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "Unit 3.2",
        "word": "unusual",
        "meaning": "不尋常的",
        "prompt": "It is _____ to see snow in this warm town.",
        "answer": "unusual",
        "explanation": "unusual：不尋常的。完整句：It is unusual to see snow in this warm town."
      }
    ]
  },
  {
    "id": "midterm-7-choice",
    "title": "模擬考 7－選擇題",
    "questions": [
      {
        "id": "coverage-choice-325",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "amuse",
        "meaning": "使快樂",
        "prompt": "The funny puppet show will _____ the children and make them laugh.",
        "answer": "amuse",
        "explanation": "amuse：使快樂。完整句：The funny puppet show will amuse the children and make them laugh.",
        "choices": [
          "amuse",
          "depress",
          "discourage",
          "annoy"
        ],
        "sourceRecordId": "v61-06"
      },
      {
        "id": "coverage-choice-135",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "psychiatrist",
        "meaning": "心理醫師（精神科醫師）",
        "prompt": "The _____ is a medical doctor who treats mental illness and can prescribe medicine.",
        "answer": "psychiatrist",
        "explanation": "psychiatrist：心理醫師（精神科醫師）。完整句：The psychiatrist is a medical doctor who treats mental illness and can prescribe medicine.",
        "choices": [
          "psychiatrist",
          "physicist",
          "photographer",
          "pilot"
        ],
        "sourceRecordId": "v33-05x5"
      },
      {
        "id": "coverage-choice-85",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "housekeeper",
        "meaning": "管家",
        "prompt": "The hotel _____ cleans guest rooms and changes the sheets.",
        "answer": "housekeeper",
        "explanation": "housekeeper：管家。完整句：The hotel housekeeper cleans guest rooms and changes the sheets.",
        "choices": [
          "housekeeper",
          "composer",
          "pilot",
          "physicist"
        ],
        "sourceRecordId": "v32-12"
      },
      {
        "id": "coverage-choice-196",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deck",
        "meaning": "甲板",
        "prompt": "Passengers stood on the ship's open _____ to enjoy the ocean breeze.",
        "answer": "deck",
        "explanation": "deck：甲板。完整句：Passengers stood on the ship's open deck to enjoy the ocean breeze.",
        "choices": [
          "deck",
          "basement",
          "ditch",
          "alley"
        ],
        "sourceRecordId": "v41-25a"
      },
      {
        "id": "coverage-choice-265",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "regional",
        "meaning": "地區的；地方性的",
        "prompt": "The _____ competition is for teams from this part of the country, not the whole nation.",
        "answer": "regional",
        "explanation": "regional：地區的；地方性的。完整句：The regional competition is for teams from this part of the country, not the whole nation.",
        "choices": [
          "regional",
          "global",
          "atomic",
          "ethnic"
        ],
        "sourceRecordId": "v43-15"
      },
      {
        "id": "coverage-choice-97",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "junior",
        "meaning": "資淺的；職位較低的",
        "prompt": "The _____ employee has less experience and a lower rank than the senior staff.",
        "answer": "junior",
        "explanation": "junior：資淺的；職位較低的。完整句：The junior employee has less experience and a lower rank than the senior staff.",
        "choices": [
          "junior",
          "atomic",
          "tropical",
          "imperial"
        ],
        "sourceRecordId": "v32-18a"
      },
      {
        "id": "choice-14",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lifeguard",
        "meaning": "救生員",
        "prompt": "The _____ jumped into the pool to save a drowning child.",
        "answer": "lifeguard",
        "explanation": "lifeguard：救生員。完整句：The lifeguard jumped into the pool to save a drowning child.",
        "choices": [
          "lifeguard",
          "novelist",
          "merchant",
          "historian"
        ],
        "sourceRecordId": "v32-24"
      },
      {
        "id": "coverage-choice-266",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "remote",
        "meaning": "遙遠的；偏僻的",
        "prompt": "The _____ village is far from any city and takes hours to reach.",
        "answer": "remote",
        "explanation": "remote：遙遠的；偏僻的。完整句：The remote village is far from any city and takes hours to reach.",
        "choices": [
          "remote",
          "urban",
          "weekly",
          "monthly"
        ],
        "sourceRecordId": "v43-16a"
      },
      {
        "id": "coverage-choice-254",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "outdoors",
        "meaning": "在戶外",
        "prompt": "We ate _____ under a tree rather than inside the restaurant.",
        "answer": "outdoors",
        "explanation": "outdoors：在戶外。完整句：We ate outdoors under a tree rather than inside the restaurant.",
        "choices": [
          "outdoors",
          "indoors",
          "overseas",
          "yearly"
        ],
        "sourceRecordId": "v43-06"
      },
      {
        "id": "choice-63",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "rural",
        "meaning": "鄉村的",
        "prompt": "The _____ village has farms and fields instead of tall office buildings.",
        "answer": "rural",
        "explanation": "rural：鄉村的。完整句：The rural village has farms and fields instead of tall office buildings.",
        "choices": [
          "rural",
          "urban",
          "weekly",
          "temporary"
        ],
        "sourceRecordId": "v43-18"
      },
      {
        "id": "coverage-choice-241",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "mill",
        "meaning": "磨坊",
        "prompt": "The flour _____ uses large machines to grind wheat into powder.",
        "answer": "mill",
        "explanation": "mill：磨坊。完整句：The flour mill uses large machines to grind wheat into powder.",
        "choices": [
          "mill",
          "nursery",
          "lobby",
          "gallery"
        ],
        "sourceRecordId": "v42-35a"
      },
      {
        "id": "choice-31",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "photographer",
        "meaning": "攝影師",
        "prompt": "The wedding _____ asked everyone to smile at the camera.",
        "answer": "photographer",
        "explanation": "photographer：攝影師。完整句：The wedding photographer asked everyone to smile at the camera.",
        "choices": [
          "photographer",
          "physician",
          "plumber",
          "shepherd"
        ],
        "sourceRecordId": "v33-04"
      },
      {
        "id": "coverage-choice-61",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "conductor",
        "meaning": "指揮家",
        "prompt": "The orchestra's _____ raised her hands to signal when the musicians should begin.",
        "answer": "conductor",
        "explanation": "conductor：指揮家。完整句：The orchestra's conductor raised her hands to signal when the musicians should begin.",
        "choices": [
          "conductor",
          "carpenter",
          "plumber",
          "miner"
        ],
        "sourceRecordId": "v31-33a"
      },
      {
        "id": "choice-65",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "temporary",
        "meaning": "暫時的",
        "prompt": "This is only a _____ classroom; we will return to our old room next month.",
        "answer": "temporary",
        "explanation": "temporary：暫時的。完整句：This is only a temporary classroom; we will return to our old room next month.",
        "choices": [
          "temporary",
          "tropical",
          "outer",
          "yearly"
        ],
        "sourceRecordId": "v43-31"
      },
      {
        "id": "coverage-choice-203",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "farther",
        "meaning": "更遠地",
        "prompt": "The second village is two kilometers _____ down the road than the first.",
        "answer": "farther",
        "explanation": "farther：更遠地。完整句：The second village is two kilometers farther down the road than the first.",
        "choices": [
          "farther",
          "beneath",
          "onto",
          "barely"
        ],
        "sourceRecordId": "v41-33a"
      },
      {
        "id": "choice-69",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "skyscraper",
        "meaning": "摩天大樓",
        "prompt": "The eighty-story _____ is the tallest building in the city.",
        "answer": "skyscraper",
        "explanation": "skyscraper：摩天大樓。完整句：The eighty-story skyscraper is the tallest building in the city.",
        "choices": [
          "skyscraper",
          "tomb",
          "field",
          "tunnel"
        ],
        "sourceRecordId": "v43-23"
      },
      {
        "id": "choice-29",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "vegetarian",
        "meaning": "素食者",
        "prompt": "As a _____, Nina eats beans and vegetables but no meat.",
        "answer": "vegetarian",
        "explanation": "vegetarian：素食者。完整句：As a vegetarian, Nina eats beans and vegetables but no meat.",
        "choices": [
          "vegetarian",
          "photographer",
          "politician",
          "physicist"
        ],
        "sourceRecordId": "v33-42"
      },
      {
        "id": "coverage-choice-289",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "yearly",
        "meaning": "每年的",
        "prompt": "The _____ festival is held once every twelve months.",
        "answer": "yearly",
        "explanation": "yearly：每年的。完整句：The yearly festival is held once every twelve months.",
        "choices": [
          "yearly",
          "hourly",
          "weekly",
          "monthly"
        ],
        "sourceRecordId": "v43-42a"
      },
      {
        "id": "coverage-choice-154",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "senior",
        "meaning": "較年長的",
        "prompt": "This seat is reserved for _____ citizens aged sixty-five and over.",
        "answer": "senior",
        "explanation": "senior：較年長的。完整句：This seat is reserved for senior citizens aged sixty-five and over.",
        "choices": [
          "senior",
          "junior",
          "teenage",
          "atomic"
        ],
        "sourceRecordId": "v33-25a"
      },
      {
        "id": "coverage-choice-297",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "extent",
        "meaning": "程度；範圍",
        "prompt": "The doctor examined the injury to determine the _____ of the damage.",
        "answer": "extent",
        "explanation": "extent：程度；範圍。完整句：The doctor examined the injury to determine the extent of the damage.",
        "choices": [
          "extent",
          "comma",
          "parcel",
          "gallon"
        ],
        "sourceRecordId": "v5-09"
      },
      {
        "id": "coverage-choice-334",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "attract",
        "meaning": "吸引",
        "prompt": "Bright flowers _____ bees, drawing them closer with their colors and smell.",
        "answer": "attract",
        "explanation": "attract：吸引。完整句：Bright flowers attract bees, drawing them closer with their colors and smell.",
        "choices": [
          "attract",
          "discourage",
          "confuse",
          "annoy"
        ],
        "sourceRecordId": "v61-16"
      },
      {
        "id": "coverage-choice-305",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "measurable",
        "meaning": "可測量的；顯著的",
        "prompt": "The treatment produced a _____ improvement that could be shown with numbers.",
        "answer": "measurable",
        "explanation": "measurable：可測量的；顯著的。完整句：The treatment produced a measurable improvement that could be shown with numbers.",
        "choices": [
          "measurable",
          "ethnic",
          "tropical",
          "imperial"
        ],
        "sourceRecordId": "v5-16"
      },
      {
        "id": "coverage-choice-176",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "assess",
        "meaning": "評估；評價",
        "prompt": "The teacher will _____ each student's progress by reviewing their work.",
        "answer": "assess",
        "explanation": "assess：評估；評價。完整句：The teacher will assess each student's progress by reviewing their work.",
        "choices": [
          "assess",
          "migrate",
          "confess",
          "boast"
        ],
        "sourceRecordId": "v41-01x1"
      },
      {
        "id": "choice-9",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "colleague",
        "meaning": "同事",
        "prompt": "My _____ and I work in the same office and share a desk.",
        "answer": "colleague",
        "explanation": "colleague：同事。完整句：My colleague and I work in the same office and share a desk.",
        "choices": [
          "colleague",
          "ancestor",
          "infant",
          "refugee"
        ],
        "sourceRecordId": "v31-29"
      },
      {
        "id": "coverage-choice-214",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "globe",
        "meaning": "地球；世界",
        "prompt": "The teacher spun a round _____ to show us where the continents are.",
        "answer": "globe",
        "explanation": "globe：地球；世界。完整句：The teacher spun a round globe to show us where the continents are.",
        "choices": [
          "globe",
          "garage",
          "gallery",
          "greenhouse"
        ],
        "sourceRecordId": "v42-08a"
      },
      {
        "id": "choice-55",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "dormitory",
        "meaning": "宿舍",
        "prompt": "Many students sleep in the school _____ during the semester.",
        "answer": "dormitory",
        "explanation": "dormitory：宿舍。完整句：Many students sleep in the school dormitory during the semester.",
        "choices": [
          "dormitory",
          "observatory",
          "harbor",
          "hive"
        ],
        "sourceRecordId": "v42-25x2"
      },
      {
        "id": "coverage-choice-150",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "robber",
        "meaning": "搶匪",
        "prompt": "The armed _____ threatened the cashier and demanded the money.",
        "answer": "robber",
        "explanation": "robber：搶匪。完整句：The armed robber threatened the cashier and demanded the money.",
        "choices": [
          "robber",
          "infant",
          "ancestor",
          "bride"
        ],
        "sourceRecordId": "v33-21"
      },
      {
        "id": "choice-50",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "garage",
        "meaning": "車庫",
        "prompt": "Dad parked the car inside the _____ beside our house.",
        "answer": "garage",
        "explanation": "garage：車庫。完整句：Dad parked the car inside the garage beside our house.",
        "choices": [
          "garage",
          "hive",
          "lighthouse",
          "globe"
        ],
        "sourceRecordId": "v42-05a"
      },
      {
        "id": "coverage-choice-48",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "candidate",
        "meaning": "候選人；申請者",
        "prompt": "Each _____ for class president gave a speech before the students voted.",
        "answer": "candidate",
        "explanation": "candidate：候選人；申請者。完整句：Each candidate for class president gave a speech before the students voted.",
        "choices": [
          "candidate",
          "ancestor",
          "infant",
          "bride"
        ],
        "sourceRecordId": "v31-17"
      },
      {
        "id": "coverage-choice-246",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "at present",
        "meaning": "現在；目前",
        "prompt": "The museum is closed _____, but it will reopen next month.",
        "answer": "at present",
        "explanation": "at present：現在；目前。完整句：The museum is closed at present, but it will reopen next month.",
        "choices": [
          "at present",
          "forever",
          "overseas",
          "yearly"
        ],
        "sourceRecordId": "v42-40x2"
      },
      {
        "id": "coverage-choice-134",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "obstetrician",
        "meaning": "婦產科醫師",
        "prompt": "The _____ cared for the pregnant woman and helped deliver her baby.",
        "answer": "obstetrician",
        "explanation": "obstetrician：婦產科醫師。完整句：The obstetrician cared for the pregnant woman and helped deliver her baby.",
        "choices": [
          "obstetrician",
          "physicist",
          "photographer",
          "plumber"
        ],
        "sourceRecordId": "v33-05x4"
      },
      {
        "id": "coverage-choice-169",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "victim",
        "meaning": "受害者",
        "prompt": "The accident's youngest _____ was injured when the car hit her bicycle.",
        "answer": "victim",
        "explanation": "victim：受害者。完整句：The accident's youngest victim was injured when the car hit her bicycle.",
        "choices": [
          "victim",
          "ancestor",
          "emperor",
          "bridegroom"
        ],
        "sourceRecordId": "v33-43"
      },
      {
        "id": "coverage-choice-242",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "motel",
        "meaning": "汽車旅館",
        "prompt": "The roadside _____ offered drivers rooms with parking spaces just outside their doors.",
        "answer": "motel",
        "explanation": "motel：汽車旅館。完整句：The roadside motel offered drivers rooms with parking spaces just outside their doors.",
        "choices": [
          "motel",
          "hive",
          "harbor",
          "greenhouse"
        ],
        "sourceRecordId": "v42-37"
      },
      {
        "id": "coverage-choice-358",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "desire",
        "meaning": "渴望",
        "prompt": "He has a strong _____ to explore the world and hopes to travel after graduation.",
        "answer": "desire",
        "explanation": "desire：渴望。完整句：He has a strong desire to explore the world and hopes to travel after graduation.",
        "choices": [
          "desire",
          "disgust",
          "disappointment",
          "discouragement"
        ],
        "sourceRecordId": "v61-40a"
      },
      {
        "id": "coverage-choice-350",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "dare",
        "meaning": "膽敢",
        "prompt": "Would you _____ to walk across that very high rope bridge despite your fear?",
        "answer": "dare",
        "explanation": "dare：膽敢。完整句：Would you dare to walk across that very high rope bridge despite your fear?",
        "choices": [
          "dare",
          "cherish",
          "admire",
          "approve"
        ],
        "sourceRecordId": "v61-35a"
      },
      {
        "id": "coverage-choice-78",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "fighter",
        "meaning": "鬥士",
        "prompt": "The brave _____ entered the boxing ring ready to face his opponent.",
        "answer": "fighter",
        "explanation": "fighter：鬥士。完整句：The brave fighter entered the boxing ring ready to face his opponent.",
        "choices": [
          "fighter",
          "librarian",
          "infant",
          "novelist"
        ],
        "sourceRecordId": "v32-03"
      },
      {
        "id": "choice-22",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "infant",
        "meaning": "嬰兒；幼兒",
        "prompt": "The tiny _____ was only two weeks old and could not sit up yet.",
        "answer": "infant",
        "explanation": "infant：嬰兒；幼兒。完整句：The tiny infant was only two weeks old and could not sit up yet.",
        "choices": [
          "infant",
          "governor",
          "lecturer",
          "emperor"
        ],
        "sourceRecordId": "v32-14"
      },
      {
        "id": "choice-36",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tutor",
        "meaning": "家教",
        "prompt": "We hired a math _____ to give Leo private lessons after school.",
        "answer": "tutor",
        "explanation": "tutor：家教。完整句：We hired a math tutor to give Leo private lessons after school.",
        "choices": [
          "tutor",
          "tailor",
          "plumber",
          "pilot"
        ],
        "sourceRecordId": "v33-39a"
      },
      {
        "id": "coverage-choice-161",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "technique",
        "meaning": "技術；技巧",
        "prompt": "The teacher showed us a painting _____ for making colors blend smoothly.",
        "answer": "technique",
        "explanation": "technique：技術；技巧。完整句：The teacher showed us a painting technique for making colors blend smoothly.",
        "choices": [
          "technique",
          "rainfall",
          "immigration",
          "anniversary"
        ],
        "sourceRecordId": "v33-33x2"
      },
      {
        "id": "coverage-choice-102",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lord",
        "meaning": "貴族；主人",
        "prompt": "The medieval _____ owned the castle and much of the surrounding land.",
        "answer": "lord",
        "explanation": "lord：貴族；主人。完整句：The medieval lord owned the castle and much of the surrounding land.",
        "choices": [
          "lord",
          "infant",
          "slave",
          "beggar"
        ],
        "sourceRecordId": "v32-25"
      },
      {
        "id": "choice-80",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "parcel",
        "meaning": "包裹",
        "prompt": "The delivery driver left a wrapped _____ at our door.",
        "answer": "parcel",
        "explanation": "parcel：包裹。完整句：The delivery driver left a wrapped parcel at our door.",
        "choices": [
          "parcel",
          "percent",
          "rainfall",
          "extent"
        ],
        "sourceRecordId": "v5-18a"
      },
      {
        "id": "coverage-choice-330",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "appreciation",
        "meaning": "鑑賞",
        "prompt": "We gave our teacher flowers to show our _____ for all her patient help.",
        "answer": "appreciation",
        "explanation": "appreciation：鑑賞。完整句：We gave our teacher flowers to show our appreciation for all her patient help.",
        "choices": [
          "appreciation",
          "disgust",
          "confusion",
          "depression"
        ],
        "sourceRecordId": "v61-11a"
      },
      {
        "id": "choice-33",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "shepherd",
        "meaning": "牧羊人",
        "prompt": "The _____ led his sheep back from the hills before dark.",
        "answer": "shepherd",
        "explanation": "shepherd：牧羊人。完整句：The shepherd led his sheep back from the hills before dark.",
        "choices": [
          "shepherd",
          "translator",
          "technician",
          "politician"
        ],
        "sourceRecordId": "v33-27"
      },
      {
        "id": "coverage-choice-319",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admiration",
        "meaning": "讚嘆；欽羨",
        "prompt": "The audience showed its _____ for her bravery with a long round of applause.",
        "answer": "admiration",
        "explanation": "admiration：讚嘆；欽羨。完整句：The audience showed its admiration for her bravery with a long round of applause.",
        "choices": [
          "admiration",
          "disgust",
          "confusion",
          "depression"
        ],
        "sourceRecordId": "v61-02"
      },
      {
        "id": "coverage-choice-320",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admirer",
        "meaning": "愛慕者",
        "prompt": "As a devoted _____ of the singer, he attended every concert he could.",
        "answer": "admirer",
        "explanation": "admirer：愛慕者。完整句：As a devoted admirer of the singer, he attended every concert he could.",
        "choices": [
          "admirer",
          "ancestor",
          "infant",
          "burglar"
        ],
        "sourceRecordId": "v61-03x1"
      },
      {
        "id": "coverage-choice-260",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "delay",
        "meaning": "因外界因素而延遲或耽誤，亦可指有意延遲",
        "prompt": "The broken traffic lights caused a thirty-minute _____ in our journey.",
        "answer": "delay",
        "explanation": "delay：因外界因素而延遲或耽誤，亦可指有意延遲。完整句：The broken traffic lights caused a thirty-minute delay in our journey.",
        "choices": [
          "delay",
          "curiosity",
          "approval",
          "amusement"
        ],
        "sourceRecordId": "v43-12x2"
      },
      {
        "id": "coverage-choice-121",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "job",
        "meaning": "工作；職業",
        "prompt": "My first _____ was delivering newspapers for money before school.",
        "answer": "job",
        "explanation": "job：工作；職業。完整句：My first job was delivering newspapers for money before school.",
        "choices": [
          "job",
          "hive",
          "parcel",
          "deadline"
        ],
        "sourceRecordId": "v32-44x1"
      },
      {
        "id": "coverage-choice-64",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "coward",
        "meaning": "膽小鬼",
        "prompt": "He was called a _____ because fear made him run away and leave his friends in danger.",
        "answer": "coward",
        "explanation": "coward：膽小鬼。完整句：He was called a coward because fear made him run away and leave his friends in danger.",
        "choices": [
          "coward",
          "champion",
          "composer",
          "ancestor"
        ],
        "sourceRecordId": "v31-37"
      },
      {
        "id": "coverage-choice-66",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "criminal",
        "meaning": "罪犯",
        "prompt": "The police searched for the _____ who had stolen jewelry from three shops.",
        "answer": "criminal",
        "explanation": "criminal：罪犯。完整句：The police searched for the criminal who had stolen jewelry from three shops.",
        "choices": [
          "criminal",
          "bride",
          "ambassador",
          "infant"
        ],
        "sourceRecordId": "v31-39a"
      },
      {
        "id": "coverage-choice-198",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "ditch",
        "meaning": "水溝；壕溝",
        "prompt": "Rainwater runs into the narrow _____ dug beside the road.",
        "answer": "ditch",
        "explanation": "ditch：水溝；壕溝。完整句：Rainwater runs into the narrow ditch dug beside the road.",
        "choices": [
          "ditch",
          "annuity",
          "anniversary",
          "deadline"
        ],
        "sourceRecordId": "v41-27a"
      },
      {
        "id": "coverage-choice-204",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "further",
        "meaning": "更進一步地；更遠地",
        "prompt": "The report gives _____ details in addition to the information already provided.",
        "answer": "further",
        "explanation": "further：更進一步地；更遠地。完整句：The report gives further details in addition to the information already provided.",
        "choices": [
          "further",
          "atomic",
          "ethnic",
          "tropical"
        ],
        "sourceRecordId": "v41-33x1"
      },
      {
        "id": "coverage-choice-49",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "capitalist",
        "meaning": "資本家",
        "prompt": "The wealthy _____ owned several factories and invested money to earn profits.",
        "answer": "capitalist",
        "explanation": "capitalist：資本家。完整句：The wealthy capitalist owned several factories and invested money to earn profits.",
        "choices": [
          "capitalist",
          "beggar",
          "infant",
          "slave"
        ],
        "sourceRecordId": "v31-18"
      },
      {
        "id": "coverage-choice-252",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "opposite",
        "meaning": "對面的",
        "prompt": "The bank is directly _____ the post office, on the other side of the street.",
        "answer": "opposite",
        "explanation": "opposite：對面的。完整句：The bank is directly opposite the post office, on the other side of the street.",
        "choices": [
          "opposite",
          "onto",
          "beneath",
          "aside"
        ],
        "sourceRecordId": "v43-04a"
      },
      {
        "id": "choice-13",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "librarian",
        "meaning": "圖書館員",
        "prompt": "Ask the _____ where the history books are kept.",
        "answer": "librarian",
        "explanation": "librarian：圖書館員。完整句：Ask the librarian where the history books are kept.",
        "choices": [
          "librarian",
          "miner",
          "painter",
          "mechanic"
        ],
        "sourceRecordId": "v32-23"
      },
      {
        "id": "coverage-choice-143",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "psychologist",
        "meaning": "心理學家",
        "prompt": "The _____ studies human thoughts, feelings, and behavior.",
        "answer": "psychologist",
        "explanation": "psychologist：心理學家。完整句：The psychologist studies human thoughts, feelings, and behavior.",
        "choices": [
          "psychologist",
          "physicist",
          "photographer",
          "plumber"
        ],
        "sourceRecordId": "v33-15"
      },
      {
        "id": "coverage-choice-353",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "depression",
        "meaning": "憂鬱；沮喪",
        "prompt": "His long-lasting _____ left him deeply sad and unable to enjoy his usual activities.",
        "answer": "depression",
        "explanation": "depression：憂鬱；沮喪。完整句：His long-lasting depression left him deeply sad and unable to enjoy his usual activities.",
        "choices": [
          "depression",
          "amusement",
          "delight",
          "contentment"
        ],
        "sourceRecordId": "v61-38a"
      },
      {
        "id": "coverage-choice-328",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "anxiety",
        "meaning": "焦慮；不安",
        "prompt": "Her _____ about the exam made her worry all night and sleep badly.",
        "answer": "anxiety",
        "explanation": "anxiety：焦慮；不安。完整句：Her anxiety about the exam made her worry all night and sleep badly.",
        "choices": [
          "anxiety",
          "amusement",
          "delight",
          "contentment"
        ],
        "sourceRecordId": "v61-08"
      },
      {
        "id": "coverage-choice-157",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "spy",
        "meaning": "間諜",
        "prompt": "The _____ secretly collected military information for another government.",
        "answer": "spy",
        "explanation": "spy：間諜。完整句：The spy secretly collected military information for another government.",
        "choices": [
          "spy",
          "infant",
          "bride",
          "ancestor"
        ],
        "sourceRecordId": "v33-29a"
      },
      {
        "id": "coverage-choice-199",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "drugstore",
        "meaning": "藥妝店；藥局",
        "prompt": "The _____ sells the medicine the doctor asked me to buy.",
        "answer": "drugstore",
        "explanation": "drugstore：藥妝店；藥局。完整句：The drugstore sells the medicine the doctor asked me to buy.",
        "choices": [
          "drugstore",
          "cinema",
          "stadium",
          "greenhouse"
        ],
        "sourceRecordId": "v41-29"
      },
      {
        "id": "coverage-choice-300",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "heap",
        "meaning": "（凌亂的）一堆",
        "prompt": "The clothes lay in an untidy _____ on the bedroom floor.",
        "answer": "heap",
        "explanation": "heap：（凌亂的）一堆。完整句：The clothes lay in an untidy heap on the bedroom floor.",
        "choices": [
          "heap",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-12a"
      },
      {
        "id": "coverage-choice-292",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "atomic",
        "meaning": "原子的",
        "prompt": "The scientists studied _____ structure, including the nucleus and electrons.",
        "answer": "atomic",
        "explanation": "atomic：原子的。完整句：The scientists studied atomic structure, including the nucleus and electrons.",
        "choices": [
          "atomic",
          "ethnic",
          "tropical",
          "weekly"
        ],
        "sourceRecordId": "v5-02"
      },
      {
        "id": "coverage-choice-183",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "barely",
        "meaning": "幾乎不",
        "prompt": "He _____ passed the test, scoring just one point above the required mark.",
        "answer": "barely",
        "explanation": "barely：幾乎不。完整句：He barely passed the test, scoring just one point above the required mark.",
        "choices": [
          "barely",
          "forever",
          "overseas",
          "yearly"
        ],
        "sourceRecordId": "v41-10"
      },
      {
        "id": "coverage-choice-107",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "manufacturer",
        "meaning": "製造商",
        "prompt": "The toy _____ produces thousands of plastic cars in its factory each day.",
        "answer": "manufacturer",
        "explanation": "manufacturer：製造商。完整句：The toy manufacturer produces thousands of plastic cars in its factory each day.",
        "choices": [
          "manufacturer",
          "infant",
          "ancestor",
          "passenger"
        ],
        "sourceRecordId": "v32-31"
      },
      {
        "id": "coverage-choice-175",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "access",
        "meaning": "使用、進入的途徑或權利",
        "prompt": "You need a password to gain _____ to the private online records.",
        "answer": "access",
        "explanation": "access：使用、進入的途徑或權利。完整句：You need a password to gain access to the private online records.",
        "choices": [
          "access",
          "rainfall",
          "annuity",
          "curiosity"
        ],
        "sourceRecordId": "v41-01b"
      },
      {
        "id": "choice-82",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "anxious",
        "meaning": "焦慮的",
        "prompt": "She felt _____ while waiting to hear whether her missing dog had been found.",
        "answer": "anxious",
        "explanation": "anxious：焦慮的。完整句：She felt anxious while waiting to hear whether her missing dog had been found.",
        "choices": [
          "anxious",
          "cheerful",
          "agreeable",
          "attractive"
        ],
        "sourceRecordId": "v61-09a"
      },
      {
        "id": "choice-23",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mayor",
        "meaning": "市長",
        "prompt": "The city's _____ announced a plan to improve local bus services.",
        "answer": "mayor",
        "explanation": "mayor：市長。完整句：The city's mayor announced a plan to improve local bus services.",
        "choices": [
          "mayor",
          "infant",
          "miner",
          "magician"
        ],
        "sourceRecordId": "v32-32"
      },
      {
        "id": "coverage-choice-132",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "pediatrician",
        "meaning": "兒科醫師",
        "prompt": "The _____ treats babies and children rather than adult patients.",
        "answer": "pediatrician",
        "explanation": "pediatrician：兒科醫師。完整句：The pediatrician treats babies and children rather than adult patients.",
        "choices": [
          "pediatrician",
          "physicist",
          "photographer",
          "philosopher"
        ],
        "sourceRecordId": "v33-05x2"
      },
      {
        "id": "coverage-choice-89",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "emigrant",
        "meaning": "（由境內外移的）移民",
        "prompt": "An _____ leaves his own country to settle in another one.",
        "answer": "emigrant",
        "explanation": "emigrant：（由境內外移的）移民。完整句：An emigrant leaves his own country to settle in another one.",
        "choices": [
          "emigrant",
          "immigrant",
          "infant",
          "ancestor"
        ],
        "sourceRecordId": "v32-13x3"
      },
      {
        "id": "coverage-choice-70",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "diplomat",
        "meaning": "外交官",
        "prompt": "The _____ represented her government in talks with another country.",
        "answer": "diplomat",
        "explanation": "diplomat：外交官。完整句：The diplomat represented her government in talks with another country.",
        "choices": [
          "diplomat",
          "burglar",
          "plumber",
          "infant"
        ],
        "sourceRecordId": "v31-44"
      },
      {
        "id": "choice-70",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "shelter",
        "meaning": "庇護",
        "prompt": "During the storm, the cave gave the hikers _____ from the rain.",
        "answer": "shelter",
        "explanation": "shelter：庇護。完整句：During the storm, the cave gave the hikers shelter from the rain.",
        "choices": [
          "shelter",
          "delay",
          "occasion",
          "postponement"
        ],
        "sourceRecordId": "v43-20a"
      },
      {
        "id": "coverage-choice-80",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "founder",
        "meaning": "創始人；建立者",
        "prompt": "The university's _____ established the school with her own money a century ago.",
        "answer": "founder",
        "explanation": "founder：創始人；建立者。完整句：The university's founder established the school with her own money a century ago.",
        "choices": [
          "founder",
          "infant",
          "passenger",
          "follower"
        ],
        "sourceRecordId": "v32-05"
      },
      {
        "id": "coverage-choice-186",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "chamber",
        "meaning": "（用於特定用途的）房間；室；廳",
        "prompt": "The council met in a large _____ inside the town hall.",
        "answer": "chamber",
        "explanation": "chamber：（用於特定用途的）房間；室；廳。完整句：The council met in a large chamber inside the town hall.",
        "choices": [
          "chamber",
          "tunnel",
          "ditch",
          "harbor"
        ],
        "sourceRecordId": "v41-16"
      },
      {
        "id": "coverage-choice-299",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "handful",
        "meaning": "一把",
        "prompt": "She scooped up a _____ of sand, just enough to fit in one hand.",
        "answer": "handful",
        "explanation": "handful：一把。完整句：She scooped up a handful of sand, just enough to fit in one hand.",
        "choices": [
          "handful",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-11a"
      },
      {
        "id": "coverage-choice-122",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "vocation",
        "meaning": "職業（自己擅長的工作）；使命",
        "prompt": "She regarded nursing as her _____, work she felt deeply suited to and meant to do.",
        "answer": "vocation",
        "explanation": "vocation：職業（自己擅長的工作）；使命。完整句：She regarded nursing as her vocation, work she felt deeply suited to and meant to do.",
        "choices": [
          "vocation",
          "rainfall",
          "amusement",
          "confusion"
        ],
        "sourceRecordId": "v32-44x2"
      },
      {
        "id": "coverage-choice-256",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "overnight",
        "meaning": "整夜地；一夜",
        "prompt": "The journey was too long for one day, so we stayed _____ and left the next morning.",
        "answer": "overnight",
        "explanation": "overnight：整夜地；一夜。完整句：The journey was too long for one day, so we stayed overnight and left the next morning.",
        "choices": [
          "overnight",
          "yearly",
          "weekly",
          "hourly"
        ],
        "sourceRecordId": "v43-08a"
      },
      {
        "id": "coverage-choice-280",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "circumstances",
        "meaning": "外在情勢；經濟狀況",
        "prompt": "Because of difficult family _____, she had to stop working for a while.",
        "answer": "circumstances",
        "explanation": "circumstances：外在情勢；經濟狀況。完整句：Because of difficult family circumstances, she had to stop working for a while.",
        "choices": [
          "circumstances",
          "percentages",
          "calories",
          "anniversaries"
        ],
        "sourceRecordId": "v43-30x1"
      },
      {
        "id": "coverage-choice-68",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "dealer",
        "meaning": "經銷商；交易員",
        "prompt": "An art _____ buys paintings and sells them to collectors.",
        "answer": "dealer",
        "explanation": "dealer：經銷商；交易員。完整句：An art dealer buys paintings and sells them to collectors.",
        "choices": [
          "dealer",
          "lifeguard",
          "plumber",
          "infant"
        ],
        "sourceRecordId": "v31-41"
      },
      {
        "id": "coverage-choice-235",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "locate",
        "meaning": "確定……的位置",
        "prompt": "Use the map to _____ the missing village and find its exact position.",
        "answer": "locate",
        "explanation": "locate：確定……的位置。完整句：Use the map to locate the missing village and find its exact position.",
        "choices": [
          "locate",
          "confess",
          "boast",
          "migrate"
        ],
        "sourceRecordId": "v42-31a"
      },
      {
        "id": "coverage-choice-294",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "calorie",
        "meaning": "卡路里",
        "prompt": "A _____ is a unit used to measure the energy that food provides.",
        "answer": "calorie",
        "explanation": "calorie：卡路里。完整句：A calorie is a unit used to measure the energy that food provides.",
        "choices": [
          "calorie",
          "kilometer",
          "gallon",
          "ton"
        ],
        "sourceRecordId": "v5-05"
      },
      {
        "id": "choice-38",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "basement",
        "meaning": "地下室",
        "prompt": "The room below the ground floor is our _____.",
        "answer": "basement",
        "explanation": "basement：地下室。完整句：The room below the ground floor is our basement.",
        "choices": [
          "basement",
          "campus",
          "avenue",
          "deck"
        ],
        "sourceRecordId": "v41-11"
      },
      {
        "id": "coverage-choice-117",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "murderer",
        "meaning": "謀殺者；兇手",
        "prompt": "The court found that the _____ had deliberately killed his neighbor.",
        "answer": "murderer",
        "explanation": "murderer：謀殺者；兇手。完整句：The court found that the murderer had deliberately killed his neighbor.",
        "choices": [
          "murderer",
          "ancestor",
          "infant",
          "bride"
        ],
        "sourceRecordId": "v32-40"
      },
      {
        "id": "coverage-choice-84",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "hire",
        "meaning": "僱用",
        "prompt": "The café plans to _____ two new workers to serve its customers.",
        "answer": "hire",
        "explanation": "hire：僱用。完整句：The café plans to hire two new workers to serve its customers.",
        "choices": [
          "hire",
          "migrate",
          "confess",
          "postpone"
        ],
        "sourceRecordId": "v32-10a"
      },
      {
        "id": "coverage-choice-323",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "amaze",
        "meaning": "使吃驚",
        "prompt": "The magician's impossible-looking trick will _____ the audience and leave them astonished.",
        "answer": "amaze",
        "explanation": "amaze：使吃驚。完整句：The magician's impossible-looking trick will amaze the audience and leave them astonished.",
        "choices": [
          "amaze",
          "bore",
          "discourage",
          "annoy"
        ],
        "sourceRecordId": "v61-05"
      },
      {
        "id": "coverage-choice-236",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "situate",
        "meaning": "be situated + 介系詞 + 地點：位於",
        "prompt": "The planners decided to _____ the new hospital near the main road.",
        "answer": "situate",
        "explanation": "situate：be situated + 介系詞 + 地點：位於。完整句：The planners decided to situate the new hospital near the main road.",
        "choices": [
          "situate",
          "confess",
          "boast",
          "migrate"
        ],
        "sourceRecordId": "v42-31x2"
      },
      {
        "id": "coverage-choice-278",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "surround",
        "meaning": "圍繞；包圍",
        "prompt": "Tall walls _____ the garden on every side.",
        "answer": "surround",
        "explanation": "surround：圍繞；包圍。完整句：Tall walls surround the garden on every side.",
        "choices": [
          "surround",
          "publish",
          "confess",
          "migrate"
        ],
        "sourceRecordId": "v43-29"
      },
      {
        "id": "coverage-choice-349",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curse",
        "meaning": "詛咒；咒語",
        "prompt": "In the story, the witch placed a _____ on the castle, bringing years of bad luck.",
        "answer": "curse",
        "explanation": "curse：詛咒；咒語。完整句：In the story, the witch placed a curse on the castle, bringing years of bad luck.",
        "choices": [
          "curse",
          "approval",
          "appeal",
          "complaint"
        ],
        "sourceRecordId": "v61-34a"
      },
      {
        "id": "coverage-choice-43",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "assistant",
        "meaning": "助手；助理",
        "prompt": "The scientist's _____ helps her prepare equipment and organize her appointments.",
        "answer": "assistant",
        "explanation": "assistant：助手；助理。完整句：The scientist's assistant helps her prepare equipment and organize her appointments.",
        "choices": [
          "assistant",
          "ancestor",
          "emperor",
          "burglar"
        ],
        "sourceRecordId": "v31-09"
      },
      {
        "id": "coverage-choice-69",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "designer",
        "meaning": "設計師",
        "prompt": "The fashion _____ drew plans for a new collection of dresses.",
        "answer": "designer",
        "explanation": "designer：設計師。完整句：The fashion designer drew plans for a new collection of dresses.",
        "choices": [
          "designer",
          "miner",
          "plumber",
          "lifeguard"
        ],
        "sourceRecordId": "v31-42"
      },
      {
        "id": "coverage-choice-168",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "vacancy",
        "meaning": "職缺",
        "prompt": "The hotel had no _____, so we could not book a room there.",
        "answer": "vacancy",
        "explanation": "vacancy：職缺。完整句：The hotel had no vacancy, so we could not book a room there.",
        "choices": [
          "vacancy",
          "entry",
          "access",
          "deadline"
        ],
        "sourceRecordId": "v33-41"
      },
      {
        "id": "coverage-choice-224",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "indoor",
        "meaning": "室內的",
        "prompt": "The sports center has an _____ pool that can be used even during heavy rain.",
        "answer": "indoor",
        "explanation": "indoor：室內的。完整句：The sports center has an indoor pool that can be used even during heavy rain.",
        "choices": [
          "indoor",
          "outdoor",
          "atomic",
          "ethnic"
        ],
        "sourceRecordId": "v42-18"
      },
      {
        "id": "coverage-choice-71",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "economist",
        "meaning": "經濟學家",
        "prompt": "The _____ studies how prices, jobs, and trade affect a country's economy.",
        "answer": "economist",
        "explanation": "economist：經濟學家。完整句：The economist studies how prices, jobs, and trade affect a country's economy.",
        "choices": [
          "economist",
          "tailor",
          "plumber",
          "clown"
        ],
        "sourceRecordId": "v31-45"
      },
      {
        "id": "choice-15",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanic",
        "meaning": "技工",
        "prompt": "A _____ checked the engine when our car would not start.",
        "answer": "mechanic",
        "explanation": "mechanic：技工。完整句：A mechanic checked the engine when our car would not start.",
        "choices": [
          "mechanic",
          "monk",
          "novelist",
          "librarian"
        ],
        "sourceRecordId": "v32-33"
      },
      {
        "id": "coverage-choice-217",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "homeland",
        "meaning": "祖國；故鄉",
        "prompt": "After years abroad, she returned to her _____, the country where she was born.",
        "answer": "homeland",
        "explanation": "homeland：祖國；故鄉。完整句：After years abroad, she returned to her homeland, the country where she was born.",
        "choices": [
          "homeland",
          "greenhouse",
          "hive",
          "garage"
        ],
        "sourceRecordId": "v42-14"
      },
      {
        "id": "coverage-choice-351",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "delight",
        "meaning": "欣喜；愉快",
        "prompt": "The unexpected gift filled the child with _____, and she laughed with joy.",
        "answer": "delight",
        "explanation": "delight：欣喜；愉快。完整句：The unexpected gift filled the child with delight, and she laughed with joy.",
        "choices": [
          "delight",
          "anxiety",
          "disgust",
          "depression"
        ],
        "sourceRecordId": "v61-36c"
      },
      {
        "id": "coverage-choice-248",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "nursery",
        "meaning": "托兒所；育兒室",
        "prompt": "The parents left their toddler at the _____, where staff cared for young children during the day.",
        "answer": "nursery",
        "explanation": "nursery：托兒所；育兒室。完整句：The parents left their toddler at the nursery, where staff cared for young children during the day.",
        "choices": [
          "nursery",
          "jail",
          "harbor",
          "observatory"
        ],
        "sourceRecordId": "v42-41"
      },
      {
        "id": "coverage-choice-153",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "scout",
        "meaning": "童子軍",
        "prompt": "The young _____ earned a badge at camp after learning how to tie knots and pitch a tent.",
        "answer": "scout",
        "explanation": "scout：童子軍。完整句：The young scout earned a badge at camp after learning how to tie knots and pitch a tent.",
        "choices": [
          "scout",
          "infant",
          "ancestor",
          "bride"
        ],
        "sourceRecordId": "v33-24a"
      },
      {
        "id": "coverage-choice-277",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "suburb",
        "meaning": "郊區",
        "prompt": "They live in a quiet _____ just outside the main city center.",
        "answer": "suburb",
        "explanation": "suburb：郊區。完整句：They live in a quiet suburb just outside the main city center.",
        "choices": [
          "suburb",
          "county",
          "kingdom",
          "colony"
        ],
        "sourceRecordId": "v43-28"
      },
      {
        "id": "coverage-choice-346",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "consequence",
        "meaning": "影響；結果",
        "prompt": "One _____ of missing the bus was arriving late for the test.",
        "answer": "consequence",
        "explanation": "consequence：影響；結果。完整句：One consequence of missing the bus was arriving late for the test.",
        "choices": [
          "consequence",
          "curiosity",
          "confusion",
          "conscience"
        ],
        "sourceRecordId": "v61-31"
      },
      {
        "id": "choice-76",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "slice",
        "meaning": "一片",
        "prompt": "Would you like a thin _____ of bread with your soup?",
        "answer": "slice",
        "explanation": "slice：一片。完整句：Would you like a thin slice of bread with your soup?",
        "choices": [
          "slice",
          "herd",
          "flock",
          "kilometer"
        ],
        "sourceRecordId": "v5-27a"
      },
      {
        "id": "coverage-choice-96",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "instructor",
        "meaning": "（大學）講師",
        "prompt": "The driving _____ taught me how to park the car correctly.",
        "answer": "instructor",
        "explanation": "instructor：（大學）講師。完整句：The driving instructor taught me how to park the car correctly.",
        "choices": [
          "instructor",
          "ancestor",
          "infant",
          "passenger"
        ],
        "sourceRecordId": "v32-16a"
      },
      {
        "id": "coverage-choice-230",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "laboratory / lab",
        "meaning": "實驗室",
        "prompt": "The students tested the chemical samples in a science _____.",
        "answer": "laboratory",
        "explanation": "laboratory / lab：實驗室。完整句：The students tested the chemical samples in a science laboratory.",
        "choices": [
          "laboratory",
          "nursery",
          "harbor",
          "lobby"
        ],
        "sourceRecordId": "v42-25"
      },
      {
        "id": "choice-5",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "composer",
        "meaning": "作曲家",
        "prompt": "The _____ wrote a new piece of music for the school orchestra.",
        "answer": "composer",
        "explanation": "composer：作曲家。完整句：The composer wrote a new piece of music for the school orchestra.",
        "choices": [
          "composer",
          "burglar",
          "accountant",
          "cleaner"
        ],
        "sourceRecordId": "v31-32"
      },
      {
        "id": "coverage-choice-240",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "meanwhile",
        "meaning": "同時",
        "prompt": "I cooked the rice; _____, my sister washed the vegetables in another part of the kitchen.",
        "answer": "meanwhile",
        "explanation": "meanwhile：同時。完整句：I cooked the rice; meanwhile, my sister washed the vegetables in another part of the kitchen.",
        "choices": [
          "meanwhile",
          "beneath",
          "onto",
          "yearly"
        ],
        "sourceRecordId": "v42-34a"
      },
      {
        "id": "coverage-choice-194",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "county",
        "meaning": "縣",
        "prompt": "A _____ is a local administrative area that may contain several towns and villages.",
        "answer": "county",
        "explanation": "county：縣。完整句：A county is a local administrative area that may contain several towns and villages.",
        "choices": [
          "county",
          "globe",
          "colony",
          "empire"
        ],
        "sourceRecordId": "v41-20"
      },
      {
        "id": "coverage-choice-316",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "sum",
        "meaning": "總數；金額",
        "prompt": "The _____ of six and four is ten.",
        "answer": "sum",
        "explanation": "sum：總數；金額。完整句：The sum of six and four is ten.",
        "choices": [
          "sum",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-28a"
      }
    ]
  },
  {
    "id": "midterm-8-choice",
    "title": "模擬考 8－選擇題",
    "questions": [
      {
        "id": "coverage-choice-170",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "volunteer",
        "meaning": "自願者；志工",
        "prompt": "The unpaid _____ gives her time to help at the animal shelter.",
        "answer": "volunteer",
        "explanation": "volunteer：自願者；志工。完整句：The unpaid volunteer gives her time to help at the animal shelter.",
        "choices": [
          "volunteer",
          "capitalist",
          "infant",
          "ancestor"
        ],
        "sourceRecordId": "v33-44a"
      },
      {
        "id": "coverage-choice-313",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "amount",
        "meaning": "a large/small amount of + 不可數名詞：大／少量的……",
        "prompt": "We cannot count water drop by drop here, so we measure the total _____ of water in liters.",
        "answer": "amount",
        "explanation": "amount：a large/small amount of + 不可數名詞：大／少量的……。完整句：We cannot count water drop by drop here, so we measure the total amount of water in liters.",
        "choices": [
          "amount",
          "number",
          "herd",
          "flock"
        ],
        "sourceRecordId": "v5-24x3"
      },
      {
        "id": "coverage-choice-128",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "peer",
        "meaning": "同輩；同儕",
        "prompt": "A _____ is someone of similar age or status, such as another student in your class.",
        "answer": "peer",
        "explanation": "peer：同輩；同儕。完整句：A peer is someone of similar age or status, such as another student in your class.",
        "choices": [
          "peer",
          "ancestor",
          "infant",
          "emperor"
        ],
        "sourceRecordId": "v33-02a"
      },
      {
        "id": "choice-66",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "timetable",
        "meaning": "時間表；時刻表",
        "prompt": "Check the train _____ to find out when the last train leaves.",
        "answer": "timetable",
        "explanation": "timetable：時間表；時刻表。完整句：Check the train timetable to find out when the last train leaves.",
        "choices": [
          "timetable",
          "tomb",
          "tribe",
          "tower"
        ],
        "sourceRecordId": "v43-33"
      },
      {
        "id": "coverage-choice-269",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "site",
        "meaning": "地點；場所",
        "prompt": "Workers cleared the building _____ before starting construction on the new school.",
        "answer": "site",
        "explanation": "site：地點；場所。完整句：Workers cleared the building site before starting construction on the new school.",
        "choices": [
          "site",
          "studio",
          "suburb",
          "headquarters"
        ],
        "sourceRecordId": "v43-22"
      },
      {
        "id": "coverage-choice-216",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "headquarters",
        "meaning": "總部（單複數同形）",
        "prompt": "The company's main _____ is where its senior leaders direct worldwide operations.",
        "answer": "headquarters",
        "explanation": "headquarters：總部（單複數同形）。完整句：The company's main headquarters is where its senior leaders direct worldwide operations.",
        "choices": [
          "headquarters",
          "hive",
          "greenhouse",
          "comma"
        ],
        "sourceRecordId": "v42-12"
      },
      {
        "id": "coverage-choice-77",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "ethnic",
        "meaning": "種族的；民族的",
        "prompt": "The festival celebrates the food and music of several _____ groups.",
        "answer": "ethnic",
        "explanation": "ethnic：種族的；民族的。完整句：The festival celebrates the food and music of several ethnic groups.",
        "choices": [
          "ethnic",
          "hourly",
          "atomic",
          "temporary"
        ],
        "sourceRecordId": "v32-02"
      },
      {
        "id": "choice-51",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "greenhouse",
        "meaning": "花房；溫室",
        "prompt": "The farmer grows plants in a glass _____ to keep them warm.",
        "answer": "greenhouse",
        "explanation": "greenhouse：花房；溫室。完整句：The farmer grows plants in a glass greenhouse to keep them warm.",
        "choices": [
          "greenhouse",
          "harbor",
          "hallway",
          "jail"
        ],
        "sourceRecordId": "v42-09"
      },
      {
        "id": "coverage-choice-310",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "pile",
        "meaning": "一堆；一疊",
        "prompt": "Please stack the books in a neat _____ on the desk.",
        "answer": "pile",
        "explanation": "pile：一堆；一疊。完整句：Please stack the books in a neat pile on the desk.",
        "choices": [
          "pile",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-22a"
      },
      {
        "id": "coverage-choice-46",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "beggar",
        "meaning": "乞丐",
        "prompt": "The homeless _____ sat by the road asking strangers for spare coins.",
        "answer": "beggar",
        "explanation": "beggar：乞丐。完整句：The homeless beggar sat by the road asking strangers for spare coins.",
        "choices": [
          "beggar",
          "ambassador",
          "composer",
          "bridegroom"
        ],
        "sourceRecordId": "v31-13"
      },
      {
        "id": "coverage-choice-160",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "technical",
        "meaning": "技術（性）的；科技（上）的",
        "prompt": "The manual gives _____ details about the machine's electronic parts.",
        "answer": "technical",
        "explanation": "technical：技術（性）的；科技（上）的。完整句：The manual gives technical details about the machine's electronic parts.",
        "choices": [
          "technical",
          "ethnic",
          "tropical",
          "cheerful"
        ],
        "sourceRecordId": "v33-33x1"
      },
      {
        "id": "coverage-choice-222",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "instantaneous",
        "meaning": "立刻的；瞬間的",
        "prompt": "The camera's response was _____, with no noticeable delay at all.",
        "answer": "instantaneous",
        "explanation": "instantaneous：立刻的；瞬間的。完整句：The camera's response was instantaneous, with no noticeable delay at all.",
        "choices": [
          "instantaneous",
          "yearly",
          "tropical",
          "ethnic"
        ],
        "sourceRecordId": "v42-17x2"
      },
      {
        "id": "coverage-choice-116",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "monk",
        "meaning": "僧侶；修士",
        "prompt": "The Buddhist _____ lives in a monastery and spends time praying and meditating.",
        "answer": "monk",
        "explanation": "monk：僧侶；修士。完整句：The Buddhist monk lives in a monastery and spends time praying and meditating.",
        "choices": [
          "monk",
          "banker",
          "pilot",
          "plumber"
        ],
        "sourceRecordId": "v32-39"
      },
      {
        "id": "coverage-choice-227",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "inner",
        "meaning": "內部的；內心的",
        "prompt": "The _____ layer lies closest to the center, beneath the outer covering.",
        "answer": "inner",
        "explanation": "inner：內部的；內心的。完整句：The inner layer lies closest to the center, beneath the outer covering.",
        "choices": [
          "inner",
          "outer",
          "weekly",
          "tropical"
        ],
        "sourceRecordId": "v42-21"
      },
      {
        "id": "coverage-choice-108",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "machinery",
        "meaning": "機器；機械",
        "prompt": "The factory's heavy _____ includes several large presses and cutting devices.",
        "answer": "machinery",
        "explanation": "machinery：機器；機械。完整句：The factory's heavy machinery includes several large presses and cutting devices.",
        "choices": [
          "machinery",
          "immigration",
          "curiosity",
          "rainfall"
        ],
        "sourceRecordId": "v32-33x1"
      },
      {
        "id": "coverage-choice-164",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "teenage",
        "meaning": "十幾歲的；青少年時期的",
        "prompt": "The club is for _____ members between thirteen and nineteen years old.",
        "answer": "teenage",
        "explanation": "teenage：十幾歲的；青少年時期的。完整句：The club is for teenage members between thirteen and nineteen years old.",
        "choices": [
          "teenage",
          "senior",
          "imperial",
          "atomic"
        ],
        "sourceRecordId": "v33-34"
      },
      {
        "id": "choice-62",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postpone",
        "meaning": "使延期",
        "prompt": "Heavy rain forced us to _____ the picnic until next week.",
        "answer": "postpone",
        "explanation": "postpone：使延期。完整句：Heavy rain forced us to postpone the picnic until next week.",
        "choices": [
          "postpone",
          "surround",
          "prolong",
          "locate"
        ],
        "sourceRecordId": "v43-12"
      },
      {
        "id": "coverage-choice-156",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "slave",
        "meaning": "奴隸",
        "prompt": "The _____ was treated as property and forced to work without freedom.",
        "answer": "slave",
        "explanation": "slave：奴隸。完整句：The slave was treated as property and forced to work without freedom.",
        "choices": [
          "slave",
          "emperor",
          "lord",
          "capitalist"
        ],
        "sourceRecordId": "v33-28a"
      },
      {
        "id": "coverage-choice-145",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "publish",
        "meaning": "出版；發行；刊載",
        "prompt": "The newspaper will _____ my article in tomorrow's edition.",
        "answer": "publish",
        "explanation": "publish：出版；發行；刊載。完整句：The newspaper will publish my article in tomorrow's edition.",
        "choices": [
          "publish",
          "migrate",
          "confess",
          "boast"
        ],
        "sourceRecordId": "v33-16x1"
      },
      {
        "id": "coverage-choice-120",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "occupation",
        "meaning": "職業",
        "prompt": "When asked about his _____, he replied that he worked as a baker.",
        "answer": "occupation",
        "explanation": "occupation：職業。完整句：When asked about his occupation, he replied that he worked as a baker.",
        "choices": [
          "occupation",
          "generation",
          "location",
          "frequency"
        ],
        "sourceRecordId": "v32-44a"
      },
      {
        "id": "coverage-choice-215",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hallway",
        "meaning": "門廳；走廊",
        "prompt": "The classrooms are connected by a long _____ inside the school building.",
        "answer": "hallway",
        "explanation": "hallway：門廳；走廊。完整句：The classrooms are connected by a long hallway inside the school building.",
        "choices": [
          "hallway",
          "harbor",
          "hive",
          "greenhouse"
        ],
        "sourceRecordId": "v42-10"
      },
      {
        "id": "coverage-choice-76",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "empire",
        "meaning": "帝國；大企業",
        "prompt": "At its largest, the _____ consisted of many countries under one ruler.",
        "answer": "empire",
        "explanation": "empire：帝國；大企業。完整句：At its largest, the empire consisted of many countries under one ruler.",
        "choices": [
          "empire",
          "colony",
          "county",
          "neighborhood"
        ],
        "sourceRecordId": "v32-01x3"
      },
      {
        "id": "coverage-choice-52",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "champion",
        "meaning": "冠軍",
        "prompt": "After winning the final match, she became the national chess _____.",
        "answer": "champion",
        "explanation": "champion：冠軍。完整句：After winning the final match, she became the national chess champion.",
        "choices": [
          "champion",
          "ancestor",
          "infant",
          "refugee"
        ],
        "sourceRecordId": "v31-22"
      },
      {
        "id": "coverage-choice-233",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lately",
        "meaning": "近來；最近",
        "prompt": "Have you seen Kate _____, perhaps during the past few days?",
        "answer": "lately",
        "explanation": "lately：近來；最近。完整句：Have you seen Kate lately, perhaps during the past few days?",
        "choices": [
          "lately",
          "beneath",
          "onto",
          "forever"
        ],
        "sourceRecordId": "v42-27"
      },
      {
        "id": "choice-88",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "determination",
        "meaning": "決心；決意",
        "prompt": "Despite many failures, his _____ kept him working toward his goal.",
        "answer": "determination",
        "explanation": "determination：決心；決意。完整句：Despite many failures, his determination kept him working toward his goal.",
        "choices": [
          "determination",
          "disgust",
          "confusion",
          "amusement"
        ],
        "sourceRecordId": "v61-42"
      },
      {
        "id": "coverage-choice-127",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "pal",
        "meaning": "朋友；好友；夥伴",
        "prompt": "Ben is my best _____; we have been close friends since kindergarten.",
        "answer": "pal",
        "explanation": "pal：朋友；好友；夥伴。完整句：Ben is my best pal; we have been close friends since kindergarten.",
        "choices": [
          "pal",
          "ancestor",
          "emperor",
          "infant"
        ],
        "sourceRecordId": "v32-47"
      },
      {
        "id": "coverage-choice-336",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "attractive",
        "meaning": "動人的；有吸引力的",
        "prompt": "The garden looked so _____ with its colorful flowers that visitors stopped to admire it.",
        "answer": "attractive",
        "explanation": "attractive：動人的；有吸引力的。完整句：The garden looked so attractive with its colorful flowers that visitors stopped to admire it.",
        "choices": [
          "attractive",
          "awful",
          "depressing",
          "ashamed"
        ],
        "sourceRecordId": "v61-18"
      },
      {
        "id": "coverage-choice-42",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "adviser",
        "meaning": "顧問；指導老師",
        "prompt": "The school _____ offered guidance about which courses would suit my interests.",
        "answer": "adviser",
        "explanation": "adviser：顧問；指導老師。完整句：The school adviser offered guidance about which courses would suit my interests.",
        "choices": [
          "adviser",
          "burglar",
          "infant",
          "beggar"
        ],
        "sourceRecordId": "v31-07"
      },
      {
        "id": "coverage-choice-296",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "dime",
        "meaning": "（美國、加拿大的）一角硬幣",
        "prompt": "A _____ is an American coin worth ten cents.",
        "answer": "dime",
        "explanation": "dime：（美國、加拿大的）一角硬幣。完整句：A dime is an American coin worth ten cents.",
        "choices": [
          "dime",
          "penny",
          "gallon",
          "ton"
        ],
        "sourceRecordId": "v5-08a"
      },
      {
        "id": "coverage-choice-363",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "discouragement",
        "meaning": "沮喪",
        "prompt": "Repeated failure brought _____, making him feel that trying again was useless.",
        "answer": "discouragement",
        "explanation": "discouragement：沮喪。完整句：Repeated failure brought discouragement, making him feel that trying again was useless.",
        "choices": [
          "discouragement",
          "delight",
          "contentment",
          "amusement"
        ],
        "sourceRecordId": "v61-45x1"
      },
      {
        "id": "coverage-choice-312",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "plenty",
        "meaning": "大量；充足",
        "prompt": "There is _____ of food, so everyone can have more than enough to eat.",
        "answer": "plenty",
        "explanation": "plenty：大量；充足。完整句：There is plenty of food, so everyone can have more than enough to eat.",
        "choices": [
          "plenty",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-24"
      },
      {
        "id": "coverage-choice-144",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "publisher",
        "meaning": "出版（或發行）公司；出版商",
        "prompt": "The book's _____ is the company that prepares it for printing and sale.",
        "answer": "publisher",
        "explanation": "publisher：出版（或發行）公司；出版商。完整句：The book's publisher is the company that prepares it for printing and sale.",
        "choices": [
          "publisher",
          "plumber",
          "tailor",
          "pilot"
        ],
        "sourceRecordId": "v33-16"
      },
      {
        "id": "choice-85",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "complain",
        "meaning": "抱怨；申訴",
        "prompt": "Guests began to _____ because their rooms were dirty and noisy.",
        "answer": "complain",
        "explanation": "complain：抱怨；申訴。完整句：Guests began to complain because their rooms were dirty and noisy.",
        "choices": [
          "complain",
          "admire",
          "cherish",
          "attract"
        ],
        "sourceRecordId": "v61-25"
      },
      {
        "id": "choice-39",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "cafeteria",
        "meaning": "（大學或大樓的）自助餐廳",
        "prompt": "Students buy lunch and eat together in the school _____.",
        "answer": "cafeteria",
        "explanation": "cafeteria：（大學或大樓的）自助餐廳。完整句：Students buy lunch and eat together in the school cafeteria.",
        "choices": [
          "cafeteria",
          "dam",
          "alley",
          "fort"
        ],
        "sourceRecordId": "v41-13"
      },
      {
        "id": "coverage-choice-155",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "settler",
        "meaning": "移民；殖民者",
        "prompt": "The early _____ built a home and began farming in a place where his family had never lived.",
        "answer": "settler",
        "explanation": "settler：移民；殖民者。完整句：The early settler built a home and began farming in a place where his family had never lived.",
        "choices": [
          "settler",
          "tourist",
          "passenger",
          "infant"
        ],
        "sourceRecordId": "v33-26"
      },
      {
        "id": "coverage-choice-219",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hourly",
        "meaning": "每小時的",
        "prompt": "The museum offers _____ tours, with a new tour starting every sixty minutes.",
        "answer": "hourly",
        "explanation": "hourly：每小時的。完整句：The museum offers hourly tours, with a new tour starting every sixty minutes.",
        "choices": [
          "hourly",
          "yearly",
          "weekly",
          "monthly"
        ],
        "sourceRecordId": "v42-16a"
      },
      {
        "id": "choice-58",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "kindergarten",
        "meaning": "幼稚園；托兒所",
        "prompt": "My five-year-old sister goes to _____ before she starts elementary school.",
        "answer": "kindergarten",
        "explanation": "kindergarten：幼稚園；托兒所。完整句：My five-year-old sister goes to kindergarten before she starts elementary school.",
        "choices": [
          "kindergarten",
          "headquarters",
          "harbor",
          "jail"
        ],
        "sourceRecordId": "v42-23"
      },
      {
        "id": "choice-20",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "miner",
        "meaning": "礦工",
        "prompt": "The _____ went deep underground to dig for coal.",
        "answer": "miner",
        "explanation": "miner：礦工。完整句：The miner went deep underground to dig for coal.",
        "choices": [
          "miner",
          "librarian",
          "lecturer",
          "mayor"
        ],
        "sourceRecordId": "v32-37"
      },
      {
        "id": "coverage-choice-364",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "disgust",
        "meaning": "使厭惡",
        "prompt": "The rotten food's smell filled us with _____, and we quickly turned away.",
        "answer": "disgust",
        "explanation": "disgust：使厭惡。完整句：The rotten food's smell filled us with disgust, and we quickly turned away.",
        "choices": [
          "disgust",
          "delight",
          "admiration",
          "contentment"
        ],
        "sourceRecordId": "v61-46a"
      },
      {
        "id": "choice-10",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "editor",
        "meaning": "編輯",
        "prompt": "The _____ corrected the spelling before the article was printed.",
        "answer": "editor",
        "explanation": "editor：編輯。完整句：The editor corrected the spelling before the article was printed.",
        "choices": [
          "editor",
          "athlete",
          "carpenter",
          "bridegroom"
        ],
        "sourceRecordId": "v31-46"
      },
      {
        "id": "coverage-choice-173",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "wizard",
        "meaning": "男巫；術士",
        "prompt": "The old _____ raised his magic staff and turned the stone into a bird.",
        "answer": "wizard",
        "explanation": "wizard：男巫；術士。完整句：The old wizard raised his magic staff and turned the stone into a bird.",
        "choices": [
          "wizard",
          "plumber",
          "banker",
          "accountant"
        ],
        "sourceRecordId": "v33-47"
      },
      {
        "id": "choice-4",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carpenter",
        "meaning": "木匠",
        "prompt": "We asked a _____ to build wooden shelves for our books.",
        "answer": "carpenter",
        "explanation": "carpenter：木匠。完整句：We asked a carpenter to build wooden shelves for our books.",
        "choices": [
          "carpenter",
          "composer",
          "detective",
          "consumer"
        ],
        "sourceRecordId": "v31-20"
      },
      {
        "id": "choice-6",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "detective",
        "meaning": "偵探",
        "prompt": "The _____ studied the clues to discover who stole the jewels.",
        "answer": "detective",
        "explanation": "detective：偵探。完整句：The detective studied the clues to discover who stole the jewels.",
        "choices": [
          "detective",
          "bride",
          "composer",
          "athlete"
        ],
        "sourceRecordId": "v31-43"
      },
      {
        "id": "choice-42",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "decade",
        "meaning": "十年",
        "prompt": "The museum opened ten years ago, so it has been here for a _____.",
        "answer": "decade",
        "explanation": "decade：十年。完整句：The museum opened ten years ago, so it has been here for a decade.",
        "choices": [
          "decade",
          "deadline",
          "chamber",
          "ditch"
        ],
        "sourceRecordId": "v41-24"
      },
      {
        "id": "coverage-choice-220",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "immediate",
        "meaning": "直接的；立刻的",
        "prompt": "The patient needs _____ care; waiting even a few minutes could be dangerous.",
        "answer": "immediate",
        "explanation": "immediate：直接的；立刻的。完整句：The patient needs immediate care; waiting even a few minutes could be dangerous.",
        "choices": [
          "immediate",
          "yearly",
          "tropical",
          "ethnic"
        ],
        "sourceRecordId": "v42-17"
      },
      {
        "id": "coverage-choice-357",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "desirable",
        "meaning": "合意的；值得擁有的",
        "prompt": "Clean air and safe streets are _____ features that many families want in a neighborhood.",
        "answer": "desirable",
        "explanation": "desirable：合意的；值得擁有的。完整句：Clean air and safe streets are desirable features that many families want in a neighborhood.",
        "choices": [
          "desirable",
          "awful",
          "depressing",
          "ashamed"
        ],
        "sourceRecordId": "v61-39"
      },
      {
        "id": "coverage-choice-341",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "cherish",
        "meaning": "珍惜",
        "prompt": "I will always _____ the happy memories of our time together and keep them close to my heart.",
        "answer": "cherish",
        "explanation": "cherish：珍惜。完整句：I will always cherish the happy memories of our time together and keep them close to my heart.",
        "choices": [
          "cherish",
          "annoy",
          "confuse",
          "discourage"
        ],
        "sourceRecordId": "v61-23"
      },
      {
        "id": "coverage-choice-181",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aside",
        "meaning": "在一旁；到（或向）一邊",
        "prompt": "She stepped _____ to let the wheelchair pass through the doorway.",
        "answer": "aside",
        "explanation": "aside：在一旁；到（或向）一邊。完整句：She stepped aside to let the wheelchair pass through the doorway.",
        "choices": [
          "aside",
          "beneath",
          "onto",
          "monthly"
        ],
        "sourceRecordId": "v41-08a"
      },
      {
        "id": "coverage-choice-197",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "district",
        "meaning": "地區；地域",
        "prompt": "This school _____ includes all the public schools in our part of the city.",
        "answer": "district",
        "explanation": "district：地區；地域。完整句：This school district includes all the public schools in our part of the city.",
        "choices": [
          "district",
          "era",
          "decade",
          "semester"
        ],
        "sourceRecordId": "v41-26"
      },
      {
        "id": "coverage-choice-38",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "addict",
        "meaning": "入迷的人；成癮的人",
        "prompt": "A gambling _____ may find it extremely difficult to stop betting even after losing money.",
        "answer": "addict",
        "explanation": "addict：入迷的人；成癮的人。完整句：A gambling addict may find it extremely difficult to stop betting even after losing money.",
        "choices": [
          "addict",
          "accountant",
          "ambassador",
          "carpenter"
        ],
        "sourceRecordId": "v31-02"
      },
      {
        "id": "coverage-choice-273",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "field",
        "meaning": "戶外的運動場地",
        "prompt": "The school football team practices on the grassy sports _____ behind the classrooms.",
        "answer": "field",
        "explanation": "field：戶外的運動場地。完整句：The school football team practices on the grassy sports field behind the classrooms.",
        "choices": [
          "field",
          "studio",
          "tomb",
          "garage"
        ],
        "sourceRecordId": "v43-26x2"
      },
      {
        "id": "coverage-choice-243",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "native",
        "meaning": "本地的；土生土長的",
        "prompt": "This _____ plant has grown naturally on the island for thousands of years.",
        "answer": "native",
        "explanation": "native：本地的；土生土長的。完整句：This native plant has grown naturally on the island for thousands of years.",
        "choices": [
          "native",
          "hourly",
          "casual",
          "atomic"
        ],
        "sourceRecordId": "v42-38a"
      },
      {
        "id": "coverage-choice-55",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "cleaner",
        "meaning": "清潔劑",
        "prompt": "Do not drink this liquid _____; it is used for washing floors.",
        "answer": "cleaner",
        "explanation": "cleaner：清潔劑。完整句：Do not drink this liquid cleaner; it is used for washing floors.",
        "choices": [
          "cleaner",
          "carrier",
          "controller",
          "composer"
        ],
        "sourceRecordId": "v31-25b"
      },
      {
        "id": "coverage-choice-182",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "avenue",
        "meaning": "（林蔭）大道",
        "prompt": "The broad, tree-lined _____ has two lanes of traffic in each direction.",
        "answer": "avenue",
        "explanation": "avenue：（林蔭）大道。完整句：The broad, tree-lined avenue has two lanes of traffic in each direction.",
        "choices": [
          "avenue",
          "hallway",
          "alley",
          "passage"
        ],
        "sourceRecordId": "v41-09"
      },
      {
        "id": "coverage-choice-118",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "navy",
        "meaning": "海軍",
        "prompt": "She joined the _____ to serve aboard her country's military ships.",
        "answer": "navy",
        "explanation": "navy：海軍。完整句：She joined the navy to serve aboard her country's military ships.",
        "choices": [
          "navy",
          "nursery",
          "gallery",
          "hive"
        ],
        "sourceRecordId": "v32-41"
      },
      {
        "id": "coverage-choice-139",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "politician",
        "meaning": "政治人物；政客",
        "prompt": "The _____ campaigned for votes and promised to improve public transport if elected.",
        "answer": "politician",
        "explanation": "politician：政治人物；政客。完整句：The politician campaigned for votes and promised to improve public transport if elected.",
        "choices": [
          "politician",
          "physicist",
          "plumber",
          "tailor"
        ],
        "sourceRecordId": "v33-10"
      },
      {
        "id": "coverage-choice-304",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "cluster",
        "meaning": "一群同類的人或動物",
        "prompt": "A tight _____ of stars appeared close together in the telescope.",
        "answer": "cluster",
        "explanation": "cluster：一群同類的人或動物。完整句：A tight cluster of stars appeared close together in the telescope.",
        "choices": [
          "cluster",
          "herd",
          "flock",
          "pack"
        ],
        "sourceRecordId": "v5-13x5"
      },
      {
        "id": "coverage-choice-329",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "appeal",
        "meaning": "懇求",
        "prompt": "The charity made an urgent _____ for donations to help families after the flood.",
        "answer": "appeal",
        "explanation": "appeal：懇求。完整句：The charity made an urgent appeal for donations to help families after the flood.",
        "choices": [
          "appeal",
          "complaint",
          "confusion",
          "consequence"
        ],
        "sourceRecordId": "v61-10a"
      },
      {
        "id": "coverage-choice-257",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "passage",
        "meaning": "通道",
        "prompt": "A narrow _____ connects the two rooms and allows people to walk between them.",
        "answer": "passage",
        "explanation": "passage：通道。完整句：A narrow passage connects the two rooms and allows people to walk between them.",
        "choices": [
          "passage",
          "gallery",
          "cafeteria",
          "basement"
        ],
        "sourceRecordId": "v43-11a"
      },
      {
        "id": "coverage-choice-44",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "athletic",
        "meaning": "運動的；體育的",
        "prompt": "His _____ ability allows him to excel at running, jumping, and swimming.",
        "answer": "athletic",
        "explanation": "athletic：運動的；體育的。完整句：His athletic ability allows him to excel at running, jumping, and swimming.",
        "choices": [
          "athletic",
          "colonial",
          "monthly",
          "atomic"
        ],
        "sourceRecordId": "v31-11a"
      },
      {
        "id": "coverage-choice-225",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "indoors",
        "meaning": "在室內",
        "prompt": "Because of the thunderstorm, we stayed _____ instead of going into the garden.",
        "answer": "indoors",
        "explanation": "indoors：在室內。完整句：Because of the thunderstorm, we stayed indoors instead of going into the garden.",
        "choices": [
          "indoors",
          "outdoors",
          "overseas",
          "yearly"
        ],
        "sourceRecordId": "v42-19"
      },
      {
        "id": "coverage-choice-95",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "inspector",
        "meaning": "檢查者",
        "prompt": "The safety _____ examined the elevator to check whether it met the rules.",
        "answer": "inspector",
        "explanation": "inspector：檢查者。完整句：The safety inspector examined the elevator to check whether it met the rules.",
        "choices": [
          "inspector",
          "novelist",
          "infant",
          "magician"
        ],
        "sourceRecordId": "v32-15"
      },
      {
        "id": "coverage-choice-111",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanical",
        "meaning": "機械的；力學的",
        "prompt": "The car could not start because of a _____ problem with its engine.",
        "answer": "mechanical",
        "explanation": "mechanical：機械的；力學的。完整句：The car could not start because of a mechanical problem with its engine.",
        "choices": [
          "mechanical",
          "ethnic",
          "tropical",
          "weekly"
        ],
        "sourceRecordId": "v32-33x4"
      },
      {
        "id": "coverage-choice-152",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "scientist",
        "meaning": "科學家",
        "prompt": "The _____ tested the theory by conducting carefully controlled experiments.",
        "answer": "scientist",
        "explanation": "scientist：科學家。完整句：The scientist tested the theory by conducting carefully controlled experiments.",
        "choices": [
          "scientist",
          "clown",
          "bride",
          "carpenter"
        ],
        "sourceRecordId": "v33-23"
      },
      {
        "id": "coverage-choice-101",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "liar",
        "meaning": "說謊的人；騙子",
        "prompt": "Nobody believed the _____ because he had told false stories so often.",
        "answer": "liar",
        "explanation": "liar：說謊的人；騙子。完整句：Nobody believed the liar because he had told false stories so often.",
        "choices": [
          "liar",
          "infant",
          "ancestor",
          "bridegroom"
        ],
        "sourceRecordId": "v32-22"
      },
      {
        "id": "coverage-choice-343",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "complaint",
        "meaning": "抱怨；申訴",
        "prompt": "The customer made a _____ about the broken chair and asked the shop to replace it.",
        "answer": "complaint",
        "explanation": "complaint：抱怨；申訴。完整句：The customer made a complaint about the broken chair and asked the shop to replace it.",
        "choices": [
          "complaint",
          "approval",
          "appreciation",
          "admiration"
        ],
        "sourceRecordId": "v61-26"
      },
      {
        "id": "coverage-choice-249",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "occasion",
        "meaning": "場合",
        "prompt": "The graduation ceremony was a special _____ for the whole family.",
        "answer": "occasion",
        "explanation": "occasion：場合。完整句：The graduation ceremony was a special occasion for the whole family.",
        "choices": [
          "occasion",
          "frequency",
          "territory",
          "location"
        ],
        "sourceRecordId": "v43-01a"
      },
      {
        "id": "coverage-choice-333",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "Her cheerful _____ toward challenges helps her keep trying when work gets difficult.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：Her cheerful attitude toward challenges helps her keep trying when work gets difficult.",
        "choices": [
          "attitude",
          "frequency",
          "territory",
          "technique"
        ],
        "sourceRecordId": "v61-15"
      },
      {
        "id": "coverage-choice-124",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "career",
        "meaning": "職涯；事業（長久從事的工作）",
        "prompt": "Over her thirty-year _____, she worked as a reporter, editor, and publisher.",
        "answer": "career",
        "explanation": "career：職涯；事業（長久從事的工作）。完整句：Over her thirty-year career, she worked as a reporter, editor, and publisher.",
        "choices": [
          "career",
          "semester",
          "deadline",
          "annuity"
        ],
        "sourceRecordId": "v32-44x4"
      },
      {
        "id": "coverage-choice-261",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "put off",
        "meaning": "延期；拖延（較口語）",
        "prompt": "We had to _____ the trip until a later date because of the storm.",
        "answer": "put off",
        "explanation": "put off：延期；拖延（較口語）。完整句：We had to put off the trip until a later date because of the storm.",
        "choices": [
          "put off",
          "locate",
          "confess",
          "lie"
        ],
        "sourceRecordId": "v43-12x3"
      },
      {
        "id": "coverage-choice-259",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "suspend",
        "meaning": "暫時中斷以待某種條件的實現",
        "prompt": "The school will _____ the bus service temporarily while the road is repaired.",
        "answer": "suspend",
        "explanation": "suspend：暫時中斷以待某種條件的實現。完整句：The school will suspend the bus service temporarily while the road is repaired.",
        "choices": [
          "suspend",
          "prolong",
          "admire",
          "cherish"
        ],
        "sourceRecordId": "v43-12x1"
      },
      {
        "id": "coverage-choice-332",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "approve",
        "meaning": "贊成；同意",
        "prompt": "The principal must _____ the plan before we are allowed to carry it out.",
        "answer": "approve",
        "explanation": "approve：贊成；同意。完整句：The principal must approve the plan before we are allowed to carry it out.",
        "choices": [
          "approve",
          "confess",
          "migrate",
          "boast"
        ],
        "sourceRecordId": "v61-13"
      },
      {
        "id": "coverage-choice-245",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "these days",
        "meaning": "現在；如今",
        "prompt": "People use electronic tickets _____, whereas paper tickets were common years ago.",
        "answer": "these days",
        "explanation": "these days：現在；如今。完整句：People use electronic tickets these days, whereas paper tickets were common years ago.",
        "choices": [
          "these days",
          "hourly",
          "overnight",
          "overseas"
        ],
        "sourceRecordId": "v42-40x1"
      },
      {
        "id": "coverage-choice-123",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "profession",
        "meaning": "職業（具有專業技術的工作）",
        "prompt": "Medicine is a _____ that requires years of specialized education and training.",
        "answer": "profession",
        "explanation": "profession：職業（具有專業技術的工作）。完整句：Medicine is a profession that requires years of specialized education and training.",
        "choices": [
          "profession",
          "territory",
          "mechanism",
          "publication"
        ],
        "sourceRecordId": "v32-44x3"
      },
      {
        "id": "coverage-choice-285",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tribe",
        "meaning": "部落",
        "prompt": "Members of the _____ share a language, traditions, and a common history.",
        "answer": "tribe",
        "explanation": "tribe：部落。完整句：Members of the tribe share a language, traditions, and a common history.",
        "choices": [
          "tribe",
          "flock",
          "herd",
          "school"
        ],
        "sourceRecordId": "v43-36"
      },
      {
        "id": "coverage-choice-258",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postponement",
        "meaning": "延期",
        "prompt": "The _____ moved the concert from this Friday to next month.",
        "answer": "postponement",
        "explanation": "postponement：延期。完整句：The postponement moved the concert from this Friday to next month.",
        "choices": [
          "postponement",
          "curiosity",
          "rainfall",
          "amusement"
        ],
        "sourceRecordId": "v43-12x0"
      },
      {
        "id": "choice-1",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "accountant",
        "meaning": "會計師",
        "prompt": "The shop hired an _____ to check its income and expenses.",
        "answer": "accountant",
        "explanation": "accountant：會計師。完整句：The shop hired an accountant to check its income and expenses.",
        "choices": [
          "accountant",
          "composer",
          "athlete",
          "carpenter"
        ],
        "sourceRecordId": "v31-01"
      },
      {
        "id": "coverage-choice-87",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "immigration",
        "meaning": "（由境外移入的）移民；移居",
        "prompt": "The report on _____ describes people coming from abroad to settle in this country.",
        "answer": "immigration",
        "explanation": "immigration：（由境外移入的）移民；移居。完整句：The report on immigration describes people coming from abroad to settle in this country.",
        "choices": [
          "immigration",
          "emigration",
          "rainfall",
          "amusement"
        ],
        "sourceRecordId": "v32-13x1"
      },
      {
        "id": "coverage-choice-184",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "beneath",
        "meaning": "在……下面；到……下面",
        "prompt": "The cat was hiding _____ the table, directly under its wooden top.",
        "answer": "beneath",
        "explanation": "beneath：在……下面；到……下面。完整句：The cat was hiding beneath the table, directly under its wooden top.",
        "choices": [
          "beneath",
          "onto",
          "aside",
          "opposite"
        ],
        "sourceRecordId": "v41-12a"
      },
      {
        "id": "coverage-choice-295",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "countable",
        "meaning": "可數的",
        "prompt": "The noun \"chair\" is _____ because we can say one chair or two chairs.",
        "answer": "countable",
        "explanation": "countable：可數的。完整句：The noun \"chair\" is countable because we can say one chair or two chairs.",
        "choices": [
          "countable",
          "atomic",
          "ethnic",
          "tropical"
        ],
        "sourceRecordId": "v5-07"
      },
      {
        "id": "coverage-choice-279",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "surroundings",
        "meaning": "環境",
        "prompt": "The hotel is comfortable, and its peaceful _____ include woods and a lake.",
        "answer": "surroundings",
        "explanation": "surroundings：環境。完整句：The hotel is comfortable, and its peaceful surroundings include woods and a lake.",
        "choices": [
          "surroundings",
          "percent",
          "calorie",
          "comma"
        ],
        "sourceRecordId": "v43-30"
      },
      {
        "id": "choice-67",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "palace",
        "meaning": "宮殿",
        "prompt": "The king welcomed his guests into the royal _____.",
        "answer": "palace",
        "explanation": "palace：宮殿。完整句：The king welcomed his guests into the royal palace.",
        "choices": [
          "palace",
          "tunnel",
          "suburb",
          "pub"
        ],
        "sourceRecordId": "v43-10"
      },
      {
        "id": "coverage-choice-73",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "emperor",
        "meaning": "皇帝",
        "prompt": "The _____ ruled a vast empire that included many different peoples.",
        "answer": "emperor",
        "explanation": "emperor：皇帝。完整句：The emperor ruled a vast empire that included many different peoples.",
        "choices": [
          "emperor",
          "infant",
          "librarian",
          "miner"
        ],
        "sourceRecordId": "v32-01"
      },
      {
        "id": "coverage-choice-172",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "witch",
        "meaning": "女巫",
        "prompt": "In the fairy tale, the wicked _____ cast a spell on the princess.",
        "answer": "witch",
        "explanation": "witch：女巫。完整句：In the fairy tale, the wicked witch cast a spell on the princess.",
        "choices": [
          "witch",
          "pediatrician",
          "plumber",
          "banker"
        ],
        "sourceRecordId": "v33-46"
      },
      {
        "id": "coverage-choice-41",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "ancestor",
        "meaning": "祖先",
        "prompt": "This family tree shows an _____ who lived three hundred years before I was born.",
        "answer": "ancestor",
        "explanation": "ancestor：祖先。完整句：This family tree shows an ancestor who lived three hundred years before I was born.",
        "choices": [
          "ancestor",
          "colleague",
          "infant",
          "applicant"
        ],
        "sourceRecordId": "v31-06"
      },
      {
        "id": "coverage-choice-57",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "clown",
        "meaning": "小丑",
        "prompt": "The circus _____ wore a red nose and made the children laugh with silly tricks.",
        "answer": "clown",
        "explanation": "clown：小丑。完整句：The circus clown wore a red nose and made the children laugh with silly tricks.",
        "choices": [
          "clown",
          "accountant",
          "banker",
          "ambassador"
        ],
        "sourceRecordId": "v31-27"
      },
      {
        "id": "choice-47",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "downtown",
        "meaning": "市中心的",
        "prompt": "We took a bus _____ to visit the shops in the city center.",
        "answer": "downtown",
        "explanation": "downtown：市中心的。完整句：We took a bus downtown to visit the shops in the city center.",
        "choices": [
          "downtown",
          "forever",
          "barely",
          "beneath"
        ],
        "sourceRecordId": "v41-28a"
      },
      {
        "id": "coverage-choice-208",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "frequent",
        "meaning": "頻繁的",
        "prompt": "Her _____ visits mean that we see her several times every week.",
        "answer": "frequent",
        "explanation": "frequent：頻繁的。完整句：Her frequent visits mean that we see her several times every week.",
        "choices": [
          "frequent",
          "atomic",
          "imperial",
          "ethnic"
        ],
        "sourceRecordId": "v42-03"
      },
      {
        "id": "coverage-choice-171",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "voter",
        "meaning": "投票人；表決者；選民",
        "prompt": "Each _____ marked a ballot to choose the next president.",
        "answer": "voter",
        "explanation": "voter：投票人；表決者；選民。完整句：Each voter marked a ballot to choose the next president.",
        "choices": [
          "voter",
          "infant",
          "ancestor",
          "emperor"
        ],
        "sourceRecordId": "v33-45"
      },
      {
        "id": "choice-74",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "herd",
        "meaning": "獸群",
        "prompt": "A _____ of cattle was grazing in the field.",
        "answer": "herd",
        "explanation": "herd：獸群。完整句：A herd of cattle was grazing in the field.",
        "choices": [
          "herd",
          "slice",
          "comma",
          "gallon"
        ],
        "sourceRecordId": "v5-13a"
      },
      {
        "id": "coverage-choice-185",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "casual",
        "meaning": "偶然的；意外的",
        "prompt": "You may wear _____ clothes such as jeans and a T-shirt to the picnic.",
        "answer": "casual",
        "explanation": "casual：偶然的；意外的。完整句：You may wear casual clothes such as jeans and a T-shirt to the picnic.",
        "choices": [
          "casual",
          "atomic",
          "imperial",
          "ethnic"
        ],
        "sourceRecordId": "v41-15a"
      },
      {
        "id": "coverage-choice-322",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "agreeable",
        "meaning": "令人愉快的；宜人的",
        "prompt": "We had an _____ afternoon: the company was pleasant and everyone got along well.",
        "answer": "agreeable",
        "explanation": "agreeable：令人愉快的；宜人的。完整句：We had an agreeable afternoon: the company was pleasant and everyone got along well.",
        "choices": [
          "agreeable",
          "awful",
          "depressing",
          "desperate"
        ],
        "sourceRecordId": "v61-04"
      },
      {
        "id": "coverage-choice-229",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "kingdom",
        "meaning": "王國",
        "prompt": "The _____ was ruled by a king who inherited the throne from his father.",
        "answer": "kingdom",
        "explanation": "kingdom：王國。完整句：The kingdom was ruled by a king who inherited the throne from his father.",
        "choices": [
          "kingdom",
          "colony",
          "district",
          "suburb"
        ],
        "sourceRecordId": "v42-24"
      },
      {
        "id": "choice-75",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "flock",
        "meaning": "鳥群；羊群；（同類人的）一大群",
        "prompt": "A _____ of birds rose from the lake together.",
        "answer": "flock",
        "explanation": "flock：鳥群；羊群；（同類人的）一大群。完整句：A flock of birds rose from the lake together.",
        "choices": [
          "flock",
          "dime",
          "gallon",
          "slice"
        ],
        "sourceRecordId": "v5-13x1"
      },
      {
        "id": "coverage-choice-180",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "apart",
        "meaning": "相距",
        "prompt": "Move the two chairs farther _____ so there is more space between them.",
        "answer": "apart",
        "explanation": "apart：相距。完整句：Move the two chairs farther apart so there is more space between them.",
        "choices": [
          "apart",
          "beneath",
          "onto",
          "meanwhile"
        ],
        "sourceRecordId": "v41-06a"
      },
      {
        "id": "coverage-choice-99",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "labor",
        "meaning": "勞動",
        "prompt": "Building the stone wall required weeks of hard physical _____.",
        "answer": "labor",
        "explanation": "labor：勞動。完整句：Building the stone wall required weeks of hard physical labor.",
        "choices": [
          "labor",
          "amusement",
          "curiosity",
          "approval"
        ],
        "sourceRecordId": "v32-20a"
      },
      {
        "id": "coverage-choice-293",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "bundle",
        "meaning": "束；捆",
        "prompt": "He tied the sticks together with string to make a neat _____.",
        "answer": "bundle",
        "explanation": "bundle：束；捆。完整句：He tied the sticks together with string to make a neat bundle.",
        "choices": [
          "bundle",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-04a"
      },
      {
        "id": "coverage-choice-281",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "conditions",
        "meaning": "工作或居住環境的環境品質；條件",
        "prompt": "The workers demanded better working _____, including safer rooms and shorter hours.",
        "answer": "conditions",
        "explanation": "conditions：工作或居住環境的環境品質；條件。完整句：The workers demanded better working conditions, including safer rooms and shorter hours.",
        "choices": [
          "conditions",
          "percentages",
          "calories",
          "anniversaries"
        ],
        "sourceRecordId": "v43-30x2"
      },
      {
        "id": "coverage-choice-324",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "amazement",
        "meaning": "驚訝",
        "prompt": "To our _____, the tiny child solved a puzzle that none of the adults could finish.",
        "answer": "amazement",
        "explanation": "amazement：驚訝。完整句：To our amazement, the tiny child solved a puzzle that none of the adults could finish.",
        "choices": [
          "amazement",
          "approval",
          "rainfall",
          "annuity"
        ],
        "sourceRecordId": "v61-05x1"
      },
      {
        "id": "choice-41",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deadline",
        "meaning": "截止日期",
        "prompt": "Friday is the _____; reports sent after that day will be late.",
        "answer": "deadline",
        "explanation": "deadline：截止日期。完整句：Friday is the deadline; reports sent after that day will be late.",
        "choices": [
          "deadline",
          "decade",
          "county",
          "curve"
        ],
        "sourceRecordId": "v41-23"
      },
      {
        "id": "coverage-choice-140",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "producer",
        "meaning": "生產者；製造商；製作人",
        "prompt": "The film's _____ arranged the money and organized the team needed to make the movie.",
        "answer": "producer",
        "explanation": "producer：生產者；製造商；製作人。完整句：The film's producer arranged the money and organized the team needed to make the movie.",
        "choices": [
          "producer",
          "plumber",
          "pilot",
          "shepherd"
        ],
        "sourceRecordId": "v33-11"
      },
      {
        "id": "coverage-choice-361",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "disappointment",
        "meaning": "失望；沮喪",
        "prompt": "Her _____ was clear when she learned she had not won the prize she wanted.",
        "answer": "disappointment",
        "explanation": "disappointment：失望；沮喪。完整句：Her disappointment was clear when she learned she had not won the prize she wanted.",
        "choices": [
          "disappointment",
          "delight",
          "contentment",
          "amusement"
        ],
        "sourceRecordId": "v61-44x1"
      },
      {
        "id": "coverage-choice-253",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "outdoor",
        "meaning": "戶外的",
        "prompt": "The _____ concert took place in an open park under the stars.",
        "answer": "outdoor",
        "explanation": "outdoor：戶外的。完整句：The outdoor concert took place in an open park under the stars.",
        "choices": [
          "outdoor",
          "indoor",
          "atomic",
          "ethnic"
        ],
        "sourceRecordId": "v43-05"
      },
      {
        "id": "coverage-choice-331",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "approval",
        "meaning": "許可；同意",
        "prompt": "You need your parents' _____ before you can join the overnight trip.",
        "answer": "approval",
        "explanation": "approval：許可；同意。完整句：You need your parents' approval before you can join the overnight trip.",
        "choices": [
          "approval",
          "disgust",
          "confusion",
          "rainfall"
        ],
        "sourceRecordId": "v61-12"
      },
      {
        "id": "choice-45",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "annual",
        "meaning": "每年的；年度的",
        "prompt": "Our _____ sports day takes place once every year.",
        "answer": "annual",
        "explanation": "annual：每年的；年度的。完整句：Our annual sports day takes place once every year.",
        "choices": [
          "annual",
          "casual",
          "colonial",
          "imperial"
        ],
        "sourceRecordId": "v41-05"
      }
    ]
  },
  {
    "id": "midterm-9-choice",
    "title": "模擬考 9－選擇題",
    "questions": [
      {
        "id": "coverage-choice-189",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colonize",
        "meaning": "殖民",
        "prompt": "The powerful kingdom sent settlers to _____ the island and bring it under its rule.",
        "answer": "colonize",
        "explanation": "colonize：殖民。完整句：The powerful kingdom sent settlers to colonize the island and bring it under its rule.",
        "choices": [
          "colonize",
          "confess",
          "admire",
          "migrate"
        ],
        "sourceRecordId": "v41-19x1"
      },
      {
        "id": "coverage-choice-339",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "bore",
        "meaning": "使厭煩",
        "prompt": "Repeating the same dull story will _____ listeners and make them lose interest.",
        "answer": "bore",
        "explanation": "bore：使厭煩。完整句：Repeating the same dull story will bore listeners and make them lose interest.",
        "choices": [
          "bore",
          "amuse",
          "amaze",
          "delight"
        ],
        "sourceRecordId": "v61-21"
      },
      {
        "id": "choice-73",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "bunch",
        "meaning": "串；束；群",
        "prompt": "Mum bought a _____ of grapes still attached to the same stem.",
        "answer": "bunch",
        "explanation": "bunch：串；束；群。完整句：Mum bought a bunch of grapes still attached to the same stem.",
        "choices": [
          "bunch",
          "herd",
          "gallon",
          "comma"
        ],
        "sourceRecordId": "v5-03"
      },
      {
        "id": "coverage-choice-218",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hometown",
        "meaning": "家鄉",
        "prompt": "He showed us his _____, the town where he grew up.",
        "answer": "hometown",
        "explanation": "hometown：家鄉。完整句：He showed us his hometown, the town where he grew up.",
        "choices": [
          "hometown",
          "hive",
          "garage",
          "greenhouse"
        ],
        "sourceRecordId": "v42-15"
      },
      {
        "id": "coverage-choice-270",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "someday",
        "meaning": "將來有一天",
        "prompt": "I hope to travel to the moon _____, at an unknown time in the future.",
        "answer": "someday",
        "explanation": "someday：將來有一天。完整句：I hope to travel to the moon someday, at an unknown time in the future.",
        "choices": [
          "someday",
          "yearly",
          "beneath",
          "onto"
        ],
        "sourceRecordId": "v43-24"
      },
      {
        "id": "coverage-choice-65",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "creator",
        "meaning": "創造者；創作者",
        "prompt": "The _____ of the game designed its characters and invented its rules.",
        "answer": "creator",
        "explanation": "creator：創造者；創作者。完整句：The creator of the game designed its characters and invented its rules.",
        "choices": [
          "creator",
          "infant",
          "ancestor",
          "passenger"
        ],
        "sourceRecordId": "v31-38"
      },
      {
        "id": "coverage-choice-264",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "pub",
        "meaning": "酒館；酒吧",
        "prompt": "The adults went to a local _____ to drink beer and chat after work.",
        "answer": "pub",
        "explanation": "pub：酒館；酒吧。完整句：The adults went to a local pub to drink beer and chat after work.",
        "choices": [
          "pub",
          "nursery",
          "hive",
          "observatory"
        ],
        "sourceRecordId": "v43-14"
      },
      {
        "id": "coverage-choice-100",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lecturer",
        "meaning": "演講者",
        "prompt": "The university _____ spoke to a hall full of students about ancient history.",
        "answer": "lecturer",
        "explanation": "lecturer：演講者。完整句：The university lecturer spoke to a hall full of students about ancient history.",
        "choices": [
          "lecturer",
          "miner",
          "infant",
          "lifeguard"
        ],
        "sourceRecordId": "v32-21a"
      },
      {
        "id": "coverage-choice-112",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "merchant",
        "meaning": "商人",
        "prompt": "The _____ buys goods from distant ports and sells them in the market.",
        "answer": "merchant",
        "explanation": "merchant：商人。完整句：The merchant buys goods from distant ports and sells them in the market.",
        "choices": [
          "merchant",
          "infant",
          "ancestor",
          "monk"
        ],
        "sourceRecordId": "v32-34"
      },
      {
        "id": "coverage-choice-174",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "youngster",
        "meaning": "年輕人",
        "prompt": "The little _____ needed an adult's help to tie his shoes before kindergarten.",
        "answer": "youngster",
        "explanation": "youngster：年輕人。完整句：The little youngster needed an adult's help to tie his shoes before kindergarten.",
        "choices": [
          "youngster",
          "ancestor",
          "senior",
          "emperor"
        ],
        "sourceRecordId": "v33-48"
      },
      {
        "id": "coverage-choice-192",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colonization",
        "meaning": "殖民",
        "prompt": "The _____ of the island brought foreign settlers and outside political control.",
        "answer": "colonization",
        "explanation": "colonization：殖民。完整句：The colonization of the island brought foreign settlers and outside political control.",
        "choices": [
          "colonization",
          "rainfall",
          "amusement",
          "curiosity"
        ],
        "sourceRecordId": "v41-19x4"
      },
      {
        "id": "coverage-choice-202",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "era",
        "meaning": "時代",
        "prompt": "The invention marked the beginning of a new _____ in communication history.",
        "answer": "era",
        "explanation": "era：時代。完整句：The invention marked the beginning of a new era in communication history.",
        "choices": [
          "era",
          "deadline",
          "frequency",
          "annuity"
        ],
        "sourceRecordId": "v41-32"
      },
      {
        "id": "coverage-choice-210",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "generation",
        "meaning": "一代；世代",
        "prompt": "My grandparents belong to an older _____ than my parents.",
        "answer": "generation",
        "explanation": "generation：一代；世代。完整句：My grandparents belong to an older generation than my parents.",
        "choices": [
          "generation",
          "frequency",
          "territory",
          "immigration"
        ],
        "sourceRecordId": "v42-06a"
      },
      {
        "id": "coverage-choice-356",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "depressing",
        "meaning": "令人沮喪的",
        "prompt": "The empty houses and abandoned shops made the street a _____ sight that filled us with sadness.",
        "answer": "depressing",
        "explanation": "depressing：令人沮喪的。完整句：The empty houses and abandoned shops made the street a depressing sight that filled us with sadness.",
        "choices": [
          "depressing",
          "delightful",
          "agreeable",
          "admirable"
        ],
        "sourceRecordId": "v61-38x3"
      },
      {
        "id": "coverage-choice-237",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lie",
        "meaning": "lie/sit/stand + 介系詞 + 地點：位於",
        "prompt": "The two islands _____ just north of the coast, as the map shows.",
        "answer": "lie",
        "explanation": "lie：lie/sit/stand + 介系詞 + 地點：位於。完整句：The two islands lie just north of the coast, as the map shows.",
        "choices": [
          "lie",
          "publish",
          "confess",
          "boast"
        ],
        "sourceRecordId": "v42-31x3"
      },
      {
        "id": "coverage-choice-133",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "dermatologist",
        "meaning": "皮膚科醫師",
        "prompt": "The _____ examined the rash and prescribed a cream for her skin.",
        "answer": "dermatologist",
        "explanation": "dermatologist：皮膚科醫師。完整句：The dermatologist examined the rash and prescribed a cream for her skin.",
        "choices": [
          "dermatologist",
          "physicist",
          "plumber",
          "pilot"
        ],
        "sourceRecordId": "v33-05x3"
      },
      {
        "id": "coverage-choice-290",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "zone",
        "meaning": "（尤指有不同特徵或用途的）區域；地帶",
        "prompt": "Cars may not enter this pedestrian _____, an area reserved for people on foot.",
        "answer": "zone",
        "explanation": "zone：（尤指有不同特徵或用途的）區域；地帶。完整句：Cars may not enter this pedestrian zone, an area reserved for people on foot.",
        "choices": [
          "zone",
          "era",
          "decade",
          "semester"
        ],
        "sourceRecordId": "v43-43"
      },
      {
        "id": "coverage-choice-211",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "degenerate",
        "meaning": "（品質）下降；衰退",
        "prompt": "Without treatment, the illness may cause healthy cells to _____ and lose their normal function.",
        "answer": "degenerate",
        "explanation": "degenerate：（品質）下降；衰退。完整句：Without treatment, the illness may cause healthy cells to degenerate and lose their normal function.",
        "choices": [
          "degenerate",
          "publish",
          "admire",
          "represent"
        ],
        "sourceRecordId": "v42-06x1"
      },
      {
        "id": "choice-71",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tropical",
        "meaning": "熱帶的",
        "prompt": "Bananas grow well in the hot, wet weather of _____ regions.",
        "answer": "tropical",
        "explanation": "tropical：熱帶的。完整句：Bananas grow well in the hot, wet weather of tropical regions.",
        "choices": [
          "tropical",
          "weekly",
          "temporary",
          "previous"
        ],
        "sourceRecordId": "v43-37"
      },
      {
        "id": "choice-18",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "inventor",
        "meaning": "發明家",
        "prompt": "The _____ designed a machine that had never existed before.",
        "answer": "inventor",
        "explanation": "inventor：發明家。完整句：The inventor designed a machine that had never existed before.",
        "choices": [
          "inventor",
          "infant",
          "orphan",
          "follower"
        ],
        "sourceRecordId": "v32-17"
      },
      {
        "id": "coverage-choice-355",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "depressed",
        "meaning": "感到沮喪的",
        "prompt": "She felt _____ and deeply unhappy after losing contact with all her friends.",
        "answer": "depressed",
        "explanation": "depressed：感到沮喪的。完整句：She felt depressed and deeply unhappy after losing contact with all her friends.",
        "choices": [
          "depressed",
          "cheerful",
          "agreeable",
          "content"
        ],
        "sourceRecordId": "v61-38x2"
      },
      {
        "id": "coverage-choice-81",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "freshman",
        "meaning": "大一新生；高一新生",
        "prompt": "As a college _____, Amy is beginning her first year of university study.",
        "answer": "freshman",
        "explanation": "freshman：大一新生；高一新生。完整句：As a college freshman, Amy is beginning her first year of university study.",
        "choices": [
          "freshman",
          "emperor",
          "ancestor",
          "senior"
        ],
        "sourceRecordId": "v32-06"
      },
      {
        "id": "coverage-choice-326",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "amusement",
        "meaning": "娛樂；樂趣",
        "prompt": "The audience watched the comedian with great _____, laughing at every joke.",
        "answer": "amusement",
        "explanation": "amusement：娛樂；樂趣。完整句：The audience watched the comedian with great amusement, laughing at every joke.",
        "choices": [
          "amusement",
          "disgust",
          "anxiety",
          "depression"
        ],
        "sourceRecordId": "v61-06x1"
      },
      {
        "id": "coverage-choice-129",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "philosopher",
        "meaning": "哲學家",
        "prompt": "The _____ asks deep questions about truth, knowledge, and the meaning of life.",
        "answer": "philosopher",
        "explanation": "philosopher：哲學家。完整句：The philosopher asks deep questions about truth, knowledge, and the meaning of life.",
        "choices": [
          "philosopher",
          "plumber",
          "pilot",
          "tailor"
        ],
        "sourceRecordId": "v33-03"
      },
      {
        "id": "coverage-choice-234",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lifetime",
        "meaning": "一生；終身",
        "prompt": "During her long _____, she saw her village grow into a city.",
        "answer": "lifetime",
        "explanation": "lifetime：一生；終身。完整句：During her long lifetime, she saw her village grow into a city.",
        "choices": [
          "lifetime",
          "semester",
          "deadline",
          "frequency"
        ],
        "sourceRecordId": "v42-28"
      },
      {
        "id": "coverage-choice-119",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "nun",
        "meaning": "尼姑；修女",
        "prompt": "The Catholic _____ lives with other religious women and has taken vows.",
        "answer": "nun",
        "explanation": "nun：尼姑；修女。完整句：The Catholic nun lives with other religious women and has taken vows.",
        "choices": [
          "nun",
          "bridegroom",
          "emperor",
          "miner"
        ],
        "sourceRecordId": "v32-43"
      },
      {
        "id": "choice-48",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "campus",
        "meaning": "校園；校區",
        "prompt": "The university _____ includes classrooms, gardens, and student housing.",
        "answer": "campus",
        "explanation": "campus：校園；校區。完整句：The university campus includes classrooms, gardens, and student housing.",
        "choices": [
          "campus",
          "ditch",
          "curve",
          "deadline"
        ],
        "sourceRecordId": "v41-14"
      },
      {
        "id": "coverage-choice-159",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "technician",
        "meaning": "技術人員",
        "prompt": "A computer _____ repaired the damaged circuit board in our laptop.",
        "answer": "technician",
        "explanation": "technician：技術人員。完整句：A computer technician repaired the damaged circuit board in our laptop.",
        "choices": [
          "technician",
          "philosopher",
          "tailor",
          "shepherd"
        ],
        "sourceRecordId": "v33-33"
      },
      {
        "id": "coverage-choice-301",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "pack",
        "meaning": "獸群；狼群；一夥（負面涵義）",
        "prompt": "A _____ of wolves hunted together in the forest.",
        "answer": "pack",
        "explanation": "pack：獸群；狼群；一夥（負面涵義）。完整句：A pack of wolves hunted together in the forest.",
        "choices": [
          "pack",
          "flock",
          "school",
          "herd"
        ],
        "sourceRecordId": "v5-13x2"
      },
      {
        "id": "choice-8",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "applicant",
        "meaning": "申請者；應徵者",
        "prompt": "Each _____ must send a form before the job interview.",
        "answer": "applicant",
        "explanation": "applicant：申請者；應徵者。完整句：Each applicant must send a form before the job interview.",
        "choices": [
          "applicant",
          "ancestor",
          "infant",
          "bride"
        ],
        "sourceRecordId": "v31-08"
      },
      {
        "id": "coverage-choice-50",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "captain",
        "meaning": "隊長；船長；機長",
        "prompt": "The ship's _____ ordered the crew to prepare for the approaching storm.",
        "answer": "captain",
        "explanation": "captain：隊長；船長；機長。完整句：The ship's captain ordered the crew to prepare for the approaching storm.",
        "choices": [
          "captain",
          "passenger",
          "bride",
          "clown"
        ],
        "sourceRecordId": "v31-19"
      },
      {
        "id": "choice-57",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "monthly",
        "meaning": "每月的",
        "prompt": "The club's _____ meeting is held on the first Monday of each month.",
        "answer": "monthly",
        "explanation": "monthly：每月的。完整句：The club's monthly meeting is held on the first Monday of each month.",
        "choices": [
          "monthly",
          "hourly",
          "indoor",
          "global"
        ],
        "sourceRecordId": "v42-36a"
      },
      {
        "id": "coverage-choice-98",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "knight",
        "meaning": "騎士",
        "prompt": "The medieval _____ wore armor and rode a horse into battle for his king.",
        "answer": "knight",
        "explanation": "knight：騎士。完整句：The medieval knight wore armor and rode a horse into battle for his king.",
        "choices": [
          "knight",
          "librarian",
          "banker",
          "infant"
        ],
        "sourceRecordId": "v32-19a"
      },
      {
        "id": "coverage-choice-268",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "shortly",
        "meaning": "不久；馬上",
        "prompt": "The train will arrive _____, in just a few minutes.",
        "answer": "shortly",
        "explanation": "shortly：不久；馬上。完整句：The train will arrive shortly, in just a few minutes.",
        "choices": [
          "shortly",
          "yearly",
          "overseas",
          "beneath"
        ],
        "sourceRecordId": "v43-21"
      },
      {
        "id": "choice-34",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "twin",
        "meaning": "雙胞胎之一",
        "prompt": "My _____ brother and I were born on the same day to the same mother.",
        "answer": "twin",
        "explanation": "twin：雙胞胎之一。完整句：My twin brother and I were born on the same day to the same mother.",
        "choices": [
          "twin",
          "senior",
          "tourist",
          "scholar"
        ],
        "sourceRecordId": "v33-40"
      },
      {
        "id": "coverage-choice-318",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admirable",
        "meaning": "令人欽佩的",
        "prompt": "Her courage was _____; everyone respected her for helping others despite the danger.",
        "answer": "admirable",
        "explanation": "admirable：令人欽佩的。完整句：Her courage was admirable; everyone respected her for helping others despite the danger.",
        "choices": [
          "admirable",
          "awful",
          "ashamed",
          "depressing"
        ],
        "sourceRecordId": "v61-01"
      },
      {
        "id": "choice-78",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "kilometer",
        "meaning": "公里",
        "prompt": "The trail is one thousand meters, or one _____, long.",
        "answer": "kilometer",
        "explanation": "kilometer：公里。完整句：The trail is one thousand meters, or one kilometer, long.",
        "choices": [
          "kilometer",
          "penny",
          "ton",
          "pint"
        ],
        "sourceRecordId": "v5-14"
      },
      {
        "id": "choice-56",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "observatory",
        "meaning": "天文台；觀測站",
        "prompt": "Scientists use the large telescope at the _____ to study stars.",
        "answer": "observatory",
        "explanation": "observatory：天文台；觀測站。完整句：Scientists use the large telescope at the observatory to study stars.",
        "choices": [
          "observatory",
          "nursery",
          "mall",
          "garage"
        ],
        "sourceRecordId": "v42-25x3"
      },
      {
        "id": "choice-79",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "majority",
        "meaning": "（大）多數",
        "prompt": "Eighteen of the twenty students voted yes, so a clear _____ supported the plan.",
        "answer": "majority",
        "explanation": "majority：（大）多數。完整句：Eighteen of the twenty students voted yes, so a clear majority supported the plan.",
        "choices": [
          "majority",
          "parcel",
          "calorie",
          "comma"
        ],
        "sourceRecordId": "v5-15"
      },
      {
        "id": "coverage-choice-39",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "agent",
        "meaning": "經紀人；代理人",
        "prompt": "The actor's _____ negotiates contracts and finds acting jobs for him.",
        "answer": "agent",
        "explanation": "agent：經紀人；代理人。完整句：The actor's agent negotiates contracts and finds acting jobs for him.",
        "choices": [
          "agent",
          "ancestor",
          "infant",
          "burglar"
        ],
        "sourceRecordId": "v31-03"
      },
      {
        "id": "coverage-choice-337",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "awful",
        "meaning": "糟糕的",
        "prompt": "The soup tasted _____, so bad that nobody could finish it.",
        "answer": "awful",
        "explanation": "awful：糟糕的。完整句：The soup tasted awful, so bad that nobody could finish it.",
        "choices": [
          "awful",
          "agreeable",
          "delightful",
          "desirable"
        ],
        "sourceRecordId": "v61-19"
      },
      {
        "id": "coverage-choice-201",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "entry",
        "meaning": "進入；加入",
        "prompt": "The sign says that _____ is forbidden, so visitors cannot go inside.",
        "answer": "entry",
        "explanation": "entry：進入；加入。完整句：The sign says that entry is forbidden, so visitors cannot go inside.",
        "choices": [
          "entry",
          "frequency",
          "postponement",
          "delay"
        ],
        "sourceRecordId": "v41-31a"
      },
      {
        "id": "coverage-choice-47",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "bridegroom",
        "meaning": "新郎",
        "prompt": "The _____ stood beside his bride as they exchanged wedding rings.",
        "answer": "bridegroom",
        "explanation": "bridegroom：新郎。完整句：The bridegroom stood beside his bride as they exchanged wedding rings.",
        "choices": [
          "bridegroom",
          "burglar",
          "ancestor",
          "infant"
        ],
        "sourceRecordId": "v31-15"
      },
      {
        "id": "coverage-choice-321",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admiring",
        "meaning": "讚賞的；欽佩的",
        "prompt": "The students gave the brave firefighter _____ looks that showed their respect.",
        "answer": "admiring",
        "explanation": "admiring：讚賞的；欽佩的。完整句：The students gave the brave firefighter admiring looks that showed their respect.",
        "choices": [
          "admiring",
          "atomic",
          "tropical",
          "weekly"
        ],
        "sourceRecordId": "v61-03x2"
      },
      {
        "id": "coverage-choice-178",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "afterward(s)",
        "meaning": "後來",
        "prompt": "We ate dinner first and washed the dishes _____.",
        "answer": "afterward",
        "explanation": "afterward(s)：後來。完整句：We ate dinner first and washed the dishes afterward.",
        "choices": [
          "afterward",
          "beneath",
          "onto",
          "barely"
        ],
        "sourceRecordId": "v41-02"
      },
      {
        "id": "coverage-choice-115",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "minister",
        "meaning": "部長；牧師",
        "prompt": "The education _____ announced the government's new school policy.",
        "answer": "minister",
        "explanation": "minister：部長；牧師。完整句：The education minister announced the government's new school policy.",
        "choices": [
          "minister",
          "miner",
          "infant",
          "magician"
        ],
        "sourceRecordId": "v32-38"
      },
      {
        "id": "coverage-choice-275",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "gym / gymnasium",
        "meaning": "體育館；健身房（提供室內運動器材）",
        "prompt": "Students exercise on the equipment inside the school _____.",
        "answer": "gymnasium",
        "explanation": "gym / gymnasium：體育館；健身房（提供室內運動器材）。完整句：Students exercise on the equipment inside the school gymnasium.",
        "choices": [
          "gymnasium",
          "nursery",
          "greenhouse",
          "harbor"
        ],
        "sourceRecordId": "v43-26x4"
      },
      {
        "id": "choice-27",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tailor",
        "meaning": "裁縫師",
        "prompt": "The _____ measured my waist before making a pair of trousers.",
        "answer": "tailor",
        "explanation": "tailor：裁縫師。完整句：The tailor measured my waist before making a pair of trousers.",
        "choices": [
          "tailor",
          "pilot",
          "physicist",
          "shepherd"
        ],
        "sourceRecordId": "v33-32"
      },
      {
        "id": "coverage-choice-125",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "calling",
        "meaning": "職志；天職（尤指內心渴望能終生從事之志）",
        "prompt": "He felt a strong _____ to serve others and decided to become a teacher.",
        "answer": "calling",
        "explanation": "calling：職志；天職（尤指內心渴望能終生從事之志）。完整句：He felt a strong calling to serve others and decided to become a teacher.",
        "choices": [
          "calling",
          "rainfall",
          "confusion",
          "disgust"
        ],
        "sourceRecordId": "v32-44x5"
      },
      {
        "id": "coverage-choice-335",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "attraction",
        "meaning": "吸引（力）",
        "prompt": "The giant aquarium is the town's main tourist _____, drawing many visitors.",
        "answer": "attraction",
        "explanation": "attraction：吸引（力）。完整句：The giant aquarium is the town's main tourist attraction, drawing many visitors.",
        "choices": [
          "attraction",
          "confusion",
          "disgust",
          "depression"
        ],
        "sourceRecordId": "v61-17a"
      },
      {
        "id": "coverage-choice-53",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "citizen",
        "meaning": "公民；市民",
        "prompt": "As a _____ of this country, he has the right to vote in its elections.",
        "answer": "citizen",
        "explanation": "citizen：公民；市民。完整句：As a citizen of this country, he has the right to vote in its elections.",
        "choices": [
          "citizen",
          "tourist",
          "refugee",
          "infant"
        ],
        "sourceRecordId": "v31-23"
      },
      {
        "id": "coverage-choice-195",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "curve",
        "meaning": "（道路）轉彎處；曲線",
        "prompt": "Slow down at the sharp _____ where the straight road bends to the left.",
        "answer": "curve",
        "explanation": "curve：（道路）轉彎處；曲線。完整句：Slow down at the sharp curve where the straight road bends to the left.",
        "choices": [
          "curve",
          "anniversary",
          "deadline",
          "annuity"
        ],
        "sourceRecordId": "v41-21"
      },
      {
        "id": "coverage-choice-223",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "prompt",
        "meaning": "立即的；迅速的",
        "prompt": "Thank you for your _____ reply; you answered within just a few minutes.",
        "answer": "prompt",
        "explanation": "prompt：立即的；迅速的。完整句：Thank you for your prompt reply; you answered within just a few minutes.",
        "choices": [
          "prompt",
          "tropical",
          "ethnic",
          "imperial"
        ],
        "sourceRecordId": "v42-17x3"
      },
      {
        "id": "coverage-choice-298",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "gallon",
        "meaning": "加侖（液量單位）",
        "prompt": "A _____ is a unit for measuring liquid volume, often used for fuel in the United States.",
        "answer": "gallon",
        "explanation": "gallon：加侖（液量單位）。完整句：A gallon is a unit for measuring liquid volume, often used for fuel in the United States.",
        "choices": [
          "gallon",
          "kilometer",
          "calorie",
          "ton"
        ],
        "sourceRecordId": "v5-10"
      },
      {
        "id": "choice-26",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "plumber",
        "meaning": "水電工；水管瓦斯工人",
        "prompt": "Water was leaking under the sink, so we called a _____.",
        "answer": "plumber",
        "explanation": "plumber：水電工；水管瓦斯工人。完整句：Water was leaking under the sink, so we called a plumber.",
        "choices": [
          "plumber",
          "pilot",
          "philosopher",
          "photographer"
        ],
        "sourceRecordId": "v33-09"
      },
      {
        "id": "coverage-choice-83",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "guardian",
        "meaning": "監護人；保護人",
        "prompt": "Because her parents had died, her aunt became her legal _____.",
        "answer": "guardian",
        "explanation": "guardian：監護人；保護人。完整句：Because her parents had died, her aunt became her legal guardian.",
        "choices": [
          "guardian",
          "infant",
          "ancestor",
          "passenger"
        ],
        "sourceRecordId": "v32-08"
      },
      {
        "id": "coverage-choice-67",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "critic",
        "meaning": "評論家；批評者",
        "prompt": "The film _____ wrote a review explaining why the movie was disappointing.",
        "answer": "critic",
        "explanation": "critic：評論家；批評者。完整句：The film critic wrote a review explaining why the movie was disappointing.",
        "choices": [
          "critic",
          "plumber",
          "miner",
          "carpenter"
        ],
        "sourceRecordId": "v31-40"
      },
      {
        "id": "coverage-choice-291",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "atom",
        "meaning": "原子",
        "prompt": "An _____ is a tiny unit of an element, made of a nucleus and electrons.",
        "answer": "atom",
        "explanation": "atom：原子。完整句：An atom is a tiny unit of an element, made of a nucleus and electrons.",
        "choices": [
          "atom",
          "parcel",
          "comma",
          "gallon"
        ],
        "sourceRecordId": "v5-01"
      },
      {
        "id": "coverage-choice-63",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "controller",
        "meaning": "控制器；管理員",
        "prompt": "The air traffic _____ guided pilots so their planes could land safely.",
        "answer": "controller",
        "explanation": "controller：控制器；管理員。完整句：The air traffic controller guided pilots so their planes could land safely.",
        "choices": [
          "controller",
          "carpenter",
          "tailor",
          "novelist"
        ],
        "sourceRecordId": "v31-36"
      },
      {
        "id": "coverage-choice-338",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "boast",
        "meaning": "自誇；誇耀",
        "prompt": "He likes to _____ about his wealth, always telling people how rich he is.",
        "answer": "boast",
        "explanation": "boast：自誇；誇耀。完整句：He likes to boast about his wealth, always telling people how rich he is.",
        "choices": [
          "boast",
          "confess",
          "migrate",
          "cherish"
        ],
        "sourceRecordId": "v61-20a"
      },
      {
        "id": "choice-21",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "novelist",
        "meaning": "小說家",
        "prompt": "The _____ spent two years writing a story about a lost city.",
        "answer": "novelist",
        "explanation": "novelist：小說家。完整句：The novelist spent two years writing a story about a lost city.",
        "choices": [
          "novelist",
          "mechanic",
          "lifeguard",
          "hairdresser"
        ],
        "sourceRecordId": "v32-42"
      },
      {
        "id": "coverage-choice-354",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "depress",
        "meaning": "使沮喪",
        "prompt": "The sad news may _____ her and make her feel very unhappy.",
        "answer": "depress",
        "explanation": "depress：使沮喪。完整句：The sad news may depress her and make her feel very unhappy.",
        "choices": [
          "depress",
          "amuse",
          "delight",
          "comfort"
        ],
        "sourceRecordId": "v61-38x1"
      },
      {
        "id": "coverage-choice-228",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "jail",
        "meaning": "監獄；監禁",
        "prompt": "The thief was locked in _____ after the court sentenced him.",
        "answer": "jail",
        "explanation": "jail：監獄；監禁。完整句：The thief was locked in jail after the court sentenced him.",
        "choices": [
          "jail",
          "nursery",
          "greenhouse",
          "gallery"
        ],
        "sourceRecordId": "v42-22a"
      },
      {
        "id": "coverage-choice-91",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "emigrate",
        "meaning": "由境內外移；移居出境",
        "prompt": "Many families decided to _____ from their homeland to seek a new life abroad.",
        "answer": "emigrate",
        "explanation": "emigrate：由境內外移；移居出境。完整句：Many families decided to emigrate from their homeland to seek a new life abroad.",
        "choices": [
          "emigrate",
          "immigrate",
          "confess",
          "postpone"
        ],
        "sourceRecordId": "v32-13x5"
      },
      {
        "id": "choice-81",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "rainfall",
        "meaning": "降雨量",
        "prompt": "The desert has very little _____, so few plants can grow there.",
        "answer": "rainfall",
        "explanation": "rainfall：降雨量。完整句：The desert has very little rainfall, so few plants can grow there.",
        "choices": [
          "rainfall",
          "comma",
          "parcel",
          "dime"
        ],
        "sourceRecordId": "v5-26"
      },
      {
        "id": "coverage-choice-255",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "outer",
        "meaning": "外部的",
        "prompt": "The _____ wall surrounds and protects all the rooms inside the castle.",
        "answer": "outer",
        "explanation": "outer：外部的。完整句：The outer wall surrounds and protects all the rooms inside the castle.",
        "choices": [
          "outer",
          "inner",
          "weekly",
          "tropical"
        ],
        "sourceRecordId": "v43-07"
      },
      {
        "id": "choice-17",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "hairdresser",
        "meaning": "美髮師",
        "prompt": "The _____ cut my long hair just above my shoulders.",
        "answer": "hairdresser",
        "explanation": "hairdresser：美髮師。完整句：The hairdresser cut my long hair just above my shoulders.",
        "choices": [
          "hairdresser",
          "miner",
          "historian",
          "novelist"
        ],
        "sourceRecordId": "v32-09"
      },
      {
        "id": "coverage-choice-188",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colony",
        "meaning": "殖民地",
        "prompt": "The island became a _____ governed by a distant foreign country.",
        "answer": "colony",
        "explanation": "colony：殖民地。完整句：The island became a colony governed by a distant foreign country.",
        "choices": [
          "colony",
          "kingdom",
          "suburb",
          "neighborhood"
        ],
        "sourceRecordId": "v41-19a"
      },
      {
        "id": "coverage-choice-287",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "weekly",
        "meaning": "每週一次的",
        "prompt": "Our _____ meeting takes place every Monday, once every seven days.",
        "answer": "weekly",
        "explanation": "weekly：每週一次的。完整句：Our weekly meeting takes place every Monday, once every seven days.",
        "choices": [
          "weekly",
          "hourly",
          "monthly",
          "yearly"
        ],
        "sourceRecordId": "v43-40a"
      },
      {
        "id": "coverage-choice-136",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "therapist",
        "meaning": "心理治療師",
        "prompt": "A physical _____ helped him learn to walk again after the injury.",
        "answer": "therapist",
        "explanation": "therapist：心理治療師。完整句：A physical therapist helped him learn to walk again after the injury.",
        "choices": [
          "therapist",
          "composer",
          "plumber",
          "tailor"
        ],
        "sourceRecordId": "v33-05x6"
      },
      {
        "id": "coverage-choice-40",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "amateur",
        "meaning": "業餘選手",
        "prompt": "Although she plays well, she is an _____ who earns no money from tennis.",
        "answer": "amateur",
        "explanation": "amateur：業餘選手。完整句：Although she plays well, she is an amateur who earns no money from tennis.",
        "choices": [
          "amateur",
          "emperor",
          "accountant",
          "ambassador"
        ],
        "sourceRecordId": "v31-04"
      },
      {
        "id": "choice-72",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "overseas",
        "meaning": "海外的；國外的",
        "prompt": "This is her first trip _____; she has never left her own country before.",
        "answer": "overseas",
        "explanation": "overseas：海外的；國外的。完整句：This is her first trip overseas; she has never left her own country before.",
        "choices": [
          "overseas",
          "shortly",
          "onto",
          "overnight"
        ],
        "sourceRecordId": "v43-09a"
      },
      {
        "id": "coverage-choice-151",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "scholar",
        "meaning": "學者",
        "prompt": "The _____ has spent decades studying ancient languages and writing academic books.",
        "answer": "scholar",
        "explanation": "scholar：學者。完整句：The scholar has spent decades studying ancient languages and writing academic books.",
        "choices": [
          "scholar",
          "plumber",
          "tailor",
          "pilot"
        ],
        "sourceRecordId": "v33-22"
      },
      {
        "id": "choice-60",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "neighborhood",
        "meaning": "附近地區；社區",
        "prompt": "Several families on our street joined a _____ cleanup.",
        "answer": "neighborhood",
        "explanation": "neighborhood：附近地區；社區。完整句：Several families on our street joined a neighborhood cleanup.",
        "choices": [
          "neighborhood",
          "frequency",
          "generation",
          "lifetime"
        ],
        "sourceRecordId": "v42-39"
      },
      {
        "id": "coverage-choice-165",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tourist",
        "meaning": "遊客",
        "prompt": "The _____ visited famous sights, took photos, and returned home after her holiday.",
        "answer": "tourist",
        "explanation": "tourist：遊客。完整句：The tourist visited famous sights, took photos, and returned home after her holiday.",
        "choices": [
          "tourist",
          "settler",
          "ancestor",
          "infant"
        ],
        "sourceRecordId": "v33-35"
      },
      {
        "id": "coverage-choice-191",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colonist",
        "meaning": "殖民（他人）者",
        "prompt": "The _____ settled in a distant territory controlled by his home country.",
        "answer": "colonist",
        "explanation": "colonist：殖民（他人）者。完整句：The colonist settled in a distant territory controlled by his home country.",
        "choices": [
          "colonist",
          "infant",
          "ancestor",
          "tourist"
        ],
        "sourceRecordId": "v41-19x3"
      },
      {
        "id": "coverage-choice-147",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "represent",
        "meaning": "代表",
        "prompt": "The elected students will _____ their classmates at the council meeting.",
        "answer": "represent",
        "explanation": "represent：代表。完整句：The elected students will represent their classmates at the council meeting.",
        "choices": [
          "represent",
          "confuse",
          "annoy",
          "postpone"
        ],
        "sourceRecordId": "v33-18a"
      },
      {
        "id": "choice-24",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "magician",
        "meaning": "魔術師",
        "prompt": "The _____ surprised the audience by making a coin disappear.",
        "answer": "magician",
        "explanation": "magician：魔術師。完整句：The magician surprised the audience by making a coin disappear.",
        "choices": [
          "magician",
          "historian",
          "librarian",
          "mechanic"
        ],
        "sourceRecordId": "v32-28"
      },
      {
        "id": "coverage-choice-342",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "comfort",
        "meaning": "安慰",
        "prompt": "The mother tried to _____ her crying child and help him feel less upset.",
        "answer": "comfort",
        "explanation": "comfort：安慰。完整句：The mother tried to comfort her crying child and help him feel less upset.",
        "choices": [
          "comfort",
          "annoy",
          "confuse",
          "discourage"
        ],
        "sourceRecordId": "v61-24a"
      },
      {
        "id": "coverage-choice-244",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "nowadays",
        "meaning": "現今；當今",
        "prompt": "People _____ often use smartphones, unlike people a century ago.",
        "answer": "nowadays",
        "explanation": "nowadays：現今；當今。完整句：People nowadays often use smartphones, unlike people a century ago.",
        "choices": [
          "nowadays",
          "beneath",
          "onto",
          "forever"
        ],
        "sourceRecordId": "v42-40"
      },
      {
        "id": "choice-86",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "confuse",
        "meaning": "使困惑",
        "prompt": "The two similar street names often _____ visitors trying to find the hotel.",
        "answer": "confuse",
        "explanation": "confuse：使困惑。完整句：The two similar street names often confuse visitors trying to find the hotel.",
        "choices": [
          "confuse",
          "comfort",
          "cherish",
          "admire"
        ],
        "sourceRecordId": "v61-28a"
      },
      {
        "id": "choice-84",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "admire",
        "meaning": "欽佩；讚賞",
        "prompt": "I _____ your courage in speaking up for the younger students.",
        "answer": "admire",
        "explanation": "admire：欽佩；讚賞。完整句：I admire your courage in speaking up for the younger students.",
        "choices": [
          "admire",
          "annoy",
          "confuse",
          "discourage"
        ],
        "sourceRecordId": "v61-03"
      },
      {
        "id": "choice-54",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lighthouse",
        "meaning": "燈塔",
        "prompt": "The bright light from the _____ guided ships away from the rocks.",
        "answer": "lighthouse",
        "explanation": "lighthouse：燈塔。完整句：The bright light from the lighthouse guided ships away from the rocks.",
        "choices": [
          "lighthouse",
          "kindergarten",
          "dormitory",
          "garage"
        ],
        "sourceRecordId": "v42-29"
      },
      {
        "id": "coverage-choice-205",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "forever",
        "meaning": "永遠",
        "prompt": "The child wished the summer holiday could last _____ and never end.",
        "answer": "forever",
        "explanation": "forever：永遠。完整句：The child wished the summer holiday could last forever and never end.",
        "choices": [
          "forever",
          "beneath",
          "onto",
          "barely"
        ],
        "sourceRecordId": "v41-34"
      },
      {
        "id": "choice-40",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "clinic",
        "meaning": "診所",
        "prompt": "The small medical _____ treats patients but has no overnight beds.",
        "answer": "clinic",
        "explanation": "clinic：診所。完整句：The small medical clinic treats patients but has no overnight beds.",
        "choices": [
          "clinic",
          "cinema",
          "dam",
          "avenue"
        ],
        "sourceRecordId": "v41-18"
      },
      {
        "id": "coverage-choice-352",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "delightful",
        "meaning": "愉快的；歡樂的",
        "prompt": "The picnic was _____, giving everyone a wonderfully pleasant afternoon.",
        "answer": "delightful",
        "explanation": "delightful：愉快的；歡樂的。完整句：The picnic was delightful, giving everyone a wonderfully pleasant afternoon.",
        "choices": [
          "delightful",
          "awful",
          "depressing",
          "desperate"
        ],
        "sourceRecordId": "v61-37"
      },
      {
        "id": "coverage-choice-142",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "professor",
        "meaning": "教授",
        "prompt": "The university _____ teaches advanced biology and supervises student research.",
        "answer": "professor",
        "explanation": "professor：教授。完整句：The university professor teaches advanced biology and supervises student research.",
        "choices": [
          "professor",
          "plumber",
          "tailor",
          "pilot"
        ],
        "sourceRecordId": "v33-14"
      },
      {
        "id": "choice-2",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "athlete",
        "meaning": "運動員",
        "prompt": "The young _____ trains for the national running race every morning.",
        "answer": "athlete",
        "explanation": "athlete：運動員。完整句：The young athlete trains for the national running race every morning.",
        "choices": [
          "athlete",
          "accountant",
          "editor",
          "diplomat"
        ],
        "sourceRecordId": "v31-10"
      },
      {
        "id": "choice-16",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "orphan",
        "meaning": "孤兒",
        "prompt": "The story is about an _____ whose parents both died when he was young.",
        "answer": "orphan",
        "explanation": "orphan：孤兒。完整句：The story is about an orphan whose parents both died when he was young.",
        "choices": [
          "orphan",
          "emperor",
          "inspector",
          "merchant"
        ],
        "sourceRecordId": "v32-45"
      },
      {
        "id": "coverage-choice-137",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "physicist",
        "meaning": "物理學家",
        "prompt": "The _____ studies energy, matter, and the laws of motion.",
        "answer": "physicist",
        "explanation": "physicist：物理學家。完整句：The physicist studies energy, matter, and the laws of motion.",
        "choices": [
          "physicist",
          "physician",
          "photographer",
          "plumber"
        ],
        "sourceRecordId": "v33-06"
      },
      {
        "id": "coverage-choice-250",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "occasional",
        "meaning": "有時的；偶爾的",
        "prompt": "He makes only _____ visits, coming once or twice a year rather than regularly.",
        "answer": "occasional",
        "explanation": "occasional：有時的；偶爾的。完整句：He makes only occasional visits, coming once or twice a year rather than regularly.",
        "choices": [
          "occasional",
          "hourly",
          "weekly",
          "monthly"
        ],
        "sourceRecordId": "v43-02"
      },
      {
        "id": "coverage-choice-82",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "governor",
        "meaning": "州長",
        "prompt": "The state's _____ signed the new law after it passed the state legislature.",
        "answer": "governor",
        "explanation": "governor：州長。完整句：The state's governor signed the new law after it passed the state legislature.",
        "choices": [
          "governor",
          "infant",
          "miner",
          "hairdresser"
        ],
        "sourceRecordId": "v32-07"
      },
      {
        "id": "coverage-choice-247",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "currently",
        "meaning": "目前",
        "prompt": "The bridge is _____ under repair, but it will open again next week.",
        "answer": "currently",
        "explanation": "currently：目前。完整句：The bridge is currently under repair, but it will open again next week.",
        "choices": [
          "currently",
          "forever",
          "overseas",
          "yearly"
        ],
        "sourceRecordId": "v42-40x3"
      },
      {
        "id": "choice-61",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tunnel",
        "meaning": "隧道",
        "prompt": "The train entered a dark _____ through the mountain.",
        "answer": "tunnel",
        "explanation": "tunnel：隧道。完整句：The train entered a dark tunnel through the mountain.",
        "choices": [
          "tunnel",
          "palace",
          "stadium",
          "studio"
        ],
        "sourceRecordId": "v43-38"
      },
      {
        "id": "coverage-choice-283",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tomb",
        "meaning": "（尤指重要人物的）墳墓",
        "prompt": "Archaeologists opened the ancient king's _____, where his body had been buried.",
        "answer": "tomb",
        "explanation": "tomb：（尤指重要人物的）墳墓。完整句：Archaeologists opened the ancient king's tomb, where his body had been buried.",
        "choices": [
          "tomb",
          "nursery",
          "studio",
          "garage"
        ],
        "sourceRecordId": "v43-34"
      },
      {
        "id": "choice-19",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "historian",
        "meaning": "歷史學家",
        "prompt": "The _____ studies old records to learn how people lived centuries ago.",
        "answer": "historian",
        "explanation": "historian：歷史學家。完整句：The historian studies old records to learn how people lived centuries ago.",
        "choices": [
          "historian",
          "lifeguard",
          "hairdresser",
          "mechanic"
        ],
        "sourceRecordId": "v32-11"
      },
      {
        "id": "coverage-choice-79",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "follower",
        "meaning": "追隨者；信徒",
        "prompt": "As a loyal _____, he accepted the leader's ideas and supported her decisions.",
        "answer": "follower",
        "explanation": "follower：追隨者；信徒。完整句：As a loyal follower, he accepted the leader's ideas and supported her decisions.",
        "choices": [
          "follower",
          "ancestor",
          "founder",
          "creator"
        ],
        "sourceRecordId": "v32-04"
      },
      {
        "id": "coverage-choice-311",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "pint",
        "meaning": "品脫（液量單位）",
        "prompt": "A _____ is a liquid measure smaller than a quart, often used for milk or beer.",
        "answer": "pint",
        "explanation": "pint：品脫（液量單位）。完整句：A pint is a liquid measure smaller than a quart, often used for milk or beer.",
        "choices": [
          "pint",
          "kilometer",
          "calorie",
          "ton"
        ],
        "sourceRecordId": "v5-23"
      },
      {
        "id": "coverage-choice-158",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "survivor",
        "meaning": "生還者",
        "prompt": "The only _____ of the shipwreck was rescued alive the next morning.",
        "answer": "survivor",
        "explanation": "survivor：生還者。完整句：The only survivor of the shipwreck was rescued alive the next morning.",
        "choices": [
          "survivor",
          "ancestor",
          "murderer",
          "bride"
        ],
        "sourceRecordId": "v33-31"
      },
      {
        "id": "coverage-choice-72",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "embassy",
        "meaning": "大使館",
        "prompt": "She contacted her country's _____ abroad after losing her passport.",
        "answer": "embassy",
        "explanation": "embassy：大使館。完整句：She contacted her country's embassy abroad after losing her passport.",
        "choices": [
          "embassy",
          "hive",
          "greenhouse",
          "garage"
        ],
        "sourceRecordId": "v31-47"
      },
      {
        "id": "coverage-choice-308",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "percent",
        "meaning": "百分之一（單複數同形）",
        "prompt": "Twenty _____ means twenty out of every hundred.",
        "answer": "percent",
        "explanation": "percent：百分之一（單複數同形）。完整句：Twenty percent means twenty out of every hundred.",
        "choices": [
          "percent",
          "kilometer",
          "gallon",
          "ton"
        ],
        "sourceRecordId": "v5-20a"
      },
      {
        "id": "coverage-choice-149",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "researcher",
        "meaning": "研究人員",
        "prompt": "The medical _____ collected data to test a new treatment.",
        "answer": "researcher",
        "explanation": "researcher：研究人員。完整句：The medical researcher collected data to test a new treatment.",
        "choices": [
          "researcher",
          "tailor",
          "plumber",
          "pilot"
        ],
        "sourceRecordId": "v33-20"
      },
      {
        "id": "coverage-choice-231",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "territory",
        "meaning": "領土；區域",
        "prompt": "The map shows the land within the country's borders as its national _____.",
        "answer": "territory",
        "explanation": "territory：領土；區域。完整句：The map shows the land within the country's borders as its national territory.",
        "choices": [
          "territory",
          "comma",
          "parcel",
          "calorie"
        ],
        "sourceRecordId": "v42-25x1"
      },
      {
        "id": "coverage-choice-347",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "content",
        "meaning": "滿足的；滿意的",
        "prompt": "With food, friends, and a safe home, she felt _____ and wanted nothing more.",
        "answer": "content",
        "explanation": "content：滿足的；滿意的。完整句：With food, friends, and a safe home, she felt content and wanted nothing more.",
        "choices": [
          "content",
          "desperate",
          "ashamed",
          "depressed"
        ],
        "sourceRecordId": "v61-32a"
      },
      {
        "id": "coverage-choice-282",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "environment",
        "meaning": "自然環境；影響人為發展的環境（著重給人的感受）",
        "prompt": "Recycling helps protect the natural _____, including the land, air, and water.",
        "answer": "environment",
        "explanation": "environment：自然環境；影響人為發展的環境（著重給人的感受）。完整句：Recycling helps protect the natural environment, including the land, air, and water.",
        "choices": [
          "environment",
          "comma",
          "parcel",
          "gallon"
        ],
        "sourceRecordId": "v43-30x3"
      }
    ]
  },
  {
    "id": "midterm-10-choice",
    "title": "模擬考 10－選擇題",
    "questions": [
      {
        "id": "coverage-choice-306",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "measure",
        "meaning": "方法；措施（常用複數形）",
        "prompt": "Use a ruler to _____ the exact length of the paper.",
        "answer": "measure",
        "explanation": "measure：方法；措施（常用複數形）。完整句：Use a ruler to measure the exact length of the paper.",
        "choices": [
          "measure",
          "confess",
          "migrate",
          "boast"
        ],
        "sourceRecordId": "v5-17a"
      },
      {
        "id": "coverage-choice-307",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "penny",
        "meaning": "便士；一分錢（金額複數：pence；硬幣數量複數：pennies）",
        "prompt": "A _____ is an American coin worth one cent.",
        "answer": "penny",
        "explanation": "penny：便士；一分錢（金額複數：pence；硬幣數量複數：pennies）。完整句：A penny is an American coin worth one cent.",
        "choices": [
          "penny",
          "dime",
          "gallon",
          "ton"
        ],
        "sourceRecordId": "v5-19"
      },
      {
        "id": "coverage-choice-315",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "portion",
        "meaning": "一部分；（食物的）一份",
        "prompt": "The waiter served each guest a small _____ of rice on a separate plate.",
        "answer": "portion",
        "explanation": "portion：一部分；（食物的）一份。完整句：The waiter served each guest a small portion of rice on a separate plate.",
        "choices": [
          "portion",
          "herd",
          "flock",
          "school"
        ],
        "sourceRecordId": "v5-25"
      },
      {
        "id": "coverage-choice-190",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colonial",
        "meaning": "殖民的（亦可作 n.：殖民地居民）",
        "prompt": "The old building dates from the _____ period, when a foreign power ruled the island.",
        "answer": "colonial",
        "explanation": "colonial：殖民的（亦可作 n.：殖民地居民）。完整句：The old building dates from the colonial period, when a foreign power ruled the island.",
        "choices": [
          "colonial",
          "atomic",
          "weekly",
          "cheerful"
        ],
        "sourceRecordId": "v41-19x2"
      },
      {
        "id": "coverage-choice-90",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "emigration",
        "meaning": "（由境內外移的）移居；移民",
        "prompt": "The history book describes _____ from Ireland as families left to live abroad.",
        "answer": "emigration",
        "explanation": "emigration：（由境內外移的）移居；移民。完整句：The history book describes emigration from Ireland as families left to live abroad.",
        "choices": [
          "emigration",
          "immigration",
          "amusement",
          "approval"
        ],
        "sourceRecordId": "v32-13x4"
      },
      {
        "id": "choice-87",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curiosity",
        "meaning": "好奇心",
        "prompt": "Her _____ about space led her to ask dozens of questions about the moon.",
        "answer": "curiosity",
        "explanation": "curiosity：好奇心。完整句：Her curiosity about space led her to ask dozens of questions about the moon.",
        "choices": [
          "curiosity",
          "disgust",
          "approval",
          "depression"
        ],
        "sourceRecordId": "v61-33"
      },
      {
        "id": "coverage-choice-286",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "urban",
        "meaning": "都市的",
        "prompt": "The crowded _____ area contains busy streets and many tall city buildings.",
        "answer": "urban",
        "explanation": "urban：都市的。完整句：The crowded urban area contains busy streets and many tall city buildings.",
        "choices": [
          "urban",
          "rural",
          "tropical",
          "weekly"
        ],
        "sourceRecordId": "v43-39"
      },
      {
        "id": "coverage-choice-272",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "arena",
        "meaning": "比賽場地；環形表演場地",
        "prompt": "The ice hockey match took place in a large indoor _____ surrounded by seats.",
        "answer": "arena",
        "explanation": "arena：比賽場地；環形表演場地。完整句：The ice hockey match took place in a large indoor arena surrounded by seats.",
        "choices": [
          "arena",
          "nursery",
          "greenhouse",
          "garage"
        ],
        "sourceRecordId": "v43-26x1"
      },
      {
        "id": "coverage-choice-251",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "onto",
        "meaning": "到……上面；向……之上",
        "prompt": "The cat jumped from the floor _____ the top of the table.",
        "answer": "onto",
        "explanation": "onto：到……上面；向……之上。完整句：The cat jumped from the floor onto the top of the table.",
        "choices": [
          "onto",
          "beneath",
          "aside",
          "opposite"
        ],
        "sourceRecordId": "v43-03"
      },
      {
        "id": "coverage-choice-74",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "imperial",
        "meaning": "帝國的；皇帝的",
        "prompt": "The _____ palace belonged to the emperor and his family.",
        "answer": "imperial",
        "explanation": "imperial：帝國的；皇帝的。完整句：The imperial palace belonged to the emperor and his family.",
        "choices": [
          "imperial",
          "hourly",
          "casual",
          "atomic"
        ],
        "sourceRecordId": "v32-01x1"
      },
      {
        "id": "coverage-choice-309",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "percentage",
        "meaning": "百分比；百分率",
        "prompt": "What _____ of the class passed: fifty percent or eighty percent?",
        "answer": "percentage",
        "explanation": "percentage：百分比；百分率。完整句：What percentage of the class passed: fifty percent or eighty percent?",
        "choices": [
          "percentage",
          "kilometer",
          "gallon",
          "ton"
        ],
        "sourceRecordId": "v5-21"
      },
      {
        "id": "coverage-choice-238",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "location",
        "meaning": "位置",
        "prompt": "The shop's _____ near the station makes it easy for customers to reach.",
        "answer": "location",
        "explanation": "location：位置。完整句：The shop's location near the station makes it easy for customers to reach.",
        "choices": [
          "location",
          "curiosity",
          "rainfall",
          "approval"
        ],
        "sourceRecordId": "v42-32"
      },
      {
        "id": "coverage-choice-267",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "route",
        "meaning": "路線",
        "prompt": "The map shows the shortest _____ from our house to the airport.",
        "answer": "route",
        "explanation": "route：路線。完整句：The map shows the shortest route from our house to the airport.",
        "choices": [
          "route",
          "timetable",
          "deadline",
          "frequency"
        ],
        "sourceRecordId": "v43-17"
      },
      {
        "id": "coverage-choice-88",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "immigrate",
        "meaning": "由境外移入；移居入境",
        "prompt": "They hope to _____ to Canada and make it their permanent home.",
        "answer": "immigrate",
        "explanation": "immigrate：由境外移入；移居入境。完整句：They hope to immigrate to Canada and make it their permanent home.",
        "choices": [
          "immigrate",
          "emigrate",
          "confess",
          "postpone"
        ],
        "sourceRecordId": "v32-13x2"
      },
      {
        "id": "choice-68",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "semester",
        "meaning": "學期",
        "prompt": "The new school _____ begins in September and ends in January.",
        "answer": "semester",
        "explanation": "semester：學期。完整句：The new school semester begins in September and ends in January.",
        "choices": [
          "semester",
          "shelter",
          "route",
          "zone"
        ],
        "sourceRecordId": "v43-19"
      },
      {
        "id": "coverage-choice-359",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "desperate",
        "meaning": "非常嚴重的",
        "prompt": "With no food or water left, the hikers were _____ for help and willing to try anything.",
        "answer": "desperate",
        "explanation": "desperate：非常嚴重的。完整句：With no food or water left, the hikers were desperate for help and willing to try anything.",
        "choices": [
          "desperate",
          "content",
          "cheerful",
          "agreeable"
        ],
        "sourceRecordId": "v61-41a"
      },
      {
        "id": "coverage-choice-104",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lover",
        "meaning": "喜好者",
        "prompt": "As a music _____, he spends every weekend listening to concerts.",
        "answer": "lover",
        "explanation": "lover：喜好者。完整句：As a music lover, he spends every weekend listening to concerts.",
        "choices": [
          "lover",
          "miner",
          "plumber",
          "burglar"
        ],
        "sourceRecordId": "v32-27a"
      },
      {
        "id": "choice-30",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "passenger",
        "meaning": "乘客；旅客",
        "prompt": "Every _____ on the bus must wear a seat belt.",
        "answer": "passenger",
        "explanation": "passenger：乘客；旅客。完整句：Every passenger on the bus must wear a seat belt.",
        "choices": [
          "passenger",
          "publisher",
          "plumber",
          "philosopher"
        ],
        "sourceRecordId": "v33-01"
      },
      {
        "id": "choice-64",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "stadium",
        "meaning": "運動場",
        "prompt": "Thousands of fans filled the _____ to watch the football final.",
        "answer": "stadium",
        "explanation": "stadium：運動場。完整句：Thousands of fans filled the stadium to watch the football final.",
        "choices": [
          "stadium",
          "tomb",
          "tunnel",
          "pub"
        ],
        "sourceRecordId": "v43-26"
      },
      {
        "id": "coverage-choice-103",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "loser",
        "meaning": "輸家；失敗者",
        "prompt": "Only one player could win, and the _____ congratulated her after the final round.",
        "answer": "loser",
        "explanation": "loser：輸家；失敗者。完整句：Only one player could win, and the loser congratulated her after the final round.",
        "choices": [
          "loser",
          "champion",
          "ancestor",
          "infant"
        ],
        "sourceRecordId": "v32-26"
      },
      {
        "id": "coverage-choice-288",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "workplace",
        "meaning": "職場；工作場所",
        "prompt": "Everyone at the _____ must follow safety rules while doing their jobs.",
        "answer": "workplace",
        "explanation": "workplace：職場；工作場所。完整句：Everyone at the workplace must follow safety rules while doing their jobs.",
        "choices": [
          "workplace",
          "comma",
          "parcel",
          "gallon"
        ],
        "sourceRecordId": "v43-41"
      },
      {
        "id": "choice-12",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "burglar",
        "meaning": "竊賊；夜賊",
        "prompt": "The _____ entered an empty house at night and stole a laptop.",
        "answer": "burglar",
        "explanation": "burglar：竊賊；夜賊。完整句：The burglar entered an empty house at night and stole a laptop.",
        "choices": [
          "burglar",
          "bride",
          "adviser",
          "ambassador"
        ],
        "sourceRecordId": "v31-16"
      },
      {
        "id": "coverage-choice-166",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "trader",
        "meaning": "商人",
        "prompt": "The _____ buys and sells goods to make a profit.",
        "answer": "trader",
        "explanation": "trader：商人。完整句：The trader buys and sells goods to make a profit.",
        "choices": [
          "trader",
          "infant",
          "ancestor",
          "monk"
        ],
        "sourceRecordId": "v33-36"
      },
      {
        "id": "coverage-choice-110",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanism",
        "meaning": "機械裝置；體制；機制",
        "prompt": "A spring inside the clock's _____ helps move its hands.",
        "answer": "mechanism",
        "explanation": "mechanism：機械裝置；體制；機制。完整句：A spring inside the clock's mechanism helps move its hands.",
        "choices": [
          "mechanism",
          "immigration",
          "rainfall",
          "curiosity"
        ],
        "sourceRecordId": "v32-33x3"
      },
      {
        "id": "choice-32",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "The _____ carefully removed the damaged part during the operation.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：The surgeon carefully removed the damaged part during the operation.",
        "choices": [
          "surgeon",
          "tailor",
          "pilot",
          "publisher"
        ],
        "sourceRecordId": "v33-30"
      },
      {
        "id": "coverage-choice-138",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "pioneer",
        "meaning": "拓荒者",
        "prompt": "As a _____ in space travel, she helped develop methods that had never been used before.",
        "answer": "pioneer",
        "explanation": "pioneer：拓荒者。完整句：As a pioneer in space travel, she helped develop methods that had never been used before.",
        "choices": [
          "pioneer",
          "follower",
          "infant",
          "passenger"
        ],
        "sourceRecordId": "v33-08a"
      },
      {
        "id": "coverage-choice-232",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "landmark",
        "meaning": "地標",
        "prompt": "The city's famous clock tower is a _____ that helps visitors recognize the area.",
        "answer": "landmark",
        "explanation": "landmark：地標。完整句：The city's famous clock tower is a landmark that helps visitors recognize the area.",
        "choices": [
          "landmark",
          "location",
          "territory",
          "passage"
        ],
        "sourceRecordId": "v42-26a"
      },
      {
        "id": "coverage-choice-200",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "elsewhere",
        "meaning": "在別處；到別處",
        "prompt": "This store has no batteries left, so we must look _____.",
        "answer": "elsewhere",
        "explanation": "elsewhere：在別處；到別處。完整句：This store has no batteries left, so we must look elsewhere.",
        "choices": [
          "elsewhere",
          "beneath",
          "onto",
          "barely"
        ],
        "sourceRecordId": "v41-30"
      },
      {
        "id": "coverage-choice-167",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "traveler",
        "meaning": "旅客；旅人",
        "prompt": "The experienced _____ packed a suitcase for another long journey.",
        "answer": "traveler",
        "explanation": "traveler：旅客；旅人。完整句：The experienced traveler packed a suitcase for another long journey.",
        "choices": [
          "traveler",
          "ancestor",
          "infant",
          "emperor"
        ],
        "sourceRecordId": "v33-38"
      },
      {
        "id": "coverage-choice-148",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "representative",
        "meaning": "代表",
        "prompt": "Our class _____ speaks on our behalf at school meetings.",
        "answer": "representative",
        "explanation": "representative：代表。完整句：Our class representative speaks on our behalf at school meetings.",
        "choices": [
          "representative",
          "ancestor",
          "infant",
          "refugee"
        ],
        "sourceRecordId": "v33-19a"
      },
      {
        "id": "coverage-choice-213",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "global",
        "meaning": "全球的",
        "prompt": "Climate change is a _____ problem that affects countries all around the world.",
        "answer": "global",
        "explanation": "global：全球的。完整句：Climate change is a global problem that affects countries all around the world.",
        "choices": [
          "global",
          "indoor",
          "hourly",
          "casual"
        ],
        "sourceRecordId": "v42-07a"
      },
      {
        "id": "choice-90",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "disappoint",
        "meaning": "使失望",
        "prompt": "I hope I will not _____ my teammates by giving up before the race ends.",
        "answer": "disappoint",
        "explanation": "disappoint：使失望。完整句：I hope I will not disappoint my teammates by giving up before the race ends.",
        "choices": [
          "disappoint",
          "comfort",
          "admire",
          "cherish"
        ],
        "sourceRecordId": "v61-44"
      },
      {
        "id": "coverage-choice-271",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "sometime",
        "meaning": "（過去或未來）某個時候",
        "prompt": "Call me _____ between two and four tomorrow; any time in that period is fine.",
        "answer": "sometime",
        "explanation": "sometime：（過去或未來）某個時候。完整句：Call me sometime between two and four tomorrow; any time in that period is fine.",
        "choices": [
          "sometime",
          "forever",
          "beneath",
          "onto"
        ],
        "sourceRecordId": "v43-25"
      },
      {
        "id": "choice-53",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hive",
        "meaning": "蜂窩",
        "prompt": "Thousands of bees live together in this _____.",
        "answer": "hive",
        "explanation": "hive：蜂窩。完整句：Thousands of bees live together in this hive.",
        "choices": [
          "hive",
          "inn",
          "mall",
          "lobby"
        ],
        "sourceRecordId": "v42-13"
      },
      {
        "id": "coverage-choice-344",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "confess",
        "meaning": "坦白；承認",
        "prompt": "He decided to _____ that he had broken the window instead of hiding the truth.",
        "answer": "confess",
        "explanation": "confess：坦白；承認。完整句：He decided to confess that he had broken the window instead of hiding the truth.",
        "choices": [
          "confess",
          "migrate",
          "publish",
          "admire"
        ],
        "sourceRecordId": "v61-27a"
      },
      {
        "id": "coverage-choice-362",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "discourage",
        "meaning": "使沮喪",
        "prompt": "Do not _____ her from trying by telling her she will certainly fail.",
        "answer": "discourage",
        "explanation": "discourage：使沮喪。完整句：Do not discourage her from trying by telling her she will certainly fail.",
        "choices": [
          "discourage",
          "admire",
          "cherish",
          "comfort"
        ],
        "sourceRecordId": "v61-45a"
      },
      {
        "id": "coverage-choice-348",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "contentment",
        "meaning": "滿足；滿意",
        "prompt": "After finishing his work and sitting peacefully with his family, he felt deep _____.",
        "answer": "contentment",
        "explanation": "contentment：滿足；滿意。完整句：After finishing his work and sitting peacefully with his family, he felt deep contentment.",
        "choices": [
          "contentment",
          "anxiety",
          "disgust",
          "confusion"
        ],
        "sourceRecordId": "v61-32x1"
      },
      {
        "id": "choice-25",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "pilot",
        "meaning": "飛行員；領航員",
        "prompt": "The _____ checked the controls before flying the plane.",
        "answer": "pilot",
        "explanation": "pilot：飛行員；領航員。完整句：The pilot checked the controls before flying the plane.",
        "choices": [
          "pilot",
          "plumber",
          "tailor",
          "translator"
        ],
        "sourceRecordId": "v33-07"
      },
      {
        "id": "coverage-choice-162",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "technology",
        "meaning": "科技",
        "prompt": "New medical _____ allows doctors to see inside the body without surgery.",
        "answer": "technology",
        "explanation": "technology：科技。完整句：New medical technology allows doctors to see inside the body without surgery.",
        "choices": [
          "technology",
          "technique",
          "territory",
          "frequency"
        ],
        "sourceRecordId": "v33-33x3"
      },
      {
        "id": "coverage-choice-106",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mankind / humankind",
        "meaning": "人類",
        "prompt": "Protecting clean water is important for all of _____, regardless of nationality.",
        "answer": "humankind",
        "explanation": "mankind / humankind：人類。完整句：Protecting clean water is important for all of humankind, regardless of nationality.",
        "choices": [
          "humankind",
          "machinery",
          "imperialism",
          "rainfall"
        ],
        "sourceRecordId": "v32-30"
      },
      {
        "id": "coverage-choice-94",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "migrate",
        "meaning": "移居；遷徙",
        "prompt": "These butterflies _____ to warmer areas when cold weather arrives.",
        "answer": "migrate",
        "explanation": "migrate：移居；遷徙。完整句：These butterflies migrate to warmer areas when cold weather arrives.",
        "choices": [
          "migrate",
          "confess",
          "boast",
          "publish"
        ],
        "sourceRecordId": "v32-13x8"
      },
      {
        "id": "choice-49",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "fountain",
        "meaning": "噴水池",
        "prompt": "Water sprayed high into the air from the _____ in the square.",
        "answer": "fountain",
        "explanation": "fountain：噴水池。完整句：Water sprayed high into the air from the fountain in the square.",
        "choices": [
          "fountain",
          "garage",
          "hallway",
          "dormitory"
        ],
        "sourceRecordId": "v42-01"
      },
      {
        "id": "choice-89",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "conscience",
        "meaning": "良心",
        "prompt": "His _____ told him it was wrong to keep the money he had found.",
        "answer": "conscience",
        "explanation": "conscience：良心。完整句：His conscience told him it was wrong to keep the money he had found.",
        "choices": [
          "conscience",
          "attraction",
          "amusement",
          "curiosity"
        ],
        "sourceRecordId": "v61-30"
      },
      {
        "id": "coverage-choice-54",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "civilian",
        "meaning": "平民的；非軍用的",
        "prompt": "The soldier removed his uniform and put on _____ clothes before leaving the base.",
        "answer": "civilian",
        "explanation": "civilian：平民的；非軍用的。完整句：The soldier removed his uniform and put on civilian clothes before leaving the base.",
        "choices": [
          "civilian",
          "atomic",
          "tropical",
          "monthly"
        ],
        "sourceRecordId": "v31-24b"
      },
      {
        "id": "coverage-choice-284",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tower",
        "meaning": "塔；塔樓；高樓",
        "prompt": "The tall stone _____ rises high above the surrounding buildings.",
        "answer": "tower",
        "explanation": "tower：塔；塔樓；高樓。完整句：The tall stone tower rises high above the surrounding buildings.",
        "choices": [
          "tower",
          "ditch",
          "tunnel",
          "basement"
        ],
        "sourceRecordId": "v43-35a"
      },
      {
        "id": "choice-11",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "consumer",
        "meaning": "消費者",
        "prompt": "As a _____, you should compare prices before buying a phone.",
        "answer": "consumer",
        "explanation": "consumer：消費者。完整句：As a consumer, you should compare prices before buying a phone.",
        "choices": [
          "consumer",
          "composer",
          "ancestor",
          "commander"
        ],
        "sourceRecordId": "v31-35"
      },
      {
        "id": "choice-37",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aquarium",
        "meaning": "水族館；水族箱",
        "prompt": "Visitors watched colorful fish swimming in the _____.",
        "answer": "aquarium",
        "explanation": "aquarium：水族館；水族箱。完整句：Visitors watched colorful fish swimming in the aquarium.",
        "choices": [
          "aquarium",
          "basement",
          "alley",
          "cafeteria"
        ],
        "sourceRecordId": "v41-07"
      },
      {
        "id": "coverage-choice-113",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "messenger",
        "meaning": "信差",
        "prompt": "The king sent a _____ to deliver a written order to the distant village.",
        "answer": "messenger",
        "explanation": "messenger：信差。完整句：The king sent a messenger to deliver a written order to the distant village.",
        "choices": [
          "messenger",
          "ancestor",
          "infant",
          "bride"
        ],
        "sourceRecordId": "v32-35"
      },
      {
        "id": "choice-52",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "harbor",
        "meaning": "港口",
        "prompt": "The fishing boats returned to the sheltered _____ before the storm.",
        "answer": "harbor",
        "explanation": "harbor：港口。完整句：The fishing boats returned to the sheltered harbor before the storm.",
        "choices": [
          "harbor",
          "nursery",
          "hive",
          "garage"
        ],
        "sourceRecordId": "v42-11"
      },
      {
        "id": "coverage-choice-105",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "maid",
        "meaning": "女僕",
        "prompt": "The hotel _____ tidied the bedroom and replaced the dirty towels.",
        "answer": "maid",
        "explanation": "maid：女僕。完整句：The hotel maid tidied the bedroom and replaced the dirty towels.",
        "choices": [
          "maid",
          "composer",
          "physicist",
          "pilot"
        ],
        "sourceRecordId": "v32-29"
      },
      {
        "id": "coverage-choice-56",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "client",
        "meaning": "客戶；委託人",
        "prompt": "The lawyer met her _____ to discuss the legal advice he had requested.",
        "answer": "client",
        "explanation": "client：客戶；委託人。完整句：The lawyer met her client to discuss the legal advice he had requested.",
        "choices": [
          "client",
          "ancestor",
          "bridegroom",
          "infant"
        ],
        "sourceRecordId": "v31-26"
      },
      {
        "id": "choice-46",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "dam",
        "meaning": "水壩",
        "prompt": "The new _____ holds back river water to form a large lake.",
        "answer": "dam",
        "explanation": "dam：水壩。完整句：The new dam holds back river water to form a large lake.",
        "choices": [
          "dam",
          "cinema",
          "drugstore",
          "alley"
        ],
        "sourceRecordId": "v41-22"
      },
      {
        "id": "coverage-choice-276",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "studio",
        "meaning": "攝影棚；錄音室；（藝術家的）工作室",
        "prompt": "The singer recorded her new album in a soundproof _____.",
        "answer": "studio",
        "explanation": "studio：攝影棚；錄音室；（藝術家的）工作室。完整句：The singer recorded her new album in a soundproof studio.",
        "choices": [
          "studio",
          "tomb",
          "hive",
          "greenhouse"
        ],
        "sourceRecordId": "v43-27"
      },
      {
        "id": "choice-59",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lobby",
        "meaning": "（旅館等的）大廳",
        "prompt": "We waited near the hotel's front desk in the _____.",
        "answer": "lobby",
        "explanation": "lobby：（旅館等的）大廳。完整句：We waited near the hotel's front desk in the lobby.",
        "choices": [
          "lobby",
          "hive",
          "globe",
          "greenhouse"
        ],
        "sourceRecordId": "v42-30"
      },
      {
        "id": "coverage-choice-75",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "imperialism",
        "meaning": "帝國主義",
        "prompt": "The policy of _____ allowed the powerful nation to control distant lands and their people.",
        "answer": "imperialism",
        "explanation": "imperialism：帝國主義。完整句：The policy of imperialism allowed the powerful nation to control distant lands and their people.",
        "choices": [
          "imperialism",
          "amusement",
          "curiosity",
          "rainfall"
        ],
        "sourceRecordId": "v32-01x2"
      },
      {
        "id": "coverage-choice-58",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "coach",
        "meaning": "教練",
        "prompt": "Our swimming _____ teaches us techniques and plans our daily training.",
        "answer": "coach",
        "explanation": "coach：教練。完整句：Our swimming coach teaches us techniques and plans our daily training.",
        "choices": [
          "coach",
          "ancestor",
          "infant",
          "burglar"
        ],
        "sourceRecordId": "v31-28a"
      },
      {
        "id": "coverage-choice-206",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "fort",
        "meaning": "要塞；堡壘",
        "prompt": "Soldiers defended the stone _____ with its thick walls and watchtowers.",
        "answer": "fort",
        "explanation": "fort：要塞；堡壘。完整句：Soldiers defended the stone fort with its thick walls and watchtowers.",
        "choices": [
          "fort",
          "greenhouse",
          "nursery",
          "garage"
        ],
        "sourceRecordId": "v41-35"
      },
      {
        "id": "coverage-choice-221",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "instant",
        "meaning": "立即的；速食的；即溶的",
        "prompt": "Add hot water to this _____ soup, and it will be ready almost at once.",
        "answer": "instant",
        "explanation": "instant：立即的；速食的；即溶的。完整句：Add hot water to this instant soup, and it will be ready almost at once.",
        "choices": [
          "instant",
          "ethnic",
          "imperial",
          "atomic"
        ],
        "sourceRecordId": "v42-17x1"
      },
      {
        "id": "coverage-choice-314",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "number",
        "meaning": "a large/small number of + 複數名詞：大／少量的……",
        "prompt": "The _____ of students rose from twenty to thirty this year.",
        "answer": "number",
        "explanation": "number：a large/small number of + 複數名詞：大／少量的……。完整句：The number of students rose from twenty to thirty this year.",
        "choices": [
          "number",
          "amount",
          "herd",
          "flock"
        ],
        "sourceRecordId": "v5-24x4"
      },
      {
        "id": "coverage-choice-274",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "court",
        "meaning": "（網球、籃球、羽球等）球場",
        "prompt": "The tennis players ran onto the _____ and began hitting the ball over the net.",
        "answer": "court",
        "explanation": "court：（網球、籃球、羽球等）球場。完整句：The tennis players ran onto the court and began hitting the ball over the net.",
        "choices": [
          "court",
          "tomb",
          "studio",
          "garage"
        ],
        "sourceRecordId": "v43-26x3"
      },
      {
        "id": "coverage-choice-193",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "colonialism",
        "meaning": "殖民主義",
        "prompt": "The protest opposed _____, the system of one country ruling another territory.",
        "answer": "colonialism",
        "explanation": "colonialism：殖民主義。完整句：The protest opposed colonialism, the system of one country ruling another territory.",
        "choices": [
          "colonialism",
          "amusement",
          "rainfall",
          "curiosity"
        ],
        "sourceRecordId": "v41-19x5"
      },
      {
        "id": "coverage-choice-109",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "machine",
        "meaning": "機器",
        "prompt": "Insert a coin into the vending _____ to buy a drink.",
        "answer": "machine",
        "explanation": "machine：機器。完整句：Insert a coin into the vending machine to buy a drink.",
        "choices": [
          "machine",
          "immigrant",
          "lecturer",
          "monk"
        ],
        "sourceRecordId": "v32-33x2"
      },
      {
        "id": "coverage-choice-131",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "specialist",
        "meaning": "專科醫師",
        "prompt": "The family doctor sent her to a heart _____ with advanced training in that field.",
        "answer": "specialist",
        "explanation": "specialist：專科醫師。完整句：The family doctor sent her to a heart specialist with advanced training in that field.",
        "choices": [
          "specialist",
          "amateur",
          "infant",
          "ancestor"
        ],
        "sourceRecordId": "v33-05x1"
      },
      {
        "id": "coverage-choice-327",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "annoy",
        "meaning": "使困擾；使不高興",
        "prompt": "Please stop tapping your pen; the repeated noise will _____ the people trying to study.",
        "answer": "annoy",
        "explanation": "annoy：使困擾；使不高興。完整句：Please stop tapping your pen; the repeated noise will annoy the people trying to study.",
        "choices": [
          "annoy",
          "comfort",
          "cherish",
          "admire"
        ],
        "sourceRecordId": "v61-07"
      },
      {
        "id": "coverage-choice-187",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "cinema",
        "meaning": "電影業；（總稱）電影",
        "prompt": "We bought tickets at the _____ to watch the new film on a big screen.",
        "answer": "cinema",
        "explanation": "cinema：電影業；（總稱）電影。完整句：We bought tickets at the cinema to watch the new film on a big screen.",
        "choices": [
          "cinema",
          "clinic",
          "garage",
          "greenhouse"
        ],
        "sourceRecordId": "v41-17a"
      },
      {
        "id": "coverage-choice-262",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "prolong",
        "meaning": "把時間延長至超過正常的限度",
        "prompt": "The medicine may _____ the patient's life by helping him live several more years.",
        "answer": "prolong",
        "explanation": "prolong：把時間延長至超過正常的限度。完整句：The medicine may prolong the patient's life by helping him live several more years.",
        "choices": [
          "prolong",
          "postpone",
          "confess",
          "migrate"
        ],
        "sourceRecordId": "v43-12x4"
      },
      {
        "id": "coverage-choice-141",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "professional",
        "meaning": "專業人員",
        "prompt": "Unlike an amateur, a _____ earns a living from the activity.",
        "answer": "professional",
        "explanation": "professional：專業人員。完整句：Unlike an amateur, a professional earns a living from the activity.",
        "choices": [
          "professional",
          "infant",
          "ancestor",
          "refugee"
        ],
        "sourceRecordId": "v33-13b"
      },
      {
        "id": "coverage-choice-86",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "immigrant",
        "meaning": "（自外國移入的）移民",
        "prompt": "The _____ arrived from another country to settle here permanently.",
        "answer": "immigrant",
        "explanation": "immigrant：（自外國移入的）移民。完整句：The immigrant arrived from another country to settle here permanently.",
        "choices": [
          "immigrant",
          "ancestor",
          "emperor",
          "tourist"
        ],
        "sourceRecordId": "v32-13"
      },
      {
        "id": "coverage-choice-303",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "gang",
        "meaning": "幫派；團體（尤指年輕人）",
        "prompt": "The police arrested a _____ of thieves who had been stealing cars together.",
        "answer": "gang",
        "explanation": "gang：幫派；團體（尤指年輕人）。完整句：The police arrested a gang of thieves who had been stealing cars together.",
        "choices": [
          "gang",
          "flock",
          "herd",
          "school"
        ],
        "sourceRecordId": "v5-13x4"
      },
      {
        "id": "coverage-choice-177",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "excess",
        "meaning": "過多的",
        "prompt": "Remove the _____ water so that only the amount needed remains.",
        "answer": "excess",
        "explanation": "excess：過多的。完整句：Remove the excess water so that only the amount needed remains.",
        "choices": [
          "excess",
          "curiosity",
          "approval",
          "immigration"
        ],
        "sourceRecordId": "v41-01x2"
      },
      {
        "id": "coverage-choice-59",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "commander",
        "meaning": "指揮官；司令",
        "prompt": "The army _____ gave orders to all the soldiers in his unit.",
        "answer": "commander",
        "explanation": "commander：指揮官；司令。完整句：The army commander gave orders to all the soldiers in his unit.",
        "choices": [
          "commander",
          "civilian",
          "infant",
          "passenger"
        ],
        "sourceRecordId": "v31-30"
      },
      {
        "id": "coverage-choice-360",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "dignity",
        "meaning": "尊嚴",
        "prompt": "Even when others treated him badly, he kept his _____ and behaved with self-respect.",
        "answer": "dignity",
        "explanation": "dignity：尊嚴。完整句：Even when others treated him badly, he kept his dignity and behaved with self-respect.",
        "choices": [
          "dignity",
          "curiosity",
          "amusement",
          "anxiety"
        ],
        "sourceRecordId": "v61-43"
      },
      {
        "id": "coverage-choice-146",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "publication",
        "meaning": "出版（品）；發行",
        "prompt": "The _____ of her first novel allowed readers to buy it in bookstores.",
        "answer": "publication",
        "explanation": "publication：出版（品）；發行。完整句：The publication of her first novel allowed readers to buy it in bookstores.",
        "choices": [
          "publication",
          "immigration",
          "migration",
          "colonization"
        ],
        "sourceRecordId": "v33-16x2"
      },
      {
        "id": "coverage-choice-212",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "genocide",
        "meaning": "種族滅絕；種族大屠殺",
        "prompt": "The history lesson discussed _____, the deliberate destruction of an ethnic group.",
        "answer": "genocide",
        "explanation": "genocide：種族滅絕；種族大屠殺。完整句：The history lesson discussed genocide, the deliberate destruction of an ethnic group.",
        "choices": [
          "genocide",
          "amusement",
          "approval",
          "curiosity"
        ],
        "sourceRecordId": "v42-06x2"
      },
      {
        "id": "coverage-choice-51",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carrier",
        "meaning": "運輸公司；航空公司",
        "prompt": "We chose a different airline as our _____ for the flight to London.",
        "answer": "carrier",
        "explanation": "carrier：運輸公司；航空公司。完整句：We chose a different airline as our carrier for the flight to London.",
        "choices": [
          "carrier",
          "composer",
          "bridegroom",
          "tailor"
        ],
        "sourceRecordId": "v31-21a"
      },
      {
        "id": "coverage-choice-179",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "annuity",
        "meaning": "年金；養老金",
        "prompt": "Her retirement _____ pays her a fixed sum of money every year.",
        "answer": "annuity",
        "explanation": "annuity：年金；養老金。完整句：Her retirement annuity pays her a fixed sum of money every year.",
        "choices": [
          "annuity",
          "amount",
          "deadline",
          "percentage"
        ],
        "sourceRecordId": "v41-05x2"
      },
      {
        "id": "choice-77",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "comma",
        "meaning": "逗號",
        "prompt": "Put a _____ between the items in this written list.",
        "answer": "comma",
        "explanation": "comma：逗號。完整句：Put a comma between the items in this written list.",
        "choices": [
          "comma",
          "calorie",
          "gallon",
          "parcel"
        ],
        "sourceRecordId": "v5-06"
      },
      {
        "id": "choice-43",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "alley",
        "meaning": "小巷；弄",
        "prompt": "The narrow _____ between the buildings is too small for cars.",
        "answer": "alley",
        "explanation": "alley：小巷；弄。完整句：The narrow alley between the buildings is too small for cars.",
        "choices": [
          "alley",
          "county",
          "campus",
          "dam"
        ],
        "sourceRecordId": "v41-03"
      },
      {
        "id": "coverage-choice-126",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "painter",
        "meaning": "油漆工；畫家",
        "prompt": "The _____ mixed colors on a palette before brushing them onto the canvas.",
        "answer": "painter",
        "explanation": "painter：油漆工；畫家。完整句：The painter mixed colors on a palette before brushing them onto the canvas.",
        "choices": [
          "painter",
          "plumber",
          "pilot",
          "banker"
        ],
        "sourceRecordId": "v32-46"
      },
      {
        "id": "coverage-choice-340",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "cheerful",
        "meaning": "愉快的",
        "prompt": "She stayed _____, smiling and laughing even during the rainy holiday.",
        "answer": "cheerful",
        "explanation": "cheerful：愉快的。完整句：She stayed cheerful, smiling and laughing even during the rainy holiday.",
        "choices": [
          "cheerful",
          "ashamed",
          "depressed",
          "desperate"
        ],
        "sourceRecordId": "v61-22"
      },
      {
        "id": "coverage-choice-60",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "competitor",
        "meaning": "競爭者；參賽者",
        "prompt": "Each _____ in the race hoped to finish ahead of the others.",
        "answer": "competitor",
        "explanation": "competitor：競爭者；參賽者。完整句：Each competitor in the race hoped to finish ahead of the others.",
        "choices": [
          "competitor",
          "ancestor",
          "infant",
          "refugee"
        ],
        "sourceRecordId": "v31-31"
      },
      {
        "id": "choice-28",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "translator",
        "meaning": "譯者；翻譯家",
        "prompt": "The _____ changed the instructions from Spanish into English.",
        "answer": "translator",
        "explanation": "translator：譯者；翻譯家。完整句：The translator changed the instructions from Spanish into English.",
        "choices": [
          "translator",
          "plumber",
          "tailor",
          "pilot"
        ],
        "sourceRecordId": "v33-37"
      },
      {
        "id": "coverage-choice-92",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "migrant",
        "meaning": "移居者",
        "prompt": "A _____ worker moves from place to place to find seasonal jobs.",
        "answer": "migrant",
        "explanation": "migrant：移居者。完整句：A migrant worker moves from place to place to find seasonal jobs.",
        "choices": [
          "migrant",
          "ancestor",
          "emperor",
          "infant"
        ],
        "sourceRecordId": "v32-13x6"
      },
      {
        "id": "coverage-choice-45",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "The _____ explained the interest rates on the bank's savings accounts.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：The banker explained the interest rates on the bank's savings accounts.",
        "choices": [
          "banker",
          "composer",
          "carpenter",
          "clown"
        ],
        "sourceRecordId": "v31-12"
      },
      {
        "id": "coverage-choice-317",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "ton",
        "meaning": "噸",
        "prompt": "The truck carried a metric _____ of sand, equal to one thousand kilograms.",
        "answer": "ton",
        "explanation": "ton：噸。完整句：The truck carried a metric ton of sand, equal to one thousand kilograms.",
        "choices": [
          "ton",
          "kilometer",
          "calorie",
          "pint"
        ],
        "sourceRecordId": "v5-29"
      },
      {
        "id": "coverage-choice-345",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "confusion",
        "meaning": "困惑；混亂",
        "prompt": "The unclear directions caused _____, leaving everyone unsure where to go.",
        "answer": "confusion",
        "explanation": "confusion：困惑；混亂。完整句：The unclear directions caused confusion, leaving everyone unsure where to go.",
        "choices": [
          "confusion",
          "delight",
          "contentment",
          "approval"
        ],
        "sourceRecordId": "v61-29"
      },
      {
        "id": "choice-3",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "bride",
        "meaning": "新娘",
        "prompt": "The _____ smiled as she walked toward the man she was about to marry.",
        "answer": "bride",
        "explanation": "bride：新娘。完整句：The bride smiled as she walked toward the man she was about to marry.",
        "choices": [
          "bride",
          "burglar",
          "critic",
          "banker"
        ],
        "sourceRecordId": "v31-14"
      },
      {
        "id": "coverage-choice-263",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "previous",
        "meaning": "先前的",
        "prompt": "Please read the _____ page, the one immediately before this page.",
        "answer": "previous",
        "explanation": "previous：先前的。完整句：Please read the previous page, the one immediately before this page.",
        "choices": [
          "previous",
          "tropical",
          "atomic",
          "ethnic"
        ],
        "sourceRecordId": "v43-13a"
      },
      {
        "id": "coverage-choice-130",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "physician",
        "meaning": "內科醫生",
        "prompt": "The _____ examined the patient's fever and prescribed medicine.",
        "answer": "physician",
        "explanation": "physician：內科醫生。完整句：The physician examined the patient's fever and prescribed medicine.",
        "choices": [
          "physician",
          "physicist",
          "philosopher",
          "photographer"
        ],
        "sourceRecordId": "v33-05"
      },
      {
        "id": "coverage-choice-62",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "consultant",
        "meaning": "顧問",
        "prompt": "The company hired a safety _____ to give expert advice about reducing accidents.",
        "answer": "consultant",
        "explanation": "consultant：顧問。完整句：The company hired a safety consultant to give expert advice about reducing accidents.",
        "choices": [
          "consultant",
          "burglar",
          "infant",
          "bride"
        ],
        "sourceRecordId": "v31-34"
      },
      {
        "id": "choice-7",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "ambassador",
        "meaning": "大使",
        "prompt": "The _____ spoke officially for her country at the meeting.",
        "answer": "ambassador",
        "explanation": "ambassador：大使。完整句：The ambassador spoke officially for her country at the meeting.",
        "choices": [
          "ambassador",
          "burglar",
          "cleaner",
          "carpenter"
        ],
        "sourceRecordId": "v31-05"
      },
      {
        "id": "choice-83",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "ashamed",
        "meaning": "羞愧的",
        "prompt": "He felt _____ after lying to his best friend and wanted to apologize.",
        "answer": "ashamed",
        "explanation": "ashamed：羞愧的。完整句：He felt ashamed after lying to his best friend and wanted to apologize.",
        "choices": [
          "ashamed",
          "cheerful",
          "desirable",
          "admirable"
        ],
        "sourceRecordId": "v61-14"
      },
      {
        "id": "coverage-choice-239",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "mall",
        "meaning": "購物中心",
        "prompt": "The shopping _____ contains dozens of stores under one roof.",
        "answer": "mall",
        "explanation": "mall：購物中心。完整句：The shopping mall contains dozens of stores under one roof.",
        "choices": [
          "mall",
          "hive",
          "greenhouse",
          "harbor"
        ],
        "sourceRecordId": "v42-33"
      },
      {
        "id": "choice-35",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "refugee",
        "meaning": "難民",
        "prompt": "The _____ crossed the border to escape the war in her homeland.",
        "answer": "refugee",
        "explanation": "refugee：難民。完整句：The refugee crossed the border to escape the war in her homeland.",
        "choices": [
          "refugee",
          "tourist",
          "photographer",
          "publisher"
        ],
        "sourceRecordId": "v33-17"
      },
      {
        "id": "coverage-choice-163",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "technological",
        "meaning": "科技的",
        "prompt": "The discovery led to major _____ advances in computer design.",
        "answer": "technological",
        "explanation": "technological：科技的。完整句：The discovery led to major technological advances in computer design.",
        "choices": [
          "technological",
          "ethnic",
          "tropical",
          "ashamed"
        ],
        "sourceRecordId": "v33-33x4"
      },
      {
        "id": "coverage-choice-302",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "school",
        "meaning": "魚群",
        "prompt": "A _____ of fish swam together beneath the boat.",
        "answer": "school",
        "explanation": "school：魚群。完整句：A school of fish swam together beneath the boat.",
        "choices": [
          "school",
          "flock",
          "herd",
          "pack"
        ],
        "sourceRecordId": "v5-13x3"
      },
      {
        "id": "coverage-choice-226",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "inn",
        "meaning": "（通常位於鄉間的）旅店",
        "prompt": "The tired travelers spent the night at a small country _____ offering meals and rooms.",
        "answer": "inn",
        "explanation": "inn：（通常位於鄉間的）旅店。完整句：The tired travelers spent the night at a small country inn offering meals and rooms.",
        "choices": [
          "inn",
          "hive",
          "greenhouse",
          "comma"
        ],
        "sourceRecordId": "v42-20"
      },
      {
        "id": "coverage-choice-207",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "frequency",
        "meaning": "頻率",
        "prompt": "Increasing the _____ of bus services means buses will arrive more often.",
        "answer": "frequency",
        "explanation": "frequency：頻率。完整句：Increasing the frequency of bus services means buses will arrive more often.",
        "choices": [
          "frequency",
          "rainfall",
          "anniversary",
          "curiosity"
        ],
        "sourceRecordId": "v42-02a"
      },
      {
        "id": "coverage-choice-114",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "millionaire",
        "meaning": "百萬富翁",
        "prompt": "After earning several million dollars, he could truthfully call himself a _____.",
        "answer": "millionaire",
        "explanation": "millionaire：百萬富翁。完整句：After earning several million dollars, he could truthfully call himself a millionaire.",
        "choices": [
          "millionaire",
          "beggar",
          "slave",
          "infant"
        ],
        "sourceRecordId": "v32-36"
      },
      {
        "id": "coverage-choice-93",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "migration",
        "meaning": "移居；遷徙",
        "prompt": "The annual _____ of these birds takes them south for the winter.",
        "answer": "migration",
        "explanation": "migration：移居；遷徙。完整句：The annual migration of these birds takes them south for the winter.",
        "choices": [
          "migration",
          "amusement",
          "approval",
          "curiosity"
        ],
        "sourceRecordId": "v32-13x7"
      },
      {
        "id": "coverage-choice-209",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "gallery",
        "meaning": "畫廊",
        "prompt": "The art _____ displays paintings and sculptures for visitors to admire.",
        "answer": "gallery",
        "explanation": "gallery：畫廊。完整句：The art gallery displays paintings and sculptures for visitors to admire.",
        "choices": [
          "gallery",
          "garage",
          "hive",
          "greenhouse"
        ],
        "sourceRecordId": "v42-04"
      },
      {
        "id": "choice-44",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "anniversary",
        "meaning": "週年紀念日",
        "prompt": "They celebrated their tenth wedding _____ with a family dinner.",
        "answer": "anniversary",
        "explanation": "anniversary：週年紀念日。完整句：They celebrated their tenth wedding anniversary with a family dinner.",
        "choices": [
          "anniversary",
          "aquarium",
          "basement",
          "curve"
        ],
        "sourceRecordId": "v41-04"
      }
    ]
  }
];
