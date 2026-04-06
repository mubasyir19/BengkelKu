import DeleteDialog from "@/Components/Molecules/DeleteDialog";
import StatusBadge from "@/Components/Molecules/StatusBadge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDateToIndonesian } from "@/Utils/formatDate";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Reservation() {
    const { props } = usePage();

    const [loading, setLoading] = useState(false);
    console.log("list data reservation = ", props.data);

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
                    {loading && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                            <div className="bg-white px-4 py-2 rounded-lg shadow">
                                Loading...
                            </div>
                        </div>
                    )}
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Code</th>
                                <th className="px-6 py-4">Nama Pelanggan</th>
                                <th className="px-6 py-4">Kode</th>
                                <th className="px-6 py-4">Model Kendaraan</th>
                                <th className="px-6 py-4">Tanggal Reservasi</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {props.data.data.map((data, i) => (
                                <tr
                                    key={data.id}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        #{String(i + 1).padStart(3, "0")}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.customer_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-400/10 text-[10px] text-blue-600 px-2 py-1 rounded-full font-semibold">
                                            {data.code}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{`${data.vehicle_type} - ${data.vehicle_model}`}</td>
                                    <td className="px-6 py-4">
                                        {formatDateToIndonesian(
                                            data.reservation_date,
                                        )}
                                    </td>

                                    {/* Status Badge */}
                                    <td className="px-6 py-4">
                                        <StatusBadge status={data.status} />
                                        {/* <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                                            {data.status ?? "Pending"}
                                        </span> */}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <a
                                                href={`/dashboard/reservation/edit/${data.id}`}
                                                className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                            >
                                                Edit
                                            </a>
                                            <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between mt-6 px-6 pb-6">
                        {/* Info */}
                        <p className="text-sm text-gray-600">
                            Showing {props.data.from} to {props.data.to} of{" "}
                            {props.data.total} results
                        </p>

                        {/* Pagination */}
                        <div className="flex gap-2">
                            {props.data.links.map((link, i) => (
                                <button
                                    key={i}
                                    disabled={!link.url}
                                    onClick={() => {
                                        if (!link.url) return;

                                        setLoading(true);
                                        router.visit(link.url, {
                                            preserveScroll: true,
                                            preserveState: true,
                                            onFinish: () => setLoading(false),
                                        });
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className={`px-3 py-1 text-sm rounded-md border transition
                    ${
                        link.active
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                    }
                    ${!link.url ? "opacity-50 cursor-not-allowed" : ""}
                `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <DeleteDialog /> */}
        </AuthenticatedLayout>
    );
}
