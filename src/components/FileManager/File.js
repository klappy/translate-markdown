import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import {
  Folder,
  ExpandLess,
  ExpandMore,
  Note,
} from '@material-ui/icons';
import {
  ProgressBar,
} from 'react-bootstrap';

import Directory from './Directory';

export const File = ({classes, fileObject, depth, selected, percentTranslated ,percentVerified}) => {
  const directory = (
    <div>
      <ListItem
        style={{
          paddingLeft: depth + 'em',
        }}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <Folder />
        </ListItemIcon>
        <ListItemText inset primary={fileObject.name + '/'} />
        {
          selected === fileObject.name ? <ExpandLess /> : <ExpandMore />
        }
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List dense>
          <Directory fileTree={fileObject.children} selected={selected} depth={depth + 1}/>
        </List>
      </Collapse>
    </div>
  );

  const file = (
    <ListItem
      button
      selected={selected === fileObject.name}
      className={classes.fileList}
      style={{
        paddingLeft: depth + 'em',
      }}
    >
      <ListItemIcon className={classes.listItemIcon}>
        <Note />
      </ListItemIcon>
      <ListItemText
        primary={fileObject.name}
      />
      <ProgressBar className={classes.progressBar}>
        <ProgressBar
          className={classes.progressVerified}
          now={percentVerified}
        />
        <ProgressBar
          className={classes.progressTranslated}
          now={percentTranslated - percentVerified}
        />
      </ProgressBar>
    </ListItem>
  );

  const component = fileObject.type === 'directory' ? directory : file;

  return component;
}

File.propTypes = {
  classes: PropTypes.object.isRequired,
  fileObject: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  percentTranslated: PropTypes.number,
  percentVerified: PropTypes.number,
}

const styles = theme => ({
  fileList: {
  },
  listItemIcon: {
    marginRight: 0,
  },
  progressBar: {
    width: '3em',
    height: '1em',
    backgroundColor: '#eee',
  },
  progressVerified: {
    height: '100%',
    backgroundColor: '#aaa',
    float: 'left',
  },
  progressTranslated: {
    height: '100%',
    backgroundColor: '#ccc',
    float: 'left',
  },
});

export default withStyles(styles)(File);
