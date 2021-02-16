"use strict";

console.log('main.js');

// new Notification('YO YO');

// Do something with the granted permission.
// note: new one will replace existing one
const options = {
  // Actions are only supported for persistent notifications shown using ServiceWorkerRegistration.showNotification()
  // tak podme zrobit
  // note: max 2 in chrome - maxActions
  actions: [
    {
      action: 'blue-car',
      title: 'Blue Car',
      icon: '/images/iconfinder_childhood_dream_64_67529.png' // ignored in Chrome (?)
    },
    {
      action: 'red-car',
      title: 'Red Car',
      icon: '/images/iconfinder_minicar_64_67531.png'
    }
  ]
};

Notification.requestPermission().then(function(result) {

  if (result === 'denied') {
    console.log('The permission request was dismissed.');
    return;
  }
  if (result === 'default') {
    // chrome blocks after 3 dismissal
    console.log('Permission wasn\'t granted. Allow a retry.');
    return;
  }

  /*
   const notification = new Notification('Hi!', options);
   // note: 100 is not enough
   // setTimeout(notification.close.bind(notification), 1000);
   notification.onclick = (event) => {
   console.log(event);
   return;
   }
   */
});

/*
 const myWorker = new Worker('/js/webworker.js');
 myWorker.onmessage = function(e) {
 console.log('Message received from worker');
 console.log(e.data);
 };

 myWorker.postMessage('yo man');
 */

/*
// Note: service script will not update until unregistered or changed url or 'update' in dev tools
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister()
  } });
*/

navigator.serviceWorker.addEventListener('message', event => {
  console.log(event.data.msg, event.data.url);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/serviceworker.js')
    .then((registration) => {
    console.log('Registration successful, scope is:', registration.scope);
  // navigator.serviceWorker.controller.postMessage('Message from client to Service');
  /*
   setTimeout(() =>
   registration.showNotification('SW registeredasd!', options)
   , 3000);
   */
})
.catch((error) => {
    console.log('Service worker registration failed, error:', error);
});
});
}
