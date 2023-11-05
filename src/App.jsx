import React, { Component } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "click on generate to get a quote",
    };
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <h1 className="gen-heading">Quote Generator</h1>

        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Box sx={{ my: 15, mx: 2 }}>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{
                fontSize: "30px",
                textAlign: "center",
                color: "navy",
                width: "80%",
                margin: "0 auto",
              }}
              style={{
                fontFamily: "Jost",
              }}
            >
              {this.state.advice}
            </Typography>
          </Box>

          <Box sx={{ mt: 3, ml: 1, mb: 1, textAlign: "center" }}>
            <Button
              onClick={this.fetchAdvice}
              style={{
                fontSize: "20px",
              }}
              variant="outlined"
            >
              Generate
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
