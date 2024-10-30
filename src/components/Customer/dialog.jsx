import { Box, Dialog, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";

function DialogComponent({onclose, opened}) {

  return (
    <Dialog onClose={onclose} open={opened}>

        <DialogTitle>Filter</DialogTitle>
        <Box></Box>

    </Dialog>
  );
}

DialogComponent.propTypes = {
  onclose: PropTypes.func.isRequired,
  opened: PropTypes.func.isRequired,
};

export default DialogComponent;


