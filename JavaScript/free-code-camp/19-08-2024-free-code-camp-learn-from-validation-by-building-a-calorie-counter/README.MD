Key points for learning:
1 - 
### Explanation:
- **Regular Expressions (RegEx)** in JavaScript are patterns used to match character combinations in strings.
- Think of it as a way to search through text and find patterns, like searching for specific words, numbers, or characters.

### Basic Syntax:
1. **Literal Notation**: `/pattern/`
2. **Constructor Function**: `new RegExp('pattern')`

### Example:
Imagine you want to check if a string contains the word "hello":

```javascript
let text = "hello world";
let regex = /hello/;  // This pattern looks for the word "hello"
let result = regex.test(text);  // `test()` returns true if it finds a match

console.log(result);  // Output: true
```

### Explanation of the Example:
- `/hello/` is the RegEx pattern. It's looking for the exact word "hello".
- `test()` is a method that checks if the pattern exists in the text.
- In this case, `"hello world"` contains "hello", so `result` is `true`.

2 - using the regex pattern to identify potential cases to be removed with the i, it match even pattern case-isensitive such as caps lock cases. example is:
const regex = /e/i; 

3 - to match any number I can use the class [0-9] which match any digit between 0 and 9
example is:
const regex = /[0-9]e[0-9]/i | additionally adding the + sign after the digit square will match a pattern that occures one or more times: const regex = /[0-9]+e[0-9]+/i;

4 - There is a shorthand character class to match any digit: \d.
example is:  const regex = /\d+e\d+/i;

5 - The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation.
