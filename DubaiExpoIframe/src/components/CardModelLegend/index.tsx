import classNames from "classnames";

import styles from "./index.module.css";

export const CardModelLegend = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(styles.sideButtons, className)}>
      <div className={styles.sideButton}>
        <span className={classNames(styles.sideButtonIcon, styles.sideButtonIconRhombus)} />
        DC
      </div>
      <div className={styles.sideButton}>
        <span className={classNames(styles.sideButtonIcon, styles.sideButtonIconCircle)} />
        Plant
      </div>
      <div className={styles.sideButton}>
        <svg
          className={classNames(styles.iconStar)}
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1002 14.3075C18.7894 14.6113 18.6466 15.0507 18.7174 15.4816L19.7841 21.437C19.8741 21.9417 19.6629 22.4526 19.2441 22.7443C18.8338 23.0469 18.2879 23.0832 17.8403 22.8411L12.5262 20.045C12.3414 19.9457 12.1363 19.8925 11.9263 19.8864H11.6011C11.4883 19.9034 11.378 19.9397 11.2772 19.9953L5.96187 22.8048C5.69911 22.9379 5.40155 22.9851 5.10998 22.9379C4.39968 22.8024 3.92574 22.1197 4.04212 21.3995L5.10998 15.4441C5.18077 15.0095 5.03799 14.5677 4.72723 14.259L0.394599 10.0225C0.0322468 9.66783 -0.0937368 9.13523 0.0718416 8.65469C0.232621 8.17535 0.642967 7.82553 1.1385 7.74685L7.10172 6.87412C7.55526 6.82691 7.95361 6.54851 8.15759 6.13696L10.7852 0.702058C10.8476 0.581014 10.928 0.469653 11.0252 0.375238L11.1332 0.290507C11.1896 0.227564 11.2544 0.175515 11.3264 0.133149L11.4572 0.0847312L11.6611 0H12.1663C12.6174 0.0472074 13.0146 0.319558 13.2221 0.726267L15.8846 6.13696C16.0766 6.53277 16.4497 6.80754 16.8804 6.87412L22.8437 7.74685C23.3476 7.81948 23.7687 8.17051 23.9355 8.65469C24.0927 9.14007 23.9571 9.67267 23.5876 10.0225L19.1002 14.3075Z"
            fill="white"
          />
        </svg>
        High Availability Plant
      </div>
    </div>
  );
};
