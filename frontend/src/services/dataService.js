import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/data';

const DataService = {
  getData: async () => {
    try {
      return await axios.get(baseUrl);
    } catch (error) {
      throw error;
    }
  },
};

export default DataService;
