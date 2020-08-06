import React from 'react';

const Header = (props) => {
    //const classNamees = useStyles();
    return (
        <div className="row info-box-md-container">
        <div className="col-md-2 col-xs-4">
            <div className="info-box bg-white">
                <span className="info-box-icon bg-yellow"><i className="fa fa-users"></i></span>
                <div className="info-box-content" style={{textAlign:"left"}}>
                    <span className="info-box-text">Upazila</span>
    <span className="info-box-number">{props.upazila}</span>
                </div>
            </div>
        </div>
        <div className="col-md-2 col-xs-4">
            <div className="info-box bg-white">
                <span className="info-box-icon bg-green"><i className="fa fa-users"></i></span>
                <div className="info-box-content" style={{textAlign:"left"}}>
                    <span className="info-box-text">User</span>
                    <span className="info-box-number">{props.user}</span>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-xs-4">
            <div className="info-box bg-white bg-aqua">
                <span className="info-box-icon bg-blue"><i className="fa fa-female"></i></span>
                <div className="info-box-content" style={{textAlign:"left"}}>
                    <span className="info-box-text">
                        Population
                        <span className="info-box-number">{props.population}</span>
                    </span>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-xs-4">
            <div className="info-box bg-white">
                <span className="info-box-icon bg-red"><i className="fa fa-female"></i></span>
                <div className="info-box-content" style={{textAlign:"left"}}>
                    <span className="info-box-text">
                        Elco
                    </span>
                    <span className="info-box-number">{props.elco}</span>
                </div>
            </div>
        </div>
        <div className="col-md-2 col-xs-4">
            <div className="info-box bg-white">
                <span className="info-box-icon bg-green"><i className="fa fa-child"></i></span>
                <div className="info-box-content" style={{textAlign:"left"}}>
                    <span className="info-box-text">
                    PREGNANT
                    </span>
                    <span className="info-box-number">{props.pregnant}</span>
                </div>
            </div>
        </div>
        
    </div>

    );
};

export default Header;
