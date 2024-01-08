import styles from "./App.module.css";
import Header from "./components/Header/Header";
import useTheme from "./utils/hooks/useTheme";
import Converter from "./components/Converter/Converter";
import "./global.css";
import { useState } from "react";
import { Distance, distances } from "./utils/unitConversion/distance/type";
import convert from "./utils/unitConversion/convert";
import Stack from "./components/Stack";
import { Mass, masses } from "./utils/unitConversion/mass/type";
import { Volume, volumes } from "./utils/unitConversion/volume/type";
import {
  Temperature,
  temperatures,
} from "./utils/unitConversion/temperature/type";

const App = (): JSX.Element => {
  const t = useTheme();

  const [distanceType1, setDistanceType1] = useState<Distance>("mi");
  const [distanceType2, setDistanceType2] = useState<Distance>("km");

  const [massType1, setMassType1] = useState<Mass>("kg");
  const [massType2, setMassType2] = useState<Mass>("g");

  const [volumeType1, setVolumeType1] = useState<Volume>("L");
  const [volumeType2, setVolumeType2] = useState<Volume>("mL");

  const [temperatureType1, setTemperatureType1] = useState<Temperature>("C");
  const [temperatureType2, setTemperatureType2] = useState<Temperature>("K");

  return (
    <div className={"body"} data-theme={t.theme}>
      <div className={styles.app}>
        <Header />

        <Stack gap="20px" alignItems="center" marginTop="calc(25vh - 100px)">
          <Converter
            type1={distanceType1}
            type2={distanceType2}
            setType1={setDistanceType1}
            setType2={setDistanceType2}
            converter={convert.distance}
            options={distances}
          />

          <Converter
            type1={massType1}
            type2={massType2}
            setType1={setMassType1}
            setType2={setMassType2}
            converter={convert.mass}
            options={masses}
          />

          <Converter
            type1={volumeType1}
            type2={volumeType2}
            setType1={setVolumeType1}
            setType2={setVolumeType2}
            converter={convert.volume}
            options={volumes}
          />

          <Converter
            type1={temperatureType1}
            type2={temperatureType2}
            setType1={setTemperatureType1}
            setType2={setTemperatureType2}
            converter={convert.temperature}
            options={temperatures}
          />
        </Stack>
      </div>
    </div>
  );
};

export default App;
