"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const keys_1 = require("../keys");
const strategy_adapter_1 = require("../strategy-adapter");
/**
 * @description Provider of a function which authenticates
 * @example `context.bind('authentication_key')
 *   .toProvider(AuthenticateActionProvider)`
 */
let AuthenticateActionProvider = class AuthenticateActionProvider {
    constructor(
    // The provider is instantiated for Sequence constructor,
    // at which time we don't have information about the current
    // route yet. This information is needed to determine
    // what auth strategy should be used.
    // To solve this, we are injecting a getter function that will
    // defer resolution of the strategy until authenticate() action
    // is executed.
    getStrategy, setCurrentUser) {
        this.getStrategy = getStrategy;
        this.setCurrentUser = setCurrentUser;
    }
    /**
     * @returns authenticateFn
     */
    value() {
        return request => this.action(request);
    }
    /**
     * The implementation of authenticate() sequence action.
     * @param request The incoming request provided by the REST layer
     */
    async action(request) {
        const strategy = await this.getStrategy();
        if (!strategy) {
            // The invoked operation does not require authentication.
            return undefined;
        }
        if (!strategy.authenticate) {
            throw new Error('invalid strategy parameter');
        }
        const strategyAdapter = new strategy_adapter_1.StrategyAdapter(strategy);
        const user = await strategyAdapter.authenticate(request);
        this.setCurrentUser(user);
        return user;
    }
};
AuthenticateActionProvider = __decorate([
    __param(0, context_1.inject.getter(keys_1.AuthenticationBindings.STRATEGY)),
    __param(1, context_1.inject.setter(keys_1.AuthenticationBindings.CURRENT_USER)),
    __metadata("design:paramtypes", [Function, Function])
], AuthenticateActionProvider);
exports.AuthenticateActionProvider = AuthenticateActionProvider;
//# sourceMappingURL=authentication.provider.js.map