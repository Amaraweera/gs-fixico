import renderer from 'react-test-renderer';
import AllReports from "../../src/pages/all-reports";

describe("AllReports Test", () => {
    it("Test AllReports snapshot", async () => {
        const component = renderer.create(
            <AllReports/>,
          );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});