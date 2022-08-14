import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import FileUpload from "../../../components/report-damage/FileUpload";

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
    wrapper = shallow(<FileUpload {...props}/>);
});

describe("Test FileUpload", () => {
    it('Test FileUpload snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Test FileUpload function', () => {
        wrapper.find('#fileInput').simulate('change', {
            target: {
               files: [
                 'dummyValue.jpg'
               ]   
            }
        });
    });

    it('Test description field', () => {
        expect(wrapper.find('#description').length).toBe(1);

        const description = wrapper.find('#description');
        description.value = 'Vehicle front bumper crashed';
        expect(description.value).toBe('Vehicle front bumper crashed');
    });
});