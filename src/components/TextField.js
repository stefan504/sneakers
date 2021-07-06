import React from 'react';
import { useField, ErrorMessage } from 'formik';

export const TextField = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<div
				className="input-holder"
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<label htmlFor={field.name}>{label}</label>
				<input autoComplete="off" {...field} {...props} />
			</div>
			<p>
				<ErrorMessage name={field.name} />
			</p>
		</>
	);
};
