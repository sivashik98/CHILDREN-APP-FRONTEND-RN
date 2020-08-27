import {stringify} from 'query-string';

export const SUPPORTED_TYEPS = [0, 1];

export const isSupported = (type) => SUPPORTED_TYEPS.includes(type);

export const view = (tender, docType, href, local = null) => {
  if (isSupported(tender.type) === false) {
    return href;
  }

  const query = {
    tender: tender._id,
    type: docType,
    link: href,
    local,
  };

  return `https://tenderplan.ru/fileviewer?${stringify(query)}`;
};
