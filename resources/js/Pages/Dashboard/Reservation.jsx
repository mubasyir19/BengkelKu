import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Reservation() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Antrian
                </h2>
            }
        >
            <Head title="Daftar Antrian" />

            <section className="py-12 max-w-7xl mx-auto">
                <div className="bg-white shadow-md rounded-2xl overflow-hidden border">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Code</th>
                                <th className="px-6 py-4">Nama Pelanggan</th>
                                <th className="px-6 py-4">Nomor Plat</th>
                                <th className="px-6 py-4">Model Kendaraan</th>
                                <th className="px-6 py-4">Tanggal Reservasi</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    #001
                                </td>
                                <td className="px-6 py-4">Mahdy</td>
                                <td className="px-6 py-4">B 1332 KYH</td>
                                <td className="px-6 py-4">Kijang Innova</td>
                                <td className="px-6 py-4">
                                    Kamis, 26 Maret 2026
                                </td>

                                {/* Status Badge */}
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                                        Pending
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <button className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                            Edit
                                        </button>
                                        <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition">
                                            Hapus
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
