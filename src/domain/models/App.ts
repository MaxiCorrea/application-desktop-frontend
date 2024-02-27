export interface IApp {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly base64: string;
}

export class App {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly base64: string;

  constructor(args: IApp) {
    this.id = args.id;
    this.name = args.name;
    this.description = args.description;
    this.url = args.url;
    this.base64 = args.base64;
  }
}
