import DataTable from '../../components/all-reports/DataTable';
import { getReports } from '../../services/index';

const AllReports = (props) => {
    const headers = ['Vehicle Number', 'Chassis Number', 'Customer Name', 'Contact name', 'Description', 'Image'];

    return  <DataTable
            headers={headers}
            data={props.reports}
        />
}

export const getStaticProps = async () => {
    const reports = await getReports();

    return {
        props: {
            reports: reports
        }
    }
}
  
export default AllReports;