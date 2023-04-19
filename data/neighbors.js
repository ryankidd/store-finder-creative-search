const neighbors = [
	{
		code: 'AK',
		neighbors: ['WA'],
	},
	{
		code: 'AL',
		neighbors: ['FL', 'GA', 'MS', 'TN'],
	},
	{
		code: 'AR',
		neighbors: ['LA', 'MO', 'MS', 'OK', 'TN', 'TX'],
	},
	{
		code: 'AZ',
		neighbors: ['CA', 'CO', 'NM', 'NV', 'UT'],
	},
	{
		code: 'CA',
		neighbors: ['AZ', 'HI', 'NV', 'OR'],
	},
	{
		code: 'CO',
		neighbors: ['AZ', 'KS', 'NE', 'NM', 'OK', 'UT', 'WY'],
	},
	{
		code: 'CT',
		neighbors: ['MA', 'NY', 'RI'],
	},
	{
		code: 'DC',
		neighbors: ['MD', 'VA'],
	},
	{
		code: 'DE',
		neighbors: ['MD', 'NJ', 'PA'],
	},
	{
		code: 'FL',
		neighbors: ['AL', 'GA'],
	},
	{
		code: 'GA',
		neighbors: ['AL', 'FL', 'NC', 'SC', 'TN'],
	},
	{
		code: 'HI',
		neighbors: ['CA'],
	},
	{
		code: 'IA',
		neighbors: ['IL', 'MN', 'MO', 'NE', 'SD', 'WI'],
	},
	{
		code: 'ID',
		neighbors: ['MT', 'NV', 'OR', 'UT', 'WA', 'WY'],
	},
	{
		code: 'IL',
		neighbors: ['IA', 'IN', 'KY', 'MO', 'WI'],
	},
	{
		code: 'IN',
		neighbors: ['IL', 'KY', 'MO', 'WI'],
	},
	{
		code: 'KS',
		neighbors: ['CO', 'MO', 'NE', 'OK'],
	},
	{
		code: 'KY',
		neighbors: ['IL', 'IN', 'MO', 'OH', 'TN', 'VA', 'WV'],
	},
	{
		code: 'LA',
		neighbors: ['AR', 'MS', 'TX'],
	},
	{
		code: 'MA',
		neighbors: ['CT', 'NH', 'NY', 'RI', 'VT'],
	},
	{
		code: 'MD',
		neighbors: ['DC', 'DE', 'PA', 'VA', 'WV'],
	},
	{
		code: 'ME',
		neighbors: ['NH'],
	},
	{
		code: 'MI',
		neighbors: ['IN', 'OH', 'WI'],
	},
	{
		code: 'MN',
		neighbors: ['IA', 'ND', 'SD', 'WI'],
	},
	{
		code: 'MO',
		neighbors: ['AR', 'IA', 'IL', 'KS', 'KY', 'NE', 'OK', 'TN'],
	},
	{
		code: 'MS',
		neighbors: ['AL', 'AR', 'LA', 'TN'],
	},
	{
		code: 'MT',
		neighbors: ['ID', 'ND', 'SD', 'WY'],
	},
	{
		code: 'NC',
		neighbors: ['GA', 'SC', 'TN', 'VA'],
	},
	{
		code: 'ND',
		neighbors: ['MN', 'MT', 'SD'],
	},
	{
		code: 'NE',
		neighbors: ['CO', 'IA', 'KS', 'MO', 'SD', 'WY'],
	},
	{
		code: 'NH',
		neighbors: ['MA', 'ME', 'VT'],
	},
	{
		code: 'NJ',
		neighbors: ['DE', 'NY', 'PA'],
	},
	{
		code: 'NM',
		neighbors: ['AZ', 'CO', 'OK', 'TX', 'UT'],
	},
	{
		code: 'NV',
		neighbors: ['AZ', 'CA', 'ID', 'OR', 'UT'],
	},
	{
		code: 'NY',
		neighbors: ['CT', 'MA', 'NJ', 'PA', 'VT'],
	},
	{
		code: 'OH',
		neighbors: ['IN', 'KY', 'MI', 'PA', 'WV'],
	},
	{
		code: 'OK',
		neighbors: ['AR', 'CO', 'KS', 'MO', 'NM', 'TX'],
	},
	{
		code: 'OR',
		neighbors: ['CA', 'ID', 'NV', 'WA'],
	},
	{
		code: 'PA',
		neighbors: ['DE', 'MD', 'NJ', 'NY', 'OH', 'WV'],
	},
	{
		code: 'RI',
		neighbors: ['CT', 'MA'],
	},
	{
		code: 'SC',
		neighbors: ['GA', 'NC'],
	},
	{
		code: 'SD',
		neighbors: ['IA', 'MN', 'MT', 'ND', 'NE', 'WY'],
	},
	{
		code: 'TN',
		neighbors: ['AL', 'AR', 'GA', 'KY', 'MO', 'MS', 'NC', 'VA'],
	},
	{
		code: 'TX',
		neighbors: ['AR', 'LA', 'NM', 'OK'],
	},
	{
		code: 'UT',
		neighbors: ['AZ', 'CO', 'ID', 'NM', 'NV', 'WY'],
	},
	{
		code: 'VA',
		neighbors: ['DC', 'KY', 'MD', 'NC', 'TN', 'WV'],
	},
	{
		code: 'VT',
		neighbors: ['MA', 'NH', 'NY'],
	},
	{
		code: 'WA',
		neighbors: ['AK', 'ID', 'OR'],
	},
	{
		code: 'WI',
		neighbors: ['IA', 'IL', 'MI', 'MN'],
	},
	{
		code: 'WV',
		neighbors: ['KY', 'MD', 'OH', 'PA', 'VA'],
	},
	{
		code: 'WY',
		neighbors: ['CO', 'ID', 'MT', 'NE', 'SD', 'UT'],
	},
];

export default neighbors;
