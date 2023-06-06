import {
    Box,
    Button,
    Text,
  } from "@chakra-ui/react";
import { useState } from "react";
const ExpandableText=({ description }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Box display="inline-block" as="span">
        <Box noOfLines={expanded ? Infinity :3} >{description}</Box>
        <Button
            color={"#006190"}
          variant="outlined"
          size="small"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "أقرأ أقل" : "أقرأ المزيد"}
        </Button>
      </Box>
    );
  }
  
  export default ExpandableText;
  