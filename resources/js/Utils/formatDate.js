export function formatDateToIndonesian(dateInput) {
    if (!dateInput) return "-";

    const date = new Date(dateInput);

    if (isNaN(date)) return "-";

    return new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}
