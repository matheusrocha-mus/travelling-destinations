import { useState } from 'react'

function PersonalData() {
    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');

    const [date, setDate] = useState('');

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleChangeLastName = (event) => {
        setLastName (event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword (event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail (event.target.value)
    }

    const handleChangeDate = (event) => {
        setDate (event.target.value)
    }

    return (
        <section>
            <ul>
                <h2>Dados Pessoais</h2>
                <li>
                    <label for="fn">Nome: </label>
                    <input type="text" onChange={handleChangeFirstName} value={firstName} required id="fn" placeholder="Digite seu nome" autofocus />
                </li>
                <li>
                    <label for="ln">Sobrenome: </label>
                    <input type="text" onChange={handleChangeLastName} value={lastName} required id="ln" placeholder="Digite seu sobrenome" />
                </li>
                <li>
                    <label for="pw">Senha: </label>
                    <input type="password" onChange={handleChangePassword} value={password} required id="pw" placeholder="Digite sua senha" />
                </li>
                <li>
                    <label for="ml">Email: </label>
                    <input type="email" onChange={handleChangeEmail} value={email} required id="ml" placeholder="Digite seu email" />
                </li>
                <li>
                    <label for="dt">Data de Nascimento: </label>
                    <input type="date" onChange={handleChangeDate} value={date} required id="dt" />
                </li>
            </ul>
        </section>
    );
  }
  
  export default PersonalData;