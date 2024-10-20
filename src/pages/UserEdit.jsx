import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserEdit = () => {
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("Developer");
  const { setUser } = useContext(UserContext);

  const handleFormEvent = (e) => {
    e.preventDefault();
    setUser({ email, job });
    alert("ข้อมูลบันทึกสำเร็จ !");
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleFormEvent}
    >
      <h2 className="text-2xl font-bold mb-4">แก้ไขข้อมูลผู้ใช้</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          อีเมล
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="job"
        >
          อาชีพ
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="job"
          value={job}
          onChange={(event) => setJob(event.target.value)}
        >
          <option value="Developer">นักพัฒนา</option>
          <option value="Designer">นักออกแบบ</option>
          <option value="Manager">ผู้จัดการ</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        บันทึกการเปลี่ยนแปลง
      </button>
    </form>
  );
};

export default UserEdit;
