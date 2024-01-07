"use client";
import Image from "next/image";
import Logo from "@/../public/icons.png"
import Headers from "./headers";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-blue-100 h-screen">
      <Headers isLoginPages />
      <div className="main flex">
        <div className="left w-4/6 flex justify-center p-20">
          <Image src={Logo} alt="Alien Campaign" className="left-bg" />
        </div>
        <div className="right flex justify-center items-center w-3/12 h-[90vh] pb-40">
          <div className="right-content w-full p-5">
            <form className="mt-5">
              <div className="mb-5">
                <input type="email" name="email" id="email" placeholder="Username" autoComplete="email" className="mt-1 pl-2 pr-2 focus:ring-sky-500 h-10 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mb-5 ">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="mt-1 h-10 focus:ring-sky-500  pl-2 pr-2 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer eyes"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash/> : <FaEye />}
                  </div>
                </div>
              </div>
              <div className="additional flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="recovery">
                  <Link href="#" className="text-sm font-medium text-sky-600 hover:text-sky-500">
                    Recovery Password
                  </Link>
                </div>
              </div>
              <div className="mb-5">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Sign in
                </button>
              </div>
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <span className="border-b border-gray-300 w-1/5 lg:w-1/4"></span>
                  <span className="text-xs text-center text-gray-500 uppercase">or login with</span>
                  <span className="border-b border-gray-300 w-1/5 lg:w-1/4"></span>
                </div>
              </div>
              <div className="mb-5">
                <button type="submit" className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <FaGoogle /> Login With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}