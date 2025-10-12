import React, { useState } from "react";

// React single-file learning site
// - Default export is the main App component
// - Uses Tailwind CSS utility classes for styling
// - Contains five sections (as requested): Dinosaurs, Nugzar, Napoleon (cake), Luiza, Monkeys
// - Includes small interactive widgets (accordion, quiz) to make it learning-friendly

export default function LearningSite() {
  const [activeSection, setActiveSection] = useState("dinosaurs");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header onNavigate={setActiveSection} active={activeSection} />
      <main className="max-w-5xl mx-auto p-6">
        <SectionSwitcher active={activeSection} />
      </main>
      <Footer />
    </div>
  );
}

function Header({ onNavigate, active }) {
  const items = [
    { id: "dinosaurs", label: "დინოზავრები" },
    { id: "nugzar", label: "ნუგზარი" },
    { id: "napoleon", label: "ნაპოლეონი (ნამცხვარი)" },
    { id: "luiza", label: "ლუიზა" },
    { id: "monkeys", label: "მაიმუნები" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-semibold">React ללearning — ნასწავლი მასალა</h1>
        <nav className="flex gap-2">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => onNavigate(it.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition 
                ${active === it.id ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {it.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionSwitcher({ active }) {
  switch (active) {
    case "dinosaurs":
      return <Dinosaurs />;
    case "nugzar":
      return <Nugzar />;
    case "napoleon":
      return <NapoleonCake />;
    case "luiza":
      return <Luiza />;
    case "monkeys":
      return <Monkeys />;
    default:
      return <Dinosaurs />;
  }
}

// ---------- Section: Dinosaurs ----------
function Dinosaurs() {
  const dinos = [
    { name: "Tyrannosaurus rex", period: "Late Cretaceous", fact: "დიდი ზომის ხორცისმჭამელი" },
    { name: "Triceratops", period: "Late Cretaceous", fact: "სამთავიანი სახე, ნალექები" },
    { name: "Brachiosaurus", period: "Late Jurassic", fact: "უზარმაზარი צוარვალი" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">დინოზავრები — მოკლე შესავალი</h2>
      <p className="mb-4">დინოზავრები იყვნენ ხმელეთის ცხოველები, რომლებიც უმეტესად მორიგეობდნენ მილიონობით წლის წინ. აქ არის სწრაფი მიმოხილვა.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {dinos.map((d) => (
          <article key={d.name} className="p-4 rounded-2xl shadow-sm bg-white">
            <h3 className="font-semibold">{d.name}</h3>
            <p className="text-sm text-gray-600">პერიოდი: {d.period}</p>
            <p className="mt-2">ფაქტი: {d.fact}</p>
          </article>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">წვრილი ექსპერიმენტი: დაბალი კითხვის ტესტი</h3>
      <MiniQuiz
        question="რომელი დინოზავრი იყო ხორცისმჭამელი?"
        options={["Triceratops", "Tyrannosaurus rex", "Brachiosaurus"]}
        correctIndex={1}
      />

      <Details title="სწავლა — სად გავაგრძელო?">
        <p>სარეკომენდაციო წიგნები: "The Rise and Fall of the Dinosaurs" და ციფრული წყაროები — მუზეუმების საიტები.</p>
      </Details>
    </section>
  );
}

// ---------- Section: Nugzar (ნუგზარი) ----------
function Nugzar() {
  // Since "ნუგზარი" may be a person name, we provide neutral, educational content structure.
  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">ნუგზარი — საინფორმაციო გვერდი</h2>
      <p className="mb-4">ეს არის ნიმუში როგორ ააწყოთ საინფორმაციო ბიოგრაფიული გვერდი:</p>

      <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
        <h3 className="text-xl font-semibold">სასწავლო ელემენტები</h3>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          <li>ბიოგრაფია — მოკლე და არასტატუსური აღწერა</li>
          <li>საქმიანობა — რისკაზე დამოკიდებული შინაარსი</li>
          <li>სურათები და მედია — გამოიყენეთ საჯარო ლიცენზიის ფაილები</li>
          <li>რეფერენციები და წყაროები — ციტირება სწორი</li>
        </ul>
      </div>

      <Details title="მაგალითი — ინფობლოკი">
        <p>
          სახელი: ნუგზარი ნუმერი
          <br />
          პროფესია: მაგალითი — შემოქმედებითი პროფესიები
        </p>
      </Details>
    </section>
  );
}

// ---------- Section: Napoleon (Cake) ----------
function NapoleonCake() {
  const recipe = {
    name: "ნაპოლეონი (Napoleon cake)",
    servings: 8,
    time: "3 საათი (ჩვეულებრივ მოიცავს ცომის გაგრილებას და დამუშავებას)",
    ingredients: [
      "ფსოჩკა ფუნთუშის ფენა ან სოუსისთვის მზა ფენები",
      "მზა კრემი (custard) ან რძის კრემი",
      "შაქარი და ვანილი",
      "ფხვნილი ან კვერცხები კრემისთვის",
    ],
    steps: [
      "მზა ფენების წინსვლა: გახეხეთ ან გააცხელეთ ფენი, ვიდრე არ გახდება ხვეული.",
      "კრემის მომზადება: გააადუღეთ რძე, შაქარი, კვერცხის ნაზავი და ცივი ჭარბი კარაქი როდესაც გასაგრილდება.",
      "დალაგება: ფენების და კრემის რიგრიგობით დაასრულეთ, ზედა ნაწილი მოაყარეთ მტვრად ბლინგით.",
    ],
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">ნაპოლეონი — მხოლოდ ნამცხვარი</h2>
      <p className="mb-4">ეს გვერდი არის პატარა რეცეპტი და მიმოხილვა Napoléon cake-ის შესახებ.</p>

      <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
        <h3 className="text-xl font-semibold">რეცეპტი: {recipe.name}</h3>
        <p className="text-sm text-gray-600">მიღებების რაოდენობა: {recipe.servings} • დრო: {recipe.time}</p>

        <h4 className="mt-3 font-semibold">ინგრედიენტები</h4>
        <ul className="list-disc ml-5">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h4 className="mt-3 font-semibold">მომზადების ნაბიჯები</h4>
        <ol className="list-decimal ml-5">
          {recipe.steps.map((s, i) => (
            <li key={i} className="mb-2">{s}</li>
          ))}
        </ol>
      </div>

      <Details title="პასუხისმგებლობა">გამოგადგებათ კულინარული წიგნები და ვიდეო გაკვეთილები კონკრეტული ტექნიკისთვის.</Details>
    </section>
  );
}

// ---------- Section: Luiza ----------
function Luiza() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">ლუიზა — მცირე პორტფოლიო</h2>
      <p className="mb-4">ეს არის მაგალითი პორტფოლიოს/ინფო გვერდის ორგანიზაციისთვის — გამოსადეგია სტუდენტებისთვის ან პრეზენტაციისთვის.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold">შეცდომებისგან სწავლის იდეები</h3>
          <p className="text-sm text-gray-700 mt-2">იხილეთ პორტფოლიო, პროექტები და კონტაქტი — მარტივი ბლოკები მოსახერხებელია.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold">ფოტო და ტექსტი</h3>
          <p className="text-sm text-gray-700 mt-2">გამოიყენეთ საჯარო სურათები და მცირე ტექსტური მიმოხილვები.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Monkeys ----------
function Monkeys() {
  const species = [
    { name: "Capuchin", fact: "ჭკვიანი და სოციალური" },
    { name: "Baboon", fact: "ძალიან მნიშვნელოვანი ჯგუფური სტრუქტურა" },
    { name: "Howler", fact: "ძლიერი ხმის გამოცემა" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">მაიმუნები — ძირითადი ცნობები</h2>
      <p className="mb-4">მაიმუნები — საინტერესო ცხოველები, მრავალფეროვანი სახეობებით.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {species.map((s) => (
          <div key={s.name} className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="font-semibold">{s.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{s.fact}</p>
          </div>
        ))}
      </div>

      <Details title="სხვა რესურსები">
        <p>ვებ-კამერა, ბუნების დოკუმენტური ფილმები და მეცნიერული სტატიები — კარგი საწყისი წერტილებია.</p>
      </Details>
    </section>
  );
}

// ---------- Small reusable components ----------
function Details({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-sm font-medium underline-offset-2 hover:underline"
      >
        {open ? "დახურვა — " : "გახსნა — "}
        {title}
      </button>

      {open && <div className="mt-2 p-3 bg-gray-50 rounded-md">{children}</div>}
    </div>
  );
}

function MiniQuiz({ question, options, correctIndex }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const submit = () => {
    setResult(selected === correctIndex);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm w-full md:w-2/3">
      <p className="font-semibold">{question}</p>
      <div className="mt-2 flex flex-col gap-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2">
            <input
              type="radio"
              name="quiz"
              checked={selected === i}
              onChange={() => setSelected(i)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={submit} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">
          გამოკითხვის დასრულება
        </button>
        {result !== null && (
          <div className={`px-3 py-1 rounded text-sm ${result ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {result ? "სწორია!" : "არასწორია"}
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="max-w-5xl mx-auto p-6 text-sm text-gray-600">
        © {new Date().getFullYear()} React Learning Site — ნიმუში სასწავლო გვერდისთვის. მომზადებულია მაგალითისთვის.
      </div>
    </footer>
  );
}
