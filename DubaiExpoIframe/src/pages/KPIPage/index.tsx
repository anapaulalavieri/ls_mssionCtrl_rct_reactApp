import React, { useEffect } from "react";
import classNames from "classnames";

import { setLoaded } from "../../utils/setLoaded";

import { GlobeModelMemo } from "../../components/GlobeModel";
import { KPICard } from "../../components/KPICard";
import { KPICardItem } from "../../components/KPICardItem";
import { KPIChart } from "../../components/KPIChart";
import { KPIChart2 } from "../../components/KPIChart2";
import { List, ListItem } from "../../components/List";
import { Pin } from "../../components/Pin";
import { SimpleBarChartLine, SimpleBarChartLineItem } from "../../components/SimpleBarChartLine";
import LoadingSkeleton from "../../components/LoadingSkeleton";

import styles from "./index.module.css";
import { CardModelLegend } from "../../components/CardModelLegend";

const dataByRegionName = {
  global: {
    diversityRatio: "55.6%",
    totalHeadcount: 900,
    male: 44.4,
    female: 38.9,
    lgbt: 16.7,
    otif: 0.79,
    otifMtd: 0.78,
    otifWtd: 0.0,
    cashPosition: 2.1,
    revenue: 60.4,
    revenueMtd: 7.6,
    revenueWtd: 1.9,
    revenue3day: 0.8,
    revenueDtd: 0.3,
    cogs: 44.4,
    cogsMtd: 6.4,
    cogsWtd: 1.5,
    cogs3day: 0.6,
    cogsDtd: 0.2,
    profit: 17.4,
    profitMtd: 1.6,
    profitWtd: 0.4,
    profit3day: 0.2,
    profitDtd: 0.1
  },
  americas: {
    diversityRatio: "53.3%",
    totalHeadcount: 300,
    male: 46.7,
    female: 38.3,
    lgbt: 15.0,
    otif: 0.0,
    otifMtd: 0.0,
    otifWtd: 0.0,
    cashPosition: 1.7,
    revenue: 16.4,
    revenueMtd: 2.0,
    revenueWtd: 0.5,
    revenue3day: 0.2,
    revenueDtd: 0.1,
    cogs: 12.1,
    cogsMtd: 1.7,
    cogsWtd: 0.4,
    cogs3day: 0.2,
    cogsDtd: 0.1,
    profit: 4.6,
    profitMtd: 0.4,
    profitWtd: 0.1,
    profit3day: 0.0,
    profitDtd: 0.0
  },
  apj: {
    diversityRatio: "53.3%",
    totalHeadcount: 300,
    male: 46.7,
    female: 38.3,
    lgbt: 15.0,
    otif: 0.0,
    otifMtd: 0.0,
    otifWtd: 0.0,
    cashPosition: 0.3,
    revenue: 22.2,
    revenueMtd: 2.7,
    revenueWtd: 0.7,
    revenue3day: 0.3,
    revenueDtd: 0.1,
    cogs: 16.4,
    cogsMtd: 2.3,
    cogsWtd: 0.5,
    cogs3day: 0.2,
    cogsDtd: 0.1,
    profit: 6.5,
    profitMtd: 0.6,
    profitWtd: 0.2,
    profit3day: 0.1,
    profitDtd: 0.0
  },
  emea: {
    diversityRatio: "60.0%",
    totalHeadcount: 300,
    male: 40.0,
    female: 40.0,
    lgbt: 20.0,
    otif: 0.79,
    otifMtd: 0.78,
    otifWtd: 0.0,
    cashPosition: 0.1,
    revenue: 21.9,
    revenueMtd: 2.9,
    revenueWtd: 0.7,
    revenue3day: 0.3,
    revenueDtd: 0.1,
    cogs: 16.1,
    cogsMtd: 2.3,
    cogsWtd: 0.5,
    cogs3day: 0.2,
    cogsDtd: 0.1,
    profit: 6.2,
    profitMtd: 0.6,
    profitWtd: 0.2,
    profit3day: 0.1,
    profitDtd: 0.0
  }
};

export const KPIPage = ({
  className,
  modelData,
  regionName
}: {
  className?: string;
  modelData: { [key: string]: string };
  regionName: string;
}) => {
  useEffect(() => {
    setLoaded();
  }, []);

  const [loading, setLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  // @ts-ignore
  const currentData = dataByRegionName[regionName];

  if (!currentData) {
    return null;
  }

  return (
    <div className={classNames(styles.kpiPage, className)}>
      <GlobeModelMemo className={styles.kpiModel} data={modelData} isOuterNavigation />

      <CardModelLegend className={styles.cardModelLegend} />

      <KPICard
        className={styles.kpiCardSales}
        title="Sales"
        subtitle="YTD – $M"
        row
        titleWrapperClassName={styles.kpiCardSalesTitleWrapper}
      >
        <div className={styles.kpiCardSalesInner}>
          <KPICard className={styles.kpiCardSalesLeft} hasPadding variant={1} row>
            <div className={styles.cardSalesCell}>
              <KPICardItem
                animateKpi
                hoverChildren={
                  <List className={styles.kpiCard3List}>
                    <ListItem name="DTD" value={currentData.revenueDtd} />
                    <ListItem name="3 day" value={currentData.revenue3day} />
                    <ListItem name="WTD" value={currentData.revenueWtd} />
                    <ListItem name="MTD" value={currentData.revenueMtd} />
                  </List>
                }
                loading={loading}
                kpi={currentData.revenue}
                status="primary"
                title={
                  <>
                    <Pin type={1} />
                    Revenue
                  </>
                }
                noPadding
              >
                <List isHorizontal>
                  <ListItem loading={loading} name="MTD" value={currentData.revenueMtd} />
                </List>
              </KPICardItem>
            </div>

            <div className={styles.cardSalesCell}>
              <KPICardItem
                animateKpi
                hoverChildren={
                  <List className={styles.kpiCard3List}>
                    <ListItem name="DTD" value={currentData.cogsDtd} />
                    <ListItem name="3 day" value={currentData.cogs3day} />
                    <ListItem name="WTD" value={currentData.cogsWtd} />
                    <ListItem name="MTD" value={currentData.cogsMtd} />
                  </List>
                }
                loading={loading}
                kpi={currentData.cogs}
                title={
                  <>
                    <Pin type={2} />
                    COGS
                  </>
                }
                noPadding
              >
                <List isHorizontal>
                  <ListItem loading={loading} name="MTD" value={currentData.cogsMtd} />
                </List>
              </KPICardItem>
            </div>

            <div className={classNames(styles.cardSalesCell, styles.cardSalesCellLast)}>
              <KPICardItem
                animateKpi
                hoverChildren={
                  <List className={styles.kpiCard3List}>
                    <ListItem name="DTD" value={currentData.profitDtd} />
                    <ListItem name="3 day" value={currentData.profit3day} />
                    <ListItem name="WTD" value={currentData.profitWtd} />
                    <ListItem name="MTD" value={currentData.profitMtd} />
                  </List>
                }
                loading={loading}
                kpi={currentData.profit}
                title={
                  <>
                    <Pin type={3} />
                    Gross Profit
                  </>
                }
                noPadding
              >
                <List isHorizontal>
                  <ListItem loading={loading} name="MTD" value={currentData.profitMtd} />
                </List>
              </KPICardItem>
            </div>

            <div className={styles.cardSalesChart}>
              {loading ? <LoadingSkeleton height="90px" width="100%" /> : <KPIChart regionName={regionName} />}
            </div>
          </KPICard>

          <KPICard className={styles.kpiCardSalesRight} hasPadding row variant={3}>
            <div className={styles.kpiCard6}>
              <KPICardItem
                animateKpi
                loading={loading}
                kpi={currentData.cashPosition}
                noPadding
                title="Cash Position"
                titleDescription="$B"
                titleHref="https://example.com"
              />
            </div>

            <div className={styles.kpiCard8}>
              <KPICardItem
                animateKpi
                loading={loading}
                noPadding
                title="Cash Forecast"
                titleDescription="$B"
                titleHref="https://example.com"
              />
              <div className={styles.kpiCard8ChartWrapper}>
                {loading ? (
                  <LoadingSkeleton height="50px" width="100%" />
                ) : (
                  <KPIChart2 className={styles.kpiCard8Chart} />
                )}
              </div>
            </div>

            <div className={styles.kpiCard5}>
              <KPICardItem
                loading={loading}
                animateKpi
                kpi={currentData.otif}
                noPadding
                title="Customer OTIF"
                status={currentData.otif < 0.8 ? "danger" : currentData.otif < 0.9 ? "warning" : "normal"}
              />
              <List isHorizontal>
                <ListItem loading={loading} name="MTD" value={currentData.otifMtd} />
                <ListItem loading={loading} name="WTD" value={currentData.otifWtd} />
              </List>
            </div>
          </KPICard>
        </div>
      </KPICard>

      <KPICard className={styles.kpiCard2} hasHover title="HR" subtitle="YTD">
        <KPICardItem loading={loading} animateKpi kpi={currentData.diversityRatio} title="Diversity Ratio" />
        <KPICardItem
          animateKpi
          loading={loading}
          hoverChildren={
            <SimpleBarChartLine>
              <SimpleBarChartLineItem variant="two-lines" title="Male" value={currentData.male} />
              <SimpleBarChartLineItem variant="two-lines" title="Female" value={currentData.female} />
              <SimpleBarChartLineItem variant="two-lines" title="LGBT" value={currentData.lgbt} />
            </SimpleBarChartLine>
          }
          kpi={currentData.totalHeadcount}
          title="Total Headcount"
        />
      </KPICard>

      <KPICard className={styles.kpiCard4} hasPadding title="Circularity" subtitle="CTI">
        <List>
          <ListItem loading={loading} name="Circular Inflow" value="27%" />
          <ListItem loading={loading} name="Circular Outflow" value="33%" />
          <ListItem loading={loading} name="Critical Inflow" value="8%" />
          <ListItem loading={loading} name="Water Circularity" value="50%" />
        </List>
      </KPICard>
    </div>
  );
};
