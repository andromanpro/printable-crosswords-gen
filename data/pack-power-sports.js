// Пак «Силовые виды спорта» — пауэрлифтинг, стронгмен, бодибилдинг, гиревой спорт.
// Подключается через index.html отдельным <script>. Регистрирует CW.PACKS['power_sports'].

(function () {
  'use strict';

  const ID = 'power_sports';
  const words = [
    // ---- Пауэрлифтинг ----
    { id:"ps_powerlifting",word:"ПАУЭРЛИФТИНГ",clue:"Силовое троеборье из приседа, жима лёжа и становой тяги.", shortClue:"Силовое троеборье.", theme:"weightlifting", difficulty:1, len:12, tags:["powerlifting"] },
    { id:"ps_deadlift",   word:"ДЕДЛИФТ",     clue:"Английское название становой тяги.", shortClue:"Тяга по-английски.", expertClues:["«Мёртвый подъём» по-английски.","Становая тяга на международных стартах.","Третье движение пауэрлифтинга, что требует прямой спины."], theme:"weightlifting", difficulty:2, len:7, tags:["powerlifting","english"] },
    { id:"ps_ipf",        word:"ИПФ",         clue:"Международная федерация пауэрлифтинга, аббревиатура.", shortClue:"Федерация пауэрлифт.", theme:"weightlifting", difficulty:2, len:3, tags:["powerlifting","org"] },
    { id:"ps_ekipirovka", word:"ЭКИПИРОВКА",  clue:"Силовая форма пауэрлифтера: бинты, рубашка, комбинезон.", shortClue:"Силовая форма.", theme:"weightlifting", difficulty:1, len:10, tags:["powerlifting","gear"] },
    { id:"ps_napulsnik",  word:"НАПУЛЬСНИК",  clue:"Эластичная лента на запястье, поддерживающая лучезапястный сустав.", shortClue:"Лента на запястье.", theme:"weightlifting", difficulty:2, len:10, tags:["powerlifting","gear"] },
    { id:"ps_round",      word:"РАУНД",       clue:"Один из этапов соревновательного выступления.", shortClue:"Этап выступления.", theme:"sport", difficulty:1, len:5 },

    // ---- Стронгмен ----
    { id:"ps_strongmen",  word:"СТРОНГМЕН",   clue:"Соревнования силачей с нестандартными снарядами.", shortClue:"Соревнования силачей.", expertClues:["Бочки, ярмо и камни — не олимпиада.","Спорт, где соревнуются переворачиванием шин и буксиром грузовика.","Силовое шоу, чей главный турнир называется «Сильнейший человек планеты»."], theme:"weightlifting", difficulty:1, len:9, tags:["strongman"] },
    { id:"ps_yarmo",      word:"ЯРМО",        clue:"Огромное коромысло, которое стронгмен переносит на плечах.", shortClue:"Снаряд стронгмена.", expertClues:["Не для быков — для силачей с подкатанными штанами.","Стронгменовское коромысло на плечах.","Снаряд, что несут на плечах быстрее всех соперников."], theme:"weightlifting", difficulty:2, len:4, tags:["strongman"] },
    { id:"ps_bochka",     word:"БОЧКА",       clue:"Тяжёлая ёмкость для подъёма в стронгмене.", shortClue:"Снаряд для подъёма.", expertClues:["Не из винного погреба — со снарядной арены.","Тара, что силач поднимает над головой на снарядной площадке.","В Кубке стронгмена — снаряд, в баре — ёмкость."], theme:"weightlifting", difficulty:2, len:5, tags:["strongman"] },
    { id:"ps_kamen",      word:"КАМЕНЬ",      clue:"Гранитный шар Атласа, поднимаемый стронгменом на постамент.", shortClue:"Шар Атласа.", expertClues:["Шар Атласа на стенде стронгмена.","Гранитный груз, что поднимают на постамент.","В кулоне — драгоценный, в стронгмене — гранитный."], theme:"weightlifting", difficulty:2, len:6, tags:["strongman"] },
    { id:"ps_pudzyan",    word:"ПУДЗЯН",      clue:"Мариуш, легендарный польский стронгмен 2000-х годов.", shortClue:"Польский стронгмен.", expertClues:["Мариуш — пять раз «Сильнейший человек планеты».","Польский гигант, что после стронгмена ушёл в смешанные единоборства.","Тот, чьи борцовские шорты стали легендой 2000-х."], theme:"weightlifting", difficulty:3, len:6, tags:["surname","strongman"] },
    { id:"ps_koklyaev",   word:"КОКЛЯЕВ",     clue:"Михаил, российский стронгмен и тяжелоатлет.", shortClue:"Рос. стронгмен.", expertClues:["Михаил, что и со штангой, и с бочкой.","Универсал — и тяжёлая атлетика, и стронгмен.","Россиянин, объединивший два силовых вида в одной карьере."], theme:"weightlifting", difficulty:3, len:7, tags:["surname","strongman"] },
    { id:"ps_kazmajer",   word:"КАЗМАЙЕР",    clue:"Билл, легендарный американский стронгмен 1980-х.", shortClue:"Стронгмен США 80-х.", expertClues:["Билл, гроза 80-х в стронгмене.","Трёхкратный «Сильнейший человек планеты» начала 80-х из США.","Тот, кто открыл эру американских силачей в WSM."], theme:"weightlifting", difficulty:3, len:8, tags:["surname","strongman"] },

    // ---- Бодибилдинг ----
    { id:"ps_bodybuilding",word:"БОДИБИЛДИНГ",clue:"Спорт построения мускулатуры тела.", shortClue:"Построение мышц.", expertClues:["Лепка тела на сцене.","Спорт, где побеждает не сила, а форма.","Спортивная скульптура из мышц и масла."], theme:"weightlifting", difficulty:1, len:11, tags:["bodybuilding"] },
    { id:"ps_kulturizm",  word:"КУЛЬТУРИЗМ",  clue:"Русское название бодибилдинга.", shortClue:"Рус. название бодибил.", expertClues:["По-русски — то же что бодибилдинг.","Слово, которым в СССР называли бодибилдинг.","«Культура тела» в советском переводе."], theme:"weightlifting", difficulty:1, len:10, tags:["bodybuilding"] },
    { id:"ps_relyef",     word:"РЕЛЬЕФ",      clue:"Чёткая прорисованность мышц у бодибилдера.", shortClue:"Прорис. мышц.", theme:"weightlifting", difficulty:1, len:6, tags:["bodybuilding"] },
    { id:"ps_massa",      word:"МАССА",       clue:"Объём мышечной ткани, наращиваемый в бодибилдинге.", shortClue:"Объём мышц.", theme:"weightlifting", difficulty:1, len:5, tags:["bodybuilding"] },
    { id:"ps_sushka",     word:"СУШКА",       clue:"Снижение жировой прослойки перед турниром бодибилдера.", shortClue:"Снижение жира.", expertClues:["Не духовка — атлетический режим перед сценой.","Период жёсткой диеты ради рельефа на турнире.","У бабушки — печенье, у бодибилдера — диета."], theme:"weightlifting", difficulty:2, len:5, tags:["bodybuilding"] },
    { id:"ps_poza",       word:"ПОЗА",        clue:"Демонстративное положение тела бодибилдера на сцене.", shortClue:"Демонстрация мышц.", theme:"weightlifting", difficulty:1, len:4, tags:["bodybuilding"] },
    { id:"ps_vakuum",     word:"ВАКУУМ",      clue:"Упражнение втягивания живота для проработки поперечной мышцы.", shortClue:"Втягивание живота.", theme:"weightlifting", difficulty:2, len:6, tags:["bodybuilding"] },
    { id:"ps_olympia",    word:"ОЛИМПИЯ",     clue:"Главный мировой турнир бодибилдеров «Мистер Олимпия».", shortClue:"Гл. турнир бодибил.", expertClues:["Где Шварценеггер брал семь титулов.","Турнир, основанный братьями Вейдер в 1965-м.","Лас-Вегасский турнир для лучших бодибилдеров мира."], theme:"weightlifting", difficulty:2, len:7, tags:["bodybuilding","event"] },
    { id:"ps_arnold",     word:"АРНОЛЬД",     clue:"Шварценеггер: семикратный «Мистер Олимпия» и киноактёр.", shortClue:"Шварценеггер.",
      expertClues: [
        "Семь раз «Мистер Олимпия», потом — Терминатор.",
        "Тот, кто обещал вернуться — и вернулся в кино.",
        "Австриец, ставший губернатором Калифорнии."
      ], theme:"weightlifting", difficulty:1, len:7, tags:["surname","bodybuilding"] },
    { id:"ps_kolman",     word:"КОЛМАН",      clue:"Ронни, восьмикратный «Мистер Олимпия» с 1998 по 2005 год.", shortClue:"8-кратн. Мр.Олимпия.",
      expertClues: [
        "Ронни с восемью титулами «Олимпии».",
        "Тот, кто кричал «Yeah, buddy!» под штангой.",
        "Бывший полицейский, что стал королём бодибилдинга."
      ], theme:"weightlifting", difficulty:3, len:6, tags:["surname","bodybuilding"] },
    { id:"ps_veyder",     word:"ВЕЙДЕР",      clue:"Джо, основатель Международной федерации бодибилдеров (IFBB).", shortClue:"Основатель IFBB.",
      expertClues: [
        "Не из «Звёздных войн» — отец IFBB.",
        "Джо, что привёл Шварценеггера в США.",
        "Канадец, основавший империю бодибилдинга."
      ], theme:"weightlifting", difficulty:3, len:6, tags:["surname","bodybuilding"] },
    { id:"ps_hejni",      word:"ХЕЙНИ",       clue:"Ли Хейни, восьмикратный «Мистер Олимпия» 1984-1991 годов.", shortClue:"Хейни-бодибилдер.", expertClues:["Ли с восемью титулами 80-х.","Тот, кто восемь раз подряд снял главный титул бодибилдинга.","Король «Олимпии» эпохи перед Колманом."], theme:"weightlifting", difficulty:3, len:5, tags:["surname","bodybuilding"] },

    // ---- Гиревой спорт ----
    { id:"ps_girevoy",    word:"ГИРЕВОЙ",     clue:"Силовой вид спорта на снарядах с дугообразной ручкой.", shortClue:"Спорт с гирями.", expertClues:["Спорт с дугообразной ручкой, родом из России.","Толкать чугунные «чайники» — национальный силовой спорт.","Многоповторный силовой спорт со снарядом-чугунком."], theme:"weightlifting", difficulty:1, len:7, tags:["kettlebell"] },
    { id:"ps_kettlebell", word:"КЕТТЛБЕЛЛ",   clue:"Английское название гири.", shortClue:"Гиря по-англ.", expertClues:["Гиря по-английски, чугунный «чайник».","Снаряд гиревого спорта на международной арене.","Английский «чайник без воды» весом до тридцати двух кг."], theme:"weightlifting", difficulty:2, len:9, tags:["kettlebell","english"] },
    { id:"ps_klass",      word:"КЛАСС",       clue:"Соревновательная категория гиревика по весу гири.", shortClue:"Категория гиревика.", theme:"weightlifting", difficulty:2, len:5, tags:["kettlebell"] }
  ];

  window.CW = window.CW || {};
  CW.PACKS = CW.PACKS || {};
  CW.PACKS[ID] = {
    id: ID,
    name: 'Силовые виды спорта',
    description: 'Пауэрлифтинг, стронгмен, бодибилдинг, гиревой спорт',
    words: words
  };
})();
