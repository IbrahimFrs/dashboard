import BarComponent from "./BarComponent";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <>
      {" "}
      <Header
        title={"BAR CHART"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <BarComponent />{" "}
    </>
  );
};

export default Bar;
