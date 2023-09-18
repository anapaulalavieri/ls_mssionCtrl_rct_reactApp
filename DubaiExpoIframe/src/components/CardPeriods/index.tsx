import classNames from "classnames";

import styles from "./index.module.css";

export const CardPeriods = ({
  onPeriodSelect,
  selectedPeriod
}: {
  onPeriodSelect: (period: string) => void;
  selectedPeriod: string;
}) => {
  return (
    <div className={styles.wrapper}>
      {["DTD", "3 Day", "WTD", "MTD", "YTD"].map(name => (
        <div
          className={classNames(styles.item, name === selectedPeriod && styles.item_active)}
          key={name}
          onClick={() => {
            onPeriodSelect(name);
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
