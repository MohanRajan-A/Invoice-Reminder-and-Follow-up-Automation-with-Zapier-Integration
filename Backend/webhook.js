const axios = require('axios');

const sendWebhook = async (data) => {
  try {
    const response = await axios.post(
      'https://hooks.zapier.com/hooks/catch/123456/abcdef/', 
      data, 
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'axios/1.7.2',
          'Accept': 'application/json, text/plain, */*'
        }
      }
    );
    console.log('Webhook sent successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
  }
};

// Example usage
const data = {
  key1: 'value1',
  key2: 'value2'
};

sendWebhook(data);
