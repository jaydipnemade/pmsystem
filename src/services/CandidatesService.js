import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/getallusers";

class CandidatesService {
  getcandidates() {
    return axios.get(USER_API_BASE_URL);
  }

  addJobs(candidatesDetails) {
    return axios.post(USER_API_BASE_URL, candidatesDetails);
  }
}

const newCandidatesService = new CandidatesService();

export default newCandidatesService;
