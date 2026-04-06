import React from "react";

export default function StatusBadge({ status }) {
    const statusConfig = {
        pending: {
            container: "bg-yellow-100 border-yellow-700 text-yellow-700",
            dot: "bg-yellow-700",
            label: "Menunggu",
        },
        confirmed: {
            container: "bg-blue-100 border-blue-700 text-blue-700",
            dot: "bg-blue-700",
            label: "Dikonfirmasi",
        },
        processing: {
            container: "bg-purple-100 border-purple-700 text-purple-700",
            dot: "bg-purple-700",
            label: "Diproses",
        },
        completed: {
            container: "bg-green-100 border-green-700 text-green-700",
            dot: "bg-green-700",
            label: "Selesai",
        },
        cancelled: {
            container: "bg-red-100 border-red-700 text-red-700",
            dot: "bg-red-700",
            label: "Dibatalkan",
        },
        unknown: {
            container: "bg-gray-100 border-gray-400 text-gray-400",
            dot: "bg-gray-400",
            label: "Tidak Diketahui",
        },
    };

    const config = statusConfig[status?.toLowerCase()] || statusConfig.default;

    return (
        <div
            className={`${config.container} rounded-full flex items-center gap-2 px-4 py-1 border`}
        >
            <div className={`size-1.5 rounded-full ${config.dot}`}></div>
            <span className="text-xs font-semibold whitespace-nowrap">
                {config.label}
            </span>
        </div>
    );
}
