import { Info } from "lucide-react";
import React from "react";

export default function DeleteDialog() {
    return (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center">
                    <div className="">
                        <Info className="size-9 text-red-500 mx-auto" />
                        <p className="mt-3 text-center text-red-500 text-xl font-semibold">
                            Apakah yakin untuk menghapus?
                        </p>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="py-2 rounded-xl border border-primary text-primary text-base">
                        Batal
                    </button>
                    <button className="py-2 rounded-xl border border-red-500 text-red-500 text-base">
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}
