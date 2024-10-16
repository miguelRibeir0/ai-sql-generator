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

export const customFetch = async (query: string) => {
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
