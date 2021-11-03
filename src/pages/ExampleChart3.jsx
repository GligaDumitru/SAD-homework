import React, { useEffect, useState, Fragment } from "react";
import { readRemoteFile } from "react-papaparse";
import Input from "@material-tailwind/react/Input";
import Alert from "@material-tailwind/react/Alert";
import Example3 from "../components/Example3";

export default function ExampleChart3() {
  const [url, setUrl] = useState(
    "1CIhln5kFddF4_fKt5yfhliN6j4EmaLuWfI29WB5NZCQ"
  );
  const [gid, setGid] = useState("1368308247");
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    readRemoteFile(
      `https://docs.google.com/spreadsheets/d/${url}/gviz/tq?tqx=out:csv&tq&gid=${gid}`,
      {
        complete: (results) => {
          if (results.errors && results.errors.length > 0) {
            setErrors(results.errors);
          }
          if (results.data && results.data.length > 0) {
            setData(results.data);
            console.log(results.data)
          }
        },
      }
    );
  }, [url, gid]);

  return (
    <>
      <div className="px-3 md:px-8 h-40 block h-auto">
        <div className="block p-4 mb-4 ">
          <Alert color="cyan">Insert key for the Link from google sheets</Alert>
          <Input
            type="text"
            color="deepPurple"
            size="regular"
            outline={true}
            placeholder="key from url from google sheets"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </div>
        <div className="inline-block p-4 mb-4 ">
          <Alert color="cyan">Insert GID for sheet</Alert>
          <Input
            type="text"
            color="deepPurple"
            size="regular"
            outline={true}
            placeholder="gid from google sheets"
            value={gid}
            onChange={(e) => setGid(e.target.value)}
          />
        </div>
      </div>
      {data && data.length > 0 && <Example3 data={data} />}
      {errors.length > 0 && <>{JSON.stringify(errors)}</>}
    </>
  );
}
