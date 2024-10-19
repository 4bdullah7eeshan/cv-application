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
            <UserInput />
            <CVPreview />
        </main>
    );
}

export default Main;