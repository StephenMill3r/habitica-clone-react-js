import {Switch} from 'react-router';
import {useHistory} from "react-router-dom";

import {Home, Inventory} from '../components';
import ErrorBoundary from "../common/ErrorBoundary/ErrorBoundary";
import RouteWithHarness from "../common/utils/RouteWithHarness";


function App() {
	const history = useHistory();

	return (
		<ErrorBoundary key={history.location.pathname}>
			<Switch>
				<RouteWithHarness path='/' component={Home} exact/>
				<RouteWithHarness path='/inventory' component={Inventory}/>
			</Switch>
		</ErrorBoundary>
	);
}

export default App;
