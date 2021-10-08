const http = require('http');

const students = [
  { name: 'Calvin' },
  { name: 'Camron' },
  { name: 'Johnny' }
]

function serverListener(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
    res.setHeader('Content-Type', 'text');
    res.write('Welcome!');
  } else if (url === '/students' && method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(students));
  }
  
  res.end();
}

const server = http.createServer(serverListener);
server.listen(3000);

console.log('listening Port 3000...');
