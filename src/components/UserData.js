import Popup from 'reactjs-popup';

import { useState } from 'react'
import PersonalData from "./PersonalData";
import TravellingDestinations from "./TravellingDestinations";

function UserData() {
    return (
        <section id="userData">
            <Popup trigger={submitHandler} position="right center">
                <h1>Confirmar Dados</h1>
                {/*firstName}
                {lastName}
                {password}
                {email}
                {date}
                {selectedCountry}
                {selectedCity*/}

                <div className="submit">
                    <input type="submit" value="Enviar" name="submit" />
                </div>
            </Popup>
        </section>
    );
}

export default UserData;