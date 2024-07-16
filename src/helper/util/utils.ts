export function getStringWithTimestamp(str:string): string {
    return str + Date.now();
}

export function formatDate(inputDate: string): string {
    const dateParts: string[] = inputDate.split(/[T-]/); // Splitting by 'T' and '-'

    // Extract components
    const year: number = parseInt(dateParts[0]);
    const month: number = parseInt(dateParts[1]);
    const day: number = parseInt(dateParts[2]);

    // Check if any of the components are NaN
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return "Invalid Date";
    }

    // Format into mm/dd/yyyy
    const formattedDate: string = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year.toString()}`;

    return formattedDate;
}
