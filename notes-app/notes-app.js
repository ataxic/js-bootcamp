let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    const noteID = uuidv4()

    const timestamp = moment().valueOf()

    notes.push({
        id: noteID,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotes(notes)
    location.assign(`/edit.html#${noteID}`)
    //renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage' , function(e){
    if (e.key === 'notes') {

        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)        
        
    }
})


