// Корпус слов для генератора кроссвордов.
// Подключается как обычный <script>, не как JSON (fetch блокируется через file:///).
// Правила:
//   word — UPPERCASE, БЕЗ буквы Ё (заменена на Е), без пробелов и дефисов.
//   clue — одно предложение, заглавная буква, точка в конце; никогда не равно слову.
//   theme: weightlifting | sport | general
//   difficulty: 1 (знает любой), 2 (знает болельщик), 3 (знает специалист).
//   shortClue (опц.) — короткая версия (legacy, не используется в кроссворде).
//
// Расширение корпуса: просто добавляй новые объекты в массив CW.WORDS.

window.CW = window.CW || {};
CW.BASE_WORDS_RAW = [

  // ========== WEIGHTLIFTING — Техника (15) ==========
  { id:"w_ryvok",     word:"РЫВОК",     clue:"Первое из двух соревновательных движений тяжелоатлета: штанга поднимается над головой одним движением.", shortClue:"Первое движение тяжелоатлета.",
    expertClues: [
      "Один взмах — от пола до потолка над помостом.",
      "У штангиста — первое движение, у пловца — старт.",
      "От пола до фиксации одним движением."
    ], theme:"weightlifting", difficulty:1, len:5, tags:["technique","core-term"] },
  { id:"w_tolchok",   word:"ТОЛЧОК",    clue:"Второе соревновательное движение тяжелоатлета: подъём штанги на грудь и выталкивание над головой.", shortClue:"Второе движение тяжелоатлета.", theme:"weightlifting", difficulty:1, len:6, tags:["technique","core-term"] },
  { id:"w_jim",       word:"ЖИМ",       clue:"Силовое упражнение, исключённое из программы тяжёлой атлетики после Игр в Мюнхене.", shortClue:"Упражнение, убранное из ТА.", expertClues:["Третье движение, что покинуло помост в 1972-м.","Силовое упражнение, исключённое из ТА после Мюнхена.","Подъём штанги от груди — некогда олимпийский, ныне базовый."], theme:"weightlifting", difficulty:2, len:3, tags:["technique"] },
  { id:"w_podryv",    word:"ПОДРЫВ",    clue:"Финальная фаза рывка с резким выпрямлением ног и спины.", shortClue:"Финал рывка.", theme:"weightlifting", difficulty:3, len:6, tags:["technique"] },
  { id:"w_tyaga",     word:"ТЯГА",      clue:"Подсобное упражнение, имитирующее первую часть рывка или толчка.", shortClue:"Подсобное упражнение.", theme:"weightlifting", difficulty:2, len:4, tags:["technique"] },
  { id:"w_prised",    word:"ПРИСЕД",    clue:"Базовое упражнение со штангой на плечах для развития мышц ног.", shortClue:"Упражнение для ног.", theme:"weightlifting", difficulty:1, len:6, tags:["technique"] },
  { id:"w_shvung",    word:"ШВУНГ",     clue:"Выталкивание штанги от груди вверх с подседом во второй части толчка.", shortClue:"Толчок штанги от груди.", theme:"weightlifting", difficulty:2, len:5, tags:["technique"] },
  { id:"w_hvat",      word:"ХВАТ",      clue:"Способ обхвата грифа штанги ладонями.", shortClue:"Обхват грифа.",
    expertClues: [
      "Бывает рывковый, толчковый и обратный.",
      "Рукой за гриф — широко или узко.",
      "Без него штанга на помосте останется."
    ], theme:"weightlifting", difficulty:1, len:4, tags:["technique"] },
  { id:"w_sed",       word:"СЕД",       clue:"Глубокий уход под штангу при выполнении рывка или подъёма на грудь.", shortClue:"Уход под штангу.", expertClues:["Не лежать, не стоять, а уходить под штангу.","Глубокий уход под штангу в рывке и подъёме на грудь.","Положение штангиста между подъёмом и фиксацией."], theme:"weightlifting", difficulty:2, len:3, tags:["technique"] },
  { id:"w_raznozhka", word:"РАЗНОЖКА",  clue:"Способ постановки ног при подседе со штангой над головой.", shortClue:"Постановка ног в подседе.", theme:"weightlifting", difficulty:3, len:8, tags:["technique"] },
  { id:"w_nozhnitsy", word:"НОЖНИЦЫ",   clue:"Старая техника подседа с разведением ног вперёд-назад при подъёме штанги.", shortClue:"Старая техника подседа.", expertClues:["Не из канцелярии — из старой школы помоста.","Шаг ногами вперёд-назад под штангу — атавизм рывка.","Архаичный подсед штангиста, ныне почти не применяемый."], theme:"weightlifting", difficulty:3, len:8, tags:["technique"] },
  { id:"w_fixatsiya", word:"ФИКСАЦИЯ",  clue:"Удержание штанги в верхней точке упражнения по сигналу судьи.", shortClue:"Удержание штанги вверху.", theme:"weightlifting", difficulty:2, len:8, tags:["technique"] },
  { id:"w_zamah",     word:"ЗАМАХ",     clue:"Подготовительное движение перед основным силовым усилием.", shortClue:"Движение перед усилием.", theme:"weightlifting", difficulty:1, len:5, tags:["technique"] },
  { id:"w_start",     word:"СТАРТ",     clue:"Исходное положение тяжелоатлета у штанги перед началом упражнения.", shortClue:"Положение у штанги.", theme:"weightlifting", difficulty:1, len:5, tags:["technique"] },
  { id:"w_vihod",     word:"ВЫХОД",     clue:"Появление спортсмена на помосте перед началом подхода.", shortClue:"Выступление на помосте.", theme:"weightlifting", difficulty:2, len:5, tags:["technique"] },

  // ========== WEIGHTLIFTING — Снаряды (8) ==========
  { id:"w_shtanga",   word:"ШТАНГА",    clue:"Главный снаряд тяжелоатлета: гриф с дисками.", shortClue:"Снаряд тяжелоатлета.",
    expertClues: [
      "Помост её любит, спина боится.",
      "Снаряд, который тяжелее каждой попытки.",
      "Гриф плюс блины — и помост готов."
    ], theme:"weightlifting", difficulty:1, len:6, tags:["equipment","core-term"] },
  { id:"w_grif",      word:"ГРИФ",      clue:"Стальной стержень штанги, на котором фиксируются диски.", shortClue:"Стержень штанги.", expertClues:["То, что у штанги, гитары и пера общее.","Без него штанга не штанга — гладкий и насечённый.","Та часть штанги, которую обхватывает штангист."], theme:"weightlifting", difficulty:2, len:4, tags:["equipment"] },
  { id:"w_disk",      word:"ДИСК",      clue:"Круглая металлическая или резиновая нагрузка на штангу.", shortClue:"Нагрузка на штангу.", theme:"weightlifting", difficulty:1, len:4, tags:["equipment"] },
  { id:"w_zamok",     word:"ЗАМОК",     clue:"Зажим, удерживающий диски на грифе штанги.", shortClue:"Зажим на грифе.", theme:"weightlifting", difficulty:2, len:5, tags:["equipment"] },
  { id:"w_girya",     word:"ГИРЯ",      clue:"Литой металлический снаряд с дугообразной ручкой для силовых упражнений.", shortClue:"Снаряд с ручкой.", theme:"weightlifting", difficulty:1, len:4, tags:["equipment"] },
  { id:"w_gantel",    word:"ГАНТЕЛЬ",   clue:"Короткий снаряд с двумя дисками для упражнений одной рукой.", shortClue:"Снаряд для одной руки.", theme:"weightlifting", difficulty:1, len:7, tags:["equipment"] },
  { id:"w_blin",      word:"БЛИН",      clue:"Разговорное название диска штанги.", shortClue:"Диск штанги (разг.).",
    expertClues: [
      "Не из теста, а из железа.",
      "Круглый, на грифе — но не для еды.",
      "На сковороде или на штанге — оба круглые."
    ], theme:"weightlifting", difficulty:1, len:4, tags:["equipment"] },
  { id:"w_stoyka",    word:"СТОЙКА",    clue:"Подставка под штангу для упражнений лёжа или приседаний.", shortClue:"Подставка под штангу.", theme:"weightlifting", difficulty:2, len:6, tags:["equipment"] },

  // ========== WEIGHTLIFTING — Экипировка (8) ==========
  { id:"w_poyas",     word:"ПОЯС",      clue:"Кожаный широкий ремень, поддерживающий поясницу штангиста.", shortClue:"Ремень штангиста.", theme:"weightlifting", difficulty:1, len:4, tags:["gear"] },
  { id:"w_bint",      word:"БИНТ",      clue:"Эластичная лента для фиксации запястий или коленей атлета.", shortClue:"Лента для запястий.", theme:"weightlifting", difficulty:1, len:4, tags:["gear"] },
  { id:"w_magneziya", word:"МАГНЕЗИЯ",  clue:"Белый порошок, которым штангист натирает ладони перед подходом.", shortClue:"Порошок для рук штангиста.",
    expertClues: [
      "Белая пудра спортсмена с грифом.",
      "Чтобы гриф не выскользнул из ладоней.",
      "В ванночке у помоста — обязательно."
    ], theme:"weightlifting", difficulty:1, len:8, tags:["gear"] },
  { id:"w_shtangetki",word:"ШТАНГЕТКИ", clue:"Специальная обувь тяжелоатлета с жёсткой подошвой и приподнятой пяткой.", shortClue:"Обувь тяжелоатлета.", theme:"weightlifting", difficulty:2, len:9, tags:["gear"] },
  { id:"w_mayka",     word:"МАЙКА",     clue:"Безрукавка из формы выступающего тяжелоатлета.", shortClue:"Безрукавка атлета.", theme:"weightlifting", difficulty:2, len:5, tags:["gear"] },
  { id:"w_triko",     word:"ТРИКО",     clue:"Облегающее цельное одеяние спортсмена-силовика.", shortClue:"Одеяние силовика.", theme:"weightlifting", difficulty:1, len:5, tags:["gear"] },
  { id:"w_kombinezon",word:"КОМБИНЕЗОН",clue:"Цельная экипировка тяжелоатлета или пауэрлифтера.", shortClue:"Цельная экипировка.", theme:"weightlifting", difficulty:2, len:10, tags:["gear"] },
  { id:"w_nakolennik",word:"НАКОЛЕННИК",clue:"Защитная или поддерживающая повязка для коленного сустава.", shortClue:"Повязка на колено.", theme:"weightlifting", difficulty:2, len:10, tags:["gear"] },

  // ========== WEIGHTLIFTING — Событие, судейство (8) ==========
  { id:"w_pomost",    word:"ПОМОСТ",    clue:"Квадратная площадка четыре на четыре метра, на которой выступает тяжелоатлет.", shortClue:"Площадка для выступления.",
    expertClues: [
      "Четыре на четыре метра тишины и стали.",
      "Где разыгрывается главное действо тяжёлой атлетики.",
      "Один на один со штангой."
    ], theme:"weightlifting", difficulty:1, len:6, tags:["venue"] },
  { id:"w_podhod",    word:"ПОДХОД",    clue:"Одна попытка тяжелоатлета поднять заявленный вес.", shortClue:"Попытка штангиста.", theme:"weightlifting", difficulty:1, len:6, tags:["event"] },
  { id:"w_popytka",   word:"ПОПЫТКА",   clue:"У тяжелоатлета их три в каждом из двух движений.", shortClue:"Их три в каждом движении.", theme:"weightlifting", difficulty:2, len:7, tags:["event"] },
  { id:"w_razminka",  word:"РАЗМИНКА",  clue:"Подготовка мышц к нагрузке перед выходом на помост.", shortClue:"Подготовка к нагрузке.", theme:"weightlifting", difficulty:1, len:8, tags:["event"] },
  { id:"w_tribuna",   word:"ТРИБУНА",   clue:"Зрительские места в спортивном зале или на стадионе.", shortClue:"Места для зрителей.", theme:"weightlifting", difficulty:1, len:7, tags:["venue"] },
  { id:"w_sudya",     word:"СУДЬЯ",     clue:"Должностное лицо, оценивающее правильность подъёма штанги.", shortClue:"Оценщик подъёма.", theme:"weightlifting", difficulty:1, len:5, tags:["judging"] },
  { id:"w_kategoriya",word:"КАТЕГОРИЯ", clue:"Подразделение участников по весу в тяжёлой атлетике.", shortClue:"Деление по весу.", theme:"weightlifting", difficulty:2, len:9, tags:["event"] },
  { id:"w_ves",       word:"ВЕС",       clue:"Главный фактор, определяющий категорию тяжелоатлета.", shortClue:"Главное у штангиста.", theme:"weightlifting", difficulty:1, len:3, tags:["event"] },

  // ========== WEIGHTLIFTING — Дополнения (2) ==========
  { id:"w_shtangist", word:"ШТАНГИСТ",  clue:"Спортсмен, занимающийся тяжёлой атлетикой.", shortClue:"Атлет тяжёлой атлетики.", expertClues:["Тот, кто двигает железо ради счёта на табло.","Спортсмен, что в одиночку поднимает штангу на помосте.","Атлет тяжёлой атлетики перед судьями и табло."], theme:"weightlifting", difficulty:1, len:8, tags:["core-term"] },
  { id:"w_troeborye", word:"ТРОЕБОРЬЕ", clue:"Старая программа тяжёлой атлетики из жима, рывка и толчка до 1972 года.", shortClue:"Старая программа ТА.", theme:"weightlifting", difficulty:3, len:9, tags:["history"] },

  // ========== WEIGHTLIFTING — Фамилии (14) ==========
  { id:"w_vlasov",    word:"ВЛАСОВ",    clue:"Олимпийский чемпион Рима-1960 в супертяжёлом весе, советский штангист и писатель.", shortClue:"Чемпион Рима-1960.",
    expertClues: [
      "Силач, променявший штангу на писательский стол.",
      "Юрий, что забрал золото у американцев в 1960-м.",
      "Тот, чьим преемником на помосте стал Жаботинский."
    ], theme:"weightlifting", difficulty:2, len:6, tags:["surname","champion"] },
  { id:"w_alekseev",  word:"АЛЕКСЕЕВ",  clue:"Двукратный олимпийский чемпион из города Шахты, более 80 мировых рекордов.", shortClue:"Штангист из Шахт.",
    expertClues: [
      "Богатырь из Шахт, восемьдесят раз перевернувший мир штанги.",
      "Василий, что обошёл штангу на восемьдесят шагов.",
      "Тот, кого Власов всю жизнь не признавал."
    ], theme:"weightlifting", difficulty:2, len:8, tags:["surname","champion"] },
  { id:"w_zhabotin",  word:"ЖАБОТИНСКИЙ",clue:"Двукратный олимпийский чемпион 1964 и 1968 годов в супертяжёлом весе.", shortClue:"ОЧ Токио и Мехико.",
    expertClues: [
      "Преемник Власова на помосте 60-х.",
      "Леонид, что обыграл самого Власова в Токио.",
      "Двукратный супертяж 60-х из Запорожья."
    ], theme:"weightlifting", difficulty:3, len:11, tags:["surname","champion"] },
  { id:"w_rigert",    word:"РИГЕРТ",    clue:"Олимпийский чемпион Монреаля-1976 в полутяжёлом весе, многократный рекордсмен мира.", shortClue:"Чемпион Монреаля-1976.",
    expertClues: [
      "Многократный рекордсмен с немецкой фамилией.",
      "Давид, что перенёс десятки мировых рекордов в 70-х.",
      "Тренер сборной СССР после своих побед на помосте."
    ], theme:"weightlifting", difficulty:3, len:6, tags:["surname","champion"] },
  { id:"w_chemerkin", word:"ЧЕМЕРКИН",  clue:"Олимпийский чемпион Атланты-1996 в самой тяжёлой весовой категории.", shortClue:"Чемпион Атланты-1996.",
    expertClues: [
      "Российский гигант между Курловичем и Талахадзе.",
      "Андрей, что взял золото Атланты в супертяжёлом.",
      "Тот, кто унаследовал помост у Курловича."
    ], theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion"] },
  { id:"w_kurlovich", word:"КУРЛОВИЧ",  clue:"Двукратный олимпийский чемпион 1988 и 1992 годов из Гродно, супертяж.", shortClue:"Супертяж из Гродно.",
    expertClues: [
      "Беловежский супертяж заката СССР.",
      "Александр, что поднимал золото в Сеуле и Барселоне.",
      "Двукратный супертяж конца Советского Союза."
    ], theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion"] },
  { id:"w_talakhadze",word:"ТАЛАХАДЗЕ", clue:"Грузинский супертяж, олимпийский чемпион Рио-2016 и Токио-2020.", shortClue:"Грузинский супертяж.",
    expertClues: [
      "Лаша из Грузии — новый властитель помоста.",
      "Грузин, побивший все мировые рекорды супертяжа.",
      "Лаша, что в Рио и Токио был неоспорим."
    ], theme:"weightlifting", difficulty:3, len:9, tags:["surname","champion"] },
  { id:"w_ilyin",     word:"ИЛЬИН",     clue:"Казахстанский тяжелоатлет, олимпийский чемпион Пекина-2008 и Лондона-2012.", shortClue:"Казахский штангист.",
    expertClues: [
      "Илья из Казахстана, дважды поднимавший золото.",
      "Двукратный чемпион Пекина и Лондона из Алма-Аты.",
      "Тот, чья фамилия совпадает с пророческой."
    ], theme:"weightlifting", difficulty:3, len:5, tags:["surname","champion"] },
  { id:"w_vardanyan", word:"ВАРДАНЯН",  clue:"Армянский олимпийский чемпион Москвы-1980 в категории до 82 с половиной килограммов.", shortClue:"Чемпион Москвы-1980.",
    expertClues: [
      "Юрик из Еревана с рекордом Москвы.",
      "Армянский золотой призёр Москвы-1980.",
      "Тот, чья сумма на московском помосте долго была мировой."
    ], theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion"] },
  { id:"w_taranenko", word:"ТАРАНЕНКО", clue:"Олимпийский чемпион Москвы-1980, автор фантастического рекорда 266 кг в толчке.", shortClue:"Рекорд 266 кг в толчке.",
    expertClues: [
      "Автор рекорда, что простоял три десятилетия.",
      "Леонид, чей толчок 266 не повторили до 2020-х.",
      "Олимпийский чемпион Москвы с фантастическим рекордом."
    ], theme:"weightlifting", difficulty:3, len:9, tags:["surname","champion"] },
  { id:"w_zaharevich",word:"ЗАХАРЕВИЧ", clue:"Олимпийский чемпион Сеула-1988 в первой тяжёлой весовой категории.", shortClue:"Чемпион Сеула-1988.",
    expertClues: [
      "Юрий, чьё золото — последний триумф СССР в первой тяжёлой.",
      "Тот, кто взял золото Сеула под красным флагом.",
      "Юрий с княжеской русской фамилией."
    ], theme:"weightlifting", difficulty:3, len:10, tags:["surname","champion"] },
  { id:"w_vorobyev",  word:"ВОРОБЬЕВ",  clue:"Двукратный олимпийский чемпион 1956 и 1960 годов в полусреднем весе.", shortClue:"Чемпион Мельбурна и Рима.",
    expertClues: [
      "Птичья фамилия двукратного олимпийца.",
      "Аркадий, чемпион Мельбурна и Рима в полусреднем.",
      "Двукратный, чья фамилия — мелкая певчая."
    ], theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion"] },
  { id:"w_pisarenko", word:"ПИСАРЕНКО", clue:"Трёхкратный чемпион мира начала 1980-х в супертяжёлом весе.", shortClue:"3-кратный чемпион мира.",
    expertClues: [
      "Не олимпиец, но трижды первый мира в супертяже.",
      "Анатолий, трёхкратный чемпион мира начала 1980-х.",
      "Тот, кого бойкот 1984 года лишил вершины."
    ], theme:"weightlifting", difficulty:3, len:9, tags:["surname","champion"] },
  { id:"w_kono",      word:"КОНО",      clue:"Американский тяжелоатлет японского происхождения, олимпийский чемпион 1952 и 1956 годов.", shortClue:"Атлет США из Японии.",
    expertClues: [
      "Японец под флагом Америки, дважды первый в 50-х.",
      "Томми, что обыграл и Хельсинки, и Мельбурн.",
      "Тот, чья короткая фамилия открывала пьедестал."
    ], theme:"weightlifting", difficulty:3, len:4, tags:["surname","champion"] },

  // ---- Современные российские тяжелоатлеты ----
  { id:"w_albegov",   word:"АЛБЕГОВ",   clue:"Руслан, российский тяжелоатлет, бронзовый призёр Лондона-2012 в супертяжёлом весе.", shortClue:"Бронза Лондона.", theme:"weightlifting", difficulty:3, len:7, tags:["surname"] },
  { id:"w_akkaev",    word:"АККАЕВ",    clue:"Хаджимурат, российский тяжелоатлет, серебряный призёр Афин-2004 в категории 94 кг.", shortClue:"Серебро Афин.", theme:"weightlifting", difficulty:3, len:6, tags:["surname"] },
  { id:"w_chigishev", word:"ЧИГИШЕВ",   clue:"Евгений, российский тяжелоатлет, серебряный призёр Пекина-2008 в супертяжёлом весе.", shortClue:"Серебро Пекина.", theme:"weightlifting", difficulty:3, len:8, tags:["surname"] },
  { id:"w_kashirina", word:"КАШИРИНА",  clue:"Татьяна, российская тяжелоатлетка, серебряная призёрка Лондона-2012 в супертяжёлом весе.", shortClue:"Серебро Лондона.", theme:"weightlifting", difficulty:3, len:8, tags:["surname"] },
  { id:"w_okulov",    word:"ОКУЛОВ",    clue:"Артём, российский тяжелоатлет, чемпион мира 2017 года в категории 85 кг.", shortClue:"ЧМ-2017.", theme:"weightlifting", difficulty:3, len:6, tags:["surname"] },
  { id:"w_podobedova",word:"ПОДОБЕДОВА",clue:"Светлана, казахстанская тяжелоатлетка, олимпийская чемпионка Лондона-2012 в категории 75 кг.", shortClue:"ОЧ Лондона.", theme:"weightlifting", difficulty:3, len:10, tags:["surname","champion","kazakh"] },

  // ========== SPORT (общий, 22) ==========
  { id:"s_atlet",     word:"АТЛЕТ",     clue:"Спортсмен силовых или скоростно-силовых дисциплин.", shortClue:"Силовой спортсмен.", expertClues:["Не футболист и не пловец — на помосте или на дорожке.","Силовой или скоростно-силовой спортсмен.","По-древнегречески — соревнующийся за награду."], theme:"sport", difficulty:1, len:5 },
  { id:"s_rekord",    word:"РЕКОРД",    clue:"Высшее зафиксированное достижение в спортивной дисциплине.", shortClue:"Высшее достижение.",
    expertClues: [
      "То, что бьют все, но никто не сохраняет.",
      "Цель спортсмена и заголовок газет на следующий день.",
      "То, что стоит, пока не появится следующий."
    ], theme:"sport", difficulty:1, len:6 },
  { id:"s_medal",     word:"МЕДАЛЬ",    clue:"Награда призёра соревнований из золота, серебра или бронзы.", shortClue:"Награда призёра.",
    expertClues: [
      "Кружок металла, что весит больше своего веса.",
      "Висит на шее тех, кто стоял на пьедестале.",
      "Бывает золотая, серебряная или бронзовая."
    ], theme:"sport", difficulty:1, len:6 },
  { id:"s_chempion",  word:"ЧЕМПИОН",   clue:"Победитель главного турнира в данной дисциплине.", shortClue:"Победитель турнира.",
    expertClues: [
      "Тот, кто стоит выше серебра и бронзы.",
      "Первый среди всех в своём виде.",
      "Тот, чей флаг поднимают первым."
    ], theme:"sport", difficulty:1, len:7 },
  { id:"s_olympiada", word:"ОЛИМПИАДА", clue:"Главные международные соревнования, проводимые раз в четыре года.", shortClue:"Игры раз в 4 года.",
    expertClues: [
      "Греческая идея, что вернулась через полторы тысячи лет.",
      "Главный сон спортсмена раз в високосный.",
      "Куда несут факел из Олимпии."
    ], theme:"sport", difficulty:1, len:9 },
  { id:"s_trener",    word:"ТРЕНЕР",    clue:"Наставник, готовящий спортсмена к соревнованиям.", shortClue:"Наставник спортсмена.", theme:"sport", difficulty:1, len:6 },
  { id:"s_razryad",   word:"РАЗРЯД",    clue:"Уровень спортивной квалификации в России — от юношеского до мастера.", shortClue:"Уровень спортсмена.", theme:"sport", difficulty:2, len:6 },
  { id:"s_kubok",     word:"КУБОК",     clue:"Турнир по олимпийской системе, а также его главный приз.", shortClue:"Турнир и его приз.",
    expertClues: [
      "Бывает на полке, бывает играет.",
      "Из чего пьют и в чём вырезают чемпиона.",
      "Стэнли, Гагарина, мира — может быть."
    ], theme:"sport", difficulty:1, len:5 },
  { id:"s_borba",     word:"БОРЬБА",    clue:"Олимпийский вид спорта, в котором побеждают броском или болевым приёмом.", shortClue:"Спорт с приёмами.",
    expertClues: [
      "Не танец, хоть и обнимаются.",
      "Спорт ковра, а не ринга.",
      "Где побеждают броском, а не ударом."
    ], theme:"sport", difficulty:1, len:6 },
  { id:"s_boks",      word:"БОКС",      clue:"Контактный вид спорта на ринге в перчатках.", shortClue:"Спорт в перчатках.",
    expertClues: [
      "Где руки в перчатках, а ноги — на месте.",
      "Дисциплина, в которой Али порхал как бабочка.",
      "Спорт двенадцати раундов и трёх минут на каждый."
    ], theme:"sport", difficulty:1, len:4 },
  { id:"s_zoloto",    word:"ЗОЛОТО",    clue:"Высшая олимпийская награда.", shortClue:"Высшая награда.", theme:"sport", difficulty:1, len:6 },
  { id:"s_serebro",   word:"СЕРЕБРО",   clue:"Награда за второе место на пьедестале.", shortClue:"Второе место.", theme:"sport", difficulty:1, len:7 },
  { id:"s_bronza",    word:"БРОНЗА",    clue:"Награда за третье место на Олимпиаде.", shortClue:"Третье место.", theme:"sport", difficulty:1, len:6 },
  { id:"s_pyedestal", word:"ПЬЕДЕСТАЛ", clue:"Возвышение для трёх призёров после соревнований.", shortClue:"Возвышение призёров.",
    expertClues: [
      "Где звучит гимн победившего.",
      "Цель всех, ступающих на помост и дорожку.",
      "Три ступени, и только верхняя без обиды."
    ], theme:"sport", difficulty:2, len:9 },
  { id:"s_referi",    word:"РЕФЕРИ",    clue:"Главный судья на ринге или на поле.", shortClue:"Главный судья.", theme:"sport", difficulty:1, len:6 },
  { id:"s_tablo",     word:"ТАБЛО",     clue:"Электронное информационное поле на стадионе.", shortClue:"Поле на стадионе.", theme:"sport", difficulty:2, len:5 },
  { id:"s_biatlon",   word:"БИАТЛОН",   clue:"Зимний вид спорта, сочетающий лыжную гонку и стрельбу.", shortClue:"Лыжи плюс стрельба.", theme:"sport", difficulty:1, len:7 },
  { id:"s_plavanie",  word:"ПЛАВАНИЕ",  clue:"Олимпийский вид спорта в воде с четырьмя стилями.", shortClue:"Спорт в бассейне.", theme:"sport", difficulty:1, len:8 },
  { id:"s_beg",       word:"БЕГ",       clue:"Базовое лёгкоатлетическое упражнение.", shortClue:"Лёгкая атлетика.", theme:"sport", difficulty:1, len:3 },
  { id:"s_master",    word:"МАСТЕР",    clue:"Высокий разряд квалификации в спорте, выше только МСМК.", shortClue:"Высокий разряд.", theme:"sport", difficulty:2, len:6 },
  { id:"s_ring",      word:"РИНГ",      clue:"Площадка для боксёрского поединка, ограниченная канатами.", shortClue:"Площадка боксёров.", theme:"sport", difficulty:1, len:4 },
  { id:"s_olymp",     word:"ОЛИМП",     clue:"Гора в Греции, мифологическое жилище богов и название Игр.", shortClue:"Гора богов в Греции.", theme:"sport", difficulty:2, len:5 },

  // ========== GENERAL (короткие 3-5 для геометрии, 13) ==========
  { id:"g_dom",       word:"ДОМ",       clue:"Жилище человека.", theme:"general", difficulty:1, len:3 },
  { id:"g_ura",       word:"УРА",       clue:"Боевой клич и возглас радости.", theme:"general", difficulty:1, len:3 },
  { id:"g_okno",      word:"ОКНО",      clue:"Проём в стене со стеклом.", theme:"general", difficulty:1, len:4 },
  { id:"g_kniga",     word:"КНИГА",     clue:"Печатный или электронный сборник текста под обложкой.", theme:"general", difficulty:1, len:5 },
  { id:"g_more",      word:"МОРЕ",      clue:"Часть океана, отделённая берегами или островами.", theme:"general", difficulty:1, len:4 },
  { id:"g_lev",       word:"ЛЕВ",       clue:"Царь зверей из семейства кошачьих.", theme:"general", difficulty:1, len:3 },
  { id:"g_vek",       word:"ВЕК",       clue:"Сто лет.", theme:"general", difficulty:1, len:3 },
  { id:"g_sad",       word:"САД",       clue:"Участок земли с плодовыми деревьями или цветами.", theme:"general", difficulty:1, len:3 },
  { id:"g_zima",      word:"ЗИМА",      clue:"Самое холодное время года в России.", theme:"general", difficulty:1, len:4 },
  { id:"g_son",       word:"СОН",       clue:"Состояние отдыха с отключением сознания.", theme:"general", difficulty:1, len:3 },
  { id:"g_sok",       word:"СОК",       clue:"Жидкость, выжимаемая из плодов или овощей.", theme:"general", difficulty:1, len:3 },
  { id:"g_kot",       word:"КОТ",       clue:"Домашний хвостатый мурлыка.", theme:"general", difficulty:1, len:3 },
  { id:"g_roza",      word:"РОЗА",      clue:"Колючий цветок, символ романтики.", theme:"general", difficulty:1, len:4 },

  // ========== РАСШИРЕНИЕ v1.1 ==========

  // ---- Советские тяжелоатлеты ----
  { id:"w_udodov",     word:"УДОДОВ",     clue:"Иван, советский олимпийский чемпион Хельсинки-1952 в легчайшем весе.", shortClue:"Чемпион Хельсинки-1952.",
    expertClues: [
      "Иван, открывший золотую эру СССР в Хельсинки.",
      "Тот, кто привёз первое советское золото в тяжёлой атлетике.",
      "Атлет, выживший в концлагере и взявший Олимп."
    ], theme:"weightlifting", difficulty:3, len:6, tags:["surname","champion","ussr"] },
  { id:"w_chimishkyan",word:"ЧИМИШКЯН",  clue:"Рафаэль, грузинский олимпийский чемпион Хельсинки-1952 в полулёгком весе.", shortClue:"Грузин-чемпион 1952.",
    expertClues: [
      "Грузин с финским золотом 1952-го.",
      "Рафаэль из Тбилиси с золотом Хельсинки-52.",
      "Кавказец, что взял золото в год дебюта СССР на Играх."
    ], theme:"weightlifting", difficulty:3, len:9, tags:["surname","champion","ussr"] },
  { id:"w_lomakin",    word:"ЛОМАКИН",   clue:"Трофим, олимпийский чемпион Хельсинки-1952 по тяжёлой атлетике.", shortClue:"ОЧ Хельсинки-1952.", theme:"weightlifting", difficulty:3, len:7, tags:["surname","champion","ussr"] },
  { id:"w_bushuev",    word:"БУШУЕВ",    clue:"Виктор, советский олимпийский чемпион Рима-1960 в лёгком весе.", shortClue:"Чемпион Рима-1960.", theme:"weightlifting", difficulty:3, len:6, tags:["surname","champion","ussr"] },
  { id:"w_minaev",     word:"МИНАЕВ",    clue:"Евгений, олимпийский чемпион Рима-1960 в полулёгком весе.", shortClue:"ОЧ Рима в 60 кг.", theme:"weightlifting", difficulty:3, len:6, tags:["surname","champion","ussr"] },
  { id:"w_kurynov",    word:"КУРЫНОВ",   clue:"Александр, олимпийский чемпион Рима-1960 в полусреднем весе.", shortClue:"ОЧ Рима-1960.", theme:"weightlifting", difficulty:3, len:7, tags:["surname","champion","ussr"] },
  { id:"w_vahonin",    word:"ВАХОНИН",   clue:"Алексей, олимпийский чемпион Токио-1964 в легчайшем весе.", shortClue:"Чемпион Токио-1964.", theme:"weightlifting", difficulty:3, len:7, tags:["surname","champion","ussr"] },
  { id:"w_kurentsov",  word:"КУРЕНЦОВ",  clue:"Виктор, олимпийский чемпион Мехико-1968 в полусреднем весе.", shortClue:"ОЧ Мехико-1968.", theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion","ussr"] },
  { id:"w_shariy",     word:"ШАРИЙ",     clue:"Валерий, белорусский олимпийский чемпион Монреаля-1976.", shortClue:"Белорус-чемпион 1976.", theme:"weightlifting", difficulty:3, len:5, tags:["surname","champion","ussr"] },
  { id:"w_rahmanov",   word:"РАХМАНОВ",  clue:"Султан, олимпийский чемпион Москвы-1980 в супертяжёлом весе.", shortClue:"Супертяж Москвы-1980.", theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion","ussr"] },
  { id:"w_mazin",      word:"МАЗИН",     clue:"Виктор, казахстанский олимпийский чемпион Москвы-1980 в полулёгком весе.", shortClue:"Казах-чемпион 1980.",
    expertClues: [
      "Виктор из Чимкента — золото Москвы.",
      "Казахский тяжелоатлет с золотом Москвы-1980.",
      "Виктор, что брал штангу под рёв трибун Москвы-80."
    ], theme:"weightlifting", difficulty:3, len:5, tags:["surname","champion","ussr","kazakh"] },
  { id:"w_hrapatyy",   word:"ХРАПАТЫЙ",  clue:"Анатолий, казахстанский олимпийский чемпион Сеула-1988 в полутяжёлом весе.", shortClue:"Казах-чемпион Сеула.",
    expertClues: [
      "Анатолий из Алма-Аты с золотом Сеула.",
      "Казахский тяжелоатлет, чемпион Сеула-88.",
      "Тот, чьё золото Сеула стало классикой советской ТА."
    ], theme:"weightlifting", difficulty:3, len:8, tags:["surname","champion","ussr","kazakh"] },
  { id:"w_plyukfelder",word:"ПЛЮКФЕЛЬДЕР",clue:"Рудольф, олимпийский чемпион Токио-1964 в полутяжёлом весе.", shortClue:"ОЧ Токио в 90 кг.", theme:"weightlifting", difficulty:3, len:11, tags:["surname","champion","ussr"] },
  { id:"w_shanidze",   word:"ШАНИДЗЕ",   clue:"Дито, грузинский серебряный призёр двух Олимпиад в тяжёлой атлетике.", shortClue:"Грузин-серебряный призёр.", theme:"weightlifting", difficulty:3, len:7, tags:["surname","ussr"] },
  { id:"w_novak",      word:"НОВАК",     clue:"Григорий, чемпион мира 1946 по тяжёлой атлетике и известный артист цирка.", shortClue:"ЧМ-1946 и силач цирка.", theme:"weightlifting", difficulty:3, len:5, tags:["surname","ussr"] },

  // ---- Тяжёлая атлетика: техника и мышцы ----
  { id:"w_bicep",      word:"БИЦЕПС",    clue:"Двуглавая мышца плеча, гордость каждого силовика.", shortClue:"Мышца плеча.", theme:"weightlifting", difficulty:1, len:6, tags:["anatomy"] },
  { id:"w_tricep",     word:"ТРИЦЕПС",   clue:"Трёхглавая мышца на задней стороне плеча.", shortClue:"Задняя мышца плеча.", theme:"weightlifting", difficulty:1, len:7, tags:["anatomy"] },
  { id:"w_press",      word:"ПРЕСС",     clue:"Мышцы живота, проявляющиеся «кубиками» у атлета.", shortClue:"Мышцы живота.", theme:"weightlifting", difficulty:1, len:5, tags:["anatomy"] },
  { id:"w_delta",      word:"ДЕЛЬТА",    clue:"Дельтовидная мышца, шарообразный «погон» плеча.", shortClue:"Мышца-погон плеча.", theme:"weightlifting", difficulty:2, len:6, tags:["anatomy"] },
  { id:"w_trapeziya",  word:"ТРАПЕЦИЯ",  clue:"Большая мышца верха спины, поднимающая лопатки.", shortClue:"Мышца верха спины.", theme:"weightlifting", difficulty:2, len:8, tags:["anatomy"] },
  { id:"w_kvadritseps",word:"КВАДРИЦЕПС",clue:"Четырёхглавая мышца передней поверхности бедра.", shortClue:"Мышца передней бедра.", theme:"weightlifting", difficulty:2, len:10, tags:["anatomy"] },
  { id:"w_otkaz",      word:"ОТКАЗ",     clue:"Невыполненный подъём, незачтённая попытка тяжелоатлета.", shortClue:"Незачтённый подъём.", theme:"weightlifting", difficulty:2, len:5, tags:["technique"] },
  { id:"w_proval",     word:"ПРОВАЛ",    clue:"Падение в седе с потерей штанги.", shortClue:"Падение со штангой.", theme:"weightlifting", difficulty:3, len:6, tags:["technique"] },
  { id:"w_podsed",     word:"ПОДСЕД",    clue:"Низкое положение под штангой при рывке или толчке.", shortClue:"Низкое положение.", theme:"weightlifting", difficulty:2, len:6, tags:["technique"] },
  { id:"w_protyazhka", word:"ПРОТЯЖКА",  clue:"Подсобное упражнение тяжелоатлета на широкий хват.", shortClue:"Упражнение на хват.", theme:"weightlifting", difficulty:3, len:8, tags:["technique"] },
  { id:"w_podem",      word:"ПОДЪЕМ",    clue:"Первая фаза толчка: вывод штанги на грудь.", shortClue:"Штанга на грудь.", theme:"weightlifting", difficulty:2, len:6, tags:["technique"] },
  { id:"w_shturm",     word:"ШТУРМ",     clue:"Атакующая попытка взять рекордный вес.", shortClue:"Попытка рекорда.", theme:"weightlifting", difficulty:2, len:5, tags:["technique"] },
  { id:"w_baza",       word:"БАЗА",      clue:"Основное упражнение в силовой программе тренировок.", shortClue:"Основное упражнение.", theme:"weightlifting", difficulty:2, len:4, tags:["training"] },
  { id:"w_pik",        word:"ПИК",       clue:"Высшая точка нагрузки в годовом тренировочном цикле.", shortClue:"Высшая нагрузка.", theme:"weightlifting", difficulty:2, len:3, tags:["training"] },
  { id:"w_tsikl",      word:"ЦИКЛ",      clue:"Период тренировочного плана, повторяющийся отрезок.", shortClue:"Период тренировок.", theme:"weightlifting", difficulty:2, len:4, tags:["training"] },
  { id:"w_otdyh",      word:"ОТДЫХ",     clue:"Пауза между подходами для восстановления сил.", shortClue:"Пауза между сетами.", theme:"weightlifting", difficulty:1, len:5, tags:["training"] },
  { id:"w_doping",     word:"ДОПИНГ",    clue:"Запрещённые препараты для нечестного повышения результата.", shortClue:"Запрещённый препарат.", theme:"weightlifting", difficulty:1, len:6, tags:["sport"] },
  { id:"w_belok",      word:"БЕЛОК",     clue:"Главный строительный материал мышц спортсмена.", shortClue:"Материал мышц.", theme:"weightlifting", difficulty:1, len:5, tags:["nutrition"] },
  { id:"w_kachalka",   word:"КАЧАЛКА",   clue:"Разговорное название тренажёрного зала.", shortClue:"Тренажёрный зал (разг.).", theme:"weightlifting", difficulty:1, len:7, tags:["venue"] },
  { id:"w_zalsport",   word:"СПОРТЗАЛ",  clue:"Помещение, где тяжелоатлет проводит большую часть дня.", shortClue:"Тренировочный зал.", theme:"weightlifting", difficulty:1, len:8, tags:["venue"] },
  { id:"w_temp",       word:"ТЕМП",      clue:"Скорость выполнения упражнения.", shortClue:"Скорость движения.", theme:"weightlifting", difficulty:1, len:4, tags:["training"] },
  { id:"w_zhelezo",    word:"ЖЕЛЕЗО",    clue:"Так силовики ласково зовут штангу и диски.", shortClue:"Снаряды (разг.).", theme:"weightlifting", difficulty:2, len:6, tags:["slang"] },
  { id:"w_kachok",     word:"КАЧОК",     clue:"Накачанный посетитель тренажёрного зала на молодёжном сленге.", shortClue:"Накачанный (разг.).", theme:"weightlifting", difficulty:2, len:5, tags:["slang"] },
  { id:"w_silach",     word:"СИЛАЧ",     clue:"Цирковой или соревновательный силовой атлет.", shortClue:"Силовой атлет.", theme:"weightlifting", difficulty:1, len:5 },

  // ---- Спортивный инвентарь и снаряды ----
  { id:"w_trenazher",  word:"ТРЕНАЖЕР",  clue:"Устройство для развития определённой группы мышц.", shortClue:"Спортивное устройство.", theme:"weightlifting", difficulty:1, len:8, tags:["equipment"] },
  { id:"w_vesy",       word:"ВЕСЫ",      clue:"Прибор для определения массы тела или штанги.", shortClue:"Прибор для массы.", theme:"weightlifting", difficulty:1, len:4, tags:["equipment"] },
  { id:"s_brusya",     word:"БРУСЬЯ",    clue:"Гимнастический снаряд из двух параллельных жердей.", shortClue:"Две жерди.", theme:"sport", difficulty:1, len:6, tags:["gymnastics"] },
  { id:"s_kanat",      word:"КАНАТ",     clue:"Толстая верёвка для лазания в спортзале.", shortClue:"Верёвка для лазания.", theme:"sport", difficulty:1, len:5, tags:["equipment"] },
  { id:"s_turnik",     word:"ТУРНИК",    clue:"Перекладина для подтягиваний.", shortClue:"Для подтягиваний.", theme:"sport", difficulty:1, len:6, tags:["equipment"] },
  { id:"s_brevno",     word:"БРЕВНО",    clue:"Гимнастический снаряд для упражнений на равновесие.", shortClue:"Снаряд для равновесия.", theme:"sport", difficulty:1, len:6, tags:["gymnastics"] },
  { id:"s_kon",        word:"КОНЬ",      clue:"Гимнастический снаряд для опорных прыжков.", shortClue:"Снаряд для прыжков.", theme:"sport", difficulty:1, len:4, tags:["gymnastics"] },
  { id:"s_koltsa",     word:"КОЛЬЦА",    clue:"Гимнастический снаряд, висящий на тросах.", shortClue:"Висячий снаряд.", theme:"sport", difficulty:1, len:6, tags:["gymnastics"] },
  { id:"s_shest",      word:"ШЕСТ",      clue:"Длинный упругий снаряд для прыжков в высоту.", shortClue:"Снаряд прыгуна.", theme:"sport", difficulty:1, len:4, tags:["equipment"] },
  { id:"s_mostik",     word:"МОСТИК",    clue:"Подкидной снаряд гимнаста перед прыжком на коня.", shortClue:"Подкидной снаряд.", theme:"sport", difficulty:2, len:6, tags:["gymnastics"] },

  // ---- Советская спортивная культура ----
  { id:"s_gto",        word:"ГТО",       clue:"Советская спортивная программа «Готов к труду и обороне».", shortClue:"«Готов к труду…».", theme:"sport", difficulty:1, len:3, tags:["ussr"] },
  { id:"s_dynamo",     word:"ДИНАМО",    clue:"Советское спортивное общество милиции и силовых ведомств.", shortClue:"Общество милиции.", theme:"sport", difficulty:1, len:6, tags:["ussr"] },
  { id:"s_spartak",    word:"СПАРТАК",   clue:"Советское спортивное общество профсоюзов.", shortClue:"Общество профсоюзов.", theme:"sport", difficulty:1, len:7, tags:["ussr"] },
  { id:"s_cska",       word:"ЦСКА",      clue:"Спортивный клуб Министерства обороны СССР и России.", shortClue:"Клуб армии.", theme:"sport", difficulty:1, len:4, tags:["ussr"] },
  { id:"s_spartakiada",word:"СПАРТАКИАДА",clue:"Крупнейшие комплексные соревнования в СССР.", shortClue:"Главный смотр СССР.", theme:"sport", difficulty:2, len:11, tags:["ussr"] },
  { id:"s_burevestnik",word:"БУРЕВЕСТНИК",clue:"Студенческое спортивное общество СССР.", shortClue:"Студенческое общество.", theme:"sport", difficulty:2, len:11, tags:["ussr"] },
  { id:"s_zaryadka",   word:"ЗАРЯДКА",   clue:"Утренний комплекс физических упражнений.", shortClue:"Утренние упражнения.", theme:"sport", difficulty:1, len:7, tags:["ussr"] },
  { id:"s_olympieets", word:"ОЛИМПИЕЦ",  clue:"Участник Олимпийских игр.", shortClue:"Участник Олимпиады.", theme:"sport", difficulty:2, len:8, tags:["honors"] },
  { id:"s_msmk",       word:"МСМК",      clue:"Мастер спорта международного класса, аббревиатура.", shortClue:"Мастер спорта (межд.).", theme:"sport", difficulty:2, len:4, tags:["honors"] },
  { id:"s_zms",        word:"ЗМС",       clue:"Заслуженный мастер спорта, советская награда.", shortClue:"Высшее звание.", theme:"sport", difficulty:2, len:3, tags:["honors","ussr"] },
  { id:"s_mok",        word:"МОК",       clue:"Международный олимпийский комитет, аббревиатура.", shortClue:"Орг. Олимпиад.", theme:"sport", difficulty:2, len:3, tags:["org"] },
  { id:"s_komanda",    word:"КОМАНДА",   clue:"Группа спортсменов, выступающих сообща.", shortClue:"Группа спортсменов.", theme:"sport", difficulty:1, len:7 },
  { id:"s_sbornaya",   word:"СБОРНАЯ",   clue:"Команда лучших спортсменов страны.", shortClue:"Лучшие страны.", theme:"sport", difficulty:1, len:7 },
  { id:"s_forma",      word:"ФОРМА",     clue:"Спортивная одежда команды или сборной.", shortClue:"Одежда команды.", theme:"sport", difficulty:1, len:5 },

  // ---- Чемпионы других видов спорта ----
  { id:"s_brumel",     word:"БРУМЕЛЬ",   clue:"Валерий, советский олимпийский чемпион Токио-1964 в прыжках в высоту.", shortClue:"Прыгун в высоту 1964.", theme:"sport", difficulty:3, len:7, tags:["surname","champion","ussr"] },
  { id:"s_borzov",     word:"БОРЗОВ",    clue:"Валерий, советский спринтер, двукратный чемпион Мюнхена-1972.", shortClue:"Спринтер Мюнхена.", theme:"sport", difficulty:3, len:6, tags:["surname","champion","ussr"] },
  { id:"s_rodnina",    word:"РОДНИНА",   clue:"Ирина, трёхкратная олимпийская чемпионка в парном фигурном катании.", shortClue:"3-кратная фигуристка.", theme:"sport", difficulty:2, len:7, tags:["surname","champion","ussr"] },
  { id:"s_kharlamov",  word:"ХАРЛАМОВ",  clue:"Валерий, легендарный советский хоккеист с 17 номером.", shortClue:"Хоккеист с 17 номером.",
    expertClues: [
      "Валерий с 17-м номером ЦСКА и сборной.",
      "Тот, кому Кларк сломал лодыжку в Серии-72.",
      "Семнадцатый, не доехавший до больницы в 1981-м."
    ], theme:"sport", difficulty:2, len:8, tags:["surname","ussr"] },
  { id:"s_yashin",     word:"ЯШИН",      clue:"Лев, единственный вратарь — обладатель «Золотого мяча».", shortClue:"Вратарь — Золотой мяч.",
    expertClues: [
      "Лев, единственный вратарь с «Золотым мячом» Европы.",
      "«Чёрный паук» в воротах сборной СССР.",
      "Тот, кого помнят по чёрному свитеру и кепке."
    ], theme:"sport", difficulty:2, len:5, tags:["surname","ussr"] },
  { id:"s_tretyak",    word:"ТРЕТЬЯК",   clue:"Владислав, легендарный советский хоккейный вратарь.", shortClue:"Хоккейный вратарь.",
    expertClues: [
      "Владислав, что стоял в воротах сборной СССР 70-80-х.",
      "Тот, кого канадцы в Серии-72 не могли пробить.",
      "Лучший хоккейный вратарь XX века по версии IIHF."
    ], theme:"sport", difficulty:2, len:7, tags:["surname","ussr"] },
  { id:"s_bubka",      word:"БУБКА",     clue:"Сергей, шесть раз бил мировой рекорд в прыжках с шестом.", shortClue:"Прыгун с шестом.",
    expertClues: [
      "Сергей, чей шест 35 раз бил мировой рекорд.",
      "Украинский атлет, что один владел высотой 6 метров.",
      "Тот, кто десять лет не отдавал золото мира с шестом."
    ], theme:"sport", difficulty:2, len:5, tags:["surname","champion","ussr"] },
  { id:"s_salnikov",   word:"САЛЬНИКОВ", clue:"Владимир, советский четырёхкратный олимпийский чемпион в плавании.", shortClue:"4-кратный пловец.", theme:"sport", difficulty:3, len:9, tags:["surname","champion","ussr"] },
  { id:"s_karelin",    word:"КАРЕЛИН",   clue:"Александр, трёхкратный олимпийский чемпион по греко-римской борьбе.", shortClue:"Борец, 3 ОЧ.",
    expertClues: [
      "Сибирский медведь греко-римского ковра.",
      "Тот, кому 13 лет никто не проигрывал.",
      "Александр, чей коронный приём — обратный пояс."
    ], theme:"sport", difficulty:2, len:7, tags:["surname","champion"] },
  { id:"s_karpov",     word:"КАРПОВ",    clue:"Анатолий, чемпион мира по шахматам с 1975 по 1985 год.", shortClue:"Шахматист 1975-85.", theme:"sport", difficulty:2, len:6, tags:["surname"] },

  // ---- Спортивные сооружения и события ----
  { id:"s_stadion",    word:"СТАДИОН",   clue:"Большое сооружение с трибунами для соревнований.", shortClue:"Главный спортобъект.", theme:"sport", difficulty:1, len:7 },
  { id:"s_arena",      word:"АРЕНА",     clue:"Круглая или овальная площадка для зрелищ.", shortClue:"Площадка для зрелищ.", theme:"sport", difficulty:1, len:5 },
  { id:"s_basseyn",    word:"БАССЕЙН",   clue:"Сооружение с водой для плавания и водного поло.", shortClue:"Водоём для плавания.", theme:"sport", difficulty:1, len:7 },
  { id:"s_kort",       word:"КОРТ",      clue:"Площадка для тенниса.", shortClue:"Площадка тенниса.", theme:"sport", difficulty:1, len:4 },
  { id:"s_pole",       word:"ПОЛЕ",      clue:"Травяная площадка для футбольного матча.", shortClue:"Поле футболиста.", theme:"sport", difficulty:1, len:4 },
  { id:"s_vorota",     word:"ВОРОТА",    clue:"П-образная конструкция, в которую забивают гол.", shortClue:"Куда забивают гол.", theme:"sport", difficulty:1, len:6 },
  { id:"s_setka",      word:"СЕТКА",     clue:"Препятствие в волейболе и теннисе между сторонами.", shortClue:"Между сторонами.", theme:"sport", difficulty:1, len:5 },
  { id:"s_myach",      word:"МЯЧ",       clue:"Главный предмет большинства командных игр.", shortClue:"Главный в играх.", theme:"sport", difficulty:1, len:3 },
  { id:"s_lyzhi",      word:"ЛЫЖИ",      clue:"Зимний спортивный инвентарь для скольжения по снегу.", shortClue:"Зимние полозья.", theme:"sport", difficulty:1, len:4 },
  { id:"s_konki",      word:"КОНЬКИ",    clue:"Обувь со стальными лезвиями для катания по льду.", shortClue:"Лезвия по льду.", theme:"sport", difficulty:1, len:6 },
  { id:"s_veslo",      word:"ВЕСЛО",     clue:"Главный инструмент гребца.", shortClue:"Инструмент гребца.", theme:"sport", difficulty:1, len:5 },
  { id:"s_perchatki",  word:"ПЕРЧАТКИ",  clue:"Защита кулаков боксёра.", shortClue:"Защита боксёра.", theme:"sport", difficulty:1, len:8 },
  { id:"s_ataka",      word:"АТАКА",     clue:"Наступательное действие в командной игре.", shortClue:"Наступление.", theme:"sport", difficulty:1, len:5 },
  { id:"s_zashchita",  word:"ЗАЩИТА",    clue:"Оборонительные действия команды.", shortClue:"Оборона.", theme:"sport", difficulty:1, len:6 },
  { id:"s_podacha",    word:"ПОДАЧА",    clue:"Начальный удар в волейболе или теннисе.", shortClue:"Начальный удар.", theme:"sport", difficulty:1, len:6 },
  { id:"s_udar",       word:"УДАР",      clue:"Резкое движение с контактом по мячу или сопернику.", shortClue:"Резкий контакт.", theme:"sport", difficulty:1, len:4 },
  { id:"s_zabeg",      word:"ЗАБЕГ",     clue:"Соревновательная дистанция в беге.", shortClue:"Дистанция в беге.", theme:"sport", difficulty:1, len:5 },
  { id:"s_finish",     word:"ФИНИШ",     clue:"Конец дистанции, последняя черта забега.", shortClue:"Конец дистанции.", theme:"sport", difficulty:1, len:5 },
  { id:"s_gonka",      word:"ГОНКА",     clue:"Скоростное соревнование на выбывание.", shortClue:"Соревнование на скорость.", theme:"sport", difficulty:1, len:5 },
  { id:"s_match",      word:"МАТЧ",      clue:"Спортивная встреча двух команд или соперников.", shortClue:"Спортивная встреча.", theme:"sport", difficulty:1, len:4 },
  { id:"s_igra",       word:"ИГРА",      clue:"Соревновательная активность по правилам.", shortClue:"С правилами.", theme:"sport", difficulty:1, len:4 },
  { id:"s_taym",       word:"ТАЙМ",      clue:"Половина или треть футбольного матча.", shortClue:"Половина матча.", theme:"sport", difficulty:1, len:4 },
  { id:"s_schet",      word:"СЧЕТ",      clue:"Численный результат игры между командами.", shortClue:"Результат игры.", theme:"sport", difficulty:1, len:4 },
  { id:"s_gol",        word:"ГОЛ",       clue:"Главное событие футбольного матча в воротах соперника.", shortClue:"Цель футболиста.", theme:"sport", difficulty:1, len:3 },
  { id:"s_aut",        word:"АУТ",       clue:"Выход мяча за пределы поля.", shortClue:"Мяч за полем.", theme:"sport", difficulty:1, len:3 },
  { id:"s_fol",        word:"ФОЛ",       clue:"Нарушение правил в баскетболе.", shortClue:"Нарушение в баскете.", theme:"sport", difficulty:1, len:3 },

  // ---- Заковыристые: спорт через намёк ----
  { id:"t_vysota",     word:"ВЫСОТА",    clue:"И отметка прыгуна, и заявленный вес штангиста.", shortClue:"Прыжка или штанги.", theme:"sport", difficulty:2, len:6, tags:["wordplay"] },
  { id:"t_pot",        word:"ПОТ",       clue:"Жидкое доказательство тяжёлой тренировки.", shortClue:"Жидкость спортзала.", theme:"sport", difficulty:1, len:3, tags:["wordplay"] },
  { id:"t_dyhanie",    word:"ДЫХАНИЕ",   clue:"Без него не поднять штангу и не пробежать стометровку.", shortClue:"Кислород спортсмена.", theme:"sport", difficulty:1, len:7 },
  { id:"t_lifter",     word:"ЛИФТЕР",    clue:"Просторечное название пауэрлифтера.", shortClue:"Пауэрлифтер (разг.).", theme:"sport", difficulty:2, len:6, tags:["wordplay"] },
  { id:"t_linia",      word:"ЛИНИЯ",     clue:"Бывает финишная, штрафная и жизни.", shortClue:"Финишная или штрафная.", theme:"sport", difficulty:1, len:5, tags:["wordplay"] },
  { id:"t_boets",      word:"БОЕЦ",      clue:"Спортсмен ринга или татами.", shortClue:"Боксёр или борец.", theme:"sport", difficulty:1, len:4 },
  { id:"t_volya",      word:"ВОЛЯ",      clue:"Главное оружие штангиста на четвёртой попытке.", shortClue:"Внутренняя сила.", theme:"sport", difficulty:2, len:4 },
  { id:"t_sila",       word:"СИЛА",      clue:"Качество, которое штангист измеряет каждым подъёмом.", shortClue:"Качество силача.", theme:"sport", difficulty:1, len:4 },
  { id:"t_gibkost",    word:"ГИБКОСТЬ",  clue:"Качество, без которого гимнаст не сядет на шпагат.", shortClue:"Качество гимнаста.", theme:"sport", difficulty:1, len:8 },
  { id:"t_vynoslivost",word:"ВЫНОСЛИВОСТЬ",clue:"Главное качество марафонца, лыжника и многоборца.", shortClue:"Запас сил надолго.", theme:"sport", difficulty:1, len:12 },
  { id:"t_reaktsiya",  word:"РЕАКЦИЯ",   clue:"Скорость, с которой вратарь реагирует на бросок.", shortClue:"Скорость вратаря.", theme:"sport", difficulty:2, len:7 },
  { id:"t_azart",      word:"АЗАРТ",     clue:"Огонёк в глазах атлета перед стартом.", shortClue:"Спортивный огонёк.", theme:"sport", difficulty:1, len:5 },
  { id:"t_harakter",   word:"ХАРАКТЕР",  clue:"То, чем берётся вес после двух неудачных попыток.", shortClue:"Стержень после неудач.", theme:"sport", difficulty:2, len:8 },
  { id:"t_upornost",   word:"УПОРСТВО",  clue:"Качество, делающее из новичка мастера.", shortClue:"Путь к мастеру.", theme:"sport", difficulty:1, len:8 },
  { id:"t_dukh",       word:"ДУХ",       clue:"Боевой настрой команды перед матчем.", shortClue:"Боевой настрой.", theme:"sport", difficulty:1, len:3 },
  { id:"t_nerv",       word:"НЕРВ",      clue:"Натянутая струна спортсмена в финале турнира.", shortClue:"Натянутая струна.", theme:"sport", difficulty:2, len:4 },
  { id:"t_geraklov",   word:"ГЕРАКЛ",    clue:"Древнегреческий герой-силач, эталон богатыря.", shortClue:"Античный богатырь.", theme:"sport", difficulty:1, len:6 },
  { id:"t_atlas",      word:"АТЛАС",     clue:"Древний титан, державший небо, и фамилия силача.", shortClue:"Титан со сводом.", theme:"sport", difficulty:2, len:5, tags:["wordplay"] },
  { id:"t_slava",      word:"СЛАВА",     clue:"То, что приходит к чемпиону вместе с медалью.", shortClue:"Спутник чемпиона.", theme:"sport", difficulty:1, len:5 },
  { id:"t_pobeda",     word:"ПОБЕДА",    clue:"Цель спортсмена и итог матча.", shortClue:"Цель спортсмена.", theme:"sport", difficulty:1, len:6 },

  // ---- Общая лексика: еда и быт ----
  { id:"g_sol",        word:"СОЛЬ",      clue:"Приправа на каждом столе.", theme:"general", difficulty:1, len:4 },
  { id:"g_chai",       word:"ЧАЙ",       clue:"Горячий напиток из заваренных листьев.", theme:"general", difficulty:1, len:3 },
  { id:"g_kofe",       word:"КОФЕ",      clue:"Тонизирующий утренний напиток.", theme:"general", difficulty:1, len:4 },
  { id:"g_voda",       word:"ВОДА",      clue:"Прозрачная жидкость, основа жизни.", theme:"general", difficulty:1, len:4 },
  { id:"g_med",        word:"МЕД",       clue:"Сладкий продукт пчелиного труда.", theme:"general", difficulty:1, len:3 },
  { id:"g_hleb",       word:"ХЛЕБ",      clue:"Главный продукт на русском столе.", theme:"general", difficulty:1, len:4 },
  { id:"g_kasha",      word:"КАША",      clue:"Утренняя крупяная еда.", theme:"general", difficulty:1, len:4 },
  { id:"g_yabloko",    word:"ЯБЛОКО",    clue:"Плод того дерева, что растёт в саду.", theme:"general", difficulty:1, len:6 },
  { id:"g_limon",      word:"ЛИМОН",     clue:"Жёлтый кислый цитрус.", theme:"general", difficulty:1, len:5 },
  { id:"g_nozh",       word:"НОЖ",       clue:"Режущий инструмент на кухне.", theme:"general", difficulty:1, len:3 },
  { id:"g_lozhka",     word:"ЛОЖКА",     clue:"Столовый прибор для жидкой пищи.", theme:"general", difficulty:1, len:5 },
  { id:"g_vilka",      word:"ВИЛКА",     clue:"Столовый прибор с зубцами.", theme:"general", difficulty:1, len:5 },
  { id:"g_dver",       word:"ДВЕРЬ",     clue:"Подвижная преграда в проёме стены.", theme:"general", difficulty:1, len:5 },

  // ---- Общая лексика: природа ----
  { id:"g_les",        word:"ЛЕС",       clue:"Множество деревьев на большом пространстве.", theme:"general", difficulty:1, len:3 },
  { id:"g_reka",       word:"РЕКА",      clue:"Постоянный поток пресной воды.", theme:"general", difficulty:1, len:4 },
  { id:"g_ozero",      word:"ОЗЕРО",     clue:"Естественный водоём со стоячей водой.", theme:"general", difficulty:1, len:5 },
  { id:"g_gora",       word:"ГОРА",      clue:"Крупное возвышение земной поверхности.", theme:"general", difficulty:1, len:4 },
  { id:"g_step",       word:"СТЕПЬ",     clue:"Безлесная травянистая равнина.", theme:"general", difficulty:1, len:5 },
  { id:"g_polyana",    word:"ПОЛЯНА",    clue:"Открытое место среди леса.", theme:"general", difficulty:1, len:6 },
  { id:"g_oblako",     word:"ОБЛАКО",    clue:"Скопление водяного пара в небе.", theme:"general", difficulty:1, len:6 },
  { id:"g_dozhd",      word:"ДОЖДЬ",     clue:"Атмосферные осадки в виде капель.", theme:"general", difficulty:1, len:5 },
  { id:"g_sneg",       word:"СНЕГ",      clue:"Зимние осадки в виде хлопьев.", theme:"general", difficulty:1, len:4 },
  { id:"g_veter",      word:"ВЕТЕР",     clue:"Поток воздуха над землёй.", theme:"general", difficulty:1, len:5 },
  { id:"g_grom",       word:"ГРОМ",      clue:"Громкий звук грозы.", theme:"general", difficulty:1, len:4 },
  { id:"g_molniya",    word:"МОЛНИЯ",    clue:"Электрический разряд во время грозы.", theme:"general", difficulty:1, len:6 },
  { id:"g_solntse",    word:"СОЛНЦЕ",    clue:"Звезда, дающая свет и тепло Земле.", theme:"general", difficulty:1, len:6 },
  { id:"g_luna",       word:"ЛУНА",      clue:"Естественный спутник Земли.", theme:"general", difficulty:1, len:4 },
  { id:"g_zvezda",     word:"ЗВЕЗДА",    clue:"Светящаяся точка в ночном небе.", theme:"general", difficulty:1, len:6 },

  // ---- Общая лексика: время и семья ----
  { id:"g_utro",       word:"УТРО",      clue:"Начало нового дня.", theme:"general", difficulty:1, len:4 },
  { id:"g_vecher",     word:"ВЕЧЕР",     clue:"Время суток после заката.", theme:"general", difficulty:1, len:5 },
  { id:"g_noch",       word:"НОЧЬ",      clue:"Тёмное время суток.", theme:"general", difficulty:1, len:4 },
  { id:"g_god",        word:"ГОД",       clue:"Период из 365 дней.", theme:"general", difficulty:1, len:3 },
  { id:"g_mig",        word:"МИГ",       clue:"Очень короткий промежуток времени.", theme:"general", difficulty:1, len:3 },
  { id:"g_drug",       word:"ДРУГ",      clue:"Близкий товарищ.", theme:"general", difficulty:1, len:4 },
  { id:"g_brat",       word:"БРАТ",      clue:"Сын тех же родителей.", theme:"general", difficulty:1, len:4 },
  { id:"g_otets",      word:"ОТЕЦ",      clue:"Мужчина по отношению к своим детям.", theme:"general", difficulty:1, len:4 },

  // ---- Общая лексика: быт и культура ----
  { id:"g_park",       word:"ПАРК",      clue:"Городское пространство для прогулок.", theme:"general", difficulty:1, len:4 },
  { id:"g_ulitsa",     word:"УЛИЦА",     clue:"Городское пространство между двумя рядами зданий.", theme:"general", difficulty:1, len:5 },
  { id:"g_ploshchad",  word:"ПЛОЩАДЬ",   clue:"Открытое пространство в центре города.", theme:"general", difficulty:1, len:7 },
  { id:"g_gazeta",     word:"ГАЗЕТА",    clue:"Периодическое печатное издание новостей.", theme:"general", difficulty:1, len:6 },
  { id:"g_zhurnal",    word:"ЖУРНАЛ",    clue:"Иллюстрированное периодическое издание.", theme:"general", difficulty:1, len:6 },
  { id:"g_pismo",      word:"ПИСЬМО",    clue:"Письменное послание адресату.", theme:"general", difficulty:1, len:6 },
  { id:"g_pesnya",     word:"ПЕСНЯ",     clue:"Музыкальное произведение со словами.", theme:"general", difficulty:1, len:5 },
  { id:"g_nota",       word:"НОТА",      clue:"Знак для обозначения музыкального звука.", theme:"general", difficulty:1, len:4 },
  { id:"g_hor",        word:"ХОР",       clue:"Коллектив певцов.", theme:"general", difficulty:1, len:3 },

  // ---- География ----
  { id:"g_volga",      word:"ВОЛГА",     clue:"Самая длинная река Европы.", theme:"general", difficulty:1, len:5 },
  { id:"g_neva",       word:"НЕВА",      clue:"Главная река Санкт-Петербурга.", theme:"general", difficulty:1, len:4 },
  { id:"g_don",        word:"ДОН",       clue:"Тихая казачья река.", theme:"general", difficulty:1, len:3 },
  { id:"g_ural",       word:"УРАЛ",      clue:"Горный хребет на границе Европы и Азии.", theme:"general", difficulty:1, len:4 },
  { id:"g_sibir",      word:"СИБИРЬ",    clue:"Огромный край России к востоку от Урала.", theme:"general", difficulty:1, len:6 },
  { id:"g_moskva",     word:"МОСКВА",    clue:"Столица России.", theme:"general", difficulty:1, len:6 },
  { id:"g_rossiya",    word:"РОССИЯ",    clue:"Самая большая страна мира.", theme:"general", difficulty:1, len:6 },
  { id:"g_kavkaz",     word:"КАВКАЗ",    clue:"Горный регион между Чёрным и Каспийским морями.", theme:"general", difficulty:1, len:6 },
  { id:"g_baikal",     word:"БАЙКАЛ",    clue:"Самое глубокое озеро мира.", theme:"general", difficulty:1, len:6 },
  { id:"g_sssr",       word:"СССР",      clue:"Государство, существовавшее с 1922 по 1991 год.", theme:"general", difficulty:1, len:4, tags:["ussr"] },

  // ---- Профессии и культурные образы ----
  { id:"g_pilot",      word:"ПИЛОТ",     clue:"Лётчик, управляющий воздушным судном.", theme:"general", difficulty:1, len:5 },
  { id:"g_vrach",      word:"ВРАЧ",      clue:"Специалист, лечащий людей.", theme:"general", difficulty:1, len:4 },
  { id:"g_uchenyy",    word:"УЧЕНЫЙ",    clue:"Человек науки.", theme:"general", difficulty:1, len:6 },
  { id:"g_korol",      word:"КОРОЛЬ",    clue:"Главная фигура в шахматах и старшая карточная карта.", theme:"general", difficulty:1, len:6 },
  { id:"g_korona",     word:"КОРОНА",    clue:"Головной убор монарха.", theme:"general", difficulty:1, len:6 },
  { id:"g_tron",       word:"ТРОН",      clue:"Кресло короля или царя.", theme:"general", difficulty:1, len:4 },

  // ---- Короткие наполнители для геометрии ----
  { id:"g_glaz",       word:"ГЛАЗ",      clue:"Орган зрения.", theme:"general", difficulty:1, len:4 },
  { id:"g_uho",        word:"УХО",       clue:"Орган слуха.", theme:"general", difficulty:1, len:3 },
  { id:"g_nos",        word:"НОС",       clue:"Орган обоняния на лице.", theme:"general", difficulty:1, len:3 },
  { id:"g_rot",        word:"РОТ",       clue:"Часть лица для речи и приёма пищи.", theme:"general", difficulty:1, len:3 },
  { id:"g_ruka",       word:"РУКА",      clue:"Верхняя конечность человека.", theme:"general", difficulty:1, len:4 },
  { id:"g_noga",       word:"НОГА",      clue:"Нижняя конечность человека.", theme:"general", difficulty:1, len:4 },
  { id:"g_volk",       word:"ВОЛК",      clue:"Хищник из семейства псовых.", theme:"general", difficulty:1, len:4 },
  { id:"g_lisa",       word:"ЛИСА",      clue:"Рыжая хищница лесов.", theme:"general", difficulty:1, len:4 },
  { id:"g_zayats",     word:"ЗАЯЦ",      clue:"Лесной зверёк с длинными ушами.", theme:"general", difficulty:1, len:4 },
  { id:"g_med2",       word:"МЕДВЕДЬ",   clue:"Бурый или белый хищник лесов и тундры.", theme:"general", difficulty:1, len:7 },
  { id:"g_orel",       word:"ОРЕЛ",      clue:"Хищная птица, символ силы и власти.", theme:"general", difficulty:1, len:4 },
  { id:"g_voron",      word:"ВОРОН",     clue:"Чёрная птица из басни Крылова.", theme:"general", difficulty:1, len:5 },
  { id:"g_korova",     word:"КОРОВА",    clue:"Домашнее парнокопытное, дающее молоко.", theme:"general", difficulty:1, len:6 },
  { id:"g_loshad",     word:"ЛОШАДЬ",    clue:"Верховое и тягловое домашнее животное.", theme:"general", difficulty:1, len:6 },
  { id:"g_baran",      word:"БАРАН",     clue:"Самец овцы с закрученными рогами.", theme:"general", difficulty:1, len:5 },
  { id:"g_zhuk",       word:"ЖУК",       clue:"Насекомое с твёрдыми надкрыльями.", theme:"general", difficulty:1, len:3 },
  { id:"g_pchela",     word:"ПЧЕЛА",     clue:"Полосатое насекомое, дающее мёд.", theme:"general", difficulty:1, len:5 },
  { id:"g_komar",      word:"КОМАР",     clue:"Кровососущее летающее насекомое.", theme:"general", difficulty:1, len:5 },
  { id:"g_ryba",       word:"РЫБА",      clue:"Водное позвоночное, плавающее с хвостом.", theme:"general", difficulty:1, len:4 },
  { id:"g_kit",        word:"КИТ",       clue:"Самое крупное млекопитающее океана.", theme:"general", difficulty:1, len:3 },
];
