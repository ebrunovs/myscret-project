import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: {
			host: 'localhost',
			database: 'myscret',
			user: 'postgres',
			password: 'root',
		},
		migrations: {
			directory: './migrations',
		},
	},
	production: {
		client: 'pg',
		connection: {
			host: 'localhost',
			database: 'myscret',
			user: 'postgres',
			password: 'root',
		},
		migrations: {
			directory: './migrations',
		},
	},
};

export default config;