import React, { useReducer, useState } from 'react';
import Select from 'react-select';
import settings from './settings';

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value,
	};
};

const StoreFinderForm = () => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	const { labels, optionSets } = settings;

	const selects = optionSets.map((optionSet, i) => {
		const { options, label } = optionSet;
		return (
			<div className="rk-field" key={i}>
				<label htmlFor={label.toLowerCase()}>{label}</label>
				<Select name={label.toLowerCase()} options={options} isMulti />
			</div>
		);
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitting(true);

		setTimeout(() => {
			setSubmitting(false);
		}, 3000);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			name,
			value,
		});
	};

	return (
		<div>
			{submitting && (
				<div>
					You are submitting the following:
					<ul>
						{Object.entries(formData).map(([name, value]) => (
							<li key={name}>
								<strong>{name}</strong>:{value.toString()}
							</li>
						))}
					</ul>
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="address">
						<span>{labels.addressInput}</span>
						<input
							id="address"
							name="address"
							type="number"
							onChange={handleChange}
						/>
					</label>
					{selects}
				</fieldset>
				<button type="submit">{labels.submitButtonText}</button>
			</form>
		</div>
	);
};
export default StoreFinderForm;
