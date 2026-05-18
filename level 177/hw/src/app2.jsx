import React from "react";

export default function App() {
    return (
        <div className="bg-white text-black min-h-screen text-center">
            <div className="p-4 flex justify-center gap-6 text-sm">
                <span>Store</span>
                <span>Mac</span>
                <span>iPhone</span>
            </div>

            <div className="mt-20">
                <h1 className="text-5xl font-semibold">iPhone 15 Pro</h1>
                <p className="mt-4 text-gray-500">Titanium. So strong.</p>

                <div className="mt-6 space-x-4">
                    <button className="bg-blue-500 text-white px-5 py-2 rounded">
                        Buy
                    </button>
                    <button className="border px-5 py-2 rounded">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
}