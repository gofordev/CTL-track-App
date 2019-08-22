import React, { Component } from 'react'
import Select from 'react-select'
import Layout from '../components/Layout/Layout'
import CustomMap from '../components/Map/CustomMap'

export default class Map extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];
        const { selectedOption } = this.state;

        return(
            <Layout>
                <div className="map-area">
                    <div className="container-fluid">
                        <div className="map-top">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="left-side">
                                        <div className="filter">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                            <div className="form-group">
                                                <Select
                                                    className="filter-select"
                                                    value={selectedOption}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                    isMulti={true}
                                                    placeholder="All Assets" 
                                                />
                                            </div>
                                            {/* <div className="form-group" style={{marginTop: "-15px"}}>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Search Assets..."
                                                />
                                            </div> */}
                                        </div>
                                        <hr/>
                                        <div className="fixed-middle">
                                            <div className="middle">
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                            <div className="middle">      
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                            <div className="middle">
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                            <div className="middle">      
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                            <div className="middle">           
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                            <div className="middle">
                                                <p>
                                                    <b className="text-left">15KSHF2455532SDFS</b> 
                                                    <span className="float-right">01/11/2018 03.10PM</span>
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="circle">
                                                            <img src="assets/images/red.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <h3>Running - RN</h3>
                                                        <span>Stuning Pecky</span><br/>
                                                        <span>Stuning Pecky</span><br/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src="assets/images/craine.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div className="sml-lst">
                                                    <ul>
                                                        <li><a href=""><i className="fas fa-search-plus"></i></a></li>
                                                        <li><a href=""><i className="fas fa-info"></i></a></li>
                                                    </ul>
                                                </div>
                                                <ul className="d-flex bg-dk justify-content-between">
                                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> Show Map</a></li>
                                                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                                    <li><a href="#"><i className="fas fa-history"></i> History</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="list">
                                        <table className="data-store-table table table-dark">
                                            <tbody>
                                                <tr>
                                                    <td><i className="fab fa-asymmetrik"></i> unassigened devices </td>
                                                    <td> <span>162</span> </td>
                                                    <td><a href="#"><i className="far fa-plus-square"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-users"></i> groups </td>
                                                    <td> <span>96</span> </td>
                                                    <td><a href="#"><i className="far fa-plus-square"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fab fa-r-project"></i> Projects </td>
                                                    <td> <span>80</span> </td>
                                                    <td><a href="#"><i className="far fa-plus-square"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-map-marker-alt"></i> Locations </td>
                                                    <td> <span>50</span> </td>
                                                    <td><a href="#"><i className="far fa-plus-square"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><i className="far fa-copyright"></i> Zones</td>
                                                    <td> <span>42</span> </td>
                                                    <td><a href="#"><i className="far fa-plus-square"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="map" id="default">
                                        <CustomMap />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-bottom">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="map-data-table">
                                        <table className="table table-striped table-dark">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Event Number</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Event Time</th>
                                                    <th scope="col">Device Coordinates</th>
                                                    <th scope="col">Battery Life</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
