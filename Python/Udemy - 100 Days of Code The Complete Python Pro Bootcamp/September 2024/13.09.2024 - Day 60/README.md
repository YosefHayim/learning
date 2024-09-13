## Day 60: Key Takeaways

1. **Today's Goals**
   - Optimize the contact page from the previous project on day 59. 

2. **Things I learned or concluded from today's lesson**
   - Contact pages on websites generally use the `GET` method.
     - Example: When you visit a contact page, the form fields are displayed to you, but no data is being sent yet. This happens with a `GET` request, which just retrieves the page.
   
   - To make the contact page dynamic and send data (such as messages) to logs or to a specific email via an API, the `POST` method is used. This allows us to send data somewhere else.
     - Example: After filling out a form and hitting submit, the browser sends the form data to the server using `POST`, where it can be processed (e.g., sending an email or storing it in a database).

   - I can implement logic using `if`, `elif`, and `else` in app routes by determining which method the server is receiving using `request.method`. This will give the method (e.g., `GET`, `POST`) that the user is sending.
     - Example: In a Flask app, you could write logic like:
     ```python
     @app.route('/contact', methods=['GET', 'POST'])
     def contact():
         if request.method == 'POST':
             # handle the submitted form data
         else:
             # just display the form
     ```
    - Jinja allows us to insert dynamic content (like user input or data from a database) into HTML templates before sending them to the user. This is somewhat like how JavaScript manipulates the DOM directly in the browser, but Jinja does it server-side before the page is sent to the browser.
