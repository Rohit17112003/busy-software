"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Button from "../common/Button";
import OverlayModal from "../common/OverlayModal";
import { LogoutModal } from "../common/LogoutModal";
import { logout } from "../redux/slice/auth-slice";
import Image from "next/image";

export default function Header({
  onMenuClick,
  title,
  description,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [profileOpen, setProfileOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const click = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", click);

    return () => {
      document.removeEventListener("mousedown", click);
    };
  }, []);

  const today = useMemo(() => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  const pageTitle =
    title || `Welcome, ${user?.name || " Mr. Otor John"}`;

  const pageDescription =
    description || `Today is ${today}.`;

  const handleLogout = async () => {
    await dispatch(logout());
    location.reload();
  };

  return (
    <>
      <header className="sticky top-0 z-30 ">
        <div className="h-20 px-6 flex items-center justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-4">

            <Button
              onClick={onMenuClick}
              className="lg:hidden h-10 w-10 rounded-lg hover:bg-gray-100"
            >
              <i className="ri-menu-line text-xl"></i>
            </Button>

            <div>

              <h2 className="text-[1.15rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold text-[#000000]">
                {pageTitle}
              </h2>

              <p className="text-[12px] font-medium text-[#262626] ">
                {pageDescription}
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-5">

            {/* <button className="relative">
              <i className="ri-notification-3-line text-xl text-gray-600"></i>

              <span className="absolute top-1 right-0 w-2 h-2 rounded-full bg-red-500"></span>
            </button> */}

            <div
              ref={profileRef}
              className="relative"
            >
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-9 h-9 overflow-hidden rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold uppercase">
                  {/* {user?.name?.charAt(0)} */}
                   <Image src="/img/profile.png" alt="profile" width={100} height={100} className="w-9 h-9 lg:w-full lg:h-full" />
                </div>

                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">
                    {user?.name || "Otor John"}
                  </p>

                  <p className="text-xs text-gray-500">
                    {user?.role || "HR Office"}
                  </p>
                </div>

                <i className="ri-arrow-down-s-line"></i>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-44 bg-white rounded-lg  shadow overflow-hidden">

                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                  >
                    <i className="ri-user-line"></i>

                    Profile
                  </Link>

                  <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                  >
                    <i className="ri-settings-3-line"></i>

                    Settings
                  </Link>

                  <button
                    onClick={() => setLogoutOpen(true)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-gray-50 "
                  >
                    <i className="ri-logout-box-r-line"></i>

                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      </header>

      <OverlayModal
        isOpen={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        showCloseIcon={false}
        modalClass="w-lg"
      >
        <LogoutModal
          onCancel={() => setLogoutOpen(false)}
          onConfirm={handleLogout}
        />
      </OverlayModal>
    </>
  );
}