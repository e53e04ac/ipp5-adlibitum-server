/*!
    @e53e04ac/ipp5-adlibitum-server/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { createHash as cryptoCreateHash } from 'node:crypto';

import { raw as expressRaw } from 'express';
import { Router as ExpressRouter } from 'express';
import { default as Joi } from 'joi';
import { default as jsonwebtoken } from 'jsonwebtoken';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

const { verify: jsonwebtokenVerify } = jsonwebtoken;

/** @type {import('.').Ipp5AdlibitumServer.Constructor} */
const constructor = ((options) => {

    const _options = ({
        clientUrn: hold(() => {
            return unwrap(options.clientUrn);
        }),
        serverUrn: hold(() => {
            return unwrap(options.serverUrn);
        }),
        clientPublicKey: hold(() => {
            return unwrap(options.clientPublicKey);
        }),
        httpRequestBodyMaxSize: hold(() => {
            return unwrap(options.httpRequestBodyMaxSize);
        }),
        eval: options.eval,
        u: options.u,
    });

    /** @type {import('.').Ipp5AdlibitumServer._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        base64urlSchema: hold(() => {
            return Joi.string().regex(/^[0-9A-Za-z\-_]*$/);
        }),
        jwtSchema: hold(() => {
            return Joi.string().regex(/^[0-9A-Za-z\-_]+\.[0-9A-Za-z\-_]+\.[0-9A-Za-z\-_]+$/);
        }),
        urnSchema: hold(() => {
            return Joi.string().regex(/^urn(:[0-9A-Za-z\-_]+)*$/);
        }),
        credentialParamsSchema: hold(() => {
            return Joi.object().keys({
                token: _self.jwtSchema().max(1500).required(),
            });
        }),
        patchParamsSchema: hold(() => {
            return Joi.object().unknown(true).keys({
                f: Joi.string().required(),
                x: Joi.any().required(),
            });
        }),
        tryPromise: (async (promise) => {
            return await promise.then((value) => {
                return { error: null, value };
            }, (error) => {
                return { error, value: null };
            });
        }),
        parseToken: (async (string) => {
            return await new Promise((resolve, reject) => {
                jsonwebtokenVerify(string, _options.clientPublicKey(), {
                    algorithms: ['ES512'],
                    issuer: _options.clientUrn(),
                    audience: _options.serverUrn(),
                    complete: true,
                }, (error, decoded) => {
                    if (error != null || decoded == null) {
                        reject(error);
                        return;
                    }
                    /** @type {any} */
                    const payload = decoded.payload;
                    resolve(payload);
                });
            });
        }),
        createRequestHash: (async (httpRequestData) => {
            return cryptoCreateHash('sha512').
                update(Buffer.from(httpRequestData.method, 'utf8')).
                update(Buffer.from([0])).
                update(Buffer.from(httpRequestData.url, 'utf8')).
                update(Buffer.from([0])).
                update(httpRequestData.body).
                digest().
                toString('base64url');
        }),
        verifyCredentialHandler: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const valitationResult = _self.credentialParamsSchema().validate({
                        token: req.header('token'),
                    });
                    if (valitationResult.error != null || valitationResult.value == null) {
                        console.error(valitationResult.error);
                        res.status(400).type('text/plain; charset=utf-8').end('400 Bad Request');
                        return;
                    }
                    const parseResult = await _self.tryPromise(_self.parseToken(valitationResult.value.token));
                    if (parseResult.error != null || parseResult.value == null) {
                        console.error(parseResult.error);
                        res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                        return;
                    }
                    res.locals.tokenPayload = parseResult.value;
                    next();
                })().catch((error) => {
                    next(error);
                });
            });
        }),
        requestBodyHandler: hold(() => {
            const it = expressRaw({
                inflate: true,
                limit: _options.httpRequestBodyMaxSize(),
                type: 'application/json',
                verify: undefined,
            });
            return it;
        }),
        verifyRequestHashHandler: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const requestHash = await _self.createRequestHash({
                        method: req.method,
                        url: `https://${req.hostname}${req.originalUrl}`,
                        headers: req.headers,
                        body: req.body,
                    });
                    if (requestHash != res.locals.tokenPayload.requestHash) {
                        res.status(401).type('text/plain; charset=utf-8').end('401 Unauthorized');
                        return;
                    }
                    next();
                })().catch((error) => {
                    next(error);
                });
            });
        }),
        patchHandler: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const validationResult = _self.patchParamsSchema().validate(JSON.parse(req.body.toString('utf8')));
                    if (validationResult.error != null || validationResult.value == null) {
                        throw validationResult.error;
                    }
                    const f = validationResult.value.f;
                    const x = validationResult.value.x;
                    /** @type {unknown} */
                    const scriptConstructor = await _options.eval(f);
                    if (!(typeof scriptConstructor == 'function' && scriptConstructor.length == 1)) {
                        throw new Error('Invalid Script Constructor');
                    }
                    const u = await _options.u();
                    /** @type {unknown} */
                    const script = await scriptConstructor({ req, res, next, scriptConstructor, x, u });
                    if (!(typeof script == 'function' && script.length == 1)) {
                        throw new Error('Invalid Script');
                    }
                    await script({ req, res, next, script, x, u });
                })().catch((error) => {
                    next(error);
                });
            });
        }),
    });

    /** @type {import('.').Ipp5AdlibitumServer.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5AdlibitumServer: (() => {
            return _self;
        }),
        expressRouter: hold(() => {
            const it = ExpressRouter({
                caseSensitive: false,
                mergeParams: false,
                strict: false,
            });
            it.patch('/',
                _self.verifyCredentialHandler(),
                _self.requestBodyHandler(),
                _self.verifyRequestHashHandler(),
                _self.patchHandler()
            );
            return it;
        }),
    });

    return self;

});

/** @type {import('.').Ipp5AdlibitumServer.Companion} */
const companion = ({});

const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5AdlibitumServer };
