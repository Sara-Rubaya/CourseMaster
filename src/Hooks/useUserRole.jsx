// src/Hooks/useUserRole.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const useUserRole = (email) => {
  const [role, setRole] = useState(null);
  const [loadingRole, setLoadingRole] = useState(true);

  useEffect(() => {
    if (!email) return;

    const fetchRole = async () => {
      setLoadingRole(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/email/${encodeURIComponent(email)}`
        );
        setRole(data.role); // assume backend returns { role: "admin" / "customer" }
      } catch (err) {
        console.error("Failed to fetch user role:", err);
        setRole("customer"); // default to student/customer
      } finally {
        setLoadingRole(false);
      }
    };

    fetchRole();
  }, [email]);

  return { role, loadingRole };
};

export default useUserRole;
