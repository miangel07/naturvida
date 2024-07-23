"use client";
import { Menubar } from "primereact/menubar";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const Menu = () => {
  const router = useRouter();
  const items = [
    { label: "Home", icon: <IoIosHome />, to: "/home" },
    { label: " Admin Clientes", icon: <FaRegUser />, to: "/clientes" },
    { label: "Admin Productos", icon: <FaBox />, to: "/productos" },
    { label: "Facturas", icon: <FaMoneyBillTrendUp />, to: "/facturas" },
    {
      label: "Productos Vendidos",
      icon: <CiShop />,
      to: "/productosVendidos",
    },
    { label: "Ventas", icon: <FaShopify />, to: "/ventas" },
    { label: "Salir", icon: "pi pi-sign-in", to: "/login" },
  ];
  const handleMenuClick = (to) => {
    router.push(to);
  };
  const menuItems = items.map((item) => ({
    label: item.label,
    icon: item.icon,
    command: () => handleMenuClick(item.to),
  }));
  return (
    <div>
      <Menubar
        model={menuItems}
        className="gap-3 flex justify-center items-center"
      />
    </div>
  );
};

export default Menu;
