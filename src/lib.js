import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import DB_CONFIG from "./config";

const database = firebase.initializeApp(DB_CONFIG).database();
const postToDB = (endpoint, data) => {
  return database.ref(endpoint).set(data);
};

const useFetch = (code, applicant, options) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const url = applicant ? `applicants${code}` : `students/${code}`;

  useEffect(
    () => {
      const doFetch = async () => {
        setLoading(true);
        try {
          if (applicant) {
            //if appllicant fetch firebase
            const res = await database.ref(url);
            setResponse(res.val());
            setStatus("200");
          } else {
            const res = await fetch(url, options);
            const json = await res.json();
            setStatus(res.status);
            setResponse(json);
          }
        } catch (e) {
          console.log(e);
          setError(e);
        } finally {
          setLoading(false);
        }
      };
      doFetch();
    },
    [url, options, applicant]
  );
  return { response, error, loading, status };
};

export { database, postToDB, useFetch };
