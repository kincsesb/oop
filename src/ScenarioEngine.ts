interface ScriptPhase {
  name: string;
  instructions?: any[];
  battle?: any;
}

export class ScenarioEngine {
  private phases: ScriptPhase[] = [];

  constructor(private scriptPath: string) {}

  public loadScript() {
    // TODO: Olvasd be a script.json fájlt és állítsd be this.phases értékét
  }

  public run() {
    // TODO: Iterálj végig a fázisokon és hajtsd végre az utasításokat vagy csatákat
  }

  private executeInstructions(instructions: any[]) {
    instructions.forEach((instruction) => {
      // TODO: Kezeld az action típusától függően az instrukciókat (pl. formAlliance, changeAllegiance stb.)
    });
  }

  private executeBattle(battle: any) {
    // TODO: Harc logika battle.type alapján (pl. allianceVsAlliance, bossFight)
  }
}
