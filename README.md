Természetesen! Itt a kiegészített `README.md`, amely pontosabban leírja, hogy **hogyan kell értelmezni és végrehajtani a `script.json` forgatókönyvet**, milyen **OOP elveket** gyakorolnak közben, valamint milyen **struktúrákat** és **típusokat** érdemes bevezetni – pl. `enum`-okat is.

---

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

Valósítsd meg a scriptben definiált forgatókönyvet OOP alapokon, karakterekkel, házakkal, szövetségekkel és csatákkal. A karakterek halála után a „Mások” seregét erősítik, a túlélők pedig végső csatába indulnak a világ megmentéséért.

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

  - beolvassa a fájlt (használj `fs.readFileSync`)
  - iterál a `phases` tömbön
  - hajtja végre az `instructions` és `battle` objektumokat

- Minden `action` típushoz hozz létre saját kezelőt (pl. `formAlliance`, `changeAllegiance`, `spawnBoss`, `awardTitle`, stb.)
- Használj `enum`-ot az `ActionType` és `BattleType` kezelésére.

📁 Ebben a fázisban a cél a dinamikus állapotkezelés és az adatvezérelt működés kialakítása.

---

## 🧨 3. MODUL – BELSŐ CSATÁK & ÁLLAPOTVÁLTÁS

**Cél**: Szövetségek közötti és belső harcok modellezése.

### Feladatok:

- Vezesd le a ház–ház vagy szövetség–szövetség harcokat.
- Alakíts ki egy csatalogikát, amely többszereplős harcokat kezel (`BattleManager` javasolt).
- Halott karakterek automatikusan „Wight”-ként térnek vissza (öröklés és típusváltás).
- Implementálj csata típusokat külön enum-ként (`BattleType`), és ezekhez külön logikát.

📁 Ebben a fázisban gyakorolhatók a következők: öröklés, polimorfizmus, típuskezelés.

---

## ❄️ 4. MODUL – A MÁSIK VILÁG: WHITE WALKER KIHÍVÁS

**Cél**: Felkészülés és harc a White Walkers ellen.

### Feladatok:

- Töltsd fel a „White Walkers” szövetséget halott karakterekkel.
- Készíts `Hero` státuszt és különleges képességeket (pl. `summonDragon`, `resurrectAll`).
- Készíts buff/logika kezelőt szövetségek számára (`morale`, `areaDamageChance`, stb.)
- Alakítsd ki a `bossFight` típusú csatákat, külön szabályokkal.

📁 Ez a fázis erősen komplex: állapotátmenetek, különleges szabályrendszer és szövetségi képességek kezelését igényli.

---

## 👑 5. MODUL – ZÁRÁS & STATISZTIKA

**Cél**: A történet lezárása, eredmények exportálása.

### Feladatok:

- Feltételalapú díjazás (`condition` értékelése karakterekre).
- Végső állapot mentése JSON-be (`saveFinalState`).
- Statisztikák exportálása CSV-be (`exportStatistics`).
- Narratív lezárás (`log`, `declareVictory`, `mourn`, `celebrate`).

📁 Ebben a fázisban a fájlműveletek, tömbkezelés, export és egyszerű fájlszerializáció gyakorolható.

---

## 🛡️ EXTRA KIHÍVÁSOK

- Írj `ConditionEvaluator` osztályt, amely képes egyéni string feltételeket kiértékelni karakterekre.
- Készíts CLI felületet a `ScenarioEngine`-hez.
- Időzített animált szimuláció (`setTimeout`, körökben futtatva).
- Készíts `EventLog` osztályt, amely minden eseményt naplóz.
- Építs UI-t, amely real-time mutatja a csataállapotot.

---

## 🧠 OOP ELVEK, AMIKET GYAKOROLSZ

| Elv               | Gyakorlati példa                                            |
| ----------------- | ----------------------------------------------------------- |
| **Encapsulation** | `Character`, `House`, `Alliance` belső állapotai            |
| **Inheritance**   | `Warrior`, `Mage`, `Wight` öröklik a `Character`-t          |
| **Polymorphism**  | `attack()` metódus típustól függő viselkedése               |
| **Abstraction**   | `ScenarioEngine`, `BattleManager` interfészként használva   |
| **Enum kezelés**  | `ActionType`, `BattleType`, `CharacterType`, `AllianceName` |

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
  ...
}

export enum BattleType {
  AllianceVsAlliance = 'allianceVsAlliance',
  MultiAlliance = 'multiAllianceBattle',
  BossFight = 'bossFight'
}
```

---

🧊🔥 **Készülj fel a télre, a végső háborúra – és az OOP gondolkodás elsajátítására.**
