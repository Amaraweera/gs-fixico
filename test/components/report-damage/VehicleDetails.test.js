import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import VehicleDetails from "../../../components/report-damage/VehicleDetails";

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
    },
    vehicleNames: [
        {id: 5, name: 'Alfa Romeo', models: Array(26)},
        {id: 10, name: 'Audi', models: Array(44)},
        {id: 14, name: 'BMW', models: Array(123)}
    ]
};

beforeEach(() => {
    wrapper = shallow(<VehicleDetails {...props}/>);
});

describe("VehicleDetails Test", () => {
    it('Test VehicleDetails snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Test vehicle number field', () => {
        expect(wrapper.find('#vehicle-number').length).toBe(1);

        const vehicleNumber = wrapper.find('#vehicle-number');
        vehicleNumber.value = 'KG-1234';
        expect(vehicleNumber.value).toBe('KG-1234');
    });

    it('Test chassis number field', () => {
        expect(wrapper.find('#chassis-number').length).toBe(1);

        const chassisNumber = wrapper.find('#vehicle-number');
        chassisNumber.value = '56TRF435GH';
        expect(chassisNumber.value).toBe('56TRF435GH');
    });

    it('Test model field', () => {
        expect(wrapper.find('#model').length).toBe(1);

        const model = wrapper.find('#model');
        model.value = 'BMW';
        expect(model.value).toBe('BMW');
    });

    it('Test type field', () => {
        expect(wrapper.find('#type').length).toBe(1);

        const type = wrapper.find('#type');
        type.value = '216';
        expect(type.value).toBe('216');
    });

    it('Test manifacture year field', () => {
        expect(wrapper.find('#manifacture-year').length).toBe(1);

        const manifactureYear = wrapper.find('#manifacture-year');
        manifactureYear.value = '2005';
        expect(manifactureYear.value).toBe('2005');
    });

    it('Test manifacture year field', () => {
        expect(wrapper.find('#color').length).toBe(1);

        const color = wrapper.find('#color');
        color.value = 'red';
        expect(color.value).toBe('red');
    });
});