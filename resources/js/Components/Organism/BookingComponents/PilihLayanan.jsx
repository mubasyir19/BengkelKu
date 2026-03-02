import {
    ArrowLeft,
    CalendarCheck,
    ChevronRight,
    CircleCheck,
} from "lucide-react";
import DatePicker from "../../Molecules/DatePicker";
import { usePage } from "@inertiajs/react";
import TimeSlotPicker from "../../Molecules/TimeSlotPicker";

export default function PilihLayanan({ data, onPrev, onNext, onChange }) {
    const { services, timeSlots } = usePage().props;

    const handleSelectService = (id) => {
        onChange({
            target: {
                name: "service_id",
                value: id,
            },
        });
    };

    const handleDateChange = (date) => {
        onChange({
            target: {
                name: "reservation_date",
                value: date,
            },
        });
    };

    const handleTimeSlotChange = (id) => {
        onChange({
            target: {
                name: "time_slot_id",
                value: id,
            },
        });
    };

    return (
        <div className="w-full md:w-3/4 mx-auto">
            <div className="py-6">
                <h2 className="text-background-dark font-bold text-lg md:text-xl lg:text-2xl">
                    Pilih Layanan
                </h2>
                <p className="text-gray-400 text-sm">
                    Silakan pilih jenis servis yang dibutuhkan kendaraan Anda.
                </p>
            </div>
            <div className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services
                        .slice()
                        .reverse()
                        .map((service) => {
                            const isSelected = data.service_id === service.id;
                            return (
                                <div
                                    key={service.id}
                                    onClick={() =>
                                        handleSelectService(service.id)
                                    }
                                    className={`rounded-2xl p-4 border-2 duration-300 transition-all hover:border-primary hover:bg-primary/5 ${isSelected ? "bg-primary/5 border-primary" : "bg-white border-transparent"}`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center"></div>
                                        {isSelected && (
                                            <CircleCheck className="size-5 text-primary" />
                                        )}
                                    </div>
                                    <p className="mt-4 text-background-dark font-bold text-lg">
                                        {service.name}
                                    </p>
                                    <p className="mt-2 text-gray-500 text-sm">
                                        {service.description}
                                    </p>
                                    {isSelected && (
                                        <p className="mt-4 text-xs text-primary font-bold uppercase">
                                            Terpilih
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* <DatePicker value={data.date} onChange={data.date} /> */}
                    <div className="">
                        <div className="">
                            <h4 className="text-background-dark font-bold text-lg">
                                Pilih Tanggal
                            </h4>
                            <p className="text-xs text-gray-500">
                                Tentukan hari kedatangan Anda
                            </p>
                        </div>
                        <div className="mt-6">
                            <DatePicker
                                value={data.reservation_date}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <h4 className="text-background-dark font-bold text-lg">
                                Pilih Waktu
                            </h4>
                            <p className="text-xs text-gray-500">
                                Jam operasional bengkel
                            </p>
                            <div className="mt-6">
                                <TimeSlotPicker
                                    slots={timeSlots}
                                    value={data.time_slot_id}
                                    onChange={handleTimeSlotChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="border-t border-gray-200 p-6 flex items-stretch justify-between">
                <button
                    onClick={onPrev}
                    className="py-3 px-6 rounded-lg text-primary flex items-center justify-center gap-2 cursor-pointer border border-primary"
                >
                    <ArrowLeft className="size-5 text-primary" />
                    <span className="text-primary font-semibold text-sm">
                        Kembali
                    </span>
                </button>
                <button
                    className="py-3 px-6 bg-primary rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer  border border-primary"
                >
                    <span className="text-white font-semibold text-sm">
                        Lanjutkan
                    </span>
                </button>
            </div> */}
            <div className="mt-10 bg-dark rounded-2xl p-8 flex flex-col md:flex-row items-center gap-4 justify-between">
                <div className="">
                    <p className="text-xs uppercase text-[#60A5FA] font-bold">
                        Ringkasan Reservasi
                    </p>
                    <div className="mt-2 flex items-center flex-wrap gap-2">
                        <CalendarCheck className="text-white size-4" />
                        <p className="text-white text-base font-bold">
                            Kamis, 27 Februari 2026
                        </p>
                        <p className="text-[#60A5FA]">•</p>
                        <p className="text-white text-base font-bold">
                            09.00 WIB
                        </p>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <p className="text-gray-400 text-sm">Servis Rutin</p>
                        <p className="text-white">•</p>
                        <p className="text-gray-400 text-sm">Antrean #5</p>
                    </div>
                </div>
                <div className="w-full md:w-fit">
                    <button
                        onClick={onNext}
                        className="w-full md:w-fit py-3 px-6 bg-primary text-center font-bold text-sm cursor-pointer flex items-center justify-center rounded-lg"
                    >
                        <span className="text-white">Lanjutkan Booking</span>
                        <ChevronRight className="size-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}
