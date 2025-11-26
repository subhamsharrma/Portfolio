const axios = require('axios');

async function main() {
  try {
    const response = await axios.get(
      'https://httpdump.app/dumps/b355268e-6f3d-49f9-bb1a-ad914f02d813'
    );
    console.log(response.data); // prints the response from the API
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

main();
