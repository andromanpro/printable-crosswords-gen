// Пак «Дух спорта и заковыристые».
// Слова с двойным смыслом, спортивный сленг, философия атлета.

(function () {
  'use strict';

  const ID = 'spirit_witty';
  const words = [
    // ---- Качества и состояния атлета ----
    { id:"sw_adrenalin",  word:"АДРЕНАЛИН",  clue:"Гормон страха и риска, выбрасываемый перед стартом.", shortClue:"Гормон перед стартом.", theme:"sport", difficulty:2, len:9, tags:["wordplay"] },
    { id:"sw_gordost",    word:"ГОРДОСТЬ",   clue:"Чувство призёра на пьедестале.", shortClue:"Чувство призёра.", theme:"sport", difficulty:1, len:8 },
    { id:"sw_risk",       word:"РИСК",       clue:"Сочетается со словами «рывок», «ход» и «жизнь».", shortClue:"Бывает оправданным.", theme:"general", difficulty:1, len:4, tags:["wordplay"] },
    { id:"sw_udacha",     word:"УДАЧА",      clue:"Спутница спортсмена в финале турнира.", shortClue:"Спутница в финале.", theme:"general", difficulty:1, len:5 },
    { id:"sw_revansh",    word:"РЕВАНШ",     clue:"Матч-возмездие после обидного поражения.", shortClue:"Матч-возмездие.", theme:"sport", difficulty:2, len:6 },
    { id:"sw_byk",        word:"БЫК",        clue:"И знак зодиака, и могучий завсегдатай качалки (разг.).", shortClue:"Зодиак и силач.", theme:"general", difficulty:1, len:3, tags:["wordplay"] },
    { id:"sw_opyt",       word:"ОПЫТ",       clue:"Главное отличие мастера от новичка.", shortClue:"Отличие мастера.", theme:"general", difficulty:1, len:4 },
    { id:"sw_navyk",      word:"НАВЫК",      clue:"Закреплённое тренировкой умение спортсмена.", shortClue:"Закреплён. умение.", theme:"sport", difficulty:1, len:5 },
    { id:"sw_bonus",      word:"БОНУС",      clue:"Дополнительная награда сверх обычного плана.", shortClue:"Доп. награда.", theme:"general", difficulty:1, len:5 },

    // ---- Спортивный сленг ----
    { id:"sw_himiya",     word:"ХИМИЯ",      clue:"Анаболики на сленге спортсменов-силовиков.", shortClue:"Анаболики (сленг).", theme:"weightlifting", difficulty:2, len:5, tags:["slang","wordplay"] },
    { id:"sw_natural",    word:"НАТУРАЛ",    clue:"Спортсмен, выступающий без анаболических препаратов.", shortClue:"Без анаболиков.", theme:"weightlifting", difficulty:2, len:7, tags:["slang"] },
    { id:"sw_kumir",      word:"КУМИР",      clue:"Спортивный идол для поклонников и подражателей.", shortClue:"Идол поклонников.", theme:"sport", difficulty:1, len:5 },
    { id:"sw_fanat",      word:"ФАНАТ",      clue:"Преданный болельщик команды или спортсмена.", shortClue:"Преданный болельщик.", theme:"sport", difficulty:1, len:5 },

    // ---- Состязательная философия ----
    { id:"sw_poedinok",   word:"ПОЕДИНОК",   clue:"Сражение один на один на ринге или татами.", shortClue:"Один на один.", theme:"sport", difficulty:1, len:8 },
    { id:"sw_otryv",      word:"ОТРЫВ",      clue:"Преимущество лидера гонки от преследователей.", shortClue:"Преимущ. лидера.", theme:"sport", difficulty:1, len:5 },
    { id:"sw_davlenie",   word:"ДАВЛЕНИЕ",   clue:"Психологический пресс защитника на сопернике.", shortClue:"Психол. пресс.", theme:"sport", difficulty:2, len:8 },
    { id:"sw_predel",     word:"ПРЕДЕЛ",     clue:"Граница возможностей атлета на четвёртой попытке.", shortClue:"Граница возможн.", theme:"sport", difficulty:2, len:6 },
    { id:"sw_vyzov",      word:"ВЫЗОВ",      clue:"Соревновательная задача, испытание себя.", shortClue:"Испытание себя.", theme:"sport", difficulty:1, len:5 },
    { id:"sw_baryer",     word:"БАРЬЕР",     clue:"Препятствие в лёгкой атлетике и в жизни.", shortClue:"Препятств. в беге.", theme:"sport", difficulty:1, len:6, tags:["wordplay"] },

    // ---- Боевые искусства (бонус) ----
    { id:"sw_tatami",     word:"ТАТАМИ",     clue:"Маты для дзюдо и других восточных единоборств.", shortClue:"Маты для борьбы.", theme:"sport", difficulty:2, len:6, tags:["martial-arts"] },
    { id:"sw_karate",     word:"КАРАТЕ",     clue:"Японское боевое искусство «пустых рук».", shortClue:"«Пустые руки».", theme:"sport", difficulty:1, len:6, tags:["martial-arts"] },
    { id:"sw_dzyudo",     word:"ДЗЮДО",      clue:"Олимпийское боевое искусство «мягкого пути».", shortClue:"«Мягкий путь».", theme:"sport", difficulty:1, len:5, tags:["martial-arts"] },
    { id:"sw_sambo",      word:"САМБО",      clue:"Советское боевое искусство «самозащита без оружия».", shortClue:"«Самооборона без оруж.».", theme:"sport", difficulty:1, len:5, tags:["martial-arts","ussr"] }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Дух спорта и заковыристые',
    description: 'Качества атлета, сленг, философия состязаний, боевые искусства',
    words: words
  };
})();
