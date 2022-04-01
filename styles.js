// All STYLES go here!

import { writable } from "svelte/store";

// global values
const margin = 10;
const pad = margin / 2;

export const styles = writable({
    login: {
        dev: true, // TURN THIS TO FALSE FOR PRODUCTION
        hashpw: "MWNvcjE1MTQ="
    },

    // -- HELPFUL FUNCTIONS AND STYLES --

    readtime: function (words) {
        let wpm = 200; //assuming words per minute
        return Math.round(words / wpm) + "m";
    },

    // difficulty styles (0-2)
    difficulty: ["text-green-400", "text-yellow-400", "text-pink-500"],
    diffPhrase: ["Easy", "Medium", "Advanced"],

    // -- GLOBAL PAGE STYLES--

    container: "container mx-auto text-xl mt-" + margin,
    h1: "text-4xl lg:text-6xl font-serif font-bold focus:outline-none",
    sub:
        "flex space-x-4 lg:space-x-6 text-slate-400 text-sm lg:text-base uppercase tracking-widest border-t-2 border-slate-800 mb-" +
        pad +
        " md:mb-" +
        margin +
        " mt-" +
        pad +
        " py-" +
        pad,

    h2:
        "text-rose-500 uppercase font-bold tracking-widest pt-" +
        margin +
        " mb-" +
        pad +
        " md:mb-" +
        margin,
    p: "text-base md:text-lg mb-" + pad + " md:mb-" + margin,
    strong: "font-extrabold underline decoration-stone-600 decoration-4",
    quote:
        "font-serif text-lg md:text-2xl border-y-2 border-rose-500 py-" +
        pad +
        " mb-" +
        margin,
    a_content: "px-4 w-full md:w-2/3 lg:w-1/2 mx-auto ",
    a_side: "md:basis-1/4",
    b_content: "w-full md:w-2/3 mx-auto",
    b_side: "md:basis-1/6",
    c_section: "flex flex-col px-4 md:flex-row md:space-x-8",
    c_side: "md:basis-1/2",
    image: "w-full mb-" + pad + " md:mb-" + margin
});
