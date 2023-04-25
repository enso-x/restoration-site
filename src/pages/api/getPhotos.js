import fs from 'node:fs';

const handler = async (
	req,
	res
) => {
	const dirPath = `${process.cwd()}/public/images/gallery`;

	const files = fs.readdirSync(dirPath).map(file => ({
		fileName: file,
		dateChanged: fs.statSync(`${dirPath}/${file}`).mtime.getTime()
	})).sort(function(a, b) {
		return b.dateChanged -
			a.dateChanged;
	}).map(fileInfo => fileInfo.fileName);

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