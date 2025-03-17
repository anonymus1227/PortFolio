import { useState } from "react";

const MeetMyTeam = () => {
  const [teamMembers] = useState([
    {
      _id: "1",
      name: "Nandeep Gowda",
      role: ".NET Full Stack Developer",
      description: "A passionate full-stack developer with expertise in .NET and modern web technologies.",
      imageUrl: "/images/nandeep.jpg",
    },
    {
      _id: "2",
      name: "Mohammad Abdullaha",
      role: ".NET Full Stack Developer",
      description: "Skilled in building scalable and high-performance .NET applications.",
      imageUrl: "/images/abdullaha.jpg",
    },
    {
      _id: "3",
      name: "Jyoti Ranjan",
      role: "Marketing",
      description: "Expert in digital marketing strategies and brand growth.",
      imageUrl: "/images/jyoti.jpg",
    },
    {
      _id: "4",
      name: "Shakti Shankar",
      role: "Data Analytics",
      description: "Transforms raw data into meaningful insights for business decisions.",
      imageUrl: "/images/shakti.jpg",
    },
    {
      _id: "5",
      name: "Rashmi Ranjan",
      role: "MERN Stack Developer",
      description: "Full-stack developer specializing in MongoDB, Express, React, and Node.js.",
      imageUrl: "/images/rashmi.jpg",
    },
    {
      _id: "6",
      name: "Tanmay Mohapatra",
      role: "Java Backend Developer",
      description: "Expert in building robust and scalable backend services using Java.",
      imageUrl: "/images/tanmay.jpg",
    },
    {
      _id: "7",
      name: "Bhabani Shankar",
      role: ".NET Full Stack Developer",
      description: "Passionate about creating high-performance and scalable .NET applications.",
      imageUrl: "/images/bhabani.jpg",
    },
  ]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-5xl font-bold mb-10 text-center text-purple-400">
        Meet My Team
      </h2>

      <p className="text-lg italic text-gray-300 text-center max-w-3xl mb-12">
        "Our team consists of highly skilled professionals, each an expert in their field.
        We combine years of experience and passion for innovation to achieve excellence."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="relative bg-white bg-opacity-10 border border-purple-500 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto border-2 border-purple-500"
            />
            <h3 className="text-2xl font-semibold mt-4 text-purple-300">{member.name}</h3>
            <p className="text-purple-400 font-medium">{member.role}</p>
            <p className="text-gray-300 text-sm mt-3">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetMyTeam;
