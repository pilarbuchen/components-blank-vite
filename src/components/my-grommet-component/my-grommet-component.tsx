import React from 'react';
import { Grommet, Box, PageHeader, Anchor, Button } from 'grommet';
import { grommet } from 'grommet/themes';

const MyGrommetComponent: React.FC = () => {
  return (
    <Grommet theme={grommet}>
      <Box pad="medium" style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <PageHeader
          title="Page Title"
          subtitle="A subtitle for the page."
          parent={<Anchor label="Parent Page" href="#" />}
          actions={<Button label="Edit" primary />}
        />
      </Box>
    </Grommet>
  );
};

export default MyGrommetComponent;
