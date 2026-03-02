import { useMemo } from "react";
import { Sun, Sunrise, Sunset } from "lucide-react";

export default function TimeSlotPicker({ slots, value, onChange }) {
    const formatTime = (time) => time.slice(0, 5);

    const getHour = (time) => parseInt(time.split(":")[0]);

    const { pagi, siang, sore } = useMemo(() => {
        const sorted = [...slots].sort(
            (a, b) => getHour(a.start_time) - getHour(b.start_time),
        );

        return {
            pagi: sorted.filter((s) => getHour(s.start_time) < 12),
            siang: sorted.filter(
                (s) =>
                    getHour(s.start_time) >= 13 && getHour(s.start_time) <= 15,
            ),
            sore: sorted.filter((s) => getHour(s.start_time) > 15),
        };
    }, [slots]);

    const renderSection = (title, icon, data) => (
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
                {icon}
                <h3 className="font-semibold text-gray-700">{title}</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {data.map((slot) => {
                    const isSelected = value === slot.id;
                    const isDisabled = slot.capacity === 0;

                    return (
                        <button
                            key={slot.id}
                            disabled={isDisabled}
                            onClick={() => onChange(slot.id)}
                            className={`py-2 rounded-xl font-semibold transition-all border
                            ${
                                isSelected
                                    ? "bg-primary text-white shadow-md border-primary"
                                    : "bg-white text-gray-700 hover:bg-white border-gray-200"
                            }
                            ${
                                isDisabled
                                    ? "opacity-40 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            {formatTime(slot.start_time)}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div>
            {renderSection(
                "Pagi",
                <Sunrise className="text-orange-500 size-5" />,
                pagi,
            )}
            {renderSection(
                "Siang",
                <Sun className="text-orange-400 size-5" />,
                siang,
            )}
            {renderSection(
                "Sore",
                <Sunset className="text-indigo-400 size-5" />,
                sore,
            )}
        </div>
    );
}
