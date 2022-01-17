import styles from './CardEditor.module.css'
import MenuLayout from "../../components/templates/menu-layout/MenuLayout"
import EditorCard from '../../components/organisms/editor-card/EditorCard'

const CardEditorPage = () => {
    return (
        <div className={`${styles.wrapper} h-screen`}>
            <div className='h-full bg-gray-100 flex justify-center '>
                <EditorCard />
            </div>
            <MenuLayout />
        </div>
    )
}

export default CardEditorPage
