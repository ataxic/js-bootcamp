// Read existing notes from localstorage
const getSavedNotes = () => {
    
    const notesJSON = localStorage.getItem('notes')
    
    if (notesJSON !== null) { 
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Remove the note by ID
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex,1)
    }
}


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    textEl.setAttribute('href',`/edit.html#${note.id}`)

    // Setup the remove button
    button.textContent = 'Delete'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed Note'
    }

    noteEl.appendChild(textEl)

    return noteEl
}

// Save notes
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// sort notes of one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt ) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy ==='alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}


// Render application notes
const renderNotes = (note, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const newNotes = generateNoteDOM(note)        
        document.querySelector('#notes').appendChild(newNotes)
    })
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`