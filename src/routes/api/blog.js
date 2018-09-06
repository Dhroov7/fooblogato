/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const models = require('../../db/models').models

route.get('/my', (req,res) => {

})

route.get('/:id', (req,res) => {

})

route.post('/add', (req,res) => {

})

route.patch('/:id', (req,res) => {

})

route.delete('/remove/:id' ,(req,res) => {

})

module.exports = route