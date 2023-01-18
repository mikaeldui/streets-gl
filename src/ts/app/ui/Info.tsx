import React from "react";
import {IoCloseOutline, IoLogoGithub} from 'react-icons/io5';

const Info: React.FC<{onClose: () => void}> = (
	{
		onClose
	}
) => {
	return (
		<div className='modal'>
			<div
				className='modal-close'
				onClick={onClose}
			>
				<IoCloseOutline size={36} />
			</div>
			<div className='modal-header'>Information</div>
			<div className='modal-p'>
				hi!!!!! no text there yet
			</div>
			<div className='modal-p'>
				<a href='https://github.com/StrandedKitty/streets-gl' target={'_blank'}><IoLogoGithub size={16} />GitHub repository</a>
			</div>
			<div className='modal-header'>Keyboard and mouse controls</div>
			<table className='modal-keys'>
				<tbody>
					<tr>
						<td><kbd>Ctrl</kbd> + <kbd>U</kbd></td>
						<td><span className='modal-key-label'>Toggle UI visibility</span></td>
					</tr>
					<tr>
						<td><kbd>Tab</kbd></td>
						<td><span className='modal-key-label'>Toggle between ground camera mode (default) and free camera mode</span></td>
					</tr>
					<tr>
						<td><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> (+ <kbd>Shift</kbd> ) or left mouse button</td>
						<td><span className='modal-key-label'>Camera movement</span></td>
					</tr>
					<tr>
						<td><kbd>Q</kbd> <kbd>E</kbd> <kbd>R</kbd> <kbd>F</kbd> or right mouse button</td>
						<td><span className='modal-key-label'>Camera pitch and yaw</span></td>
					</tr>
					<tr>
						<td>Middle mouse button</td>
						<td><span className='modal-key-label'>2x camera zoom</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Info;