import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const mount = useRef<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (!mount.current) router.push("/random");
    else mount.current = false;
  }, [mount]);
  return;
}
