import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import AllReports from "../../../src/pages/all-reports";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {};

beforeEach(() => {
    wrapper = shallow(<AllReports {...props}/>);
});

describe("AllReports Test", () => {
    it('Test AllReports snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});