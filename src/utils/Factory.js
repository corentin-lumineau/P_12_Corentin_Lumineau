import PictoCalories from '../assets/pictoCalories.png';
import PictoProteines from '../assets/pictoProteines.png';
import PictoGlucides from '../assets/pictoGlucides.png';
import PictoLipides from '../assets/pictoLipides.png';


/** Class representing a Factory. This modelisation class take rough data from API to inject it into each charts components  */
export default class Factory {

    /**
     * Create a Factory
     * @constructor
     * @param {object} data - The data value
     */
    
    constructor({data}) {
      
        this._data = data;
    }

      /**
     * Format the daily activity data to generate the DailyActivity component
     * @returns the object containing formated data
     */

    formatDailyActivity() {
        this._data.sessions.forEach((session, index) => {
            session.day = index + 1;
        });

        return this._data;
    }

     /**
     * Format the session duration activity to generate SessionDuration component
     * @returns the object containing formated data
     */

    formatSessionDuration() {
        const days = ["L", "M", "M", "J", "V", "S", "D"];

        this._data.sessions.forEach((session, index) => {
            session.day = days[index];
        });

        return this._data;
    }

    /**
     * Format the type activity data to generate TypeActivity component
     * @returns the object containing formated data
     */

    formatTypeActivity() {
        let arrayOfKind = Object.values(this._data.kind);
        
        const dictionnary = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

        arrayOfKind.forEach((el, index) => {
            arrayOfKind[index] = dictionnary[index];
        });
       
        this._data.data.forEach((item, index) => {
            item.kind = arrayOfKind[index]
        });
        return this._data;
    }

     /**
     * Format the user informtions to generate the Show component, the Score component and the AlimentationCard component
     * @returns the object containing formated data
     */

    formatUserInformations() {
        const dictionnary = ["Calories", "Proteines", "Glucides", "Lipides"];
        const picto = [PictoCalories, PictoProteines, PictoGlucides, PictoLipides];
        const backgroundClass = ["red", "blue", "yellow", "pink"];
        const unit = ["kCal", "g", "g", "g"];
       
        if(this._data.todayScore) {
            this._data.todayScore = [{"name": "score", "uv": this._data.todayScore * 100, "fill": "#E60001"}];
        }
        else {
            this._data.score = [{"name": "score", "uv": this._data.score * 100, "fill": "#E60001"}];
        }
        

        const array = Object.entries(this._data.keyData);
        const newArray = []
        array.forEach((el) => {
            newArray.push(Object.assign({}, el));
        });
        newArray.forEach((el, index) => {
            el[Object.keys(el)[0]] = dictionnary[index];
            el.picto = picto[index];
            el.background = backgroundClass[index];
            el.unit = unit[index]
        });
        this._data.keyData = newArray;
        return this._data;
    }
}