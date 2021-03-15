let requests = {
    getStudents: async () => {
        return await fetch(`http://localhost:3001/api/v1/students`)
        .then(res => res.json())
    },
    getSpecificStudent: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/students:${param}`)
        .then(res => res.json())
    },
    getCourses: async () => {
        return await fetch(`http://localhost:3001/api/vi/courses`)
        .then(res => res.json())
    },
    getCourse: async (param) => {
        return await fetch(`http://localhost:3001/api/v1/courses:${param}`)
        .then(res => res.json())
    },
    postStudent: async (param) => {
        let res = await fetch(`http://localhost:3001/api/v1/students`, param);
        let data = res.json();
        return data;
    },
    postCourse: async (param) => {
        let res = await fetch(`http://localhost:3001/api/vi/students/course`, param);
        let data = res.json();
        return data;
    }
}

export default requests;