import React, {useState} from 'react';
import classNames from 'classnames';

import {HealthIcon, Modal, notifyError, notifySuccess, StarIcon} from '../../index';
import {useActions} from '../../../redux/typeHooks/useActions';

interface IMainContentTaskHabit {
	text: string;
	isBadTask: boolean;
	id: number;
	isSuccessTask: boolean;
	count: number;
	supText: string;
	taskDiff: number;
}

export const diff = ['Пустяк', 'Легко', 'Нормально', 'Сложно'];

export const HabitTask: React.FC<IMainContentTaskHabit> = ({
	                                                           text,
	                                                           isBadTask,
	                                                           id,
	                                                           isSuccessTask,
	                                                           count,
	                                                           supText,
	                                                           taskDiff,
                                                           }) => {
	const {
		setMinusUserHealth,
		setUserLevel,
		setHabitSuccessTask,
		setPlusHabitCount,
		setMinusHabitCount,
		setHabitChangeTask,
		setDeleteHabitTask,
	} = useActions();

	const [modalActive, setModalActive] = useState<boolean>(false);
	const [selectedDiff, setSelectedDiff] = useState(diff[0]);
	const [modalText, setModalText] = useState<string>(text);
	const [modalSupText, setModalSupText] = useState<string>(supText);
	const [isBadTaskModal, setIsBadTaskModal] = useState<boolean>(isBadTask);

	//Отбирает хп, при клике по плохой привычке
	const onClickBadHabitTask =
		(health: number, id: number) => (event: React.MouseEvent<HTMLElement>) => {
			if (isBadTask) {
				setMinusUserHealth(health * taskDiff);
				setMinusHabitCount(id);
				notifyError('жизни', health * taskDiff, <HealthIcon/>);
			}
		};
	//Дает опыт при клике по хорошей привычке(в зависимости от уровня сложности таски)
	const onClickSucsessTask =
		(id: number, level: number) => (event: React.MouseEvent<HTMLElement>) => {
			if (!isBadTask) {
				setHabitSuccessTask(id);
				setUserLevel(level * taskDiff);
				setPlusHabitCount(id);
				notifySuccess('опыта', level * taskDiff, <StarIcon/>);
			}
		};

	//Редактирование сложности, описания, названия, смена таски(хорошая-плохая) в модальном окне
	const onSendChangeHabit = (titleText: string, supText: string, diff: number) => {
		setHabitChangeTask(id, isBadTaskModal, titleText, supText, diff, !isBadTaskModal);
		setModalActive(false);
	};

	//Отоброжение и изменение принадлежности таски(хорошая-плохая) в модальном окне
	const handleChangeIsBadTask = (value: boolean) => () => {
		setIsBadTaskModal(value);
	};
	//Удаление такси
	const onClickDeleteTask = () => {
		setDeleteHabitTask(id);
		setModalActive(false);
	};
	return (
		<>
			<div
				className={classNames('item-tasks__task', {
					'item-tasks__bad-task': isBadTask,
					'item-tasks__sucsess-task': isSuccessTask,
				})}>
				<div
					onClick={onClickSucsessTask(id, 10)}
					className='item-tasks__left item-tasks__func'>
					<div className='item-tasks__plus'>+</div>
				</div>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{text}</p>
						<svg
							onClick={() => setModalActive(true)}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 4 16'>
							<path
								fillRule='evenodd'
								d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
						</svg>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					<div className='item-tasks__counter'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
							<path
								fillRule='evenodd'
								d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
						</svg>
						<span className='item-tasks__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
            </span>
					</div>
				</div>
				<div className='item-tasks__right item-tasks__func'>
					<div onClick={onClickBadHabitTask(7, id)} className='item-tasks__minus'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
							<path fillRule='evenodd' d='M0 0h10v2H0z'></path>
						</svg>
					</div>
				</div>
			</div>
			<Modal active={modalActive} setModalActive={setModalActive}>
				<div className='modal__header'>
					<div className='modal__top'>
						<div className='modal__title'>Изменить привычку</div>
						<div className='modal__buttons'>
							<button onClick={() => setModalActive(false)} className='modal__cancel'>
								Отмена
							</button>
							<button
								onClick={() =>
									onSendChangeHabit(modalText, modalSupText, diff.indexOf(selectedDiff))
								}
								className='modal__save btn'>
								Сохранить
							</button>
						</div>
					</div>
					<div className='modal__text'>
						<label>Заголовок*</label>
						<input
							placeholder='Добавить название'
							value={modalText}
							onChange={(e) => setModalText(e.target.value)}
							type='text'
						/>
					</div>
					<div className='modal__notice'>
						<label>Заметки</label>
						<textarea
							value={modalSupText}
							onChange={(e) => setModalSupText(e.target.value)}></textarea>
					</div>
				</div>
				<div className='modal__body'>
					<div className='modal__icons'>
						<div onClick={handleChangeIsBadTask(false)} className='modal__icon-item'>
							<div
								className={classNames('modal__icon', {
									'modal__icon-active': !isBadTaskModal,
								})}>
								<div className='item-tasks__plus'>+</div>
							</div>
							<div className='modal__description'>Полезная</div>
						</div>
						<div onClick={handleChangeIsBadTask(true)} className='modal__icon-item'>
							<div
								className={classNames('modal__icon', {
									'modal__icon-active': isBadTaskModal,
								})}>
								<div className='item-tasks__minus'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
										<path fillRule='evenodd' d='M0 0h10v2H0z'></path>
									</svg>
								</div>
							</div>
							<div className='modal__description'>Вредная</div>
						</div>
					</div>
					<div className='modal__title-select'>Сложность</div>
					<select
						className='modal__select'
						value={selectedDiff}
						onChange={(e) => setSelectedDiff(e.target.value)}>
						{diff.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
					<div onClick={onClickDeleteTask} className='modal__footer'>
						Удалить привычку
					</div>
				</div>
			</Modal>
		</>
	);
};
