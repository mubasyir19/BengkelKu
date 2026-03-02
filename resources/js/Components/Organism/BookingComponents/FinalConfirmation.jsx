import { usePage } from "@inertiajs/react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    CarFront,
    ClipboardCheck,
    Clock,
    FileUser,
    Mail,
    Phone,
    User,
    Wrench,
} from "lucide-react";
import { formatDateToIndonesian } from "../../../Utils/formatDate";
import { formatTimeToHourMinute } from "../../../Utils/formatTime";

export default function FinalConfirmation({ data, onSubmit, loading }) {
    const { services, timeSlots } = usePage().props;

    const selectedServices = services.find(
        (service) => service.id === data.service_id,
    );
    const selectedTimeSlots = timeSlots.find(
        (timeSlot) => timeSlot.id === data.time_slot_id,
    );

    console.log("ini data final sebelum dikirim = ", data);

    return (
        <div className="w-full md:w-3/4 mx-auto">
            <div className="p-6">
                <h2 className="text-background-dark text-center font-bold text-lg md:text-xl lg:text-2xl">
                    Konfirmasi Reservasi
                </h2>
                <p className="text-gray-400 text-sm text-center">
                    Periksa kembali detail pesanan Anda sebelum melakukan
                    konfirmasi
                </p>
            </div>
            <div className="border border-border-light rounded-xl overflow-hidden">
                <div className="bg-secondary/5 px-6 py-8 flex items-center gap-4">
                    <div className="size-12 bg-primary rounded-lg flex items-center justify-center">
                        <ClipboardCheck className="size-6 text-white" />
                    </div>
                    <div className="">
                        <p className="text-primary font-bold text-base">
                            Ringkasan Reservasi
                        </p>
                        {/* <p className="text-secondary text-sm">
                            Order ID : #BK-882910
                        </p> */}
                    </div>
                </div>
                <div className="bg-white p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="">
                            <p className="flex items-center gap-1 text-primary font-bold text-sm">
                                <Wrench className="size-5 text-primary" />
                                <span className="uppercase">Tipe Layanan</span>
                            </p>
                            <div className="mt-3 bg-input rounded-lg p-4">
                                <p className="text-background-dark text-lg font-semibold">
                                    {selectedServices.name}
                                </p>
                                <p className="mt-1 text-secondary text-sm">
                                    Termasuk ganti oli, cek rem & general
                                    checkup
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <p className="flex items-center gap-1 text-primary font-bold text-sm">
                                <CalendarDays className="size-5 text-primary" />
                                <span className="uppercase">
                                    Waktu & Tanggal
                                </span>
                            </p>
                            <div className="mt-3 bg-input rounded-lg p-4">
                                <p className="text-background-dark text-lg font-semibold">
                                    {formatDateToIndonesian(
                                        data.reservation_date,
                                    )}
                                </p>
                                <p className="mt-1 text-secondary text-sm flex items-center gap-1">
                                    <Clock className="size-4 text-secondary" />
                                    <span>
                                        {formatTimeToHourMinute(
                                            selectedTimeSlots.start_time,
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="flex items-center gap-1 text-primary font-bold text-sm">
                            <CarFront className="size-5 text-primary" />
                            <span className="uppercase">Detail Kendaraan</span>
                        </p>
                        <div className="mt-4 bg-input p-4 rounded-lg flex items-stretch gap-8">
                            <div className="">
                                <p className="text-xs text-secondary font-medium uppercase">
                                    Tipe Kendaraan
                                </p>
                                <p className="text-background-dark font-semibold text-sm">
                                    {data.vehicle_type}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-xs text-secondary font-medium uppercase">
                                    Merek / Model
                                </p>
                                <p className="text-background-dark font-semibold text-sm">
                                    {data.vehicle_model}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-xs text-secondary font-medium uppercase">
                                    Nomor Polisi
                                </p>
                                <p className="text-background-dark font-semibold text-sm">
                                    {data.vehicle_plate}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="flex items-center gap-1 text-primary font-bold text-sm">
                            <User className="size-5 text-primary" />
                            <span className="uppercase">Informasi Pemesan</span>
                        </p>
                        <div className="mt-4 bg-input p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <FileUser className="size-5 text-secondary" />
                                <div className="">
                                    <p className="text-xs text-secondary font-medium">
                                        Nama Lengkap
                                    </p>
                                    <p className="text-background-dark font-semibold text-sm">
                                        {data.customer_name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="size-5 text-secondary" />
                                <div className="">
                                    <p className="text-xs text-secondary font-medium">
                                        Alamat Email
                                    </p>
                                    <p className="text-background-dark font-semibold text-sm">
                                        {/* john.doe@email.com */}
                                        {data.customer_email}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="size-5 text-secondary" />
                                <div className="">
                                    <p className="text-xs text-secondary font-medium">
                                        Nomor Telepon
                                    </p>
                                    <p className="text-background-dark font-semibold text-sm">
                                        {/* +62 812 3456 7890 */}
                                        {data.customer_phoneNumber}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary/5 px-6 py-8">
                    <button
                        onClick={onSubmit}
                        disabled={loading}
                        className="w-full bg-primary py-3 px-6 text-white font-semibold flex items-center justify-center gap-2 rounded-lg"
                    >
                        {loading ? (
                            <p>Loading ....</p>
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                <span>Konfirmasi & Pesan</span>
                                <ArrowRight className="size-5 text-white" />
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
