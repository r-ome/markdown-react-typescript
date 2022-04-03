export default  abstract class Handler<T> {
  protected next: Handler<T> | null = null;

  SetNext(next: Handler<T>): void {
    this.next = next;
  }

  HandleRequest(request: T): void {
    if (!this.CanHandle(request)) {
      if (this.next !== null) {
        this.next.HandleRequest(request)
      }
      return;
    }
  }

  protected abstract CanHandle(request: T): boolean;
}