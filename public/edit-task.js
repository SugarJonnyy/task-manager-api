const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')

const id = new URLSearchParams(window.location.search).get('id')
let tempName

const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`/api/v1/tasks/${id}`)
    const { _id: taskID, completed, name } = task

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    tempName = name
    if (completed) {
      taskCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  editBtnDOM.textContent = 'Loading...'
  try {
    const {
      data: { task },
    } = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskNameDOM.value,
      completed: taskCompletedDOM.checked,
    })
    const { _id: taskID, completed, name } = task

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    tempName = name
    taskCompletedDOM.checked = completed

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = 'success, task edited'
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    taskNameDOM.value = tempName
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = 'error, please try again'
  }
  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})