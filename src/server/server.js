import Koa from 'koa'
import path from 'path'
import fs from 'fs'

const app = new Koa()

var readFileThunk = function(src) {
    console.log('readFileThunk was called')
    return new Promise(function(resolve, reject) {
        fs.readFile(src, { 'encoding': 'utf8' }, function(err, data) {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

app.use(async function(ctx) {
    ctx.type = 'text/html'
    let fsResponse = fs.readFileSync(path.resolve(__dirname,'../client/index.html'), { 'encoding': 'utf8' }, function(err, data) {

    	console.log('Data : ', data)

        if (err) return reject(err)
        else return data
    })
    ctx.body = fsResponse
})

app.listen(3000, () => (console.log('Server is listening on port 3000, goto http://localhost:3000 ')))