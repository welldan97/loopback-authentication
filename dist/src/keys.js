"use strict";
// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const metadata_1 = require("@loopback/metadata");
/**
 * Binding keys used by this component.
 */
var AuthenticationBindings;
(function (AuthenticationBindings) {
    /**
     * Key used to bind an authentication strategy to the context for the
     * authentication function to use.
     *
     * ```ts
     * server
     *   .bind(AuthenticationBindings.STRATEGY)
     *   .toProvider(MyPassportStrategyProvider);
     * ```
     */
    AuthenticationBindings.STRATEGY = context_1.BindingKey.create('authentication.strategy');
    /**
     * Key used to inject the authentication function into the sequence.
     *
     * ```ts
     * class MySequence implements SequenceHandler {
     *   constructor(
     *     @inject(AuthenticationBindings.AUTH_ACTION)
     *     protected authenticateRequest: AuthenticateFn,
     *     // ... other sequence action injections
     *   ) {}
     *
     *   async handle(context: RequestContext) {
     *     try {
     *       const {request, response} = context;
     *       const route = this.findRoute(request);
     *
     *      // Authenticate
     *       await this.authenticateRequest(request);
     *
     *       // Authentication successful, proceed to invoke controller
     *       const args = await this.parseParams(request, route);
     *       const result = await this.invoke(route, args);
     *       this.send(response, result);
     *     } catch (err) {
     *       this.reject(context, err);
     *     }
     *   }
     * }
     * ```
     */
    AuthenticationBindings.AUTH_ACTION = context_1.BindingKey.create('authentication.actions.authenticate');
    /**
     * Key used to inject authentication metadata, which is used to determine
     * whether a request requires authentication or not.
     *
     * ```ts
     * class MyPassportStrategyProvider implements Provider<Strategy | undefined> {
     *   constructor(
     *     @inject(AuthenticationBindings.METADATA)
     *     private metadata: AuthenticationMetadata,
     *   ) {}
     *   value(): ValueOrPromise<Strategy | undefined> {
     *     if (this.metadata) {
     *       const name = this.metadata.strategy;
     *       // logic to determine which authentication strategy to return
     *     }
     *   }
     * }
     * ```
     */
    AuthenticationBindings.METADATA = context_1.BindingKey.create('authentication.operationMetadata');
    /**
     * Key used to inject the user instance retrieved by the
     * authentication function
     *
     * class MyController {
     *   constructor(
     *     @inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
     *   ) {}
     *
     * // ... routes that may need authentication
     * }
     */
    AuthenticationBindings.CURRENT_USER = context_1.BindingKey.create('authentication.currentUser');
})(AuthenticationBindings = exports.AuthenticationBindings || (exports.AuthenticationBindings = {}));
/**
 * The key used to store log-related via @loopback/metadata and reflection.
 */
exports.AUTHENTICATION_METADATA_KEY = metadata_1.MetadataAccessor.create('authentication.operationsMetadata');
//# sourceMappingURL=keys.js.map