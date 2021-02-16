console.log('MAIN.JS');

Notification.requestPermission();

navigator.serviceWorker.register('/js/sw.js');
