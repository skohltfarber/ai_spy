import React, { useState, useEffect } from "react";
import Default from "../layout/default.js";
import firebase from "../firebase/config";

function useGuesses() {
    const [guesees, setGuesses] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('guess')
            .onSnapshot((snapshot) => {
                const newGuesses = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGuesses(newGuesses);
            });

        return () => unsubscribe();
    }, []);

    return guesees;
}

export default function History() {

    const guesses = useGuesses();

    return (
        <Default>
            <h1>History</h1>

            <p>Here is the last 25 AI Spies for random people.</p>
        </Default>
    );
}