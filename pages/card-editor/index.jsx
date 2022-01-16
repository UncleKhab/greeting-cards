import styles from './CardEditor.module.css'
import MenuLayout from "../../components/templates/menu-layout/MenuLayout"

const CardEditorPage = () => {
    return (
        <div className={`${styles.wrapper} h-screen`}>
           
            <MenuLayout />
        </div>
    )
}

export default CardEditorPage
