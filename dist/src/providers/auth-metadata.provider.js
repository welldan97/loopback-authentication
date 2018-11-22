'use strict';
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@loopback/core');
const context_1 = require('@loopback/context');
const decorators_1 = require('../decorators');
/**
 * @description Provides authentication metadata of a controller method
 * @example `context.bind('authentication.meta')
 *   .toProvider(AuthMetadataProvider)`
 */
let AuthMetadataProvider = class AuthMetadataProvider {
  constructor(controllerClass, methodName) {
    this.controllerClass = controllerClass;
    this.methodName = methodName;
  }
  /**
   * @returns AuthenticationMetadata
   */
  value() {
    if (!this.controllerClass || !this.methodName) return undefined;
    return decorators_1.getAuthenticateMetadata(
      this.controllerClass,
      this.methodName,
    );
  }
};
AuthMetadataProvider = __decorate(
  [
    __param(
      0,
      context_1.inject(core_1.CoreBindings.CONTROLLER_CLASS, {
        optional: true,
      }),
    ),
    __param(
      1,
      context_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME, {
        optional: true,
      }),
    ),
    __metadata('design:paramtypes', [Object, String]),
  ],
  AuthMetadataProvider,
);
exports.AuthMetadataProvider = AuthMetadataProvider;
//# sourceMappingURL=auth-metadata.provider.js.map
