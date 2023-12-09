import React, {useState} from "react";
import Tabs from "../../../common/ui/Tabs";
import {TaskFiltersType} from "../../../shared/types/task";

interface ITaskFilters {
	taskFilters: TaskFiltersType,
}

export const TaskFilters: React.FC<ITaskFilters> = ({taskFilters}) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div className='tasks__tabs'>
			<ul className='tasks__list'>
				<Tabs tabs={taskFilters} activeTab={activeTab} setActiveTab={setActiveTab}/>
			</ul>
		</div>
	);
};
