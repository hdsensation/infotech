import React from 'react'

function Main() {
    return (
        <>
            <div className='main'>
                <h1>Dashbord</h1>
                <div className="row lal">
                    <div className="col-sm-6">
                        <div className="card bg-danger">
                            <div className="card-body">
                                <h5>New Services</h5>
                                <button className='btn btn-warning' disabled>5</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 >New Services</h5>
                                <button className='btn btn-warning' disabled>5</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row lal'>
                    <div className='col-sm-6'>
                        <div className="card-body">
                            <h1>New Services</h1>
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <h1>New Services</h1>

                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                </div>


                

            </div>

           


        </>
    )
}

export default Main
