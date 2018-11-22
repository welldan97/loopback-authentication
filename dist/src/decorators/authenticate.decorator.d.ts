import { Constructor } from '@loopback/context';
/**
 * Authentication metadata stored via Reflection API
 */
export interface AuthenticationMetadata {
    strategy: string;
    options?: Object;
}
/**
 * Mark a controller method as requiring authenticated user.
 *
 * @param strategyName The name of the authentication strategy to use.
 * @param options Additional options to configure the authentication.
 */
export declare function authenticate(strategyName: string, options?: Object): MethodDecorator;
/**
 * Fetch authentication metadata stored by `@authenticate` decorator.
 *
 * @param controllerClass Target controller
 * @param methodName Target method
 */
export declare function getAuthenticateMetadata(controllerClass: Constructor<{}>, methodName: string): AuthenticationMetadata | undefined;
