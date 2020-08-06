import React from 'react';
import Mapcomponent from './MapGeojson'
import { getColor } from '../utils/colors';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
    return {
        labels: MONTHS,
        datasets: [
            {
                label: 'Dataset 1',
                backgroundColor: getColor('primary'),
                borderColor: getColor('primary'),
                borderWidth: 1,
                data: [
                    567,
                    987,
                    300,
                    123,
                    653,
                    456,
                    432,
                ],
                ...moreData,
            },
            {
                label: 'Dataset 2',
                backgroundColor: getColor('secondary'),
                borderColor: getColor('secondary'),
                borderWidth: 1,
                data: [
                    537,
                    927,
                    310,
                    432,
                    234,
                    432,
                    234,
                ],
                ...moreData2,
            },
        ],
    };
};

const Mapblock = () => {

    return (
        <div className="row" style={{ marginTop: "15px" }}>
            <div className="col-md-6">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb map-breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Bangladesh</a></li>
                    </ol>
                </nav>
                <div className="row" style={{ height: "650" }}>
                    <Mapcomponent />
                </div>
            </div>
            <div className="col-md-6">
                <div className="panel panel-success population-panel box box-danger" style={{ height: "650", width: "auto" }}>
                    <div className="panel-heading">
                        <div className="panel-title indicatortitle"></div>
                    </div>

                    <div className="panel-body">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#pop-graph" aria-controls="pop-graph" role="tab" data-toggle="tab"> <span className="glyphicon glyphicon-stats"></span> Chart </a>
                            </li>
                            <li role="presentation">
                                <a href="#pop-tabular" aria-controls="pop-tabular" role="tab" data-toggle="tab"> <span className="glyphicon glyphicon-calendar"></span> Table </a>
                            </li>
                        </ul>

                        <div className="tab-content tab-body">
                            <div role="tabpanel" className="tab-pane active" id="pop-graph">
                                <div id="pop-chart-container">
                                    <Card>
                                        <CardHeader>Bar</CardHeader>
                                        <CardBody>
                                            <Bar data={genLineData()} />
                                        </CardBody>
                                    </Card>
                                    <div id="chart_div" style={{ height: "350", marginTop: "10" }}></div>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane" id="pop-tabular">
                                <div className="table-responsive no-padding">
                                    <table id="data-table" class="table table-bordered table-striped table-hover">

                                        <thead id="tableHeader">
                                            <tr id="tableRow" role="row">
                                                <th rowspan="2" class="sorting_asc" colspan="1">District</th>
                                                <th colspan="2" class="center colspan" rowspan="1">FWA</th>
                                                <th colspan="2" class="center colspan" rowspan="1">FPI</th>
                                                <th colspan="2" class="center colspan" rowspan="1">FWV</th>
                                                <th colspan="2" class="center colspan" rowspan="1">SACMO</th>
                                            </tr>
                                            <tr id="tableRow" role="row">
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Sanc.</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Filled-up</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Sanc.</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Filled-up</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Sanc.</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Filled-up</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Sanc.</th>
                                                <th class="" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" >Filled-up</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBody">
                                            <tr>
                                                <td>Rajshahi</td>
                                                <td>344</td>
                                                <td>543</td>
                                                <td>234</td>
                                                <td>654</td>
                                                <td>234</td>
                                                <td>123</td>
                                                <td>654</td>
                                                <td>654</td>
                                            </tr>
                                            <tr>
                                                <td>Dhaka</td>
                                                <td>344</td>
                                                <td>543</td>
                                                <td>234</td>
                                                <td>654</td>
                                                <td>234</td>
                                                <td>123</td>
                                                <td>654</td>
                                                <td>654</td>
                                            </tr>
                                            <tr>
                                                <td>Chittagonj</td>
                                                <td>344</td>
                                                <td>543</td>
                                                <td>234</td>
                                                <td>654</td>
                                                <td>234</td>
                                                <td>123</td>
                                                <td>654</td>
                                                <td>654</td>
                                            </tr>
                                            <tr>
                                                <td>khulna</td>
                                                <td>344</td>
                                                <td>543</td>
                                                <td>234</td>
                                                <td>654</td>
                                                <td>234</td>
                                                <td>123</td>
                                                <td>654</td>
                                                <td>654</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="pop-downlaod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Mapblock;