// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/HomePage'),
          import('containers/NewsContainer/reducer'),
          import('containers/NewsContainer/sagas'),
          import('containers/FeaturesContainer/reducer'),
          import('containers/FeaturesContainer/sagas'),
          import('containers/GalleryContainer/reducer'),
          import('containers/GalleryContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          component,
          newsContainerReducer,
          newsContainerSagas,
          featuresContainerReducer,
          featuresContainerSagas,
          galleryContainerReducer,
          galleryContainerSagas,
        ]) => {
          injectReducer('newsContainer', newsContainerReducer.default);
          injectSagas(newsContainerSagas.default);
          injectReducer('featuresContainer', featuresContainerReducer.default);
          injectSagas(featuresContainerSagas.default);
          injectReducer('galleryContainer', galleryContainerReducer.default);
          injectSagas(galleryContainerSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/virtual-museum-meet-artists',
      name: 'meetArtistsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/VirtualMuseumPage/MeetArtistsPage'),
          import('containers/GalleryContainer/reducer'),
          import('containers/GalleryContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, galleryContainerReducer, galleryContainerSagas]) => {
          injectReducer('galleryContainer', galleryContainerReducer.default);
          injectSagas(galleryContainerSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/virtual-museum-discover',
      name: 'discoverPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/VirtualMuseumPage/DiscoverPage'),
          import('containers/GalleryContainer/reducer'),
          import('containers/GalleryContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, galleryContainerReducer, galleryContainerSagas]) => {
          injectReducer('galleryContainer', galleryContainerReducer.default);
          injectSagas(galleryContainerSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/impressum',
      name: 'impressumPage',
      getComponent(location, cb) {
        import('pages/ImpressumPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
