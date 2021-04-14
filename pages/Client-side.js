import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/Client-only";
import Countries from "../components/Countries";

export default function ClientSide() {
  return (
    <div>
        <ClientOnly>
          <Countries />
        </ClientOnly>
    </div>
  );
}