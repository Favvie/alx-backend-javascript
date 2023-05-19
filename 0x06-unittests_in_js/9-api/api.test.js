const request = require('request')
const {expect} = require('chai')
const { response } = require('express')

const request = require('request')
const {expect} = require('chai')

describe('index page testing', function () {
    it('should return welcome to payment on get "/"', function (done) {
        request.get('http://localhost:7865/', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Welcome to the payment system')
            done()
        })
    })
})

describe('testing cart page', function () {
    it('should return 404 if :id is not a number "/"', function (done) {
        request.get('http://localhost:7865/cart/favour', function (error, response, body) {
            expect(response.statusCode).to.be.equal(404)
            done()
        })
    })
    it('should return 200 if id is a number', function (done) {
        request.get('http://localhost:7865/cart/2', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Payment methods for cart 2')
            done()
        })
    })
})