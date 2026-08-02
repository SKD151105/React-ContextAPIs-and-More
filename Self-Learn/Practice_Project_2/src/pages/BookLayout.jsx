import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <div>
      <Outlet context={{ hello: "World" }} />

      <div className="menu">
        <ul className="text-blue-200 mt-5 flex gap-3 list-none w-[14rem] justify-between mx-auto">
          <li>
            <Link to="/book/1">Book-1</Link>
          </li>
          <li>
            <Link to="/book/2">Book-2</Link>
          </li>
          <li>
            <Link to="/book/new">New-Book</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
