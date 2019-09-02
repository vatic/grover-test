const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const logger = require('winston')
const bodyParser = require('body-parser')
const { serverInfoRouter } = require('./routes/serverInfo')


module.exports = (config) => {
	const { corsOptions, PORT } = config

	const app = express()

	app.use(morgan('combined'))

	app.use(cors(corsOptions))

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())

	app.all('/', (req, res) => res.json({ root: 'This is API server for grover test backend' }))
	app.use('/ping', serverInfoRouter)

	app.listen(PORT, () => {
		logger.info(`Grover Test app listening on port ${PORT}!`)
	})
}

// module.exports = app;
