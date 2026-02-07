export default function YouTube() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-red-600 text-white p-4 text-xl">YouTube</header>
            <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded">Video 1</div>
                <div className="bg-white p-3 rounded">Video 2</div>
                <div className="bg-white p-3 rounded">Video 3</div>
            </main>
        </div>
    );
}