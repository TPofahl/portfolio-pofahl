import { useState } from 'react';
import Image from 'next/image';

const Card = ({
	projectTitle,
	projectDescription,
	projectRepoLink,
	projectSiteLink,
	projectImage,
}) => {
	const [clicked, setClicked] = useState(false);
	return (
		<div
			className="flex-row items-center select-none cursor-pointer transition duration-200 p-5 shadow-lg rounded-lg w-72 h-96 border-r-8 border-b-8 bg-gray-400 md:hover:bg-opacity-80 md:hover:bg-gray-400 border-blue-500 hover:border-green-500"
			onClick={() => {
				setClicked(!clicked);
			}}
		>
			{clicked ? (
				<>
					<div className="flex-col h-5/6 px-4 py-1.5 sm:px-6">
						{projectDescription}
					</div>
					<div className="flex-row">
						{projectRepoLink ? (
							<a
								as="button"
								className="flex-end pt-5 pb-4 px-6 md:px-7  bg-blue-600 rounded-3xl ml-2"
								href={projectRepoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src="/icon-code.svg" alt="code logo" width={20} height={20} />
							</a>
						) : (
							<a
								as="iamge"
								className="flex-end pt-5 pb-4 px-6 md:px-7  bg-gray-500 rounded-3xl ml-2"
							>
								<Image src="/icon-code.svg" alt="code logo" width={20} height={20} />
							</a>
						)}

						<a
							as="button"
							className="flex-end pt-5 pb-4 px-6 md:px-7  bg-green-400 rounded-3xl ml-2"
							href={projectSiteLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/icon-play.svg" alt="play logo" width={20} height={20} />
						</a>
					</div>
				</>
			) : (
				<div>
					<div className="flex flex-col px-4 py-8 sm:px-6 text-2xl bg-gray-500 text-white text-md rounded-md">
						{projectTitle}
					</div>
					{projectImage && (
						<Image
							className="rounded-xl object-fill"
							src={`https:${projectImage.file.url}`}
							alt={projectImage.description}
							width={projectImage.file.details.image.width}
							height={projectImage.file.details.image.height}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Card;
