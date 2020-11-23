function personAndTeacher() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    function Teacher(name, email, subject) {
        Teacher.getPrototypeOf();
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person);

    return {
        Person,
        Teacher
    };
}