const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

const noteModule = require('./notes');

// create an add command
yargs.command({
    command: 'add',
    describe: 'add a new node',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteModule.addNote(argv.title, argv.body);
    }
});

// create reomve command
yargs.command({
    command: 'remove',
    describe: 'remove a node',
    builder: {
        title: {
            describe: 'provide title to remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteModule.removeNote(argv.title);
    }
});

//list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: () => {
        noteModule.listNotes();
    }
});

//read command
yargs.command({
    command: 'read',
    describe: 'read a note from the list',
    builder: {
        title: {
            describe: 'provide title to remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteModule.readNote(argv.title);
    }
});

//this is helping in parsing yargs arguments.to remove use yargs.parse();
////console.log(yargs.argv);

yargs.parse();
