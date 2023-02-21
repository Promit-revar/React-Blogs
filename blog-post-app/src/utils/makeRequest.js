import axios from 'axios'; 
const makeRequest = async (url, method) => {
  const data = await axios({
    method: method,
    url: url,
  });
  return data;
}
export default makeRequest;