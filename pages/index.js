import Head from 'next/head';
import Image from 'next/image';
import Card from 'components/card';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
	const [cardState, setCardState] = useState(null);

	useEffect(() => {
		(async function () {
			fetch('/api/cards')
				.then((response) => response.json())
				.then((data) => setCardState(data))
				.catch((error) => console.log(error));
		})();
	});

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Thomas Pofahl</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<div
					id="home"
					className="flex flex-col items-center justify-center w-screen min-h-screen flex-1 px-20 text-center bg-gray-800 text-white"
				>
					<div>
						<h1 className="flex flex-col items-center justify-center text-5xl">
							Hello, my name is Thomas Pofahl.
						</h1>
						<h1 className="flex flex-col items-center justify-center mb-5 text-3xl">
							I am a Front End Developer.
						</h1>
						<a
							as="button"
							href="#about"
							className="m-5 p-3 border-2 rounded-lg border-white hover:bg-white hover:text-black duration-500"
						>
							To work
						</a>
					</div>
				</div>

				<div className="sticky top-0 z-30 bg-gray-900 w-screen">
					<div className="md:flex md:items-center md:justify-between mb-2 mt-2">
						<div className="flex-1 min-w-0 ml-3">
							<h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
								Thomas Pofahl
							</h2>
						</div>
						<div className="mt-4 flex md:mt-0 md:ml-4 md:mr-4">
							<ul className="flex">
								<li className="ml-4 mr-4 text-white hover:text-blue-500">
									<a href="#home">home</a>
								</li>
								<li className="ml-4 mr-4 text-white hover:text-blue-500">
									<a href="#about">about</a>
								</li>
								<li className="ml-4 mr-4 text-white hover:text-blue-500">
									<a href="#projects">projects</a>
								</li>
								<li className="ml-4 mr-4 text-white hover:text-blue-500">
									<a href="#contact">contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					id="about"
					className="flex flex-col items-center justify-center w-screen flex-1 px-20 text-center"
				>
					<div className="bg-white w-screen">
						<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
							<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
								<div>
									<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
										Used by the world&apos;s most average companies
									</h2>
									<p className="mt-3 max-w-3xl text-lg text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
										egestas tempus tellus etiam sed. Quam a scelerisque amet
										ullamcorper eu enim et fermentum, augue.
									</p>
								</div>
								<div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
									<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
										<Image
											className="max-h-12"
											src="/html5.svg"
											alt="HTML5"
											height={200}
											width={200}
										/>
									</div>

									<div className="grid grid-cols-1 col-span-1 flex-col justify-center py-8 px-8 bg-gray-50">
										<span>CSS3</span>
										<Image
											className="max-h-12"
											src="/CSS3.svg"
											alt="CSS3"
											height={120}
											width={120}
										/>
									</div>

									<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
										<Image
											className="max-h-12"
											src="/javascript.svg"
											alt="JavaScript"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
										<Image
											className="max-h-12"
											src="/react.svg"
											alt="React"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
										<Image
											className="max-h-12"
											src="/nextjs.svg"
											alt="NextJS"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
										<Image
											className="max-h-12"
											src="/vercel.svg"
											alt="Vercel"
											height={200}
											width={200}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h2 className="py-6 mx-auto">Projects</h2>
				<div
					id="projects"
					className="grid grid-cols-3 gap-4 py-4 items-center justify-center w-screen flex-1 px-20 text-center bg-gray-200"
				>
					{cardState?.map((item) => (
						<Card
							key={item.fields.title}
							projectTitle={item.fields.title}
							projectDescription={item.fields.description}
						/>
					))}
				</div>
			</main>

			<footer
				id="contact"
				className="flex items-center justify-center w-full h-60 border-t bg-gray-900"
			>
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						className="h-4 ml-2"
						height={100}
						width={150}
					/>
				</a>
			</footer>
			<style global jsx>{`
				html {
					scroll-behavior: smooth;
				}
			`}</style>
		</div>
	);
}
