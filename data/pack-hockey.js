// Пак «Хоккей» — терминология и легенды советского/российского хоккея.
// Дополняет ФЕТИСОВ, ЛАРИОНОВ, МАКАРОВ, КРУТОВ, ТАРАСОВ из champions_ussr
// и ХАРЛАМОВ, ТРЕТЬЯК из основного корпуса.

(function () {
  'use strict';

  const ID = 'hockey';
  const words = [
    // ---- Терминология ----
    { id:"hk_shayba",     word:"ШАЙБА",      clue:"Резиновый чёрный диск, по которому бьют клюшкой.", shortClue:"Чёрный диск.", theme:"sport", difficulty:1, len:5, tags:["hockey"] },
    { id:"hk_klyushka",   word:"КЛЮШКА",     clue:"Главный инструмент хоккеиста с загнутым крюком.", shortClue:"Инструмент хоккеиста.", theme:"sport", difficulty:1, len:6, tags:["hockey"] },
    { id:"hk_vratar",     word:"ВРАТАРЬ",    clue:"Игрок, защищающий ворота своей команды.", shortClue:"Защитник ворот.", theme:"sport", difficulty:1, len:7, tags:["hockey","football"] },
    { id:"hk_golkiper",   word:"ГОЛКИПЕР",   clue:"Английский синоним вратаря.", shortClue:"Вратарь по-англ.", theme:"sport", difficulty:2, len:8, tags:["hockey","football"] },
    { id:"hk_zashchitnik",word:"ЗАЩИТНИК",   clue:"Полевой игрок, отвечающий за оборонительную зону.", shortClue:"Игрок обороны.", theme:"sport", difficulty:1, len:8, tags:["hockey"] },
    { id:"hk_napadayushchiy",word:"НАПАДАЮЩИЙ",clue:"Игрок передней линии, забивающий голы.", shortClue:"Игрок атаки.", theme:"sport", difficulty:1, len:10, tags:["hockey","football"] },
    { id:"hk_vbrasyvanie",word:"ВБРАСЫВАНИЕ",clue:"Спорное вбрасывание шайбы судьёй между двумя игроками.", shortClue:"Спор у точки.", theme:"sport", difficulty:2, len:11, tags:["hockey"] },
    { id:"hk_udalenie",   word:"УДАЛЕНИЕ",   clue:"Двухминутное наказание хоккеиста на скамейке штрафников.", shortClue:"2-минутный штраф.", theme:"sport", difficulty:1, len:8, tags:["hockey"] },
    { id:"hk_bullit",     word:"БУЛЛИТ",     clue:"Штрафной бросок один на один с вратарём.", shortClue:"Бросок 1 на 1.", expertClues:["Дуэль вратаря и нападающего.","Хоккейная дуэль один на один с вратарём.","Бросок-ультиматум после нерезультативного овертайма."], theme:"sport", difficulty:2, len:6, tags:["hockey"] },
    { id:"hk_overtaym",   word:"ОВЕРТАЙМ",   clue:"Дополнительное время после ничейного основного.", shortClue:"Доп. время.", expertClues:["Когда матч не закончился вовремя.","Когда после трёх периодов на табло равенство.","Время до первого гола после нулевой ничьей."], theme:"sport", difficulty:1, len:8, tags:["hockey","football"] },
    { id:"hk_borta",      word:"БОРТА",      clue:"Деревянные стенки вокруг хоккейной коробки.", shortClue:"Стенки коробки.", theme:"sport", difficulty:1, len:5, tags:["hockey"] },
    { id:"hk_led",        word:"ЛЕД",        clue:"Замёрзшая поверхность, по которой катаются хоккеисты.", shortClue:"Хокк. поверхность.", theme:"sport", difficulty:1, len:3, tags:["hockey"] },
    { id:"hk_pyatachok",  word:"ПЯТАЧОК",    clue:"Зона перед воротами, где идёт самая жаркая борьба.", shortClue:"Перед воротами.", theme:"sport", difficulty:2, len:7, tags:["hockey"] },
    { id:"hk_podkat",     word:"ПОДКАТ",     clue:"Скольжение на льду или газоне для отбора.", shortClue:"Отбор скольжением.", theme:"sport", difficulty:2, len:6, tags:["hockey","football"] },
    { id:"hk_nhl",        word:"НХЛ",        clue:"Североамериканская лига хоккея, аббревиатура.", shortClue:"Лига Сев. Америки.", theme:"sport", difficulty:1, len:3, tags:["hockey","org"] },
    { id:"hk_khl",        word:"КХЛ",        clue:"Континентальная хоккейная лига России, аббревиатура.", shortClue:"Российская лига.", theme:"sport", difficulty:2, len:3, tags:["hockey","org"] },

    // ---- Легендарные хоккеисты ----
    { id:"hk_bobrov",     word:"БОБРОВ",     clue:"Всеволод, советский хоккеист и тренер сборной 1950-1970-х.", shortClue:"Тренер сб. СССР.",
      expertClues: [
        "Всеволод, что играл и в хоккей, и в футбол.",
        "Капитан сборной СССР по обоим гладким видам.",
        "Тот, кого Сталин называл «Всеволод-парадоксом»."
      ], theme:"sport", difficulty:3, len:6, tags:["surname","hockey","ussr"] },
    { id:"hk_maltsev",    word:"МАЛЬЦЕВ",    clue:"Александр, советский нападающий «Динамо» Москва, олимпийский чемпион.", shortClue:"Динамо М. ОЧ.", expertClues:["Александр, легенда московского «Динамо» 70-х.","Бомбардир «Динамо», взявший девять чемпионатов мира.","Капитан сборной СССР под номером десять."], theme:"sport", difficulty:3, len:7, tags:["surname","hockey","ussr"] },
    { id:"hk_yakushev",   word:"ЯКУШЕВ",     clue:"Александр, советский нападающий «Спартака», лидер Суперсерии-1972.", shortClue:"Лидер Суперсерии-72.", expertClues:["Александр-«Як», что забивал канадцам в 72-м.","Лучший снайпер Суперсерии советских и канадцев.","Спартаковский «Як», что взял Саппоро-72."], theme:"sport", difficulty:3, len:7, tags:["surname","hockey","ussr"] },
    { id:"hk_firsov",     word:"ФИРСОВ",     clue:"Анатолий, советский нападающий, 3-кратный олимпийский чемпион 1964-1972.", shortClue:"3-кратный ОЧ хоккея.", expertClues:["Анатолий с тремя золотыми клюшками.","Лучший нападающий мирового хоккея 60-х.","Тот, кто на ОИ-1968 забил восемь голов."], theme:"sport", difficulty:3, len:6, tags:["surname","hockey","ussr"] },
    { id:"hk_bure",       word:"БУРЕ",       clue:"Павел, «Русская ракета», звезда «Ванкувер Кэнакс» в 1990-е.", shortClue:"«Русская ракета».",
      expertClues: [
        "Павел, что летал в форме «Кэнакс».",
        "Русская ракета НХЛ конца 90-х.",
        "Снайпер «Ванкувера», обладатель Калдер Трофи."
      ], theme:"sport", difficulty:2, len:4, tags:["surname","hockey"] },
    { id:"hk_fedorov",    word:"ФЕДОРОВ",    clue:"Сергей, российский центр «Детройт Ред Уингз», обладатель Кубка Стэнли.", shortClue:"Детройт, Кубок Стэнли.", expertClues:["Сергей, чей лёд был в Детройте.","Российский MVP лиги 1994 года в форме «Ред Уингз».","Тот, кто трижды поднял Кубок Стэнли с «Детройтом»."], theme:"sport", difficulty:2, len:7, tags:["surname","hockey"] },
    { id:"hk_ovechkin",   word:"ОВЕЧКИН",    clue:"Александр, российский снайпер «Вашингтон Кэпиталз», бьёт рекорд Гретцки.", shortClue:"Капитал. Вашингтона.",
      expertClues: [
        "Александр, бьющий рекорд Великого.",
        "Капитан «Вашингтона» с фирменным броском с левой.",
        "Тот, чей бросок с левой летит в самый угол."
      ], theme:"sport", difficulty:2, len:7, tags:["surname","hockey"] },
    { id:"hk_malkin",     word:"МАЛКИН",     clue:"Евгений, российский центр «Питтсбург Пингвинз», трёхкратный обладатель Кубка Стэнли.", shortClue:"Питтсбург, 3 Стэнли.", expertClues:["Евгений, трижды поднявший Кубок в Питтсбурге.","Российский центрфорвард с тремя Кубками Стэнли.","Партнёр Кросби в «Пингвинз», MVP плей-офф 2009."], theme:"sport", difficulty:2, len:6, tags:["surname","hockey"] }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Хоккей',
    description: 'Терминология (шайба, клюшка, буллит, овертайм) и легенды (Бобров, Якушев, Буре, Овечкин)',
    words: words
  };
})();
