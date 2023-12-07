import { generateId } from "../utils/GenerateId.js";



export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        this.fastestTime = data.fastestTime || 'N/A'
        this.startTime = null
        this.endTime = null
    }

    get ListTemplate() {
        return `

    <div class="col-12 d-flex justify-content-around">
        <li>${this.name}</li>
        <button class="btn btn-danger" onclick="app.jumbleController.selectJumble('${this.id}')" >Start</button>
        <p id="draw-jumble"></p>
        <p>${this.fastestTime}</p>
        <p>WPM goes here</p>
    </div>

        `
    }


    get ActiveTemplate() {
        return `
        <div class="w-75">
            <div>
                <div class="d-flex justify-content-between">
                    <h3>${this.name}</h3>
                    <h3>Fastest Time:${this.fastestTime}s</h3>
                </div>
                <p>${this.body}</p>
            </div>

            <div>
                    <textarea class="w-100 border-info" rows="10" type="text" id="submitted-jumble"></textarea>
                    <button onclick="app.jumbleController.checkSubmission()" class="btn btn-outline-info w-100">Submit</button>
            </div>
        </div>
        `
    }
}
