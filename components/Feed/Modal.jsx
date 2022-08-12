import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";

import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";

import { db, storage } from "../../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL , uploadString } from "firebase/storage";

const Modal = () => {
	const { data: session } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const [selectedFile, setSelectedFile] = useState();
	const [loading, setLoading] = useState();

	const captionInputRef = useRef();
	const inputFileRef = useRef();

	const openFileInput = () => {
		if (inputFileRef.current) {
			inputFileRef.current.click();
		}
	};

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};

	const uploadPost = async () => {
		if (loading) return;
		setLoading(true);

		const docRef = await addDoc(collection(db, "posts"), {
			username: session?.user.username,
			caption: captionInputRef?.current.value,
			profileImg: session.user.image,
			timestamp: serverTimestamp(),
		});

		const imageRef = ref(storage, `posts/${docRef.id}/image`);

		await uploadString(imageRef, selectedFile, "data_url").then(async () => {
			const downloadURL = await getDownloadURL(imageRef);
			await updateDoc(doc(db, "posts", docRef.id), {
				image: downloadURL,
			})
		});

		setOpen(false)
		setLoading(false)
		setSelectedFile(null)
	};

	return (
		<Transition show={!!open} as={Fragment}>
			<Dialog
				className="relative z-50 text-center w-full flex justify-center"
				onClose={() => setOpen(false)}
			>
				{/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/30" />
				</Transition.Child>

				{/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<div className="z-51 text-black absolute w-full h-full max-w-xl -inset-y-[800px]">
						<Dialog.Panel className="z-50 px-4 py-5 bg-white rounded-md">
							<Dialog.Title className="mb-3 font-bold">
								Do you want to create post?
							</Dialog.Title>
							<form onClick={openFileInput}>
								{selectedFile ? (
									<img
										src={selectedFile}
										alt="selected image"
										onClick={() => setSelectedFile(null)}
									/>
								) : (
									<>
										<CameraIcon
											className="w-12 mx-auto rounded-full 
									text-red-500 border-2 border-red-500 p-2 bg-red-100 
									 transform hover:scale-110 transition duration-200 ease-out active:text-red-700"
										/>
										<input
											type="file"
											hidden
											ref={inputFileRef}
											onChange={addImageToPost}
										/>
									</>
								)}
							</form>

							<div>
								<input
									className="px-1 mt-4 mb-7 border-none text-center focus:ring-0 w-full"
									placeholder="Please enter a caption"
									type="text"
									ref={captionInputRef}
								/>
							</div>
							<button
								disabled={!selectedFile}
								type="button"
								className="inline-flex justify-center w-full rounded-md border
									border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium
								text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm
								disabled:bg-gray-300 hover:disabled:bg-gray-300"
								onClick={uploadPost}
							>
								{ loading ? "Uploading..." : "Upload Post"}
							</button>
						</Dialog.Panel>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

export default Modal;
