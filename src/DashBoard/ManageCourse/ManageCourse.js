import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../../../Img/Icons/loading.gif";
import UseAuth from "../../Hooks/UseAuth";
import "./MangeCourse.css";

const ManageCourse = () => {
  const { id } = useParams();
  const { isLoading } = UseAuth();
  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(
      `https://limitless-ocean-51954.herokuapp.com/courses/mangeCourses/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, [id]);

  const data = {
    instructorName: course.instructorName,
    instructorSpecialty: course.instructorSpecialty,
    instructor: course.instructor,
    instructorRole: course.instructorRole,
    instructorIntroduction: course.instructorIntroduction,
    subTitle: course.subTitle,
    title: course.title,
    courseCover: course.courseCover,
    certificateImg: course.certificateImg,
    fee: course.fee,
    discountFee: course.discountFee,
    quize: course.quize,
    lession: course.lession,
    topic: course.topic,
    video: course.video,
    techingListTitle: course.techingListTitle,
    techingList1: course.techingList1,
    techingList2: course.techingList2,
    techingList3: course.techingList3,
    techingList4: course.techingList4,
    techingList5: course.techingList5,
    techingList6: course.techingList6,
    techingList7: course.techingList7,
    techingList8: course.techingList8,
    desc: course.desc,
    requirementDesc: course.requirementDesc,
    whoCanBuyTitle: course.whoCanBuyTitle,
    careerDesc: course.careerDesc,
  };
  const handleLoading = (e) => {
    e.preventDefault();
    console.log(course);
    fetch(
      `https://limitless-ocean-51954.herokuapp.com/courses/mangeCourses/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal(
            "Content Update Successfully!",
            "You Just Update A Blog!",
            "success"
          );
        } else {
          swal(
            "No item updated",
            "If you want to update somethings please select the field",
            "info"
          );
        }
      });
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedValue = { ...course };
    updatedValue[field] = value;
    setCourse(updatedValue);
  };
  return (
    <div className="container">
      <div className="heading_title_add_blogs">
        <h2>Update This Course {id}</h2>
      </div>
      <div className="post_form">
        {!isLoading && (
          <form onSubmit={handleLoading}>
            <div className="row text-start">
              <h1
                className="siliguri_fonts fw-bold text-center alert alert-success"
                role="alert"
              >
                About Instructor
              </h1>
              <div className="col-lg-3 col-md-3 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Instructor Name
                </small>
                <input
                  defaultValue={course.instructorName}
                  onBlur={handleOnBlur}
                  name="instructorName"
                  className="default_style blog_title"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Instructor
                  Specialty
                </small>
                <input
                  defaultValue={course.instructorSpecialty}
                  onBlur={handleOnBlur}
                  name="instructorSpecialty"
                  className="default_style blog_title"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Instructor Img
                  Link
                </small>
                <input
                  defaultValue={course.instructor}
                  onBlur={handleOnBlur}
                  name="instructor"
                  className="default_style blog_title"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Instructor
                  instructorRole
                </small>
                <textarea
                  defaultValue={course.instructorRole}
                  onBlur={handleOnBlur}
                  name="instructorRole"
                  className="textarea"
                  type="text"
                  rows={6}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Instructor
                  Introduction
                </small>
                <textarea
                  defaultValue={course.instructorIntroduction}
                  onBlur={handleOnBlur}
                  name="instructorIntroduction"
                  className="textarea"
                  type="text"
                  rows={6}
                  required
                />
              </div>
              <h1
                className="siliguri_fonts fw-bold mt-4 text-center alert alert-danger"
                role="alert"
              >
                About Courses
              </h1>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Category
                </small>
                <input
                  defaultValue={course.category}
                  onBlur={handleOnBlur}
                  name="category"
                  className="default_style blog_title"
                  type="text"
                  required
                  placeholder="Course category"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Tag
                </small>
                <input
                  defaultValue={course.tag}
                  onBlur={handleOnBlur}
                  name="tag"
                  className="default_style blog_title"
                  type="text"
                  required
                  placeholder="Course Tag"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Subtitle
                </small>
                <input
                  defaultValue={course.subTitle}
                  onBlur={handleOnBlur}
                  name="subTitle"
                  className="default_style blog_cover"
                  type="text"
                  placeholder="Course Subtitle"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Title
                </small>
                <input
                  defaultValue={course.title}
                  onBlur={handleOnBlur}
                  name="title"
                  className="default_style blog_title"
                  type="text"
                  placeholder="Course Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Cover
                </small>
                <input
                  defaultValue={course.courseCover}
                  onBlur={handleOnBlur}
                  name="courseCover"
                  className="default_style blog_cover"
                  type="text"
                  placeholder="Course Cover"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Certificate Image
                </small>
                <input
                  defaultValue={course.certificateImg}
                  onBlur={handleOnBlur}
                  name="certificateImg"
                  className="default_style blog_cover"
                  type="text"
                  placeholder="Certificate Image"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Fee
                </small>
                <input
                  defaultValue={course.fee}
                  onBlur={handleOnBlur}
                  name="fee"
                  className="default_style"
                  type="text"
                  placeholder="Course Fee"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Discount Fee
                </small>
                <input
                  defaultValue={course.discountFee}
                  onBlur={handleOnBlur}
                  name="discountFee"
                  className="default_style"
                  type="text"
                  placeholder="Discount Fee"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Quizzes
                </small>
                <input
                  defaultValue={course.quize}
                  onBlur={handleOnBlur}
                  name="quize"
                  className="default_style"
                  type="text"
                  placeholder="Quiz"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Lesson
                </small>
                <input
                  defaultValue={course.lession}
                  onBlur={handleOnBlur}
                  name="lession"
                  className="default_style"
                  type="text"
                  placeholder="Lesson"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Topic
                </small>
                <input
                  defaultValue={course.topic}
                  onBlur={handleOnBlur}
                  name="topic"
                  className="default_style"
                  type="text"
                  placeholder="Topic"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Total Videos
                </small>
                <input
                  defaultValue={course.video}
                  onBlur={handleOnBlur}
                  name="video"
                  className="default_style"
                  type="text"
                  placeholder="Total Videos"
                />
              </div>
              <div className="col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title
                </small>
                <input
                  defaultValue={course.techingListTitle}
                  onBlur={handleOnBlur}
                  name="techingListTitle"
                  className="default_style"
                  type="text"
                  placeholder="Technology List Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 01
                </small>{" "}
                <input
                  defaultValue={course.techingList1}
                  onBlur={handleOnBlur}
                  name="techingList1"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 02
                </small>{" "}
                <input
                  defaultValue={course.techingList2}
                  onBlur={handleOnBlur}
                  name="techingList2"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 03
                </small>{" "}
                <input
                  defaultValue={course.techingList3}
                  onBlur={handleOnBlur}
                  name="techingList3"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>{" "}
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 04
                </small>{" "}
                <input
                  defaultValue={course.techingList4}
                  onBlur={handleOnBlur}
                  name="techingList4"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 05
                </small>{" "}
                <input
                  defaultValue={course.techingList5}
                  onBlur={handleOnBlur}
                  name="techingList5"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 06
                </small>{" "}
                <input
                  defaultValue={course.techingList6}
                  onBlur={handleOnBlur}
                  name="techingList6"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 07
                </small>{" "}
                <input
                  defaultValue={course.techingList7}
                  onBlur={handleOnBlur}
                  name="techingList7"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Technology List
                  Title 08
                </small>{" "}
                <input
                  defaultValue={course.techingList8}
                  onBlur={handleOnBlur}
                  name="techingList8"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> The software that
                  will be taught in the course img link
                </small>{" "}
                <input
                  defaultValue={course.software}
                  onBlur={handleOnBlur}
                  name="software"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Fiverr Img Link
                </small>{" "}
                <input
                  defaultValue={course.fiverrImg}
                  onBlur={handleOnBlur}
                  name="fiverrImg"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> UpWork Img Link
                </small>{" "}
                <input
                  defaultValue={course.upWorkImg}
                  onBlur={handleOnBlur}
                  name="upWorkImg"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> FreeLancer Img
                  Link
                </small>{" "}
                <input
                  defaultValue={course.freeLanceImg}
                  onBlur={handleOnBlur}
                  name="freeLanceImg"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> 99Designs Img Link
                </small>{" "}
                <input
                  defaultValue={course.design99Img}
                  onBlur={handleOnBlur}
                  name="design99Img"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> PeoplePerHour Img
                  Link
                </small>{" "}
                <input
                  defaultValue={course.peoplePerHourImg}
                  onBlur={handleOnBlur}
                  name="peoplePerHourImg"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Toptal Img Link
                </small>{" "}
                <input
                  defaultValue={course.toptalImg}
                  onBlur={handleOnBlur}
                  name="toptalImg"
                  className="default_style"
                  type="text"
                  placeholder="Careers Title"
                />
              </div>
              <div className="col-lg-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Course Description
                </small>
                <textarea
                  defaultValue={course.desc}
                  onBlur={handleOnBlur}
                  name="desc"
                  rows="7"
                  type="text"
                  className="textarea"
                  placeholder="Course Description"
                />
              </div>
              <div className="col-lg-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Requirement
                  Description
                </small>
                <textarea
                  defaultValue={course.requirementDesc}
                  onBlur={handleOnBlur}
                  name="requirementDesc"
                  rows="7"
                  type="text"
                  className="textarea"
                  placeholder="Requirement Description"
                />
              </div>
              <div className="col-lg-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Who Can Buy?
                </small>
                <textarea
                  defaultValue={course.whoCanBuyTitle}
                  onBlur={handleOnBlur}
                  name="whoCanBuyTitle"
                  rows="7"
                  type="text"
                  className="textarea"
                  placeholder="Who Can Buy"
                />
              </div>
              <div className="col-lg-6 col-12">
                <small className="input_title">
                  {" "}
                  <i className="fas fa-info-circle mx-2"></i> Career Description
                </small>
                <textarea
                  defaultValue={course.careerDesc}
                  onBlur={handleOnBlur}
                  name="careerDesc"
                  rows="7"
                  type="text"
                  className="textarea"
                  placeholder="Career Desc"
                />
              </div>
            </div>
            <button type="submit" className="default_btn">
              Update
            </button>
          </form>
        )}
        {isLoading && (
          <img className="img-fluid loading" src={Loading} alt="" />
        )}
      </div>
    </div>
  );
};

export default ManageCourse;
