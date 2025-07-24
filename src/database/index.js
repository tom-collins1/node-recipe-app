const { getDbConnection } = require('./connection')
const { createTables } = require('./schema')
const { createInitialRecords } = require('./seedData')

async function initializeDb() {
	const db = await getDbConnection()
	await createTables(db)
	await createInitialRecords(db)
}

module.exports = { getDbConnection, initializeDb }
