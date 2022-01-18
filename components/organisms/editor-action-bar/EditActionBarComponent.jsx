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
    const actionButtonsOpenCard = [
        {iconUrl: '/assets/svg/action-bar/template-icon.svg', label: 'Template', action: () =>console.log('template')},
        {iconUrl: '/assets/svg/action-bar/decorations-icon.svg', label: 'Decorations', action: () =>console.log('decorations')},
        {iconUrl: '/assets/svg/action-bar/page-texture-icon.svg', label: 'Page Texture', action: () =>console.log('page-texture')},
        {iconUrl: '/assets/svg/action-bar/animation-icon.svg', label: 'Animation', action: () =>console.log('animation')}
    ]
    const actionButtonsBackCover = [
        {iconUrl: '/assets/svg/action-bar/back-side-icon.svg', label: 'Back Side', action: () =>console.log('back-side')},
        {iconUrl: '/assets/svg/action-bar/envelope-icon.svg', label: 'Envelope', action: () =>console.log('envelope')},
        {iconUrl: '/assets/svg/action-bar/preview-icon.svg', label: 'Preview', action: () =>console.log('preview')},
        {iconUrl: '/assets/svg/action-bar/share-icon.svg', label: 'Share', action: () =>console.log('share')},
    ]
    return (
        <div className={`${styles.wrapper} flex justify-around mb-6`}>
            {actionButtonsBackCover.map((item, index) => <EditorButton {...item} key={`${index}-action-button`}/>)}
        </div>
    )
}

export default EditActionBarComponent
