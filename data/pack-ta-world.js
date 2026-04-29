// Пак «Тяжёлая атлетика — мировой уровень».
// Иностранные олимпийские чемпионы, английские термины, история.

(function () {
  'use strict';

  const ID = 'ta_world';
  const words = [
    // ---- Иностранные олимпийские чемпионы ----
    { id:"tw_suleymanoglu",word:"СУЛЕЙМАНОГЛУ",clue:"Наим, турецкий «карманный Геркулес», трёхкратный олимпийский чемпион 1988-1996 годов.", shortClue:"«Карманный Геркулес».",
      expertClues: [
        "Карманный Геркулес из Турции с тремя олимпийскими золотыми.",
        "Болгарский турок, перешедший в сборную Анкары и взявший три ОЧ.",
        "Маленький великан с тремя коронами Олимпиад."
      ], theme:"weightlifting", difficulty:3, len:12, tags:["surname","champion","foreign"] },
    { id:"tw_blagoev",    word:"БЛАГОЕВ",     clue:"Стефан, болгарский олимпийский чемпион Москвы-1980 в полутяжёлом весе.", shortClue:"Болг. чемп. Москвы.",
      expertClues: [
        "Стефан с болгарским золотом советской Олимпиады.",
        "Болгарин, поднявший золото на советской Олимпиаде.",
        "Болгарский чемпион Москвы из школы Ивана Абаджиева."
      ], theme:"weightlifting", difficulty:3, len:7, tags:["surname","champion","foreign"] },
    { id:"tw_mutlu",      word:"МУТЛУ",       clue:"Халил, турецкий олимпийский чемпион 1996, 2000 и 2004 годов в самом лёгком весе.", shortClue:"3-кратн. турок.",
      expertClues: [
        "Халил-маленький, три ОЧ в наилёгком весе.",
        "Турок, что взял три золота подряд в самых лёгких весах.",
        "Преемник Сулейманоглу в малых весах."
      ], theme:"weightlifting", difficulty:3, len:5, tags:["surname","champion","foreign"] },
    { id:"tw_kakhiashvili",word:"КАХИАШВИЛИ", clue:"Какхи, грузинский тяжелоатлет, трёхкратный олимпийский чемпион (за СНГ и Грецию).", shortClue:"Грузин-грек 3 ОЧ.", expertClues:["Грузин с эмиграцией в Грецию и тремя коронами.","Какхи, выигравший три Олимпиады за две разные сборные.","Тяжелоатлет, чьи три золота — за СНГ, потом за Грецию."], theme:"weightlifting", difficulty:3, len:11, tags:["surname","champion","foreign"] },
    { id:"tw_steiner",    word:"СТЕЙНЕР",     clue:"Маттиас, немец, олимпийский чемпион Пекина-2008 в супертяжёлом весе.", shortClue:"Немец-чемп. Пекина.", expertClues:["Маттиас с золотом Пекина против всех ожиданий.","Тот, кто плакал на пьедестале с фотографией жены в руках.","Австриец, ставший немцем и взявший супертяжёлое в Пекине."], theme:"weightlifting", difficulty:3, len:7, tags:["surname","champion","foreign"] },
    { id:"tw_dimas",      word:"ДИМАС",       clue:"Пирос, греческий олимпийский чемпион 1992, 1996 и 2000 годов.", shortClue:"3-кратный грек.", theme:"weightlifting", difficulty:3, len:5, tags:["surname","champion","foreign"] },
    { id:"tw_lyao",       word:"ЛЯО",         clue:"Хой, китайский олимпийский чемпион Лондона-2012 в категории до 69 кг.", shortClue:"Китаец-чемп. 2012.", theme:"weightlifting", difficulty:3, len:3, tags:["surname","champion","foreign"] },

    // ---- Английская терминология ----
    { id:"tw_snatch",     word:"СНЭТЧ",       clue:"Английское название рывка в тяжёлой атлетике.", shortClue:"Рывок по-англ.", expertClues:["То же что рывок, только по-английски.","Английское название рывка штанги.","Snatch — первое движение тяжёлой атлетики на международных стартах."], theme:"weightlifting", difficulty:2, len:5, tags:["english"] },
    { id:"tw_clean",      word:"КЛИН",        clue:"Английское название подъёма штанги на грудь (часть толчка).", shortClue:"На грудь по-англ.", theme:"weightlifting", difficulty:2, len:4, tags:["english"] },
    { id:"tw_jerk",       word:"ДЖЕРК",       clue:"Английское название выталкивания штанги от груди в толчке.", shortClue:"Выталкивание по-англ.", theme:"weightlifting", difficulty:2, len:5, tags:["english"] },
    { id:"tw_pull",       word:"ПУЛЛ",        clue:"Английское название тяги в тяжёлой атлетике.", shortClue:"Тяга по-англ.", theme:"weightlifting", difficulty:2, len:4, tags:["english"] },
    { id:"tw_hook",       word:"ХУК",         clue:"Хват, при котором большой палец зажат под другими.", shortClue:"Хват с большим пальц.", theme:"weightlifting", difficulty:3, len:3, tags:["technique","english"] },
    { id:"tw_overhead",   word:"ОВЕРХЕД",     clue:"Английское обозначение положения штанги над головой.", shortClue:"Над головой (англ.).", theme:"weightlifting", difficulty:3, len:7, tags:["english"] },

    // ---- История и события ----
    { id:"tw_boykot",     word:"БОЙКОТ",      clue:"Отказ от участия в Олимпиаде по политическим причинам.", shortClue:"Отказ от Олимпиады.", expertClues:["Спортивный «нет» по политическим мотивам.","Когда страна отказывается ехать на Олимпиаду из принципа.","Принципиальный отказ от участия — например, СССР в Лос-Анджелесе-84."], theme:"sport", difficulty:1, len:6, tags:["history"] },
    { id:"tw_summa",      word:"СУММА",       clue:"Двоеборье: рывок плюс толчок в результате тяжелоатлета.", shortClue:"Рывок плюс толчок.", theme:"weightlifting", difficulty:2, len:5, tags:["scoring"] },
    { id:"tw_dvoeborye",  word:"ДВОЕБОРЬЕ",   clue:"Современная программа тяжёлой атлетики из двух движений.", shortClue:"2 движения совр. ТА.", theme:"weightlifting", difficulty:2, len:9, tags:["scoring"] },
    { id:"tw_iwf",        word:"ИВФ",         clue:"Международная федерация тяжёлой атлетики, аббревиатура.", shortClue:"Межд. федерация ТА.", theme:"weightlifting", difficulty:2, len:3, tags:["org"] }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Тяжёлая атлетика: мировой уровень',
    description: 'Иностранные чемпионы (Турция, Греция, Болгария, Германия, Китай), английские термины, история',
    words: words
  };
})();
