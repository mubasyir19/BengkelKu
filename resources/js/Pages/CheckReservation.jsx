import { router, usePage } from "@inertiajs/react"; // Tambahkan usePage
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
import StatusBadge from "@/Components/Molecules/StatusBadge";

function CheckReservation({ reservation, filters }) {
    const [formData, setformData] = useState({
        phoneNumber: filters?.phoneNumber || "",
        vehiclePlate: filters?.vehicle_plate || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        router.get(
            route("reservation.check"),
            {
                phoneNumber: formData.phoneNumber,
                vehicle_plate: formData.vehiclePlate,
            },
            {
                preserveState: true,
            },
        );
    };

    return (
        <div className="bg-background-light min-h-screen">
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
                                <label className="text-primary text-sm font-semibold">
                                    Nomor Telepon
                                </label>
                                <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus-within:border-primary transition-all">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                    <input
                                        name="phoneNumber" // Tambahkan atribut name
                                        type="text"
                                        placeholder="Contoh: 0812345..."
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-gray-700 border-none focus:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label className="text-primary text-sm font-semibold">
                                    Plat Nomor Kendaraan
                                </label>
                                <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus-within:border-primary transition-all">
                                    <Ticket className="w-5 h-5 text-gray-400" />
                                    <input
                                        name="vehiclePlate" // Tambahkan atribut name
                                        type="text"
                                        placeholder="Contoh: B 1234 ABC"
                                        value={formData.vehiclePlate}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-gray-700 border-none focus:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="mt-6 py-3 w-full bg-primary rounded-lg text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <Search className="size-5 md:size-6 text-white" />
                            <span className="text-white font-semibold text-sm md:text-base">
                                Cek Status
                            </span>
                        </button>
                    </div>
                </div>

                {/* Bagian Hasil Pencarian Dinamis */}
                {reservation ? (
                    <div className="mt-8 w-fulll lg:w-1/2 mx-auto">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-background-dark font-semibold">
                                Hasil Pencarian
                            </p>
                            <p className="text-xs text-gray-600">
                                Ditemukan 1 Reservasi
                            </p>
                        </div>
                        <div className="mt-4 border border-border-light rounded-xl bg-white shadow-sm">
                            <div className="p-6 border-b border-border-light flex items-start justify-between">
                                <div className="">
                                    <p className="text-sm text-primary font-bold">
                                        ID:{" "}
                                        {reservation.id
                                            .substring(0, 8)
                                            .toUpperCase()}
                                    </p>
                                    <p className="text-background-dark font-bold text-xl">
                                        {reservation.service?.name ||
                                            "Servis Kendaraan"}
                                    </p>
                                </div>
                                <div className="">
                                    {/* Menggunakan component StatusBadge yang dinamis */}
                                    <StatusBadge status={reservation.status} />
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
                                            {new Date(
                                                reservation.reservation_date,
                                            ).toLocaleDateString("id-ID", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}{" "}
                                            |{" "}
                                            {reservation.reservation_date.split(
                                                " ",
                                            )[1] || ""}{" "}
                                            WIB
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
                                        <p className="text-background-dark font-bold text-base uppercase">
                                            {reservation.vehicle_plate}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-stretch gap-4">
                                    <div className="size-10 rounded-lg flex items-center justify-center bg-[#F1F5F9]">
                                        <MapPin className="size-4" />
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-[#64748B]">
                                            Nama Pelanggan
                                        </p>
                                        <p className="text-background-dark font-bold text-base">
                                            {reservation.customer_name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-border-light grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border border-gray-300 rounded-lg py-3 w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <CalendarSync className="size-5 text-background-dark" />
                                    <p className="text-background-dark text-sm font-semibold">
                                        Hubungi Bengkel
                                    </p>
                                </div>
                                <div className="py-3 w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-red-50 rounded-lg transition-colors">
                                    <CircleX className="size-5 text-red-500" />
                                    <p className="text-red-500 text-sm font-semibold">
                                        Batalkan Reservasi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : filters?.phoneNumber ? (
                    // Tampilan jika pencarian dilakukan tapi tidak ditemukan
                    <div className="mt-8 w-fulll lg:w-1/2 mx-auto text-center p-10 bg-white border border-dashed border-gray-300 rounded-xl">
                        <p className="text-gray-500">
                            Data reservasi tidak ditemukan. Silakan periksa
                            kembali nomor telepon dan plat kendaraan Anda.
                        </p>
                    </div>
                ) : null}
            </div>
            {/* Footer tetap sama */}
        </div>
    );
}

CheckReservation.layout = (page) => <LandingPageLayout children={page} />;
export default CheckReservation;
