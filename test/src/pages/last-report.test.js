import renderer from 'react-test-renderer';
import LastReport from "../../src/pages/last-report";

describe("Dashboard Test", () => {
    it("Test Dashboard snapshot", () => {
        const component = renderer.create(
            <LastReport/>,
          );
        let lastReport = component.toJSON();
        expect(lastReport).toMatchSnapshot();
    });
});