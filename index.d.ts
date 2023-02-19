/*!
    @e53e04ac/ipp5-adlibitum-server/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Router as ExpressRouter } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { default as Joi } from 'joi';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5AdlibitumServer {

    type CredentialParams = {
        readonly token: string;
    };

    type TokenPayload = {
        readonly iss: string;
        readonly sub?: undefined | string;
        readonly aud: string;
        readonly exp: number;
        readonly nbf: number;
        readonly iat: number;
        readonly jti: string;
        readonly tenantId: string;
        readonly clientId: string;
        readonly requestHash: string;
    };

    type HttpRequestData = {
        readonly method: string;
        readonly url: string;
        readonly headers: Record<string, undefined | string | string[]>;
        readonly body: Buffer;
    };

    type RequestHandler<
        T extends Record<string, unknown>,
        Body
    > = ExpressRequestHandler<unknown, unknown, Body, unknown, Record<string, unknown> & T>;

    type Options = {
        readonly clientUrn: ValueOrGet<string>;
        readonly serverUrn: ValueOrGet<string>;
        readonly clientPublicKey: ValueOrGet<string>;
        readonly httpRequestBodyMaxSize: ValueOrGet<number>;
        readonly eval: {
            (f: string): Promise<unknown>;
        };
        readonly u: {
            (): Promise<unknown>;
        };
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly base64urlSchema: Get<Joi.StringSchema>;
        readonly jwtSchema: Get<Joi.StringSchema>;
        readonly urnSchema: Get<Joi.StringSchema>;
        readonly credentialParamsSchema: Get<Joi.ObjectSchema<CredentialParams>>;
        readonly patchParamsSchema: Get<Joi.ObjectSchema<{
            readonly f: string;
            readonly x: unknown;
        }>>;
        readonly tryPromise: {
            <T>(promise: Promise<T>): Promise<{
                readonly error: null | Error;
                readonly value: null | T;
            }>;
        };
        readonly parseToken: {
            (string: string): Promise<TokenPayload>;
        };
        readonly verifyCredentialHandler: Get<RequestHandler<Partial<{
            tokenPayload: TokenPayload;
        }>, Buffer>>;
        readonly requestBodyHandler: Get<RequestHandler<Record<string, unknown>, Buffer>>;
        readonly verifyRequestHashHandler: Get<RequestHandler<{
            readonly tokenPayload: TokenPayload;
        }, Buffer>>;
        readonly patchHandler: Get<RequestHandler<Record<string, unknown>, Buffer>>;
        readonly createRequestHash: {
            (request: HttpRequestData): Promise<string>;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5AdlibitumServer: Get<_Self>;
        readonly expressRouter: Get<ExpressRouter>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5AdlibitumServer = Ipp5AdlibitumServer.Self;

export declare const Ipp5AdlibitumServer: Ipp5AdlibitumServer.ConstructorWithCompanion;
