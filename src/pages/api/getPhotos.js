import fs from 'node:fs';

const handler = async (
	req,
	res
) => {
	const files = fs.readdirSync(process.cwd() + '/public/images/gallery');
	const result = [];

	for (let file of files) {
		result.push(`/images/gallery/${file}`);
	}

	res.status(200).json(result);
};

export default handler;

export const config = {
	runtime: 'nodejs'
};