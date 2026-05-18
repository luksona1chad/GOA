function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/contact" element={<div>contact dahsboard</div>} >
                <Route index element={<div>contact</div>} />
                <Route path="lion" element={<div>lion</div>} />
                <Route path="luka" element={<div>luka</div>} />
                <Route path="andria" element={<div>andria</div>} />
            </Route>
            <Route path="*" element={<div className="flex justify-center items-center h-screen font-bold text-5xl"></div>} />
        </Routes>
    )
}