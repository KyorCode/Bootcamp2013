using System.Collections.Generic;

namespace Bootcamp.Javascript.JQueryValidateMvc.Extensions
{
    public static class JQueryValidateCustomExtensions
    {
        public static IDictionary<string, object> WithDataValInsznummer(this IDictionary<string, object> dictionary)
        {
            if (dictionary == null)
                return null;

            dictionary.WithDataVal();
            dictionary["data-val-insznummer"] = null;

            return dictionary;
        }
    }
}