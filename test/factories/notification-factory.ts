import { Contend } from '@aplication/entities/contend';
import {
  Notification,
  NotificationProps,
} from '@aplication/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    contend: new Contend('Nova solicitação de amizade'),
    recipientId: 'recipient-3',
    ...override,
  });
}
