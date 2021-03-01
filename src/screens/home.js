import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.jpg";
import Course2 from "../ui/course-2.jpg";
import Course3 from "../ui/course-3.jpg"

import {
    NavLink,    
} from "react-router-dom";

function HomePage(){

    useEffect(()=>{
        document.title = "Ralie Learn";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Ethereum smart contracts Solidity course",
            tutor: {
                ID: 1,
                name: "Timmy Johnson",
                username: "EpicDev3000",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
            },
            duration: "82 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Machine Learning Bootcamp",
            tutor: {
                ID: 2,
                name: "CoolDude",
                username: "AReallyCoolDude",
                dp: "http://placeimg.com/100/100/people?tutors-" + 2,
            },
            duration: "1 hr 13 min",            
            poster: Course2
        },
        {
            ID: 3,
            title: "Draw Beautiful Paintings!",
            tutor: {
                ID: 3,
                name: "Tiy Johon",
                username: "Artist man",
                dp: "http://placeimg.com/100/100/people?tutors-" + 3,
            },
            duration: "82 min",            
            poster: Course3
        }
        
    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "John Smith",
                username: "Solana's Dope",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "John Smith",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "John Smith",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "John Smith",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "John Smith",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "John Smith",
            username: "Smith",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 8; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
        );
    }

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    return (
        <div className="home-page rel">

            {/**Instructor Live Now */}
            <div className="section rel">
                <h2 className="title s24 fontb">Creator <span  className="fontn">Stories</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/**Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            {/**Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Instructors
                </span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;