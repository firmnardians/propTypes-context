import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
	const { title, onClick } = props;

	return (
		<button onClick={onClick} className='btn'>
			{title}
		</button>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
