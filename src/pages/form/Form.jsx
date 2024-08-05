/* eslint-disable no-useless-escape */
/* eslint-disable no-extra-boolean-cast */
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => handleClick();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
          <Header title={"CREATE USER"} subTitle={"Create a New User Profile"}/>

    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This Field Is Required & Min 3 Character"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This Field Is Required & Min 3 Character"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "Please Provide A Valid Email Address" : null
        }
        {...register("email", { pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={
          Boolean(errors.contactNumber)
            ? "Please provide a valid Phone number"
            : null
        }
        {...register("contactNumber", { pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical:"top", horizontal:"right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box></>
  );
};

export default Form;
