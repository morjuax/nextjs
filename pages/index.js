import React from 'react';
import Link from 'next/link';

const HomePage = () => (
		<main>
			<h1>Página principal</h1>
			<Link href="/about">
				<a>Ir a <em>/aboute</em></a>
			</Link>
			<stylejsx>{`
				h1 { color: red; }
			`}</stylejsx>
		</main>
	);

export default HomePage;