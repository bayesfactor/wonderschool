/* ============================================================
   Wonderschool — shared glossary tooltips.

   Mark up any term:   <span class="gl" data-t="ppp">PPP</span>
   Works on hover, on keyboard focus, and on tap.
   Add a term by adding one line to TERMS below.
   ============================================================ */

const TERMS = {

  /* ---- money and economics ---- */
  gdp: ["GDP",
    "Gross Domestic Product — the value of everything a country makes and sells in one year.",
    "It counts cars, haircuts, software and sandwiches alike. It does not count housework, or anything given away free."],
  "nominal-gdp": ["Nominal GDP",
    "A country's GDP converted into US dollars at today's exchange rate.",
    "Because it depends on exchange rates, this number can fall by hundreds of billions without a single factory closing."],
  ppp: ["PPP — purchasing power parity",
    "GDP adjusted for what things actually cost in each country, instead of using the exchange rate.",
    "A haircut in Tokyo and a haircut in Mumbai are the same service at very different prices. PPP tries to correct for that. Japan is 4th in the world by nominal GDP and 5th by PPP."],
  "per-capita": ["Per capita",
    "Latin for “by head” — a total divided by the number of people.",
    "Japan is 4th in the world for total economy and 39th per capita. Same country, same year, both true."],
  median: ["Median",
    "The middle value: line everyone up smallest to largest and take the person in the middle.",
    "Different from the average. One billionaire changes the average a lot and the median almost not at all, which is why poverty is measured against the median."],
  gini: ["Gini index",
    "A single number for how unevenly income is shared out, from 0 to 100.",
    "0 would mean everyone earns exactly the same. 100 would mean one person earns everything. Real countries land between about 25 and 55. Japan is 32.9."],
  "relative-poverty": ["Relative poverty",
    "Living on less than half of what a typical person in your own country lives on.",
    "It measures being poor compared with your neighbours, not compared with the world. A relatively poor person in Japan may still be better off than an average person in a poorer country — that is not what this measure is trying to tell you."],
  index: ["Index",
    "A score somebody built by choosing what to measure and how much each part should count.",
    "An index is an argument with a number attached, not a fact of nature. Always ask who built it and what they decided to include."],
  imf: ["IMF",
    "The International Monetary Fund — 190-odd countries pooling economic data and emergency loans.",
    "Its World Economic Outlook, published twice a year, is where most GDP league tables come from."],
  "world-bank": ["World Bank",
    "An international lender that also publishes the most widely used database of country statistics.",
    "Most of the poverty, inequality and fertility numbers on this site come from its open data."],

  /* ---- people and measurement ---- */
  "fertility-rate": ["Fertility rate",
    "The average number of children a woman would have in her lifetime if today's birth rates stayed the same.",
    "About 2.1 keeps a population steady without immigration. Japan is at 1.15. South Korea, at 0.75, has the lowest ever recorded for a country."],
  "replacement-rate": ["Replacement rate",
    "The fertility rate a country needs just to keep its population the same size: about 2.1 children per woman.",
    "Slightly more than 2 because not every child survives to have children of their own."],
  literacy: ["Literacy rate",
    "The share of people aged 15 and over who can read and write a short simple sentence.",
    "UNESCO publishes no literacy figure at all for Japan, the USA, Germany, the UK, France, Canada or Australia. The famous “99%” is an assumption, not a measurement."],
  pisa: ["PISA",
    "An international test the OECD gives to 15-year-olds every three years, in reading, maths and science.",
    "In 2022 Japan scored 516 in reading (3rd in the world), 536 in maths (5th) and 547 in science (2nd)."],
  hdi: ["HDI",
    "The Human Development Index — one score combining how long people live, how much schooling they get, and income.",
    "Japan scores 0.925, ranked 23rd. Like any index, somebody chose those three ingredients and how to weigh them."],
  "self-report": ["Self-report",
    "Data collected by asking people about themselves.",
    "Cheap, fast, and systematically distorted by what people believe about themselves. Most Japanese people say they have no religion while still visiting a shrine every New Year."],
  unesco: ["UNESCO",
    "The United Nations agency for education, science and culture.",
    "It keeps the world's literacy statistics — and stops estimating literacy once a country is assumed to have universal schooling, which is why rich countries have no figure."],
  oecd: ["OECD",
    "A club of 38 mostly-rich countries that pool statistics and compare policies.",
    "It runs the PISA tests and publishes much of the comparable data on poverty and inequality."],

  /* ---- freedom and government ---- */
  "economic-freedom": ["Economic freedom",
    "A 0–100 score for how easy it is to start a business, own property, trade and keep what you earn.",
    "Built by the Heritage Foundation. Japan scores 70.3 and ranks 30th of 176 — just barely inside the “Mostly Free” band, which starts at 70.0."],
  "political-freedom": ["Political freedom",
    "A 0–100 score for free elections, free speech and press, fair courts, and the right to protest.",
    "Built by Freedom House. Japan scores 96 out of 100. Note how differently countries rank on this versus economic freedom — same word, different definitions."],
  "freedom-house": ["Freedom House",
    "An American organisation that scores every country on political rights and civil liberties each year.",
    "Its analysts assign the scores; they are expert judgements, not counts. The United States fell from 84 to 81 in the 2026 edition."],
  heritage: ["Heritage Foundation",
    "An American think tank that publishes the annual Index of Economic Freedom, covering 176 countries.",
    "It weighs tax rates, regulation, government spending, trade openness and property rights."],
  "democracy-index": ["Democracy Index",
    "The Economist Intelligence Unit's yearly 0–10 score for how democratic each country is.",
    "Japan scores 8.85 and is ranked 13th of 167, in the “full democracy” band. Only 26 countries earn that label."],
  "constitutional-monarchy": ["Constitutional monarchy",
    "A country that still has a king, queen or emperor, but where a written constitution gives them no real power.",
    "Japan's 1947 constitution calls the Emperor “the symbol of the State”. He cannot make, block or change a single law."],
  diet: ["The Diet",
    "Japan's parliament. Two chambers: the House of Representatives (465 seats) and the House of Councillors (248).",
    "Voters elect the Diet; the Diet then chooses the Prime Minister. Nobody votes for a Prime Minister directly."],
  "proportional-representation": ["Proportional representation",
    "An election method where each party wins seats in proportion to its share of the vote.",
    "Japan uses it for 176 of the 465 lower-house seats; the other 289 are won district by district."],
  supermajority: ["Supermajority",
    "More than a simple majority — usually two-thirds.",
    "In Japan a two-thirds majority lets the government propose changes to the constitution. The LDP won one in February 2026."],
  ldp: ["LDP",
    "The Liberal Democratic Party, which has governed Japan for almost the whole period since 1955.",
    "Out of power only in 1993–94 and 2009–12. In February 2026 it won at least 316 of 465 seats — the largest single-party result in Japanese history."],

  /* ---- Japan: culture ---- */
  shinto: ["Shinto",
    "Japan's oldest religious tradition, centred on spirits called <em>kami</em> found in nature and in places.",
    "Most Japanese families are on a shrine's rolls without thinking of themselves as religious. Only about 3% of people call themselves Shinto in surveys, because the word suggests belonging to an organised sect."],
  buddhism: ["Buddhism",
    "A tradition that arrived in Japan from China and Korea in the 500s.",
    "In Japan it mostly handles funerals and remembering ancestors, while Shinto handles weddings and New Year — which is why most families are counted in both."],
  syncretism: ["Syncretism",
    "Blending two or more religious traditions in everyday life without seeing any contradiction.",
    "The standard explanation for why Japan's official religion figures add up to about 149%."],
  torii: ["Torii",
    "The gate at the entrance to a Shinto shrine: two posts, two crossbeams, usually painted orange-red.",
    "Walking through it means leaving the ordinary world and entering a sacred one. Japan has thousands; one famous gate stands in the sea and appears to float at high tide."],
  kanji: ["Kanji",
    "Chinese-derived characters, one of the three writing systems Japanese uses at the same time.",
    "Many began as tiny pictures of real things. Japanese children learn 1,026 of them in elementary school and 2,136 by the end of high school."],
  hiragana: ["Hiragana",
    "A set of 46 basic Japanese characters where each one stands for a sound, not a meaning.",
    "Used for Japanese grammar and for words with no kanji. Children learn it first."],
  katakana: ["Katakana",
    "A second set of 46 sound-characters, used mostly for words borrowed from other languages.",
    "“Coffee”, “computer” and foreign names are written in katakana."],
  haiku: ["Haiku",
    "A Japanese poem in three lines of 5, 7 and 5 syllables.",
    "Traditionally it catches one small moment, usually in nature, and names a season."],
  sumo: ["Sumo",
    "Japan's traditional national sport: two wrestlers try to push each other out of a ring.",
    "Six tournaments a year, fifteen days each. The highest rank is <em>yokozuna</em>."],
  shinkansen: ["Shinkansen",
    "Japan's bullet train, the world's first high-speed railway, opened 1 October 1964.",
    "It ran at 130 mph when other trains managed 80. Chief engineer: Hideo Shima."],
  "ukiyo-e": ["Ukiyo-e",
    "Japanese woodblock prints, made in huge numbers in the 1700s and 1800s.",
    "When they reached Paris they changed European painting — Van Gogh copied them by hand. The movement was called <em>Japonisme</em>."],
  emperor: ["Emperor",
    "Japan's head of state, a ceremonial role held by Emperor Naruhito since 2019.",
    "He opens parliament and greets foreign leaders. He has no political power at all."],
  volcano: ["Volcano",
    "An opening in the Earth's crust where hot rock, ash and gas escape.",
    "Mount Fuji is one. It is 3,776 m (12,389 ft) tall and last erupted in 1707."],
};

/* ---------------- engine ---------------- */
(function () {
  if (typeof document === "undefined") return;

  let pop, current = null, hideTimer = null;

  function ensurePop() {
    if (pop) return pop;
    pop = document.createElement("div");
    pop.id = "glpop";
    pop.setAttribute("role", "tooltip");
    document.body.appendChild(pop);
    pop.addEventListener("mouseenter", () => clearTimeout(hideTimer));
    pop.addEventListener("mouseleave", scheduleHide);
    return pop;
  }

  function show(el) {
    const key = el.dataset.t;
    const entry = TERMS[key];
    if (!entry) { console.warn("[glossary] unknown term:", key); return; }
    clearTimeout(hideTimer);
    const p = ensurePop();
    const [title, def, extra] = entry;
    p.innerHTML = '<div class="gt">' + title + '</div><p class="gd">' + def + "</p>" +
                  (extra ? '<span class="gx">' + extra + "</span>" : "");
    p.classList.add("on");
    current = el;
    el.setAttribute("aria-expanded", "true");
    position(el);
  }

  function position(el) {
    const r = el.getBoundingClientRect();
    const p = pop.getBoundingClientRect();
    const pad = 10;
    let left = r.left;
    let top = r.bottom + 9;
    if (left + p.width > window.innerWidth - pad) left = window.innerWidth - p.width - pad;
    if (left < pad) left = pad;
    if (top + p.height > window.innerHeight - pad) {
      const above = r.top - p.height - 9;
      top = above > pad ? above : Math.max(pad, window.innerHeight - p.height - pad);
    }
    pop.style.left = Math.round(left) + "px";
    pop.style.top = Math.round(top) + "px";
  }

  function hide() {
    if (!pop) return;
    pop.classList.remove("on");
    if (current) current.setAttribute("aria-expanded", "false");
    current = null;
  }
  function scheduleHide() { clearTimeout(hideTimer); hideTimer = setTimeout(hide, 130); }

  function wire(el) {
    if (el.dataset.glWired) return;
    el.dataset.glWired = "1";
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-expanded", "false");
    const t = TERMS[el.dataset.t];
    if (t) el.setAttribute("aria-label", el.textContent + ": " + String(t[1]).replace(/<[^>]+>/g, ""));

    el.addEventListener("mouseenter", () => show(el));
    el.addEventListener("mouseleave", scheduleHide);
    el.addEventListener("focus", () => show(el));
    el.addEventListener("blur", hide);
    el.addEventListener("click", e => {
      e.preventDefault();
      if (current === el) hide(); else show(el);
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); current === el ? hide() : show(el); }
    });
  }

  function wireAll() { document.querySelectorAll(".gl[data-t]").forEach(wire); }

  document.addEventListener("keydown", e => { if (e.key === "Escape") hide(); });
  window.addEventListener("scroll", () => { if (current) position(current); }, { passive: true });
  window.addEventListener("resize", hide);
  document.addEventListener("click", e => {
    if (current && !e.target.closest(".gl") && !e.target.closest("#glpop")) hide();
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wireAll);
  else wireAll();

  /* scroll-reveal for .reveal elements */
  function reveals() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    els.forEach(e => io.observe(e));
    setTimeout(() => els.forEach(e => e.classList.add("in")), 2500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveals);
  else reveals();

  window.Wonderschool = { TERMS: TERMS, rewire: wireAll };
})();
