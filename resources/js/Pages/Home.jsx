import React from "react";
import LandingPageLayout from "../Components/Layout/LandingPageLayout";
import { Head, Link } from "@inertiajs/react";
import { CalendarDays, ChartNoAxesCombined, ScrollText } from "lucide-react";

function Home() {
    return (
        <div className="">
            <Head title="Beranda" />
            <section className="py-24 bg-background-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="">
                        <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 w-fit rounded-full">
                            MASA DEPAN SERVIS KENDARAAN
                        </span>
                        <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-primary">
                            <span className="text-background-dark">
                                Solusi Antrean Digital untuk
                            </span>{" "}
                            Bengkel Anda
                        </h1>
                        <p className="mt-4 text-base text-gray-400">
                            Booking servis kendaraan jadi lebih mudah, cepat,
                            dan transparan. Pantau antrean secara real-time dari
                            mana saja tanpa perlu menuggu lama di bengkel.
                        </p>
                        <div className="mt-8 flex items-stretch gap-4">
                            <Link href={`#`} className="cursor-pointer">
                                <button className="px-6 py-3 bg-primary text-white rounded-md font-semibold">
                                    Mulai Reservasi
                                </button>
                            </Link>
                            <Link href={`#`} className="cursor-pointer">
                                <button className="px-6 py-3 bg-white text-back rounded-md border border-gray-200 font-semibold">
                                    Pelajari Lebih Lanjut
                                </button>
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center gap-6">
                            <div className="flex items-stretch">
                                <div className="size-10 rounded-full p-0.5 bg-white">
                                    <div className="bg-gray-500 h-full w-full rounded-full"></div>
                                </div>
                                <div className="-ml-4 size-10 rounded-full p-0.5 bg-white">
                                    <div className="bg-gray-500 h-full w-full rounded-full"></div>
                                </div>
                                <div className="-ml-4 size-10 rounded-full p-0.5 bg-white">
                                    <div className="bg-gray-500 h-full w-full rounded-full"></div>
                                </div>
                            </div>
                            <p className="font-bold text-sm text-background-dark">
                                1,200+{" "}
                                <span className="text-gray-400">
                                    Bengkel Terdaftar
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white p-2 rounded-xl">
                            <img
                                src="/images/header.jpg"
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="">
                        <h1 className="text-background-dark text-center font-black text-2xl md:text-3xl lg:text-4xl">
                            Layanan Unggulan Kami
                        </h1>
                        <p className="mt-4 w-3/4 mx-auto text-sm md:text-base text-center text-gray-500">
                            Fitur cerdas untuk pengalmaan servis kendaraan yang
                            lebih baik, efisien, dan transparan bagi pelanggan
                            maupun pemilik bengkel.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background-light rounded-xl p-8">
                            <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <CalendarDays className="size-6 text-primary" />
                            </div>
                            <p className="mt-6 text-background-dark text-lg font-bold">
                                Booking Online 24/7
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                                {" "}
                                Pesan jadwal servis kapan saja tanpa harus
                                menelpon atau datang langsung ke bengkel.
                                Fleksibel dan praktis.
                            </p>
                        </div>
                        <div className="bg-background-light rounded-xl p-8">
                            <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <ChartNoAxesCombined className="size-6 text-primary" />
                            </div>
                            <p className="mt-6 text-background-dark text-lg font-bold">
                                Real-time Monitoring
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                                {" "}
                                Pantau status pengerjaan kendaraan Anda secara
                                langsung melalui aplikasi dengan notifikasi
                                setiap tahapan progres.
                            </p>
                        </div>
                        <div className="bg-background-light rounded-xl p-8">
                            <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <ScrollText className="size-6 text-primary" />
                            </div>
                            <p className="mt-6 text-background-dark text-lg font-bold">
                                Riwayat Servis
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                                {" "}
                                Catatan perawatan kendaraan tersimpan rapi
                                secara digital. Memudahkan pemantauan performa
                                dan nilai jual kendaraan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="">
                        <h1 className="text-background-dark text-center font-black text-2xl md:text-3xl lg:text-4xl">
                            Apa Kata Pelanggan Kami
                        </h1>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="bg-primary rounded-xl py-16">
                        <div className="w-3/4 mx-auto">
                            <h1 className="font-black text-white text-center text-2xl md:text-3xl lg:text-4xl">
                                Siap Mengubah Pengalaman Servis Kendaraan Anda
                            </h1>
                            <p className="mt-8 w-3/4 mx-auto text-base text-gray-400 text-center">
                                Bergabunglah dengan ribuan pemilik kendaraan
                                yang telah menikmati kemudahan antrean digital
                            </p>
                            <div className="mt-8 flex items-stretch justify-center gap-4">
                                <a href="#">
                                    <button className="bg-white text-center rounded-lg py-4 px-8 text-primary text-base font-bold cursor-pointer">
                                        Mulai Reservasi Sekarang
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="bg-transparent border border-gray-400 text-center rounded-lg py-4 px-8 text-white text-base font-bold cursor-pointer">
                                        Daftarkan Bengkel Anda
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

Home.layout = (page) => <LandingPageLayout children={page} />;
export default Home;
