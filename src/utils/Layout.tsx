import React, {  ReactNode } from 'react';
 

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-slate-100">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">
              {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;