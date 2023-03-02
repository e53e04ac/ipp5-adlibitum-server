# ipp5-adlibitum-server

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-server
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumServer } from 'ipp5-adlibitum-server';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["express"]);
    B_2(["hold"]);
    B_3(["joi"]);
    B_4(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/express"]);
    B_6(["@types/jsonwebtoken"]);
    B_7(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n9ac7c25f35b38e0c7d2823ed147a773578ee9a58"]);
    C_2(["e53e04ac/hold\n418996396af94d436211958d5e6cc4acb5aa089d"]);
  end;
  subgraph "npmjs";
    C_1(["express\n4.18.2"]);
    C_3(["joi\n17.8.3"]);
    C_4(["jsonwebtoken\n9.0.0"]);
    C_5(["@types/express\n4.17.17"]);
    C_6(["@types/jsonwebtoken\n9.0.1"]);
    C_7(["@types/node\n18.14.4"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/9ac7c25f35b38e0c7d2823ed147a773578ee9a58";
  click C_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_2 "https://github.com/e53e04ac/hold/tree/418996396af94d436211958d5e6cc4acb5aa089d";
  click C_3 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_4 "https://www.npmjs.com/package/jsonwebtoken/v/9.0.0";
  click C_5 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_6 "https://www.npmjs.com/package/@types/jsonwebtoken/v/9.0.1";
  click C_7 "https://www.npmjs.com/package/@types/node/v/18.14.4";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-server";
    E_0(["namespace Ipp5AdlibitumServer"]);
    E_1(["type Ipp5AdlibitumServer"]);
    E_2(["const Ipp5AdlibitumServer"]);
  end;
  M["index.d.ts"]
  subgraph "express";
    I_0_0(["Router"]);
    I_0_1(["RequestHandler"]);
  end;
  subgraph "joi";
    I_1_0(["default"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-server";
    E_0(["Ipp5AdlibitumServer"]);
  end;
  M["index.mjs"]
  subgraph "node:crypto";
    I_0_0(["createHash"]);
  end;
  subgraph "express";
    I_1_0(["raw"]);
    I_1_1(["Router"]);
  end;
  subgraph "joi";
    I_2_0(["default"]);
  end;
  subgraph "jsonwebtoken";
    I_3_0(["default"]);
  end;
  subgraph "event-emitter";
    I_4_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_5_0(["hold"]);
    I_5_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_5_1;
  E_0 ----> M;
~~~~~
