function load(){
    console.log("window loaded..")
let url = "https://reqres.in/api/users?page=1"
fetch(url)
.then(result => result.json())
.then(json => show(json.data))

}
    const show = (user)=>{
        let table = document.getElementById('table')
        for(i = 0; i< (user.length) ; i++){

            let obj = user[i];
            console.log(obj)
            let row = document.createElement('tr')
            let id = document.createElement('td')
            let email = document.createElement('td')
            let first_name = document.createElement('td')
            let last_name = document.createElement('td')
            

            id.innerHTML = obj.id
            email.innerHTML = obj.email
            first_name.innerHTML = obj.first_name
            last_name.innerHTML = obj.last_name
            

            row.appendChild(id)
            row.appendChild(email)
            row.appendChild(first_name)
            row.appendChild(last_name)
            


            table.appendChild(row)

        }

    }

    function getmoredata(){
    console.log("window loaded..")
let url = "https://reqres.in/api/users?page=2"
fetch(url)
.then(result => result.json())
.then(json => shows(json.data))

}
    const shows = (user)=>{
        let table = document.getElementById('table')
        for(i = 0; i< (user.length) ; i++){

            let obj = user[i];
            console.log(obj)
            let row = document.createElement('tr')
            let id = document.createElement('td')
            let email = document.createElement('td')
            let first_name = document.createElement('td')
            let last_name = document.createElement('td')
            

            id.innerHTML = obj.id
            email.innerHTML = obj.email
            first_name.innerHTML = obj.first_name
            last_name.innerHTML = obj.last_name
            

            row.appendChild(id)
            row.appendChild(email)
            row.appendChild(first_name)
            row.appendChild(last_name)
            


            table.appendChild(row)

        }

    }

    
window.onload = load
    const trying = document.querySelector('.focusing')
const focusing = ()=>{
    trying.classList.remove('active')
}


