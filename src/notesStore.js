
import { nanoid } from "nanoid"
import { PushNotificationIOS } from "react-native"


export function createNotesStore(){
    return {
        notes: [],
        addNote(text){
            this.notes.push({
                text, id:nanoid()
            })
        },
        removeNotes(id){
            
        }
    }
}

// in mobx actions are functions
// the push takes a object 
// using nanoid 