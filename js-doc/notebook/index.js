function App () {
    return (
        <div>
            <h1>Function</h1>
            <Alert />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

{/* Function */}

const Alert = () => {
    function showMessage() {
        alert('안녕하세요!!');
    }
    return (
        <>
            <hr />
            <h3>버튼을 클릭하면 alert 함수가 실행됩니다.</h3>
            <button onClick={showMessage}>안녕하세요!</button>
            <hr />
        </>
    )
}