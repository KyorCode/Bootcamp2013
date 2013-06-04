using System.Web.Mvc;
using System.Web.Routing;
using MvcRouting.App_Start;
using MvcRouting.Code;
using WebActivatorEx;

[assembly: PostApplicationStartMethod(typeof(RegisterRoutes), "Register")]
namespace MvcRouting.App_Start
{
    public class RegisterRoutes
    {
        public static void Register()
        {
            var routes = RouteTable.Routes;
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{*favicon}", new { favicon = @"(.*/)?favicon.ico(/.*)?" });

            AreaRegistration.RegisterAllAreas();
            
            routes.Add(
                "javascriptRoute",
                new Route("Scripts/{*filename}",
                new JavascriptRouteHandler()));

            routes.MapRoute(
                "Default",
                "{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}