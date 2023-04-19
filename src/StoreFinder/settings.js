/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

const settings = {
	labels: {
		submitButtonText: __('Submit', 'rk-store-finder'),
		formHeading: __('Store Locator', 'rk-store-finder'),
		addressInput: __('Address', 'rk-store-finder'),
	},
	optionSets: [
		{
			label: 'Option1',
			options: [
				{
					value: 'Private School',
					label: __('Private Schools', 'rk-store-finder'),
				},
				{
					value: 'Traditional Public School',
					label: __('Traditional Public Schools', 'rk-store-finder'),
				},
				{
					value: 'Public Charter School',
					label: __('Public Charter Schools', 'rk-store-finder'),
				},
			],
		},
		{
			label: 'Option2',
			options: [
				{ value: 'Elementary', label: 'Elementary' },
				{ value: 'strawberry2', label: 'Strawberry2' },
				{ value: 'vanilla2', label: 'Vanilla2' },
			],
		},
	],
};
export default settings;
