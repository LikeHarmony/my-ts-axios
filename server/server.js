const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extened: false}));
app.use(bodyParser.json());

router.get('/api/base/get', function(req,res) {
  res.json({
    msg: 'hell world,你成功的获取了我'
  })
})

router.get('/api/handleRequestURL/get', function(req, res) {
  res.json(req.query)
})

router.post('/api/handleRequestBody/post', function(req, res) {
  res.json(req.body)
})


app.use(router)

const port = process.env.PORT || 3000
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})