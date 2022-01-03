import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import AuthContext, { AuthProvider } from "@/context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Eitango</a>
        </Link>
      </div>

      <nav>
        <ul>
          {user ? (
            <div className="btn">
              <li>
                <div className={styles.logout} onClick={() => logout()}>
                  <FaSignOutAlt />
                  Logout
                </div>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/account/login">
                  <a className={styles.login}>
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
