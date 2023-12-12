import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';

interface IBurger {
	navComponent: (open: boolean, burgerRef: any) => React.ReactNode
}

const Burger: React.FC<IBurger> = ({navComponent}) => {
	const [open, setOpen] = useState(false);
	const burgerRef: any = useRef();

	const handleOpenClick = () => {
		setOpen(!open)
	}

	const handleOutsideClick = (event: any) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(burgerRef.current)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	}, []);
	return (
		<>
			<div
				ref={burgerRef}
				onClick={handleOpenClick}
				className={classNames('styledBurger', {
					open: open,
				})}>
				<div className='elementBurger'></div>
				<div className='elementBurger'></div>
				<div className='elementBurger'></div>
			</div>
			{navComponent(open, burgerRef)}
		</>
	);
};

export default Burger;
