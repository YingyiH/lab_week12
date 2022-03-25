//part 2
function sele_elem(element) {
    const selection_single = document.querySelector(element)
    return selection_single
}
console.log(sele_elem('nav'))

//part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
function calc_scholarship(student_array) {
    const studentsScholarship = []
    
    for (const member in student_array) {

        let total_grade = 0
        let average_grade = 0

        function calc_avg(student_array){

            for(const student_grade of student_array[member].grades){  
                total_grade += student_grade 
            }
            average_grade = total_grade/4
        }

        calc_avg(students)
        
        if (average_grade > 80){
            const student_name = student_array[member].name
            studentsScholarship.push(
                {
                    name: student_name,
                    gradeAvg: average_grade
                }
            )
        } 
    }
    console.log(studentsScholarship)
}
calc_scholarship(students)

//part 4
function darkmode(element){
    const divdarktheme = document.querySelector(element)
    divdarktheme.classList.add("dark-theme")
}
darkmode('.light-theme')