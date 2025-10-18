import "./App.css"
function App() {
  return (
    <div>
        <header>
          <h1>Kingdom of Lions</h1>
          <p>Discover the power, beauty, and majesty of the king of nature.</p>
          <a href="#about">Learn More</a>
        </header>


        <section id="about">
          <h2>About Lions</h2>
          <p>
            The lion is one of the most magnificent animals on Earth. They live in the savannas of Africa and are known for their strong social bonds, living in groups called prides.
          </p>
        </section>


        <section class="facts">
          <h2>Interesting Facts</h2>
          <div class="fact-grid">
            <div class="card">
              <h3>A Roar Heard 8 km Away</h3>
              <p>A lion’s roar is so powerful that it can be heard up to 8 kilometers away.</p>
            </div>
            <div class="card">
              <h3>The Sleepy King</h3>
              <p>Lions sleep about 16–20 hours a day to preserve energy for hunting.</p>
            </div>
            <div class="card">
              <h3>Strength in Unity</h3>
              <p>Lions hunt in groups, which allows them to capture much larger prey.</p>
            </div>
          </div>
        </section>


        <section class="gallery">
          <h2>Gallery</h2>
          <div class="gallery">
            <img src="https://images.unsplash.com/photo-1563720223185-11002a4d6c23?auto=format&fit=crop&w=800&q=80" alt="lion1" />
            <img src="https://images.unsplash.com/photo-1508675801603-34a53b3c9188?auto=format&fit=crop&w=800&q=80" alt="lion2" />
            <img src="https://images.unsplash.com/photo-1618588507085-1d63d2e8f2c5?auto=format&fit=crop&w=800&q=80" alt="lion3" />
          </div>
        </section>


        <footer>
          © 2025 Kingdom of Lions | Created by GPT-5
        </footer>
    </div>
  )
}