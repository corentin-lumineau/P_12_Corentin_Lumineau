import axios from 'axios';
import Factory from '../utils/Factory';

/**
 * fetch the daily activity of a user.
 * @async
 * @param {number} userId - The params id of the user to insert in URL.
 * @returns an object with all the session's kilogram and calories by day of the user
 *
 */


export async function fetchDailyActivity(userId) {
    try {
        
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        const { data } = response.data;

        const formatData = new Factory({data}).formatDailyActivity()
        
        return formatData;
    }
    catch(error) {
        return []
    }
}

/**
 * fetch the the session duration for each sessions.
 * @async
 * @param {number} userId - The params id of the user to insert in URL.
 * @returns an object with all the sessions and their durations for the user
 */

export async function fetchSessionDuration(userId) {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        const { data } = response.data;
        const formatData = new Factory({data}).formatSessionDuration();

        return formatData;
    }
    catch(error) {
        return []
    }
}

/**
 * fetch the types of activity for the user.
 * @async
 * @param {number} userId - The params id of the user to insert in URL.
 * @returns an object with the value for each kind of session and the names of the kind for the user
 */


export async function fetchTypeActivityData(userId) {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        const { data } = response.data;
        const formatData = new Factory({data}).formatTypeActivity();
        
        return formatData;
    }
    catch(error) {
        return []
    }
}

/**
 * fetch all the informations related to the user
 * @async
 * @param {number} userId - The params id of the user to insert in URL.
 * @returns an object with the personnal informations of the user, the score of the day and the keyData of alimentation
 */


export async function fetchUserInformations(userId) {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        const { data } = response.data;
        const formatData = new Factory({data}).formatUserInformations();
        
        return formatData;
    }
    catch(error) {
        return []
    }
}