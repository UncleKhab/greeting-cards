import React from 'react'
import ActionButton from '../../atoms/action-button/ActionButton'
import styles from './EditorActions.module.css'
const EditorActions = () => {
    const iconSet = [{
        iconSrc: '/assets/svg/action-bar/actions/animation-slide.svg',
        label: 'Slide',
        action: () => {console.log('slide')}
    },
    {
        iconSrc: '/assets/svg/action-bar/actions/animation-bounce.svg',
        label: 'Bounce',
        action: () => {console.log('bounce')}
    },{
        iconSrc: '/assets/svg/action-bar/actions/animation-flip.svg',
        label: 'Flip',
        action: () => {console.log('flip')}
    },{
        iconSrc: '/assets/svg/action-bar/actions/animation-spring.svg',
        label: 'Spring',
        action: () => {console.log('spring')}
    }]
    return (
        <div className={`${styles.wrapper} mb-4 flex justify-around gap-3`}>
            {iconSet.map((item,index) => <ActionButton {...item} key={index + 'action-button'} />)}
        </div>
    )
}

export default EditorActions
