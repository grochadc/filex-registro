import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import DB_CONFIG from "./config";

const database = firebase.initializeApp(DB_CONFIG).database();
const postToDB = (endpoint, data) => {
  return database.ref(endpoint).set(data);
};

const useFetch = (url, options) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(
    () => {
      const doFetch = async () => {
        setLoading(true);
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setStatus(res.status);
          setResponse(json);
        } catch (e) {
          console.log(e);
          setError(e);
        } finally {
          setLoading(false);
        }
      };
      doFetch();
    },
    [url, options]
  );
  return { response, error, loading, status };
};

export { database, postToDB, useFetch };
