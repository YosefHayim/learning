## Day 45: Key Takeaways

1. **What am I going to build today?**  
   - Web scraping using the BeautifulSoup library.

2. **What is BeautifulSoup?**  
   - BeautifulSoup is a Python library used for parsing HTML and XML documents.  
   - It helps extract specific data from web pages and organizes it in a format that is easy to work with.

3. **Is web scraping legal?**  
   - Web scraping is legal when scraping publicly available, non-copyrighted content. However, scraping copyrighted content or data behind authentication is illegal.

4. **Principles to follow when scraping websites:**  
   - Always check the website's `robots.txt` file to see if scraping is allowed.  
   - Respect the website's crawl-delay instructions to avoid overloading their server.

5. **Cannot scrape data that requires authentication:**  
   - Scraping data from websites that require a login (e.g., Facebook, LinkedIn) is generally illegal because it violates user agreements.

6. **How to know if a website allows scraping?**  
   - Check the `robots.txt` file by appending `/robots.txt` to the website's URL (e.g., `www.example.com/robots.txt`). This file indicates the allowed or disallowed paths for scraping.