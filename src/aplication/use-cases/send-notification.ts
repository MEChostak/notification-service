import { Injectable } from '@nestjs/common';
import { Contend } from '../entities/contend';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notificatios-repositories';

interface SendNotificationRequest {
  recipientId: string;
  contend: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, contend, category } = request;

    const notification = new Notification({
      recipientId,
      contend: new Contend(contend),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
