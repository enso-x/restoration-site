import * as nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'node:fs';

const convertPhoto = (photo) => {
	const bitmap = fs.readFileSync(photo.filepath);
	return [ photo.mimetype, bitmap.toString('base64') ];
};

async function saveFormData(fields, files) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASS,
		}
	});

	const [ photoMimetype, photoData ] = convertPhoto(files.photo);

	const mailData = {
		from: 'Pictura',
		to: process.env.EMAIL_TO_SEND,
		subject: `Contact form`,
		text: '',
		html: `
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<title>Pictura feedback</title>
				<meta name="description" content="Pictura feedback">
				<meta name="author" content="Pictura site">
				<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
			</head>
			<body> 
				<div class="container" style="margin-left: 20px;margin-right: 20px;">
					<h3>Обратная связь с сайта Pictura</h3>
					<div style="font-size: 16px;">
						<p>Имя: ${ fields.name }</p>
						<p>Телефон: ${ fields.mobile }</p>
						<p>${ fields.comment }</p>
						<br>
					</div>
				</div>
			</body>
			</html>
		`,
		attachments: [{
			filename: files.photo.filename,
			path: `data:${ photoMimetype };base64,${ photoData }`
		}]
	};

	await transporter.sendMail(mailData, function (err, data) {
		if (err) {
			console.log(err);
		} else {}
	});
}

async function handlePostFormReq(req, res) {
	const form = new formidable.IncomingForm({ multiple: true });

	const formData = new Promise((resolve, reject) => {
		form.parse(req, async (err, fields, files) => {
			if (err) {
				console.log('err', err);
				reject('error');
			}
			resolve({ fields, files });
		});
	});

	try {
		const { fields, files } = await formData;

		try {
			await saveFormData(fields, files);
			res.status(200).send({ status: 'submitted' });
			return;
		} catch (e) {
			res.status(500).send({ status: 'something went wrong' });
			return;
		}
	} catch (e) {
		res.status(400).send({ status: 'invalid submission' });
		return;
	}
}

export default async function(req, res) {
	await handlePostFormReq(req, res);
};

export const config = {
	api: {
		bodyParser: false,
	},
};
