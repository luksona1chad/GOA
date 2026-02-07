export default function Apple() {
    return (
        <div className="min-h-screen bg-white">
            <header className="border-b p-6 text-2xl font-semibold">Apple</header>
            <main className="p-6 flex gap-4">
                <div className="border p-4 rounded">iPhone</div>
                <div className="border p-4 rounded">MacBook</div>
                <div className="border p-4 rounded">iPad</div>
            </main>
        </div>
    );
}