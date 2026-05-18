import React from "react";

export default function App() {
    const products = [
        {
            id: 1,
            name: "iPhone 17",
            price: 2599,
            oldPrice: 2699,
            img: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Pixel 10 Pro",
            price: 2599,
            oldPrice: 2899,
            img: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Motorola",
            price: 899,
            oldPrice: 999,
            img: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen pb-20">
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 bg-white shadow">
                <div className="text-2xl">☰</div>
                <h1 className="text-orange-500 font-bold">ZOOMMER</h1>
                <div className="flex gap-3 text-xl">
                    <span>🔍</span>
                    <span>🛒</span>
                </div>
            </div>

            {/* BANNER */}
            <div className="p-4">
                <div className="bg-orange-400 rounded-2xl p-6 text-white text-center">
                    <h2 className="text-xl font-bold">iPhone 17 Pro</h2>
                    <p className="mt-2 text-lg">3799₾</p>
                </div>
            </div>

            {/* TITLE */}
            <h2 className="px-4 font-semibold mb-2">შეთავაზებები</h2>

            {/* PRODUCTS */}
            <div className="grid grid-cols-2 gap-4 px-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-3 rounded-xl shadow"
                    >
                        <img
                            src={item.img}
                            alt=""
                            className="mx-auto mb-2"
                        />

                        <p className="text-sm font-medium">{item.name}</p>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-orange-500 font-bold">
                                {item.price} ₾
                            </span>
                            <span className="line-through text-gray-400 text-sm">
                                {item.oldPrice}
                            </span>
                        </div>

                        <button className="mt-3 w-full bg-orange-400 text-white py-2 rounded-lg">
                            დამატება
                        </button>
                    </div>
                ))}
            </div>

            {/* BOTTOM NAV */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around py-3">
                <span>🏠</span>
                <span>📦</span>
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full">
                    %
                </span>
                <span>❤️</span>
                <span>👤</span>
            </div>
        </div>
    );
}