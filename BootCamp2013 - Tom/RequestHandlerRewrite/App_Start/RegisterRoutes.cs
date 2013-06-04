using System.Web.Mvc;
using System.Web.Routing;
using RequestHandlerRewrite.App_Start;
using WebActivatorEx;

[assembly: PostApplicationStartMethod(typeof(RegisterRoutes), "Register")]
namespace RequestHandlerRewrite.App_Start
{
    public class RegisterRoutes
    {
        public static void Register()
        {
            var routes = RouteTable.Routes;
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{*favicon}", new { favicon = @"(.*/)?favicon.ico(/.*)?" });
            routes.IgnoreRoute("{*file}", new { file = @"(^|.*/)Scripts/([a-zA-Z0-9]+)\.(\d+)\.js" });

            AreaRegistration.RegisterAllAreas();

            routes.MapRoute(
                "Default",
                "{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}