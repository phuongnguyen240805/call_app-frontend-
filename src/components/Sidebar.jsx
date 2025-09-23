import { Link, useLocation, useNavigate } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, HomeIcon, ShipWheelIcon, UsersIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import useLogout from "../hooks/useLogout";
import Button from "./Button";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;
  const isChatPage = location.pathname?.startsWith("/chat");
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const { logoutMutation } = useLogout();

  const handleLogin = async () => {
    await openSignIn({ fallbackRedirectUrl: window.location.href });
  };

  return (
    <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2.5">
          <ShipWheelIcon className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
            CallApp
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/" ? "btn-active" : ""
            }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Trang chủ</span>
        </Link>

        <Link
          to="/friends"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/friends" ? "btn-active" : ""
            }`}
        >
          <UsersIcon className="size-5 text-base-content opacity-70" />
          <span>Bạn bè</span>
        </Link>

        <Link
          to="/notifications"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/notifications" ? "btn-active" : ""
            }`}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Thông báo</span>
        </Link>
      </nav>

      {/* USER PROFILE SECTION */}
      <div className="p-4 border-t border-base-300 mt-auto">
        <div className="flex items-center gap-3">
          <div className="avatar">
            {
              // login
              !user ? (
                <Button
                  primary
                  className="h-10 w-20"
                  onClick={handleLogin}>
                  Login
                </Button>
              ) : (
                <UserButton />
              )
            }
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{authUser?.fullName}</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="size-2 rounded-full bg-success inline-block" />
              Đang hoạt động
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
