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

  /* ================= lesson 2 — energy ================= */

  /* ---- the basics ---- */
  energy: ["Energy",
    "The capacity to do work: to move something, heat something, or light something.",
    "It is never created or destroyed, only moved and changed. Every “energy source” is really a place energy is already stored, waiting to be let out."],
  "primary-energy": ["Primary energy",
    "Energy in the form nature supplies it — coal in the ground, sunlight on a roof, uranium in a rod — before anything converts it.",
    "Different from electricity, which is what energy gets converted <em>into</em>. Most of the oil Japan imports never becomes electricity at all; it becomes petrol, plastic and jet fuel."],
  electricity: ["Electricity",
    "Energy carried by electrons moving along a wire.",
    "It is a carrier, not a source. Asking “is electricity clean?” is really asking what was burned, split or caught to push those electrons."],
  kwh: ["Kilowatt-hour (kWh)",
    "A thousand watts running for one hour — the unit on an electricity bill.",
    "A microwave on full power for an hour uses about 1 kWh. A Japanese household uses roughly 10 kWh a day."],
  twh: ["Terawatt-hour (TWh)",
    "A billion kilowatt-hours. The unit used for whole countries.",
    "Japan uses about 1,000 TWh of electricity a year — roughly 8.4 MWh per person, more than twice the world average."],
  watt: ["Watt",
    "A rate: how fast energy is being used or made, right now.",
    "Watts are speed; kilowatt-hours are distance travelled. A 100-watt bulb left on for 10 hours has covered 1 kWh."],
  gigawatt: ["Gigawatt (GW)",
    "A billion watts. Used for the size of power stations and national fleets.",
    "One large nuclear reactor is about 1 GW. Japan has about 103 GW of solar panels — but they only make power while the sun is up."],

  /* ---- security and trade ---- */
  "self-sufficiency": ["Energy self-sufficiency",
    "The share of a country's energy that it produces itself instead of buying from abroad.",
    "Japan was at 20.2% in 2010, fell to 6.3% in 2014 after the reactors shut, and was 16.4% in FY2024. Norway is over 700% — it sells the surplus."],
  "energy-security": ["Energy security",
    "Being able to get the energy you need, at a price you can pay, even when something goes wrong.",
    "Not the same as cheap, and not the same as clean. A country can have all three, but almost never at once — which is the whole problem."],
  "3e-s": ["3E + S",
    "Japan's official test for any energy plan: Energy security, Economic efficiency, Environment — plus Safety.",
    "Every real decision trades one against another. The government writes all four down together so nobody can quietly forget one."],
  chokepoint: ["Chokepoint",
    "A narrow stretch of sea that a huge share of world trade has to squeeze through.",
    "Close one and the map changes. Hormuz, Malacca and Suez are the three that matter most to Japan."],
  hormuz: ["Strait of Hormuz",
    "The sea gate between the Persian Gulf and the Indian Ocean, about 21 miles (33 km) wide at its narrowest point.",
    "About <strong>93%</strong> of Japan's crude oil passes through it. No pipeline goes around it to Japan."],
  lng: ["LNG",
    "Liquefied natural gas — gas chilled to −162&nbsp;°C until it shrinks to 1/600th of its volume, so a ship can carry it.",
    "Japan started the trade: the first cargo reached Tokyo Bay in 1969. Japan bought more LNG than any other country until China passed it in 2021."],
  stockpile: ["Strategic stockpile",
    "Oil a country stores on purpose, so that a cut-off does not become a crisis on day one.",
    "Japan holds about <strong>254 days</strong> of demand — roughly 470 million barrels, split between government tanks and oil companies required by law to keep some."],
  sakhalin: ["Sakhalin-2",
    "A Russian oil and gas project on an island just north of Japan — the closest gas supply Japan has.",
    "Japan joined the sanctions on Russia after the 2022 invasion of Ukraine but kept its stakes here: Mitsui holds 12.5%, Mitsubishi 10%. About 9% of Japan's LNG came from Russia in 2024."],
  embargo: ["Embargo",
    "A government ban on trading something with another country.",
    "On 26 July 1941 the United States froze Japan's assets and cut off its oil. About 85% of Japan's oil had been coming from America. Four months later Japan attacked Pearl Harbor."],

  /* ---- making electricity ---- */
  thermal: ["Thermal power",
    "Any power station that makes electricity by heating something to spin a turbine.",
    "Coal, gas, oil and nuclear are all thermal. In Japanese, coal and gas plants are 火力 <em>karyoku</em> — literally “fire power”."],
  turbine: ["Turbine",
    "A wheel with blades that spins when steam, water, gas or wind pushes past it.",
    "Almost all the world's electricity comes from spinning a magnet inside a coil of wire. Solar panels are the great exception — nothing moves."],
  "capacity-factor": ["Capacity factor",
    "How much a power plant actually produced, compared with what it would have made running flat out all year.",
    "Japanese solar runs at roughly 15%; a nuclear reactor, when operating, at over 80%. This is why 103 GW of panels is not 103 GW of power."],
  firm: ["Firm capacity",
    "Power you can call on when you need it, whether or not the sun is out.",
    "The older word is “baseload”, but that meant something slightly different — power that runs all the time. What a grid actually needs is power it can <em>summon</em>."],
  intermittent: ["Intermittent",
    "Producing only when nature cooperates — sun up, wind blowing.",
    "Not the same as unreliable. Solar output is extremely predictable; it is simply not controllable. Those are different problems with different fixes."],
  curtailment: ["Curtailment",
    "Switching off perfectly good solar panels because the grid cannot use what they are making.",
    "It began in Kyushu in October 2018 and has spread to nearly every region of Japan. Throwing away free electricity is the clearest sign a grid needs more storage and better wires."],
  grid: ["Grid",
    "The network of wires, transformers and switches tying every generator to every plug.",
    "Supply and demand must match second by second across the whole thing, or the frequency drifts and equipment trips off."],
  frequency: ["Grid frequency",
    "How many times a second the current changes direction: 50 or 60, depending on the country.",
    "Japan uses <strong>both</strong>. Tokyo runs at 50 Hz because it bought German generators in the 1890s; Osaka at 60 Hz because it bought American ones. The two halves still cannot freely share power."],
  "pumped-hydro": ["Pumped hydro",
    "Two lakes at different heights. Pump water up when power is cheap, let it fall through a turbine when power is dear.",
    "A battery made of geography — and still by far the largest form of energy storage on Earth. Japan has more of it than almost anyone."],
  fit: ["Feed-in tariff (FIT)",
    "A law promising anyone who generates renewable electricity a fixed high price for it, for years.",
    "Japan's began on 1 July 2012 at ¥40 per kWh for commercial solar, several times the market price. Solar capacity exploded — and so did everyone's electricity bill."],

  /* ---- nuclear ---- */
  reactor: ["Nuclear reactor",
    "A machine that splits uranium atoms in a controlled chain reaction and uses the heat to boil water.",
    "Japan had 54 operable reactors before March 2011. After the Fukushima accident every one was shut down; 15 have restarted since."],
  fukushima: ["Fukushima Daiichi",
    "The nuclear plant flooded by the tsunami of 11 March 2011, causing three reactor meltdowns.",
    "One death has been officially attributed to radiation. Around 2,100 more are counted as “disaster-related” — mostly elderly people who died during or after the evacuation itself."],
  nra: ["Nuclear Regulation Authority",
    "Japan's nuclear safety regulator, created in September 2012 after the old one was judged too close to the industry it was watching.",
    "It wrote new safety rules in 2013, and every reactor must pass them to restart. Some have been waiting more than ten years."],
  "kashiwazaki-kariwa": ["Kashiwazaki-Kariwa",
    "The largest nuclear power station ever built, on Japan's west coast — owned by the same company as Fukushima Daiichi.",
    "Unit 6 restarted on 9 February 2026 and returned to commercial operation on 16 April 2026: the first TEPCO reactor to run in over fourteen years."],

  /* ---- hydrogen ---- */
  "fuel-cell": ["Fuel cell",
    "A device that turns hydrogen and oxygen straight into electricity, with water as the only exhaust.",
    "Nothing burns and nothing spins. Because it skips the burning-and-boiling step, a box the size of a fridge can beat a power station's efficiency."],
  "ene-farm": ["ENE-FARM",
    "The Japanese brand name for a home fuel cell that makes a household's electricity and its hot water at the same time.",
    "Over <strong>503,000</strong> were installed in Japan by the end of 2023 — more home fuel cells than the rest of the world put together. The best model reaches 55% electrical efficiency, and 87% once you count the heat."],
  cogeneration: ["Cogeneration",
    "Catching the waste heat from making electricity and using it, instead of sending it up a chimney.",
    "A big power station dumps roughly half its energy as warm water. A machine in your basement can put that heat straight into your bath."],
  electrolysis: ["Electrolysis",
    "Splitting water into hydrogen and oxygen by running electricity through it.",
    "If the electricity came from sun or wind, the hydrogen is “green”. Today almost all of Japan's hydrogen is made from natural gas instead, which releases CO₂."],
  "green-hydrogen": ["Green hydrogen",
    "Hydrogen made by splitting water with renewable electricity, so nothing burns and no CO₂ comes out.",
    "Cleaner, and more expensive. Most hydrogen used in the world today is “grey” — made from natural gas — and that includes most of Japan's."],
  ammonia: ["Ammonia (NH₃)",
    "A compound of nitrogen and hydrogen, far easier to ship and store than hydrogen on its own.",
    "Japan plans to burn it alongside coal to cut emissions. Critics say this mostly keeps coal plants alive — which is rather the point of the argument."],
  fcv: ["Fuel cell vehicle",
    "A car that carries hydrogen and makes its own electricity as it drives.",
    "Toyota's Mirai is the best known. Fewer than 25,000 have ever been sold worldwide, and Japan's count of hydrogen filling stations is now falling, not rising."],

  /* ---- measurement and argument ---- */
  denominator: ["Denominator",
    "The bottom number of a fraction — the thing you are dividing by.",
    "Two honest organisations can report Japan's coal share as 28% and 32% in the same year. Neither is lying. They are dividing by different totals."],
  "carbon-intensity": ["Carbon intensity",
    "How much carbon dioxide is released per unit of electricity, in grams of CO₂ per kWh.",
    "Japan's grid was 477 g/kWh in 2025. France is under 60. Both run mostly on low-carbon plants — different ones."],
  "trade-deficit": ["Trade deficit",
    "Buying more from the rest of the world than you sell to it.",
    "Japan ran trade surpluses for decades. After 2011 it had to buy enormous quantities of gas and coal to replace its reactors, and flipped into deficit."],
  iea: ["IEA",
    "The International Energy Agency, set up in 1974 after the oil crisis so that rich countries could act together in an energy emergency.",
    "Members, Japan included, agree to hold 90 days of oil imports in reserve. Japan holds nearly three times that."],
  isep: ["ISEP",
    "The Institute for Sustainable Energy Policies, a research institute in Tokyo.",
    "It publishes Japan's electricity mix every year, usually before the government does."],
  ember: ["Ember",
    "A British energy think tank publishing electricity data for every country on Earth.",
    "It uses one method everywhere, which makes countries comparable — and makes its numbers differ slightly from each country's own."],
  ieej: ["IEEJ",
    "The Institute of Energy Economics, Japan — a Tokyo research institute publishing Japan's energy outlook twice a year.",
    "It reports by Japanese fiscal year, April to March. That alone is enough to make its numbers differ from calendar-year sources."],
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
