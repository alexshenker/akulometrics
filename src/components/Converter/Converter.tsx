import { useCallback, useState } from "react";
import { Distance, distances } from "../../utils/unitConversion/distance/type";
import stringToNum from "../../utils/stringToNum";
import convert from "../../utils/unitConversion/convert";
import Row from "../Row";
import Stack from "../Stack";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import unitToLabel from "../../utils/unitConversion/unitToLabel";

const Converter = (): JSX.Element => {
  const [type1, setType1] = useState<Distance>("mi");
  const [units1, setUnits1] = useState<string>("1");

  const [type2, setType2] = useState<Distance>("km");
  const [units2, setUnits2] = useState<string>(
    (() => {
      const numeric = stringToNum(units1);
      return numeric === null
        ? ""
        : `${convert.distance[type1](numeric).to(type2)}`;
    })(),
  );

  const reset = () => {
    setUnits1("");
    setUnits2("");
  };

  const updateUnits1 = useCallback(
    (newUnits: string) => {
      const numeric = stringToNum(newUnits);

      if (numeric === null) {
        return reset();
      }

      setUnits1(newUnits);

      setUnits2(`${convert.distance[type1](numeric).to(type2)}`);
    },
    [type1, type2],
  );

  const updateUnits2 = useCallback(
    (newUnits: string) => {
      const numeric = stringToNum(newUnits);

      if (numeric === null) {
        return reset();
      }

      setUnits2(newUnits);

      setUnits1(`${convert.distance[type2](numeric).to(type1)}`);
    },
    [type1, type2],
  );

  const updateType1 = useCallback(
    (newType: Distance) => {
      if (type1 === newType) {
        return;
      }

      setType1(newType);

      const numeric = stringToNum(units1);

      if (numeric === null) {
        return reset();
      }

      setUnits2(`${convert.distance[newType](numeric).to(type2)}`);
    },
    [type1, units1, type2],
  );

  const updateType2 = useCallback(
    (newType: Distance) => {
      if (type2 === newType) {
        return;
      }

      setType2(newType);

      const numeric = stringToNum(units2);

      if (numeric === null) {
        return reset();
      }

      setUnits1(`${convert.distance[newType](numeric).to(type1)}`);
    },
    [type1, units2, type2],
  );

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Row justifyContent="space-between" gap="14px" alignItems="center">
        <Stack gap="5px">
          <Dropdown
            value={{ label: unitToLabel[type1], unit: type1 }}
            options={distances.map((d) => ({
              label: unitToLabel[d],
              unit: d,
            }))}
            onChange={(d) => updateType1(d?.unit ?? type1)}
          />

          <Input value={units1} onChange={updateUnits1} />
        </Stack>
        =
        <Stack gap="5px">
          <Dropdown
            value={{ label: unitToLabel[type2], unit: type2 }}
            options={distances.map((d) => ({
              label: unitToLabel[d],
              unit: d,
            }))}
            onChange={(o) => updateType2(o?.unit ?? type2)}
          />

          <Input value={units2} onChange={updateUnits2} />
        </Stack>
      </Row>
    </div>
  );
};

export default Converter;
