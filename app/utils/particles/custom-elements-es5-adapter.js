export function customElementEs5Adapter() {
    if (
        void 0 === window.Reflect ||
        void 0 === window.customElements ||
        window.customElements.polyfillWrapFlushCallback
      )
        return;
      const a = HTMLElement;
      (window.HTMLElement = {
        HTMLElement: function HTMLElement() {
          return Reflect.construct(a, [], this.constructor);
        },
      }.HTMLElement),
        (HTMLElement.prototype = a.prototype),
        (HTMLElement.prototype.constructor = HTMLElement),
        Object.setPrototypeOf(HTMLElement, a);
      
}