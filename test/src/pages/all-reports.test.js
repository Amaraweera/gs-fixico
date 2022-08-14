import renderer from 'react-test-renderer';
import AllReports from "../../../src/pages/all-reports";

describe("AllReports Test", () => {
    it("Test AllReports snapshot", async () => {
        const data = [
                {
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
            ];

        const component = renderer.create(
            <AllReports data={data}/>,
          );
        let allReports = component.toJSON();
        expect(allReports).toMatchSnapshot();
    });
});