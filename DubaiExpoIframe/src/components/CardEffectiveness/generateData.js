const getRandomArbitrary = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
};

const data = [
  {
    city: "Plant Atlanta",
    kpi: [
      ["Machining Area 5", 95.6],
      ["Machining Area 6", 95.6],
      ["Assembly Line 3", 98.5],
      ["Packaging Line 3", 98.5]
    ],
    lines: {
      "Production Line": ["Assembly Line 3", "Machining Area 5", "Machining Area 6", "Packaging Line 3"],
      "Assembly Line 3": ["Machine 31"],
      "Machining Area 5": ["Machine 23", "Machine 24", "Machine 25"],
      "Machining Area 6": ["Machine 27", "Machine 28", "Machine 29"],
      "Packaging Line 3": ["Machine 33"]
    }
  },
  {
    city: "Plant Beijing",
    kpi: [
      ["Machining Area 3", 95.6],
      ["Machining Area 4", 95.5],
      ["Assembly Line 2", 98.5],
      ["Packaging Line 2", 98.5]
    ],
    lines: {
      "Production Line": ["Assembly Line 2", "Machining Area 3", "Machining Area 4", "Packaging Line 2"],
      "Assembly Line 2": ["Machine 20"],
      "Machining Area 3": ["Machine 12", "Machine 13", "Machine 14"],
      "Machining Area 4": ["Machine 16", "Machine 17", "Machine 18"],
      "Packaging Line 2": ["Machine 22"]
    }
  },
  {
    city: "Plant Frankfurt",
    kpi: [
      ["Machining Area 1", 87.9],
      ["Machining Area 2", 95.6],
      ["Assembly Line 1", 98.5],
      ["Packaging Line 1", 98.5]
    ],
    lines: {
      "Production Line": ["Assembly Line 1", "Machining Area 1", "Machining Area 2", "Packaging Line 1"],
      "Assembly Line 1": ["Machine 9"],
      "Machining Area 1": ["Machine 1", "Machine 2", "Machine 3"],
      "Machining Area 2": ["Machine 5", "Machine 6", "Machine 7"],
      "Packaging Line 1": ["Machine 11"]
    }
  }
];

const result = data.reduce((acc, { city, kpi, lines }) => {
  const chartsData = Object.entries(lines).reduce((chartsAcc, [line, machines]) => {
    return {
      ...chartsAcc,
      [line]: {
        names: machines,
        charts: [
          ["DTD", 2, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]],
          ["3DAY", 3, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]],
          ["WTD", 7, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]],
          [
            "MTD",
            10,
            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          ],
          ["YTD", 12, ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]]
        ].reduce((acc, [period, count, data]) => {
          const charts = (line === "Production Line"
            ? ["Line Utilization", "Line Availability", "Quality Rate"]
            : ["Machine Utilization", "Machine Availability", "Quality Rate"]
          ).map(chartName => {
            const values = data.slice(0, count).map(day => {
              const value = ["d1", "d2", "d3", "d4"].slice(0, machines.length).reduce(
                (acc, d) => ({
                  ...acc,
                  [d]: getRandomArbitrary(70, 100)
                }),
                {}
              );

              return {
                name: day,
                ...value
              };
            });
            return {
              name: chartName,
              values
            };
          });
          return {
            ...acc,
            [period]: charts
          };
        }, {})
      }
    };
  }, {});

  const tablesData = Object.entries(lines).reduce((tablesAcc, [line, machines]) => {
    return {
      ...tablesAcc,
      [line]: {
        names: machines,
        tables: (line === "Production Line"
          ? ["Line Utilization", "Line Availability", "Quality Rate"]
          : ["Machine Utilization", "Machine Availability", "Quality Rate"]
        ).map(lineName => ({
          name: lineName,
          data: ["DTD", "3DAY", "WTD", "MTD", "YTD"].map(period => ({
            name: period,
            values: [...Array(machines.length)].map(i => getRandomArbitrary(90, 100))
          }))
        }))
      }
    };
  }, {});

  return {
    ...acc,
    [city]: {
      kpi,
      tablesData,
      chartsData
    }
  };
}, {});

console.log(JSON.stringify(result, "", 2));
