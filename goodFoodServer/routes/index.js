// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This route renders your reciepe name. Access it by opening localhost:3000/receipe/PineappleCake */
router.get('/recipe/:recipeName', (req, res) => {
  res.render('recipe', { text: 'This is the recipe: ' +  req.params.recipeName})
  console.log("test")
})


/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
  router.get('/', (req, res) => {
    res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
  })


module.exports = router
