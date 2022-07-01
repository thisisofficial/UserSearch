import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {Theme, ThemeContext} from '../Helpers';
import {AppCont, Cont, Title, Text, SVG, ImgCont, SearchSVG, LightSVG} from './molecules/atoms';
import iconcompany from '/src/assets/icon-company.svg';
import icontwitter from '/src/assets/icon-twitter.svg';
import iconwebsite from '/src/assets/icon-website.svg';
import iconlocation from '/src/assets/icon-location.svg';
import iconsearch from '/src/assets/icon-search.svg';
import iconsun from '/src/assets/icon-sun.svg';
import iconmoon from '/src/assets/icon-moon.svg';
import { SearchBar } from './molecules/SearchBar';

export function Card() {
    const {name} = useParams();
    const [userInfo,   setUserInfo] = useState([]);
    const [theme, setTheme]  =  useState('dark');
    const [joinedDate, fixDate] = useState(null);

    const toggleTheme = ()  =>{
        setTheme((curr) =>  (curr === 'light' ? 'dark' : 'light'));
    };

    const themeDark = Theme.dark;
    const themeLight = Theme.light;

    //Get the data from the GitHub AP
    const fetchUser = async (nameURL)=>{

        console.log(nameURL);

        const foo = fetch(`https://api.github.com/users/${nameURL}`).then(function(response){
            if(response.ok){
                return(true);
            }
            else{
                return(false);
            }
        });

        if(foo){
            const response = await fetch(`https://api.github.com/users/${nameURL}`);
            const responseJSON = await response.json();
            setUserInfo(responseJSON);
            //This shit sucks ass, hope i die in a fire or something
            const dateData = new Date(responseJSON.created_at);
            const newdate = dateData.toString().split(" ");
            const finaldate = newdate[0] + " " + newdate[2] + " " + newdate[1] + " " + newdate[3];
            fixDate(finaldate);
            return(true);
        }
        else{
            return(false);
        }
        
    };



    //Should be moved to another file if needed.

    useEffect(() =>{
        fetchUser(name);
        console.log(userInfo);
    },[])


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === 'dark'? themeDark : themeLight}>
                <AppCont>
                    <Cont init>
                        {/*Comments are sections to be moved to their respective files in ./molecules !!*/}
                        {/*Toogler */}
                        <Cont flex margin_bottom startend>
                            <Title>devfinder</Title>
                            <Cont flex onClick={ () => toggleTheme()} hover>
                                <Cont margin_right>
                                  <Title smol hover plain>{theme === 'dark'? "LIGHT" : "DARK"}</Title>  
                                </Cont>
                                <Cont margin_left>
                                    <LightSVG src={theme === 'dark'? iconsun: iconmoon}/>   
                                </Cont>
                                 
                            </Cont>
                        </Cont>
                        <Cont lighter margin flex>
                            <Cont margin>
                                <SearchSVG src={iconsearch}/>
                            </Cont>
                            <SearchBar/>
                        </Cont>
                        
                        <Cont lighter pad="5% 5% 5% 30%" margin>
                            {/*Profile*/}
                            <Cont flex fullwidth>
                                <ImgCont src={userInfo.avatar_url}></ImgCont>
                                <Cont flextablet startend margin_bottom width="65%">
                                    <Cont>
                                        <Title>{userInfo.name}</Title>
                                        <Text color="#0079FF">@{userInfo.login}</Text>
                                    </Cont>
                                    <Cont>
                                        <Text>Joined {joinedDate}</Text>
                                    </Cont>
                                </Cont>
                            </Cont>

                            <Cont margin fade={userInfo.bio?false: true}>
                                <Text>{userInfo.bio?userInfo.bio: "This profile has no bio."}</Text>
                            </Cont>

                            {/*Stats*/}
                            <Cont darker pad="3% 3% 3% 7%" flex margin onlystart>
                                <Cont width="33%">
                                    <Text smol>Repos</Text>
                                    <Title plain>{userInfo.public_repos}</Title>   
                                </Cont>
                                <Cont width="33%">
                                    <Text smol>Followers</Text>
                                    <Title plain>{userInfo.followers}</Title>
                                </Cont>
                                <Cont width="33%">
                                    <Text smol>Following</Text>
                                    <Title plain>{userInfo.following}</Title>  
                                </Cont>
                            </Cont>
                            {/*Additional info*/}
                            <Cont margin flexphone startend>
                                <Cont width="50%">
                                    <Cont flex fade={userInfo.location? false: true} onlystart margin_top>
                                        <SVG src={iconlocation} loc dark={theme == "dark"? false: true}/>
                                        <Text>{!userInfo.location? "Not Avilable": userInfo.location}</Text>
                                    </Cont>
                                    <Cont flex fade={userInfo.blog !== ""? false: true} onlystart margin_top>
                                        <SVG src={iconwebsite} dark={theme == "dark"? false: true}/>
                                        <Text url={userInfo.blog === ""? false: true}>{userInfo.blog === ""? "Not Avilable": userInfo.blog}</Text>
                                    </Cont>
                                </Cont>
                                <Cont width="50%">
                                    <Cont flex fade={userInfo.twitter_username? false: true} onlystart margin_top>
                                        <SVG src={icontwitter} dark={theme == "dark"? false: true}/>
                                        <Text url={!userInfo.twitter_username?false:true}>{!userInfo.twitter_username? "Not Avilable": userInfo.twitter_username}</Text>
                                    </Cont>
                                    <Cont flex fade={userInfo.company? false: true} onlystart margin_top>
                                        <SVG src={iconcompany} dark={theme == "dark"? false: true}/>
                                        <Text url={!userInfo.company? false: true}>{!userInfo.company? "Not Avilable": userInfo.company}</Text>
                                    </Cont>
                                </Cont>
                            </Cont>
                        </Cont>
                        
                    </Cont>
                    
                </AppCont>
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}
