import Head from 'next/head'
import ItemLinks from "../components/ItemLinks"
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../components/apollo";
import Countries from "../components/Countries"
export default function Home({countries}) {
  return (
    <div className={styles.grid}>
    {/* {countries.map((country) => (
      <div key={country.code} className={styles.card}>
        <h3>{country.name}</h3>
        <p>
          {country.code} - {country.emoji}
        </p>
      </div>
    ))} */}
    <Countries/>
  </div>
  )
}
// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//  };
// }
// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//   };
// }
