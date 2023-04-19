import stateNeighbors from '../../data/neighbors';

const getNeighbors = (abbrev) => {
	const match = stateNeighbors
		.filter((state) => state.code === abbrev)
		.shift();

	if (match) {
		return match.neighbors;
	}
};

export default getNeighbors;
