import React from "react";
import Flex from "./Flex";

export default function Footer() {
  return (
    <Flex
      alignItems="center"
      background="blue"
      bottom={0}
      className="Footer-div"
      display="flex"
      height={60}
      justifyContent="center"
      left={0}
      padding={20}
      position="fixed"
      width="100%"
    >
      <p>copyright 2020</p>
    </Flex>
  );
}
