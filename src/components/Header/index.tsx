import { ChangeEvent, FormEvent, useState } from 'react';
import todoLogo from '../../assets/todoLogo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {

    const [title, setTitle] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <div>
                <img src={todoLogo} alt="" />
            </div>
            <form className={styles.container} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Adicione uam nova tarefa'
                    value={title}
                    //onChange={(event) => setTitle(event.target.value)}
                    onChange={onChangeTitle}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>

        </header>
    )
}