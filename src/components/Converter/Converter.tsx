import { useCallback, useState } from "react";
import stringToNum from "../../utils/stringToNum";
import { Converter as ConverterFunc } from "../../utils/unitConversion/convert";
import Row from "../Row";
import Stack from "../Stack";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import unitToLabel from "../../utils/unitConversion/unitToLabel";
import { UnitType } from "../../utils/unitConversion/types";
import styles from "./Converter.module.css";
import toRoundStr from "../../utils/toRoundStr";

interface Props<T extends UnitType> {
  type1: T;
  type2: T;
  setType1: (t: T) => void;
  setType2: (t: T) => void;
  converter: Record<T, ConverterFunc<T>>;
  options: readonly T[];
}

const Converter = <T extends UnitType>(props: Props<T>): JSX.Element => {
  const [units1, setUnits1] = useState<string>("1");
  const [units2, setUnits2] = useState<string>(
    (() => {
      const numeric = stringToNum(units1);
      return numeric === null
        ? ""
        : toRoundStr(props.converter[props.type1](numeric).to(props.type2));
    })(),
  );

  const reset = () => {
    setUnits1("");
    setUnits2("");
  };

  const updateUnits1 = useCallback(
    (newUnits: string) => {
      if (newUnits === "") {
        return reset();
      }

      const numeric = stringToNum(newUnits);

      if (numeric === null) {
        return;
      }

      setUnits1(newUnits);

      setUnits2(
        toRoundStr(props.converter[props.type1](numeric).to(props.type2)),
      );
    },
    [props.converter, props.type1, props.type2],
  );

  const updateUnits2 = useCallback(
    (newUnits: string) => {
      if (newUnits === "") {
        return reset();
      }

      const numeric = stringToNum(newUnits);

      if (numeric === null) {
        return reset();
      }

      setUnits2(newUnits);

      setUnits1(
        toRoundStr(props.converter[props.type2](numeric).to(props.type1)),
      );
    },
    [props.converter, props.type1, props.type2],
  );

  const updateType1 = useCallback(
    (newType: T) => {
      if (props.type1 === newType) {
        return;
      }

      props.setType1(newType);

      const numeric = stringToNum(units1);

      if (numeric === null) {
        return;
      }

      setUnits2(toRoundStr(props.converter[newType](numeric).to(props.type2)));
    },
    [props, units1],
  );

  const updateType2 = useCallback(
    (newType: T) => {
      if (props.type2 === newType) {
        return;
      }

      props.setType2(newType);

      const numeric = stringToNum(units2);

      if (numeric === null) {
        return;
      }

      setUnits1(toRoundStr(props.converter[newType](numeric).to(props.type1)));
    },
    [props, units2],
  );

  return (
    <div className={styles.converter}>
      <Row justifyContent="space-between" gap="14px">
        <Stack gap="5px">
          <Dropdown
            value={{ label: unitToLabel[props.type1], unit: props.type1 }}
            options={props.options.map((d) => ({
              label: unitToLabel[d],
              unit: d,
            }))}
            onChange={(d) => updateType1(d?.unit ?? props.type1)}
          />

          <Input value={units1} onChange={updateUnits1} />
        </Stack>

        <div style={{ margin: "auto" }}>=</div>

        <Stack gap="5px">
          <Dropdown
            value={{ label: unitToLabel[props.type2], unit: props.type2 }}
            options={props.options.map((d) => ({
              label: unitToLabel[d],
              unit: d,
            }))}
            onChange={(o) => updateType2(o?.unit ?? props.type2)}
          />

          <Input value={units2} onChange={updateUnits2} />
        </Stack>
      </Row>
    </div>
  );
};

export default Converter;
