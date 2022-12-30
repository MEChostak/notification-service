import { Contend } from './contend';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const contend = new Contend('Você recebeu uma mensagem!');

    expect(contend).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Contend('aaa')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Contend('a'.repeat(241))).toThrow();
  });
});
