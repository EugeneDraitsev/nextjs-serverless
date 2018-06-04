const serverless = require('serverless-http')
const express = require('express')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

exports.handler = (evt, ctx, callback) => {
  app.prepare()
    .then(() => {
      const server = express()

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      const handler = serverless(server)
      return handler(evt, ctx, callback)
    })
}

