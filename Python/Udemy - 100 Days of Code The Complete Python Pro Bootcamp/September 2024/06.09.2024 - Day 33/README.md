## Day 33: Key Takeaways

1. **Learning About APIs (Application Programming Interface)**  
   - Focused on building an ISS Tracker and understanding how APIs work.

2. **What is an API?**  
   - APIs are sets of commands, functions, protocols, and objects that allow interaction with external systems.

3. **API as an Interface**  
   - An API serves as the interface between my program and an external system, facilitating communication.

4. **How APIs Work**  
   - APIs operate by sending requests for data and receiving responses, much like ordering from a menu and receiving what you ordered.

5. **API Endpoints**  
   - API endpoints are the locations where data is stored in external systems.

6. **JSON and APIs**  
   - JSON (JavaScript Object Notation), originally designed for JavaScript, is widely used in API responses.

7. **API Response Codes**  
   - Types of API responses:
     - **1XX:** Information, still processing.
     - **2XX:** Success, data received.
     - **3XX:** Redirect, permission required.
     - **4XX:** Client error, invalid request.
     - **5XX:** Server error, server failure.

8. **API Parameters**  
   - Parameters help format requests to retrieve specific data from the endpoint.

9. **API Authentication**  
   - Some APIs require a key or token for access. Without proper authentication, you'll receive 401 (Unauthorized) or 403 (Forbidden) errors.

10. **Rate Limiting**  
    - APIs often limit the number of requests you can make in a certain timeframe, with a 429 (Too Many Requests) error if exceeded.

11. **Error Handling**  
    - Properly handle 4XX or 5XX errors in your program by checking the request or retrying later.