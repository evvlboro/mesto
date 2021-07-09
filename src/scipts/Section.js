export default class Section {
  constructor({ items , renderer }, containerSelector) {
    this._renderedItems = items ;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems
      .then((items) => {
        items.forEach(item => {
          this._renderer(item);
      });
    });
  }
}
