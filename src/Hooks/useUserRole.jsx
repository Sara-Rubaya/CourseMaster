import { useEffect, useState } from "react";
import axios from "axios";

const useUserRole = (email) => {
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!email) return;

    const fetchRole = async () => {
      setRoleLoading(true);
      try {
        const token = localStorage.getItem("access-token");
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/email/${encodeURIComponent(email)}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setRole(data.role || "student");
      } catch (err) {
        console.error("Failed to fetch user role:", err.response?.data || err.message);
        setRole("student");
      } finally {
        setRoleLoading(false);
      }
    };

    fetchRole();
  }, [email]);

  return { role, roleLoading };
};

export default useUserRole;
