import { Strategy } from 'passport';
import { AuthenticateFn, UserProfile } from './types';
import { AuthenticationMetadata } from './decorators';
import { BindingKey } from '@loopback/context';
import { MetadataAccessor } from '@loopback/metadata';
/**
 * Binding keys used by this component.
 */
export declare namespace AuthenticationBindings {
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
    const STRATEGY: BindingKey<Strategy | undefined>;
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
    const AUTH_ACTION: BindingKey<AuthenticateFn>;
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
    const METADATA: BindingKey<AuthenticationMetadata | undefined>;
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
    const CURRENT_USER: BindingKey<UserProfile | undefined>;
}
/**
 * The key used to store log-related via @loopback/metadata and reflection.
 */
export declare const AUTHENTICATION_METADATA_KEY: MetadataAccessor<AuthenticationMetadata, MethodDecorator>;
