Key points of learning:

1 - Using the <script> </script> element is for loading javascript into my html file.

2 - to connect between my html file and the specified js file I use this:
<script src="./script.js"></script>

3 - Creating a button element in html is using <button> </button> in the first button I must attach the element to some id so i later JS it or CSS it.

4 - JavaScript interacts with HTML using DOM (Document Object Model). It is a tree of objects that represents the HTML.

5 - Intresting fact about connecting the js file with the html file, the location is critical so I should always place it on the bottom of the body element.

6 - 
A. **`h1` (Tag Selector)**: Styles **all elements** of that tag (e.g., all `<h1>`). Use for consistent global styling of that tag.

B. **`.h1` (Class Selector)**: Styles **multiple elements** with the same class. Use for reusable styles across different tags.

C. **`#h1` (ID Selector)**: Styles **one unique element**. Use for specific, unique element styling.

7 - Dot Notation: Used to set properties of an element, such as onclick.
Example: button1.onclick = goStore; 

will call the goStore function when button1 is clicked.
No Declaration Needed: button1 is already declared, so you only need to set the onclick property.

8 - The innerText property controls the text that appears in an HTML.
Example code: <p id="info">Demo content</p> 

Example use of innerText: 
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 

9 - There are two ways to access the properties of an object: 
A. dot notation (.) 
B.  bracket notation ([]), similar to an array.

10 - using the shift method is no needing any index its removing the first element from an array.