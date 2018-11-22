import { Request } from '@loopback/rest';
/**
 * interface definition of a function which accepts a request
 * and returns an authenticated user
 */
export interface AuthenticateFn {
    (request: Request): Promise<UserProfile | undefined>;
}
/**
 * interface definition of a user profile
 * http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
 */
export interface UserProfile {
    id: string;
    name?: string;
    email?: string;
}
