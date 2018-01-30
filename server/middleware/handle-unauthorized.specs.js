const config = require('../../config')
const handleUnauthorized = require('./handle-unauthorized')

describe('#handleUnauthorized', function() {
  let err, req, res, next

  beforeEach(() => {
    req = {
      get: sinon.stub(),
    }
    res = {
      redirect: sinon.stub(),
    }
    next = sinon.spy()
  })

  it('should be able to process errors with a code', () => {
    err = { code: 1234 }

    handleUnauthorized(err, req, res, next)

    expect(next.calledWith(err)).to.be.true
  })

  it('should be able to process errors with a status', () => {
    err = { status: 1234 }

    handleUnauthorized(err, req, res, next)

    expect(next.calledWith(err)).to.be.true
  })

  context('when the error status is not a 401', () => {
    it('should pass the error on through the next callback', () => {
      err = { code: 1234 }

      handleUnauthorized(err, req, res, next)

      expect(next.calledWith(err)).to.be.true
    })
  })

  context('when the error status is a 401', () => {
    beforeEach(() => {
      err = { code: 401 }
      req.originalUrl = '/some/url'

      handleUnauthorized(err, req, res, next)
    })

    it('should redirect to the login page', () => {
      const baseUrl = config.baseUrl.replace(/\//g, '%2F').replace(/:/g, '%3A')
      const expectedUrl = `${config.externalContexts.auth.signinUrl}/?redirectTo=${baseUrl}%2Fsome%2Furl`
      expect(res.redirect.called).to.be.true
      expect(res.redirect.firstCall.args[0]).to.eql(expectedUrl)
    })
  })
})
