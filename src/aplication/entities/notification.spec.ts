import { Contend } from './contend';
import { Notification } from './notification';

describe('Notification', () => {
  it('it should be able to create a notification content', () => {
    const notification = new Notification({
      contend: new Contend('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });

  //   it('it should not be able to create a notification content with less than 5 characters', () => {
  //     expect(() => new Contend('aaa')).toThrow();
  //   });

  //   it('it should not be able to create a notification content with more than 240 characters', () => {
  //     expect(() => new Contend('a'.repeat(241))).toThrow();
  //   });
});
