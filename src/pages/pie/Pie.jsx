import PieComponent from "./PieComponent";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <>
      {" "}
      <Header title={"PIE CHART"} subTitle={"Simple Pie Chart"} />
      <PieComponent />{" "}
    </>
  );
};

export default Pie;
