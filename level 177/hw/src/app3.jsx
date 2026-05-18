import React from "react";

export default function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between p-4 bg-white shadow">
                <h1 className="font-bold text-red-600">YouTube</h1>
                <input
                    className="border px-3 py-1 w-1/2"
                    placeholder="Search"
                />
                <span>👤</span>
            </div>

            {/* Videos */}
            <div className="grid grid-cols-3 gap-4 p-4">
                {[1, 2, 3, 4, 5, 6].map((v) => (
                    <div key={v} className="bg-white p-2 shadow">
                        <div className="bg-gray-300 h-40 mb-2"></div>
                        <p>Video Title {v}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}