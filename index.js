const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const path = require('path')
const static_file = path.join(__dirname, "public")
const {sequelize} = require('./models')

const app = express();

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/application')
// app.use("/images", express.static(img_file))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

const routes = require('./routes');
app.use(routes);
app.use(express.json())
app.use(express.static(static_file))


// app.get("/", (req, res)=>{
//   res.render("index", {title: "something"})
// })


app.listen({port: 3000}, async()=>{
    console.log("server is up")
    await sequelize.authenticate()
    console.log('connected')
  })