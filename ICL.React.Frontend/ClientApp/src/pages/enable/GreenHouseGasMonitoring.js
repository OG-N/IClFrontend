import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReplyIcon from '@mui/icons-material/Reply';

const Button = styled(MuiButton)(spacing);
const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const GreenHouseGasMonitoring = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container p={isLgUp ? 12 : 5}>
      <Grid item md={12}>
        <Grid container spacing={6}>
          <Grid item>
            <ThemeProvider theme={themeCustom}>
              <Button
                mr={2}
                variant="contained"
                color="secondary"
                onClick={() => navigate("/enable")}
              >
                <ReplyIcon />
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
        <br />
        <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
          <Grid item md={12} zeroMinWidth>
            <iframe title="GHG Monitoring" width="100%" height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNGNlNmFiMjktMzgzYi00ZTc4LWI2OWItZGQ3YTI0N2M4M2E5IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                    frameBorder="0" allowFullScreen="true"></iframe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default GreenHouseGasMonitoring;