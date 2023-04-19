import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './StoreFinder/app.js';

document.addEventListener('DOMContentLoaded', () => {
	const element = document.getElementById('rk-store-finder-wrapper');
	const root = ReactDOM.createRoot(element);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
});
