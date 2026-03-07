import LandingPageLayout from "../Components/Layout/LandingPageLayout";
import { useEffect, useState } from "react";
import InformasiPemesan from "../Components/Organism/BookingComponents/InformasiPemesan";
import DataKendaraan from "../Components/Organism/BookingComponents/DataKendaraan";
import PilihLayanan from "../Components/Organism/BookingComponents/PilihLayanan";
import FinalConfirmation from "../Components/Organism/BookingComponents/FinalConfirmation";
import { useForm, router, usePage, Head } from "@inertiajs/react";
import { CircleCheck, Copy, Check } from "lucide-react";

const tabs = [
    {
        name: "Informasi Pemesan",
    },
    {
        name: "Data Kendaraan",
    },
    {
        name: "Pilih Layanan",
    },
    {
        name: "Konfirmasi",
    },
];

function Booking() {
    const { props } = usePage();
    const { flash } = props;

    const [currentStep, setcurrentStep] = useState(0);
    const { data, setData, post, processing, errors, reset } = useForm({
        customer_name: "",
        customer_email: "",
        customer_phoneNumber: "",
        vehicle_type: "",
        vehicle_model: "",
        vehicle_plate: "",
        service_id: "",
        reservation_date: "",
        time_slot_id: "",
    });
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [bookingCode, setBookingCode] = useState("");

    const nextStep = () => {
        setcurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setcurrentStep((prev) => prev - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    useEffect(() => {
        if (flash?.success && flash?.reservation_code) {
            setBookingCode(flash.reservation_code);
            setIsSuccessModalOpen(true);
        }
    }, [JSON.stringify(flash)]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/booking", {
            preserveScroll: true,
            onSuccess: (page) => {
                const flashData = page.props.flash;
                if (flashData?.success && flashData?.reservation_code) {
                    setBookingCode(flashData.reservation_code);
                    setIsSuccessModalOpen(true);
                }
            },
        });
    };

    const handleCopy = async () => {
        if (!bookingCode) return;
        await navigator.clipboard.writeText(bookingCode);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <>
            <Head title="Booking" />
            <div className="bg-background-light">
                <div className="py-10 flex items-center justify-center gap-4 overflow-x-auto">
                    {tabs.map((tab, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <div
                                    className={`group-hover:bg-primary group-hover:border-primary size-8 border-2  rounded-full flex items-center justify-center duration-300 transition-all ${currentStep === i ? "bg-primary border-primary" : "border-non-active"}`}
                                >
                                    <p
                                        className={`text-sm group-hover:text-white font-bold duration-300 transition-all ${currentStep === i ? "text-white" : "text-non-active"}`}
                                    >
                                        {i + 1}
                                    </p>
                                </div>
                                <p
                                    className={`group-hover:text-primary font-semibold text-base duration-300 transition-all ${currentStep === i ? "text-primary" : "text-non-active"}`}
                                >
                                    {tab.name}
                                </p>
                            </div>

                            {i !== tabs.length - 1 && (
                                <hr className="w-20 border border-gray-400" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="container mx-auto px-4 pb-10">
                    {currentStep === 0 && (
                        <InformasiPemesan
                            data={data}
                            onChange={handleChange}
                            onNext={nextStep}
                        />
                    )}
                    {currentStep === 1 && (
                        <DataKendaraan
                            data={data}
                            onChange={handleChange}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                    {currentStep === 2 && (
                        <PilihLayanan
                            data={data}
                            onChange={handleChange}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                    {currentStep === 3 && (
                        <FinalConfirmation
                            data={data}
                            onChange={handleChange}
                            loading={processing}
                            onPrev={prevStep}
                            onSubmit={handleSubmit}
                        />
                    )}
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
            {isSuccessModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center relative animate-in fade-in zoom-in-95 duration-200">
                        <div className="mx-auto size-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                            <CircleCheck className="size-10 text-green-500" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Reservasi Berhasil!
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Simpan ID Booking ini untuk mengecek status
                            reservasi Anda nanti.
                        </p>

                        <div className="text-left mb-8">
                            <p className="text-xs tracking-widest text-gray-400 font-semibold mb-2">
                                BOOKING ID
                            </p>

                            <div className="flex items-center justify-between bg-gray-100 border border-gray-200 rounded-2xl px-4 py-2">
                                <h3 className="text-base font-bold tracking-widest text-blue-800">
                                    {bookingCode || "RSV"}
                                </h3>

                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition"
                                >
                                    {copied ? (
                                        <>
                                            <Check
                                                size={16}
                                                className="text-green-600"
                                            />
                                            <span className="text-sm text-green-600 font-medium">
                                                Tersalin
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy
                                                size={16}
                                                className="text-blue-800"
                                            />
                                            <span className="text-sm text-blue-800 font-medium">
                                                Salin
                                            </span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => router.visit("/")}
                            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-xl shadow-lg transition mb-4"
                        >
                            Kembali ke Beranda
                        </button>

                        <button
                            onClick={() => {
                                setIsSuccessModalOpen(false);
                                router.visit("/");
                            }}
                            className="text-blue-700 text-sm font-medium hover:underline"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

Booking.layout = (page) => <LandingPageLayout children={page} />;
export default Booking;
