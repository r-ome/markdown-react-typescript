import ParseElement from "./ParseElement";
import Handler from "./Handler";
import Visitable from "./Visitable";
import { IMarkdownDocument, IVisitable, IVisitor } from "../models";
import LineParser from "./LineParser";

class ParseChainHandler extends Handler<ParseElement> {
  private readonly visitable: IVisitable = new Visitable();

  constructor(
    private readonly document: IMarkdownDocument,
    private readonly tagType: string,
    private readonly visitor: IVisitor
  ) {
    super();
  }

  protected CanHandle(request: ParseElement): boolean{
    let split = new LineParser().Parse(request.CurrentLine, this.tagType);
    if (split[0]) {
      request.CurrentLine = split[1];
      this.visitable.Accept(this.visitor, request, this.document);
    }

    return split[0];
  }
}

export default ParseChainHandler;