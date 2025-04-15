export function sanitizeHTML(input: string): string {
  const temp = document.createElement('div');
  temp.textContent = input;
  return temp.innerHTML;
}

export function sanitizeHTMLRichContent(input: string): string {
  const temp = document.createElement('div');
  temp.innerHTML = input;

  const allowedTags = ['span', 'p', 'strong', 'em', 'a', 'ul', 'li', 'ol', 'br'];
  const allowedAttributes = ['class'];

  function sanitizeElement(element: Element) {
    if (!allowedTags.includes(element.tagName.toLowerCase())) {
      element.remove();
      return;
    }

    Array.from(element.attributes).forEach((attr) => {
      if (!allowedAttributes.includes(attr.name)) {
        element.removeAttribute(attr.name);
      }
    });

    Array.from(element.children).forEach(sanitizeElement);
  }

  Array.from(temp.children).forEach(sanitizeElement);

  return temp.innerHTML;
}
