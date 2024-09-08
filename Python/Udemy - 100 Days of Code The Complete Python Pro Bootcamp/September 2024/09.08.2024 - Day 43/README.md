## Day 43: Key Takeaways

1. **What does CSS stand for?**

- **CSS**: Stands for Cascading Style Sheets. It allows you to style your HTML and make websites visually appealing. It separates **content** (HTML) from **style** (CSS), which keeps the code more organized and maintainable.
- **Cascading**: The term "cascading" refers to the order in which styles are applied, starting from more general rules to more specific ones. For example, a global style for all headings can be overridden by a more specific rule for a single `<h1>` element.

- **Style Sheet**: Similar to how HTML is a **markup language** that structures content, CSS is a **style language** that controls how elements should look on the page.

- **History**: Initially, HTML was used to structure and style content, which resulted in cluttered, hard-to-maintain code. Before CSS, developers used tags like `<font>` to apply styles, mixing content and presentation.

- **CSS Introduction**: CSS was introduced in 1996 to solve this problem by allowing a clear separation between content (HTML) and presentation (CSS), making websites cleaner and easier to maintain.

- **Example**:
  Without CSS:
  ```html
  <h1>Title</h1>
  <p>This is a simple paragraph.</p>
  ```
  With CSS:
  ```html
  <h1 style="color: blue;">Title</h1>
  <p style="font-size: 16px;">
    This is a simple paragraph with larger font size.
  </p>
  ```

2. **How to Add CSS to a Website**

- **Inline CSS**:  
  CSS is applied directly within an HTML element using the `style` attribute. This method is useful for quickly styling single elements but should be avoided for large-scale projects due to redundancy. Example:

  ```html
  <h1 style="color: blue;">This is styled in blue</h1>
  ```

- **Internal CSS**:  
  CSS is placed inside the `<style>` tag in the `<head>` section of the HTML file. This method is useful when you need to style a single document. Example:

  ```html
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  ```

- **External CSS**:  
  CSS is placed in a separate file (e.g., `styles.css`) and linked to the HTML file via a `<link>` tag in the `<head>` section. This is the best approach for larger projects and multi-page websites. Example:
  ```html
  <link rel="stylesheet" href="styles.css" />
  ```
  In the external `styles.css` file:
  ```css
  h1 {
    color: green;
  }
  ```

3. **Notes from the Lesson**

- Always include the `rel="stylesheet"` attribute when linking an external CSS file. Without this, the file won't be applied to the HTML document.
- **CSS Selector**: CSS selectors are used to target HTML elements and apply styles to them. You can target elements by their tag name, class, ID, or attributes. For example:

  ```css
  h1 {
    color: blue;
  }
  ```

- **Class Selector**: The class selector starts with a dot (`.`) and targets elements with a specific class attribute. Example:

  ```css
  .intro {
    font-size: 18px;
  }
  ```

  HTML:

  ```html
  <p class="intro">This is a paragraph with class 'intro'.</p>
  ```

- **ID Selector**: The ID selector uses a hash symbol (`#`) and targets elements with a unique `id` attribute. IDs should be unique to each element. Example:

  ```css
  #main {
    background-color: yellow;
  }
  ```

  HTML:

  ```html
  <div id="main">This is the main section.</div>
  ```

- **Attribute Selector**: Selects elements based on the presence or value of an attribute. Example:

  ```css
  input[type="text"] {
    border: 2px solid black;
  }
  ```

  This targets all `<input>` elements where the `type` attribute is `"text"`.

- **Universal Selector**: The universal selector (`*`) selects all elements on the page. For example:
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```
  This removes all margin and padding from every element on the page, which is commonly used for resetting default browser styles.
