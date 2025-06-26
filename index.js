// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("WELCOME TO NODE JS SERVER");
//   res.end();
// });
// server.listen(3000, () => {
//   console.log("Server is Created");
// });

// const http = require('http');
// const PORT=process.env.PORT;
// require('dotenv').config();


// const APP_NAME = process.env.APP_NAME || 'NodeApp';
// const server = http.createServer((req, res) => {
//     if (req.url === '/text') {
//         // Plain Text Response
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello! This is a plain text response.');
//     } 
//     else if (req.url === '/html') {
//         // HTML Response
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <!DOCTYPE html>
//             <html>
//                 <head>
//                     <title>HTML Response</title>
//                 </head>
//                 <body>
//                     <h1>Hello from HTML response!</h1>
//                     <p>This is served using Node.js</p>
//                 </body>
//             </html>
//         `);
//     } 
//     else if (req.url === '/json') {
//         // JSON Response
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const jsonData = {
//             name: 'Node.js',
//             type: 'JSON response',
//             status: 'Success'
//         };
//         res.end(JSON.stringify(jsonData));
//     } 
//     else {
//         // 404 Not Found
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 - Not Found');
//     }
// });

// server.listen(PORT, () => {
//     console.log('Server is running at http://localhost:1000');
// });
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   console.log("welcome to express");
//   res.send("Hello from Express!"); 
// });

// app.listen(3000, () => {
//   console.log("Server is created on port 3000");
// });



// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send('<h1>hello </h1>');
// });

// app.get('/text', (req, res) => {
//   res.type('text/plain');
//   res.send('This is plain text.');
// });

// app.get('/json', (req, res) => {
//   res.json({ message: 'Hello from JSON!', status: 'success' });
// });

// app.use((req, res) => {
//   res.status(404).send('404 - Page not found');
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const app = express();
const connectDB=require('./config/db')
const expenseRoutes=require('./routes/expenseRoutes')
const cors=require('cors')
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use(cors());
app.use('/api',expenseRoutes);
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the JSON Page</h1>');
});

app.get('/text', (req, res) => {
  res.type('text/plain');
  res.send('This is plain text.');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello from JSON!', status: 'success' });
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
