import { IMarkdownDocument, IVisitable, IVisitor } from "../models";
import ParseElement from "./ParseElement";
import Visitable from "./Visitable";
import { ParagraphVisitor } from "./Visitors";
import Handler from "./Handler";

class ParagraphHandler extends Handler<ParseElement> {
  private readonly visitable: IVisitable = new Visitable();
  private readonly visitor: IVisitor = new ParagraphVisitor();

  protected CanHandle(request: ParseElement): boolean {
    this.visitable.Accept(this.visitor, request, this.document);
    return true;
  }

  constructor(private readonly document: IMarkdownDocument) {
    super();
  }
}

export default ParagraphHandler;