import { useState } from 'react';
import UserInput from "./UserInput";
import CVPreview from "./CVPreview";

function Main() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        education: [],
        experience: [],
    });

    
    return (
        <main>
            <UserInput userData={userData} />
            <CVPreview userData={userData} />
        </main>
    );
}

export default Main;