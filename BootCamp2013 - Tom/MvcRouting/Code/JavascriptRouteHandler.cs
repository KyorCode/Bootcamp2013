using System.Web;
using System.Web.Routing;

namespace MvcRouting.Code
{
    public class JavascriptRouteHandler : IRouteHandler
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            var filename = requestContext.RouteData.Values["filename"] as string;

            return new JavascriptHandler(filename);
        }
    }
}