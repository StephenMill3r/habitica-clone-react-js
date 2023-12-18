import React from "react";
import {useSelector} from "react-redux";
import {UserSelectors} from "../../entities/user/model/selectors";
import {UserThing} from "../../entities/user";

const Inventory: React.FC = () => {
	const things = useSelector(UserSelectors.selectThings);

	return (
		<div className='inventory'>
			<div className='inventory__content'>
				<div className='inventory__row'>
					<>
						{things.map((thing) => (
							<UserThing {...thing} />
						))}
					</>
				</div>
			</div>
		</div>
	);
};

export default Inventory;
