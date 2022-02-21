import Head from 'next/head';
import Image from 'next/image';
import Card from 'components/card';
import Footer from 'components/footer';
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
	}, []);
	return (
		<div className="flex flex-col items-center w-screen min-h-screen">
			<Head>
				<title>Thomas Pofahl</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main
				id="home"
				className="flex flex-col items-center justify-center w-screen flex-1 px-20 text-center sm:text-sm"
			>
				<div className="flex flex-col items-center justify-center w-screen min-h-screen flex-1 px-20 text-center bg-gray-800 text-white">
					<div>
						<h1 className="flex flex-col items-center justify-center text-2xl md:text-5xl">
							Hello, my name is Thomas Pofahl.
						</h1>
						<h1 className="flex flex-col items-center justify-center mb-5 text-2xl md:text-5xl mt-2">
							I am a Web Developer.
						</h1>
						<a
							as="button"
							href="#about"
							className="m-2 p-3 border-2 rounded-lg border-white hover:bg-white hover:text-black duration-500"
						>
							about
						</a>
					</div>
				</div>

				<div className="sticky top-0 z-30 bg-gray-900 w-screen border-b-4 md:border-b-8 border-blue-500">
					<div className="md:flex md:items-center md:justify-between mb-2 mt-2">
						<div className="md:ml-8">
							<h2 className="text-2xl font-bold text-white sm:text-3xl sm:truncate">
								Thomas Pofahl
							</h2>
						</div>
						<div className="mt-4 md:mt-0 md:ml-4 md:mr-4">
							<ul className="flex justify-between px-3 md:text-lg">
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
					className="flex flex-col items-center pt-20 justify-center w-screen flex-1 px-20 text-center"
				>
					<div className="bg-light w-screen">
						<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
							<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
								<div>
									<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
										Modern technology to create professional webpages
									</h2>
									<p className="mt-3 max-w-3xl text-lg text-gray-500">
										Tools that I use to create content.
									</p>
								</div>
								<div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
									<div className="col-span-1 flex justify-center py-8 px-8 bg-light">
										<Image
											className="max-h-12"
											src="/html5.svg"
											alt="HTML5"
											height={200}
											width={200}
										/>
									</div>

									<div className="grid grid-cols-1 col-span-1 flex-col justify-center py-8 px-8 bg-light">
										<Image
											className="max-h-12"
											src="/CSS3.svg"
											alt="CSS3"
											height={120}
											width={120}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-light">
										<Image
											className="max-h-12"
											src="/javascript.svg"
											alt="JavaScript"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-light">
										<Image
											className="max-h-12"
											src="/react.svg"
											alt="React"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-light">
										<Image
											className="max-h-12"
											src="/nextjs.svg"
											alt="NextJS"
											height={200}
											width={200}
										/>
									</div>
									<div className="col-span-1 flex justify-center py-8 px-8 bg-light">
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

				<div id="projects" className="py-10 md:py-6"></div>
				<div className="flex bg-gray-800 text-white w-screen border-b-4 md:border-b-8 border-blue-500">
					<h2 className="py-6 mx-auto text-5xl">Projects</h2>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 break-words justify-items-center gap-4 py-4 mx-center w-screen flex-1 text-center bg-light">
					{cardState?.map((item, itemIdx) => (
						<Card
							key={item.fields.title}
							projectTitle={item.fields.title}
							projectDescription={item.fields.description}
							projectRepoLink={item.fields.repoLink}
							projectSiteLink={item.fields.siteLink}
							projectImage={item.fields.cardPic?.fields}
						/>
					))}
				</div>
			</main>
			<Footer />
			<style global jsx>{`
				html {
					scroll-behavior: smooth;
				}
			`}</style>
		</div>
	);
}
