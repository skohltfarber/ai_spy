import React, { useState, useEffect } from "react";
import Default from "../layout/default.js";
import firebase from "../firebase/config";

function useGuesses() {
    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('guess')
            .orderBy("createdAt", "desc")
            .limit(10)
            .onSnapshot((snapshot) => {
                const newGuesses = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGuesses(newGuesses);
            });

        return () => unsubscribe();
    }, []);

    return guesses;
}

export default function History() {



    const guesses = useGuesses();

    return (
        <Default>
            <h1>History</h1>

            <p>Here are AI Spies last 10 answers.</p>

            <div className="container">
                <div className="row">
                    <div class="col-2 block-example border border-dark">
                        Best Guess
                    </div>
                    <div class="col-2 block-example border border-dark">
                        Confidence level
                    </div>
                    <div class="col-2 block-example border border-dark">
                        Middle Guess
                     </div>
                    <div class="col-2 block-example border border-dark">
                        Confidence level
                    </div>
                    <div class="col-2 block-example border border-dark">
                        Worst Guess
                    </div>
                    <div class="col-2 block-example border border-dark">
                        Confidence level
                    </div>
                </div>
                {guesses.map((guess) => (
                    <div key={guess.id} className="row">

                        <div class="col-2 block-example border border-dark">
                            {guess.guess_1}
                        </div>
                        <div class="col-2 block-example border border-dark">
                            {(guess.probability_1 * 100).toFixed(2)}%
                        </div>
                        <div class="col-2 block-example border border-dark">
                            {guess.guess_2}
                        </div>
                        <div class="col-2 block-example border border-dark">
                            {(guess.probability_2 * 100).toFixed(2)}%
                        </div>
                        <div class="col-2 block-example border border-dark">
                            {guess.guess_3}
                        </div>
                        <div class="col-2 block-example border border-dark">
                            {(guess.probability_3 * 100).toFixed(2)}%
                        </div>
                    </div>
                ))}

            </div>

        </Default>
    );
}