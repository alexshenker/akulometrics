import style from "./App.module.css";
import Header from "./components/Header/Header";
import useTheme from "./utils/hooks/useTheme";

const App = (): JSX.Element => {
  const t = useTheme();

  return (
    <div className={style.app} data-theme={t.theme}>
      <Header />
    </div>
  );
};

export default App;
