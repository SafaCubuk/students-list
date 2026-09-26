'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AddPage() {
    const router = useRouter();

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        await fetch("http://localhost:3005/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.get("name"),
                studentClass: formData.get("studentClass"),
                gpa: formData.get("gpa")
            })
        });

        router.push('/');
    }

    return (
    <div className="add-page">
      <h1 className="add-title">Add Student</h1>
      <form className="add-form" onSubmit={onSubmit}>
        <input type="text" className="form-control mb-3" id="name" name="name"
          placeholder="Enter student name" />

        <input type="text" className="form-control mb-3" id="studentClass" name="studentClass"
          placeholder="Enter student class" />

        <input type="number" className="form-control mb-3 " id="gpa" name="gpa" step="0.01"
          placeholder="Enter student GPA" />

        <button type="submit" className="btn btn-primary add-button">
          Add Student
        </button>
      </form>
    </div>
  )
}
