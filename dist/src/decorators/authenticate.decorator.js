"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const keys_1 = require("../keys");
/**
 * Mark a controller method as requiring authenticated user.
 *
 * @param strategyName The name of the authentication strategy to use.
 * @param options Additional options to configure the authentication.
 */
function authenticate(strategyName, options) {
    return context_1.MethodDecoratorFactory.createDecorator(keys_1.AUTHENTICATION_METADATA_KEY, {
        strategy: strategyName,
        options: options || {},
    });
}
exports.authenticate = authenticate;
/**
 * Fetch authentication metadata stored by `@authenticate` decorator.
 *
 * @param controllerClass Target controller
 * @param methodName Target method
 */
function getAuthenticateMetadata(controllerClass, methodName) {
    return context_1.MetadataInspector.getMethodMetadata(keys_1.AUTHENTICATION_METADATA_KEY, controllerClass.prototype, methodName);
}
exports.getAuthenticateMetadata = getAuthenticateMetadata;
//# sourceMappingURL=authenticate.decorator.js.map