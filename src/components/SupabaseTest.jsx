import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// const supabase = createClient(
//   "https://<project>.supabase.co",
//   "<your-anon-key>"
// );

// const anon_key =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";

const anon_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkamp2cmRycHNsdHZic3J3bnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzc4NTcsImV4cCI6MjAwNDkxMzg1N30.pYtaLJycw4RIFAgPUDdOn1FkW_D6kOoV7hVKC5NfUq4";
const url = "https://qdjjvrdrpsltvbsrwnsf.supabase.co";
const supabase = createClient(`${url}`, `${anon_key}`);
export default function SupabaseTest() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const { data } = await supabase.from("student").select();
      const counter = JSON.stringify(data);
      setCountries(counter);
      console.log("countries" + data);
      console.log(counter);
      console.log(`countries${countries}`);
      // console.log(`data ${data}`);
    }
    getCountries();
  }, [countries]);

  return (
    <ul>
      <li>countries</li>
      {countries ||
        countries.countries.map((country) => (
          <>
            <h2 key={country.name}>{country}</h2>
            <h2 key={country.name}>hjashjjd</h2>
          </>
        ))}
      <h3>kahekkaKLEJKJE</h3>
    </ul>
  );
}
