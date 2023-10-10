const students = [
    {
        name: "Sam Kidney",
        DOB: 2008,
        schools: ["PS 200", "IS201", "SITHS"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        name: "Kidney Pip",
        DOB: 2000,
        schools: ["PS 111", "IS211", "Stuv", "Harvard"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        name: "Pipney Samuel",
        DOB: 1776,
        schools: ["PS 20", "IS11", "Btech", "Phoenix State Uni",],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        name: "Samuel The Prophet",
        DOB: 1822,
        schools: ["PS 69", "IS420", "SITHS", "NYU"],
        age: function () {
            return year - this.DOB;
        },
    },
];

students.forEach((student) => console.log(student.name));
students.forEach((student) => student.schools.forEach((school)=> console.log(school)));
const afterbirth = students.filter((student)=> student.DOB >= 0);
afterbirth.forEach((student) => console.log(student.DOB))