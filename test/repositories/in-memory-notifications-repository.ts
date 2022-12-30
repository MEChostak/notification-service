import { Notification } from '../../src/aplication/entities/notification';
import { NotificationsRepository } from '../../src/aplication/repositories/notificatios-repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
