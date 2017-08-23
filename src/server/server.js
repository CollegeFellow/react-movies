import Koa from 'koa'
import Router from 'koa-router'
import path from 'path'
import fs from 'fs'

const app = new Koa()
const router = new Router()

app.use(async function(ctx, next) {
    console.log("1")
    await next()
    console.log("2")
})

router.get('/', async function(ctx, next) {
    ctx.type = 'text/html'
    let fsResponse = fs.readFileSync(path.resolve(__dirname,'../client/views/index.html'), { 'encoding': 'utf8' }, function(err, data) {
        if (err) return reject(err)
        else return data
    })
    ctx.body = fsResponse
})

router.get('/about', async function(ctx, next) {
    ctx.type = 'text/html'
    let fsResponse = fs.readFileSync(path.resolve(__dirname,'../client/views/about.html'), { 'encoding': 'utf8' }, function(err, data) {
        if (err) return reject(err)
        else return data
    })
    ctx.body = fsResponse
})

app.use(router.routes())

app.listen(3000, () => (console.log('Server is listening on port 3000, goto http://localhost:3000 ')))