import Hero from "./components/Hero";

function App() {
  const animals = ["karliinak", "goddoggoddoggoddoggoddoooog", "bondowiiiiiiich", "karunaninatika"];

  return (
    <div>
      <Hero />

      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
