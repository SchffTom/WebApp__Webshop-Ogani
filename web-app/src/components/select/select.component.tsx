import { FC, useState, useEffect, MouseEvent } from 'react'

import styles from './select.module.scss'

type OptionType = {
    key: string
    value: string
}

type SelectComponentProps = {
    defaultValue: string
    options: OptionType[]
}

const SelectComponent: FC<SelectComponentProps> = ({
    defaultValue, options
}) => {

    const [selected, setSelected] = useState<OptionType>(options[0])

    function find(prop: 'key' | 'value', value: string,) {
        const option = options.find(opt => opt[prop] === value)
        if (option) {
            setSelected(option)
        }
    }

    useEffect(() => {
        find('key', defaultValue)
    },[])

    const onClickHandler = ({ target }: MouseEvent) => {
        const elem = target as HTMLSpanElement
        find('value', elem.innerText)
    }

    return (
        <div className={styles.select}>
            <img
                src={require(`../../assets/images/flag-${selected.key}.jpg`)}
                alt={`${selected.value} image`}
            />
            <span>{selected.value}<span className={styles.arrow}>ˇ</span></span>
            <div className={styles.dropdown}>
            {options.map((option, idx) => (
                <span key={idx} className={styles.text} onClick={onClickHandler}>{option.value}</span>
            ))}
            </div>
        </div>
    )
}

export default SelectComponent