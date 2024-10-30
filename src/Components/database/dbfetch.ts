const server = import.meta.env.VITE_SERVER;

export const kitchenFetch = async () => {
	try {
		const ans = await fetch(`${server}/ai-sql-gen/kitchen-products`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		const data = await ans.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const roomFetch = async () => {
	try {
		const ans = await fetch(`${server}/ai-sql-gen/room-products`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		const data = await ans.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const customQueryFetch = async (query: string) => {
	try {
		const ans = await fetch(`${server}/ai-sql-gen/custom-query`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ query }),
		});
		const data = await ans.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export interface DBSettingProps {
	user: string;
	host: string;
	database: string;
	password: string;
	port: string;
	table: string;
}

export const customDbFetch = async ({
	user,
	host,
	database,
	password,
	port,
	table,
}: DBSettingProps) => {
	const queryParams = new URLSearchParams({
		user,
		host,
		database,
		password,
		port: port.toString(),
		table,
	});

	const ans = await fetch(
		`${server}/ai-sql-gen/custom-db?${queryParams.toString()}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		},
	);
	const data = await ans.json();

	return data;
};

interface CustomDBQueryProps {
	query: string;
	user: string;
	host: string;
	database: string;
	password: string;
	port: string;
}

export const customDBQuery = async ({
	query,
	user,
	host,
	database,
	password,
	port,
}: CustomDBQueryProps) => {
	const queryParams = new URLSearchParams({
		query,
		user,
		host,
		database,
		password,
		port: port.toString(),
	});

	try {
		const ans = await fetch(
			`${server}/ai-sql-gen/custom-db/query?${queryParams.toString()}`,
			{
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			},
		);
		const data = await ans.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
