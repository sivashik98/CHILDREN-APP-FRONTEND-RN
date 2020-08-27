import chunk from 'lodash/chunk';
import trimEnd from 'lodash/trimEnd';

export const fullPrice = (value) => {
  const parts = value
    .toFixed(2)
    .toString()
    .split(/(\.|\,)/);

  const baseReverted = chunk(parts[0].split('').reverse(), 3)
    .map((v) => v.join(''))
    .join(' ');

  const base = baseReverted.split('').reverse().join('');

  if (parts.length > 1 && +parts[2]) {
    return `${base},${('0' + parts[2]).slice(-2)}`;
  }

  return base;
};

export const shortPrice = (value) => {
  if (value > 1000000000000) {
    return `${trimEnd((value / 1000000000000).toFixed(2), '0')} трлн.`;
  }
  if (value > 1000000000) {
    return `${trimEnd((value / 1000000000).toFixed(2), '0')} млрд.`;
  }
  if (value > 1000000) {
    return `${trimEnd((value / 1000000).toFixed(2), '0')} млн.`;
  }

  const parts = value.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join(',');
};

export const formatPrice = (value, full) => {
  if (full) {
    return fullPrice(value);
  }
  return shortPrice(value);
};
