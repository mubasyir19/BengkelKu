export function formatTimeToHourMinute(timeString) {
    if (!timeString) return "-";

    // Format valid: HH:mm:ss
    const parts = timeString.split(":");

    if (parts.length < 2) return "-";

    const [hours, minutes] = parts;

    return `${hours}.${minutes}`;
}
