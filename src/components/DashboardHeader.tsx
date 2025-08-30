import user from "@/assets/user.jpg";
import logo from "@/assets/weecom.svg";

function DashboardHeader() {
	return (
		<header className="p-4">
			<div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl drop-shadow-sm">
				<div className="flex items-center gap-2">
					<img
						width={36}
						height={36}
						src={logo}
						alt=""
						className="size-8 overflow-clip rounded-full"
					/>
					<h2 className="text-gray-900 text-xl font-semibold leading-tight tracking-tight">
						Products Dashboard
					</h2>
				</div>
				<div className="flex items-center gap-2">
					<button type="button" className="rounded-full size-10 overflow-clip">
						<img src={user} alt="user pfp" className="size-full object-cover" />
					</button>
				</div>
			</div>
		</header>
	);
}
export default DashboardHeader;
