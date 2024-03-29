function formatData(d) {
    if (typeof d === 'number') {
        return d.toFixed(2);
    }
    if (Array.isArray(d)) {
        return d.map(item => formatData(item));
    }
    if (typeof d === 'object') {
        const formatted = {};
        for (let key in d) {
            formatted[key] = formatData(d[key]);
        }
        return formatted;
    }
    return d;
}

function calculateAverage(arr) {
    if (!arr || arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function findTrend(arr) {
    if (arr.length < 2) return 'insufficient data';
    const first = arr[0];
    const last = arr[arr.length - 1];
    return last > first ? 'increasing' : last < first ? 'decreasing' : 'stable';
}

function generateChart(elementId, type, data) {
    // Chart generation logic
    console.log(`Generated ${type} chart for ${elementId}`);
}