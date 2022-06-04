import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

// Need to import from the full path, since that's the one thats being overwritten.
import styled from "@mui/system/styled";

const MyTypography = styled(Typography)(({theme})=>({
  margin: theme.spacing(1)
}));
// Speed test.
const test : number = 1 + 1

function Copyright() {
  return (
    <MyTypography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </MyTypography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/* My type isn't perfectly accurate, so you'll sometimes wind up with some features that don't work */}
        {/* I'm sure it can be improved on. I don't use those features in my own code though so I haven't put in the effort. */}
        <MyTypography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </MyTypography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
