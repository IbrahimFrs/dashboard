import { Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./Card";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      gap={1}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        data={data1}
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        data={data2}
        title={"431,225"}
        subTitle={"Sales Obtained"}
        increase={"+21%"}
        scheme={"category10"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        data={data3}
        title={"15,756"}
        subTitle={"New Clients"}
        increase={"+5%"}
        scheme={"accent"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        data={data4}
        title={"1,315,934"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default Row1;
