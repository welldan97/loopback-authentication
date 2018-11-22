import { Constructor, Provider } from '@loopback/context';
import { AuthenticationMetadata } from '../decorators';
/**
 * @description Provides authentication metadata of a controller method
 * @example `context.bind('authentication.meta')
 *   .toProvider(AuthMetadataProvider)`
 */
export declare class AuthMetadataProvider implements Provider<AuthenticationMetadata | undefined> {
    private readonly controllerClass;
    private readonly methodName;
    constructor(controllerClass: Constructor<{}>, methodName: string);
    /**
     * @returns AuthenticationMetadata
     */
    value(): AuthenticationMetadata | undefined;
}
