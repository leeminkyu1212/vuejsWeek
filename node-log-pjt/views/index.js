// console.log("hello");
const url="http://localhost:8080/api/logs"

const getData=async()=>{
  try{
    const response =await axios.get(url)
    if(response.data){
      console.log(response.data);
    }
  }catch(error){
    console.log(error);
  }
}

getData();