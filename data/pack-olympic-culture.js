// Пак «Олимпийская атрибутика и общая спорт-культура».
// Талисманы, церемонии, общеспортивная терминология.

(function () {
  'use strict';

  const ID = 'olympic_culture';
  const words = [
    // ---- Атрибутика Олимпиад ----
    { id:"oc_mishka",     word:"МИШКА",      clue:"Талисман Олимпийских игр в Москве 1980 года.", shortClue:"Талисман Москвы-1980.", expertClues:["Тот, кто плакал в Москве, улетая в небо.","Косолапый талисман, что улетел из Москвы со слезой.","Талисман Игр-1980, чьё прощание знала вся страна."], theme:"sport", difficulty:1, len:5, tags:["olympics","ussr"] },
    { id:"oc_fakel",      word:"ФАКЕЛ",      clue:"Источник олимпийского огня в руках бегуна-эстафетчика.", shortClue:"Несёт олимп. огонь.", theme:"sport", difficulty:1, len:5, tags:["olympics"] },
    { id:"oc_ogon",       word:"ОГОНЬ",      clue:"Олимпийский символ, зажигаемый в Олимпии и доставляемый на стадион.", shortClue:"Олимп. символ.", theme:"sport", difficulty:1, len:5, tags:["olympics"] },
    { id:"oc_gimn",       word:"ГИМН",       clue:"Песнь страны, звучащая при награждении олимпийского чемпиона.", shortClue:"Песнь страны.", expertClues:["Звучит, когда твой флаг — самый высокий.","Песнь страны, что слышит олимпийский чемпион.","Звучит на пьедестале с поднятым флагом."], theme:"sport", difficulty:1, len:4, tags:["olympics"] },
    { id:"oc_flag",       word:"ФЛАГ",       clue:"Полотнище страны, поднимаемое над пьедесталом.", shortClue:"Над пьедесталом.", expertClues:["Поднимается за чемпионом, не за судьёй.","То, что взмывает выше всех при чужом гимне.","На мачте при гимне — символ страны-победительницы."], theme:"sport", difficulty:1, len:4, tags:["olympics"] },
    { id:"oc_emblema",    word:"ЭМБЛЕМА",    clue:"Графический символ Олимпиады или спортивного клуба.", shortClue:"Графический символ.", theme:"sport", difficulty:1, len:7 },
    { id:"oc_deviz",      word:"ДЕВИЗ",      clue:"«Быстрее, выше, сильнее» — олимпийский ...", shortClue:"«Быстрее, выше...».", theme:"sport", difficulty:1, len:5, tags:["olympics"] },
    { id:"oc_lavry",      word:"ЛАВРЫ",      clue:"Древнегреческая награда чемпиону, ныне символ победы.", shortClue:"Античная награда.", expertClues:["Их сорвали — теперь почивают.","Античная награда, что после победы заслужено почивают.","Зелёный венок древнегреческого олимпионика."], theme:"sport", difficulty:2, len:5 },
    { id:"oc_venok",      word:"ВЕНОК",      clue:"Сплетённая зелень для венчания древнего олимпионика.", shortClue:"На голове чемпиона.", theme:"sport", difficulty:2, len:5 },
    { id:"oc_luzhniki",   word:"ЛУЖНИКИ",    clue:"Главный стадион Москвы и сцена Олимпиады-1980.", shortClue:"Гл. стадион Москвы.", expertClues:["Где плакал Мишка в 1980-м.","Главный стадион Москвы — сцена Олимпиады-1980.","Чаша столицы, где зажигался олимпийский огонь 1980 года."], theme:"sport", difficulty:2, len:7, tags:["venue","ussr"] },
    { id:"oc_zachet",     word:"ЗАЧЕТ",      clue:"Итоговая медальная таблица соревнования стран.", shortClue:"Медальный итог.", theme:"sport", difficulty:2, len:5 },
    { id:"oc_priz",       word:"ПРИЗ",       clue:"Награда победителю — материальная или денежная.", shortClue:"Награда победителю.", theme:"sport", difficulty:1, len:4 },

    // ---- Общеспортивная терминология ----
    { id:"oc_opeka",      word:"ОПЕКА",      clue:"Защитные действия игрока против соперника в командной игре.", shortClue:"Защита соперника.", theme:"sport", difficulty:2, len:5 },
    { id:"oc_gong",       word:"ГОНГ",       clue:"Сигнал о начале или конце раунда в боксе.", shortClue:"Сигнал в боксе.", theme:"sport", difficulty:1, len:4 },
    { id:"oc_antrakt",    word:"АНТРАКТ",    clue:"Перерыв в матче, концерте или спектакле.", shortClue:"Перерыв.", theme:"general", difficulty:1, len:7 },
    { id:"oc_zamena",     word:"ЗАМЕНА",     clue:"Выход свежего игрока на поле вместо уставшего.", shortClue:"Свежий игрок на поле.", theme:"sport", difficulty:1, len:6 },
    { id:"oc_shtraf",     word:"ШТРАФ",      clue:"Наказание спортсмена за нарушение правил.", shortClue:"Наказание за фол.", theme:"sport", difficulty:1, len:5 },
    { id:"oc_pas",        word:"ПАС",        clue:"Передача мяча партнёру в командной игре.", shortClue:"Передача партнёру.", theme:"sport", difficulty:1, len:3 },
    { id:"oc_brosok",     word:"БРОСОК",     clue:"Действие баскетболиста, гандболиста или борца.", shortClue:"Бросает баскетб.", theme:"sport", difficulty:1, len:6 },
    { id:"oc_fint",       word:"ФИНТ",       clue:"Обманное движение игрока, чтобы обыграть соперника.", shortClue:"Обманное движение.", theme:"sport", difficulty:1, len:4 },
    { id:"oc_igrok",      word:"ИГРОК",      clue:"Участник командной спортивной игры.", shortClue:"Участник игры.", theme:"sport", difficulty:1, len:5 },
    { id:"oc_nichya",     word:"НИЧЬЯ",      clue:"Равный итог матча между соперниками.", shortClue:"Равный итог.", theme:"sport", difficulty:1, len:5 },
    { id:"oc_razgrom",    word:"РАЗГРОМ",    clue:"Крупная и убедительная победа в матче.", shortClue:"Крупная победа.", theme:"sport", difficulty:1, len:7 },
    { id:"oc_novichok",   word:"НОВИЧОК",    clue:"Начинающий спортсмен на первых соревнованиях.", shortClue:"Начинающий атлет.", theme:"sport", difficulty:1, len:7 },
    { id:"oc_veteran",    word:"ВЕТЕРАН",    clue:"Спортсмен старшей возрастной группы или ушедший на покой.", shortClue:"Старший атлет.", theme:"sport", difficulty:1, len:7 },
    { id:"oc_debut",      word:"ДЕБЮТ",      clue:"Первое выступление атлета на крупном турнире.", shortClue:"Первое выступление.", theme:"sport", difficulty:1, len:5 },
    { id:"oc_penalti",    word:"ПЕНАЛЬТИ",   clue:"Штрафной удар в футболе с 11 метров.", shortClue:"Удар с 11 метров.",
      expertClues: [
        "Где Бэгэм пробил мимо в финале 1994-го.",
        "Цена грубости защитника в своей штрафной.",
        "Точка, где у вратарей дрожат коленки."
      ], theme:"sport", difficulty:1, len:8 },
    { id:"oc_fiasko",     word:"ФИАСКО",     clue:"Громкое и обидное поражение.", shortClue:"Громкое поражение.", expertClues:["Полное поражение под грохот трибун.","Обидное поражение фаворита под свист трибун.","Когда вместо победы — позор и тишина."], theme:"sport", difficulty:2, len:6 }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Олимпийская атрибутика и спорт-культура',
    description: 'Талисманы, церемонии, общеспортивные термины — пас, гонг, фиаско и пр.',
    words: words
  };
})();
