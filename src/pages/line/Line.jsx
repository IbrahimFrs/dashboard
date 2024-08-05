import LineComponent from "./LineComponent";
import Header from "../../components/Header";

const Line = () => {
  return (
    <>
      {" "}
      <Header title={"LINE CHART"} subTitle={"Simple Line Chart"} />
      <LineComponent />{" "}
    </>
  );
};

export default Line;
