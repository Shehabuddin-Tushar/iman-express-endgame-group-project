import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import item_not_found from "../../../Img/course_content/item_not_found.png";
import UseAuth from "../../Hooks/UseAuth";
import UserOrder from "./UserOrder";

const UserOrders = () => {
  const { user } = UseAuth();
  const [orders, setOrders] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    fetch(
      `https://limitless-ocean-51954.herokuapp.com/email?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);

  // delete from client and backend
  const handleDelete = (id) => {
    const url = `https://limitless-ocean-51954.herokuapp.com/enrollCourse/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            if (data.deletedCount > 0) {
              swal("Poof! Your file has been deleted!", {
                icon: "success",
              });
              const remaining = orders.filter((dt) => dt._id !== id);
              setOrders(remaining);
              setNum(num + 1);
            }
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      });
  };
  return (
    <div className="container">
      {orders.length > 0 && (
        <div className="row">
          {orders.map((data) => (
            <UserOrder
              key={data._id}
              data={data}
              handleDelete={handleDelete}
            ></UserOrder>
          ))}
        </div>
      )}
      {orders.length <= 0 && (
        <div className="row">
          <div className="col-lg-12 no_class_found">
            <img
              className="img-fluid"
              src={item_not_found}
              alt="Item Not Found ..."
            />
            ;
            <div className="mb-5">
              <h2 className="siliguri_fonts">
                আমরা তোমার ক্লাসরুমে কোনো ক্লাস খুঁজে পাচ্ছি না ! <br /> সবগুলো
                কোর্স দেখ এবং তোমার পছন্দের ক্লাসটি খুজে নাও
              </h2>

              <div className="AllClassButton">
                <Link to="/courses" className="siliguri_fonts">
                  সবগুলো ক্লাস দেখ।
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
