import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ContactUs = () => {
  return (
    <div className="Contactus">
      <Card
        style={{ maxWidth: 450, margin: "20px auto", padding: "20px 5 px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Info
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill the form amd our teaam will get to back to you within 24 hours.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Phone"
                  placeholder="Enter Phone number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Mesage"
                  multiline
                  rows={5}
                  placeholder="Type your message here "
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Post Comment
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
