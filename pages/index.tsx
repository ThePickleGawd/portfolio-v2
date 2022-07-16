import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Desktop from "./index_desktop";
import Mobile from "./index_mobile";

const Home: NextPage = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default Home;
