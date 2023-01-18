import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Loginadmin from "./loginadmin";
import Loginuser from "./loginuser";

const Login_user_admin = () => {
  return (
    <Tabs style={{width:"340px",margin:"auto"}}>
      <TabList style={{gap:"180px"}}>
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
  );
};

export default Login_user_admin;
