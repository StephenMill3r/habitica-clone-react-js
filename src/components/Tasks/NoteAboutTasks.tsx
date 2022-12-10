import React, {FunctionComponent} from 'react';

interface INoteAboutTasks {
	icon: React.ReactNode,
	title: string,
	text: string,
}

type Props = INoteAboutTasks;

const NoteAboutTasks: FunctionComponent<Props> = ({title, text, icon}) => {

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

export default NoteAboutTasks;
