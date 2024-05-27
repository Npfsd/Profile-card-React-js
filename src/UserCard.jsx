import React from 'react'

const UserData=[{
    name:"Jack",
    city:"New york",
    description:"Front-End Developer",
    skills:["UI / Ux","Front-End Developer","HTML","CSS","Javascript","React","Node js"],
    online:true,
    profile:"images/1.jpg"

},
{
    name:"Zoya",
    city:"USA",
    description:"Full Stack Developer",
    skills:["UI / Ux","Front-End Developer","HTML","CSS","Javascript","React","Node js","MySQL","MongoDB","API"],
    online:false,
    profile:"images/3.jpg"
},
{
    name:"James",
    city:"Canada",
    description:
    "Back-End Developer",
    skills:["Node js","Java","Python","Spring Boot(Framework)","MySQL"],
    online:true,
    profile:"images/2.jpg"
}
];

function User(props){
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img  width={"150px"} src={props.profile}  className='img' alt="profile-pic" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className=' primary outline'>Following</button>
        </div>
        <div className='skills' >
            <h6>Skills</h6>
            <ul>
               {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
               ))}
            </ul>
        </div>
    </div>


}

const UserCard = () => {
  return <>
  {UserData.map((user,index)=>(
    <User key={index} name={user.name} city={user.city} description={user.description} online={user.online} profile={user.profile} skills={user.skills} />
  ))}
  
  </>
}

export default UserCard