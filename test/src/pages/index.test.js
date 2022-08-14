import renderer from 'react-test-renderer';
import Dashboard from "../../../src/pages/index";

describe("Dashboard Test", () => {
    it("Test Dashboard snapshot", () => {
        const component = renderer.create(
            <Dashboard/>,
          );
        let dashboard = component.toJSON();
        expect(dashboard).toMatchSnapshot();
    });
});