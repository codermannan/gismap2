import React from "react";

const Carousel = () => {
    return (

        <div className="row">
            <div className="col-md-12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="chart">
                                <div id="piechart_div"></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="chart">
                                <div id="barchart_div"></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="chart">
                                <div id="chartarea_div"></div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>


    );
}

export default Carousel;


/*import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {

    return  (

        <div classNameName="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://www.tutorialspoint.com/javafx/images/bar_chart_example.jpg" />
                </div>
                <div>
                    <img src="https://www.tutorialspoint.com/javafx/images/bar_chart_example.jpg" />
                </div>
                <div>
                    <img src="https://www.tutorialspoint.com/javafx/images/bar_chart_example.jpg" />
                </div>
            </Carousel>
        </div>

        );
}*/

