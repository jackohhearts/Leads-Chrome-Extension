let myLeads = ["website", "website2", "website3"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("un-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})


for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}