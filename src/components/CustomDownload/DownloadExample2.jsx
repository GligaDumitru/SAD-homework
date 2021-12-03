/* eslint-disable array-callback-return */
import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import ReactExport from "react-data-export";
import CustomTable from "../CustomTable";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const multiDataSet2 = [
  {
    columns: [
      { title: "Headings", width: { wpx: 80 } }, //pixels width
      { title: "Text Style", width: { wch: 40 } }, //char width
      { title: "Colors", width: { wpx: 90 } },
    ],
    data: [
      [
        {
          value:
            "data:image/jpeg;base64,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'",
          style: { font: { sz: "24", bold: true } },
        },
        { value: "Bold", style: { font: { bold: true } } },
        {
          value: "Red",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFFF0000" } },
          },
        },
      ],
      [
        { value: "H2", style: { font: { sz: "18", bold: true } } },
        { value: "underline", style: { font: { underline: true } } },
        {
          value: "Blue",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FF0000FF" } },
          },
        },
      ],
      [
        { value: "H3", style: { font: { sz: "14", bold: true } } },
        { value: "italic", style: { font: { italic: true } } },
        {
          value: "Green",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FF00FF00" } },
          },
        },
      ],
      [
        { value: "H4", style: { font: { sz: "12", bold: true } } },
        { value: "strike", style: { font: { strike: true } } },
        {
          value: "Orange",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
          },
        },
      ],
      [
        { value: "H5", style: { font: { sz: "10.5", bold: true } } },
        { value: "outline", style: { font: { outline: true } } },
        {
          value: "Yellow",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFFFFF00" } },
          },
        },
      ],
      [
        { value: "H6", style: { font: { sz: "7.5", bold: true } } },
        { value: "shadow", style: { font: { shadow: true } } },
        {
          value: "Light Blue",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } },
          },
        },
      ],
    ],
  },
];

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

const DownloadExample2 = (props) => {
  const IGNORE_FIELDS = ["ID_SPITAL", "durata", "id_zi", "TIP"];
  const FIELD_AVAILABLE = [
    "osteoporoza",
    "scleroza",
    "covid",
    "diabet",
    "cancer",
  ];

  const _tempIndexArr = [1, 2, 3, 4];
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
        const currentValueInt = parseInt(currentCol);
        if (currentValueInt < 10) {
          currentColor = "00ff80";
        }
        if (currentValueInt > 10 && currentValueInt < 20) {
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
      {
        multiDataSet && multiDataSet.length > 0 && <CustomTable columns={columnsFinal} data={dataSetForExelFinal} />
      }
      
      <div className="ml-4">
        <ExcelFile element={CustomDownloadButton()}>
          <ExcelSheet dataSet={multiDataSet} name="Organization" />
        </ExcelFile>
      </div>
    </div>
  );
};

export default DownloadExample2;
