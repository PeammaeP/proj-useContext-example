import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">ข้อมูลผู้ใช้</h2>
      <p>
        <strong>อีเมล:</strong> {user.email}
      </p>
      <p>
        <strong>อาชีพ:</strong> {user.job}
      </p>
    </div>
  );
};

export default UserProfile;
