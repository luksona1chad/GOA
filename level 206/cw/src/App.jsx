import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcf8f6] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Desserts</h1>

        <div className="grid gap-8">

          <div className="grid gap-8">

            <div>
              <div className="relative">
                <img
                  src=""
                  alt=""
                  className="w-full h-60 object-cover rounded-xl"
                />

                <button className="absolute bg-white border rounded-full px-5 py-2 shadow">
                  Add to Cart
                </button>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 text-sm">Waffle</p>
                <h3 className="font-semibold">Waffle with Berries</h3>
                <p className="text-orange-600 font-bold">$6.50</p>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src=""
                  alt=""
                  className="w-full h-60 object-cover rounded-xl"
                />

                <button className="absolute bg-white border rounded-full px-5 py-2 shadow">
                  Add to Cart
                </button>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 text-sm">Crème Brûlée</p>
                <h3 className="font-semibold">
                  Vanilla Bean Crème Brûlée
                </h3>
                <p className="text-orange-600 font-bold">$7.00</p>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src=""
                  alt=""
                  className="w-full h-60 object-cover rounded-xl"
                />

                <button className="absolute bg-white border rounded-full px-5 py-2 shadow">
                  Add to Cart
                </button>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 text-sm">Macaron</p>
                <h3 className="font-semibold">Macaron Mix of Five</h3>
                <p className="text-orange-600 font-bold">$8.00</p>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-orange-600 font-bold text-xl mb-10">
              Your Cart (0)
            </h2>

            <div className="flex flex-col items-center">
              <img
                src=""
                alt=""
                className="w-32"
              />

              <p className="text-gray-400 text-sm mt-4">
                Your added items will appear here
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
