import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3005/students", { cache: "no-store" });
  const students = await res.json();

  const showStudents = students.map((student) => (
    <div className="col" key={student.id}>
      <div className="card h-100 student-card">
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">Class: {student.studentClass}</p>
          <p className="card-text">GPA: {student.gpa}</p>
          <Link href={`/students/${student.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <main className="home-hero">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {showStudents}
      </div>
    </main>
  );
}
