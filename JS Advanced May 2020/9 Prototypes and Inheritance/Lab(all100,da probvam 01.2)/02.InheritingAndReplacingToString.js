function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let result = [];
            Object.keys(this).forEach(key => result.push(`${key}: ${this[key]}`));
            result = `(${result.join(', ')})`;
            result = this.constructor.name + ' ' + result;
            return result;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Student,
        Teacher
    };
}


let p = personAndTeacher().Person;
let nakov = new p("nakov", "nakov@softuni.bg");
nakov.toString();

let student = personAndTeacher().Student;
let john = new student("John Doe", "john.doe@gmail.com", "Maths");
john.toString();

let teacher = personAndTeacher().Teacher;
let jane = new teacher("Jane Doe", "doe_jane@mail.de", "Biology");
jane.toString();