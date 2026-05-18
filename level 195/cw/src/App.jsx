import { useGetApi } from "./weather-api";

function App() {
  const { data, loading, error } = useGetApi("batumi");

  const weatherIcons = {
    Clouds: "☁️",
    Sunny: "☀️",
    Rain: "🌧️",
    Snow: "❄️",
    Clear: "🌤️",
  };

  const weatherIcon = weatherIcons[data?.weather?.[0]?.main];

  return error ? (
    // <NotFound />
    <p>city not found</p>
  ) : (
    <div className="bg-teal-500/20 h-screen">
      {!data || loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto flex items-center justify-center flex-col h-screen">
          <div>
            <h2>
              <span className="font-bold">name:</span> {data.name}
            </h2>
            <p title={data.weather[0].description}>
              <span className="font-bold">weather:</span>
              {weatherIcon && (
                <span className="font-bold text-[50px]">
                  {weatherIcon}
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;