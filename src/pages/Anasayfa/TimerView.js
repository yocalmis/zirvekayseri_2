import React, { useEffect,useState } from 'react'; 
import { observer } from "mobx-react-lite"
import Store from "./Store"
const Timer = new Store();


const TimerView =observer( ({  }) => {

  useEffect(() => {

/* Timer.getdata();	
Timer.getdata_async(); */
Timer.bilgiGetir();

  }, []);
 
  
  return (
 <>
 <span> {Timer.count}</span>
<button onClick={Timer.inc.bind(Timer)}>Artır</button>
<button onClick= {Timer.dec.bind(Timer)}>Artır</button>


 <div >
                <h1>Bilgi</h1>
                {Timer.bilgi && Timer.bilgi.map((bl)=> (
					  <div key={ bl.id } className={"userList"}>   
                            { bl.web_url } -  @{ bl.facebook }
							
                        </div>
        ))}         
            </div>
	
			
			
	</>
  );
	
	
	} )

export default TimerView



/*
const TimerView = observer(({ Store }) => 



<>
<span>Seconds passed: {Timer.count}</span>

<button onClick={Timer.inc.bind(Timer)}>Artır</button>
<button onClick={Timer.dec.bind(Timer)}>Artır</button>



      <div >
                <h1>Users</h1>
                {Timer.users && Timer.users.map((user)=> (
				  <div key={ user.id } className={"userList"}>  
                            { user.name } -  @{ user.username }
								{console.log(user.name)}
                        </div>
        ))}         
            </div>



</>



)

export default TimerView;*/