import React from "react";
import Default from "../layout/default.js";

export default function About() {
    return (
        <Default>
            <h1>About Us</h1>

            <h2>AI Spy: Using AI can determine your images.</h2>

            <p>When I was a child, I really loved the Where's Waldo and I Spy Books. We were given an image and a list of things to find. The goal was for us to find those images as quickly as possible. This is my second U of A Global Campus Course. AI Spy was born. I wanted to combine elements of what I learned in the Data Science Certificate with the Front End Development Course.</p>

            <p>We as users provide the images and see if AI Spy can determine the image that we provided. We are looking for unique images that will give the best answers. We will save the AI answers in a Firebase backend and share the results.</p>
        </Default>
    );
}