# ipp5-adlibitum-server

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-server
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumServer } from 'e53e04ac/ipp5-adlibitum-server';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-adlibitum-server"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["express"]);
  B2(["e53e04ac/hold"]);
  B3(["joi"]);
  B4(["jsonwebtoken"]);
  C0(["@types/express"]);
  C1(["@types/jsonwebtoken"]);
  C2(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B2 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-adlibitum-server";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
  end;
~~~~~
