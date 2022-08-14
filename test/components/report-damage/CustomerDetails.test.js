import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import CustomerDetails from "../../../components/report-damage/CustomerDetails";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const props = {
    reportDetails: {
        vehicleDetails: {
            vehicleNumber: '',
            chassisNumber: '',
            model: '',
            manifactureYear: '',
            type: '',
            color: ''
        },
        customerDetails: {
            firstName: '',
            lastName: '',
            nic: '',
            address:'',
            mobileNumber: '',
            email: '',
        },
        descriptionAndImage: {
            description: '',
            image: {}
        }
    },
    formValidation: {
        vehicleDetails: {
            vehicleNumber: false,
            chassisNumber: false,
            model: false,
            manifactureYear: false,
            type: false,
            color: false
        },
        customerDetails: {
            firstName: false,
            lastName: false,
            nic: false,
            address: false,
            mobileNumber: false,
            email: false,
        },
        descriptionAndImage: {
            description: false,
            image: false
        }
    }
};

beforeEach(() => {
    wrapper = shallow(<CustomerDetails {...props}/>);
});

describe("VehicleDetails Test", () => {
    it('Test VehicleDetails snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Test first name field', () => {
        expect(wrapper.find('#first-name').length).toBe(1);

        const firstName = wrapper.find('#first-name');
        firstName.value = 'Jhon';
        expect(firstName.value).toBe('Jhon');
    });

    it('Test last name field', () => {
        expect(wrapper.find('#last-name').length).toBe(1);

        const lastName = wrapper.find('#last-name');
        lastName.value = 'Smith';
        expect(lastName.value).toBe('Smith');
    });

    it('Test nic field', () => {
        expect(wrapper.find('#nic').length).toBe(1);

        const nic = wrapper.find('#nic');
        nic.value = '997363536';
        expect(nic.value).toBe('997363536');
    });

    it('Test address field', () => {
        expect(wrapper.find('#address').length).toBe(1);

        const address = wrapper.find('#address');
        address.value = '43 Kandy road, Kadawatha';
        expect(address.value).toBe('43 Kandy road, Kadawatha');
    });

    it('Test mobile number field', () => {
        expect(wrapper.find('#mobile-number').length).toBe(1);

        const mobileNumber = wrapper.find('#mobile-number');
        mobileNumber.value = '0771234567';
        expect(mobileNumber.value).toBe('0771234567');
    });

    it('Test email field', () => {
        expect(wrapper.find('#email').length).toBe(1);

        const email = wrapper.find('#email');
        email.value = 'jhon@gmail.com';
        expect(email.value).toBe('jhon@gmail.com');
    });
});