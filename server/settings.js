/**
 * Created by dell on 2017/5/14.
 */
let md5 = require('./md5.js')
let user = 'huang'
let pass = md5('huang')
let avatar = 'avatar.jpg'
let intro = 'Never too old to learn'
let nickname = 'VueBlog'
module.exports = {
    dbUrl: 'mongodb://localhost:27017/vueblog',
    user,
    pass,
    avatar,
    intro:intro,
    nickname:nickname
}