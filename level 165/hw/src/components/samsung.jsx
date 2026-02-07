export default function Samsung() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-black text-white p-6 text-2xl">Samsung</header>
            <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">Galaxy S</div>
                <div className="bg-white p-4 rounded shadow">Galaxy A</div>
                <div className="bg-white p-4 rounded shadow">Galaxy Fold</div>
            </main>
        </div>
    );
}