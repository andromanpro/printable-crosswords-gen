# printable-crosswords-gen — контекст проекта для Claude

## Назначение

Pet-проект — генератор печатных кроссвордов для одного целевого пользователя (увлекается тяжёлой атлетикой и снукером). Запуск двойным кликом по `index.html`, печать через `Ctrl+P`. Только классические кроссворды — сканворды были и удалены в v32 (формат отвергнут целевым пользователем).

Корпус слов в репо — **пример**. При публичной публикации проект позиционируется как универсальный генератор: любой может форкнуть и подменить `data/` под свою тему. См. README.md.

## Технические решения

- **Стек:** vanilla HTML + JS + CSS, без бандлеров, без фреймворков.
- **Запуск:** `file:///` через двойной клик. Никакого dev-сервера на стороне пользователя.
- **Данные:** `data/*.js` подключаются как `<script>`, не как JSON (fetch блокируется через `file:///`).
- **Namespace:** все JS-модули вешают API на `window.CW`. Нет `type="module"`.
- **Cache-bust:** в HTML каждому `<script>` и `<link>` приписан `?v=N`. После правок — bump `v`. Сейчас v=33.
- **Локальная разработка:** открыть `index.html` через `file:///` или поднять любой http-сервер на корне проекта (например `python -m http.server 8866`).

## Структура файлов

```
crossword-gen/
├─ index.html                  ← UI + все script/link с ?v=22
├─ README.md                   ← для пользователей и контрибьюторов
├─ CLAUDE.md                   ← этот файл
├─ css/
│   ├─ ui.css                  ← экранный стиль + темы (светлая/тёмная)
│   └─ print.css               ← @media print, A4, сброс цветов на свет.
├─ js/
│   ├─ data-loader.js          ← CW.DataLoader: normalize, buildPool, packs
│   ├─ rng.js                  ← Mulberry32
│   ├─ history.js              ← localStorage «не повторять» (cw_history_v1)
│   ├─ puzzles.js              ← localStorage история кроссвордов (cw_puzzles_v1)
│   ├─ grid.js                 ← модель сетки + place() со случайным выбором clue
│   ├─ generator-classic.js    ← жадный алгоритм с balanceDifficulty
│   ├─ renderer.js             ← отрисовка + pickClue по стилю
│   └─ app.js                  ← bootstrapping
└─ data/
    ├─ words.js                ← база CW.BASE_WORDS_RAW (~310 записей)
    ├─ pack-power-sports.js    ← 28 entries
    ├─ pack-ta-world.js        ← 22 entries
    ├─ pack-champions-ussr.js  ← 32 entries
    ├─ pack-olympic-culture.js ← 28 entries
    ├─ pack-spirit-witty.js    ← 23 entries
    ├─ pack-hockey.js          ← 24 entries
    ├─ pack-football.js        ← 24 entries
    ├─ pack-snooker.js         ← 24 entries (одна из ключевых тем целевого пользователя)
    ├─ pack-combat-sports.js   ← 23 entries
    ├─ pack-winter-sports.js   ← 22 entries
    ├─ pack-figure-rhythmic.js ← 25 entries
    ├─ pack-tennis.js          ← 18 entries
    └─ pack-world-stars.js     ← 17 entries (новый, v=21)
```

## Текущее состояние корпуса (после v27)

- **Всего слов:** 600
- **Паков:** 13 (база + 12 опциональных)
- **Распределение по темам:** ~146 weightlifting + ~340 sport + ~119 general
- **Хитрых формулировок:** 170
  - Single (`expertClue`): **0** — все сконвертированы в v24
  - Multi (`expertClues` массив 2-3 вариантов): **170** ✅

## Записи с multi-expertClues — все 170

При размещении (`grid.place`) случайно выбирается ОДНА формулировка из массива и фиксируется в puzzle. При повторе слова — другая формулировка.

С v24 **все** хитрые формулировки в корпусе мульти-вариантные. Получить актуальный список:

```js
// preview_eval:
CW.WORDS.filter(w => w.expertClues).map(w => w.word).sort()
```

Если в будущем добавляется новое слово с хитрой формулировкой — сразу как `expertClues:[3 варианта]`, не как single.

## Открытые TODO для следующих сессий

### Главное: глубокий фактчек 170 хитрых формулировок
В v25 проведён первый автоматический проход:
- ✅ 7 overlap-повторов direct clue в expertClues (idx 1) — заменены
- ✅ Выборочный фактчек: ПОДДУБНЫЙ «не знал поражений сорок лет» → «почти не сходил с пьедестала» (миф убран)

Что осталось:
- **Глубокий фактчек по датам/числам/именам** — пройти топ-50 spotlight записей (чемпионы, исторические события). Ручная проверка каждого факта против Википедии/источников.
- **Слабые формулировки** (близко к direct, скучные) — заменить на меткие/образные.

Скрипт для авто-проверки overlap:
```js
const norm = s => (s||'').toLowerCase().replace(/[«»".,;—–\-()]/g,'').replace(/\s+/g,' ').trim();
CW.WORDS.filter(w => w.expertClues).flatMap(w => w.expertClues.map((e,i) => {
  const cn = norm(w.clue), en = norm(e);
  return cn && (cn.includes(en) || en.includes(cn)) ? {word:w.word,idx:i,e} : null;
})).filter(Boolean)
// Должно вернуть [] — если нет, есть повторы.
```

### Второе: расширение тем вне спорта
Целевой пользователь просил «не только спорт». Подходящие темы для новых паков:
- Литература (Пушкин, Толстой, Чехов, Гоголь + герои)
- Кино СССР (Гайдай, Никулин, Леонов-актёр, Миронов)
- Музыка (Высоцкий, Окуджава, Чайковский, Глинка)
- История (Пётр, Кутузов, Суворов, Жуков)
- География России (Эльбрус, Камчатка, Байкал, Енисей)

### Третье: расширение хитрых формулировок на оставшиеся 435 слов без expertClue
Сейчас 170 из 605 слов имеют хитрую формулировку. Можно расширить до 250+, особенно для часто встречающихся коротких слов (3-5 букв) — они активно используются генератором.

```js
// preview_eval: найти короткие слова без expertClue:
CW.WORDS.filter(w => !w.expertClue && !w.expertClues && w.len <= 5).map(w => w.word).sort()
```

## Технические особенности (для следующих сессий)

### Авто-подхват новых паков
В `data-loader.autoAdoptNewPacks()` — два localStorage-ключа:
- `cw_packs_known_v1` — паки, когда-либо встреченные
- `cw_packs_enabled_v1` — текущий список включённых

Когда вижу новый pack-id (нет в KNOWN), добавляю в KNOWN + ENABLED. Это фиксит баг: пользователь отключил пак → не заново-включить, новый пак (после добавления в код) → авто-подхватить.

### CSS variables для светлой/тёмной темы
В `:root` определены 13 цветовых переменных. `body.theme-dark` переопределяет на тёмные. В `@media print` (`print.css`) эти переменные принудительно сбрасываются на светлые через `body.theme-dark { ... !important }` — печать всегда на белом.

### Cryptic mode logic
1. UI radio `name="cluestyle"` (`direct` / `cryptic`)
2. При `place()`: если есть `clues[]` — `pickFromArray`, иначе `clue`. То же для `expertClues[]`/`expertClue`. Выбор фиксируется в `placement.clue` / `placement.expertClue`.
3. Renderer вызывает `pickClue(p, style)` — если `cryptic && p.expertClue` → `expertClue`, иначе `clue`.
4. При live-переключении радио → `rerenderClues()` без перегенерации сетки.

### Дедупликация по слову (защита)
В `data-loader.normalize()` — двойная дедупликация: по `id` и по `word` (после Ё→Е). Если один WORD появляется в base + pack — берётся первое появление, второе пропускается с warning.

## Не менять (важно)

- **Размещение:** в путях к репо желательна латиница (критично для Bash/Python на Windows при работе с file://)
- **Подключение data/*.js как `<script>`** — не fetch
- **`id` записей** стабильные — изменение ломает историю в localStorage
- **Слова без буквы Ё** — нормализуется в Е автоматически, но исходник пишется без Ё (стандарт российских кроссвордов)

## Verification

Локальный сервер на порту 8866 (через `python -m http.server 8866 --directory .`) или открыть `index.html` напрямую через `file:///`.

Полная проверка после правок:
```js
// В preview_eval:
const total = CW.WORDS.length;  // ~605
const single = CW.WORDS.filter(w => w.expertClue && !w.expertClues).length;
const multi = CW.WORDS.filter(w => w.expertClues).length;
// Стресс
CW.History.reset();
let ok = 0;
for (let i=0; i<20; i++) {
  const r = CW.GeneratorClassic.generate(
    CW.DataLoader.buildPool(CW.WORDS, {maxDifficulty:'mixed', sizeLimit:13, theme:'70_30'}),
    13, {seed:i*31337, balanceDifficulty:true}
  );
  if (r.ok) ok++;
}
// Должно быть ≥ 18/20, 0 паразитов
```

Финальная ручная проверка: открыть в Edge → сгенерировать → `Ctrl+P` → «Сохранить как PDF».

## История версий

- v1 — каркас, 90 слов
- v2-v3 — стили, base+packs (3 пака)
- v4 — print + история генерации (puzzles.js)
- v5 — pack system с 5 паками
- v6-v8 — packs hockey/football/snooker, scanword fixes
- v9 — auto-adopt fix
- v10 — packs combat/winter/figure/tennis
- v11-v12 — combat/dedup
- v13 — режим difficulty=mixed (interleave by difficulty)
- v14 — clue style axis (Прямые/Хитрые) с expertClue
- v15 — тёмная тема + cache-bust для CSS
- v16 — расширение expertClue (~100 entries)
- v17 — multi-clue infrastructure (clues[]/expertClues[])
- v18 — аудит expertClue, удалено 34 рерайта
- v19 — переписка ПЕЛЕ/ПЕНАЛЬТИ
- v20 — Russian TA + world stars pack
- v21 — multi-expertClues для топ-22 (TA, snooker, hockey, football, chess)
- v22 — multi для 8 ещё (sport общие + ТА термины + Latynina/Korbut/Гагарин/etc)
- v23 — закрыты 6 приоритетных паков: figure-rhythmic (5), football (6), combat-sports (8), tennis (4 single + 5 русских добавлены), winter-sports (2), champions-ussr (13). 43 правки. Single 91→58, multi 74→112.
- v24 — закрыты все остальные паки + base: power-sports (15), snooker (11), world-stars (9), hockey (7), olympic-culture (6), base words.js (6), ta-world (4). 58 правок. Single 58→0, multi 112→170. Все хитрые формулировки теперь мульти-вариантные.
- v25 — фактчек round 1: автопоиск нашёл 7 overlap-повторов direct clue в expertClues idx 1 (НОЖНИЦЫ, ГРИФ, ФЛАГ, ФИАСКО, ОВЕРТАЙМ, БИЛЬЯРД, БИТА), заменены на новые формулировки. ПОДДУБНЫЙ: убран миф «не знал поражений 40 лет». Overlaps=0.
- v26 — фактчек round 2: точечные исторические правки. СУЛЕЙМАНОГЛУ «три золота в 60 кг» → «три олимпийских золотых» (1996 был 64 кг, не 60). БЛАГОЕВ «рядом с Ригертом на пьедестале Москвы» → «из школы Абаджиева» (Ригерт не выступал в Москве-1980 из-за травмы). МУТЛУ «три золота подряд в 56 кг» → «в самых лёгких весах» (1996 был 54 кг до реформы IWF 1998).
- v27 — feedback от целевого пользователя: «полусредний/полутяжёлый и прочая фигня — тупо». Удалены 5 слов-категорий веса (ЛЕГЧАЙШИЙ, ПОЛУЛЕГКИЙ, ПОЛУСРЕДНИЙ, ПОЛУТЯЖЕЛЫЙ, СУПЕРТЯЖЕЛЫЙ) из ta-world. Из expertClues убраны все упоминания «N кг» (5 формулировок: МАЗИН «Чимкентский Виктор, ОЧ в 60 кг», ЧИМИШКЯН, ХРАПАТЫЙ ×2, БЛАГОЕВ). Total 605→600.
- v28 — большие сетки. Добавлены **XL 21×21** и **XXL 25×25** в UI (radio Размер). Расширена `targetPlacement(size)` в generator-classic.js для 17/19/21/23/25. Эмпирика на корпусе 600: 11×11 ≈13 слов, 13×13 ≈17, 15×15 ≈24, 21×21 ≈45 (42-49), 25×25 ≈59 (54-63). Без паразитов, smoke 5/5 ok.
- v29 — UX-набор: пер-fieldset toggle + раздельная печать. Toggle переделан в v30.
- v30 — feedback round 2: subtitle обобщён, сворачиваемые настройки переделаны (одна общая кнопка по умолчанию свёрнута), раздельная печать из v29 сохранена.
- v31 — рефакторинг сканворда (двухклеточные клю-боксы, `clueBoxAbsorbed`, ext/single режимы). Откачено в v32.
- v32 — **СКАНВОРДЫ УДАЛЕНЫ ПОЛНОСТЬЮ**. Целевой пользователь отверг формат: «останавливаемся на кроссвордах». Удалены: `generator-scanword.js` (файл), fieldset «Тип» в UI (был radio classic/scanword), все CSS-правила `.cell.clue-box*` / `.scanbox-*` / `.dual` (ui.css + print.css), переменные `--color-cluebox-bg` и `--scanbox-*-pt`, поле `clueBox` в `grid.cells`, ветвление по `opts.type` в app.js, переменная `currentType`, `orphanClues` в puzzles.js, `entry.type` в saved-puzzles, упоминания во всех clue/comments/README/CLAUDE.md/words.js. Заголовок «Генератор кроссвордов и сканвордов» → «Генератор кроссвордов». Поле `shortClue` в данных оставлено как legacy (не используется, не мешает, ~600 записей).
