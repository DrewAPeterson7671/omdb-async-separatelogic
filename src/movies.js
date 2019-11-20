

export class MovieService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`http://www.omdbapi.com/?t=${city}&apikey=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
