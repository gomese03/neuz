# Neuz - News Aggregator App

Neuz is a news aggregator application that fetches and displays news from multiple sources using the News API.

## Getting Started

Follow the instructions below to set up the project on your local machine.

### Prerequisites
#### 1. Install latest node
- Node.js (Latest version): You can download it from [Node.js Download Page](https://nodejs.org/en/download/current)
#### 2. Craete API key
- Generate a new API key from https://newsapi.org/
- Add a new file named `.env` and place it in the backend folder
- add the following line in the file: `API_KEY=<YOUR_API_KEY_HERE>`
- save the changes

### Installation Instructions

#### 1. Clone the Repository
First, pull the source code to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/gomese03/neuz.git
```
#### 2. Run backend
- navigate to the `/backend` folder in a command line terminal
- run `npm ci` to install all required dependencies
- to start the server run `node index.js`

#### 3. Run frontend
- navigate to `/frontend/neuz` folder using command line terminal
- run `npm ci` to install requied dependencies
- run `npm start` to start the frontend
- access the UI with `http://localhost:3000` in the browser


### Ignore below lines
- backend
- node index.js
- curl http://localhost:3001/api/sources
