"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
const providers_1 = require("./providers");
class AuthenticationComponent {
    // TODO(bajtos) inject configuration
    constructor() {
        this.providers = {
            [keys_1.AuthenticationBindings.AUTH_ACTION.key]: providers_1.AuthenticateActionProvider,
            [keys_1.AuthenticationBindings.METADATA.key]: providers_1.AuthMetadataProvider,
        };
    }
}
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map