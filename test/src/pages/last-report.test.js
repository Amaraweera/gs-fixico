import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import LastReport from "../../../src/pages/last-report";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {};

beforeEach(() => {
    wrapper = shallow(<LastReport {...props}/>);
});

describe("LastReport Test", () => {
    it('Test LastReport snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});