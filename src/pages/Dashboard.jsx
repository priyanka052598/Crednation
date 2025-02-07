import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Guards", href: "#" },
  { name: "Users", href: "#" },
  { name: "Booking Requests", href: "#" },
  { name: "Admin Profile", href: "#" }
];

const stats = [
  {
    id: 1,
    name: "Total Guards",
    value: 2845,
    change: "+12%",
    icon: (
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={40}
          height={40}
          rx={4}
          fill="#252538"
          style={{
            mixBlendMode: "color-dodge"
          }}
        />
        <mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={40}
          height={40}
        >
          <path d="M0 0h40v40H0z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M11.6 18.8c1.324 0 2.4-1.076 2.4-2.4S12.924 14 11.6 14a2.4 2.4 0 0 0-2.4 2.4c0 1.324 1.076 2.4 2.4 2.4m16.8 0c1.324 0 2.4-1.076 2.4-2.4S29.724 14 28.4 14a2.4 2.4 0 0 0-2.4 2.4c0 1.324 1.076 2.4 2.4 2.4m1.2 1.2h-2.4a2.4 2.4 0 0 0-1.691.698 5.49 5.49 0 0 1 2.816 4.102H30.8c.664 0 1.2-.536 1.2-1.2v-1.2c0-1.324-1.076-2.4-2.4-2.4M20 20c2.321 0 4.2-1.879 4.2-4.2s-1.879-4.2-4.2-4.2a4.2 4.2 0 0 0-4.2 4.2c0 2.321 1.879 4.2 4.2 4.2m2.88 1.2h-.311c-.78.375-1.646.6-2.569.6a5.9 5.9 0 0 1-2.569-.6h-.311a4.32 4.32 0 0 0-4.32 4.32v1.08a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8v-1.08a4.32 4.32 0 0 0-4.32-4.32m-8.389-.502A2.4 2.4 0 0 0 12.8 20h-2.4A2.4 2.4 0 0 0 8 22.4v1.2c0 .664.536 1.2 1.2 1.2h2.471a5.5 5.5 0 0 1 2.82-4.102"
            fill="#FFB732"
          />
        </g>
      </svg>
    )
  },
  {
    id: 2,
    name: "Pending Approvals",
    value: 48,
    change: "+12%",
    icon: (
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={40}
          height={40}
          rx={4}
          fill="#252538"
          style={{
            mixBlendMode: "color-dodge"
          }}
        />
        <mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={40}
          height={40}
        >
          <path d="M0 0h40v40H0z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={8}
            y={8}
            width={24}
            height={24}
          >
            <path d="M8 8h24v24H8z" fill="#fff" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M26.6 18.8a5.397 5.397 0 0 0-5.4 5.4c0 2.985 2.415 5.4 5.4 5.4s5.4-2.415 5.4-5.4-2.415-5.4-5.4-5.4m2.4 5.636a.367.367 0 0 1-.364.364h-2.272a.367.367 0 0 1-.364-.364v-2.872c0-.199.165-.364.364-.364h.472c.199 0 .364.165.364.364V23.6h1.436c.199 0 .364.165.364.364zm-9-.236c0-1.043.251-2.029.683-2.906a5 5 0 0 0-.923-.094h-.626a6.53 6.53 0 0 1-5.468 0h-.626A5.04 5.04 0 0 0 8 26.24v1.56a1.8 1.8 0 0 0 1.8 1.8h13.016A6.6 6.6 0 0 1 20 24.2M16.4 20a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6"
              fill="#FFB732"
            />
          </g>
        </g>
      </svg>
    )
  },
  {
    id: 3,
    name: "Active Guards",
    value: 1937,
    change: "+12%",
    icon: (
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={40}
          height={40}
          rx={4}
          fill="#252538"
          style={{
            mixBlendMode: "color-dodge"
          }}
        />
        <mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={40}
          height={40}
        >
          <path d="M0 0h40v40H0z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={8}
            y={8}
            width={24}
            height={24}
          >
            <path d="M8 8h24v24H8z" fill="#fff" />
          </mask>
          <g mask="url(#b)">
            <path
              d="m31.336 20.566-4.32-1.687a1.16 1.16 0 0 0-.832 0l-4.32 1.687c-.402.158-.664.525-.664.934 0 4.185 2.576 7.08 4.984 8.021.36.139.675.06.832 0C28.94 28.771 32 26.17 32 21.5c0-.409-.262-.776-.664-.934M26.6 27.74v-7.091l3.581 1.398c-.21 3.267-2.283 5.078-3.581 5.693M16.4 20a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6m3.6 1.5c0-.094.03-.18.041-.27-.093-.004-.183-.03-.281-.03h-.626a6.53 6.53 0 0 1-5.468 0h-.626A5.04 5.04 0 0 0 8 26.24v1.56a1.8 1.8 0 0 0 1.8 1.8H23c.255 0 .499-.056.72-.15C21.695 27.841 20 25.074 20 21.5"
              fill="#FFB732"
            />
          </g>
        </g>
      </svg>
    )
  },
  {
    id: 4,
    name: "Total Clients",
    value: 156,
    change: "+12%",
    icon: (
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={40}
          height={40}
          rx={4}
          fill="#252538"
          style={{
            mixBlendMode: "color-dodge"
          }}
        />
        <mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={40}
          height={40}
        >
          <path d="M0 0h40v40H0z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={8}
            y={8}
            width={24}
            height={24}
          >
            <path d="M8 8h24v24H8z" fill="#fff" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M29.938 30.5H29V9.125C29 8.504 28.496 8 27.875 8h-15.75C11.504 8 11 8.504 11 9.125V30.5h-.937a.563.563 0 0 0-.563.563V32h21v-.937a.563.563 0 0 0-.562-.563M15.5 11.563c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563v1.874a.563.563 0 0 1-.562.563h-1.875a.563.563 0 0 1-.563-.562zm0 4.5c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563v1.875c0 .31-.252.562-.562.562h-1.875a.563.563 0 0 1-.563-.562zM17.938 23h-1.875a.563.563 0 0 1-.563-.562v-1.875c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563v1.875c0 .31-.252.562-.562.562m3.562 7.5h-3v-3.937c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563zm3-8.062c0 .31-.252.562-.562.562h-1.875a.563.563 0 0 1-.563-.562v-1.875c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563zm0-4.5c0 .31-.252.562-.562.562h-1.875a.563.563 0 0 1-.563-.562v-1.875c0-.311.252-.563.563-.563h1.875c.31 0 .562.252.562.563zm0-4.5c0 .31-.252.562-.562.562h-1.875a.563.563 0 0 1-.563-.562v-1.876c0-.31.252-.562.563-.562h1.875c.31 0 .562.252.562.563z"
              fill="#FFB732"
            />
          </g>
        </g>
      </svg>
    )
  }
];

const jobs = [
  {
    id: 1,
    name: "John Smith",
    guardName: "Guard Name",
    status: "Active",
    paymentStatus: "Active",
    createdAt: "24/22/24",
    location: "New York, NY",
    image: "/image-1-1@2x.png",
    verified: true,
    rating: 4.8,
    reviews: 213,
    skills: ["Armed", "Event ", "24x7 "],
    experience: "5 years experience",
    hourlyRate: 35,
    profileLink: "/profile"
  },
  {
    id: 2,
    name: "David Johnson",
    guardName: "Guard Name",
    status: "Active",
    paymentStatus: "Active",
    createdAt: "24/22/24",
    location: "Los Angeles, CA",
    image: "/image-1-1@2x.png",
    verified: true,
    rating: 4.6,
    reviews: 189,
    skills: ["Unarmed", "Patrolling", " Control"],
    experience: "7 years experience",
    hourlyRate: 40,
    profileLink: "/profile/david"
  },
  {
    id: 3,
    name: "Emily Davis",
    guardName: "Guard Name",
    status: "Active",
    paymentStatus: "Active",
    createdAt: "24/22/24",
    location: "Chicago, IL",
    image: "/image-1-1@2x.png",
    verified: false,
    rating: 4.7,
    reviews: 157,
    skills: ["Armed", "VIP ", "Night "],
    experience: "6 years experience",
    hourlyRate: 38,
    profileLink: "/profile/emily"
  },
  {
    id: 4,
    name: "Emily Davis",
    guardName: "Guard Name",
    status: "Inactive",
    paymentStatus: "Inactive",
    createdAt: "24/22/24",
    location: "Chicago, IL",
    image: "/image-1-1@2x.png",
    verified: false,
    rating: 4.7,
    reviews: 157,
    skills: ["Armed", " Protection", " Security"],
    experience: "6 years experience",
    hourlyRate: 38,
    profileLink: "/profile/emily"
  },
  {
    id: 5,
    name: "Emily Davis",
    guardName: "Guard Name",
    status: "Inactive",
    paymentStatus: "Inactive",
    createdAt: "24/22/24",
    location: "Chicago, IL",
    image: "/image-1-1@2x.png",
    verified: false,
    rating: 4.7,
    reviews: 157,
    skills: ["Armed", "VIP ", " Security"],
    experience: "6 years experience",
    hourlyRate: 38,
    profileLink: "/profile/emily"
  }
];

const activities = [
  {
    id: 1,
    name: "John Smith",
    action: "completed training certification",
    time: "2 hours ago"
  },
  {
    id: 2,
    name: "John Smith",
    action: "completed training certification",
    time: "2 hours ago"
  },
  {
    id: 3,
    name: "John Smith",
    action: "completed training certification",
    time: "2 hours ago"
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <img
            src="../../public/logo.svg"
            alt="CredNation Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold text-white">CredNation</span>
        </div>

        <nav className="flex items-center gap-6">
          {navigation.map((item) => (
            <div
              key={item.name}
              href={item.href}
              className={`text-sm cursor-pointer ${
                item.name === "Admin Profile"
                  ? "bg-purple-700 px-4 py-2 rounded-md"
                  : "text-white"
              }`}
            >
              {item.name}
            </div>
          ))}
        </nav>
      </header>
      {/* Main Section */}
      <main className="container px-6 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1f1f2b] rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                {stat.icon}
              </div>
              <div className="mt-8">
                <div className="space-x-1">
                  <span className="text-[2rem] font-medium text-white">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-[1rem] font-medium text-green-500">
                    {stat.change}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-white">{stat.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Jobs */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">JOBS</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-64 px-4 py-4 bg-[#2a2a3b] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute w-5 h-5 text-gray-400 right-3 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button className="px-6 py-4 text-white transition-colors bg-purple-700 rounded-lg hover:bg-purple-600">
                Search Job
              </button>
            </div>
          </div>

          <div className="bg-[#1f1f2b] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-left text-gray-400">
                  <th className="px-6 py-4">JOB ID</th>
                  <th className="px-6 py-4">CUSTOMER</th>
                  <th className="px-6 py-4">GUARD</th>
                  <th className="px-6 py-4">JOB STATUS</th>
                  <th className="px-6 py-4">PAYMENT STATUS</th>
                  <th className="px-6 py-4">CREATED DATE</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((guard) => (
                  <tr key={guard.id} className="border-t border-gray-800">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={guard.image || "../../public/account-circle.svg"}
                          alt={guard.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="text-white">{guard.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{guard.name}</td>
                    <td className="px-6 py-4 text-gray-400">
                      {guard.guardName}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          guard.status === "Active"
                            ? "bg-green-900/30 text-green-500"
                            : "bg-red-900/30 text-red-500"
                        }`}
                      >
                        {guard.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          guard.status === "Active"
                            ? "bg-green-900/30 text-green-500"
                            : "bg-red-900/30 text-red-500"
                        }`}
                      >
                        {guard.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {guard.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
              <span className="text-sm text-gray-400">
                Showing 5 of 2845 Jobs
              </span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-white transition-colors bg-purple-700 rounded-lg hover:bg-purple-600">
                  Previous
                </button>
                <button className="px-4 py-2 text-white transition-colors bg-purple-700 rounded-lg hover:bg-purple-600">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reecent Activity */}
        <div className="mt-8 bg-[#1f1f2b] rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <div>
                  <p className="text-white">
                    {activity.name} {activity.action}
                  </p>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-6 mt-8 border-t border-gray-800">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <p className="text-gray-400">
            © 2024 Crednation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms Of Service
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
