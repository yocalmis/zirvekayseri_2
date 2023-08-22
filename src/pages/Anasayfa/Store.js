import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class Store {
  /*	https://jsonplaceholder.typicode.com/users
    users:[
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette"
  }
   ,
  {
    "id": 3,
    "name": "Ervin Howell",
    "username": "Antonette"
  }	
  
]	
	
*/

  secondsPassed = 0;
  count = 0;
  users = [];
  bilgi = [];
  kampanya = [];
  etkinlik = [];
  referans = [];

  constructor() {
    makeAutoObservable(this);

    /*
makeObservable(this, {
count: observable,
users: observable,
bilgi: observable,
kampanya,
bilgiGetir: action,
kampanyaGetir: action,
inc: action,
dec: action
})
*/
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
  inc() {
    this.count += 1;
  }
  dec() {
    this.count -= 1;
  }

  /* 	 getdata() {
		
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    axios.get(baseURL).then((response) => { this.users=response.data;	  
    });

    }
	
     getdata_async = async () => {
	    const baseURL = "https://jsonplaceholder.typicode.com/users";
    try {
        const resp = await axios.get(baseURL);
        console.log(resp.data);  
		
		
        runInAction(() => {
          this.users=resp.data;
        })		
		
    } catch (err) {

          console.error(err); 
    }
};	

	*/

  bilgiGetir = async () => {
    const baseURL = "https://zirvekayseri.com/api/bilgi";
    try {
      const resp = await axios.get(baseURL);
      // console.log(resp.data);

      runInAction(() => {
        this.bilgi = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };

  kampanyaGetir = async () => {
    const baseURL = "https://zirvekayseri.com/api/kampanya";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.kampanya = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };

  etkinlikGetir = async () => {
    const baseURL = "https://zirvekayseri.com/api/etkinlik";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.etkinlik = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };

  referansGetir = async () => {
    const baseURL = "https://www.zirvekayseri.com/api/referans";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.referans = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export default Store;
