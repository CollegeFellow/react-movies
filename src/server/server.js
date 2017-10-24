import Koa from 'koa'
import path from 'path'
import fs from 'fs'
import react from 'koa-react-view'
import router from '../routes'

const app = new Koa()
const viewpath = path.join(__dirname, '../client/views')
const assetspath = path.join(__dirname, '../dist');

react(app, {
  views: viewpath
})

router(app)

app.listen(3000, () => (console.log('Server is listening on port 3000, goto http://localhost:3000 ')))