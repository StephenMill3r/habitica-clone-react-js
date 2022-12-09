import {shallow} from 'enzyme';
import {NavSite} from '../index';

describe('NavSite', () => {
	it('should render correctly with props', () => {
		const opened = false;
		const component = shallow(<NavSite opened={opened}/>);

		expect(component).toMatchSnapshot();
	});
});
