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

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Here name is the HTML attribute from input element
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    return (
        <main>
            <UserInput userData={userData} handleInputChange={handleInputChange} />
            <CVPreview userData={userData} />
        </main>
    );
}

export default Main;