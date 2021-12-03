import React, { useState, useEffect } from "react";
import ChartLine from "./ChartLine";
import Paragraph from "@material-tailwind/react/Paragraph";
import Radio from "@material-tailwind/react/radio";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { IGNORE_FIELDS } from "../utils/helper";
import DownloadExample4 from "./CustomDownload/DownloadExample4";
import Checkbox from "@material-tailwind/react/Checkbox";

const COLORS = [
  "red",
  "gray",
  "orange",
  "blue",
  "indigo",
  "teal",
  "cyan",
  "black",
  "indigo",
  "red",
  "teal",
  "cyan",
  "black",
  "indigo",
  "red",
];

const Example4 = (props) => {
  const [typeChart, setTypeChart] = useState(null);
  const [dataConfig, setDataConfig] = useState(null);
  const [optionsConfig, setOptionsConfig] = useState(null);
  const [labelsArrayConfig, setLabelsArrayConfig] = useState(null);
  const [dataSetsArray, setDataSetsArrayConfig] = useState(null);
  const [toggleShowChart, setToggleShowChart] = useState(false);
  const [ignoredFields, setIgnoredfields] = useState([
    "ID_SPITAL",
    "durata",
    "TIP",
    "id_zi"
  ]);
  const [updateTable, setUpdateTable] = useState(false);
  const FIELD_AVAILABLE = [
    "numar_bolnavi_internati"
  ];
  const title = "Determinarea perioadelor aglomerate/lejere";

  const defeaultOptionsConfig = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: title,
      fontColor: "lightBlue",
    },
    legend: {
      labels: {
        fontColor: "black",
      },
      align: "end",
      position: "bottom",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "rgba(17,17,17,.7)",
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month",
            fontColor: "white",
          },
          gridLines: {
            display: false,
            borderDash: [2],
            borderDashOffset: [2],
            color: "rgba(33, 37, 41, 0.3)",
            zeroLineColor: "rgba(0, 0, 0, 0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(17,17,17,.7)",
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Value",
            fontColor: "white",
          },
          gridLines: {
            borderDash: [3],
            borderDashOffset: [3],
            drawBorder: false,
            color: "rgba(17, 17, 17, 0.15)",
            zeroLineColor: "rgba(33, 37, 41, 0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  };

  const { data } = props;

  useEffect(() => {

    // create clone
    let informationArray = JSON.parse(JSON.stringify(data));
    // remove first row, with headers
    informationArray.shift();

    // get headers array
    let headersArray = data[0];

    // remove the fields that are not required but remember the index
    headersArray = headersArray
      .map((hA, index) => ({
        indexForValue: index,
        value: hA,
      }))
      .filter((item) => !ignoredFields.includes(item.value));

    // show the id's of ospitals by id_spital
    let labelsArray = informationArray.map((lA) => lA[0]);

    const dataSetsArray = headersArray.map(
      ({ indexForValue, value }, index) => {
        const dataRow = informationArray.map(
          (informationRow) => informationRow[indexForValue]
        );

        return {
          label: value,
          backgroundColor: `${COLORS[index]}`,
          borderColor: `${COLORS[index]}`,
          data: dataRow,
          fill: false,
        };
      }
    );
    setTypeChart("line");
    setDataConfig({
      labels: labelsArray,
      datasets: dataSetsArray,
    });

    setOptionsConfig(defeaultOptionsConfig);
    setLabelsArrayConfig(labelsArray);
    setDataSetsArrayConfig(dataSetsArray);
  }, [props, updateTable]);

  const handleChangeChart = (item) => {
    switch (item) {
      case "radar":
        setOptionsConfig({
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Chart.js Radar Chart",
            },
          },
        });
        break;
      default:
        setOptionsConfig(defeaultOptionsConfig);
    }
    setTypeChart(item);
  };

  const handleCheckboxChange = (value) => {
    if (!ignoredFields.includes(value)) {
      let _tArr = [...ignoredFields];
      _tArr.push(value);
      setIgnoredfields(_tArr);
    } else if (ignoredFields.includes(value)) {
      let _tArr = [...ignoredFields];
      const index = _tArr.indexOf(value);
      _tArr.splice(index, 1);
      setIgnoredfields(_tArr);
    }

    setUpdateTable(!updateTable);
  };

  return (
    <div className="px-2 md:px-8 mt-24">
      <div className="container mx-auto mb-16 max-w-full bg-gray-200">
        <div className="p-1 md:p-8 md:m-2">
          <div className="flex justify-between items-center">
            <Paragraph color="cyan">
            Preview
            </Paragraph>
            <Button
              color={`${!toggleShowChart ? "red" : "blue"}`}
              buttonType="outline"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={true}
              ripple="dark"
              onClick={() => setToggleShowChart(!toggleShowChart)}
            >
              <Icon
                name={`${!toggleShowChart ? "arrow_upward" : "arrow_downward"}`}
                size="sm"
              />
            </Button>
          </div>

          <div className={`${toggleShowChart && "hidden "} `}>
          <div className="md:flex my-4">
              {FIELD_AVAILABLE.map((el, index) => {
                return (
                  <div key={index} className="m-2">
                    <Checkbox
                      color="lightBlue"
                      text={el.toUpperCase()}
                      id={`checkboxid-${index}`}
                      onChange={() => handleCheckboxChange(el)}
                      checked={!ignoredFields.includes(el)}
                    />
                  </div>
                );
              })}
            </div>

            {data && (
              <DownloadExample4 ignoredFields={ignoredFields} data={data} />
            )}
            <div className="md:flex my-4">
              {["line", "bar", "horizontalBar", "radar"].map((item, index) => (
                <div className="inline-block p-2 m-2 ">
                  <Radio
                    color="lightBlue"
                    text={`${item.toUpperCase()} Chart`}
                    id={`option-5-${index}`}
                    onChange={() => handleChangeChart(item)}
                    name="optionLine5"
                    value={item}
                    checked={item === typeChart}
                  />
                </div>
              ))}
            </div>
            <div className="mt-12">
              {typeChart && (
                <ChartLine
                  title={title}
                  main="Chart"
                  type={typeChart}
                  data={dataConfig}
                  options={optionsConfig}
                  id="newLine4"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example4;
