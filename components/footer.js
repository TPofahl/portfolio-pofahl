import Image from 'next/image';

const Footer = () => {
	return (
		<footer
			id="contact"
			className="flex items-center justify-center w-full h-40 border-t bg-gray-900"
		>
			<div className="flex items-center w-screen px-6 sm:w-4/5 md:w-4/5 lg:w-1/3 justify-between">
				<a
					href="https://www.linkedin.com/in/thomas-pofahl-b76b7521b/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image
						src="/icon-linkedin.svg"
						alt="Linkedin logo"
						width={75}
						height={75}
					/>
				</a>

				<a
					href="https://github.com/TPofahl"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image src="/icon-github.svg" alt="GitHub logo" width={75} height={75} />
				</a>

				<a
					href="mailto:thomaspofahl@yahoo.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image src="/icon-email.svg" alt="E-mail logo" width={75} height={75} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
