import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 12,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 5,
        marginTop: 20,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 10,
    },
    entry: {
        marginBottom: 5,
    },
    entryTitle: {
        fontWeight: 'bold',
    },
    entryText: {
        marginBottom: 2,
    },
});

const CVToPDF = ({ userData }) => {
    const { name, email, phone, education, experience } = userData;

    return (
        <Document>
            <Page size="A4" style={{ padding: 30 }}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{phone}</Text>
                    <Text style={styles.sectionTitle}>EDUCATION</Text>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <View key={index} style={styles.entry}>
                                <Text style={styles.entryTitle}>{edu.school}</Text>
                                <Text style={styles.entryText}>{edu.title}</Text>
                                <Text style={styles.entryText}>{edu.date}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No education details provided</Text>
                    )}
                    <Text style={styles.sectionTitle}>EXPERIENCE</Text>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <View key={index} style={styles.entry}>
                                <Text style={styles.entryTitle}>{exp.company}</Text>
                                <Text style={styles.entryText}>{exp.position}</Text>
                                <Text style={styles.entryTitle}>{exp.fromDate} - {exp.toDate}</Text>
                                <Text style={styles.entryTitle}>{exp.responsibilities}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No experience details provided</Text>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default CVToPDF;
