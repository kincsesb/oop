# 🐺 Game of Thrones – OOP Projekt TypeScript-ben

Ez a projekt célja az objektum-orientált programozás (OOP) és a valós szimulációs logika elsajátítása a Trónok harca világán keresztül.

A projekt során:

- több fázison átívelő történetet valósítasz meg,
- karakterekkel és házakkal dolgozol,
- dinamikus csatákat szimulálsz,
- feltételalapú döntéseket hajtasz végre egy script alapján.

---

## 📦 Előkészületek

### Telepítés

```bash
npm install
```

### Futtatás

```bash
npm run start
```

---

## 🔧 Elérhető fájlok

| Fájl                | Leírás                                           |
| ------------------- | ------------------------------------------------ |
| `characters.json`   | Több karakter részletes statisztikákkal          |
| `script.json`       | A teljes történeti forgatókönyv fázisokra bontva |
| `Character.ts`      | Absztrakt karakteralaposztály                    |
| `House.ts`          | Egy ház tagjait tárolja és kezeli                |
| `BattleService.ts`  | Egy az egy elleni harci logika                   |
| `ScenarioEngine.ts` | A `script.json` végrehajtásáért felel            |
| `index.ts`          | Indítófájl – itt fog történni minden vezérlés    |

---

## 🧠 OKTATÁSI FELADATOK

### 🎯 Általános cél

Valósítsd meg a `script.json` fájlban definiált forgatókönyvet OOP alapokon, karakterekkel, házakkal, szövetségekkel és csatákkal. A karakterek halála után a „Mások” seregét erősítik, a túlélők pedig végső csatába indulnak a világ megmentéséért.

---

## 🧩 1. MODUL – ALAPOK & ADATMODELL

**Cél**: A rendszer képes legyen betölteni a karaktereket, házakat építeni belőlük.

### Feladatok:

- Töltsd be a `characters.json` fájl adatait.
- Hozz létre típushelyes karakterpéldányokat a típusuk alapján (pl. Warrior, Mage, Archer, Wight).
- Oszd szét a karaktereket házak szerint.
- Alakíts ki működő házobjektumokat.

> 💡 Tipp: Használj `enum`-ot a karakter típusok (`CharacterType`) és szövetségnevek (`AllianceName`) kezelésére.

---

## ⚔️ 2. MODUL – SZÖVETSÉGEK ÉS SCRIPT ÉRTELMEZÉS

**Cél**: A `script.json` alapján dinamikus szövetségek létrehozása és események kezelése.

### Feladatok:

- Értsd meg a `script.json` szerkezetét.
- Implementálj egy `ScenarioEngine` osztályt, amely:

  - beolvassa a fájlt (`fs.readFileSync`)
  - iterál a `phases` tömbön
  - végrehajtja az `instructions` és `battle` objektumokat

- Hozz létre minden `action` típushoz külön kezelőt (pl. `formAlliance`, `changeAllegiance`, `spawnBoss`, stb.)
- Használj `enum`-okat az `ActionType`, `BattleType`, `CharacterType` stb. kezelésére.

---

## 🧨 3. MODUL – BELSŐ CSATÁK & ÁLLAPOTVÁLTÁS

**Cél**: Szövetségek közötti és belső harcok modellezése.

### Feladatok:

- Vezesd le a ház–ház vagy szövetség–szövetség harcokat.
- Alakíts ki egy csatalogikát (`BattleManager`), amely többszereplős harcokat kezel.
- Gondoskodj róla, hogy a halott karakterek automatikusan „Wight”-ként térjenek vissza.

---

## ❄️ 4. MODUL – A MÁSIK VILÁG: WHITE WALKER KIHÍVÁS

**Cél**: Felkészülés és harc a White Walkers ellen.

### Feladatok:

- Töltsd fel a „White Walkers” szövetséget halott karakterekkel.
- Készíts `Hero` státuszt és különleges képességeket (pl. `summonDragon`, `resurrectAll`).
- Vezesd be a `bossFight` típusú csatákat egyedi szabályokkal.

---

## 👑 5. MODUL – ZÁRÁS & STATISZTIKA

**Cél**: A történet lezárása, eredmények exportálása.

### Feladatok:

- Feltételalapú díjazás karakterekre (`condition` értékelése).
- Végső állapot mentése (`saveFinalState`).
- Statisztika exportálása (`exportStatistics`).
- Narratív lezárás (`log`, `mourn`, `declareVictory`).

---

## 🛡️ EXTRA KIHÍVÁSOK

- Készíts `ConditionEvaluator` osztályt komplex logikai kifejezésekhez.
- Írj `EventLogger`-t, amely naplózza az összes eseményt.
- CLI vagy webes felület a játékfázisok vezérlésére.
- Cheat mód, karakter szerkesztés, vagy különálló „editor” szkript létrehozása.

---

## 🧠 OOP ELVEK, AMIKET GYAKOROLSZ

| OOP elv           | Gyakorlati példa                                                       |
| ----------------- | ---------------------------------------------------------------------- |
| **Encapsulation** | `Character`, `House`, `Alliance` belső állapotainak védelme            |
| **Inheritance**   | `Warrior`, `Mage`, `Wight` öröklik az absztrakt `Character` osztályt   |
| **Polymorphism**  | `attack()` metódus eltérően viselkedik típustól függően                |
| **Abstraction**   | `Character` mint absztrakt osztály, amely előírja az alap viselkedést  |
| **Enum kezelés**  | `ActionType`, `BattleType`, `CharacterType` stb. típusbiztos logikához |

---

## 📌 Javasolt `enum`-ok

```ts
export enum CharacterType {
  Warrior = 'warrior',
  Mage = 'mage',
  Archer = 'archer',
  Wight = 'wight'
}

export enum ActionType {
  FormAlliance = 'formAlliance',
  ChangeAllegiance = 'changeAllegiance',
  PromoteToHero = 'promoteToHero',
  AwardTitle = 'awardTitle',
  SpawnBoss = 'spawnBoss',
  Log = 'log',
  SaveFinalState = 'saveFinalState',
  ...
}

export enum BattleType {
  AllianceVsAlliance = 'allianceVsAlliance',
  MultiAlliance = 'multiAllianceBattle',
  BossFight = 'bossFight'
}
```
