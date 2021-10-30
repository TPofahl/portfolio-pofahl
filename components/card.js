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
			className="overflow-hidden p-5 shadow-lg rounded-lg divide-gray-200 bg-red-500 w-72 h-72"
			onClick={() => {
				setClicked(!clicked);
				//handleClicked(index);
			}}
		>
			{clicked ? (
				<>
					<div className="flex flex-col px-4 py-4 sm:px-6">{projectDescription}</div>
					<a
						as="button"
						className="px-4 py-4 sm:px-6"
						href={projectRepoLink}
						target="_blank"
						rel="noreferrer"
					>
						Repo
					</a>
					<a
						as="button"
						className="px-4 py-4 sm:px-6"
						href={projectSiteLink}
						target="_blank"
						rel="noreferrer"
					>
						Site
					</a>
				</>
			) : (
				<div>
					<div className="px-4 py-5 sm:px-6">{projectTitle}</div>
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
