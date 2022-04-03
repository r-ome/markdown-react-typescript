import { TagType } from "../models";

export default class TagTypeToHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
  
  constructor() {
    this.tagType.set(TagType.Header1, 'h1');
    this.tagType.set(TagType.Header2, 'h2');
    this.tagType.set(TagType.Header3, 'h3');
    this.tagType.set(TagType.Paragraph, 'p');
    this.tagType.set(TagType.HorizontalRule, 'hr');
    this.tagType.set(TagType.CheckBox, 'input type="checkbox"');
  }

  openingTag(tagType: TagType): string {
    return this.getTag(tagType, "<");
  }

  closingTag(tagType: TagType): string {
    return this.getTag(tagType, "</");
  }

  private getTag(tagType: TagType, openingPattern: string): string {
    let tag = this.tagType.get(tagType);
    if (tag !== null) {
      return `${openingPattern}${tag}>`;
    }

    return `${openingPattern}p>`;
  }
}