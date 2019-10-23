const fs = require('fs');

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = dataBuffer.toString();
        const notes = JSON.parse(data);
        return notes;
    } catch (e) {
        return [];
    }
};

module.exports = {
    saveNotes: (notes)=> saveNotes(notes),
    loadNotes: ()=> loadNotes()
};
