import { MyButton } from '../../components/MyButton';
import { MyButtonWithoutState } from '../../components/MyButtonWithoutState';
import { MySquare } from '../../components/MySquare';
import { MyList } from '../../components/MyList';
import { useState } from 'react';
import './styles.css';

export default function Home() {
    const [count, setCount] = useState(0);
    const minhaVariavel = 'Algum texto.';
    const minhaClasse = 'minha-classe';
    const toogleButtonSquare = true;
    const showList = true;
    let myComponent;

    function handleClick() {
        setCount(count + 1);
    }

    if (true) {
        myComponent = <MySquare />;
    } else {
        myComponent = <MyButton />;
    }

    return (
        <>
            <h1 className="title">Teste</h1>
            <p>Este é um exemplo de App React sem instalação (apenas para aprendizado).</p>
            <p className={minhaClasse}>{minhaVariavel}</p>
            <MyButton />
            <MySquare />

            {myComponent}

            {toogleButtonSquare ? (
                <MyButton />
            ) : (
                <MySquare />
            )}

            {showList && <MyList />}

            <MyButtonWithoutState count={count} onClick={handleClick} />
            <MyButtonWithoutState count={count} onClick={handleClick} />
        </>
    );
}