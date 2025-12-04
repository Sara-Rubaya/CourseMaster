// src/Pages/Dashboard/Admin/ManageCourses.jsx
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  // Fetch courses from backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data.courses); // match backend response
    } catch (err) {
      console.error(err);
    }
  };

  // Add or Update course
  const onSubmit = async (data) => {
    try {
      if (editingCourse) {
        // update
        const res = await axios.put(`http://localhost:5000/api/courses/${editingCourse._id}`, {
          ...data,
          price: Number(data.price),
          tags: data.tags.split(",").map((t) => t.trim()),
          syllabus: data.syllabus.split("\n").map((s) => s.trim()),
        });
        if (res.data._id) {
          Swal.fire("Updated!", "Course updated successfully.", "success");
          setEditingCourse(null);
          reset();
          fetchCourses();
        }
      } else {
        // add new
        const res = await axios.post("http://localhost:5000/api/courses", {
          ...data,
          price: Number(data.price),
          tags: data.tags.split(",").map((t) => t.trim()),
          syllabus: data.syllabus.split("\n").map((s) => s.trim()),
        });
        if (res.data._id) {
          Swal.fire("Added!", "New course added successfully.", "success");
          reset();
          fetchCourses();
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this course?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5000/api/courses/${id}`);
        if (res.data.message) {
          Swal.fire("Deleted!", "Course removed successfully.", "success");
          fetchCourses();
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Could not delete course.", "error");
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-5xl font-bold mb-4 text-violet-800">Manage Courses</h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
        <input
          {...register("title")}
          placeholder="Course Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
          defaultValue={editingCourse?.title}
        />

        <input
          {...register("instructor")}
          placeholder="Instructor Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
          defaultValue={editingCourse?.instructor}
        />

        <input
          {...register("price")}
          type="number"
          placeholder="Price"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
          defaultValue={editingCourse?.price}
        />

        <input
          {...register("category")}
          placeholder="Category"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
          defaultValue={editingCourse?.category}
        />

        <input
          {...register("tags")}
          placeholder="Tags (comma separated)"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
          defaultValue={editingCourse?.tags?.join?.(", ")}
        />

        <textarea
          {...register("syllabus")}
          placeholder="Syllabus (one per line)"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 text-black"
          required
          rows={4}
          defaultValue={editingCourse?.syllabus?.join?.("\n")}
        />

        <textarea
          {...register("description")}
          placeholder="Description"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 text-black"
          required
          rows={4}
          defaultValue={editingCourse?.description}
        />

        <button
          type="submit"
          className="items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 md:col-span-2"
        >
          {editingCourse ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto mt-8">
        <table className="table w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-3 px-4 text-left text-black">Title</th>
              <th className="py-3 px-4 text-left text-black">Instructor</th>
              <th className="py-3 px-4 text-left text-black">Category</th>
              <th className="py-3 px-4 text-left text-black">Price</th>
              <th className="py-3 px-4 text-left text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="mb-4 bg-white shadow rounded-lg"
                style={{ display: "table-row", marginBottom: "1rem" }}
              >
                <td className="py-3 px-4 text-black">{course.title}</td>
                <td className="py-3 px-4 text-black">{course.instructor}</td>
                <td className="py-3 px-4 text-black">{course.category}</td>
                <td className="py-3 px-4 text-black">${course.price}</td>
                <td className="flex gap-2 py-3 px-4 text-black">
                  <button
                    className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 text-base"
                    onClick={() => setEditingCourse(course)}
                    title="Edit Course"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 text-base"
                    onClick={() => handleDelete(course._id)}
                    title="Delete Course"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
