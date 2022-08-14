import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Layout from "../../../components/layout/Layout";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {};

beforeEach(() => {
    wrapper = shallow(<Layout {...props}/>);
});

describe("Layout Test", () => {
    it('Test Layout snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

