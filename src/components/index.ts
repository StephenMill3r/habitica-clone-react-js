// Перевести все приложение на именновоный export

export {Home} from "../pages/Home/Home";
export {Header} from "./Harness/Header";
export {NavSite} from './Harness/NavSite';

export {Inventory} from '../pages/Inventory/Inventory';
export {InventoryThing} from '../pages/Inventory/InventoryThing';

export {User} from './Harness/User/User';
export {UserHealth} from './Harness/User/UserHealth';
export {UserLevel} from './Harness/User/UserLevel';
export {UserInfo} from './Harness/User/UserInfo';

export {Tasks} from './Tasks/Tasks';

export {DailyTasks} from './Tasks/DailyTasks/DailyTasks';
export {DailyTask} from './Tasks/DailyTasks/DailyTask';

export {ToDoTasks} from './Tasks/ToDoTasks/ToDoTasks';
export {ToDoTask} from './Tasks/ToDoTasks/ToDoTask';

export {RewardTasks} from './Tasks/RewardTasks/RewardTasks';
export {RewardTask} from './Tasks/RewardTasks/RewardTask';
export {RewardThing} from './Tasks/RewardTasks/RewardThing';

export {HabitTasks} from './Tasks/HabitTasks/HabitTasks';
export {HabitTask} from './Tasks/HabitTasks/HabitTask';

export {default as notifyError} from '../common/utils/notifyError';
export {default as notifySuccess} from '../common/utils/notifySuccess';
export {default as Tabs} from '../common/ui/Tabs';
export {default as Modal} from '../common/ui/Modal';
export {default as Burger} from '../common/ui/Burger/Burger';
export {default as RightNav} from '../common/ui/Burger/RightNav';

export {default as SwordIcon} from '../assets/icons/MemberIcons/SwordIcon';
export {default as StarIcon} from '../assets/icons/StarIcon';
export {default as HealthIcon} from '../assets/icons/MemberIcons/HealthIcon';
export {default as CoinIcon} from '../assets/icons/CoinIcon';
