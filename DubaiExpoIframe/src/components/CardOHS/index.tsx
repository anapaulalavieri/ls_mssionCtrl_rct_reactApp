import React from "react";

import { List, ListItem } from "../List";
import { KPICard } from "../KPICard";

import styles from "./index.module.css";

export const CardOHS = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <KPICard className={styles.card} hasPadding title="OHS" variant={2}>
      <List>
        <ListItem loading={isLoading} name="Serious Injury" value="1" />
        <ListItem loading={isLoading} name="Minor Injury" value="2" />
        <ListItem loading={isLoading} name="Property Damage" value="1" />
        <ListItem loading={isLoading} name="Near Misses" value="1" />
      </List>
    </KPICard>
  );
};
