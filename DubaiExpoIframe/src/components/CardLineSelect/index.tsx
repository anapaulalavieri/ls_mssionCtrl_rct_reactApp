import { useEffect } from "react";
import { Select, Option } from "@ui5/webcomponents-react";

import { sendMessage } from "../../utils/sendMessage";

import styles from "./index.module.css";

export const CardLineSelect = ({
  lines,
  selectedLineName,
  onLineChange
}: {
  lines: any;
  selectedLineName: string;
  onLineChange: (line: string) => void;
}) => {
  useEffect(() => {
    return () => {
      if (!lines) {
        return;
      }

      onLineChange(lines[0]);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Select
        className={styles.select}
        onChange={e => {
          // @ts-ignore
          const line = e.detail.selectedOption?.value;
          onLineChange(line);
          sendMessage("AreaDetails " + JSON.stringify({ EXPLINE: line }));
        }}
      >
        {lines.map((lineName: any) => (
          <Option selected={selectedLineName === lineName} value={lineName} key={lineName}>
            {lineName}
          </Option>
        ))}
      </Select>
    </div>
  );
};
