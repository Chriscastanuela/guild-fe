let requests = {
    getStudent: (param) => {
        // return fetch(`https://localhost:3001/api/v1/students:${param}`)
        return fetch(`http://localhost:3001/api/v1/students`)
        .then(res => res.json())
    },
    getCourse: (param) => {
        return fetch(`http://localhost:3001/api/v1/courses:${param}`)
        .then(res => res.json())
    },
}

export default requests;