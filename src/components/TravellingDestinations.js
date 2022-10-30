function TravellingDestinations() {
    return (
        <section>
            <ul>
                <h3>Destinos de Interesse</h3>
                <li>
                    <label for="sl">País</label>
                    <select required  id="sl" name="select">
                        <option value="" disabled selected>--Selecione o país desejado--</option>
                        <option value="op_m">Metallica</option>
                        <option value="op_q">Queen</option>
                        <option value="op_p">Pink Floyd</option>
                        <option value="op_d">Dream Theater</option>
                        <option value="op_n">Nirvana</option>
                        <option value="op_r">Red Hot Chilli Peppers</option>
                    </select>
                </li>
                <li>
                    <label for="sl">Cidade</label>
                    <select required  id="sl" name="select">
                        <option value="" disabled selected>--Selecione a cidade desejada--</option>
                        <option value="op_m">Metallica</option>
                        <option value="op_q">Queen</option>
                        <option value="op_p">Pink Floyd</option>
                        <option value="op_d">Dream Theater</option>
                        <option value="op_n">Nirvana</option>
                        <option value="op_r">Red Hot Chilli Peppers</option>
                    </select>
                </li>
            </ul>
        </section>
    );
}

export default TravellingDestinations;