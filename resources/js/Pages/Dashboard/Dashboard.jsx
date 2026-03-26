import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Check, Info, ListOrdered, Toolbox } from "lucide-react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="py-12 max-w-7xl mx-auto space-y-10">
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Total antrian hari ini berdasarkan reservation date */}
                        <div className="rounded-lg bg-white p-4 flex items-center gap-5 shadow-lg">
                            <div className=" rounded-full p-2 bg-primary/10">
                                <ListOrdered className="size-5 text-primary" />
                            </div>
                            <div className="space-y-2s">
                                <p className="text-sm text-secondary">
                                    Antrian hari ini
                                </p>
                                <h3 className="text-primary font-bold text-3xl">
                                    15
                                </h3>
                            </div>
                        </div>
                        {/* jumlah reservasi yang pending / menunggu konfirmasi dari admin */}
                        <div className="rounded-lg bg-white p-4 flex items-center gap-5 shadow-lg">
                            <div className=" rounded-full p-2 bg-yellow-100">
                                <Info className="size-5 text-yellow-800" />
                            </div>
                            <div className="space-y-2s">
                                <p className="text-sm text-secondary">
                                    Menunggu Konfirmasi
                                </p>
                                <h3 className="text-yellow-800 font-bold text-3xl">
                                    6
                                </h3>
                            </div>
                        </div>
                        {/* jumlah servis yang sedang berjalan */}
                        <div className="rounded-lg bg-white p-4 flex items-center gap-5 shadow-lg">
                            <div className=" rounded-full p-2 bg-lime-100">
                                <Toolbox className="size-5 text-lime-800" />
                            </div>
                            <div className="space-y-2s">
                                <p className="text-sm text-secondary">
                                    Servis Berjalan
                                </p>
                                <h3 className="text-lime-800 font-bold text-3xl">
                                    9
                                </h3>
                            </div>
                        </div>
                        {/* selesai hari ini */}
                        <div className="rounded-lg bg-white p-4 flex items-center gap-5 shadow-lg">
                            <div className=" rounded-full p-2 bg-green-100">
                                <Check className="size-5 text-green-800" />
                            </div>
                            <div className="space-y-2s">
                                <p className="text-sm text-secondary">
                                    Selesai Hari Ini
                                </p>
                                <h3 className="text-green-800 font-bold text-3xl">
                                    23
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-black text-2xl font-bold">
                        Antrian Pending
                    </h2>
                    <hr className="my-3 w-full border border-gray-200" />
                    <div className="mt-2 bg-white shadow-md rounded-2xl overflow-hidden border">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">
                                        No Antrean / Kode
                                    </th>
                                    <th className="px-6 py-4">Nomor Plat</th>
                                    <th className="px-6 py-4">
                                        Nama Pelanggan
                                    </th>
                                    <th className="px-6 py-4">Waktu</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        #001
                                    </td>
                                    <td className="px-6 py-4">B 1332 KYH</td>
                                    <td className="px-6 py-4">Mahdy</td>
                                    <td className="px-6 py-4">Jam 10.00</td>

                                    {/* Status Badge */}
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section>
                    <h2 className="text-black text-2xl font-bold">
                        Statistik Antrian Mingguan
                    </h2>
                    <hr className="my-3 w-full border border-gray-200" />
                </section>
                <section>
                    <h2 className="text-black text-2xl font-bold">
                        Aksi Cepat
                    </h2>
                    <hr className="my-3 w-full border border-gray-200" />
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
