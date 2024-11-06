import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const MyOnsenUIComponent = () => {
  return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={() => alert('Parent Page')}>
            <Icon icon="fa-arrow-left" />
          </ToolbarButton>
          <span style={{ marginLeft: 8 }}>Parent Page</span>
        </div>
        <div className="center">
          <strong>Page Title</strong>
          <p style={{ fontSize: '0.8em', margin: 0 }}>A subtitle for the page.</p>
        </div>
        <div className="right">
          <Button modifier="quiet" onClick={() => alert('Edit')}>
            Edit
          </Button>
        </div>
      </Toolbar>
  );
};

export default MyOnsenUIComponent;
