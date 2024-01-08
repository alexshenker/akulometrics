import style from "./App.module.css";
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

const App = (): JSX.Element => {
  const t = useTheme();

  const [distanceType1, setDistanceType1] = useState<Distance>("km");
  const [distanceType2, setDistanceType2] = useState<Distance>("mi");

  const [massType1, setMassType1] = useState<Mass>("g");
  const [massType2, setMassType2] = useState<Mass>("oz");

  const [volumeType1, setVolumeType1] = useState<Volume>("L");
  const [volumeType2, setVolumeType2] = useState<Volume>("gal");

  return (
    <div className={style.app} data-theme={t.theme}>
      <Header />

      <Stack gap="20px">
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
      </Stack>
    </div>
  );
};

export default App;
