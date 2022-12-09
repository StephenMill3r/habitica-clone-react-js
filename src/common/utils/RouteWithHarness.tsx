import React, {FunctionComponent} from 'react';
import {Route, RouteProps} from "react-router";
import {Harness} from "../../components/Harness/Harness";

const RouteWithHarness: FunctionComponent<RouteProps> = ({component, ...otherProps}) => {

	return (
		<Route
			{...otherProps}
			render={props => {
				const getPageComponent = () => {
					return component as React.ElementType;
				};
				const PageComponent = getPageComponent();
				return <Harness><PageComponent {...props}/></Harness>;
			}}
		/>
	);
};

export default RouteWithHarness;
