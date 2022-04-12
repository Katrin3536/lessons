let a = {
    name: "It-kamasutra",
    protocol: "https",
    maxStudentsCount: 10,
    isOnline: true,
    students:["Ivan", "Andrew", "Maksim"],
    classroom: {
        teacher:{
            name: "waw",
            age: 18
        }
    }
}

let b ={...a}; //shallow copy - поверхностная копия , вместо объектов и  массивов только ссылки на них + примитивы.
b.classroom = {...a.classroom};
b.students = [...a.students];
b.classroom.teacher={...a.classroom.teacher};
b.name = a.name;
