import React from 'react'
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function About() {
	return (
		<div className="container">
			About page
			<Select options={options} />
		</div>
	)
}

export default About
