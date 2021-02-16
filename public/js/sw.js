console.log('Hi from service asdasdlj worker');

self.addEventListener('push', (event) => {

  const options = {
    // Actions are only supported for persistent notifications shown using ServiceWorkerRegistration.showNotification()
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

  event.waitUntil(
    self.registration.showNotification(event.data.text(), options)
  );
});

self.addEventListener('notificationclick', function(event) {
  if (!event.action) {
    // Was a normal notification click
    event.notification.close();
    event.waitUntil(
      self.clients.openWindow('/myPromoPage')
    );
    return;
  }

  switch (event.action) {
    case 'blue-car':
      event.waitUntil(
        self.clients.openWindow('/blueCar')
      );
      break;
    case 'red-car':
      event.waitUntil(
        self.clients.openWindow('/redCar')
      );
      break;
    default:
      console.log(`Unknown action clicked: '${event.action}'`);
      break;
  }
});

