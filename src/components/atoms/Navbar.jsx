import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">FOSSTrak</button>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>List your event</a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="navbar bg-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">FOSSTrak</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="primary">
              <a>List your event!</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
