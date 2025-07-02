const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48838483-e75175989d72932dc3d4d0aa7";

export default class ImageApiService{
    constructor() {
        this.page = 1
    }

    fetchImages() {
const url = `${BASE_URL}?key=${API_KEY}&editors_choice=true&page=${this.page}&per_page=3`

return fetch(url)
      .then(r => r.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
    }
    
    incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}