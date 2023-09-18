import { Select, Option } from "@ui5/webcomponents-react";

import { sendMessage } from "../../utils/sendMessage";

import styles from "./index.module.css";

export const RegionSelect = ({ regionName }: { regionName: string }) => {
  return (
    <div className={styles.wrapper}>
      <Select
        className={styles.select}
        onChange={e => {
          // @ts-ignore
          const region = e.detail.selectedOption?.value;
          sendMessage(region);
          sendMessage(JSON.stringify({ Region: region, Country: "" }));
        }}
      >
        {[
          ["global", "Select region", ""],
          ["americas", "AMERICAS", "AMERICAS"],
          ["apj", "APJ", "APJ"],
          ["emea", "EMEA", "EMEA"]
        ].map(([selectedName, title, value]) => (
          <Option selected={regionName === selectedName} value={value} key={selectedName}>
            {title}
          </Option>
        ))}
      </Select>
    </div>
  );
};
