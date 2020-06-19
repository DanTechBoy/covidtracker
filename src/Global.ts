import fetch from "node-fetch";
import "./Config";
import { progressmsg } from "./Config";

(async () => {
    console.log(progressmsg);
    const { cases } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { recovered } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { deaths } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { tests } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { critical } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());    

    console.log(`Confirmed Cases: ${cases.toLocaleString()}`);
    console.log(`Recovered: ${recovered.toLocaleString()}`);
    console.log(`Deaths: ${deaths.toLocaleString()}`);
    console.log(`Total Tests: ${tests.toLocaleString()}`);
    console.log(`Critical cases: ${critical.toLocaleString()}`);
})();