import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MovieFeed } from './movieFeed';

export const SectionTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} centered>
        <Tab variant="fullWidth" disableRipple label="Movie Feed" />
        <Tab variant="fullWidth" disableRipple label="My List" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MovieFeed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}