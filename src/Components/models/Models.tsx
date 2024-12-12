import { useState } from "react";

import { SideBar } from "../side-bar/SideBar";
import ModelCard from "./ModelCard";

export default function Models() {
	const [selectedModel, setSelectedModel] = useState<string | null>(
		localStorage.getItem("modelSelected"),
	);

	const handleModel = (model: string) => {
		localStorage.setItem("modelSelected", model);
		setSelectedModel(model);
	};

	return (
		<div className="flex">
			<SideBar />
			<div className="min-h-screen flex items-center mb-10 justify-center flex-wrap w-full">
				<div className="lg:w-[20%] w-[80%] mt-10 flex items-center justify-center">
					<ModelCard
						model="llama3-8b-8192"
						developer="Meta"
						context="8,192"
						selectedModel={selectedModel}
						handleModel={handleModel}
					/>
				</div>
				<div className="lg:w-[20%] w-[80%] mt-10 flex items-center justify-center">
					<ModelCard
						model="mixtral-8x7b-32768"
						developer="Mistral"
						context="32,768"
						selectedModel={selectedModel}
						handleModel={handleModel}
					/>
				</div>
				<div className="lg:w-[20%] w-[80%] mt-10 lg:gap-y-0 flex items-center justify-center">
					<ModelCard
						model="gemma2-9b-it"
						developer="Google"
						context="8,192"
						selectedModel={selectedModel}
						handleModel={handleModel}
					/>
				</div>
				{/* Model Deprecated */}
				{/* <div className="lg:w-[20%] w-[80%] mt-10 lg:gap-y-0 flex items-center justify-center">
					<ModelCard
						model="gemma-7b-it"
						developer="Google"
						context="8,192"
						selectedModel={selectedModel}
						handleModel={handleModel}
					/>
				</div> */}
			</div>
		</div>
	);
}
