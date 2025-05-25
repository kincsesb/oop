import { ScenarioEngine } from "./ScenarioEngine";

const engine = new ScenarioEngine('./src/script.json');
engine.loadScript();
engine.run();
