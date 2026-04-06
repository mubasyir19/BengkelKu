import StatusBadge from "@/Components/Molecules/StatusBadge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDateToIndonesian } from "@/Utils/formatDate";
import { Head, router, usePage } from "@inertiajs/react";
import { CarFront, NotepadText, User, Wrench } from "lucide-react";
import React from "react";

export default function EditReservationPage() {
    const { props } = usePage();
    const data = props.data;
    console.log("ini detail antrian = ", props.data);

    const statusWorkflow = {
        pending: { next: "confirmed", label: "Konfirmasi Booking" },
        confirmed: { next: "processing", label: "Mulai Kerjakan" },
        processing: { next: "completed", label: "Tandai Selesai" },
        // Jika sudah completed atau cancelled, tombol tidak muncul
    };

    const updateStatus = (newStatus) => {
        if (
            confirm(
                `Apakah Anda yakin ingin mengubah status menjadi ${newStatus}?`,
            )
        ) {
            router.put(
                route("reservation.updateStatus", data.id),
                {
                    status: newStatus,
                },
                {
                    preserveScroll: true, // Halaman tidak akan lompat ke atas setelah klik
                    onSuccess: () => {
                        // Berhasil diupdate
                    },
                },
            );
        }
    };

    const currentStep = statusWorkflow[data.status];

    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
        //         Detail Antrian
        //     </h2>
        // }
        >
            <Head title="Detail Antrian" />
            <div className="py-12 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <h3 className="text-black font-bold text-xl">
                        Detail Reservasi
                    </h3>
                    <div className="flex items-center gap-3">
                        <StatusBadge status={data.status} />
                        {/* Tombol Batal: Hanya muncul jika belum selesai dan belum batal */}
                        {data.status !== "completed" &&
                            data.status !== "cancelled" && (
                                <button
                                    type="button"
                                    onClick={() => updateStatus("cancelled")}
                                    className="border border-red-500 bg-transparent text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-500 hover:text-white transition-colors duration-200"
                                >
                                    Batalkan Booking
                                </button>
                            )}

                        {/* Tombol Step Berikutnya: Muncul dinamis berdasarkan workflow */}
                        {statusWorkflow[data.status] && (
                            <button
                                type="button"
                                onClick={() => updateStatus(currentStep.next)}
                                className="border border-transparent bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                            >
                                {statusWorkflow[data.status].label}
                            </button>
                        )}
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-white rounded-xl overflow-hidden">
                        <div className="px-4 py-2 w-full bg-gray-50 border-b border-gray-200">
                            <h3 className="text-gray-500 text-lg font-semibold">
                                Informasi Utama
                            </h3>
                        </div>
                        <div className="mt-4 p-4 grid grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <User className="size-6 text-primary" />
                                    <p className="text-base text-primary font-semibold">
                                        Info Pelanggan
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Nama Pelanggan
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.customer_name}
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Nomor Telepon
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.customer_phoneNumber}
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Email
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.customer_email}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <Wrench className="size-6 text-primary" />
                                    <p className="text-base text-primary font-semibold">
                                        Info Servis
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Tipe Servis
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.service.name}
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Tanggal Booking
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {formatDateToIndonesian(
                                            data.reservation_date,
                                        )}
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Waktu Booking
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.time_slot.start_time}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <CarFront className="size-6 text-primary" />
                                    <p className="text-base text-primary font-semibold">
                                        Info Kendaraan
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Plat Nomor
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.vehicle_plate}
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <p className="text-gray-400 font-semibold text-sm uppercase">
                                        Model Kendaraan
                                    </p>
                                    <p className="mt-1 text-black font-semibold text-base">
                                        {data.vehicle_model}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <NotepadText className="size-6 text-primary" />
                                    <p className="text-base text-primary font-semibold">
                                        Catatan / Keluhan Kendaraan
                                    </p>
                                </div>
                                <div className="mt-4 pl-10">
                                    <div className="bg-primary/5 p-4 rounded-xl border border-gray-200">
                                        <p className="text-base text-gray-600">
                                            "{data.note}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-xl p-4"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
