"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Config_1 = require("./Config");
(async () => {
    console.log(Config_1.progressmsg);
    const { todayCases } = await node_fetch_1.default(`https://disease.sh/v2/all`).then(response => response.json());
    const { todayRecovered } = await node_fetch_1.default(`https://disease.sh/v2/all`).then(response => response.json());
    const { todayDeaths } = await node_fetch_1.default(`https://disease.sh/v2/all`).then(response => response.json());
    console.log(`New cases today: ${todayCases.toLocaleString()}`);
    console.log(`Recovered today: ${todayRecovered}`);
    console.log(`Deaths today: ${todayDeaths}`);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVG9kYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBK0I7QUFDL0IscUNBQXVDO0FBRXZDLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFXLENBQUMsQ0FBQztJQUN6QixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsTUFBTSxvQkFBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEcsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLE1BQU0sb0JBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLG9CQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVuRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixVQUFVLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsV0FBVyxFQUFFLENBQUMsQ0FBQTtBQUUvQyxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgeyBwcm9ncmVzc21zZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2dyZXNzbXNnKTtcbiAgICBjb25zdCB7IHRvZGF5Q2FzZXMgfSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIGNvbnN0IHsgdG9kYXlSZWNvdmVyZWQgfSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIGNvbnN0IHsgdG9kYXlEZWF0aHMgfSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgY29uc29sZS5sb2coYE5ldyBjYXNlcyB0b2RheTogJHt0b2RheUNhc2VzLnRvTG9jYWxlU3RyaW5nKCl9YClcbiAgICBjb25zb2xlLmxvZyhgUmVjb3ZlcmVkIHRvZGF5OiAke3RvZGF5UmVjb3ZlcmVkfWApXG4gICAgY29uc29sZS5sb2coYERlYXRocyB0b2RheTogJHt0b2RheURlYXRoc31gKVxuICAgIFxufSkoKTsiXX0=