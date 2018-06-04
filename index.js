const serverless = require('serverless-http')
const express = require('express')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

function createServer() {
  const server = express()

  server.get('*', (req, res) => {
    // return app.render(req, res, req.url, req.query)
    return handle(req, res)
  })

  return server
}

const appServer = createServer()
const handler = serverless(appServer)
exports.handler = (evt, ctx, callback) => handler(evt, ctx, callback)
