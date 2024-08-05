import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Invoices = () => {
  return (
    <>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <Box style={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </>
  );
};

export default Invoices;
