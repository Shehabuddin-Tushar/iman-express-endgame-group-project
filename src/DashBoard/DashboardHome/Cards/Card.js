import React from "react";
import lineChartImg from "../../images/chart1.png";
import lineChart2 from "../../images/chart2.png";
import lineChartImg2 from "../../images/chart3.png";
import {
  default as lineChart1,
  default as lineChartImg1,
} from "../../images/flow1.png";
import "../DashboardHome.css";
const Card = () => {
  return (
    <div className="container">
      <div className="row cards">
        <div className="col-lg-4 col-md-4 col-12 ">
          <div className="card_heading_text_wrapper">
            <div className="card_heading_text siliguri_fonts">
              <h6>Total Active Students</h6>
              <div>
                {" "}
                <img src={lineChartImg} alt="" /> <span>+2.6%</span>
              </div>
              <h3>18,765</h3>
            </div>
            <img src={lineChart1} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 ">
          <div className="card_heading_text_wrapper">
            <div className="card_heading_text siliguri_fonts">
              <h6>Total Teacher</h6>
              <div>
                {" "}
                <img src={lineChartImg} alt="" /> <span>+2.6%</span>
              </div>
              <h3>15,765</h3>
            </div>
            <img src={lineChartImg1} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 ">
          <div className="card_heading_text_wrapper">
            <div className="card_heading_text siliguri_fonts">
              <h6>Total Enrolled</h6>
              <div>
                {" "}
                <img src={lineChart2} alt="" /> <span>-2.6%</span>
              </div>
              <h3>18K +</h3>
            </div>
            <img src={lineChartImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
