import { Link, useLocation } from "react-router";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const handleLogin = async () => {
    await openSignIn({ fallbackRedirectUrl: window.location.href });
  };

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                  Streamify
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          {/* TODO */}
          <ThemeSelector />

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
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
