import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onImageSubmit}) => {
	return (
		<div>
			<p className='f3 white'>
				{'I can magically detect faces in your pictures. Let me show you!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 div white bg-light-purple'
					onClick={onImageSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;