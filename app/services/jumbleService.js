import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
let timeLog
class JumbleService {
    selectedJumble(id) {
        const jumbles = AppState.jumbles
        const foundJumble = jumbles.find(jumble => jumble.id == id)
        console.log(foundJumble)
        AppState.activeJumble = foundJumble
        AppState.time = 0
        timeLog = setInterval(this.timeTravel, 100)

    }
    submitJumble(jumble) {
        AppState.jumbles.push(new Jumble(jumble))
        console.log(jumble)
    }

    timeTravel() {
        AppState.time++
        console.log(AppState.time)

    }
    endTime() {
        AppState.activeJumble.fastestTime = AppState.time / 10
        clearInterval(timeLog)
        AppState.time = 0
        AppState.emit('activeJumble')
        AppState.emit('jumbles')
    }

}

export const jumbledService = new JumbleService