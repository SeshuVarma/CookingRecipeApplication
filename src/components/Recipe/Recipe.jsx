import React from 'react'
import { Fragment } from 'react'
import RecipePreparation from './RecipePreparation/RecipePreparation'
import Classes from './Form.module.css'

function Recipe(props) {
  return (
    <p className={Classes.bod}>
    <Fragment>
        <RecipePreparation/>
    </Fragment>
    </p>
  )
}

export default Recipe