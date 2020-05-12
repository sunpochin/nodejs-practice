const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    let noteFound = false;
    const duplicateNotes = notes.filter(function (note) {
        noteFound = note.title === title
    })
    if (noteFound) {
        console.log('note found! ')
        const notesToKeep = notes.filter(function (note) {
            return note.title !== title
        })
        console.log('After removing note:', notesToKeep)
        saveNotes(notesToKeep)
    } else {
        console.log('note not found! ')
    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}