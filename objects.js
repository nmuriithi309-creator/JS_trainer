let person = {
  name: "Jane Doe",
  age: 24,
  address: "123 Kimathi St",
  is_student: true,
  "my email": "janedoe@gmail.com",
};
console.log(person);

console.log(person.name); //Jane Doe
console.log(person.is_student); //true

console.log(person["my email"]);
console.log(person["age"]);

person.age = 25;
person["name"] = "Alice Kamau";
console.log(person); //{name: 'Alice Kamau', age: 25, address: '123 Kimathi St', is_student: true, my email: 'janedoe@gmail.com'}

person.job_title = "Software Engineer";
console.log(person.job_title);

console.log(Object.keys(person));
//(6) ['name', 'age', 'address', 'is_student', 'my email', 'job_title']
console.log(Object.values(person));
//(6) ['Alice Kamau', 25, '123 Kimathi St', true, 'janedoe@gmail.com', 'Software Engineer']
console.log(Object.entries(person));
//(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// (2) ['name', 'Alice Kamau']

const userProfile = {
  id: 101,
  name: {
    first: "Brian",
    last: "Letting",
  },
  contact: {
    email: "jeff@example.com",
    phones: ["+254700000001", "+254700000002"],
  },
  address: {
    current: {
      city: "Nairobi",
      street: "Westlands Ave",
      postalCode: "00100",
    },
    previous: [
      {
        city: "Eldoret",
        street: "Main Street",
        postalCode: "30100",
      },
      {
        city: "Kisumu",
        street: "Lake View Road",
        postalCode: "40100",
      },
    ],
  },
  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: ["promotions", "updates"],
    },
  },
  projects: [
    {
      id: 1,
      name: "POS System",
      technologies: ["React", "FastAPI", "PostgreSQL"],
      tasks: [
        { title: "Set up DB", done: true },
        { title: "Design UI", done: false },
      ],
    },
    {
      id: 2,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript"],
      tasks: [
        { title: "Create About Page", done: true },
        { title: "Deploy to Netlify", done: false },
      ],
    },
  ],
};
console.log(Object.keys(userProfile))
//(6) ['id', 'name', 'contact', 'address', 'preferences', 'projects']


console.log(userProfile.projects[0].technologies[2])
//PostgreSQL



let my_arr= [23, 'Jane', 560, ['Lesson', 'Maths', {'currency' : 'KES'}], 987, 76,'John']
// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.

my_arr[4] = Number(my_arr[4].toString().split('').reverse().join(''))
'987'
//(3) ['9', '8', '7']
//(3) ['7', '8', '9']
//789

console.log(my_arr)
//(7) [23, 'Jane', 560, Array(3), 789, 76, 'John']