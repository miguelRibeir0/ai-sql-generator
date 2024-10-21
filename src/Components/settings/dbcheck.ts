const server = import.meta.env.VITE_SERVER;

interface requestProps {
	user: string;
	host: string;
	database: string;
	password: string;
	port: string;
	table: string;
}

export const dbCheck = async ({
	user,
	host,
	database,
	password,
	port,
	table,
}: requestProps) => {
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
