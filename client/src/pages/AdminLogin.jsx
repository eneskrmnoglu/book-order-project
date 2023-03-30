import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../redux/admincontrol";
import Swal from "sweetalert2";

function AdminLogin() {
  const { adminControl } = useSelector((state) => state.adminControl);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const girisHandler = () => {
    if (password == 123456) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Admin girişi başarılı.",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(login());
    } else {
      alert("Admin şifresini yanlış girdiniz.");
    }
  };

  return (
    <div>
      {!adminControl && (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://i.hizliresim.com/gjlxxun.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Admin Paneline Erişim İçin Şifreyi Giriniz
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={girisHandler}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  GİRİŞ YAP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {adminControl && (
        <div>
          <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
            ADMİN PANELİ
          </h3>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mt-5">
                <Link
                  type="button"
                  to="/admin/listbook"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                >
                  KİTAPLARI LİSTELE
                </Link>
              </div>
              <div className="mt-5">
                <Link
                  type="button"
                  to="/admin/addbook"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                >
                  YENİ KİTAP EKLE
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          >
            ÇIKIŞ YAP
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
