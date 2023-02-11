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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_4 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_5 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_7 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:crypto";
    B_0_0(["createHash"]);
  end;
  subgraph "express";
    B_1_0(["raw"]);
    B_1_1(["Router"]);
  end;
  subgraph "joi";
    B_2_0(["default"]);
  end;
  subgraph "jsonwebtoken";
    B_3_0(["default"]);
  end;
  subgraph "event-emitter";
    B_4_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_5_0(["hold"]);
    B_5_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_5_0 ----> A;
  B_5_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "express";
    B_0_0(["Router"]);
    B_0_1(["RequestHandler"]);
  end;
  subgraph "joi";
    B_1_0(["default"]);
  end;
  subgraph "event-emitter";
    B_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
    B_3_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
~~~~~
