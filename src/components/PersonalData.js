function PersonalData() {
    return (
        <section>
            <ul>
                <h3>Dados Pessoais</h3>
                <li>
                    <label for="fn">Nome</label>
                    <input type="text" required id="fn" name="firstname" placeholder="Digite seu nome" autofocus />
                </li>
                <li>
                    <label for="ln">Sobrenome</label>
                    <input type="text" required id="ln" name="lastname" placeholder="Digite seu sobrenome" />
                </li>
                <li>
                    <label for="pw">Senha</label>
                    <input type="password" required id="pw" name="password" placeholder="Digite sua senha" />
                </li>
                <li>
                    <label for="ml">Email</label>
                    <input type="email" required id="ml" name="email" placeholder="Digite seu email" />
                </li>
                <li>
                    <label for="dt">Data de Nascimento</label>
                    <input type="date" required id="dt" name="date" />
                </li>
            </ul>
        </section>
    );
  }
  
  export default PersonalData;