import { Html, Head, Main, NextScript } from 'next/document';

import Background from '@/components/Background';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"/>
				<meta name="description" content="Pictura restoration company"/>
				<meta name="yandex-verification" content="efa22e67593a9ded" />
				<link rel="icon" href="/images/favicon.png"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			<Background/>
			<script type="module" src="/js/main.js"/>
			</body>
		</Html>
	);
}
