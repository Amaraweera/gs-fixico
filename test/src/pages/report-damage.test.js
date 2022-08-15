import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import ReportDamage from "../../../src/pages/report-damage";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ReportDamage/>);
});

describe("ReportDamage Test", () => {
    it('Test ReportDamage snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});