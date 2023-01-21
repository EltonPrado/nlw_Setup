/* tamém é possivel fazer utilizando o id igual ao css: 
const form = document.querySelector('#form-habits') */
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "19/01" //inserindo manualmente para teste
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso.")
    return
  }

  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

// Automatizando a inserção dos dados
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
