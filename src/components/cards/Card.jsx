import React from "react";
import { useNavigate } from "react-router-dom";
import certifications from "../../utils/Certifications";


// const certifications = [
//   {
//     title: "Frontend Developer",
//     by: "by Certify",
//     image: frontend,
//     route: "/certifications/frontend",
//   },
//   {
//     title: "MERN Stack Developer",
//     by: "by Certify",
//     image: mongo,
//     route: "/certifications/mern",
//   },
//   {
//     title: "Backend Developer",
//     by: "by Certify",
//     image: backend,
//     route: "/certifications/backend",
//   },
//   {
//     title: "Python Developer",
//     by: "by Certify",
//     image: python,
//     route: "/certifications/python",
//   },
//   {
//     title: "AWS Certification",
//     by: "by Certify",
//     image: aws,
//     route: "/certifications/aws",
//   },
// ];

const Card = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {certifications.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto h-40 flex flex-col items-center justify-center cursor-pointer "
          onClick={() => handleClick(item.route)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 object-cover"
          />
          <div className="p-4">
            <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
            <p className="text-sm font-medium text-orange-500 mt-1">
              {item.by}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
