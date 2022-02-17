import React from "react";
import lab from "../images/img1.png";
import Card from "./Cards/Card";
import "./DashboardHome.css";
import DashboardHomeCard from "./DashboardHomeCard";
import DashboardHomeCard2 from "./DashboardHomeCard2";

const DashboardHome = () => {
  return (
    <div className="container">
      <div className="dashboard_heading_wrapper">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="dashboard_welcome_wrapper">
              <div className="row">
                <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center">
                  <div className="dashboard_text siliguri_fonts">
                    <h2>
                      ড্যাশবোর্ডে আপনাকে <span>স্বাগতম।</span>
                    </h2>
                    <p>
                      একটি ড্যাশবোর্ড হল এক ধরনের গ্রাফিকাল ইউজার ইন্টারফেস যা
                      প্রায়শই একটি নির্দিষ্ট উদ্দেশ্য বা ব্যবসায়িক প্রক্রিয়ার
                      সাথে প্রাসঙ্গিক মূল কর্মক্ষমতা সূচকের (KPIs) এক নজরে ভিউ
                      প্রদান করে।
                    </p>
                    <button className="classic_btn">
                      পুরো ড্যাশবোর্ডে দেখুন
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <img src={lab} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="dashboard_card_wrapper">
              <img
                src="https://nur-it-institute.web.app/static/media/workOffice.1507ca9955c35bac9c0b.webp"
                className="img-fluid"
                alt=""
              />
              <div className="dashboard_card_overly"></div>
              <div className="card_text siliguri_fonts">
                <h3>Dashboard Card</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur, dolorum? Repellat, nemo nihil vero reiciendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <Card />
      {/* Card */}
      {/* chart */}
      <div className="row charts">
        <div className="col-lg-5 col-md-6 col-12 ">
          <div className="chart_card_wrapper">
            <h2 className="siliguri_fonts fw-bold">Total courses</h2>
            <div className="chart_card">
              <DashboardHomeCard />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-12">
          <div className="chart_card_wrapper">
            <div className="chart_card">
              <DashboardHomeCard2 />
            </div>
          </div>
        </div>
      </div>
      {/* chart */}
    </div>
  );
};

export default DashboardHome;
