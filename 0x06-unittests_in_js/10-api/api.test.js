const request = require('request')
const {expect} = require('chai')
const { response } = require('express')

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
    it('should return 404 if id is not a number "/"', function (done) {
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

describe('available payment endpoint', function () {
    it.only('should return 200 if available payments return a json', function (done) {
        request.get('http://localhost:7865/available_payments', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
})

describe('Login', function () {
  it("check correct status code for request that's sent properly", function (done) {
    const opt = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        userName: 'JOE'
	    }
    };
    request.post(opt, function (err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
    });
  });
  it("check correct content for request that's sent properly", function (done) {
    const opts = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        userName: 'JOE'
	    }
    };
    request.post(opts, function (err, res, body) {
	    if (err) {
        expect(res.statusCode).to.not.equal(200);
	    } else {
        expect(body).to.contain('Welcome JOE');
	    }
	    done();
    });
  });
  it("check correct status code for request that's not sent properly", function (done) {
    const op = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        usame: 'JOE'
	    }
    };
    request.post(op, function (err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
    });
  });
});