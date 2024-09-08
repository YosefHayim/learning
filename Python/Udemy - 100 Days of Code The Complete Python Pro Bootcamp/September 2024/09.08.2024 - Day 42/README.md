1. **HTML Boilerplate**

   - The basic structure of an HTML document, starting with `<!DOCTYPE html>` to declare HTML5.
   - The `<html></html>` tags enclose all content, with the head and body nested inside.

2. **Head Element**

   - Contains metadata like character encoding (`<meta charset="UTF-8">`) and the document title (`<title></title>`), displayed in the browser tab.

3. **Body Element**

   - Contains all the visible content of the website, such as text, images, and lists.
   - The main content is nested between the opening and closing `<body>` tags.

4. **Nesting and Indentation**

   - Proper indentation is key to keeping code readable and understanding which elements are inside others (e.g., `<head>` inside `<html>`).

5. **Meta Tags and Viewport**

   - Meta tags control various properties like encoding and scaling for different devices.

6. **Shortcuts in VS Code**

   - Typing `!` followed by Enter in a .html file will generate the HTML boilerplate, saving time.

7. **Ordered and Unordered Lists**

   - **Unordered Lists (`<ul>`)**: Used for items without a specific order, displaying bullet points.
   - **Ordered Lists (`<ol>`)**: Used when items need to follow a sequence, displaying numbers.
   - Lists are created using list item tags (`<li>`) inside either `<ul>` which stands for unordered list or `<ol>` which stands for ordered list.

8. **Practical Example**

   - HTML lists are widely used, from shopping lists to websites like "FBI's Most Wanted."
   - Exercise: Practice creating a recipe website with both ordered and unordered lists for ingredients and instructions.

9. **Line Preferences**

   - List items can be written on a single line for simplicity or split over multiple lines for clarity. This is a matter of personal preference and organization style.

10. **Anchor Elements**

- Anchor elements are used to create hyperlinks in HTML, linking one webpage to another.
- They are written with an opening tag `<a>` and a closing tag `</a>`.
- Attributes are essential to make an anchor element functional. The key attribute is the `href` attribute, which specifies the URL the link points to.
- Without the `href` attribute, the anchor element won’t be an active hyperlink, and clicking on it will do nothing.
- The `href` attribute is written inside the opening `<a>` tag, like this: `<a href="https://example.com">Link Text</a>`.
- Global attributes like `draggable` can also be applied to anchor elements, allowing them to be dragged or interacted with in other ways.
- Anchor tags can be styled automatically when the `href` is present (e.g., blue underlined text).
- Anchor elements can be nested inside list items to create navigable lists of links.
- VS Code and other code editors often provide auto-completion for attributes like `href`, making it easier to write and format anchor tags.
- Adding the attribute `start="num"` to the opening `<ol>` tag will start the list from the specified number.
- `<img src="url" alt="" />` allows me to add a picture from a url. the alt is the shortcut of alternative text description
