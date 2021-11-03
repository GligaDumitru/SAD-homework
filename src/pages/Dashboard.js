import React from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import H3 from "@material-tailwind/react/Heading3";
import Alert from "@material-tailwind/react/Alert";

export default function Dashboard() {
  return (
    <div className="mx-12 p-12">
      <Tab>
        <TabList color="lightBlue">
          <TabItem ripple="light" active={true}>
            Detalii
          </TabItem>
        </TabList>
        <TabContent>
          <TabPane active={true}>
            <H3 color="lightBlue"> Asistarea deciziilor pentru un spital</H3>
            <Alert color="blueGray">
              Exemplu 1 : Evidentierea ponderii bolnavilor pe tipuri de bolnavi (tineri, adulti, venituri mari, venituri reduse etc.)
            </Alert>
            <Alert color="blueGray">
              Exemplu 2 : Determinarea celor mai frecvente diagnostice in ultime 30 zile, mergand din 7 in 7 zile
            </Alert>
            <Alert color="blueGray">
              Exemplu 3 : Estimarea numarului de paturi necesare in perioada urmatoare, pe tipuri de bolnavi si pe tipuri de afectiuni
            </Alert>
            <Alert color="blueGray">
              Exemplu 4 : Determinarea perioadelor aglomerate/lejere. Luand ca exemplu ultime 30 zile
            </Alert>
            <Alert color="blueGray">
              Exemplu 5 : Evidentierea ponderii bolnavilor de tipuri/subtipuri/clase de afectiuni
            </Alert>
            <Alert color="blueGray">
              Exemplu 6 : Evidentierea ponderii bolnavilor de tipuri/subtipuri/clase de afectiuni si in functie de gen M/F
            </Alert>
          </TabPane>
        </TabContent>
      </Tab>
    </div>
  );
}
