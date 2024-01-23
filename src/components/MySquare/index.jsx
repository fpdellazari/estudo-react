export function MySquare() {
    const square = {
        width: 50,
        height: 50,
        backgroundColor: '#467765'
    };
    return (
        <div style={{
            width: square.width,
            height: square.height,
            backgroundColor: square.backgroundColor
        }}>
        </div>
    );
}