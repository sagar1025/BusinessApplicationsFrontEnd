
export default function CurrentApps({ apps }){
    if(apps && apps.length > 0) {
        return (
            <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Application Number</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Industry</th>
                    <th scope="col">Email</th>
                    <th scope="col">Annual Sales</th>
                    <th scope="col">Annual payroll</th>
                    <th scope="col">Number Of Employees</th>
                    <th scope="col">Zip code</th>
                </tr>
            </thead>
            <tbody>
                {apps.map((app, idx) => {
                    return (
                    <tr key={idx}>
                        <th scope="row">{++idx}</th>
                        <td>{app.BusinessName || ''}</td>
                        <td>{app.Industry || ''}</td>
                        <td>{app.Email || ''}</td>
                        <td>${app.AnnualSales.toLocaleString() || ''}</td>
                        <td>${app.AnnualPayroll.toLocaleString() || ''}</td>
                        <td>{app.NumberOfEmployees || ''}</td>
                        <td>{app.ZipCode || ''}</td>
                    </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
        )
    }
    return (<></>)
}