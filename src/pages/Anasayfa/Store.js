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
  kampanyaDetay = [];
  etkinlik = [];
  referans = [];
  personel = [];
   urun = []; 
   page = [];
  constructor() {
    makeAutoObservable(this);

    /*
makeObservable(this, {
count: observable,
users: observable,
bilgi: observable,
kampanya: observable,
kampanyaDetay: observable,
etkinlik: observable,
referans: observable,
personel: observable,
page: observable,
urun: observable,
bilgiGetir: action,
kampanyaGetir: action,
etkinlikGetir: action,
referansGetir: action,
personelGetir: action,
kampanyaDetayGetir: action,
pageGetir: action,
urunGetir: action,
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
  
    kampanyaDetayGetir = async (sn) => {
    const baseURL = "https://www.zirvekayseri.com/api/kampanya_getir/"+sn;
    try {
      const resp = await axios.get(baseURL);
     	//  console.log(resp.data);

      runInAction(() => {
        this.kampanyaDetay = resp.data;
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

  personelGetir = async () => {
    const baseURL = "https://www.zirvekayseri.com/api/personel";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.personel = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  
   urunGetir = async () => {
    const baseURL = "https://www.zirvekayseri.com/api/urun";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.urun = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  }; 
  
 
     pageGetir = async () => {
    const baseURL = "https://www.zirvekayseri.com/api/sayfa";
    try {
      const resp = await axios.get(baseURL);
      //	  console.log(resp.data);

      runInAction(() => {
        this.page = resp.data;
      });
    } catch (err) {
      console.error(err);
    }
  };
  
}

export default Store;
