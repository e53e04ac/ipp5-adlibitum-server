# ipp5-adlibitum-server

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-server
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumServer } from 'e53e04ac/ipp5-adlibitum-server';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
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
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/19614365368936f6974a633d25a1109a3465a99d";
  click B_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_3 "https://www.npmjs.com/package/joi/v/17.8.1";
  click B_4 "https://www.npmjs.com/package/jsonwebtoken/v/9.0.0";
  click B_5 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.com/package/@types/jsonwebtoken/v/9.0.1";
  click B_7 "https://www.npmjs.com/package/@types/node/v/18.14.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-server";
    E_0(["Ipp5AdlibitumServer"]);
  end;
  M(["index.mjs"])
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-server";
    E_0(["namespace Ipp5AdlibitumServer"]);
    E_1(["type Ipp5AdlibitumServer"]);
    E_2(["const Ipp5AdlibitumServer"]);
  end;
  M(["index.d.ts"])
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
