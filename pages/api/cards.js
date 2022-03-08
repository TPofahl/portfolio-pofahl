import { createClient } from 'contentful';
const client = createClient({
	space: process.env.SPACE_ID,
	accessToken: process.env.ACCESS_TOKEN,
});
export default async function cards(req, res) {
	const { items } = await client.getEntries();
	res.status(200).json(items);
}
