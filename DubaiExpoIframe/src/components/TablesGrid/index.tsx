import React from "react";
import classNames from "classnames";

import { sendMessage } from "../../utils/sendMessage";
import { padNumber } from "../../utils/padNumber";

import styles from "./index.module.css";

const Table = ({
  // activeColumnIndex,
  data,
  // setActiveColumnIndex,
  title,
  selectedPeriod
}: {
  // activeColumnIndex: number | null;
  data: any;
  // setActiveColumnIndex: (index: number | null) => void;
  title: string;
  selectedPeriod: string;
}) => {
  if (!data) {
    return null;
  }

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableTitle}>{title}</div>
      <div className={styles.table}>
        {data.map(({ values, name }: any, i: number) => (
          <div
            key={name}
            className={classNames(
              styles.column,
              name === selectedPeriod.replace(/ /g, "").toLocaleUpperCase() && styles.column_active
            )}
            // onMouseEnter={() => {
            //   setActiveColumnIndex(i);
            // }}
            // onMouseLeave={() => {
            //   setActiveColumnIndex(null);
            // }}
          >
            {values.map((value: any, i: number) => (
              <div
                key={i}
                className={classNames(
                  styles.columnItem,
                  value < 80 ? styles.columnItem_danger : value < 90 ? styles.columnItem_warning : null
                )}
              >
                {padNumber(value)}
              </div>
            ))}
            <div className={classNames(styles.columnItem, styles.columnItem_definition)}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TablesGrid = ({
  place,
  className,
  data,
  selectedPeriod,
  selectedMachine,
  selectedLine
}: {
  place: string;
  selectedPeriod: string;
  className?: string;
  data: any;
  selectedMachine?: string | null;
  selectedLine?: string;
}) => {
  // const [activeColumnIndex, setActiveColumnIndex] = useState<number | null>(null);

  if (!data) {
    return null;
  }

  return (
    <div className={styles.tablesGridWrapper}>
      <div className={styles.legend}>
        {data?.names.map((name: string, i: number) => (
          <div
            className={classNames(styles.legendItem, selectedMachine === name && styles.legendItem_active)}
            key={name}
            onClick={() => {
              if (!window.location.hash.includes("workshop")) {
                window.location.hash = `/workshop/${place}/${name}`;
              }

              if (name.includes("Area") || name.includes("Line")) {
                sendMessage("AreaDetails " + JSON.stringify({ EXPLINE: name }));
              } else {
                sendMessage("MachineDetails " + JSON.stringify({ RESDESCR: name, EXPLINE: selectedLine }));
              }
            }}
          >
            <span className={classNames(styles.legendPin, styles[`legendPin${i + 1}`])} />
            {name}
          </div>
        ))}
      </div>
      <div className={styles.tables}>
        {data?.tables.map(({ name, data: tableData }: any, i: number) => (
          <Table
            data={tableData}
            key={name}
            // setActiveColumnIndex={setActiveColumnIndex}
            // activeColumnIndex={activeColumnIndex}
            selectedPeriod={selectedPeriod}
            title={name}
          />
        ))}
      </div>
    </div>
  );
};
