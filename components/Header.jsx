import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";

const Header = () => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [open, setOpen] = useRecoilState(modalState);

	const redirectToHome = () => {
		router.push("/");
	};

	const submitSearch = (e) => {
		e.preventDefault();
	};

	return (
		<div className="shadow-sm border-b border-gray-300 bg-white sticky top-0 z-50">
			<div className="flex items-center justify-between px-10 max-w-6xl lg:mx-auto">
				<div
					onClick={redirectToHome}
					className="relative hidden lg:inline-grid w-28 h-14 cursor-pointer"
				>
					<Image
						src={"https://links.papareact.com/ocw"}
						alt="Instagram logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div
					onClick={redirectToHome}
					className="w-24 h-10 relative cursor-pointer lg:hidden flex-shrink-0"
				>
					<Image
						src={`https://links.papareact.com/jjm`}
						alt="Instagram logo mobile"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative flex items-center p-3 rounded-m space-x-2">
					<div className="absolute inset-y-0 pl-5 flex items-center pointer-events-none">
						<SearchIcon className="h-5 w-5 text-gray-400" />
					</div>
					<form onSubmit={submitSearch}>
						<input
							type="text"
							placeholder="Search..."
							className="p-1 bg-gray-100 block w-full py-2 pl-10 text-sm sm:text-md 
            border-gray-100 rounded-md focus:ring-black focus:border-black"
						/>
						<button hidden type="submit"></button>
					</form>
				</div>
				<div className="flex items-center justify-end space-x-4">
					<MenuIcon className="h-7 w-10 md:hidden cursor-pointer" />
					<HomeIcon className="navBtn" />

					{session ? (
						<>
							<div className="navBtn relative">
								<PaperAirplaneIcon className="navBtn rotate-45" />
								<div
									className="absolute -top-2 -right-1 w-5 h-5 flex items-center 
								justify-center bg-red-500 rounded-full animate-pulse text-white"
								>
									3
								</div>
							</div>
							<PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
							<UserGroupIcon className="navBtn" />
							<HeartIcon className="navBtn" />
							<img
								src={session.user.image}
								className="h-8 w-8 rounded-full cursor-pointer"
								alt="User logo"
								onClick={signOut}
							/>
						</>
					) : (
						<button className="text-blue-500 font-semibold" onClick={signIn}>
							Sign in
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
