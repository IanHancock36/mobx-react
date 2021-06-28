
import { nanoid } from "nanoid"
om "react-native"


export function createNotesStore(){
    return {
        notes: [],
        addNote(text){
            this.notes.push({
                text, id:nanoid()
            })
        },
        removeNotes(id){
            this.notes =this.notes.filter(note => note.id !== id)
        }
    }
}

// in mobx actions are functions
// the push takes a object 
// using nanoid 