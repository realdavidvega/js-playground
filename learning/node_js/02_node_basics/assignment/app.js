const fs = require('fs')
const http = require('http')

const requestHandler = (req, res) => {
  if (req.url === "/") {
    // set header for the response
    res.setHeader('Content-Type', 'text/html');

    // write html, greet the user
    res.write('<html>')
    res.write('<head><title>Greetings</title></head>')
    res.write('<body><h1>Hello, World!</h1>')

    // form to /create-user, for each write html
    res.write('<form action="/create-user" method="POST"><label>Name</label>')
    res.write('<input type="text" name="username"><button type="submit">Send</button>')
    res.write('</form>')
    
    res.write('</body>')
    res.write('</html>')

    // end
    return res.end()

  } else if (req.url === "/users") {

    // set header for the response
    res.setHeader('Content-Type', 'text/html')

    // write html
    res.write('<html>')
    res.write('<head><title>Users</title></head>')
    res.write('<body><ul>')
    res.write('<li>User 1</li>')
    res.write('<li>User 2</li>')
    res.write('<li>User 3</li>')
    res.write('</ul></body>')
    res.write('</html>')

    // end
    return res.end()
  } else if (req.url === '/create-user' && req.method === 'POST') {
    // parse incoming data and log it to console
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody.split('=')[1])
    })

    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()

  } else {
    res.end('Page not found')
  }
}

const server = http.createServer(requestHandler)
server.listen(3000)
