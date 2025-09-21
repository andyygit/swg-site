import { router, navigateTo } from './helpers/router.js';
import Store from './helpers/Store.js';
import { createSignal, createEffect } from './helpers/signals.js';

addEventListener('popstate', router);
addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else if (
      e.target.closest('a') &&
      e.target.closest('a').matches('[data-link]')
    ) {
      e.preventDefault();
      navigateTo(e.target.closest('a').href);
    }
  });
  router();
});

// // decode user from storage token or default to guest
// let [getUser, setUser] = createSignal({
//   username: 'guest',
//   premium: false,
// });

// const unu = document.getElementById('unu');
// const doi = document.getElementById('doi');

// setUser({
//   username: 'guest',
//   premium: false,
// });

// createEffect(() => {
//   unu.textContent = getUser().username;
//   doi.textContent = getUser().premium;
// });

// /**
//  * @type {String}
//  */
// const token = Store.getData('session');

// let split = token.split('.')[1];

// console.log(atob(split));

// // let userdata = JSON.parse(atob(split));

// // console.log(new Date(userdata.creationDate).toLocaleDateString('ro-RO'));
