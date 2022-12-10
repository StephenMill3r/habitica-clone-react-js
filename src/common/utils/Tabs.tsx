import React from "react";

import classNames from 'classnames';

interface ITabs {
	tabs: tabType[],
	activeTab: number,
	setActiveTab: any,
}

type tabType = {
	category: string;
	title: string;
};

const Tabs: React.FC<ITabs> = ({tabs, setActiveTab, activeTab}) => {

	return (
		<>
			{tabs.map((tab, index: number) => (
				<li
					key={`${tab.title}__${index}`}
					onClick={() => setActiveTab(index)}
					className={classNames('tasks__list-item', {
						'list-item-active': activeTab === index,
					})}>
					{tab.title}
				</li>
			))}
		</>
	);
};

export default Tabs;
