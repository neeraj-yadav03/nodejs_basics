const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/:id', (req, res) => {
    
    const { num1, num2, opt } = req.body


    // const localNum1 = req.body.num1
    // const localNum2 = req.body.num2
    // const localOpt = req.body.opt

    // let ans
    // if(localopt == '+'){
    //     ans = localNum1-localNum2
    // }
    // if(localopt = "-"){
    //     ans = localNum1-localNum2
    // }


    const { id } = req.params

    console.log(req.params)
    console.log(req.body)
    
    // let ans
    // if(req.body.opt == '-'){
    //     ans = req.body.num1 - req.body.num2
    // }
    // if(req.body.opt == '+'){
    //     ans = req.body.num1 + req.body.num2
    // }

    if(opt == '-'){
        ans = num1 - num2
    }
    if(opt == '+'){
        ans = num1 + num2
    }

    res.send({ans})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})