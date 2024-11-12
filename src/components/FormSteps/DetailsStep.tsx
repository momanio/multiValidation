import { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Card, Divider, Button } from "@nextui-org/react";

import { useNavigationSteps } from "../../hooks/useNavigationSteps";

export default function DetailsStep() {
  const { formValues, handleBack, handleNext } = useContext(useNavigationSteps);
  const { firstName, lastName, email, gender, date, city, phone } = formValues;

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    // Do whatever with the values
    console.log(form);
    // Show last component or success message
    handleNext();
  };

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={firstName.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={lastName.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Email Address"
            secondary={email.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Gender"
            secondary={gender.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Date of birth"
            secondary={date.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="City"
            secondary={city.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.value || "Not Provided"}
          />
        </ListItem>
      </List>

      <Card className="flex flex-col mt-3">
        <Button className="mr-2" onClick={handleBack}>
          Back
        </Button>
        <Button variant="flat" color="success" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Card>
    </>
  );
}
