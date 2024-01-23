export function MyButtonWithoutState({ count, onClick }) {

    return (
        <button style={{backgroundColor: '#957475'}} onClick={onClick}>Clicado {count} Vezes</button>
    );
}