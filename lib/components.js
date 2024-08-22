/**
 * Function to create any element
 * @param {string} tag The tag name of the element
 * @param {any[]} style The style of the element
 * @param {HTMLElement[]} children The children of the element
 * @returns {HTMLElement} The created element
 */
export const Elem = (tag, style, children) => {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(style)) {
    el.style[key] = value;
  }
  children.forEach((child) => el.appendChild(child));
  return el;
};

/**
 * Function to create a text node
 * @param {string} text The text to be displayed in the text node, or a signal
 * @returns {Text} The created text node
 */
export const Text = (text) => {
  if (typeof text === "string") {
    return document.createTextNode(text);
  } else {
    const el = document.createTextNode(text.get());
    text.$((value) => {
      el.textContent = value;
    });
    return el;
  }
};

/**
 * Function to create a heading element
 * @param {*} style
 * @param {HTMLElement[]} children
 * @returns {HTMLHeadingElement}
 */

export const Heading = (style, children) => Elem("h1", style, [...children]);

/**
 *
 * @param {string} text
 * @param {(this: GlobalEventHandlers, ev: MouseEvent) => any} onClick
 * @param {*} style
 * @returns {HTMLButtonElement}
 */

export const Button = (text, onClick, style) => {
  const el = document.createElement("button");
  el.textContent = text;
  el.style = style;
  el.onclick = onClick;
  return el;
};

/**
 *
 * @param {string} placeholder The Srting to be displayed in the input field
 * @param {*} style Style object for the input element
 * @returns {HTMLInputElement}
 */

export const TextInput = (placeholder, style) => {
  const el = document.createElement("input");
  el.placeholder = placeholder;
  el.style = style;
  return el;
};
/**
 *
 * @param {*} style Style object for the div element
 * @param {HTMLElement[]} children HTML elements to be appended to the div element
 * @returns {HTMLDivElement}
 */
export const Div = (style, children) => {
  const el = document.createElement("div");
  for (const [key, value] of Object.entries(style)) {
    el.style[key] = value;
  }
  children.forEach((child) => el.appendChild(child));
  return el;
};

/**
 *
 * @param {string} src The source of the image
 * @param {*} style Style object for the img element
 * @returns {HTMLImageElement}
 */
export const Image = (src, style) => {
  const el = document.createElement("img");
  el.src = src;
  el.style = style;
  return el;
};

/**
 *
 * @param {string} text The text to be displayed in the paragraph element
 * @param {*} style Style object for the paragraph element
 * @returns {HTMLParagraphElement}
 */
export const Paragraph = (text, style) => {
  const el = document.createElement("p");
  el.textContent = text;
  el.style = style;
  return el;
};

/**
 * @param {HTMLElement} element The element to be rendered
 * @param {HTMLElement} container The container element
 */
export const render = (element, container) => {
  container.appendChild(element);
};
