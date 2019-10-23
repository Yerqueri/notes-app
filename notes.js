const chalk = require('chalk');
const dataModule = require('./data');

const addNote = (title, body) => {
    const notes = dataModule.loadNotes();
    let isDuplicateNote = false;
    notes.every((fetchedNote) => {
        if (fetchedNote.title === title) {
            isDuplicateNote = true;
            console.log(chalk.red.bold('title already in use'));
            return false;
        }
    });
    if (!isDuplicateNote) {
        const note = {
            title: title,
            body: body
        };
        notes.push(note);
        dataModule.saveNotes(notes);
    }
};

const listNotes = () => {
    const notes = dataModule.loadNotes();
    let titles = [];
    notes.forEach((note) => titles.push('\n' + note.title));
    console.log(chalk.cyan(titles));
};

const removeNote = (title) => {
    let notes = dataModule.loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    dataModule.saveNotes(notesToKeep);
    if(notes.length===notesToKeep.length){
        console.log(chalk.red.bold('no note was removed'))
    }else{
        console.log(chalk.green.bold('note with title '+title+' removed'));
    }
};

const readNote = (title) =>{
    const notes = dataModule.loadNotes();
    let matchedNote;
    notes.every((note)=>{
        if(note.title === title){
            matchedNote= note;
            return false;
        }
    });
    if(matchedNote)
        console.log(chalk.yellow(matchedNote.body));
    else{
        console.log(chalk.red.bold('note with title '+title+' not found'));
    }
};


module.exports = {
    addNote: (title, body) => addNote(title, body),
    listNotes: () => listNotes(),
    removeNote: (title) => removeNote(title),
    readNote: (title) => readNote(title)
};
