import { Notification } from '@aplication/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      contend: notification.contend.value,
      recipientId: notification.recipientId,
    };
  }
}
