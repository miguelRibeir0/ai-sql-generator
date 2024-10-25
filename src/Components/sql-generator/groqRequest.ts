const server = import.meta.env.VITE_SERVER;

interface requestProps {
	prompt: string;
	model: string;
	custom: boolean;
}

export const groqRequest = async ({ prompt, model, custom }: requestProps) => {
	const ans = await fetch(`${server}/ai-sql-gen/completion`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			prompt,
			model,
			custom,
		}),
	});
	const data = await ans.json();

	return data;
};
