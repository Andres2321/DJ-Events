import Link from "next/link";
import Search from "./Search";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <div>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>

      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            //   If logged in
            <>
              <li>
                <Link href="/events/add">
                  <a>Add event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                  <button onClick={() => logout()}>
                      <FaSignOutAlt /> Logout
                  </button>
              </li>
            </>
          ) : (
            //   If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a>
                    <FaSignInAlt />
                    Log in
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
