export const validateTitle = (title) => {
  if (!title) {
    return 'Title is a required field'
  } 
  return ''
}

export const validateDueDate = (date) => {
  const today = new Date();
  const nowDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  if (date < nowDate) {
    return 'do not accept days in the past as due date'
  }
  return ''
}