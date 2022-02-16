import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreatAccount from "./CreatAccount";
import { Container } from "@mui/material";
import CreateStore from "./CreateStore";
import { grey } from "@mui/material/colors";
import VerifyId from "./VerifyId";

const steps = ["Create Account", "Create Store", "Verify ID"];

function Merchant() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      className="login"
      height="100vh"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Container
        sx={{
          bgcolor: grey[50],
          pb: 5,
        }}
      >
        <Box>
          <Box sx={{ py: 5 }}>
            {" "}
            <Typography variant="h4" fontWeight="bold">
              Sign Up
            </Typography>
            <Typography variant="subtitle">
              Start selling product using IMAN Xpress
            </Typography>
          </Box>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
          </Container>
          {activeStep === steps.length - 1 && (
            <React.Fragment>
              <VerifyId></VerifyId>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={handleReset}
                  sx={{ mx: 2 }}
                >
                  Reset
                </Button>
                <Button variant="outlined" color="warning" type="submit">
                  Submit for Verification
                </Button>
              </Box>
            </React.Fragment>
          )}
          {activeStep === steps.length - 3 && (
            <React.Fragment>
              <Box>
                {" "}
                <CreatAccount></CreatAccount>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button variant="outlined" color="warning" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
          {activeStep === steps.length - 2 && (
            <React.Fragment>
              <Box>
                {" "}
                <CreateStore></CreateStore>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button variant="outlined" color="warning" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </Box>
  );
}
export default Merchant;
