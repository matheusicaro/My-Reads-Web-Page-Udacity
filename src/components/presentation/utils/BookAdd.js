/*
* DESCRIPTION
*
* This component is reusable and responsible to receive the user's options through a menu, 
* in which it must review the selected category. Component visually as a button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/content/add-circle';

import PropTypes from 'prop-types';


/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const BookAdd = ({ moveBook }) => {

  const click = (event) => {

    let categorie = event.target.innerHTML;

    if (categorie === 'move to Currently Reading') categorie = 'currentlyReading'
    else if (categorie === 'move to Want to Read') categorie = 'wantToRead'
    else if (categorie === 'move to Read') categorie = 'read'
    else if (categorie === 'Remove') categorie = 'remove'

    moveBook(categorie);
  }

  return (
    <IconMenu
      iconButtonElement={<IconButton iconStyle={styles.iconButton}><MoreVertIcon /></IconButton>}
      anchorOrigin={styles.iconMenu}
      targetOrigin={styles.iconMenu}
      onItemClick={click}
    >
      <MenuItem id="teste" primaryText="move to Currently Reading"/>
      <MenuItem primaryText="move to Want to Read" />
      <MenuItem primaryText="move to Read" />
      <MenuItem primaryText="Remove" />
    </IconMenu>
  );
}

export default BookAdd

BookAdd.propTypes = {
  moveBook: PropTypes.func,
};

const styles = {

  iconButton: {
    color: 'rgb(0, 151, 167)',
  },

  iconMenu: {
    horizontal: 'left',
    vertical: 'top'
  }
}