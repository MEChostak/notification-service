import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';
import { UnreadNotification } from './unread-notification';

const notificationsRepository = new InMemoryNotificationsRepository();
const unreadNotification = new UnreadNotification(notificationsRepository);
const notification = makeNotification({
  readAt: new Date(),
});

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should be able to unread a non existing notification', async () => {
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
