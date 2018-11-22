import { Getter, Provider, Setter } from '@loopback/context';
import { Request } from '@loopback/rest';
import { Strategy } from 'passport';
import { AuthenticateFn, UserProfile } from '../types';
/**
 * @description Provider of a function which authenticates
 * @example `context.bind('authentication_key')
 *   .toProvider(AuthenticateActionProvider)`
 */
export declare class AuthenticateActionProvider implements Provider<AuthenticateFn> {
    readonly getStrategy: Getter<Strategy>;
    readonly setCurrentUser: Setter<UserProfile>;
    constructor(getStrategy: Getter<Strategy>, setCurrentUser: Setter<UserProfile>);
    /**
     * @returns authenticateFn
     */
    value(): AuthenticateFn;
    /**
     * The implementation of authenticate() sequence action.
     * @param request The incoming request provided by the REST layer
     */
    action(request: Request): Promise<UserProfile | undefined>;
}
