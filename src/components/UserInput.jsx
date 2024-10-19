function UserInput({ userData }) {
    const { name, email, phone, education, experience } = userData;
    return (
        <section className="user-input">
            <h2>Form</h2>
            <form>
                <fieldset>
                    <legend>General Information</legend>
                    
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={phone} />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Educational Experience</legend>

                    <div>
                        <label htmlFor="school">School Name:</label>
                        <input type="text" id="school" name="school" />
                    </div>

                    <div>
                        <label htmlFor="title">Title of Study:</label>
                        <input type="text" id="title" name="title" />
                    </div>

                    <div>
                        <label htmlFor="date">Date of Study:</label>
                        <input type="text" id="date" name="date"/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Practical Experience</legend>

                    <div>
                        <label htmlFor="company">Company Name:</label>
                        <input type="text" id="company" name="company" />
                    </div>

                    <div>
                        <label htmlFor="position">Position Title:</label>
                        <input type="text" id="position" name="position" />
                    </div>

                    <div>
                        <label htmlFor="responsibilities">Responsibilities:</label>
                        <div>
                            <textarea name="responsibilities" id="responsibilities"></textarea>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="dateFrom">Date From:</label>
                        <input type="text" id="dateFrom" name="dateFrom" />
                    </div>
                    
                    <div>
                        <label htmlFor="dateUntil">Date Until:</label>
                        <input type="text" id="dateUntil" name="dateUntil" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default UserInput;