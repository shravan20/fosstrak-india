const toLocaleDateString = (date) => {
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}


module.exports = {
    toLocaleDateString
}
