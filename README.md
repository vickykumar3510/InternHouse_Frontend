# Intern House

A full-stack user-friendly platform to browse, post, and manage job listings effortlessly. Designed with responsive layouts for seamless access on any device.

## Demo Link
[Live Demo](https://intern-house-frontend-one.vercel.app)

## Quick Start

```
git clone "https://github.com/vickykumar3510/InternHouse_Frontend.git"
cd <InternHouse_Frontend.git>
npm install
npm run dev
```

## Technologies
 * React JS
 * React Router
 * Node.js
 * Express
 * MongoDB

## Demo Video
Watch a walkthrough of all the major features of this app: [Google Drive Link](https://drive.google.com/drive/folders/13Tnx4N5oDotUo2FDkZuiUHwddqLmSk90?usp=sharing)

## Features

**Dashboard**
- Display all the jobs, highlighted with job title
- See Details and Delete button available

**Post Job**
- A form provided to add a new Job Post

**Job Details**
- All details about particular job is provided
- Qualification will be shown in ordered list

## API Reference

**GET/api/jobs**<br>
List of Jobs<br> 

Sample Response:
```
[{ _id, jobTitle, companyName, location, salary, jobType, jobDescription, requiredQualification, createdAt, updatedAt, __v }]
```

**POST/api/jobs**<br>
For add new Job<br>

Sample Response:
```
[{ _id, jobTitle, companyName, location, salary, jobType, jobDescription, requiredQualification, createdAt, updatedAt, __v }]
```

**DELETE/api/jobs/:id**<br>
For delete Job by id<br>

Sample Response:
```
[{ message }]
```


## Contact
For bugs or feature requests, please reach out to vicky.kumar3510@gmail.com