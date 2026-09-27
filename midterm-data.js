// Original assessment sentences; source IDs trace back to the course vocabulary.
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
  }
];
