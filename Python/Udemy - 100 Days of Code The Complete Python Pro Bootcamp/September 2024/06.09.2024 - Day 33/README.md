Key points of day 33:
1 - Learning about Application Programming Interface (API), building ISS Tracker.  
2 - APIs are a set of commands, functions, protocols, and objects that programmers use to create software or interact with external systems.  
3 - An API is the interface between my program/computer and an external system.  
4 - API system works by sending requests for data and receiving responses. It's like a menu where my computer is my tummy, and the external system (kitchen) sends what we ordered.  
5 - API endpoint is the location of the data stored in external systems.  
6 - JSON (JavaScript Object Notation) was originally made for JavaScript.  
7 - Types of API responses to my requests:  
   - 1XX: Hold on, this is not final.  
   - 2XX: Success, here is the data you expected.  
   - 3XX: Redirect, you don't have permission.  
   - 4XX: Client error, the request is invalid.  
   - 5XX: Server error, the server failed.  
8 - API endpoint refers to the basic URL of the external system.  
9 - API parameters are optional and depend on the request I want to make.  
10 - API parameters tell me how to format the request to get a 200 (OK) response.  
11 - API Authentication: Some APIs require a key or token to access the data. Without it, I’ll get a 401 (Unauthorized) or 403 (Forbidden) response.  
12 - Rate Limiting: APIs limit how many requests I can make in a specific time (e.g., 100 per minute). Exceeding this gives a 429 (Too Many Requests) response.  
13 - Error Handling: If I get a 4XX or 5XX error, I need to check my request or retry later. I should handle these errors properly in my program.
