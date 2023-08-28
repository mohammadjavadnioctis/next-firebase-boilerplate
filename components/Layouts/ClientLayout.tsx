import React, { ReactElement } from "react";
import Header from "../Header/Header";
import WhatsAppIcon from "@/assets/images/icons/whatsapp-logo.svg";

const ClientLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      client layout
      {children}
    </div>
  );
};

ClientLayout.displayName = "ClientLayout";

export default ClientLayout;
