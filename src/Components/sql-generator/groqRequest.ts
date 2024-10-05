const server = import.meta.env.VITE_SERVER;

interface requestProps {
	prompt: string;
	model: string;
}

export const groqRequest = async ({ prompt, model }: requestProps) => {
	const ans = await fetch(`${server}/ai-sql-gen/completion`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			prompt,
			model,
		}),
	});
	const data = await ans.json();

	return data;
};
