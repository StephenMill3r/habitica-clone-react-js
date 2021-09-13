import { shallow } from 'enzyme';
import { MainContent } from '../';

describe('MainContent', () => {
  it('should render correctly without props', () => {
    const component = shallow(<MainContent />);

    expect(component).toMatchSnapshot();
  });
});
