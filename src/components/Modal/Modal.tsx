import React, {FunctionComponent} from 'react';
import ReactDOM from "react-dom";

interface IModalProps {
	isShown: boolean;
	handleClose: () => void;
	handleSubmit: () => void,
	modalContent: JSX.Element;
	headerContent: JSX.Element;
	headerText: string;
}

export const Modal: FunctionComponent<IModalProps> = ({
	                                                      isShown,
	                                                      handleClose,
	                                                      handleSubmit,
	                                                      modalContent,
	                                                      headerContent,
	                                                      headerText,
                                                      }) => {
	const modal = (
		<div className='modal active'>
			<div className='modal__content active'>
				<div className='modal__header'>
					<div className='modal__top'>
						<div className='modal__title'>{headerText}</div>
						<div className='modal__buttons'>
							<button onClick={handleClose} className='modal__cancel'>
								Отмена
							</button>
							<button
								onClick={handleSubmit}
								className='modal__save btn'>
								Сохранить
							</button>
						</div>
					</div>
					{headerContent && headerContent}
				</div>
				<div className='modal__body'>
					{modalContent}
				</div>
			</div>
		</div>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
