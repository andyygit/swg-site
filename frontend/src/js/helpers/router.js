import tosView from '../views/Tos.js';
import homeView from '../views/Home.js';
import loginView from '../views/Login.js';
import registerView from '../views/Register.js';
import myProfileView from '../views/MyProfile.js';

const router = async () => {
  const routes = [
    {
      path: '/',
      view: homeView,
    },
    {
      path: '/login',
      view: loginView,
    },
    {
      path: '/register',
      view: registerView,
    },
    {
      path: '/my-profile',
      view: myProfileView,
    },
    {
      path: '/tos',
      view: tosView,
    },
  ];
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector('#main').innerHTML = await view.getHtml();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export { router, navigateTo };
