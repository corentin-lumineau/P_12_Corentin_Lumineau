import axios from 'axios';
import Factory from '../utils/Factory';


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