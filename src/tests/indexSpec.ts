import app from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('Test endpoint responses', () => {
  it('gets the resizeImage endpoint', async () => {
    const response = await req.get(
      '/resizeImage/?width=150&height=250&filename=santamonica'
    )
    expect(response.status).toBe(200)
  })
})
