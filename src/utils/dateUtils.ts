// dateUtils.ts
export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function getCurrentDate(): Date {
    return new Date();
}

export function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}