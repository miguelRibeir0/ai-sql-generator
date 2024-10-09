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
