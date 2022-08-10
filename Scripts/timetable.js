'use strict';
const timeArr = [
    {
        "" : "Monday",
        "09:00-10:00" : "Primary Health Care",
        "10:00-11:00" : "Pediatric Clinic",
        "15:00-16:00" : "",
        "18:00-19:00" : "Gynecological Clinic"
    },
    {
        "" : "Tuesday",
        "09:00-10:00" : "Gynecological Clinic",
        "10:00-11:00" : "",
        "15:00-16:00" : "Dental Clinic",
        "18:00-19:00" : ""
    },
    {
        "" : "Wednesday",
        "09:00-10:00" : "Neurology Clinic",
        "10:00-11:00" : "Laryngological Clinic",
        "15:00-16:00" : "Primary Health Care",
        "18:00-19:00" : "Outpatient Surgery"
    },
    {
        "" : "Thursday",
        "09:00-10:00" : "",
        "10:00-11:00" : "Pediatric Clinic",
        "15:00-16:00" : "",
        "18:00-19:00" : "Dental Clinic"
    },
    {
        "" : "Friday",
        "09:00-10:00" : "Primary Health Care",
        "10:00-11:00" : "",
        "15:00-16:00" : "Cardiology Clinic",
        "18:00-19:00" : "Primary Health Care"
    },
    {
        "" : "Saturday",
        "09:00-10:00" : "Outpatient Surgery",
        "10:00-11:00" : "Cardiology Clinic",
        "15:00-16:00" : "",
        "18:00-19:00" : "Neurology Clinic"
    },
    {
        "" : "Sunday",
        "09:00-10:00" : "Pediatric Clinic",
        "10:00-11:00" : "Primary Health Care",
        "15:00-16:00" : "Laryngological Clinic",
        "18:00-19:00" : ""
    },
]

let enumArr = ["09:00-10:00", "10:00-11:00", "15:00-16:00", "18:00-19:00"];
// Enumerator style array to help in looping


document.addEventListener('DOMContentLoaded',()=>{
    qs('#deptSelect').value = "All Departments";
    // Reset the value of select tag to All departments
    
    loadTables(timeArr);
    // We load the tables using the initial array

    qs('#deptSelect').addEventListener('change',()=>{
        let selectValue = qs('#deptSelect').value;

        // If selected All departments, then use the initial array
        if(selectValue == "All Departments")
            loadTables(timeArr);
        else{
            const newTT = structuredClone(timeArr);
            // deep copying the initial time array 
            
            for( let weekday of newTT ){
                for(let i=0; i<4; i++){
                    if( weekday[enumArr[i]] != selectValue )
                        weekday[enumArr[i]] = "";
                }
            }
            // Replacing the values which don't match with the selection with empty string so that they don't appear in the table 

            console.log(newTT);
            loadTables(newTT);
        }
    })

})

// This function loads 2 tables based on the array that is entered
let loadTables = tt => {
    
    // Time table for laptop and tablets
    let timeTable = `
    <table>
        <thead>
            <tr>
                <th></th>
                <th id="mon" scope="col">Monday</th>    
                <th id="tue" scope="col">Tuesday</th>
                <th id="wed" scope="col">Wednesday</th>
                <th id="thu" scope="col">Thursday</th>
                <th id="fri" scope="col">Friday</th>
                <th id="sat" scope="col">Saturday</th>
                <th id="sun" scope="col">Sunday</th>
            </tr>
        </thead>
        <tbody>`;
    
    for( let i=0; i<4; i++ ){
        timeTable += `
        <tr>
            <td id="${[enumArr[i]]}" scope="row">${[enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} mon">${tt[0][enumArr[i]]} </td>
            <td headers="${[enumArr[i]]} tue">${tt[1][enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} wed">${tt[2][enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} thu">${tt[3][enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} fri">${tt[4][enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} sat">${tt[5][enumArr[i]]}</td>
            <td headers="${[enumArr[i]]} sun">${tt[6][enumArr[i]]}</td>
        </tr>`;
    }

    timeTable += `
        </tbody>
        </table>`;

    qs('#insertTimeTable').innerHTML = timeTable;

    // Time table for mobile
    let timeTableMobile = `<ul>`;

    for( let weekday of tt ){
        timeTableMobile += `
                <li>
                    <h6>${weekday[""]}</h6>
                    <ul>`;

        for(let i=0; i<4; i++){
            if(weekday[enumArr[i]])
                timeTableMobile += `<li> <span>${weekday[enumArr[i]]}</span> <span>${enumArr[i]}</span> </li> <hr>`;
        }
        // We're selecting only those clinics which are available at that given time
        
        timeTableMobile +=`</ul>
                </li>`
    }

    timeTableMobile += `
    </ul>`

    qs('#timeTableMT').innerHTML = timeTableMobile;
}