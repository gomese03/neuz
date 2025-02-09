"# neuz" 

1. Pull the source code
  git clone https://github.com/gomese03/neuz.git
2. Craete API key
  Generate a new API key from https://newsapi.org/
  Add a new file names .env and place it in the backend folder
  add the below line:
  API_KEY=<YOUR_API_KEY_HERE>
  save the changes
3. Install dependencies
  Install the latest version of node from https://nodejs.org/en/download/current
4. Run backend
  navigate to the /backend in a command line terminal
  run "npm ci" to install all required dependencies
  to start the server run "node index.js"
5. Run frontend
  navigate to /frontend/neuz using command line terminal
  run "npm start" to start the frontend
  access the UI with localhost:3000 in the browser


*Ignore below lines*
backend
node index.js
curl http://localhost:3001/api/sources
