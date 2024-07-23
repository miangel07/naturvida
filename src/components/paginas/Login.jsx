"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/store/login";
import { useRouter } from "next/navigation";

const Login = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const useMutationLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("", data.status);

      if (data.status !== 200) {
        setErrorMessage(data.message);
      }
      if (data.status === 200) {
        localStorage.setItem("token", data.token);
        router.push("/home");
      }
    },
    onError: (error) => {
      console.log("Error:");
      setErrorMessage(error.message);
    },
  });
  const errorLogin = errorMessage ? (
    <p className="text-red-400">{errorMessage}</p>
  ) : (
    ""
  );

  const onSubmit = async (data) => {
    useMutationLogin.mutate(data);
  };
  const error = errors.usuario ? (
    <p className="text-red-400">{errors.usuario.message}</p>
  ) : (
    ""
  );
  return (
    <>
      <div className="w-full h-screen   flex flex-col ">
        <div className="w-full justify-start ">
          <div className="bg-[url('../../public/Naturvida.jpg')] mt-6 bg-no-repeat h-[89px] flex "></div>
        </div>
        <section className=" w-full h-full justify-center items-center flex">
          <div className=" md:w-[447px] w-[400px] h-[520px] gap-5 flex flex-col items-center border-solid border-2 rounded-lg shadow-2xl">
            <div className="w-full justify-center flex flex-col items-center mt-5 ">
              <h1>Login </h1>
            </div>
            <div className="pl-3 w-full justify-center items-center flex ">
              <p className="pl-3 pr-3">
                Inicia sesión para acceder a nuestros productos naturales.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col  md:w-[398px] justify-between w-[350px] h-[350px] ">
                {errorLogin}
                <label htmlFor="">Usuario:</label>

                <input
                  className=" h-[39px] rounded-lg pl-3 border-2 outline-none "
                  type="text"
                  placeholder="Ingrese su Nombre de usuario"
                  {...register("usuario", {
                    required: {
                      value: true,
                      message: `el usuario es obligatorio`,
                    },
                  })}
                />
                {error}

                <label htmlFor="">Contraseña:</label>
                <input
                  className=" h-[39px] rounded-lg pl-3 border-2 outline-none "
                  type="text"
                  placeholder="Ingrese su contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: `La contraseña es obligatorio`,
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
                <div className="w-full  flex flex-row  gap-3 justify-between">
                  <p className="inline-block border-b-2 border-slate-500 cursor-pointer">
                    ¿Olvidaste tu contraseña?
                  </p>
                  <p className="inline-block border-b-2 border-slate-500 cursor-pointer">
                    ¿Registrarse?
                  </p>
                </div>
                <div className="w-full  justify-center flex">
                  <button
                    className=" h-10 w-20 bg-blue-400 rounded-lg"
                    type="submit"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
