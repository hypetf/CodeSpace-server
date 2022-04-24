<center>
   <img src="./Logo.png" width=250/><br/><br/>
</center>


# CodeSpace
1. <a href="#about">About section</a>
2. <a href="#start">Getting started section</a>
3. <a href="#todo">ToDo List section</a>

<span id="about"></span>

## About
CodeSpace is a Team Project lead by a group of Manchester Metropolitan University students.<br/>
This project aims to create a space for software developer to learn and improve any Java skills.<br/>
<br/><br/>
This is the server of the MERN Web Application.<br/>
This project was created with Express as its backend.

<span id="start"></span>

## Getting Started
### Prerequisites
To run this project locally, you will need to have NPM and NodeJS installed.<br/>
NPM comes automatically with NodeJS.<br/>
This project is developed on NodeJS v16.14.2.

* [Download NodeJS](https://nodejs.org/en/download/)

### Setup

1. Clone the repository inside your project folder.
   ```sh
   git clone https://github.com/hypetf/CodeSpace-server.git
   ```
2. Install all required npm packages by running:
   ```sh
   npm install
   ```
3. Create an `.env` file with the following variables:
   ```sh
   PORT=5000
   DB_URI=_your_URI_here
   ```
4. Get the server running with:
   ```sh
   npm run server
   ```

Server will be live on:
   ```sh
   http://localhost:5001/
   ```

<span id="todo"></span>

## ToDo List
### Research
- Frontend with ReactJS
- Backend with Express in NodeJS
- How does a compiler work

### Frontend
- [x] Setup client and routing
- [x] Setup themes
- [x] Setup light and dark mode
- [x] Complete Home Page
- [x] Complete Login Page
- [ ] Complete Sign up Page
- [ ] Complete Task Page

### Backend
- [x] Setup Server with Express
- [x] Setup basic routes
- [x] Setup REST API and a test route
- [x] Setup MongoDB Database
- [x] Setup Google oAuth
- [x] Setup GitHub oAuth
- [ ] Setup Login with email and password
- [ ] Setup Sign up with email and password

### Testing
- [ ] Ensure consistency in design and themes
- [ ] Ensure responsiveness on different screen sizes
- [ ] Verify website performance is optimal
- [ ] Verify website SEO is optimal