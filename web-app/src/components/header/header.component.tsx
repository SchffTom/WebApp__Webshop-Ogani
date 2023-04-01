import { FC } from 'react'

import styles from './header.module.scss'

import SelectComponent from '../select'

type ColType = {
    innerHtml: any
}

const HeaderComponent: FC = () => {

    const cols: ColType[] = [
        {
            innerHtml: <span>
                <i className="fa-solid fa-envelope"></i>
                hello@email.com
            </span>
        },
        {
            innerHtml: <>
                <span>Free Shipping for all Order of $99</span>
                <span>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                </span>
            </>
        },
        {
            innerHtml: <SelectComponent
                defaultValue="english"
                options={[
                    { key: 'english', value: 'English' },
                    { key: 'spanis', value: 'Spanis' }
                ]}
            />
        },
        {
            innerHtml: <span>
                <i className="fa-solid fa-user"></i>
                Login
            </span>
        }
    ]

    return (
        <header className={styles.header}>
            <ul className={styles.row}>
                {cols.map((col, idx) => (
                    <li
                        key={idx}
                        className={`${styles.col} ${styles['col-'+(idx+1)]}`}
                    >{col.innerHtml}</li>
                ))}
            </ul>
        </header>
    )
}

export default HeaderComponent