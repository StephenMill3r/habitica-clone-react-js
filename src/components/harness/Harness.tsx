import React, {FunctionComponent} from 'react';
import {Header} from "../Header";
import {Member} from "../index";


export const Harness: FunctionComponent = ({children}) => {
	
	return (
		<>
			<Header/>
			<Member/>
			<div>
				{children}
			</div>
		</>
	);
};

