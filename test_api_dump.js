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
    const firstPackage = response.data.data[0];
    console.log('--- ALL KEYS ---');
    console.log(Object.keys(firstPackage).join(', '));
    console.log('--- VALUES ---');
    console.log(JSON.stringify(firstPackage, null, 2));
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

test();
