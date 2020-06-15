import express, { Request, Response } from 'express'
import next from 'next'
import LRUCache from 'lru-cache'
import { ParsedUrlQuery } from 'querystring'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024 /* cache size will be 100 MB */,
  maxAge: 1000 * 60 * 60 /* cache time out is 1 hr */,
})

app.prepare().then(() => {
  const server = express()

  server.get('/_next/*', (req: Request, res: Response) => {
    /* serving _next static content using next.js handler */
    handle(req, res)
  })

  server.get('*', (req: Request, res: Response) => {
    /* serving page */
    return renderAndCache(req, res)
  })

  /* starting server */
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) // tslint:disable-line
  })
})

async function renderAndCache(req: Request, res: Response): Promise<void> {
  console.log(req.url) // tslint:disable-line
  const key = `${req.url}`

  // Response page from cache first
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }
  const puq = req.query as ParsedUrlQuery

  try {
    const html = await app.renderToHTML(req, res, req.path, puq)

    // Skip the cache when something wrong
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, req.path, puq)
  }
}
