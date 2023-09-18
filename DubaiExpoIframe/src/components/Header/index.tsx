import classNames from "classnames";
import { Link, useRouteMatch } from "react-router-dom";

import { ReactComponent as SearchIcon } from "./svg/search.svg";
import { ReactComponent as AlertIcon } from "./svg/alert.svg";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as LogoIcon } from "./svg/logo.svg";

import styles from "./index.module.css";

export const Header = ({ className }: { className?: string }) => {
  const factoryMatch = useRouteMatch("/factory/:place");
  const workshopMatch = useRouteMatch("/workshop/:place");

  // @ts-ignore
  const place = factoryMatch?.params?.place || workshopMatch?.params?.place;

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.breadcrumbs}>
        <LogoIcon />
        <div>
          <Link to="/" className={styles.navLink}>
            / Global information{" "}
          </Link>
          {place && (
            <Link to={`/factory/${place}`} className={styles.navLink}>
              / {place}{" "}
            </Link>
          )}
          {workshopMatch && (
            <Link to={`/workshop/${place}`} className={styles.navLink}>
              / Workshop
            </Link>
          )}
        </div>
      </div>
      <div className="header-info-options" />
      <div className={styles.menu}>
        <SearchIcon className="search" />
        <AlertIcon className="alert" />
        <MenuIcon className="burger" />
      </div>
    </header>
  );
};
