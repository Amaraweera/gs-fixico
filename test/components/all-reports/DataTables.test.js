import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import DataTable from "../../../components/all-reports/DataTable";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props = {
    headers: ['Vehicle Number', 'Chassis Number', 'Customer Name', 'Contact name', 'Description', 'Image'],
    data: {
        "vehicleDetails": {
            "vehicleNumber": "BEK",
            "chassisNumber": "546YTED",
            "model": "Renault",
            "manifactureYear": "2017",
            "type": "Espace",
            "color": "Red"
        },
        "customerDetails": {
            "firstName": "Shewhan",
            "lastName": "Chathuranga",
            "nic": "900970153V",
            "address": "23/4 Katuwalamulla",
            "mobileNumber": "0703924504",
            "email": "shehan.amaraweera@gmail.com"
        },
        "descriptionAndImage": {
            "description": "test asd",
            "image": {
                "uuid": "ghh234l7gh87",
                "url": "/images/ghh234l7gh87.jpg"
            }
        }
    }
}

beforeEach(() => {
    wrapper = shallow(<DataTable {...props}/>);
});

describe("DataTable Test", () => {
    it('Test DataTable snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Test DataTable with empty data', () => {
        props = {
            headers: ['Vehicle Number', 'Chassis Number', 'Customer Name', 'Contact name', 'Description', 'Image'],
            data: []
        };

        wrapper.setProps(props);
        expect(wrapper).toMatchSnapshot();
    });
});