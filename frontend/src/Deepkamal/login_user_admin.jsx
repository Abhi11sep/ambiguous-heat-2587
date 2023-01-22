import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Loginadmin from "./loginadmin";
import Loginuser from "./loginuser";

const Login_user_admin = () => {
  return (
    <>
      <Navbar />
      <Tabs style={{ width: "340px", margin: "auto" }} pt={"150px"}>
        <TabList style={{ gap: "180px" }}>
          <Tab>Admin</Tab>
          <Tab>User</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Loginadmin />
          </TabPanel>

          <TabPanel>
            <Loginuser />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
};

export default Login_user_admin;
