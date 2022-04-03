import { IMarkdownDocument } from "../models";

export default class MarkdownDocument implements IMarkdownDocument {
  private content: string = "";

  Add(...content: string[]): void {
    content.forEach(element => {
      this.content += element
    });
    
  }

  Get(): string {
    return this.content;
  }
}