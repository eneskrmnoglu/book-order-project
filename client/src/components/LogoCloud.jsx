import React from "react";

function LogoCloud() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="data:image/png;base64,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"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://turkyaybir.org.tr/wp-content/uploads/2016/01/yapi-kredi-yayinlari.jpg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://www.gazeteduvar.com.tr/2017/12/2611.jpg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Is_bankasi_logo.png"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://www.jedbang.com/themes/jedbang/assets/images/logo/logo_symbol.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
