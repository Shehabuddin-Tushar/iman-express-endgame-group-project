// import * as React from "react";

// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CreatAccount from "./CreatAccount";
// import { Container,Box } from "@mui/material";
// import CreateStore from "./CreateStore";
// import { grey } from "@mui/material/colors";
// import VerifyId from "./VerifyId";
// import { useForm } from "react-hook-form";
// import axios from "axios";


// const steps = ["Create Account", "Create Store", "Verify ID"];

// function Merchant() {
//   const [activeStep, setActiveStep] = React.useState(0);
  
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data =>
//   // post merchant registration data
//   {axios.post('http://localhost:8080/api/auth/register',data).then(res=>console.log(res))
//     console.log(data)};

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);  

//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box
//       className="login"
//       height="100vh"
//       sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
//     >
//       <Container
//         sx={{
//           bgcolor: grey[50],
//           pb: 5,
//         }}
//       >
//         <Box> 
//           <Box sx={{ py: 5 }}>
//         <Box>
//           <Box sx={{ py: 5,textAlign:"center" }}>
//             {" "}
//             <Typography variant="h4" fontWeight="bold">
//               Sign Up
//             </Typography>
//             <Typography variant="subtitle" >
//               Start selling product using IMAN Xpress
//             </Typography>
//           </Box>
//           <Container
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "50%",
//               }}
//             >
//               <Stepper activeStep={activeStep}>
//                 {steps.map((label, index) => {
//                   const stepProps = {};
//                   const labelProps = {};

//                   return (
//                     <Step key={label} {...stepProps}>
//                       <StepLabel {...labelProps}>{label}</StepLabel>
//                     </Step>
//                   );
//                 })}
//               </Stepper>
//             </Box>
//           </Container>
//           <form onSubmit={handleSubmit(onSubmit)}>
//           {activeStep === steps.length - 1 && (
//             <React.Fragment>
//               <VerifyId register={register} ></VerifyId> <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Box sx={{ flex: "1 1 auto" }} />
//                 <Button
//                   variant="outlined"
//                   color="warning"
//                   onClick={handleReset}
//                   sx={{ mx: 2 }}
//                 >
//                   Reset
//                 </Button>
//                 <Button variant="outlined" color="warning" type="submit"
//                        >
//                   Submit for Verification
//                 </Button>
//               </Box>
              
//             </React.Fragment>
//           )}
//           {activeStep === steps.length - 3 && (
//             <React.Fragment>
//               <Box>
//                 {" "}
//                 <CreatAccount register={register}></CreatAccount>
//               </Box><Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1 }}
//                 >
//                   Back
//                 </Button>
//                 <Box sx={{ flex: "1 1 auto" }} />

//                 <Button variant="outlined" color="warning" onClick={handleNext}  >
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </Box>
             
//             </React.Fragment>
//           )}
         
//           {activeStep === steps.length - 2 && (
//             <React.Fragment>
//               <Box>
//                 {" "}
//                 <CreateStore register={register}></CreateStore>
//               </Box>
//               <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1 }}
//                 >
//                   Back
//                 </Button>
//                 <Box sx={{ flex: "1 1 auto" }} />

//                 <Button variant="outlined" color="warning" onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}</form>
//         </Box>
//       </Container>
      
//     </Box>
//   );
// }
// export default Merchant;
