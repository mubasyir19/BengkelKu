import { router } from "@inertiajs/react";
import LandingPageLayout from "../Components/Layout/LandingPageLayout";
import {
    Calendar,
    CalendarSync,
    CarFront,
    CircleCheck,
    CircleX,
    MapPin,
    Phone,
    Search,
    Ticket,
} from "lucide-react";
import { useState } from "react";

function CheckReservation() {
    const [formData, setformData] = useState({
        phoneNumber: "",
        code: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        router.get("/", formData);
    };

    return (
        <div className="bg-background-light">
            <div className="container mx-auto pb-20 px-4 md:px-6 lg:px-10 xl:px-0">
                <div className="pt-24 flex justify-center pb-12">
                    <div className="">
                        <h1 className="text-center text-background-dark font-bold text-xl lg:text-2xl xl:text-3xl">
                            Cek Status Reservasi
                        </h1>
                        <p className="mt-3 w-3/4 mx-auto text-sm md:text-base text-center text-gray-400">
                            Masukkan detail reservasi Anda untuk memantau status
                            antrean secara real-time.
                        </p>
                    </div>
                </div>
                <div className="w-fulll lg:w-1/2 mx-auto">
                    <div className="border border-border-light rounded-xl p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-primary text-sm font-semibold"
                                >
                                    Nomor Telepon
                                </label>
                                <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus-within:border-primary transition-all">
                                    <Phone className="w-5 h-5 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Contoh: 0812345..."
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-gray-700 border border-none focus:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-primary text-sm font-semibold"
                                >
                                    ID Booking
                                </label>
                                <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus-within:border-primary transition-all">
                                    <Ticket className="w-5 h-5 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Contoh: AD-12345"
                                        value={formData.code}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-gray-700 border border-none focus:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 py-3 w-full bg-primary rounded-lg text-white flex items-center justify-center gap-2">
                            <Search className="size-5 md:size-6 text-white" />
                            <span className="text-white font-semibold text-sm md:text-base">
                                Cek Status
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mt-8 w-fulll lg:w-1/2 mx-auto">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-background-dark font-semibold">
                            Hasil Pencarian
                        </p>
                        <p className="text-xs text-gray-600">
                            Ditemukan 1 Reservasi
                        </p>
                    </div>
                    <div className="mt-4 border border-border-light rounded-xl bg-white">
                        <div className="p-6 border-b border-border-light flex items-start justify-between">
                            <div className="">
                                <p className="text-sm text-primary font-bold">
                                    ID: AD-77291
                                </p>
                                <p className="text-background-dark font-bold text-xl">
                                    Servis Rutin
                                </p>
                            </div>
                            <div className="">
                                <span className="flex items-center gap-1 bg-green-500/10 rounded-full py-1.5 px-3">
                                    <CircleCheck className="size-4 text-green-700" />
                                    <p className="text-xs text-green-700 font-semibold">
                                        Dikonfirmasi
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="p-6 border-b border-border-light space-y-4">
                            <div className="flex items-stretch gap-4">
                                <div className="size-10 rounded-lg flex items-center justify-center bg-[#F1F5F9]">
                                    <Calendar className="size-4" />
                                </div>
                                <div className="">
                                    <p className="text-xs text-[#64748B]">
                                        Jadwal Kedatangan
                                    </p>
                                    <p className="text-background-dark font-bold text-base">
                                        Kamis, 5 Oktober 2023 | 09:00 WIB
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-stretch gap-4">
                                <div className="size-10 rounded-lg flex items-center justify-center bg-[#F1F5F9]">
                                    <CarFront className="size-4" />
                                </div>
                                <div className="">
                                    <p className="text-xs text-[#64748B]">
                                        Nomor Plat Kendaraan
                                    </p>
                                    <p className="text-background-dark font-bold text-base">
                                        B 1234 XYZ
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-stretch gap-4">
                                <div className="size-10 rounded-lg flex items-center justify-center bg-[#F1F5F9]">
                                    <MapPin className="size-4" />
                                </div>
                                <div className="">
                                    <p className="text-xs text-[#64748B]">
                                        Lokasi Bengkel
                                    </p>
                                    <p className="text-background-dark font-bold text-base">
                                        Bengkel Digital - Cabang Jakarta Selatan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-border-light grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border border-gray-300 rounded-lg py-3 w-full flex items-center justify-center gap-2 cursor-pointer">
                                <CalendarSync className="size-5 text-background-dark" />
                                <p className="text-background-dark text-sm font-semibold">
                                    Ubah Jadwal
                                </p>
                            </div>
                            <div className="py-3 w-full flex items-center justify-center gap-2 cursor-pointer">
                                <CircleX className="size-5 text-red-500" />
                                <p className="text-red-500 text-sm font-semibold">
                                    Batalkan Reservasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-8 flex items-center justify-center">
                <div className="">
                    <ul className="flex flex-wrap items-center gap-2 md:gap-4 xl:gap-6">
                        <a href="#">
                            <li className="text-secondary text-sm">
                                Syarat & Ketentuan
                            </li>
                        </a>
                        <a href="#">
                            <li className="text-secondary text-sm">
                                Kebijakan Privasi
                            </li>
                        </a>
                        <a href="#">
                            <li className="text-secondary text-sm">
                                Hubungi Kami
                            </li>
                        </a>
                    </ul>
                    <div className="mt-4">
                        <p className="text-gray-400 text-sm text-center">
                            &copy; 2023 BengkelKu. Hak Cipta Dilindungi
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

CheckReservation.layout = (page) => <LandingPageLayout children={page} />;
export default CheckReservation;
