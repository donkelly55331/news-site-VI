const BASE_URL = 'http://localhost:3001/api/users/login?include=user';


const login = async (credentialsObject) => {
  try{
      let response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentialsObject)
      });
      let resp = await response.json()
      console.log(resp)
      console.log(resp.message)
      console.log(resp.error)
      return(resp)     
                
  } catch (error) {
    console.error('Add Article failed: ', error)
  }
}


export default {
  login: login
}
