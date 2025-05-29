const createExpense = (e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value.trim()
    const description = document.getElementById("description").value.trim()
    const amount = document.getElementById("amount").value.trim()
    const date = document.getElementById("date").value.trim()
    console.log(title)
    console.log(description)
    console.log(amount)
    console.log(date)
}