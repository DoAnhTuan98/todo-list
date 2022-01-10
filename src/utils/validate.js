export const validateTitle = (title) => {
  if (!title) {
    return 'Title is a required field'
  } 
  return ''
}

export const validateDueDate = (date) => {
  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`
  const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() +1}` : `${today.getMonth() +1}`
  const year = today.getFullYear()
  const nowDate = year+'-'+month+'-'+day

  if (new Date(date) < new Date(nowDate)) {
    return 'do not accept days in the past as due date'
  }
  return ''
}