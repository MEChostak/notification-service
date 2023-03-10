import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      contend: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);
    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
