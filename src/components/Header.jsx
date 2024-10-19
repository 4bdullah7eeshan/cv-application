import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';

function Header() {
    return (
        <header>
            <h1>
                <Icon path={mdiFileAccount} size={1} /> CV Application
            </h1>
        </header>
    );
}

export default Header;