import { SideBar } from "../side-bar/SideBar";

export default function Help() {
	return (
		<div className="flex">
			<SideBar />
			<div className="min-h-screen flex flex-col items-center justify-center w-full m-10 mt-20 mb-20 md:m-0">
				<h2 className="uppercase font-bold text-3xl mb-5">How it works:</h2>
				<div className="md:w-[600px]">
					<p>
						At the base level the sql generator is linked to our pre-made
						database.
					</p>
					<p>
						This means that it will answer to all requests using as reference
						all the tables and collumns it has access to.
					</p>
					<p className="mt-3 mb-3">Our pre-made Database contains:</p>
					<ul>
						<li>● Two Tables: Kitchen Products and Room products.</li>
						<li>● Each table has 3 columns: Name, Quantity and Date added.</li>
					</ul>
					<p className="mt-3">
						After getting your SQL code go over to the DB section to query our
						database.
					</p>
				</div>
				<h2 className="uppercase font-bold text-3xl mt-10 mb-5">
					How do I connect it to my own DB:
				</h2>
				<div className="md:w-[600px]">
					<p className="mt-3 mb-3">[Under Development]:</p>
					<p className="mb-3">
						Go over to{" "}
						<a href="/settings" className="underline">
							settings
						</a>
						, and fill in the form with your database credentials.
					</p>

					<ul>
						<li>
							● You will be able to connect your own DB. (postgreSQL only)
						</li>
						<li>
							● You will be able to see your database on the database section.
						</li>
					</ul>
				</div>
				<div className="mt-20 flex gap-x-2 items-center justify-center">
					<p>To report bugs or ask for specific improvements:</p>
					<a
						href="https://github.com/miguelRibeir0/ai-sql-generator"
						target="_blank"
					>
						<img
							src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Github.svg"
							alt="GitHub"
							className="md:w-7 w-14"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
