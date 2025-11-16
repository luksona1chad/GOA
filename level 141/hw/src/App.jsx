function App() {

  return (
    <>
      <div class="max-w-7xl mx-auto px-6 py-10">
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="flex gap-6 lg:w-1/2">
            <div class="flex flex-col gap-4 w-28">
              <button class="thumb focus-ring" aria-label="Front view" data-src="https://via.placeholder.com/520x560/71805a/ffffff?text=Front">
                <img src="https://via.placeholder.com/80x100/71805a/ffffff?text=Front" alt="front" class="w-16 object-contain" />
              </button>
              <button class="thumb focus-ring" aria-label="Back view" data-src="https://via.placeholder.com/520x560/71805a/ffffff?text=Back">
                <img src="https://via.placeholder.com/80x100/71805a/ffffff?text=Back" alt="back" class="w-16 object-contain" />
              </button>
              <button class="thumb focus-ring" aria-label="Model view" data-src="https://via.placeholder.com/520x560/71805a/ffffff?text=Model">
                <img src="/" alt="model" class="w-16 object-contain" />
              </button>
            </div>

            <div class="flex-1 img-frame">
              <img id="mainImage" src="/assets/images/{EB89F09B-5F30-4E64-B331-911A4B3E4AE5}.png" alt="One Life T-shirt" class="max-w-full rounded-lg object-contain" />
            </div>
          </div>
          <div class="lg:w-1/2 flex flex-col justify-start">
            <h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex items-center text-yellow-400">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.547 2.614c-.784.57-1.838-.198-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.48 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" /></svg>
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.547 2.614c-.784.57-1.838-.198-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.48 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" /></svg>
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.547 2.614c-.784.57-1.838-.198-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.48 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" /></svg>
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.547 2.614c-.784.57-1.838-.198-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.48 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" /></svg>
                <svg class="w-5 h-5 text-yellow-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.547 2.614c-.784.57-1.838-.198-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.48 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" /></svg>
              </div>
              <span class="text-gray-600 text-sm">4.5 / 5</span>
            </div>
            <div class="flex items-center gap-3 mb-5">
              <span class="text-3xl font-bold">$260</span>
              <span class="text-gray-400 line-through">$300</span>
              <span class="text-red-600 bg-red-100 text-sm font-semibold px-2 py-1 rounded-full">-40%</span>
            </div>

            <p class="text-gray-600 mb-6">
              ეს გრაფიკული მაისური იდეალურია ნებისმიერ შემთხვევაზე. დამზადებულია რბილი და სუნთქვადი მატერიალიდან, კომფორტისა და სტილისათვის.
            </p>
            <div class="mb-6">
              <p class="text-gray-800 font-medium mb-3">Select Colors</p>
              <div class="flex items-center gap-4">
                <button class="w-9 h-9 rounded-full border-2 focus-ring" aria-pressed="true" data-color="olive" title="Olive" style="background:#6b6a3f; border-color:#111;" ></button>
                <button class="w-9 h-9 rounded-full border-2 focus-ring" aria-pressed="false" data-color="teal" title="Teal" style="background:#2f6b61;"></button>
                <button class="w-9 h-9 rounded-full border-2 focus-ring" aria-pressed="false" data-color="purple" title="Purple" style="background:#3b2f57;"></button>
              </div>
            </div>
            <div class="mb-6">
              <p class="text-gray-800 font-medium mb-3">Choose Size</p>
              <div class="flex items-center gap-3 flex-wrap">
                <button class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 focus-ring" data-size="Small">Small</button>
                <button class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 focus-ring" data-size="Medium">Medium</button>
                <button class="px-4 py-2 rounded-full text-sm bg-black text-white focus-ring" data-size="Large" aria-pressed="true">Large</button>
                <button class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 focus-ring" data-size="X-Large">X-Large</button>
              </div>
            </div>
            <div class="flex items-center gap-4 mb-8">
              <div class="flex items-center border rounded-full px-3 py-1">
                <button id="dec" class="p-2 focus-ring" aria-label="Decrease quantity">−</button>
                <span id="qty" class="px-4 text-sm">1</span>
                <button id="inc" class="p-2 focus-ring" aria-label="Increase quantity">+</button>
              </div>

              <button id="addToCart" class="ml-2 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition focus-ring" >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
                Add to Cart
              </button>
            </div>

            <hr class="border-gray-200" />
            <div class="mt-6 text-sm text-gray-600">
              <p><strong>Material:</strong> 100% cotton</p>
              <p class="mt-1"><strong>Shipping:</strong> Delivery 3-5 business days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App