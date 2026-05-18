import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-red-500">AliExpress</h1>
      <div className="flex w-1/2">
        <input
          className="flex-1 border p-2 rounded-l-lg"
          placeholder="Search products..."
        />
        <button className="bg-green-400 px-4 rounded-r-lg">Find</button>
      </div>
      <div className="flex gap-4">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-3 hover:shadow-lg transition">
      <img src={product.img} alt="" className="w-full h-40 object-cover" />
      <h2 className="text-sm mt-2">{product.title}</h2>
      <p className="text-red-500 font-bold">{product.price}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Sale</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
