import React, {FunctionComponent} from 'react';
import {Header} from "./Header";
import {User} from "./User/User";


export const Harness: FunctionComponent = ({children}) => {

	return (
		<>
			<Header/>
			<User/>
			<div>
				{children}
			</div>
		</>
	);
};

