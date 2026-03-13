import React, { useState } from 'react';

/**
 * Composant RomanQuiz
 * Reproduit fidèlement la DA (Direction Artistique) fournie :
 * - Couleurs : Or (#b8860b), Bordeaux (#800000), Fond crème (#f4e4bc)
 * - Police : Georgia, serif
 * - Styles : Fieldsets avec bordures dorées, boutons bordeaux avec hover doré
 */
function RomanQuiz() {
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        { id: 'q1', text: 'Qui est le premier empereur de Rome ?', options: [{ v: 'cesar', t: 'Jules César' }, { v: 'auguste', t: 'Auguste' }, { v: 'néron', t: 'Néron' }] },
        { id: 'q2', text: 'Selon la légende, quel animal a élevé Romulus et Rémus, les fondateurs de Rome ?', options: [{ v: 'lionne', t: 'Une lionne' }, { v: 'louve', t: 'Une louve' }, { v: 'rousse', t: 'Une rousse' }] },
        { id: 'q3', text: 'Quel fleuve traverse la ville de Rome ?', options: [{ v: 'rhône', t: 'Le Rhône' }, { v: 'nil', t: 'Le nil' }, { v: 'tibre', t: 'Le tibre' }] },
        { id: 'q4', text: 'Quel monument était célèbre pour ses gladiateurs ?', options: [{ v: 'panthéon', t: 'Le Panthéon' }, { v: 'colisée', t: 'Le Colisée' }, { v: 'romain', t: 'Le Forum Romain' }] },
        { id: 'q5', text: 'Quel monument était célèbre pour ses gladiateurs ?', options: [{ v: 'forum', t: 'Le Forum' }, { v: 'atrium', t: 'L\'Atrium' }, { v: 'domus', t: 'La Domus' }] },
        { id: 'q6', text: 'Quel célèbre général a franchi le Rubicon en disant "Alea jacta est" (le sort en est jeté) ?', options: [{ v: 'césar', t: 'Jules César' }, { v: 'antoine', t: 'Marc Antoine' }, { v: 'africain', t: 'Scipion l\'Africain' }] },
        { id: 'q7', text: 'Quel bâtiment possède une immense coupole avec un trou au sommet (l\'oculus) ?', options: [{ v: 'forum', t: 'Le Forum' }, { v: 'panthéon', t: 'Le Panthéon' }, { v: 'maxime', t: 'Le Cirque Maxime' }] },
        { id: 'q8', text: 'Comment appelle-t-on les ponts construits par les Romains pour transporter l eau ?', options: [{ v: 'viaducs', t: 'Des viaducs' }, { v: 'chaussées', t: 'Des chaussées' }, { v: 'aqueducs', t: 'Des aqueducs' }] },
        { id: 'q9', text: 'Où se déroulaient les courses de chars à Rome ?', options: [{ v: 'maximus', t: 'Au Circus Maximus' }, { v: 'marcellus', t: 'Au Thêatre de Marcellus' }, { v: 'colisée', t: 'Au Colisée' }] },
        { id: 'q10', text: 'Comment s\'appelait le bouclier rectangulaire du légionnaire romain ?', options: [{ v: 'scutum', t: 'Le Scutum' }, { v: 'gladius', t: 'Le Gladius' }, { v: 'pilum', t: 'Le Pilum' }] },
        { id: 'q11', text: 'Quel général carthaginois a traversé les Alpes avec des éléphants pour attaquer Rome ?', options: [{ v: 'hannibal', t: 'Hannibal' }, { v: 'hamilcar', t: 'Hamilcar' }, { v: 'vercingétorix', t: 'Vercingétorix' }] },
        { id: 'q12', text: 'Quelle ville fut détruite par l\'éruption du Vésuve en 79 après J.-C.', options: [{ v: 'athènes', t: 'Athènes' }, { v: 'pompéi', t: 'Pompéi' }, { v: 'carthage', t: 'Carthage' }] },
        { id: 'q13', text: 'Quelle langue parlaient les Romains ?', options: [{ v: 'grec', t: 'Le Grec' }, { v: 'latin', t: 'Le Latin' }, { v: 'italien', t: 'L\'italien' }] },
        { id: 'q14', text: 'Quel vêtement typique portaient les citoyens romains ?', options: [{ v: 'kilt', t: 'Le kilt' }, { v: 'toge', t: 'La Toge' }, { v: 'pantalon', t: 'Le pantalon' }] },
        { id: 'q15', text: 'Comment appelait-on les bains publics à Rome ?', options: [{ v: 'thermes', t: 'Les thermes' }, { v: 'gymnases', t: 'Les gymnases' }, { v: 'tavernes', t: 'Les tavernes' }] },
        { id: 'q16', text: 'Quel était le nom de l\'unité de base de l\'armée romaine (environ 5000 hommes) ?', options: [{ v: 'phalange', t: 'Une phalange' }, { v: 'cohorte', t: 'Une cohorte' }, { v: 'légion', t: 'Une légion' }] },
        { id: 'q17', text: 'Qui est le roi des dieux romains, dieu de la foudre ?', options: [{ v: 'mars', t: 'Mars' }, { v: 'jupiter', t: 'Jupiter' }, { v: 'neptune', t: 'Neptune' }] },
        { id: 'q18', text: 'Quelle déesse est la protectrice de la cité et de la sagesse ?', options: [{ v: 'vénus', t: 'Vénus' }, { v: 'diane', t: 'Diane' }, { v: 'minerve', t: 'Minerve' }] },
        { id: 'q19', text: 'Quel empereur a rendu le christianisme légal avec l\'édit de Milan ?', options: [{ v: 'constantin', t: 'Constantin' }, { v: 'commode', t: 'Commode' }, { v: 'trajan', t: 'Trajan' }] },
        { id: 'q20', text: 'Quel peuple a saccagé Rome en 410, marquant le début de la fin ?', options: [{ v: 'vikings', t: 'Les Vikings' }, { v: 'wisigoths', t: 'Les Wisigoths' }, { v: 'égyptiens', t: 'Les Égyptiens' }] },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('Réponses envoyées:', formData);
        alert('Ave Citoyen ! Vos réponses ont été transmises au Sénat.');
    };

    // Styles reproduisant exactement votre CSS
    const styles = {
        body: {
            backgroundColor: '#f4e4bc',
            fontFamily: "'Georgia', serif",
            color: '#b8860b',
            backgroundImage: 'url(fond.jpg)', // Note: assurez-vous que fond.jpg est accessible
            minHeight: '100vh',
            padding: '20px',
            margin: 0,
        },
        form: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        h1: {
            textAlign: 'center',
            marginBottom: '30px',
        },
        fieldset: {
            border: '2px solid #b8860b',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: 'transparent',
            padding: '15px',
        },
        legend: {
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            fontSize: '1.2rem',
            padding: '0 10px',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            cursor: 'pointer',
        },
        input: {
            marginRight: '10px',
        },
        containerValidation: {
            marginTop: '20px',
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#800000',
            color: 'gold',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: '0.3s',
        },
        buttonHover: {
            backgroundColor: '#b8860b',
            color: 'white',
        }
    };

    // Gestion simple du hover pour le bouton
    const [isHover, setIsHover] = useState(false);

    return (
        <div style={styles.body}>
            <form id="quiz-romain" style={styles.form} onSubmit={handleSubmit}>
                <h1 style={styles.h1}>Selectionnez la bonne réponse, Citoyen !</h1>

                {questions.map((q) => (
                    <fieldset key={q.id} style={styles.fieldset}>
                        <legend style={styles.legend}>{q.text}</legend>
                        {q.options.map((opt, index) => (
                            <label key={index} style={styles.label}>
                                <input
                                    type="radio"
                                    name={q.id}
                                    value={opt.v}
                                    style={styles.input}
                                    onChange={handleChange}
                                    required />
                                {opt.t}
                            </label>
                        ))}
                    </fieldset>
                ))}

                <div style={styles.containerValidation}>
                    <button
                        type="submit"
                        style={{
                            ...styles.button,
                            ...(isHover ? styles.buttonHover : {})
                        }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RomanQuiz;