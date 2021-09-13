import { shallow } from 'enzyme';
import { Member } from '../';

describe('Member', () => {
  it('should render correctly without props', () => {
    const component = shallow(<Member />);

    expect(component).toMatchSnapshot();
  });
});
