﻿export class Vendor {

    constructor(private message: string) {
    }

    sayHello() {
        console.log(this.greetingMessage);
    }

    get greetingMessage(): string {
        return `Hello ${this.message} from TypeScript within a webpack bundle`;
    }
}
