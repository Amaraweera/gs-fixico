import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Dashboard from "../../../src/pages/index";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {};

beforeEach(() => {
    wrapper = shallow(<Dashboard {...props}/>);
});

describe("Dashboard Test", () => {
    it('Test Dashboard snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});