const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
  host: 'redis-server',
})
client.set('visits', 0)

app.get('/', (req, res) => {
  process.exit(0)
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set('visits', parseInt(visits) + 1)
    if (err) {
      console.log('Error: ', err)
    }
  })
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})