import React from 'react';

interface INoteAboutTasks {
	icon: React.ReactNode,
	title: string,
	text: string,
}

export const NoteAboutTasks: React.FC<INoteAboutTasks> = ({title, text, icon}) => {

	return (
		<div className='item-tasks__note note-item-tasks'>
			<div className='note-item-tasks__icon'>
				{icon}
			</div>
			<div className='note-item-tasks__title'>{title}</div>
			<p className='note-item-tasks__text'>
				{text}
			</p>
		</div>
	);
};

