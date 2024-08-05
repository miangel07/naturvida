"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const proteccionRuta = (Value) => {
  const Proteccion = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return null;
    }

    return <Value {...props} />;
  };
  return Proteccion;
};

export default proteccionRuta;
