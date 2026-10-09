const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "employee1@example.com",
        password: "123",

        taskCounts: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build login page",
                taskDescription: "Create a responsive login page with email and password validation.",
                taskDate: "2026-10-08",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix dashboard bugs",
                taskDescription: "Find and fix the reported issues in the employee dashboard.",
                taskDate: "2026-10-09",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update profile page",
                taskDescription: "Improve the employee profile page and update its UI.",
                taskDate: "2026-10-07",
                category: "Development"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Test authentication",
                taskDescription: "Test login, logout, and authentication error scenarios.",
                taskDate: "2026-10-10",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy staging build",
                taskDescription: "Deploy the latest application build to the staging server.",
                taskDate: "2026-10-06",
                category: "Deployment"
            }
        ]
    },

    {
        id: 2,
        firstName: "Vihaan",
        email: "employee2@example.com",
        password: "123",

        taskCounts: {
            active: 4,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare sales report",
                taskDescription: "Prepare the weekly sales performance report.",
                taskDate: "2026-10-08",
                category: "Sales"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Contact new clients",
                taskDescription: "Contact potential clients and discuss available services.",
                taskDate: "2026-10-09",
                category: "Sales"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update CRM records",
                taskDescription: "Update customer details and sales information in the CRM.",
                taskDate: "2026-10-07",
                category: "Data Entry"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Schedule client meeting",
                taskDescription: "Schedule meetings with clients for the upcoming week.",
                taskDate: "2026-10-10",
                category: "Meetings"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Complete sales presentation",
                taskDescription: "Prepare a presentation for the upcoming client meeting.",
                taskDate: "2026-10-06",
                category: "Presentation"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Follow up with leads",
                taskDescription: "Follow up with all leads generated during the previous week.",
                taskDate: "2026-10-11",
                category: "Sales"
            }
        ]
    },

    {
        id: 3,
        firstName: "Aditya",
        email: "employee3@example.com",
        password: "123",

        taskCounts: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design homepage",
                taskDescription: "Create a modern and responsive design for the company homepage.",
                taskDate: "2026-10-08",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Create mobile layouts",
                taskDescription: "Design mobile layouts for the main application screens.",
                taskDate: "2026-10-09",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update design system",
                taskDescription: "Add new colors, typography, and components to the design system.",
                taskDate: "2026-10-07",
                category: "Design"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create dashboard mockup",
                taskDescription: "Create a high-fidelity mockup for the employee dashboard.",
                taskDate: "2026-10-10",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Redesign settings page",
                taskDescription: "Redesign the application settings page based on user feedback.",
                taskDate: "2026-10-06",
                category: "Design"
            }
        ]
    },

    {
        id: 4,
        firstName: "Ishaan",
        email: "employee4@example.com",
        password: "123",

        taskCounts: {
            active: 4,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Write project documentation",
                taskDescription: "Create detailed documentation for the current project.",
                taskDate: "2026-10-08",
                category: "Documentation"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Review technical documents",
                taskDescription: "Review existing technical documentation and correct outdated information.",
                taskDate: "2026-10-09",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Prepare meeting notes",
                taskDescription: "Prepare and organize notes from the previous team meeting.",
                taskDate: "2026-10-07",
                category: "Administration"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create weekly report",
                taskDescription: "Prepare the weekly project status report for management.",
                taskDate: "2026-10-10",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Organize project files",
                taskDescription: "Organize project documents and files in the shared drive.",
                taskDate: "2026-10-06",
                category: "Administration"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update task tracker",
                taskDescription: "Review current tasks and update their status in the task tracker.",
                taskDate: "2026-10-11",
                category: "Management"
            }
        ]
    },

    {
        id: 5,
        firstName: "Rohan",
        email: "employee5@example.com",
        password: "123",

        taskCounts: {
            active: 4,
            newTask: 2,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Test payment system",
                taskDescription: "Test the payment system and verify successful and failed transactions.",
                taskDate: "2026-10-08",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Run regression tests",
                taskDescription: "Run regression tests on the latest application release.",
                taskDate: "2026-10-09",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Test registration flow",
                taskDescription: "Verify that new users can successfully register their accounts.",
                taskDate: "2026-10-07",
                category: "Testing"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create bug report",
                taskDescription: "Document all critical bugs found during the latest testing cycle.",
                taskDate: "2026-10-10",
                category: "Quality Assurance"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Test notification system",
                taskDescription: "Verify email and in-app notifications across different scenarios.",
                taskDate: "2026-10-06",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Verify API responses",
                taskDescription: "Check API responses and make sure all endpoints return expected data.",
                taskDate: "2026-10-11",
                category: "Quality Assurance"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Test logout functionality",
                taskDescription: "Verify logout functionality across desktop and mobile devices.",
                taskDate: "2026-10-05",
                category: "Testing"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        firstName: "Arjun",
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   

   return{employees,admin}
   
  
   
}
