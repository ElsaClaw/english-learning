// Original assessment sentences; source IDs trace back to course vocabulary.
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
    "id": "midterm-5",
    "title": "模擬考 5",
    "letterOnly": true,
    "questions": [
      {
        "id": "m5-reading-2",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "bullet",
        "meaning": "子彈",
        "prompt": "The soldier removed a _____ from the box and loaded his gun.",
        "answer": "bullet",
        "explanation": "bullet：子彈。完整句：The soldier removed a bullet from the box and loaded his gun."
      },
      {
        "id": "m5-reading-5",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "Your _____ receives messages from your eyes and helps you understand what you see.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：Your brain receives messages from your eyes and helps you understand what you see."
      },
      {
        "id": "m5-reading-8",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "After a week in bed, my legs felt too _____ to carry me upstairs.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：After a week in bed, my legs felt too weak to carry me upstairs."
      },
      {
        "id": "m5-reading-11",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "A heart _____ will perform the operation to repair the damaged heart.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：A heart surgeon will perform the operation to repair the damaged heart."
      },
      {
        "id": "m5-reading-14",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "edge",
        "meaning": "邊緣",
        "prompt": "The plate was hanging over the _____ of the table and almost fell.",
        "answer": "edge",
        "explanation": "edge：邊緣。完整句：The plate was hanging over the edge of the table and almost fell."
      },
      {
        "id": "m5-reading-17",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "railway station",
        "meaning": "火車站",
        "prompt": "The taxi dropped us at the _____, where we bought tickets to Taipei.",
        "answer": "railway station",
        "explanation": "railway station：火車站。完整句：The taxi dropped us at the railway station, where we bought tickets to Taipei."
      },
      {
        "id": "m5-reading-20",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "earn",
        "meaning": "贏得；賺得",
        "prompt": "She hopes to _____ her parents' trust by always telling the truth.",
        "answer": "earn",
        "explanation": "earn：贏得；賺得。完整句：She hopes to earn her parents' trust by always telling the truth."
      },
      {
        "id": "m5-reading-23",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "His rude _____ toward the waiter upset everyone at the table.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：His rude attitude toward the waiter upset everyone at the table."
      },
      {
        "id": "m5-reading-26",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "cottage",
        "meaning": "小屋",
        "prompt": "We rented a small country _____ with a fireplace beside the woods.",
        "answer": "cottage",
        "explanation": "cottage：小屋。完整句：We rented a small country cottage with a fireplace beside the woods."
      },
      {
        "id": "m5-reading-29",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "mansion",
        "meaning": "豪宅",
        "prompt": "The tour guide showed us a huge _____ that once belonged to a wealthy king.",
        "answer": "mansion",
        "explanation": "mansion：豪宅。完整句：The tour guide showed us a huge mansion that once belonged to a wealthy king."
      },
      {
        "id": "m5-reading-32",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "valuable",
        "meaning": "有價值的；珍貴的",
        "prompt": "The museum locked the _____ painting behind glass to prevent theft.",
        "answer": "valuable",
        "explanation": "valuable：有價值的；珍貴的。完整句：The museum locked the valuable painting behind glass to prevent theft."
      },
      {
        "id": "m5-reading-35",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "treasure",
        "meaning": "寶藏",
        "prompt": "An old map led the sailors to a chest of hidden _____.",
        "answer": "treasure",
        "explanation": "treasure：寶藏。完整句：An old map led the sailors to a chest of hidden treasure."
      },
      {
        "id": "m5-reading-38",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "dripping",
        "meaning": "滴水的",
        "prompt": "He held his _____ jacket over the sink so the water would not wet the floor.",
        "answer": "dripping",
        "explanation": "dripping：滴水的。完整句：He held his dripping jacket over the sink so the water would not wet the floor."
      },
      {
        "id": "m5-reading-41",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "manager",
        "meaning": "經理",
        "prompt": "When the waiter could not solve our problem, we asked to speak to the restaurant _____.",
        "answer": "manager",
        "explanation": "manager：經理。完整句：When the waiter could not solve our problem, we asked to speak to the restaurant manager."
      },
      {
        "id": "m5-reading-44",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "drugstore",
        "meaning": "藥房",
        "prompt": "The _____ sells medicine, but it does not perform medical operations.",
        "answer": "drugstore",
        "explanation": "drugstore：藥房。完整句：The drugstore sells medicine, but it does not perform medical operations."
      },
      {
        "id": "m5-reading-47",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "reward",
        "meaning": "報酬；獎賞",
        "prompt": "As a _____ for returning the lost wallet, the owner gave Tom twenty dollars.",
        "answer": "reward",
        "explanation": "reward：報酬；獎賞。完整句：As a reward for returning the lost wallet, the owner gave Tom twenty dollars."
      },
      {
        "id": "m5-reading-50",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "will",
        "meaning": "遺囑",
        "prompt": "The lawyer read the man's _____ to learn who would receive his money.",
        "answer": "will",
        "explanation": "will：遺囑。完整句：The lawyer read the man's will to learn who would receive his money."
      },
      {
        "id": "m5-reading-53",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "A _____ manages financial services rather than treating sick patients.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：A banker manages financial services rather than treating sick patients."
      },
      {
        "id": "m5-reading-56",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "commute",
        "meaning": "通勤",
        "prompt": "I will _____ to my new office by train instead of driving every morning.",
        "answer": "commute",
        "explanation": "commute：通勤。完整句：I will commute to my new office by train instead of driving every morning."
      },
      {
        "id": "m5-reading-59",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "stuck",
        "meaning": "卡住的；受困的",
        "prompt": "Our bus was _____ in deep mud and could not move forward.",
        "answer": "stuck",
        "explanation": "stuck：卡住的；受困的。完整句：Our bus was stuck in deep mud and could not move forward."
      },
      {
        "id": "m5-reading-62",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "waterproof",
        "meaning": "防水的",
        "prompt": "We need a _____ tent that will keep the rain from coming inside.",
        "answer": "waterproof",
        "explanation": "waterproof：防水的。完整句：We need a waterproof tent that will keep the rain from coming inside."
      },
      {
        "id": "m5-reading-65",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "drag",
        "meaning": "拖拉",
        "prompt": "Please lift your suitcase instead of trying to _____ it over the rough stones.",
        "answer": "drag",
        "explanation": "drag：拖拉。完整句：Please lift your suitcase instead of trying to drag it over the rough stones."
      },
      {
        "id": "m5-reading-68",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "routine",
        "meaning": "例行事務",
        "prompt": "Her exercise _____ is the same every day: walk, stretch, and then run.",
        "answer": "routine",
        "explanation": "routine：例行事務。完整句：Her exercise routine is the same every day: walk, stretch, and then run."
      },
      {
        "id": "m5-reading-71",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "temperature",
        "meaning": "溫度",
        "prompt": "The _____ fell below zero, and the water began to freeze.",
        "answer": "temperature",
        "explanation": "temperature：溫度。完整句：The temperature fell below zero, and the water began to freeze."
      },
      {
        "id": "m5-reading-74",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "metal",
        "meaning": "金屬",
        "prompt": "The shiny _____ spoon felt much colder than the wooden one.",
        "answer": "metal",
        "explanation": "metal：金屬。完整句：The shiny metal spoon felt much colder than the wooden one."
      },
      {
        "id": "m5-reading-77",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "estimate",
        "meaning": "估計",
        "prompt": "Can you _____ the cost of fixing the roof before we start?",
        "answer": "estimate",
        "explanation": "estimate：估計。完整句：Can you estimate the cost of fixing the roof before we start?"
      },
      {
        "id": "m5-reading-80",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "consume",
        "meaning": "消耗；吃掉",
        "prompt": "Growing teenagers may _____ more food than younger children.",
        "answer": "consume",
        "explanation": "consume：消耗；吃掉。完整句：Growing teenagers may consume more food than younger children."
      },
      {
        "id": "m5-reading-83",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "prefer",
        "meaning": "偏好",
        "prompt": "Would you _____ to sit by the window rather than near the door?",
        "answer": "prefer",
        "explanation": "prefer：偏好。完整句：Would you prefer to sit by the window rather than near the door?"
      },
      {
        "id": "m5-reading-86",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "ordinary",
        "meaning": "普通的",
        "prompt": "Unlike the rare blue flower, this _____ kind grows in almost every garden.",
        "answer": "ordinary",
        "explanation": "ordinary：普通的。完整句：Unlike the rare blue flower, this ordinary kind grows in almost every garden."
      },
      {
        "id": "m5-reading-89",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "perform",
        "meaning": "表演",
        "prompt": "The dancers practice daily so they can _____ well in front of an audience.",
        "answer": "perform",
        "explanation": "perform：表演。完整句：The dancers practice daily so they can perform well in front of an audience."
      },
      {
        "id": "m5-reading-92",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "gate",
        "meaning": "大門",
        "prompt": "Please close the garden _____ so the dog cannot run into the street.",
        "answer": "gate",
        "explanation": "gate：大門。完整句：Please close the garden gate so the dog cannot run into the street."
      },
      {
        "id": "m5-reading-95",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "file",
        "meaning": "檔案",
        "prompt": "I cannot open this _____ on my computer because its data is damaged.",
        "answer": "file",
        "explanation": "file：檔案。完整句：I cannot open this file on my computer because its data is damaged."
      },
      {
        "id": "m5-reading-98",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "chalk",
        "meaning": "粉筆",
        "prompt": "My fingers became dusty after I drew on the board with _____.",
        "answer": "chalk",
        "explanation": "chalk：粉筆。完整句：My fingers became dusty after I drew on the board with chalk."
      },
      {
        "id": "m5-reading-101",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "screen",
        "meaning": "螢幕",
        "prompt": "The words on the computer _____ are too small for me to read.",
        "answer": "screen",
        "explanation": "screen：螢幕。完整句：The words on the computer screen are too small for me to read."
      },
      {
        "id": "m5-reading-104",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "error",
        "meaning": "錯誤",
        "prompt": "The computer displayed an _____ message because the password was incorrect.",
        "answer": "error",
        "explanation": "error：錯誤。完整句：The computer displayed an error message because the password was incorrect."
      },
      {
        "id": "m5-reading-107",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "dozen",
        "meaning": "一打",
        "prompt": "Half a _____ pencils means six pencils.",
        "answer": "dozen",
        "explanation": "dozen：一打。完整句：Half a dozen pencils means six pencils."
      },
      {
        "id": "m5-reading-110",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "refrigerator",
        "meaning": "冰箱",
        "prompt": "Our _____ stopped working, so the food inside was no longer cold.",
        "answer": "refrigerator",
        "explanation": "refrigerator：冰箱。完整句：Our refrigerator stopped working, so the food inside was no longer cold."
      },
      {
        "id": "m5-reading-113",
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
        "id": "m5-reading-116",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "upload",
        "meaning": "上傳",
        "prompt": "Students must _____ their homework files to the online learning system.",
        "answer": "upload",
        "explanation": "upload：上傳。完整句：Students must upload their homework files to the online learning system."
      },
      {
        "id": "m5-reading-119",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "connect",
        "meaning": "連接",
        "prompt": "You must _____ your phone to the Internet before using this online service.",
        "answer": "connect",
        "explanation": "connect：連接。完整句：You must connect your phone to the Internet before using this online service."
      },
      {
        "id": "m5-choice-122",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "accountant",
        "meaning": "會計師",
        "prompt": "Our _____ keeps careful records of all the money the business receives.",
        "answer": "accountant",
        "explanation": "accountant：會計師。完整句：Our accountant keeps careful records of all the money the business receives.",
        "choices": [
          "accountant",
          "composer",
          "athlete",
          "carpenter"
        ]
      },
      {
        "id": "m5-choice-125",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carpenter",
        "meaning": "木匠",
        "prompt": "The _____ cut the boards before building a new cupboard.",
        "answer": "carpenter",
        "explanation": "carpenter：木匠。完整句：The carpenter cut the boards before building a new cupboard.",
        "choices": [
          "carpenter",
          "banker",
          "athlete",
          "composer"
        ]
      },
      {
        "id": "m5-choice-128",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "composer",
        "meaning": "作曲家",
        "prompt": "A famous _____ wrote this symphony when she was only twenty.",
        "answer": "composer",
        "explanation": "composer：作曲家。完整句：A famous composer wrote this symphony when she was only twenty.",
        "choices": [
          "composer",
          "carpenter",
          "cleaner",
          "burglar"
        ]
      },
      {
        "id": "m5-choice-131",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "detective",
        "meaning": "偵探",
        "prompt": "A private _____ followed the clues to solve the mystery.",
        "answer": "detective",
        "explanation": "detective：偵探。完整句：A private detective followed the clues to solve the mystery.",
        "choices": [
          "detective",
          "composer",
          "athlete",
          "bride"
        ]
      },
      {
        "id": "m5-choice-134",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "librarian",
        "meaning": "圖書館員",
        "prompt": "Our school _____ places returned books on the correct shelves.",
        "answer": "librarian",
        "explanation": "librarian：圖書館員。完整句：Our school librarian places returned books on the correct shelves.",
        "choices": [
          "librarian",
          "miner",
          "mechanic",
          "magician"
        ]
      },
      {
        "id": "m5-choice-137",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanic",
        "meaning": "技工",
        "prompt": "Our bicycle _____ fixed the brakes before the long ride.",
        "answer": "mechanic",
        "explanation": "mechanic：技工。完整句：Our bicycle mechanic fixed the brakes before the long ride.",
        "choices": [
          "mechanic",
          "librarian",
          "novelist",
          "monk"
        ]
      },
      {
        "id": "m5-choice-140",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lifeguard",
        "meaning": "救生員",
        "prompt": "A _____ watches the pool and helps swimmers who are in danger.",
        "answer": "lifeguard",
        "explanation": "lifeguard：救生員。完整句：A lifeguard watches the pool and helps swimmers who are in danger.",
        "choices": [
          "lifeguard",
          "historian",
          "novelist",
          "miner"
        ]
      },
      {
        "id": "m5-choice-143",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "historian",
        "meaning": "歷史學家",
        "prompt": "A _____ explained how life in this town changed over two centuries.",
        "answer": "historian",
        "explanation": "historian：歷史學家。完整句：A historian explained how life in this town changed over two centuries.",
        "choices": [
          "historian",
          "mechanic",
          "hairdresser",
          "lifeguard"
        ]
      },
      {
        "id": "m5-choice-146",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "plumber",
        "meaning": "水電工；水管瓦斯工人",
        "prompt": "We called a _____ because water would not drain from the bathtub.",
        "answer": "plumber",
        "explanation": "plumber：水電工；水管瓦斯工人。完整句：We called a plumber because water would not drain from the bathtub.",
        "choices": [
          "plumber",
          "pilot",
          "tailor",
          "translator"
        ]
      },
      {
        "id": "m5-choice-149",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tailor",
        "meaning": "裁縫師",
        "prompt": "A _____ made a suit that fitted my father perfectly.",
        "answer": "tailor",
        "explanation": "tailor：裁縫師。完整句：A tailor made a suit that fitted my father perfectly.",
        "choices": [
          "tailor",
          "pilot",
          "plumber",
          "physicist"
        ]
      },
      {
        "id": "m5-choice-152",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "translator",
        "meaning": "譯者；翻譯家",
        "prompt": "A _____ must understand both languages before translating a book.",
        "answer": "translator",
        "explanation": "translator：譯者；翻譯家。完整句：A translator must understand both languages before translating a book.",
        "choices": [
          "translator",
          "tailor",
          "plumber",
          "pilot"
        ]
      },
      {
        "id": "m5-choice-155",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "shepherd",
        "meaning": "牧羊人",
        "prompt": "A _____ spent the day watching a flock on the green hillside.",
        "answer": "shepherd",
        "explanation": "shepherd：牧羊人。完整句：A shepherd spent the day watching a flock on the green hillside.",
        "choices": [
          "shepherd",
          "publisher",
          "translator",
          "plumber"
        ]
      },
      {
        "id": "m5-choice-158",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aquarium",
        "meaning": "水族館；水族箱",
        "prompt": "The _____ keeps sea animals in tanks that visitors can walk past.",
        "answer": "aquarium",
        "explanation": "aquarium：水族館；水族箱。完整句：The aquarium keeps sea animals in tanks that visitors can walk past.",
        "choices": [
          "aquarium",
          "cinema",
          "alley",
          "cafeteria"
        ]
      },
      {
        "id": "m5-choice-161",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deadline",
        "meaning": "截止日期",
        "prompt": "We worked late to finish the project before its Friday _____.",
        "answer": "deadline",
        "explanation": "deadline：截止日期。完整句：We worked late to finish the project before its Friday deadline.",
        "choices": [
          "deadline",
          "decade",
          "county",
          "curve"
        ]
      },
      {
        "id": "m5-choice-164",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "basement",
        "meaning": "地下室",
        "prompt": "The house has a _____ under the first floor where we store old boxes.",
        "answer": "basement",
        "explanation": "basement：地下室。完整句：The house has a basement under the first floor where we store old boxes.",
        "choices": [
          "basement",
          "avenue",
          "campus",
          "deck"
        ]
      },
      {
        "id": "m5-choice-167",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "decade",
        "meaning": "十年",
        "prompt": "A _____ is ten years, not one hundred years.",
        "answer": "decade",
        "explanation": "decade：十年。完整句：A decade is ten years, not one hundred years.",
        "choices": [
          "decade",
          "deadline",
          "era",
          "anniversary"
        ]
      },
      {
        "id": "m5-choice-170",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "greenhouse",
        "meaning": "花房；溫室",
        "prompt": "Tomatoes inside the warm _____ grew faster than those outside in the cold.",
        "answer": "greenhouse",
        "explanation": "greenhouse：花房；溫室。完整句：Tomatoes inside the warm greenhouse grew faster than those outside in the cold.",
        "choices": [
          "greenhouse",
          "harbor",
          "garage",
          "lobby"
        ]
      },
      {
        "id": "m5-choice-173",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lighthouse",
        "meaning": "燈塔",
        "prompt": "The _____ flashed its powerful light to guide boats safely at night.",
        "answer": "lighthouse",
        "explanation": "lighthouse：燈塔。完整句：The lighthouse flashed its powerful light to guide boats safely at night.",
        "choices": [
          "lighthouse",
          "dormitory",
          "kindergarten",
          "garage"
        ]
      },
      {
        "id": "m5-choice-176",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hive",
        "meaning": "蜂窩",
        "prompt": "The bees flew back to their _____ after visiting the flowers.",
        "answer": "hive",
        "explanation": "hive：蜂窩。完整句：The bees flew back to their hive after visiting the flowers.",
        "choices": [
          "hive",
          "inn",
          "mall",
          "lobby"
        ]
      },
      {
        "id": "m5-choice-179",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "observatory",
        "meaning": "天文台；觀測站",
        "prompt": "Astronomers at the _____ watched the comet through a telescope.",
        "answer": "observatory",
        "explanation": "observatory：天文台；觀測站。完整句：Astronomers at the observatory watched the comet through a telescope.",
        "choices": [
          "observatory",
          "nursery",
          "garage",
          "harbor"
        ]
      },
      {
        "id": "m5-choice-182",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tunnel",
        "meaning": "隧道",
        "prompt": "The road passes through a _____ cut into the mountain.",
        "answer": "tunnel",
        "explanation": "tunnel：隧道。完整句：The road passes through a tunnel cut into the mountain.",
        "choices": [
          "tunnel",
          "stadium",
          "palace",
          "studio"
        ]
      },
      {
        "id": "m5-choice-185",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postpone",
        "meaning": "使延期",
        "prompt": "The sick singer had to _____ her concert until she recovered.",
        "answer": "postpone",
        "explanation": "postpone：使延期。完整句：The sick singer had to postpone her concert until she recovered.",
        "choices": [
          "postpone",
          "surround",
          "prolong",
          "locate"
        ]
      },
      {
        "id": "m5-choice-188",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "temporary",
        "meaning": "暫時的",
        "prompt": "The bridge is a _____ solution until workers finish the permanent one.",
        "answer": "temporary",
        "explanation": "temporary：暫時的。完整句：The bridge is a temporary solution until workers finish the permanent one.",
        "choices": [
          "temporary",
          "tropical",
          "outer",
          "yearly"
        ]
      },
      {
        "id": "m5-choice-191",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "rural",
        "meaning": "鄉村的",
        "prompt": "Many people leave _____ villages to find jobs in large cities.",
        "answer": "rural",
        "explanation": "rural：鄉村的。完整句：Many people leave rural villages to find jobs in large cities.",
        "choices": [
          "rural",
          "urban",
          "weekly",
          "temporary"
        ]
      },
      {
        "id": "m5-choice-194",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "flock",
        "meaning": "鳥群；羊群；（同類人的）一大群",
        "prompt": "The farmer watched a _____ of sheep moving across the hill.",
        "answer": "flock",
        "explanation": "flock：鳥群；羊群；（同類人的）一大群。完整句：The farmer watched a flock of sheep moving across the hill.",
        "choices": [
          "flock",
          "herd",
          "school",
          "pack"
        ]
      },
      {
        "id": "m5-choice-197",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "slice",
        "meaning": "一片",
        "prompt": "May I have one _____ of this round cake rather than the whole cake?",
        "answer": "slice",
        "explanation": "slice：一片。完整句：May I have one slice of this round cake rather than the whole cake?",
        "choices": [
          "slice",
          "herd",
          "flock",
          "gallon"
        ]
      },
      {
        "id": "m5-choice-200",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "parcel",
        "meaning": "包裹",
        "prompt": "A _____ containing my new shoes arrived by mail today.",
        "answer": "parcel",
        "explanation": "parcel：包裹。完整句：A parcel containing my new shoes arrived by mail today.",
        "choices": [
          "parcel",
          "comma",
          "percentage",
          "calorie"
        ]
      },
      {
        "id": "m5-choice-203",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "ashamed",
        "meaning": "羞愧的",
        "prompt": "He was _____ of cheating and promised never to do it again.",
        "answer": "ashamed",
        "explanation": "ashamed：羞愧的。完整句：He was ashamed of cheating and promised never to do it again.",
        "choices": [
          "ashamed",
          "cheerful",
          "admirable",
          "attractive"
        ]
      },
      {
        "id": "m5-choice-206",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curiosity",
        "meaning": "好奇心",
        "prompt": "A child's _____ often leads to questions about how things work.",
        "answer": "curiosity",
        "explanation": "curiosity：好奇心。完整句：A child's curiosity often leads to questions about how things work.",
        "choices": [
          "curiosity",
          "disgust",
          "approval",
          "depression"
        ]
      },
      {
        "id": "m5-choice-209",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "conscience",
        "meaning": "良心",
        "prompt": "A guilty _____ kept her awake after she stole the money.",
        "answer": "conscience",
        "explanation": "conscience：良心。完整句：A guilty conscience kept her awake after she stole the money.",
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
    "id": "midterm-6",
    "title": "模擬考 6",
    "letterOnly": true,
    "questions": [
      {
        "id": "m6-reading-3",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "bullet",
        "meaning": "子彈",
        "prompt": "The thick metal shield stopped the _____ that had been fired at him.",
        "answer": "bullet",
        "explanation": "bullet：子彈。完整句：The thick metal shield stopped the bullet that had been fired at him."
      },
      {
        "id": "m6-reading-6",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "brain",
        "meaning": "大腦",
        "prompt": "The doctor studied a picture of the patient's _____ to find the cause of his memory problems.",
        "answer": "brain",
        "explanation": "brain：大腦。完整句：The doctor studied a picture of the patient's brain to find the cause of his memory problems."
      },
      {
        "id": "m6-reading-9",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "weak",
        "meaning": "虛弱的",
        "prompt": "The old rope was too _____ to hold the heavy box and soon broke.",
        "answer": "weak",
        "explanation": "weak：虛弱的。完整句：The old rope was too weak to hold the heavy box and soon broke."
      },
      {
        "id": "m6-reading-12",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "surgeon",
        "meaning": "外科醫生",
        "prompt": "After the operation, the _____ explained how she had removed the broken bone.",
        "answer": "surgeon",
        "explanation": "surgeon：外科醫生。完整句：After the operation, the surgeon explained how she had removed the broken bone."
      },
      {
        "id": "m6-reading-15",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "edge",
        "meaning": "邊緣",
        "prompt": "She sat at the _____ of the pool with only her feet in the water.",
        "answer": "edge",
        "explanation": "edge：邊緣。完整句：She sat at the edge of the pool with only her feet in the water."
      },
      {
        "id": "m6-reading-18",
        "type": "reading",
        "sourceId": "u1",
        "sourceTitle": "八年級英文課文 Unit 1",
        "word": "railway station",
        "meaning": "火車站",
        "prompt": "The last train had already left the _____ when we reached the platform.",
        "answer": "railway station",
        "explanation": "railway station：火車站。完整句：The last train had already left the railway station when we reached the platform."
      },
      {
        "id": "m6-reading-21",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "earn",
        "meaning": "贏得；賺得",
        "prompt": "Students can _____ extra money by helping at the bookstore on weekends.",
        "answer": "earn",
        "explanation": "earn：贏得；賺得。完整句：Students can earn extra money by helping at the bookstore on weekends."
      },
      {
        "id": "m6-reading-24",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "attitude",
        "meaning": "態度",
        "prompt": "You need to change your _____ toward mistakes and see them as chances to learn.",
        "answer": "attitude",
        "explanation": "attitude：態度。完整句：You need to change your attitude toward mistakes and see them as chances to learn."
      },
      {
        "id": "m6-reading-27",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "cottage",
        "meaning": "小屋",
        "prompt": "The little _____ near the farm was large enough for only one family.",
        "answer": "cottage",
        "explanation": "cottage：小屋。完整句：The little cottage near the farm was large enough for only one family."
      },
      {
        "id": "m6-reading-30",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "mansion",
        "meaning": "豪宅",
        "prompt": "Only a very rich family could afford that enormous _____ with its own theater.",
        "answer": "mansion",
        "explanation": "mansion：豪宅。完整句：Only a very rich family could afford that enormous mansion with its own theater."
      },
      {
        "id": "m6-reading-33",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "valuable",
        "meaning": "有價值的；珍貴的",
        "prompt": "Her advice was _____ because it helped us avoid a costly mistake.",
        "answer": "valuable",
        "explanation": "valuable：有價值的；珍貴的。完整句：Her advice was valuable because it helped us avoid a costly mistake."
      },
      {
        "id": "m6-reading-36",
        "type": "reading",
        "sourceId": "u21",
        "sourceTitle": "八年級英文課文 Unit 2.1",
        "word": "treasure",
        "meaning": "寶藏",
        "prompt": "Divers found a box of gold coins and jewels among the ship's lost _____.",
        "answer": "treasure",
        "explanation": "treasure：寶藏。完整句：Divers found a box of gold coins and jewels among the ship's lost treasure."
      },
      {
        "id": "m6-reading-39",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "dripping",
        "meaning": "滴水的",
        "prompt": "Water kept falling from the dog's _____ fur after its bath.",
        "answer": "dripping",
        "explanation": "dripping：滴水的。完整句：Water kept falling from the dog's dripping fur after its bath."
      },
      {
        "id": "m6-reading-42",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "manager",
        "meaning": "經理",
        "prompt": "As the hotel _____, she is responsible for the staff and the daily business.",
        "answer": "manager",
        "explanation": "manager：經理。完整句：As the hotel manager, she is responsible for the staff and the daily business."
      },
      {
        "id": "m6-reading-45",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "drugstore",
        "meaning": "藥房",
        "prompt": "The nurse suggested buying this medicine at a nearby _____.",
        "answer": "drugstore",
        "explanation": "drugstore：藥房。完整句：The nurse suggested buying this medicine at a nearby drugstore."
      },
      {
        "id": "m6-reading-48",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "reward",
        "meaning": "報酬；獎賞",
        "prompt": "The winner received a medal as a _____ for months of hard training.",
        "answer": "reward",
        "explanation": "reward：報酬；獎賞。完整句：The winner received a medal as a reward for months of hard training."
      },
      {
        "id": "m6-reading-51",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "will",
        "meaning": "遺囑",
        "prompt": "Before he died, he wrote a _____ leaving his farm to his two sons.",
        "answer": "will",
        "explanation": "will：遺囑。完整句：Before he died, he wrote a will leaving his farm to his two sons."
      },
      {
        "id": "m6-reading-54",
        "type": "reading",
        "sourceId": "u22",
        "sourceTitle": "八年級英文課文 Unit 2.2",
        "word": "banker",
        "meaning": "銀行家",
        "prompt": "The local _____ helped the farmer arrange a loan to buy more land.",
        "answer": "banker",
        "explanation": "banker：銀行家。完整句：The local banker helped the farmer arrange a loan to buy more land."
      },
      {
        "id": "m6-reading-57",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "commute",
        "meaning": "通勤",
        "prompt": "They _____ two hours a day between their village and their workplace.",
        "answer": "commute",
        "explanation": "commute：通勤。完整句：They commute two hours a day between their village and their workplace."
      },
      {
        "id": "m6-reading-60",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "stuck",
        "meaning": "卡住的；受困的",
        "prompt": "The window was _____, and even Dad could not push it open.",
        "answer": "stuck",
        "explanation": "stuck：卡住的；受困的。完整句：The window was stuck, and even Dad could not push it open."
      },
      {
        "id": "m6-reading-63",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "waterproof",
        "meaning": "防水的",
        "prompt": "The camera's _____ case allows us to take pictures underwater.",
        "answer": "waterproof",
        "explanation": "waterproof：防水的。完整句：The camera's waterproof case allows us to take pictures underwater."
      },
      {
        "id": "m6-reading-66",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "drag",
        "meaning": "拖拉",
        "prompt": "They had to _____ the broken boat across the sand because it had no wheels.",
        "answer": "drag",
        "explanation": "drag：拖拉。完整句：They had to drag the broken boat across the sand because it had no wheels."
      },
      {
        "id": "m6-reading-69",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "routine",
        "meaning": "例行事務",
        "prompt": "Feeding the fish has become part of our usual after-school _____.",
        "answer": "routine",
        "explanation": "routine：例行事務。完整句：Feeding the fish has become part of our usual after-school routine."
      },
      {
        "id": "m6-reading-72",
        "type": "reading",
        "sourceId": "u31",
        "sourceTitle": "八年級英文課文 Unit 3.1",
        "word": "temperature",
        "meaning": "溫度",
        "prompt": "Set the oven's _____ to 180 degrees before baking the cake.",
        "answer": "temperature",
        "explanation": "temperature：溫度。完整句：Set the oven's temperature to 180 degrees before baking the cake."
      },
      {
        "id": "m6-reading-75",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "metal",
        "meaning": "金屬",
        "prompt": "Magnets can attract some kinds of _____, such as iron.",
        "answer": "metal",
        "explanation": "metal：金屬。完整句：Magnets can attract some kinds of metal, such as iron."
      },
      {
        "id": "m6-reading-78",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "estimate",
        "meaning": "估計",
        "prompt": "Use the map to _____ how long the walk will take.",
        "answer": "estimate",
        "explanation": "estimate：估計。完整句：Use the map to estimate how long the walk will take."
      },
      {
        "id": "m6-reading-81",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "consume",
        "meaning": "消耗；吃掉",
        "prompt": "Leaving the heater on all night will _____ a lot of electricity.",
        "answer": "consume",
        "explanation": "consume：消耗；吃掉。完整句：Leaving the heater on all night will consume a lot of electricity."
      },
      {
        "id": "m6-reading-84",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "prefer",
        "meaning": "偏好",
        "prompt": "Cats often _____ warm places to cold corners when they sleep.",
        "answer": "prefer",
        "explanation": "prefer：偏好。完整句：Cats often prefer warm places to cold corners when they sleep."
      },
      {
        "id": "m6-reading-87",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "ordinary",
        "meaning": "普通的",
        "prompt": "The secret door looked like an _____ wall until someone pushed it.",
        "answer": "ordinary",
        "explanation": "ordinary：普通的。完整句：The secret door looked like an ordinary wall until someone pushed it."
      },
      {
        "id": "m6-reading-90",
        "type": "reading",
        "sourceId": "u32",
        "sourceTitle": "八年級英文課文 Unit 3.2",
        "word": "perform",
        "meaning": "表演",
        "prompt": "The children will _____ a short play for their parents on Friday.",
        "answer": "perform",
        "explanation": "perform：表演。完整句：The children will perform a short play for their parents on Friday."
      },
      {
        "id": "m6-reading-93",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "gate",
        "meaning": "大門",
        "prompt": "A tall iron _____ blocks the entrance to the factory at night.",
        "answer": "gate",
        "explanation": "gate：大門。完整句：A tall iron gate blocks the entrance to the factory at night."
      },
      {
        "id": "m6-reading-96",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "file",
        "meaning": "檔案",
        "prompt": "Give the photo _____ a clear name so you can find it on your computer later.",
        "answer": "file",
        "explanation": "file：檔案。完整句：Give the photo file a clear name so you can find it on your computer later."
      },
      {
        "id": "m6-reading-99",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "chalk",
        "meaning": "粉筆",
        "prompt": "The blue _____ broke in half while she was writing on the classroom board.",
        "answer": "chalk",
        "explanation": "chalk：粉筆。完整句：The blue chalk broke in half while she was writing on the classroom board."
      },
      {
        "id": "m6-reading-102",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "screen",
        "meaning": "螢幕",
        "prompt": "We watched the movie on a large _____ at the front of the room.",
        "answer": "screen",
        "explanation": "screen：螢幕。完整句：We watched the movie on a large screen at the front of the room."
      },
      {
        "id": "m6-reading-105",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "error",
        "meaning": "錯誤",
        "prompt": "Please correct the spelling _____ in the first line before sending the letter.",
        "answer": "error",
        "explanation": "error：錯誤。完整句：Please correct the spelling error in the first line before sending the letter."
      },
      {
        "id": "m6-reading-108",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "dozen",
        "meaning": "一打",
        "prompt": "She bought a _____ roses and put all twelve in a vase.",
        "answer": "dozen",
        "explanation": "dozen：一打。完整句：She bought a dozen roses and put all twelve in a vase."
      },
      {
        "id": "m6-reading-111",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "refrigerator",
        "meaning": "冰箱",
        "prompt": "She opened the _____ and took out a cold bottle of juice.",
        "answer": "refrigerator",
        "explanation": "refrigerator：冰箱。完整句：She opened the refrigerator and took out a cold bottle of juice."
      },
      {
        "id": "m6-reading-114",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "wallet",
        "meaning": "錢包",
        "prompt": "She keeps a little cash in a leather _____ inside her handbag.",
        "answer": "wallet",
        "explanation": "wallet：錢包。完整句：She keeps a little cash in a leather wallet inside her handbag."
      },
      {
        "id": "m6-reading-117",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "upload",
        "meaning": "上傳",
        "prompt": "It may take a few minutes to _____ these large photos to the server.",
        "answer": "upload",
        "explanation": "upload：上傳。完整句：It may take a few minutes to upload these large photos to the server."
      },
      {
        "id": "m6-reading-120",
        "type": "reading",
        "sourceId": "hanlin-3a-u4",
        "sourceTitle": "翰林英文課本 三上 Unit 4",
        "word": "connect",
        "meaning": "連接",
        "prompt": "The new bridge will _____ the villages on opposite sides of the river.",
        "answer": "connect",
        "explanation": "connect：連接。完整句：The new bridge will connect the villages on opposite sides of the river."
      },
      {
        "id": "m6-choice-123",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "accountant",
        "meaning": "會計師",
        "prompt": "The factory asked an _____ to prepare its financial report.",
        "answer": "accountant",
        "explanation": "accountant：會計師。完整句：The factory asked an accountant to prepare its financial report.",
        "choices": [
          "accountant",
          "composer",
          "athlete",
          "carpenter"
        ]
      },
      {
        "id": "m6-choice-126",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "carpenter",
        "meaning": "木匠",
        "prompt": "We need a _____ to make a wooden door that fits this opening.",
        "answer": "carpenter",
        "explanation": "carpenter：木匠。完整句：We need a carpenter to make a wooden door that fits this opening.",
        "choices": [
          "carpenter",
          "banker",
          "athlete",
          "composer"
        ]
      },
      {
        "id": "m6-choice-129",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "composer",
        "meaning": "作曲家",
        "prompt": "The film's _____ spent weeks writing music for the final scene.",
        "answer": "composer",
        "explanation": "composer：作曲家。完整句：The film's composer spent weeks writing music for the final scene.",
        "choices": [
          "composer",
          "carpenter",
          "cleaner",
          "burglar"
        ]
      },
      {
        "id": "m6-choice-132",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-1",
        "sourceTitle": "字彙字識 3-1",
        "word": "detective",
        "meaning": "偵探",
        "prompt": "The _____ examined the footprints to discover who entered the house.",
        "answer": "detective",
        "explanation": "detective：偵探。完整句：The detective examined the footprints to discover who entered the house.",
        "choices": [
          "detective",
          "composer",
          "athlete",
          "bride"
        ]
      },
      {
        "id": "m6-choice-135",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "librarian",
        "meaning": "圖書館員",
        "prompt": "Ask the _____ to help you find a novel in the library's collection.",
        "answer": "librarian",
        "explanation": "librarian：圖書館員。完整句：Ask the librarian to help you find a novel in the library's collection.",
        "choices": [
          "librarian",
          "miner",
          "mechanic",
          "magician"
        ]
      },
      {
        "id": "m6-choice-138",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "mechanic",
        "meaning": "技工",
        "prompt": "The garage's _____ discovered why the motorcycle would not start.",
        "answer": "mechanic",
        "explanation": "mechanic：技工。完整句：The garage's mechanic discovered why the motorcycle would not start.",
        "choices": [
          "mechanic",
          "librarian",
          "novelist",
          "monk"
        ]
      },
      {
        "id": "m6-choice-141",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "lifeguard",
        "meaning": "救生員",
        "prompt": "The _____ threw a rescue ring to the child struggling in the water.",
        "answer": "lifeguard",
        "explanation": "lifeguard：救生員。完整句：The lifeguard threw a rescue ring to the child struggling in the water.",
        "choices": [
          "lifeguard",
          "historian",
          "novelist",
          "miner"
        ]
      },
      {
        "id": "m6-choice-144",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-2",
        "sourceTitle": "字彙字識 3-2",
        "word": "historian",
        "meaning": "歷史學家",
        "prompt": "The _____ compared old records to discover when the war began.",
        "answer": "historian",
        "explanation": "historian：歷史學家。完整句：The historian compared old records to discover when the war began.",
        "choices": [
          "historian",
          "mechanic",
          "hairdresser",
          "lifeguard"
        ]
      },
      {
        "id": "m6-choice-147",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "plumber",
        "meaning": "水電工；水管瓦斯工人",
        "prompt": "The _____ stopped the leak by fixing the kitchen tap.",
        "answer": "plumber",
        "explanation": "plumber：水電工；水管瓦斯工人。完整句：The plumber stopped the leak by fixing the kitchen tap.",
        "choices": [
          "plumber",
          "pilot",
          "tailor",
          "translator"
        ]
      },
      {
        "id": "m6-choice-150",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "tailor",
        "meaning": "裁縫師",
        "prompt": "The _____ sewed a new pocket onto the customer's trousers.",
        "answer": "tailor",
        "explanation": "tailor：裁縫師。完整句：The tailor sewed a new pocket onto the customer's trousers.",
        "choices": [
          "tailor",
          "pilot",
          "plumber",
          "physicist"
        ]
      },
      {
        "id": "m6-choice-153",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "translator",
        "meaning": "譯者；翻譯家",
        "prompt": "The _____ checked whether the English words kept the meaning of the Japanese text.",
        "answer": "translator",
        "explanation": "translator：譯者；翻譯家。完整句：The translator checked whether the English words kept the meaning of the Japanese text.",
        "choices": [
          "translator",
          "tailor",
          "plumber",
          "pilot"
        ]
      },
      {
        "id": "m6-choice-156",
        "type": "choice",
        "sourceId": "vocab-zhishi-3-3",
        "sourceTitle": "字彙字識 3-3",
        "word": "shepherd",
        "meaning": "牧羊人",
        "prompt": "The _____ searched the valley for a lamb that had left his flock.",
        "answer": "shepherd",
        "explanation": "shepherd：牧羊人。完整句：The shepherd searched the valley for a lamb that had left his flock.",
        "choices": [
          "shepherd",
          "publisher",
          "translator",
          "plumber"
        ]
      },
      {
        "id": "m6-choice-159",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "aquarium",
        "meaning": "水族館；水族箱",
        "prompt": "A guide at the _____ explained how the fish were fed.",
        "answer": "aquarium",
        "explanation": "aquarium：水族館；水族箱。完整句：A guide at the aquarium explained how the fish were fed.",
        "choices": [
          "aquarium",
          "cinema",
          "alley",
          "cafeteria"
        ]
      },
      {
        "id": "m6-choice-162",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "deadline",
        "meaning": "截止日期",
        "prompt": "The teacher extended the _____, giving us two more days to submit our work.",
        "answer": "deadline",
        "explanation": "deadline：截止日期。完整句：The teacher extended the deadline, giving us two more days to submit our work.",
        "choices": [
          "deadline",
          "decade",
          "county",
          "curve"
        ]
      },
      {
        "id": "m6-choice-165",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "basement",
        "meaning": "地下室",
        "prompt": "The _____ flooded first because it was the lowest room in the building.",
        "answer": "basement",
        "explanation": "basement：地下室。完整句：The basement flooded first because it was the lowest room in the building.",
        "choices": [
          "basement",
          "avenue",
          "campus",
          "deck"
        ]
      },
      {
        "id": "m6-choice-168",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-1",
        "sourceTitle": "字彙字識 4-1",
        "word": "decade",
        "meaning": "十年",
        "prompt": "She has taught here for a _____, starting exactly ten years ago.",
        "answer": "decade",
        "explanation": "decade：十年。完整句：She has taught here for a decade, starting exactly ten years ago.",
        "choices": [
          "decade",
          "deadline",
          "era",
          "anniversary"
        ]
      },
      {
        "id": "m6-choice-171",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "greenhouse",
        "meaning": "花房；溫室",
        "prompt": "The farmer repaired the glass roof of the _____ above the plants.",
        "answer": "greenhouse",
        "explanation": "greenhouse：花房；溫室。完整句：The farmer repaired the glass roof of the greenhouse above the plants.",
        "choices": [
          "greenhouse",
          "harbor",
          "garage",
          "lobby"
        ]
      },
      {
        "id": "m6-choice-174",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "lighthouse",
        "meaning": "燈塔",
        "prompt": "A tall _____ stood on the rocky coast to warn passing ships.",
        "answer": "lighthouse",
        "explanation": "lighthouse：燈塔。完整句：A tall lighthouse stood on the rocky coast to warn passing ships.",
        "choices": [
          "lighthouse",
          "dormitory",
          "kindergarten",
          "garage"
        ]
      },
      {
        "id": "m6-choice-177",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "hive",
        "meaning": "蜂窩",
        "prompt": "A queen bee and thousands of workers live in one _____.",
        "answer": "hive",
        "explanation": "hive：蜂窩。完整句：A queen bee and thousands of workers live in one hive.",
        "choices": [
          "hive",
          "inn",
          "mall",
          "lobby"
        ]
      },
      {
        "id": "m6-choice-180",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-2",
        "sourceTitle": "字彙字識 4-2",
        "word": "observatory",
        "meaning": "天文台；觀測站",
        "prompt": "We visited an _____ to learn how scientists observe the night sky.",
        "answer": "observatory",
        "explanation": "observatory：天文台；觀測站。完整句：We visited an observatory to learn how scientists observe the night sky.",
        "choices": [
          "observatory",
          "nursery",
          "garage",
          "harbor"
        ]
      },
      {
        "id": "m6-choice-183",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "tunnel",
        "meaning": "隧道",
        "prompt": "It was dark inside the underground _____ until we reached its far end.",
        "answer": "tunnel",
        "explanation": "tunnel：隧道。完整句：It was dark inside the underground tunnel until we reached its far end.",
        "choices": [
          "tunnel",
          "stadium",
          "palace",
          "studio"
        ]
      },
      {
        "id": "m6-choice-186",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "postpone",
        "meaning": "使延期",
        "prompt": "They will _____ the meeting to a later date if the manager is absent.",
        "answer": "postpone",
        "explanation": "postpone：使延期。完整句：They will postpone the meeting to a later date if the manager is absent.",
        "choices": [
          "postpone",
          "surround",
          "prolong",
          "locate"
        ]
      },
      {
        "id": "m6-choice-189",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "temporary",
        "meaning": "暫時的",
        "prompt": "She found a _____ job that would last for only two weeks.",
        "answer": "temporary",
        "explanation": "temporary：暫時的。完整句：She found a temporary job that would last for only two weeks.",
        "choices": [
          "temporary",
          "tropical",
          "outer",
          "yearly"
        ]
      },
      {
        "id": "m6-choice-192",
        "type": "choice",
        "sourceId": "vocab-zhishi-4-3",
        "sourceTitle": "字彙字識 4-3",
        "word": "rural",
        "meaning": "鄉村的",
        "prompt": "Our _____ school is surrounded by fields where farmers grow rice.",
        "answer": "rural",
        "explanation": "rural：鄉村的。完整句：Our rural school is surrounded by fields where farmers grow rice.",
        "choices": [
          "rural",
          "urban",
          "weekly",
          "temporary"
        ]
      },
      {
        "id": "m6-choice-195",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "flock",
        "meaning": "鳥群；羊群；（同類人的）一大群",
        "prompt": "A _____ of pigeons gathered around the bread in the square.",
        "answer": "flock",
        "explanation": "flock：鳥群；羊群；（同類人的）一大群。完整句：A flock of pigeons gathered around the bread in the square.",
        "choices": [
          "flock",
          "herd",
          "school",
          "pack"
        ]
      },
      {
        "id": "m6-choice-198",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "slice",
        "meaning": "一片",
        "prompt": "He placed a _____ of lemon, cut from the fruit, into his tea.",
        "answer": "slice",
        "explanation": "slice：一片。完整句：He placed a slice of lemon, cut from the fruit, into his tea.",
        "choices": [
          "slice",
          "herd",
          "flock",
          "gallon"
        ]
      },
      {
        "id": "m6-choice-201",
        "type": "choice",
        "sourceId": "vocab-zhishi-5",
        "sourceTitle": "字彙字識 5",
        "word": "parcel",
        "meaning": "包裹",
        "prompt": "Please write the address clearly on the _____ before mailing it.",
        "answer": "parcel",
        "explanation": "parcel：包裹。完整句：Please write the address clearly on the parcel before mailing it.",
        "choices": [
          "parcel",
          "comma",
          "percentage",
          "calorie"
        ]
      },
      {
        "id": "m6-choice-204",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "ashamed",
        "meaning": "羞愧的",
        "prompt": "I felt _____ after laughing at someone who needed help.",
        "answer": "ashamed",
        "explanation": "ashamed：羞愧的。完整句：I felt ashamed after laughing at someone who needed help.",
        "choices": [
          "ashamed",
          "cheerful",
          "admirable",
          "attractive"
        ]
      },
      {
        "id": "m6-choice-207",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "curiosity",
        "meaning": "好奇心",
        "prompt": "Her _____ made her open the old book to discover its secrets.",
        "answer": "curiosity",
        "explanation": "curiosity：好奇心。完整句：Her curiosity made her open the old book to discover its secrets.",
        "choices": [
          "curiosity",
          "disgust",
          "approval",
          "depression"
        ]
      },
      {
        "id": "m6-choice-210",
        "type": "choice",
        "sourceId": "vocab-zhishi-6-1",
        "sourceTitle": "字彙字識 6-1",
        "word": "conscience",
        "meaning": "良心",
        "prompt": "Listen to your _____ when you must decide whether an action is right or wrong.",
        "answer": "conscience",
        "explanation": "conscience：良心。完整句：Listen to your conscience when you must decide whether an action is right or wrong.",
        "choices": [
          "conscience",
          "attraction",
          "amusement",
          "curiosity"
        ]
      }
    ]
  }
];
