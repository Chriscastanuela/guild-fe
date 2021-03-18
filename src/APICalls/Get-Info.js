let requests = {
    getCourses: async () => {
        return await fetch(`http://localhost:3001/api/vi/courses`)
        .then(res => res.json())
    },
    getStudents: async () => {
        return await fetch(`http://localhost:3001/api/v1/students`)
        .then(res => res.json())
    },
    getSpecificStudent: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/student${param}`)
        .then(res => res.json())
    },
    getCourse: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/courses:${param}`)
        .then(res => res.json())
    },
    postStudent: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/students`, param)
        .then(res => res.json());
    },
    postCourse: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/course`, param)
        .then(res => res.json());
    }
}

export default requests;