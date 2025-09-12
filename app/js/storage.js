class NotesStorage {
    static saveNote(note) {
        const notes = this.getAllNotes();
        const existingIndex = notes.findIndex(n => n.id === note.id);
        
        if (existingIndex >= 0) {
            notes[existingIndex] = { ...note, updatedAt: new Date().toISOString() };
        } else {
            notes.push({ ...note, createdAt: new Date().toISOString() });
        }
        
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    
    static getAllNotes() {
        const stored = localStorage.getItem('notes');
        return stored ? JSON.parse(stored) : [];
    }
}