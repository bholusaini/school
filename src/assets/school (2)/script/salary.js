const createSalary = (e)=>{
    e.preventDefault()
    const employee = document.getElementById("employee").value.trim()
    const salary = document.getElementById("salary").value.trim()
    const description = document.getElementById("description").value.trim()
    const date = document.getElementById("date").value.trim()
    console.log(employee, salary, description, date)
}