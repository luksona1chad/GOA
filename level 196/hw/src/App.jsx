import React from "react";

export default function App() {
  const posts = [
    {
      id: 1,
      user: "Giorgi",
      text: "დღეს კარგი ამინდია ☀️",
    },
    {
      id: 2,
      user: "Nino",
      text: "React სწავლა დავიწყე 🔥",
    },
    {
      id: 3,
      user: "Luka",
      text: "Tailwind მაგარია 😎",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-500">MySocial</h1>

        <input
          className="bg-slate-100 px-3 py-2 rounded-lg w-1/3"
          placeholder="მოძებნე..."
        />

        <div className="flex gap-2">
          <div className="w-9 h-9 bg-slate-300 rounded-full"></div>
          <div className="w-9 h-9 bg-slate-300 rounded-full"></div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex gap-4 p-4">
        {/* LEFT */}
        <div className="hidden md:block w-1/4">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold mb-3">ნავიგაცია</p>
            <div className="space-y-2 text-sm">
              <div>🏠 მთავარი</div>
              <div>👥 მეგობრები</div>
              <div>🎬 ვიდეოები</div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 max-w-xl mx-auto">
          {/* CREATE */}
          <div className="bg-white p-3 rounded-xl shadow mb-4">
            <input
              placeholder="რას ფიქრობ?"
              className="w-full bg-slate-100 p-2 rounded-lg"
            />
          </div>

          {/* POSTS */}
          {posts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                <span className="font-medium">{item.user}</span>
              </div>

              <p className="mb-3">{item.text}</p>

              <div className="flex justify-between text-sm text-gray-500">
                <button>👍 მოწონება</button>
                <button>💬 კომენტარი</button>
                <button>↗ გაზიარება</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block w-1/4">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold mb-3">ონლაინ</p>
            <div className="space-y-2 text-sm">
              <div>🟢 Ana</div>
              <div>🟢 Saba</div>
              <div>⚪ Mari</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}