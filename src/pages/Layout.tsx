import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { memo } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default memo(Layout);
