import { AppState } from "../AppState.js"
let timeLog
class JumbleService {
    selectedJumble(id) {
        const jumbles = AppState.jumbles
        const foundJumble = jumbles.find(jumble => jumble.id == id)
        console.log(foundJumble)
        AppState.activeJumble = foundJumble
        timeLog = setInterval(this.timeTravel, 100)

    }

    timeTravel() {
        AppState.time++
        console.log(AppState.time)

    }
    endTime() {
        AppState.activeJumble.fastestTime = AppState.time
        clearInterval(timeLog)
        AppState.time = 0
        AppState.emit('activeJumble')
    }

}

export const jumbledService = new JumbleService