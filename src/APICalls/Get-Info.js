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
    postStudent: async (param) => {
        let res = await fetch(`http://localhost:3001/api/v1/students`, param);
        let data = res.json();
        return data;
    }
}

export default requests;