function Header() {
    const menu = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' },
        { id: 4, name: 'Blog' },
    ]
    return (
        <div className="flex items-center w-screen justify-between border-b-[1px]">
            <div className="w-[90px] h-[90pxß
            bg-black">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt="Google Logo"
                    className="p-7" />
            </div>
            <div className="hidden md:flex gap-14
            hover:underline font-medium">
                {menu.map((item) => (
                    <div key={item.id} className="cursor-pointer">
                        <a href="#" className="text-black">{item.name}</a>
                    </div>
                ))}
            </div>
            <div className="w-[90px] h-[90px]
            bg-red-500 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
        </div>
    );
}

export default Header;