import moment from 'moment';
import memoize from 'memoize-one';

export const getSystemTimezone = memoize(() => {
  return new Date().getTimezoneOffset() * -60000;
});

export const getTimezoneHours = (timezone) =>
  moment.duration(timezone).asHours();

export const getTimezoneString = (timezone) => {
  return timezone === 0 ? '' : timezone > 0 ? '+' + timezone : timezone;
};

export const getMSKTimezoneString = (timezone) => {
  return '(МСК' + getTimezoneString(getTimezoneHours(timezone) - 3) + ')';
};
