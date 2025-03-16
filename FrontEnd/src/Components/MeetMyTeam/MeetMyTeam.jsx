import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetMyTeam = () => {
  const [teamMembers] = useState([
    {
      _id: "1",
      name: "Rashmi Ranjan",
      role: "Software Engineer",
      description: "An expert in full-stack development with a passion for clean and efficient code.",
      imageUrl: "/images/rashmi.jpg",
    },
    {
      _id: "2",
      name: "Jyoti Ranjan",
      role: "UI/UX Designer",
      description: "Brings creative designs to life with an eye for detail and user experience.",
      imageUrl: "/images/jyoti.jpg",
    },
    {
      _id: "3",
      name: "Shakti Sankar",
      role: "Project Manager",
      description: "Leads projects with a focus on delivering high-quality and timely results.",
      imageUrl: "/images/shakti.jpg",
    },
  ]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4">Meet My Team</h2>
          <p className="text-lg italic text-gray-300">
            "Our team is a group of highly skilled professionals, each an expert in their field. Together, we combine years of experience and passion for innovation to achieve excellence in every project we undertake."
          </p>
        </div>

        <div className="md:w-1/2 bg-white bg-opacity-10 p-8 rounded-xl shadow-xl border border-purple-500 backdrop-blur-md">
          <Slider {...sliderSettings}>
            {teamMembers.map((member) => (
              <div key={member._id} className="p-4">
                <div className="p-6 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 shadow-lg border border-gray-600 text-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-purple-500"
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                  <p className="text-gray-300 text-sm mt-2 overflow-hidden line-clamp-5">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MeetMyTeam;
