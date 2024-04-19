import { useState, useEffect } from "react"

export default function Teste() {
    const [teste, setTeste] = useState('Carregando...');

    useEffect(() => {
        async function getTeste() {
            const response = await fetch('http://localhost:8000/api/teste');
            const data = await response.json();
            setTeste(data);
        }
        getTeste();
    }, []);

    return(
    <>
        <h1>{teste ?? 'Falhou'}</h1>
    </>
    )
}
