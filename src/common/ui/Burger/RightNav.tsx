import React from 'react';
import {NavSite} from "app/ui/NavSite";

interface IRightNav {
	open: boolean;
	burgerRef: any;
}

const RightNav: React.FC<IRightNav> = ({open}) => {
	return <NavSite open={open}/>;
};

export default RightNav;
