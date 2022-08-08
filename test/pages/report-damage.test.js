import renderer from 'react-test-renderer';
import ReportDamage from "../../src/pages/report-damage";

describe("ReportDamage Test", () => {
    it("Test ReportDamage snapshot", async () => {
        const component = renderer.create(
            <ReportDamage/>,
          );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});