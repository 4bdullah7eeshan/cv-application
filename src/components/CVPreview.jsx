function CVPreview({ userData }) {
    const { name, email, phone, education, experience } = userData;
    return (
        <section className="cv-preview">
            <h2>CV</h2>
            <div>
                <h3>General Information</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
        </section>
    );
}

export default CVPreview;