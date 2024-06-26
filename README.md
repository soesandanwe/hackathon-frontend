# Angular 14 JWT Authentication with Web API and HttpOnly Cookie example

Build Angular 14 JWT Authentication & Authorization example with Web Api, HttpOnly Cookie and JWT (including HttpInterceptor, Router & Form Validation).
- JWT Authentication Flow for User Registration (Signup) & User Login
- Project Structure with HttpInterceptor, Router
- Way to implement HttpInterceptor
- How to store JWT token in HttpOnly Cookie
- Creating Login, Signup Components with Form Validation
- Angular Components for accessing protected Resources
- How to add a dynamic Navigation Bar to Angular App
- Working with Browser Session Storage

## Flow for User Registration and User Login
For JWT – Token based Authentication with Web API, we’re gonna call 2 endpoints:
- POST `api/auth/signup` for User Registration
- POST `api/auth/signin` for User Login

You can take a look at following flow to have an overview of Requests and Responses that Angular 14 JWT Authentication & Authorization Client will make or receive.

![angular-14-jwt-authentication-authorization-flow](angular-14-jwt-authentication-authorization-flow.png)

## Angular JWT App Diagram with Router and HttpInterceptor
![angular-14-jwt-authentication](angular-14-jwt-authentication.png)