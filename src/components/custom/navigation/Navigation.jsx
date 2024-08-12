import { menuItems } from "@/utils/contants";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log({ pathname });

  const handleNavigate = ({ index, path }) => {
    setCurrentIndex(index);
    navigate(path);
  };

  return (
    <ul className="p-2">
      {menuItems.map(({ path, title }, index) => (
        <li
          key={index}
          className={`my-2 p-2 rounded-md cursor-pointer hover:bg-primary hover:text-white ${
            currentIndex === index || pathname === path
              ? "bg-primary text-white"
              : ""
          } `}
          onClick={() => handleNavigate({ index, path })}
        >
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
