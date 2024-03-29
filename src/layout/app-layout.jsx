import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen  p-5 bg-blue-400">
        <div className=" w-[300px] bg-blue-400">
          <div className="flex flex-col gap-2">
            <Link className="p-2" to="/app/">
              HOME
            </Link>
            <Link className="p-2" to="/app/category">
              CATEGORY
            </Link>
            <Link className="p-2" to="/app/banners">
              BANNERS
            </Link>
            <Link className="p-2" to="/app/products">
              PRODUCTS
            </Link>
          </div>
        </div>
        <div className="flex-grow bg-white">
          <Outlet />
        </div>
      </div>
    </>
  );
};
