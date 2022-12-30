import { Replace } from 'src/helpers/Replace';
import { Contend } from './contend';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  contend: Contend;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set contend(contend: Contend) {
    this.props.contend = contend;
  }

  public get contend(): Contend {
    return this.props.contend;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
}