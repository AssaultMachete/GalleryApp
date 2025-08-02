import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <nav className="w-full flex justify-evenly items-center bg-[#222222] text-white font-medium p-3 drop-shadow-lg">
        <Link to="/">Home</Link>
        <Link to="/kagariGallery">Kagari</Link>
        <Link to="/karenGallery">Karen</Link>
      </nav>
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
