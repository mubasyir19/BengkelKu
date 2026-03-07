import { ArrowRight, Mail, Phone, User } from "lucide-react";

export default function InformasiPemesan({ data, onChange, onNext }) {
    return (
        <div className="w-full md:w-3/4 mx-auto bg-white rounded-lg">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-background-dark font-bold text-lg md:text-xl lg:text-2xl">
                    Informasi Pemesan
                </h2>
                <p className="text-gray-400 text-sm">
                    Lengkapi form dibawah ini
                </p>
            </div>
            <div className="p-6 space-y-4">
                <div className="">
                    <label
                        htmlFor="customer_name"
                        className="text-primary text-sm font-semibold"
                    >
                        Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-300 bg-input focus-within:border-primary transition-all">
                        <User className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            name="customer_name"
                            placeholder="Contoh: John Doe"
                            value={data.customer_name}
                            onChange={onChange}
                            required
                            className="w-full bg-input text-sm text-gray-700 border border-none focus:ring-0 placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="customer_email"
                        className="text-primary text-sm font-semibold"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-300 bg-input focus-within:border-primary transition-all">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            name="customer_email"
                            placeholder="Contoh: 0812345..."
                            value={data.customer_email}
                            onChange={onChange}
                            required
                            className="w-full bg-input outline-none text-sm text-gray-700 border border-none focus:ring-0 placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="customer_phoneNumber"
                        className="text-primary text-sm font-semibold"
                    >
                        Nomor Telepon <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus-within:border-primary transition-all">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <input
                            type="tel"
                            name="customer_phoneNumber"
                            placeholder="08123456789"
                            value={data.customer_phoneNumber}
                            onChange={onChange}
                            required
                            className="w-full bg-input outline-none text-sm text-gray-700 border border-none focus:ring-0 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 p-6">
                <button
                    onClick={onNext}
                    className="py-3 w-full bg-primary rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                    <ArrowRight className="size-5 text-white" />
                    <span className="text-white font-semibold text-sm">
                        Lanjutkan
                    </span>
                </button>
            </div>
        </div>
    );
}
