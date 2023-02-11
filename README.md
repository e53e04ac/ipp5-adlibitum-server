# ipp5-adlibitum-server

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-server
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumServer } from 'e53e04ac/ipp5-adlibitum-server';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-adlibitum-server"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["express"]);
    B_2(["e53e04ac/hold"]);
    B_3(["joi"]);
    B_4(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/express"]);
    B_6(["@types/jsonwebtoken"]);
    B_7(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_3 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_4 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_5 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_7 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-adlibitum-server"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:crypto"
    D0(["createHash"]);
  end;
  subgraph "express"
    D1(["raw"]);
    D2(["Router"]);
    D8(["RequestHandler"]);
  end;
  subgraph "joi"
    D3(["default"]);
  end;
  subgraph "jsonwebtoken"
    D4(["default"]);
  end;
  subgraph "event-emitter"
    D5(["EventEmitter"]);
  end;
  subgraph "hold"
    D6(["hold"]);
    D7(["unwrap"]);
    D9(["Get"]);
    D10(["ValueOrGet"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D2 --import--> C1;
  D8 --import--> C1;
  D3 --import--> C1;
  D5 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
~~~~~
