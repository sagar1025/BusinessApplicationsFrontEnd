import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import CurrentApps from '../components/currentApps'
//import AppForm from './components/appForm'
import { useGetAllApplicationsQuery } from '../hooks/applicationsApi'

export default function Home() {
    const { data, error, isLoading } = useGetAllApplicationsQuery();

    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col col-md-10 mx-auto">
            <Link className="btn btn-primary mb-4" to="/newApp">Create new Application</Link>
            {
            data && data.length > 0 ?
            <CurrentApps apps={data} />
            :
            <Alert variant="primary">No Records Exist</Alert>
            }
            </div>
        </div>
    </div>
    )
}