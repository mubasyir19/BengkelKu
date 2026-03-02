import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DatePicker({ value, onChange }) {
    const today = new Date();

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(value || null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthName = currentDate.toLocaleString("id-ID", {
        month: "long",
        year: "numeric",
    });

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleSelectDate = (day) => {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
        onChange && onChange(newDate);
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            days.push(
                <button
                    key={day}
                    onClick={() => handleSelectDate(day)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition
                        ${
                            isSelected
                                ? "bg-primary text-white shadow-md"
                                : "hover:bg-gray-100"
                        }`}
                >
                    {day}
                </button>,
            );
        }

        return days;
    };

    return (
        <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth}>
                    <ChevronLeft size={20} />
                </button>

                <h2 className="font-semibold text-gray-800 capitalize">
                    {monthName}
                </h2>

                <button onClick={nextMonth}>
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
                {["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].map(
                    (day) => (
                        <div key={day} className="text-center">
                            {day}
                        </div>
                    ),
                )}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
                {renderDays()}
            </div>
        </div>
    );
}
