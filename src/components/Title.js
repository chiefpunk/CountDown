import React from "react";
import Typography from "@material-ui/core/Typography";

const Title = React.memo(({ title }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
});
export default Title;
