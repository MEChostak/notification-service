export class Contend {
  private readonly contend: string;

  get value(): string {
    return this.contend;
  }

  private validateContendLength(contend: string): boolean {
    return contend.length >= 5 && contend.length <= 240;
  }

  constructor(contend: string) {
    const isContendLenghtValid = this.validateContendLength(contend);

    if (!isContendLenghtValid) {
      throw new Error('Contend length error.');
    }
    this.contend = contend;
  }
}
