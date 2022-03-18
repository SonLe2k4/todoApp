
const saveLocalStorage = (data) => {
    localStorage.setItem('DATA_TODOS', JSON.stringify(data));
}

export default saveLocalStorage