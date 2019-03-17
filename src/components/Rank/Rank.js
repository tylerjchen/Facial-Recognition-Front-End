import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, the number of pictures you have submitted is...`}
			</div>			
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;