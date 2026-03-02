import { vehicleTypes } from "../../../Utils/vehicle";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

export default function DataKendaraan({ data, onChange, onNext, onPrev }) {
    return (
        <div className="w-full md:w-3/4 mx-auto bg-white rounded-lg">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-background-dark font-bold text-lg md:text-xl lg:text-2xl">
                    Data Kendaraan
                </h2>
                <p className="text-gray-400 text-sm">
                    Lengkapi informasi detail kendaraan Anda untuk mendapatkan
                    layanan terbaik.
                </p>
            </div>
            <div className="p-6 space-y-4">
                <div className="">
                    <label
                        htmlFor="vehicle_type"
                        className="text-primary text-sm font-semibold"
                    >
                        Tipe Kendaraan <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <select
                            name="vehicle_type"
                            id="vehicle_type"
                            value={data.vehicle_type}
                            onChange={onChange}
                            defaultValue=""
                            className="rounded-lg w-full px-3 py-2.5 text-sm border border-gray-300 bg-gray-50 focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all"
                        >
                            <option value="" disabled>
                                Pilih Merek Kendaraan Anda
                            </option>
                            {vehicleTypes.map((type, i) => (
                                <option
                                    key={i}
                                    value={type.value}
                                    className="text-background-dark"
                                >
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="vehicle_model"
                        className="text-primary text-sm font-semibold"
                    >
                        Model Kendaraan <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all">
                        <input
                            type="text"
                            name="vehicle_model"
                            placeholder="Contoh: Toyota Avanza, Honda Civic, Mitsubishi Pajero Sport"
                            value={data.vehicle_model}
                            onChange={onChange}
                            required
                            className="w-full bg-input outline-none text-sm text-gray-700 placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="vehicle_plate"
                        className="text-primary text-sm font-semibold"
                    >
                        Plat Nomor Kendaraan{" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all">
                        <input
                            type="text"
                            name="vehicle_plate"
                            placeholder="Contoh: B 1234 XYZ"
                            value={data.vehicle_plate}
                            onChange={onChange}
                            required
                            className="w-full bg-input outline-none text-sm text-gray-700 placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="bg-primary/5 p-4 flex items-start gap-2 border border-primary/10 rounded-lg">
                    <Info className="size-4 text-primary" />
                    <p className="text-xs text-primary">
                        Pastikan data kendaraan yang Anda masukkan sesuai dengan
                        STNK untuk memudahkan proses verifikasi di bengkel.
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-200 p-6 flex items-stretch justify-between">
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
                    onClick={onNext}
                    className="py-3 px-6 bg-primary rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer  border border-primary"
                >
                    <span className="text-white font-semibold text-sm">
                        Lanjutkan
                    </span>
                    <ArrowRight className="size-5 text-white" />
                </button>
            </div>
        </div>
    );
}
