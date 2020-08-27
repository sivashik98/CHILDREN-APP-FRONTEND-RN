import {StackActions, NavigationActions} from 'react-navigation';
import Url from 'url-parse';
import qs from 'query-string';
import trimEnd from 'lodash/trimEnd';

const PATH_HANDLERS = {
  '/': () => null,
  '/login': (query) =>
    NavigationActions.navigate({routeName: 'Login', params: query}),
  '/app': (query) => {
    const actions = [
      NavigationActions.navigate({routeName: 'AppBottom'}),
      NavigationActions.navigate({routeName: 'Tenders', params: query}),
    ];

    if (query.tender) {
      actions.push(
        NavigationActions.navigate({
          routeName: 'Tender',
          params: {id: query.tender},
        }),
      );
    }

    return NavigationActions.navigate({
      routeName: 'App',
      action: StackActions.reset({
        index: actions.length - 1,
        actions,
      }),
    });
  },
};

export default (link) => {
  const url = new Url(link);

  const path = trimEnd(url.pathname, '/');
  const query = qs.parse(url.query);

  const handler = PATH_HANDLERS[path];
  return handler ? handler(query) : null;
};
