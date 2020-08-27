import filter from 'lodash/filter';

export const createQuery = (navigation, page) => {
  const query = {
    key: navigation.getParam('key', undefined),
    mark: navigation.getParam('mark', undefined),
    user: navigation.getParam('user', undefined),
    notifications: navigation.getParam('notifications', undefined),
    page,
  };

  return filter(query, (v) => v).length ? query : {key: '0'};
};
