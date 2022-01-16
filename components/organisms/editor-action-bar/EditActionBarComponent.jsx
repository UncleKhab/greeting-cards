import React from 'react'
import styles from './EditorActionBar.module.css'
import EditorButton from '../../atoms/editor-button/EditorButton'
const EditActionBarComponent = () => {
    const actionButtons = [
        {iconUrl: '/assets/svg/action-bar/animations-icon.svg', label: 'Animations', action: () =>console.log('actions')},
        {iconUrl: '/assets/svg/action-bar/color-theme-icon.svg', label: 'Color Theme', action: () =>console.log('color theme')},
        {iconUrl: '/assets/svg/action-bar/splash-icon.svg', label: 'Splash', action: () =>console.log('splash')},
        {iconUrl: '/assets/svg/action-bar/background-icon.svg', label: 'Background', action: () =>console.log('background')},
    ]
    return (
        <div className={`${styles.wrapper} flex justify-around mb-6`}>
            {actionButtons.map((item, index) => <EditorButton {...item} key={`${index}-action-button`}/>)}
        </div>
    )
}

export default EditActionBarComponent
