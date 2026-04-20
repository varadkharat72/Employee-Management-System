// localStorage.clear()


const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: "active1",
        taskTitle: "Design Login Page",
        taskDescription: "Create UI for login page using Tailwind CSS",
        taskDate: "2026-04-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: "completed1",
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsiveness issue in navbar",
        taskDate: "2026-04-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: "failed1",
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API",
        taskDate: "2026-04-09",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: "active1",
        taskTitle: "Build Dashboard UI",
        taskDescription: "Create SaaS dashboard layout",
        taskDate: "2026-04-11",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: "completed1",
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize website images",
        taskDate: "2026-04-07",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: "active2",
        taskTitle: "Dark Mode Feature",
        taskDescription: "Implement dark mode toggle",
        taskDate: "2026-04-12",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: "failed1",
        taskTitle: "Form Validation",
        taskDescription: "Add validation to forms",
        taskDate: "2026-04-09",
        category: "Validation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: "active1",
        taskTitle: "Create Landing Page",
        taskDescription: "Design modern landing page",
        taskDate: "2026-04-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: "completed1",
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve spacing issues",
        taskDate: "2026-04-06",
        category: "CSS"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: "active2",
        taskTitle: "Add Animations",
        taskDescription: "Use Framer Motion for animations",
        taskDate: "2026-04-14",
        category: "Animation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: "active1",
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB database",
        taskDate: "2026-04-10",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: "completed1",
        taskTitle: "API Testing",
        taskDescription: "Test APIs using Postman",
        taskDate: "2026-04-08",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: "failed1",
        taskTitle: "Deploy App",
        taskDescription: "Deploy app on server",
        taskDate: "2026-04-09",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: "active2",
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported bugs",
        taskDate: "2026-04-12",
        category: "Debugging"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: "active1",
        taskTitle: "SEO Optimization",
        taskDescription: "Improve SEO of website",
        taskDate: "2026-04-11",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: "completed1",
        taskTitle: "Content Update",
        taskDescription: "Update website content",
        taskDate: "2026-04-07",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: "active2",
        taskTitle: "Add Blog Section",
        taskDescription: "Create blog UI and pages",
        taskDate: "2026-04-13",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: "failed1",
        taskTitle: "Analytics Setup",
        taskDescription: "Integrate Google Analytics",
        taskDate: "2026-04-09",
        category: "Analytics"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Rohan",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify (employees))
    localStorage.setItem('admin', JSON.stringify (admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return {employees, admin}
}


