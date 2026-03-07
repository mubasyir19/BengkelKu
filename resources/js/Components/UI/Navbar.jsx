export default function Navbar() {
    return (
        <nav className="sticky w-full shadow-xl">
            <div className="py-4 md:px-6 lg:px-10 xl:px-0 container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" className="size-8" />
                    <p className="text-lg font-semibold text-background-dark">
                        BengkelKu
                    </p>
                </div>
                <ul className="flex items-center gap-4">
                    <a href="/">
                        <li className={`text-primary`}>Beranda</li>
                    </a>
                    <a href="/booking">
                        <li className={`text-primary`}>Booking</li>
                    </a>
                    <a href="/check-reservation">
                        <li className={`text-primary`}>Cek Reservasi</li>
                    </a>
                    <a href="/contact">
                        <li className={`text-primary`}>Kontak</li>
                    </a>
                </ul>
                <div className="">
                    <a href="/login">
                        <button className="rounded-lg text-white text-center px-4 py-2 text-sm bg-primary">
                            Login Admin
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
