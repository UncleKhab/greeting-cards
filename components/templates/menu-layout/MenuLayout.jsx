import React from 'react'
import EditActionBarComponent from '../../organisms/editor-action-bar/EditActionBarComponent'
import EditorActions from '../../organisms/editor-actions/EditorActions'
import styles from './MenuLayout.module.css'
const MenuLayout = () => {
    return (
        <div className={`${styles.backdrop} fixed bottom-0 w-full flex flex-col justify-end items-center pt-6`}>
            <div className={styles.wrapper}>
                <h2 className="pb-2 text-xl font-bold text-gray-700">Animations</h2>
                <EditorActions />
                <EditActionBarComponent />
            </div>
        </div>
    )
}

export default MenuLayout
