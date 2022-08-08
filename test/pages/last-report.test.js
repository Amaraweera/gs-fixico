import renderer from 'react-test-renderer';
import LastReport from "../../src/pages/last-report";

describe("LastReport Test", () => {
    it("Test LastReport snapshot", async () => {
        const component = renderer.create(
            <LastReport/>,
          );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});