export const STOP_MINUTES = 3;
export const EARLY_ARRIVAL_MINUTES = 15;
export const PICKUP_BUFFER_MINUTES = 20;
export const DEPARTURE_DELAY_MINUTES = 30;

export const parseTime = (value) => {
    const match = String(value).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return null;
    const hour = Number(match[1]);
    const minute = Number(match[2]);
    if (hour < 1 || hour > 12 || minute > 59) return null;
    return (hour % 12) * 60 + minute + (match[3].toUpperCase() === 'PM' ? 720 : 0);
};

export const formatTime = (minutes) => {
    const day = Math.floor(minutes / 1440);
    const normalized = ((minutes % 1440) + 1440) % 1440;
    const hour = Math.floor(normalized / 60);
    const time = `${String(hour % 12 || 12).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
    return time + (day === 0 ? '' : day === -1 ? ' (previous day)' : day === 1 ? ' (next day)' : ` (${day > 0 ? '+' : ''}${day} days)`);
};

// Legs must be in their actual driving direction; return travel can differ.
export const calculateStopTimes = (boxIds, pickupLegs, dropLegs, schoolTiming) => {
    const result = Object.fromEntries(boxIds.map(id => [id, {}]));
    const validLegs = (legs) => legs.length === boxIds.length && legs.every(leg => Number.isFinite(leg.duration?.value) && leg.duration.value >= 0);
    const start = parseTime(schoolTiming.start);
    const end = parseTime(schoolTiming.end);
    if (start !== null && validLegs(pickupLegs)) {
        const travel = pickupLegs.map(leg => Math.ceil(leg.duration.value / 60));
        let time = start - EARLY_ARRIVAL_MINUTES - PICKUP_BUFFER_MINUTES - boxIds.length * STOP_MINUTES - travel.reduce((sum, duration) => sum + duration, 0);
        [...boxIds].reverse().forEach((id, index) => {
            result[id].pickup = formatTime(time);
            time += STOP_MINUTES + travel[index];
        });
    }
    if (end !== null && validLegs(dropLegs)) {
        let time = end + DEPARTURE_DELAY_MINUTES;
        boxIds.forEach((id, index) => {
            time += Math.ceil(dropLegs[index].duration.value / 60);
            result[id].drop = formatTime(time);
            time += STOP_MINUTES;
        });
    }
    return result;
};

export const distanceFromSchool = (stop, school) => {
    const supplied = Number.parseFloat(stop.distance);
    if (Number.isFinite(supplied) && supplied >= 0) return supplied;
    const radians = degrees => degrees * Math.PI / 180;
    const lat = Number.parseFloat(stop.latitude);
    const lng = Number.parseFloat(stop.longitude);
    if (![lat, lng, school.lat, school.lng].every(Number.isFinite)) return Infinity;
    const a = Math.sin(radians(lat - school.lat) / 2) ** 2 + Math.cos(radians(school.lat)) * Math.cos(radians(lat)) * Math.sin(radians(lng - school.lng) / 2) ** 2;
    return 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, a)));
};
