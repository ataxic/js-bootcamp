const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEdit = document.querySelector('#last-update')

const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastEdit.textContent = generateLastEdited(note.updatedAt)

// this changes the title
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdit.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// this changes the body
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdit.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// this executes when the Remove Note button is clicked
removeElement.addEventListener('click', (e) => {
    removeNote(noteId)    
    saveNotes(notes)
    location.assign('/index.html')
})

// this runs when we have 2 browsers windows open so both sites update 
// when updates are made on the other.
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find((note) => {
            return note.id === noteId
        })
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEdit.textContent = generateLastEdited(note.updatedAt)
    }
    
})