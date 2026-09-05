import { calculateStopTimes, distanceFromSchool, parseTime } from './routeTiming';

const legs = minutes => minutes.map(value => ({ duration: { value: value * 60 } }));

test('matches the three-stop pickup example and calculates drop-off in forward order', () => {
    const times = calculateStopTimes(['near', 'middle', 'far'], legs([20, 30, 20]), legs([20, 30, 20]), { start: '10:00 AM', end: '03:00 PM' });
    expect(times).toEqual({
        near: { pickup: '09:02 AM', drop: '03:50 PM' },
        middle: { pickup: '08:29 AM', drop: '04:23 PM' },
        far: { pickup: '08:06 AM', drop: '04:46 PM' }
    });
});

test('uses separate driving durations in each direction and handles one stop', () => {
    expect(calculateStopTimes(['a'], legs([20]), legs([35]), { start: '10:00 AM', end: '03:00 PM' })).toEqual({
        a: { pickup: '09:02 AM', drop: '04:05 PM' }
    });
});

test('labels previous-day pickups and next-day drops', () => {
    expect(calculateStopTimes(['a'], legs([20]), legs([35]), { start: '12:30 AM', end: '11:30 PM' })).toEqual({
        a: { pickup: '11:32 PM (previous day)', drop: '12:35 AM (next day)' }
    });
    expect(parseTime('12:00 PM')).toBe(720);
    expect(parseTime('12:00 AM')).toBe(0);
});

test('requires only the corresponding school time and rejects missing durations', () => {
    expect(calculateStopTimes(['a'], legs([20]), legs([35]), { start: '', end: '03:00 PM' })).toEqual({ a: { drop: '04:05 PM' } });
    expect(calculateStopTimes(['a'], [{}], [], { start: '10:00 AM', end: '03:00 PM' })).toEqual({ a: {} });
    expect(parseTime('13:60 PM')).toBeNull();
});

test('rounds road durations up to whole minutes', () => {
    expect(calculateStopTimes(['a'], [{ duration: { value: 1201 } }], legs([20]), { start: '10:00 AM', end: '' })).toEqual({ a: { pickup: '09:01 AM' } });
});

test('uses institution distance in km for ordering, with coordinate fallback', () => {
    const school = { lat: 22.5, lng: 88.3 };
    expect(distanceFromSchool({ distance: '10.21' }, school)).toBe(10.21);
    expect(distanceFromSchool({ latitude: '22.5', longitude: '88.3' }, school)).toBe(0);
    expect(distanceFromSchool({ latitude: '22.6', longitude: '88.3' }, school)).toBeCloseTo(11.12, 1);
});
