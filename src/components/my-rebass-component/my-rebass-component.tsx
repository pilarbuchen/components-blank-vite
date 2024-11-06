import React from 'react';
import { Box, Card, Heading, Text, Button } from 'rebass';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    primary: '#07c',        // Primary color
    secondary: '#30c',      // Secondary color
    gray: '#f6f6f6',        // Background color
    text: '#333',           // Text color
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
    },
  },
};

const MyRebassComponent: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <Card
          sx={{ maxWidth: 300, borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <Box sx={{ padding: 3 }}>
            <Heading as="h3" fontSize={3} mb={2}>
              Rebass Card
            </Heading>
            <Text fontSize={2} color="gray">
              This is a simple card component built with Rebass. Customize it with different colors, paddings, and layouts.
            </Text>
          </Box>
          <Box sx={{ paddingX: 3, paddingBottom: 3 }}>
            <Button variant="primary" sx={{ width: '100%', bg: 'primary', color: 'white' }}>
              Learn More
            </Button>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default MyRebassComponent;
