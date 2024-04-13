const toLocaleDateString = (date) => {
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

const formatDateRange = (startDateStr, endDateStr) => {

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const formatDate = (date) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const month = monthNames[date.getMonth()];
        const day = date.getDate();

        return `${month} ${day}`;
    };

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    return `${formattedStartDate}-${formattedEndDate}`;;
}

module.exports = {
    toLocaleDateString,
    formatDateRange
};
