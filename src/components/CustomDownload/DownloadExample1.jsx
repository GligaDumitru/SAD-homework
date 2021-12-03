/* eslint-disable array-callback-return */
import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import ReactExport from "react-data-export";
import CustomTable from "../CustomTable";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const CustomDownloadButton = () => (
  <Button
    color="blue"
    buttonType="outline"
    size="regular"
    rounded={true}
    block={false}
    iconOnly={false}
    ripple="dark"
  >
    Download .xlsx
    <Icon name="arrow_downward" size="sm" />
  </Button>
);

const DownloadExample1 = (props) => {
  const IGNORE_FIELDS = ["ID_SPITAL", "durata", "id_zi", "TIP"];
  const FIELD_AVAILABLE = [
    "osteoporoza",
    "scleroza",
    "covid",
    "diabet",
    "cancer",
  ];

  const _tempIndexArr = [1, 2, 3, 4, 5];
  let columnsFinal = [];
  let dataSetForExelFinal = [];

  // create clone
  let informationArray = JSON.parse(JSON.stringify(props.data));
  // remove first row, with headers
  informationArray.shift();

  // get headers array
  let headersArray = props.data[0];

  // remove the fields that are not required but remember the index
  headersArray = headersArray.map((hA, index) => ({
    indexForValue: index,
    value: hA,
  }));

  const dataSetsArray = headersArray.map(({ indexForValue, value }, index) => {
    const dataRow = informationArray.map(
      (informationRow) => informationRow[indexForValue]
    );

    return {
      label: value,
      data: dataRow,
    };
  });

  dataSetsArray.map((element) => {
    if (!props.ignoredFields.includes(element.label)) {
      columnsFinal.push({
        title: element.label,
        width: { wpx: 80 },
      });
    }
  });

  console.log(dataSetsArray);
  //   verde - 00ff80
  // rosu - #ff0000
  // orange - #ff8000
  _tempIndexArr.map((_, ZIndex) => {
    let _tempArr = [];
    dataSetsArray.map((element) => {
      if (!props.ignoredFields.includes(element.label)) {
        const currentCol = element.data[ZIndex];
        let currentColor = "ff0000";
        const currentValueInt = parseFloat(currentCol);
        if (currentValueInt < 0.23) {
          currentColor = "00ff80";
        }
        if (currentValueInt > 0.23 && currentValueInt < 0.726) {
          currentColor = "ff8000";
        }

        _tempArr.push({
          value: currentCol.toUpperCase(),
          style: {
            fill: { patternType: "solid", fgColor: { rgb: currentColor } },
          },
        });
      }
    });
    dataSetForExelFinal.push(_tempArr);
  });

  const multiDataSet = [
    {
      columns: columnsFinal,
      data: dataSetForExelFinal,
    },
  ];
  return (
    <div className="container mx-auto p-3 max-w-full bg-gray-200 mb-24">
      <h1 className="ml-4 text-blue-500">Preview .xlsx</h1>
      {multiDataSet && multiDataSet.length > 0 && (
        <CustomTable columns={columnsFinal} data={dataSetForExelFinal} />
      )}

      <div className="ml-4">
        <ExcelFile element={CustomDownloadButton()}>
          <ExcelSheet dataSet={multiDataSet} name="Organization" />
        </ExcelFile>
      </div>
    </div>
  );
};

export default DownloadExample1;
