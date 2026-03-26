import axios from 'axios';

const api = axios.create({
  baseURL: 'https://round10-backend-fitness.huma-volve.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer 2|06lLZtIvZr7ORy2Pmx9dDAxdwJjzEMn7pODwRCV5552538ac'
  },
});

async function test() {
  try {
    const response = await api.get('api/packages');
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error.message);
  }
}

test();
