/*
* DESCRIPTION
*
* This component is reusable and responsible to assemble the layout and desing of a book,
* in which you receive a component containing a book with information and
* buttons that perform actions.
*
* The idea of this component is to demonstrate the shelf-shaped books, so it contains all
* the styles that behave the books received.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import { Book } from './'

export const BookCase = ({ books, moveBookCategorie, styles, classes, language, page }) => {
  let section = false
  if (styles && styles.hasOwnProperty('section')) { section = true }

  const { bookStyle } = styles

  return (

    <section style={(section) ? (styles.section) : (stylesDefault.section)} >
      <ol className={classes} style={(books.length > 4) ? (stylesDefault.olAll) : (stylesDefault.ol)} >

        {books.map((book, index) => (

          <li style={bookStyle || stylesDefault.bookStyle} key={index}>
            <Book book={book} moveBookCategorie={moveBookCategorie} language={language} page={page} />
          </li>

        ))}

      </ol>
    </section>
  )
}

BookCase.propTypes = {

  books: PropTypes.array.isRequired,
  moveBookCategorie: PropTypes.func.isRequired,
  styles: PropTypes.object

}

const stylesDefault = {

  section: {
    textAlign: 'center',
    overflowX: 'auto',
    marginTop: '4%',
    margin: '5% 5% 15% 5%',
    position: 'relative'
  },

  ol: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexWrap: 'nowrap',

    justifyContent: 'center'
  },

  olAll: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexWrap: 'nowrap',

    justifyContent: 'end'
  },

  bookStyle: {
    padding: '0% 4% 0% 0%',
    textAlign: 'left'
  }

}
