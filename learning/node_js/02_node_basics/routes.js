const fs = require('fs')

const requestHandler = (req, res) => {
  if (req.url === '/') {
    // log request
    console.log(req)

    // will exit the event loop and stop the server after first request
    // process.exit();

    // set header for the response
    res.setHeader('Content-Type', 'text/html');

    // write html
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><label>Name</label>')
    res.write('<input type="text" name="message"><button type="submit">Send</button>')
    res.write('</form></body>')

    // end the response
    return res.end()
  } else if (req.url === '/message' && req.method === 'POST') {
    // write dummy data to a file
    // sync / blocking
    fs.writeFileSync('dummy.tmp', 'DUMMY') 
  
    // stream of chuncks of data, through event listener
    const data = []
    req.on('data', (chunk) => {
      console.log(chunk)
      data.push(chunk)
    })
  
    // end of stream, through event listener
    req.on('end', () => {
      const parsed = Buffer.concat(data).toString() // convert to string
      const message = parsed.split('=')[1]
  
      // async / non-blocking
      fs.writeFile('message.tmp', message, (err) => {
        // redirect to homepage
        res.statusCode = 302
        res.setHeader('Location', '/')
  
        // no more data to send
        return res.end()
      }) 
      console.log(parsed)
    })
  } else {
    res.end('<h1>Page not found</h1>')
  }
}

// a way of exporting a function
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }

// also
// module.exports.handler = requestHandler

// another way of exporting a function
exports.handler = requestHandler
