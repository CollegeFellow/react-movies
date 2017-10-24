import Router from 'koa-router'
import path from 'path'
import fs from 'fs'


const router = Router()

let homePage = async function(ctx, next) {
    await ctx.render('index')
}

let aboutPage = async function(ctx, next) {
    await ctx.render('about')
}

module.exports = (app) => {
	router.get('/', 		homePage	)
	router.get('/about', 	aboutPage	)

	app.use(router.routes())
}