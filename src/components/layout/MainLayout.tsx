import React, { useState } from "react";

const items = [
  { key: "1", label: "Dashboard1" },
  { key: "2", label: "Dashboard2" },
  { key: "3", label: "Dashboard3" },
  { key: "4", label: "Dashboard4" },
  { key: "5", label: "Dashboard5" },
];

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 p-5 transition-all ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <button
          className="mb-4 bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "☰" : "✖"}
        </button>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.key}
              className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">Header</header>
        <main className="flex-1 p-6">Hello World</main>
      </div>
    </div>
  );
};

export default MainLayout;
