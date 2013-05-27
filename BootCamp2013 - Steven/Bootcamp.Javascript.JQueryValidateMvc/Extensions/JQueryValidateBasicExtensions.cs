using System;
using System.Collections.Generic;

namespace Bootcamp.Javascript.JQueryValidateMvc.Extensions
{
    public static class JQueryValidateBasicExtensions
    {
        public static IDictionary<string, object> WithDataVal(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary["data-val"] = Boolean.TrueString.ToLower();
            
            return dictionary;
        }

        public static IDictionary<string, object> WithDataValRequired(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-required"] = null;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValDigits(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-digits"] = null;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValNumber(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-number"] = null;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValRange(this IDictionary<string, object> dictionary, double min, double max)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-range"] = null;
            dictionary["data-val-range-min"] = min;
            dictionary["data-val-range-max"] = max;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValLengthExact(this IDictionary<string, object> dictionary, int length)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-length"] = null;
            dictionary["data-val-length-min"] = length;
            dictionary["data-val-length-max"] = length;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValLengthMin(this IDictionary<string, object> dictionary, int length)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-length"] = null;
            dictionary["data-val-length-min"] = length;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValLengthMax(this IDictionary<string, object> dictionary, int length)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-length"] = null;
            dictionary["data-val-length-max"] = length;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValLengthRange(this IDictionary<string, object> dictionary, int min, int max)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-length"] = null;
            dictionary["data-val-length-min"] = min;
            dictionary["data-val-length-max"] = max;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValEmail(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-email"] = null;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValUrl(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-url"] = null;

            return dictionary;
        }

        public static IDictionary<string, object> WithDataValEqualToOther(this IDictionary<string, object> dictionary, string other)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-equalto"] = null;
            dictionary["data-val-equalto-other"] = other;

            return dictionary;
        }
    }
}