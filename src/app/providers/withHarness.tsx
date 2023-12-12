import React from 'react';
import {Header} from "../ui/Header";
import {User} from "../../entities/user";


export const withHarness = (component: () => React.ReactNode) => () => {

	return (
		<>
			<Header/>
			<User/>
			<div>
				{component()}
			</div>
		</>
	);
};

