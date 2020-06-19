import fetch from "node-fetch";
import { progressmsg } from "./Config";

(async () => {
    console.log(progressmsg);
    const { todayCases } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { todayRecovered } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());
    const { todayDeaths } = await fetch(`https://disease.sh/v2/all`).then(response => response.json());

    console.log(`New cases today: ${todayCases.toLocaleString()}`)
    console.log(`Recovered today: ${todayRecovered}`)
    console.log(`Deaths today: ${todayDeaths}`)
    
})();