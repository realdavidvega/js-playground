
/**
 * Core Modules
 * http => launch server, send requests
 * https => launch ssl server
 * fs, path, os...
 */

// or on ES Modules
// import http from 'http';
const http = require('http')

// import from a file
const routes = require('./routes')

// function for liistening to requests
function requestListener(req, res) {}

// pass function reference as arg
http.createServer(requestListener)

// passing anonymous function or arrow function as arg
const server = http.createServer(routes.handler)

// keep it running for listen for incoming requests
// event loop, as long as are event listeners registered
server.listen(3000)

// single thread
// handles multiple requests thanks to event loop, started by default
// it handles event callbacks

// long-taking operations are sent to worker pool
// it does the heavy lifting and runs in different threads (detached from main thread)
// will trigger a callback when it's done, listened by event loop

// event loop
// 1. checks timers, like setTimeout, setInterval
// 2. checks pending callbacks, like IO-related, or callbacks that were deferred
// 3. checks poll, to retrieve new IO events or execute callbacks
// 4. check setImmediate, callbacks
// 5. execute close event callbacks
// 6. process exit if no more pending callbacks
