import { IMarkdownDocument, IVisitor, TagType } from "../models";
import ParseElement from "./ParseElement";
import TagTypeToHtml from "./TagTypeToHtml";

export default abstract class VisitorBase implements IVisitor {
  constructor(private readonly tagType: TagType, private readonly tagTypetToHtml: TagTypeToHtml){}

  Visit(token: ParseElement, markdownDocument: IMarkdownDocument) {
    markdownDocument.Add(
      this.tagTypetToHtml.openingTag(this.tagType),
      token.CurrentLine,
      this.tagTypetToHtml.closingTag(this.tagType)
    );
  }
}