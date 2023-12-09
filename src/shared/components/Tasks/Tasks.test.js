import {shallow} from 'enzyme';
import {Tasks} from './Tasks';

describe('MainContent', () => {
	it('should render correctly without props', () => {
		const component = shallow(<Tasks/>);

		expect(component).toMatchSnapshot();
	});
});
