// Пак «Футбол» — терминология и легенды мирового и советского футбола.
// Дополняет ЯШИН в основном корпусе.

(function () {
  'use strict';

  const ID = 'football';
  const words = [
    // ---- Терминология ----
    { id:"fb_uglovoy",    word:"УГЛОВОЙ",    clue:"Удар от углового флага после выноса мяча защитником за свою линию.", shortClue:"Удар с угла поля.", theme:"sport", difficulty:1, len:7, tags:["football"] },
    { id:"fb_shtrafnoy",  word:"ШТРАФНОЙ",   clue:"Стандартный удар после нарушения соперника.", shortClue:"После нарушения.", theme:"sport", difficulty:1, len:8, tags:["football"] },
    { id:"fb_ofsayd",     word:"ОФСАЙД",     clue:"Положение «вне игры» нападающего перед последним защитником.", shortClue:"«Вне игры».", expertClues:["Когда нападающий за спиной защиты — флаг лайнсмена.","Положение «вне игры», спорное до изобретения видеопомощника.","Невидимая граница между атакой и нарушением."], theme:"sport", difficulty:1, len:6, tags:["football"] },
    { id:"fb_naves",      word:"НАВЕС",      clue:"Высокая передача в штрафную с фланга.", shortClue:"Передача с фланга.", theme:"sport", difficulty:2, len:5, tags:["football"] },
    { id:"fb_dribling",   word:"ДРИБЛИНГ",   clue:"Обводка соперников с мячом на скорости.", shortClue:"Обводка с мячом.", theme:"sport", difficulty:1, len:8, tags:["football"] },
    { id:"fb_var",        word:"ВАР",        clue:"Видеопомощник арбитра в современном футболе.", shortClue:"Видеоарбитр.", expertClues:["Глаз робота на видеоповторе спорного эпизода.","Английская аббревиатура, что переписывает решение арбитра.","Видеопомощник, спасающий футбол от миллиметровых офсайдов."], theme:"sport", difficulty:2, len:3, tags:["football","org"] },
    { id:"fb_fifa",       word:"ФИФА",       clue:"Международная федерация футбола.", shortClue:"Межд. федер. футбола.", theme:"sport", difficulty:1, len:4, tags:["football","org"] },
    { id:"fb_evro",       word:"ЕВРО",       clue:"Чемпионат Европы по футболу, разговорное название.", shortClue:"Чемп. Европы.", theme:"sport", difficulty:1, len:4, tags:["football","event"] },
    { id:"fb_mundial",    word:"МУНДИАЛЬ",   clue:"Чемпионат мира по футболу на испанском.", shortClue:"Чемп. мира футбола.", theme:"sport", difficulty:2, len:8, tags:["football","event"] },
    { id:"fb_liga",       word:"ЛИГА",       clue:"Соревновательное объединение клубов одного уровня.", shortClue:"Объединение клубов.", theme:"sport", difficulty:1, len:4 },
    { id:"fb_chempionat", word:"ЧЕМПИОНАТ",  clue:"Регулярный турнир команд страны или континента.", shortClue:"Турнир команд.", theme:"sport", difficulty:1, len:9, tags:["football"] },
    { id:"fb_butsy",      word:"БУТСЫ",      clue:"Футбольная обувь с шипами на подошве.", shortClue:"Обувь с шипами.", theme:"sport", difficulty:1, len:5, tags:["football","gear"] },
    { id:"fb_laynsmen",   word:"ЛАЙНСМЕН",   clue:"Помощник судьи на боковой линии футбольного поля.", shortClue:"Помощник арбитра.", theme:"sport", difficulty:2, len:8, tags:["football"] },
    { id:"fb_arbitr",     word:"АРБИТР",     clue:"Главный судья на футбольном поле.", shortClue:"Гл. судья.", theme:"sport", difficulty:1, len:6, tags:["football"] },
    { id:"fb_dubl",       word:"ДУБЛЬ",      clue:"Два гола одного игрока в матче.", shortClue:"Два гола подряд.", theme:"sport", difficulty:2, len:5, tags:["football"] },
    { id:"fb_hettrik",    word:"ХЕТТРИК",    clue:"Три гола одного игрока в матче.", shortClue:"Три гола в матч.", theme:"sport", difficulty:2, len:7, tags:["football"] },

    // ---- Легендарные футболисты ----
    { id:"fb_blokhin",    word:"БЛОХИН",     clue:"Олег, легендарный нападающий «Динамо» Киев, обладатель «Золотого мяча» 1975 года.", shortClue:"Зол. мяч 1975.", expertClues:["Олег из «Динамо» Киев, обладатель Золотого мяча 1975.","Лучший бомбардир в истории сборной СССР.","Тот, кто взял главный приз Европы в год Кубка кубков."], theme:"sport", difficulty:3, len:6, tags:["surname","football","ussr"] },
    { id:"fb_belanov",    word:"БЕЛАНОВ",    clue:"Игорь, советский нападающий, обладатель «Золотого мяча» 1986 года.", shortClue:"Зол. мяч 1986.", expertClues:["Игорь, чей мяч был золотым в 86-м.","Киевское продолжение Блохина — лауреат 1986.","Единственный после Блохина советский обладатель главного приза Европы."], theme:"sport", difficulty:3, len:7, tags:["surname","football","ussr"] },
    { id:"fb_dasaev",     word:"ДАСАЕВ",     clue:"Ринат, легендарный вратарь «Спартака» и сборной СССР.", shortClue:"Вратарь Спартака.", expertClues:["Ринат, что закрывал ворота «Спартака» 80-х.","Лучший вратарь мира 1988 по версии IFFHS.","Татарский страж ворот красно-белых и сборной СССР."], theme:"sport", difficulty:2, len:6, tags:["surname","football","ussr"] },
    { id:"fb_cherenkov",  word:"ЧЕРЕНКОВ",   clue:"Фёдор, нар. любимец «Спартака» Москва 1980-х годов.", shortClue:"Любимец Спартака.", expertClues:["Фёдор, народный любимец красно-белых.","Звезда «Спартака» 80-х с тонкой техникой и чистой игрой.","Тот, чьё имя помнит каждый болельщик «Спартака» Москвы."], theme:"sport", difficulty:3, len:8, tags:["surname","football","ussr"] },
    { id:"fb_pele",       word:"ПЕЛЕ",       clue:"Бразильский «король футбола», трёхкратный чемпион мира 1958-1970.", shortClue:"«Король футбола».",
      expertClues: [
        "Король футбола с тремя кубками мира.",
        "Тот, кто взял первый Кубок мира в семнадцать лет.",
        "Бразилец, объявленный национальным достоянием своей страны."
      ], theme:"sport", difficulty:1, len:4, tags:["surname","football","foreign"] },
    { id:"fb_maradona",   word:"МАРАДОНА",   clue:"Диего, аргентинский гений с «рукой Бога», чемпион мира 1986 года.", shortClue:"Аргент. ЧМ-1986.",
      expertClues: [
        "Диего, чья рука была от Бога.",
        "Аргентинец под номером 10 — сама легенда.",
        "Гений, что обыграл всех в одиночку в 1986-м."
      ], theme:"sport", difficulty:1, len:8, tags:["surname","football","foreign"] },
    { id:"fb_messi",      word:"МЕССИ",      clue:"Лионель, аргентинский нападающий, 8-кратный обладатель «Золотого мяча».", shortClue:"8 Зол. мячей.",
      expertClues: [
        "Лионель, что собрал восемь мячей.",
        "Маленький из Росарио, гений «Барселоны».",
        "Тот, кто наконец взял Кубок мира в Катаре."
      ], theme:"sport", difficulty:1, len:5, tags:["surname","football","foreign"] },
    { id:"fb_zidan",      word:"ЗИДАН",      clue:"Зинедин, французский плеймейкер, чемпион мира 1998 года.", shortClue:"Француз ЧМ-1998.",
      expertClues: [
        "Зинедин, что головой решал в 98-м и 2006-м.",
        "Француз, чей последний матч закончился ударом в Матерацци.",
        "Зинедин, забивший два головой в финале ЧМ-1998."
      ], theme:"sport", difficulty:2, len:5, tags:["surname","football","foreign"] }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Футбол',
    description: 'Термины (офсайд, дриблинг, ВАР, ФИФА) и легенды (Блохин, Дасаев, Пеле, Марадона, Месси)',
    words: words
  };
})();
