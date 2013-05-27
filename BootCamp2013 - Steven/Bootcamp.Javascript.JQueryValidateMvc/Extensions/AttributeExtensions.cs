using System;
using System.Collections.Generic;

namespace Bootcamp.Javascript.JQueryValidateMvc.Extensions
{
    public static class AttributeExtensions
    {
        public static IDictionary<string, object> WithClass(this IDictionary<string, object> dictionary, string value)
        {
            return dictionary.WithClassIf(value, () => true);
        }

        public static IDictionary<string, object> WithClassIf(this IDictionary<string, object> dictionary, string value, Func<bool> condition)
        {
            if (dictionary == null)
                return null;

            var conditionResult = condition();
            if (conditionResult)
            {
                if (dictionary.ContainsKey("class"))
                {
                    dictionary["class"] = string.Format("{0} {1}", dictionary["class"], value);
                }
                else
                {
                    dictionary["class"] = value;
                }
            }

            return dictionary;
        }

        public static IDictionary<string, object> With(this IDictionary<string, object> dictionary, string key, object value)
        {
            if (dictionary == null)
                return null;

            dictionary[key] = value;

            return dictionary;
        }
    }
}