declare module "lodash" {
    import Lodash = require('lodash');
    
    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.mapValues
         * TValue is the type of the property values of T.
         * TResult is the type output by the ObjectIterator function
         */
        mapValues<TValue, TResult>(callback: Lodash.ObjectIterator<TValue, TResult>, thisArg?: any): Lodash.LoDashImplicitObjectWrapper<Lodash.Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the property specified by pluck.
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(pluck: string): Lodash.LoDashImplicitObjectWrapper<Lodash.Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties on the object specified by pluck.
         * T should be a Dictionary<Dictionary<Dictionary<TResult>>>
         */
        mapValues<TResult>(pluck: string, where: Lodash.Dictionary<TResult>): Lodash.LoDashImplicitArrayWrapper<Lodash.Dictionary<boolean>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties of each object in the values of T
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(where: Lodash.Dictionary<TResult>): Lodash.LoDashImplicitArrayWrapper<boolean>;
    }
}