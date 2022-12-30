import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/aplication/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, contend, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      contend,
    });

    return { notification };
  }
}
