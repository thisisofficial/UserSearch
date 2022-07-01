import React, { useEffect, useState } from 'react'
import { TextBox, Cont , Button, Text} from './atoms';
import { Navigate } from 'react-router-dom'

export function SearchBar(props){

    const [error, setError] = useState("");
    const [username, setUserName] = useState("");

    function checkUser(nameURL){
        const foo = fetch(`https://api.github.com/users/${nameURL}`).then(function(response){return(true);}).catch(function(error){
            return(false);
        });
        if(foo){
            return(true);
        }
        {
            return(false);
        }
    };

    useEffect(() =>{
        setError("");
    },[])

    return(
        <Cont flex width="80%">
            <Cont width="70%">
                <TextBox type="text" placeholder='Search GitHub username...'
                value={username}
                onChange={
                    (event) => {
                        setUserName(event.target.value);
                    }
                }/>  
            </Cont>
            <Cont width="10%">
                <Text color="#F74646">
                    {error}
                </Text>
            </Cont>
            
            <Button text="Search" onClick={() => {
                console.log("hi");
                const foo= checkUser(username);
                console.log(foo);
                if(foo){
                    setError(<Navigate to={"/refresh/"+username} replace={true}/>)
                }
                else{
                    setError("No result");
                }
            }}/>
        </Cont>
    )
}