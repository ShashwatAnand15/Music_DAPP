import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          // clamp provides us auto switch between  (minimum , optimal and maximum) according to screen size
          fontSize="clamp(1rem , 2rem , 2.25rem)"
          color="primary"
        >
          Sociopedia
        </Typography>
      </Box>
      {/* Form Box */}
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem" //padding
        m="2rem auto" // margin
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sociopedia , the Social Media of Millienials
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
