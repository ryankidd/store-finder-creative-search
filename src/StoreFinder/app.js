import labels from './settings';
import StoreFinderForm from './form';
import StoreFinderResults from './results';
import StoreFinderMap from './map';

export default function App() {
	return (
		<div className="rk-app-wrapper">
			<h3>{labels.formHeading}</h3>
			<StoreFinderForm />
			<div>
				<StoreFinderResults />
				<StoreFinderMap />
			</div>
		</div>
	);
}
