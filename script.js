function load(){
    console.log("window loaded..")
let url = "http://dummy.restapiexample.com/api/v1/employees"
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
            let employee_name = document.createElement('td')
            let employee_salary = document.createElement('td')
            let employee_age = document.createElement('td')
            

            id.innerHTML = obj.id
            employee_name.innerHTML = obj.employee_name
            employee_salary.innerHTML = obj.employee_salary
            employee_age.innerHTML = obj.employee_age
            

            row.appendChild(id)
            row.appendChild(employee_name)
            row.appendChild(employee_salary)
            row.appendChild(employee_age)
            


            table.appendChild(row)

        }

    }

    function getmoredata(){
        console.log("window loaded..")
let url = "http://dummy.restapiexample.com/api/v1/employees"
fetch(url)
.then(result => result.json())
.then(json => show(json.data))
    }    

    
window.onload = load()
    const trying = document.querySelector('.focusing')
const focusing = ()=>{
    trying.classList.remove('active')
}


