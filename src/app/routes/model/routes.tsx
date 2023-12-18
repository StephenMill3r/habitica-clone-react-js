import {RouterType} from "../../../modules";
import loadable, {DefaultComponent, LoadableComponent,} from "@loadable/component";

const Loader = () => <div>Loading...</div>;

const Loadable = <TProps, >(
	loadFn: (props: TProps) => Promise<DefaultComponent<TProps>>
): LoadableComponent<TProps> =>
	loadable(loadFn, {fallback: <Loader/>});

const DashboardPage = Loadable(() => import("../../../modules/dashboard"))
const InventoryPage = Loadable(() => import("../../../modules/inventory"))

export enum RoutesLabelEnum {
	Dashboard = 'Главная',
	Inventory = 'Инвентарь',
}

export enum RoutesLinkEnum {
	Dashboard = '/',
	Inventory = '/inventory',
}

export const router: RouterType[] = [
	{
		title: RoutesLabelEnum.Dashboard,
		path: RoutesLinkEnum.Dashboard,
		children: <DashboardPage/>
	},
	{
		title: RoutesLabelEnum.Inventory,
		path: RoutesLinkEnum.Inventory,
		children: <InventoryPage/>
	},
];
