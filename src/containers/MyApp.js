import React,{ useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";

function MyApp () {

    const [users, setUsers] = useState([])
    const [searchField, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {setUsers(user)})
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredUsers = users.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if(users === 0){
        return(
            <h1>Loading</h1>
        );
    }
    else{
        return(
            <div className= 'tc'>
                <h1 className= 'f1'>React-Robots</h1>
                <SearchBox searchChange={ onSearchChange }/>
                <Scroll>
                    <CardList robots={ filteredUsers }/>
                </Scroll>
            </div>
        );
    }
}

export default MyApp;